/**
 * DISCRETE MATH HUB - MAIN APPLICATION CONTROLLER
 * Quản lý Định tuyến SPA, Trạng thái Học tập, Quiz & Tích hợp Công cụ
 */

const AppState = {
  activeTab: 'dashboard',
  currentChapterId: 'c1',
  currentLessonId: 'l1_1',
  theme: localStorage.getItem('dm_theme') || 'light',
  completedLessons: JSON.parse(localStorage.getItem('dm_completed_lessons') || '[]'),
  quizHistory: JSON.parse(localStorage.getItem('dm_quiz_history') || '[]'),
  bookmarks: JSON.parse(localStorage.getItem('dm_bookmarks') || '[]'),

  // Quiz state
  quizFilterChapter: 'all',
  quizFilterLesson: 'all',
  quizFilterDiff: 'all',
  quizMode: 'practice', // 'practice' | 'exam'
  examQuestions: [],
  userAnswers: {}, // { questionId: selectedOptionIndex }
  isExamSubmitted: false,
  examTimerInterval: null,
  examTimeRemaining: 25 * 60 // 25 mins in seconds
};

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initSidebar();
  initNavigation();
  initSearch();
  initDashboard();
  initTheoryReader();
  initQuizSystem();
  initTools();
  renderMath();
});

/* ==========================================================================
   1. Theme Management (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  document.documentElement.setAttribute('data-theme', AppState.theme);
  updateThemeIcon();

  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      AppState.theme = AppState.theme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', AppState.theme);
      localStorage.setItem('dm_theme', AppState.theme);
      updateThemeIcon();
    });
  }
}

function updateThemeIcon() {
  const icon = document.getElementById('themeIcon');
  if (icon) {
    icon.textContent = AppState.theme === 'light' ? '🌙' : '☀️';
  }
}

/* ==========================================================================
   2. Navigation & Routing
   ========================================================================== */
function initNavigation() {
  const navBtns = document.querySelectorAll('.nav-item-btn');
  navBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetTab = btn.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });

  // Mobile menu button
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const sidebar = document.getElementById('appSidebar');
  if (mobileMenuBtn && sidebar) {
    mobileMenuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('mobile-open');
    });
  }
}

function switchTab(tabId) {
  AppState.activeTab = tabId;

  // Update nav buttons
  document.querySelectorAll('.nav-item-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
  });

  // Update tab views
  document.querySelectorAll('.content-section').forEach(sec => {
    sec.classList.remove('active');
  });

  const targetSec = document.getElementById(`${tabId}Section`);
  if (targetSec) {
    targetSec.classList.add('active');
  }

  // Close mobile sidebar if open
  const sidebar = document.getElementById('appSidebar');
  if (sidebar) sidebar.classList.remove('mobile-open');

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Tab specific refreshes
  if (tabId === 'dashboard') updateDashboardStats();
  if (tabId === 'quiz') refreshQuizList();
  renderMath();
}

/* ==========================================================================
   3. Sidebar & Course Tree
   ========================================================================== */
function initSidebar() {
  const accordionContainer = document.getElementById('chapterAccordion');
  if (!accordionContainer) return;

  accordionContainer.innerHTML = '';

  THEORY_DATA.forEach((chapter, chIdx) => {
    const group = document.createElement('div');
    group.className = `chapter-group ${chapter.id === AppState.currentChapterId ? 'open' : ''}`;
    group.id = `group_${chapter.id}`;

    const completedCount = chapter.lessons.filter(l => AppState.completedLessons.includes(l.id)).length;

    group.innerHTML = `
      <button class="chapter-header" data-chapter="${chapter.id}">
        <span>${chapter.title}</span>
        <span class="chapter-chevron">▶</span>
      </button>
      <ul class="lesson-list">
        ${chapter.lessons.map(l => `
          <li>
            <button class="lesson-item-btn ${l.id === AppState.currentLessonId ? 'active' : ''}" data-lesson="${l.id}" data-chapter="${chapter.id}">
              <span class="lesson-name">${l.title}</span>
              ${AppState.completedLessons.includes(l.id) ? '<span class="lesson-check-icon">✓</span>' : ''}
            </button>
          </li>
        `).join('')}
      </ul>
    `;

    accordionContainer.appendChild(group);
  });

  // Event listeners for accordion headers
  accordionContainer.querySelectorAll('.chapter-header').forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.closest('.chapter-group');
      parent.classList.toggle('open');
    });
  });

  // Event listeners for lesson buttons
  accordionContainer.querySelectorAll('.lesson-item-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const chId = btn.getAttribute('data-chapter');
      const lId = btn.getAttribute('data-lesson');
      loadLesson(chId, lId);
      switchTab('theory');
    });
  });
}

/* ==========================================================================
   4. Dashboard Overview
   ========================================================================== */
function initDashboard() {
  updateDashboardStats();
  renderDashboardChapterCards();

  // Quick Action Buttons
  const startLearningBtn = document.getElementById('dashStartLearningBtn');
  if (startLearningBtn) {
    startLearningBtn.addEventListener('click', () => {
      loadLesson(AppState.currentChapterId, AppState.currentLessonId);
      switchTab('theory');
    });
  }

  const startQuizBtn = document.getElementById('dashStartQuizBtn');
  if (startQuizBtn) {
    startQuizBtn.addEventListener('click', () => {
      switchTab('quiz');
    });
  }

  const openLabBtn = document.getElementById('dashOpenLabBtn');
  if (openLabBtn) {
    openLabBtn.addEventListener('click', () => {
      switchTab('tools');
    });
  }
}

function updateDashboardStats() {
  const totalLessons = THEORY_DATA.reduce((acc, c) => acc + c.lessons.length, 0);
  const completed = AppState.completedLessons.length;
  const progressPercent = Math.round((completed / totalLessons) * 100);

  const totalQuestions = QUIZ_DATA.length;
  const history = AppState.quizHistory;
  const avgScore = history.length > 0
    ? Math.round(history.reduce((a, b) => a + (b.score / b.total) * 10, 0) / history.length * 10) / 10
    : 0;

  const statProgress = document.getElementById('statProgress');
  const statCompleted = document.getElementById('statCompleted');
  const statAvgScore = document.getElementById('statAvgScore');
  const statTotalQuestions = document.getElementById('statTotalQuestions');
  const progressBar = document.getElementById('dashProgressBar');

  if (statProgress) statProgress.textContent = `${progressPercent}%`;
  if (statCompleted) statCompleted.textContent = `${completed}/${totalLessons}`;
  if (statAvgScore) statAvgScore.textContent = history.length > 0 ? `${avgScore}/10` : '--';
  if (statTotalQuestions) statTotalQuestions.textContent = `${totalQuestions}+`;
  if (progressBar) progressBar.style.width = `${progressPercent}%`;
}

function renderDashboardChapterCards() {
  const container = document.getElementById('dashChapterCards');
  if (!container) return;

  container.innerHTML = THEORY_DATA.map((ch, idx) => {
    const completedInChapter = ch.lessons.filter(l => AppState.completedLessons.includes(l.id)).length;
    return `
      <div class="chapter-banner-card" onclick="loadLesson('${ch.id}', '${ch.lessons[0].id}'); switchTab('theory');">
        <div class="chapter-banner-left">
          <div class="chapter-num-badge">0${idx + 1}</div>
          <div>
            <h4 style="font-weight: 700; font-size: 1.05rem;">${ch.title}</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted);">${ch.subtitle}</p>
          </div>
        </div>
        <div style="text-align: right;">
          <span style="font-size: 0.85rem; font-weight: 600; color: var(--primary);">${completedInChapter}/${ch.lessons.length} bài</span>
          <div style="font-size: 1.1rem; color: var(--text-muted);">➔</div>
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   5. Theory Reader
   ========================================================================== */
function initTheoryReader() {
  loadLesson(AppState.currentChapterId, AppState.currentLessonId);

  const markCompletedBtn = document.getElementById('markCompletedBtn');
  if (markCompletedBtn) {
    markCompletedBtn.addEventListener('click', toggleLessonCompleted);
  }

  const takeLessonQuizBtn = document.getElementById('takeLessonQuizBtn');
  if (takeLessonQuizBtn) {
    takeLessonQuizBtn.addEventListener('click', () => {
      AppState.quizFilterChapter = AppState.currentChapterId;
      AppState.quizFilterLesson = AppState.currentLessonId;
      AppState.quizMode = 'practice';
      const chSelect = document.getElementById('quizChapterSelect');
      if (chSelect) chSelect.value = AppState.currentChapterId;
      updateQuizLessonOptions();
      const lSelect = document.getElementById('quizLessonSelect');
      if (lSelect) lSelect.value = AppState.currentLessonId;
      switchTab('quiz');
    });
  }
}

function loadLesson(chapterId, lessonId) {
  const chapter = THEORY_DATA.find(c => c.id === chapterId);
  if (!chapter) return;
  const lesson = chapter.lessons.find(l => l.id === lessonId);
  if (!lesson) return;

  AppState.currentChapterId = chapterId;
  AppState.currentLessonId = lessonId;

  // Update Sidebar active state
  document.querySelectorAll('.lesson-item-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lesson') === lessonId);
  });
  document.querySelectorAll('.chapter-group').forEach(grp => {
    if (grp.id === `group_${chapterId}`) grp.classList.add('open');
  });

  // Render Lesson Content
  const titleEl = document.getElementById('lessonTitle');
  const chapterTagEl = document.getElementById('lessonChapterTag');
  const readTimeEl = document.getElementById('lessonReadTime');
  const bodyEl = document.getElementById('lessonBody');
  const markBtn = document.getElementById('markCompletedBtn');

  if (titleEl) titleEl.textContent = lesson.title;
  if (chapterTagEl) chapterTagEl.textContent = chapter.title.split(':')[0];
  if (readTimeEl) readTimeEl.textContent = `⏱️ ${lesson.readingTime}`;

  if (bodyEl) {
    bodyEl.innerHTML = parseMarkdownToHtml(lesson.content);
  }

  // Update Completed Button state
  updateMarkCompletedBtn();

  // Setup Next / Previous Buttons
  renderLessonNavButtons(chapter, lesson);

  renderMath();
}

function updateMarkCompletedBtn() {
  const btn = document.getElementById('markCompletedBtn');
  if (!btn) return;
  const isDone = AppState.completedLessons.includes(AppState.currentLessonId);
  if (isDone) {
    btn.className = 'btn btn-outline';
    btn.innerHTML = '<span>✓</span> Đã hoàn thành (Bấm để hủy)';
  } else {
    btn.className = 'btn btn-primary';
    btn.innerHTML = '<span>✓</span> Đánh dấu đã học xong';
  }
}

function toggleLessonCompleted() {
  const lId = AppState.currentLessonId;
  const idx = AppState.completedLessons.indexOf(lId);
  if (idx > -1) {
    AppState.completedLessons.splice(idx, 1);
  } else {
    AppState.completedLessons.push(lId);
  }
  localStorage.setItem('dm_completed_lessons', JSON.stringify(AppState.completedLessons));
  updateMarkCompletedBtn();
  initSidebar();
  updateDashboardStats();
}

function renderLessonNavButtons(chapter, lesson) {
  const navContainer = document.getElementById('lessonNavButtons');
  if (!navContainer) return;

  // Flatten all lessons
  const allLessons = [];
  THEORY_DATA.forEach(c => {
    c.lessons.forEach(l => {
      allLessons.push({ chapterId: c.id, lessonId: l.id, title: l.title });
    });
  });

  const currentIndex = allLessons.findIndex(item => item.lessonId === lesson.id);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  navContainer.innerHTML = `
    ${prevLesson ? `
      <button class="btn btn-outline" onclick="loadLesson('${prevLesson.chapterId}', '${prevLesson.lessonId}')">
        ← Bài trước: ${prevLesson.title.split(' ')[0]}
      </button>
    ` : '<div></div>'}
    ${nextLesson ? `
      <button class="btn btn-primary" onclick="loadLesson('${nextLesson.chapterId}', '${nextLesson.lessonId}')">
        Bài tiếp theo: ${nextLesson.title.split(' ')[0]} →
      </button>
    ` : '<div></div>'}
  `;
}

/* ==========================================================================
   6. Quiz & Exam System
   ========================================================================== */
function initQuizSystem() {
  initQuizFilters();
  refreshQuizList();

  // Mode switcher buttons
  const practiceModeBtn = document.getElementById('practiceModeBtn');
  const examModeBtn = document.getElementById('examModeBtn');
  if (practiceModeBtn && examModeBtn) {
    practiceModeBtn.addEventListener('click', () => {
      setQuizMode('practice');
    });
    examModeBtn.addEventListener('click', () => {
      setQuizMode('exam');
    });
  }

  // Exam Submit Button
  const submitExamBtn = document.getElementById('submitExamBtn');
  if (submitExamBtn) {
    submitExamBtn.addEventListener('click', submitExam);
  }
}

function initQuizFilters() {
  const chSelect = document.getElementById('quizChapterSelect');
  if (chSelect) {
    chSelect.innerHTML = `
      <option value="all">Tất cả các chương</option>
      ${THEORY_DATA.map(c => `<option value="${c.id}">${c.title}</option>`).join('')}
    `;
    chSelect.addEventListener('change', (e) => {
      AppState.quizFilterChapter = e.target.value;
      updateQuizLessonOptions();
      refreshQuizList();
    });
  }

  const lSelect = document.getElementById('quizLessonSelect');
  if (lSelect) {
    lSelect.addEventListener('change', (e) => {
      AppState.quizFilterLesson = e.target.value;
      refreshQuizList();
    });
  }

  const diffSelect = document.getElementById('quizDiffSelect');
  if (diffSelect) {
    diffSelect.addEventListener('change', (e) => {
      AppState.quizFilterDiff = e.target.value;
      refreshQuizList();
    });
  }
}

function updateQuizLessonOptions() {
  const lSelect = document.getElementById('quizLessonSelect');
  if (!lSelect) return;

  if (AppState.quizFilterChapter === 'all') {
    lSelect.innerHTML = '<option value="all">Tất cả các bài học</option>';
    AppState.quizFilterLesson = 'all';
    return;
  }

  const chapter = THEORY_DATA.find(c => c.id === AppState.quizFilterChapter);
  if (!chapter) return;

  lSelect.innerHTML = `
    <option value="all">Tất cả bài trong chương</option>
    ${chapter.lessons.map(l => `<option value="${l.id}">${l.title}</option>`).join('')}
  `;
  AppState.quizFilterLesson = 'all';
}

function setQuizMode(mode) {
  AppState.quizMode = mode;
  document.getElementById('practiceModeBtn').classList.toggle('active', mode === 'practice');
  document.getElementById('examModeBtn').classList.toggle('active', mode === 'exam');

  const examBar = document.getElementById('examActionBar');
  if (examBar) {
    examBar.style.display = mode === 'exam' ? 'flex' : 'none';
  }

  if (mode === 'exam') {
    startExam();
  } else {
    stopExamTimer();
    AppState.userAnswers = {};
    AppState.isExamSubmitted = false;
    refreshQuizList();
  }
}

function startExam() {
  // Pick 20 questions based on filter or random
  let pool = getFilteredQuestions();
  if (pool.length < 10) {
    pool = [...QUIZ_DATA];
  }
  // Shuffle
  AppState.examQuestions = [...pool].sort(() => Math.random() - 0.5).slice(0, 20);
  AppState.userAnswers = {};
  AppState.isExamSubmitted = false;
  AppState.examTimeRemaining = 25 * 60; // 25 mins

  startExamTimer();
  renderExamQuestions();
}

function startExamTimer() {
  stopExamTimer();
  updateTimerDisplay();

  AppState.examTimerInterval = setInterval(() => {
    AppState.examTimeRemaining--;
    updateTimerDisplay();
    if (AppState.examTimeRemaining <= 0) {
      stopExamTimer();
      alert("Hết giờ làm bài! Hệ thống đang tự động nộp bài của bạn.");
      submitExam();
    }
  }, 1000);
}

function stopExamTimer() {
  if (AppState.examTimerInterval) {
    clearInterval(AppState.examTimerInterval);
    AppState.examTimerInterval = null;
  }
}

function updateTimerDisplay() {
  const timerEl = document.getElementById('examTimerDisplay');
  if (!timerEl) return;
  const m = Math.floor(AppState.examTimeRemaining / 60);
  const s = AppState.examTimeRemaining % 60;
  timerEl.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function submitExam() {
  stopExamTimer();
  AppState.isExamSubmitted = true;

  const questions = AppState.examQuestions;
  let correctCount = 0;

  questions.forEach(q => {
    if (AppState.userAnswers[q.id] === q.correctAnswer) {
      correctCount++;
    }
  });

  const score10 = Math.round((correctCount / questions.length) * 100) / 10;

  // Record to history
  AppState.quizHistory.push({
    date: new Date().toISOString(),
    score: correctCount,
    total: questions.length,
    score10
  });
  localStorage.setItem('dm_quiz_history', JSON.stringify(AppState.quizHistory));
  updateDashboardStats();

  // Show result modal or summary
  renderExamQuestions();
  showExamResultModal(correctCount, questions.length, score10);
}

function showExamResultModal(correct, total, score10) {
  let feedback = "";
  if (score10 >= 9) feedback = "Xuất sắc! Bạn đã nắm vững kiến thức phần này!";
  else if (score10 >= 7) feedback = "Khá tốt! Bạn chỉ cần ôn tập thêm một số câu hỏi vận dụng.";
  else if (score10 >= 5) feedback = "Đạt yêu cầu! Hãy xem lại phần giải thích chi tiết các câu làm sai.";
  else feedback = "Cần cố gắng thêm! Hãy đọc lại lý thuyết từng bài trước khi làm lại nhé.";

  alert(`KẾT QUẢ BÀI THI:\n- Số câu đúng: ${correct}/${total}\n- Điểm số: ${score10}/10\n- Nhận xét: ${feedback}\n\nCuộn xuống để xem đáp án và giải thích chi tiết từng câu!`);
}

function getFilteredQuestions() {
  return QUIZ_DATA.filter(q => {
    if (AppState.quizFilterChapter !== 'all' && q.chapterId !== AppState.quizFilterChapter) return false;
    if (AppState.quizFilterLesson !== 'all' && q.lessonId !== AppState.quizFilterLesson) return false;
    if (AppState.quizFilterDiff !== 'all' && q.difficulty !== AppState.quizFilterDiff) return false;
    return true;
  });
}

function refreshQuizList() {
  if (AppState.quizMode === 'exam') {
    renderExamQuestions();
    return;
  }

  const container = document.getElementById('quizQuestionsContainer');
  if (!container) return;

  const questions = getFilteredQuestions();
  const countBadge = document.getElementById('quizTotalCountBadge');
  if (countBadge) countBadge.textContent = `${questions.length} câu hỏi`;

  if (questions.length === 0) {
    container.innerHTML = `
      <div class="card" style="text-align: center; padding: 3rem;">
        <p style="font-size: 1.1rem; color: var(--text-muted);">Không tìm thấy câu hỏi phù hợp với bộ lọc!</p>
        <button class="btn btn-outline" style="margin-top: 1rem;" onclick="resetQuizFilters()">Đặt lại bộ lọc</button>
      </div>
    `;
    return;
  }

  container.innerHTML = questions.map((q, idx) => `
    <div class="quiz-card" id="qcard_${q.id}">
      <div class="quiz-question-header">
        <span class="question-badge">Câu ${idx + 1} • ${q.lessonTitle}</span>
        <span class="difficulty-badge ${getDiffClass(q.difficulty)}">${q.difficulty}</span>
      </div>
      <div class="quiz-question-text">${q.question}</div>
      <div class="quiz-options-list">
        ${q.options.map((opt, optIdx) => `
          <button class="quiz-option-btn" data-qid="${q.id}" data-opt="${optIdx}" onclick="handlePracticeOptionClick('${q.id}', ${optIdx})">
            <span class="option-prefix">${String.fromCharCode(65 + optIdx)}</span>
            <span class="option-text">${opt}</span>
          </button>
        `).join('')}
      </div>
      <div class="quiz-explanation-box" id="expl_${q.id}" style="display: none;">
        <div class="explanation-header">💡 Giải thích chi tiết:</div>
        <p>${q.explanation}</p>
      </div>
    </div>
  `).join('');

  renderMath();
}

function renderExamQuestions() {
  const container = document.getElementById('quizQuestionsContainer');
  if (!container) return;

  const questions = AppState.examQuestions;
  const countBadge = document.getElementById('quizTotalCountBadge');
  if (countBadge) countBadge.textContent = `${questions.length} câu thi`;

  container.innerHTML = questions.map((q, idx) => {
    const selectedOpt = AppState.userAnswers[q.id];
    const isSubmitted = AppState.isExamSubmitted;

    return `
      <div class="quiz-card" id="qcard_${q.id}">
        <div class="quiz-question-header">
          <span class="question-badge">Câu ${idx + 1} • ${q.lessonTitle}</span>
          <span class="difficulty-badge ${getDiffClass(q.difficulty)}">${q.difficulty}</span>
        </div>
        <div class="quiz-question-text">${q.question}</div>
        <div class="quiz-options-list">
          ${q.options.map((opt, optIdx) => {
            let stateClass = "";
            if (selectedOpt === optIdx) stateClass = "selected";
            if (isSubmitted) {
              if (optIdx === q.correctAnswer) stateClass = "correct";
              else if (selectedOpt === optIdx && optIdx !== q.correctAnswer) stateClass = "wrong";
            }
            return `
              <button class="quiz-option-btn ${stateClass}" ${isSubmitted ? 'disabled' : ''} onclick="handleExamOptionSelect('${q.id}', ${optIdx})">
                <span class="option-prefix">${String.fromCharCode(65 + optIdx)}</span>
                <span class="option-text">${opt}</span>
              </button>
            `;
          }).join('')}
        </div>
        ${isSubmitted ? `
          <div class="quiz-explanation-box">
            <div class="explanation-header">${selectedOpt === q.correctAnswer ? '✅ Chính xác' : '❌ Chưa chính xác'} • Đáp án đúng: ${String.fromCharCode(65 + q.correctAnswer)}</div>
            <p>${q.explanation}</p>
          </div>
        ` : ''}
      </div>
    `;
  }).join('');

  renderMath();
}

function handlePracticeOptionClick(qid, optIdx) {
  const card = document.getElementById(`qcard_${qid}`);
  if (!card) return;

  const q = QUIZ_DATA.find(item => item.id === qid);
  if (!q) return;

  const optionBtns = card.querySelectorAll('.quiz-option-btn');
  optionBtns.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correctAnswer) {
      btn.classList.add('correct');
    } else if (idx === optIdx && idx !== q.correctAnswer) {
      btn.classList.add('wrong');
    }
  });

  const explBox = document.getElementById(`expl_${qid}`);
  if (explBox) explBox.style.display = 'block';
}

function handleExamOptionSelect(qid, optIdx) {
  if (AppState.isExamSubmitted) return;
  AppState.userAnswers[qid] = optIdx;

  const card = document.getElementById(`qcard_${qid}`);
  if (card) {
    card.querySelectorAll('.quiz-option-btn').forEach((btn, idx) => {
      btn.classList.toggle('selected', idx === optIdx);
    });
  }
}

function getDiffClass(diff) {
  if (diff === 'Nhận biết') return 'diff-easy';
  if (diff === 'Thông hiểu') return 'diff-medium';
  return 'diff-hard';
}

function resetQuizFilters() {
  AppState.quizFilterChapter = 'all';
  AppState.quizFilterLesson = 'all';
  AppState.quizFilterDiff = 'all';
  document.getElementById('quizChapterSelect').value = 'all';
  updateQuizLessonOptions();
  document.getElementById('quizDiffSelect').value = 'all';
  refreshQuizList();
}

/* ==========================================================================
   7. Interactive Tools (Labs)
   ========================================================================== */
function initTools() {
  // Tab switcher inside Tools section
  const toolBtns = document.querySelectorAll('.tool-tab-btn');
  toolBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const toolId = btn.getAttribute('data-tool');
      toolBtns.forEach(b => b.classList.toggle('active', b === btn));
      document.querySelectorAll('.tool-panel').forEach(p => p.classList.remove('active'));
      const activePanel = document.getElementById(`panel_${toolId}`);
      if (activePanel) activePanel.classList.add('active');
    });
  });

  initTruthTableToolUI();
  initKMapToolUI();
  initCombinatoricsToolUI();
  initRelationToolUI();
}

/* --- Lab 1: Truth Table UI --- */
function initTruthTableToolUI() {
  const calcBtn = document.getElementById('calcTruthTableBtn');
  const input = document.getElementById('logicExprInput');
  const resultDiv = document.getElementById('truthTableResult');

  if (!calcBtn || !input) return;

  const execute = () => {
    const expr = input.value.trim();
    if (!expr) {
      resultDiv.innerHTML = '<div style="color: var(--danger); padding: 1rem;">Vui lòng nhập biểu thức logic!</div>';
      return;
    }

    const res = window.TruthTableTool.generate(expr);
    if (res.error) {
      resultDiv.innerHTML = `<div style="color: var(--danger); background: var(--danger-light); padding: 1rem; border-radius: var(--radius-md);">Lỗi cú pháp: ${res.error}</div>`;
      return;
    }

    let summaryBadge = "";
    if (res.isTautology) summaryBadge = `<span style="background: var(--success-light); color: var(--success); padding: 0.3rem 0.8rem; border-radius: var(--radius-full); font-weight: 700;">✓ HẰNG ĐÚNG (Tautology)</span>`;
    else if (res.isContradiction) summaryBadge = `<span style="background: var(--danger-light); color: var(--danger); padding: 0.3rem 0.8rem; border-radius: var(--radius-full); font-weight: 700;">✗ HẰNG SAI / MÂU THUẪN (Contradiction)</span>`;
    else summaryBadge = `<span style="background: var(--info-light); color: var(--info); padding: 0.3rem 0.8rem; border-radius: var(--radius-full); font-weight: 700;">⚖ KHẢ THỎA / TIẾP LIÊN (Contingency)</span>`;

    let html = `
      <div style="margin: 1.5rem 0; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
        <div><strong>Kết luận:</strong> ${summaryBadge}</div>
        <div style="font-size: 0.9rem; color: var(--text-muted);">${res.totalRows} dòng (${res.onesCount} Đúng, ${res.zerosCount} Sai)</div>
      </div>
      <div style="overflow-x: auto;">
        <table class="lesson-body table" style="width: 100%;">
          <thead>
            <tr>
              ${res.variables.map(v => `<th>${v}</th>`).join('')}
              <th style="background: var(--primary-light); color: var(--primary); font-weight: 800;">${expr}</th>
            </tr>
          </thead>
          <tbody>
            ${res.rows.map(r => `
              <tr>
                ${res.variables.map(v => `<td>${r.env[v]}</td>`).join('')}
                <td style="font-weight: 800; color: ${r.result === 1 ? 'var(--success)' : 'var(--danger)'}; background: ${r.result === 1 ? 'var(--success-light)' : 'var(--danger-light)'};">${r.result}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;

    resultDiv.innerHTML = html;
  };

  calcBtn.addEventListener('click', execute);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') execute(); });

  // Presets
  document.querySelectorAll('.preset-logic-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      input.value = btn.getAttribute('data-expr');
      execute();
    });
  });

  // Run default
  execute();
}

/* --- Lab 2: K-Map Solver UI --- */
function initKMapToolUI() {
  window.KMapTool.init(4);
  renderKMapGrid();

  const varSelect = document.getElementById('kmapVarSelect');
  if (varSelect) {
    varSelect.addEventListener('change', (e) => {
      const vars = parseInt(e.target.value, 10);
      window.KMapTool.init(vars);
      renderKMapGrid();
    });
  }

  const setZerosBtn = document.getElementById('kmapSetZerosBtn');
  if (setZerosBtn) {
    setZerosBtn.addEventListener('click', () => {
      window.KMapTool.setAll(0);
      renderKMapGrid();
    });
  }

  const setOnesBtn = document.getElementById('kmapSetOnesBtn');
  if (setOnesBtn) {
    setOnesBtn.addEventListener('click', () => {
      window.KMapTool.setAll(1);
      renderKMapGrid();
    });
  }

  const sampleBtn = document.getElementById('kmapSampleBtn');
  if (sampleBtn) {
    sampleBtn.addEventListener('click', () => {
      window.KMapTool.init(4);
      if (varSelect) varSelect.value = "4";
      // Set sample minterms from textbook page 97
      const samples = [0, 1, 2, 4, 5, 8, 10, 14, 15];
      window.KMapTool.setAll(0);
      samples.forEach(m => window.KMapTool.setVal(m, 1));
      renderKMapGrid();
    });
  }
}

function renderKMapGrid() {
  const container = document.getElementById('kmapGridContainer');
  if (!container) return;

  const dim = window.KMapTool.getDimensions();
  const rowLabels = dim.rows === 2 ? ['0', '1'] : ['00', '01', '11', '10'];
  const colLabels = dim.cols === 2 ? ['0', '1'] : ['00', '01', '11', '10'];

  let html = `
    <div class="kmap-wrapper">
      <table class="kmap-grid">
        <thead>
          <tr>
            <th class="kmap-legend-header">${dim.rowVars.join('')} \\ ${dim.colVars.join('')}</th>
            ${colLabels.map(cl => `<th class="kmap-legend-header">${cl}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${rowLabels.map((rl, r) => `
            <tr>
              <th class="kmap-legend-header">${rl}</th>
              ${colLabels.map((cl, c) => {
                const val = window.KMapTool.getGridValue(r, c);
                const m = window.KMapTool.cellToMinterm(r, c);
                return `
                  <td class="kmap-cell ${val === 1 ? 'active-1' : ''}" onclick="toggleKMapCell(${r}, ${c})" title="m${m}">
                    ${val}
                    <div style="font-size: 0.65rem; color: var(--text-muted); font-weight: normal;">m${m}</div>
                  </td>
                `;
              }).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  container.innerHTML = html;
  updateKMapSolution();
}

window.toggleKMapCell = function(r, c) {
  const m = window.KMapTool.cellToMinterm(r, c);
  window.KMapTool.toggle(m);
  renderKMapGrid();
};

function updateKMapSolution() {
  const resDiv = document.getElementById('kmapSolutionOutput');
  if (!resDiv) return;

  const sol = window.KMapTool.solve();

  resDiv.innerHTML = `
    <div class="card" style="margin-top: 1.5rem; background: var(--bg-card-subtle);">
      <h4 style="font-size: 1.1rem; color: var(--primary); margin-bottom: 0.75rem;">Kết quả tối thiểu hóa:</h4>
      <div style="margin-bottom: 0.75rem;">
        <strong>Danh sách Minterm:</strong> 
        <code>${sol.minterms.length > 0 ? `Σ m(${sol.minterms.join(', ')})` : 'Không có (f = 0)'}</code>
      </div>
      <div style="margin-bottom: 0.75rem;">
        <strong>Dạng nối rời chính tắc (Canonical DNF):</strong>
        <p style="word-break: break-all; font-family: var(--font-mono); color: var(--text-muted); font-size: 0.9rem;">${sol.canonicalDNF}</p>
      </div>
      <div style="margin-bottom: 0.75rem; padding: 0.75rem; background: var(--primary-light); border-radius: var(--radius-md); border: 1px solid var(--primary-border);">
        <strong style="color: var(--primary); font-size: 1.05rem;">CÔNG THỨC ĐA THỨC TỐI TIỂU (Minimal SOP):</strong>
        <div style="font-size: 1.25rem; font-weight: 800; font-family: var(--font-mono); color: var(--text-main); margin-top: 0.35rem;">f = ${sol.minimalSOP}</div>
      </div>
      <div style="font-size: 0.9rem; color: var(--text-muted);">
        ⚡ Mạng cổng logic tối ưu: Cần khoảng <strong>${sol.andGates} cổng AND</strong> và <strong>${sol.orGates} cổng OR</strong> (không kể cổng NOT).
      </div>
    </div>
  `;
}

/* --- Lab 3: Combinatorics & Euclid UI --- */
function initCombinatoricsToolUI() {
  const calcCombBtn = document.getElementById('calcCombBtn');
  if (calcCombBtn) {
    calcCombBtn.addEventListener('click', () => {
      const n = parseInt(document.getElementById('combNInput').value, 10);
      const k = parseInt(document.getElementById('combKInput').value, 10);
      const output = document.getElementById('combResultOutput');

      if (isNaN(n) || isNaN(k) || n < 0 || k < 0) {
        output.innerHTML = '<span style="color: var(--danger);">Vui lòng nhập n, k hợp lệ (n, k ≥ 0)!</span>';
        return;
      }

      const pN = window.CombinatoricsTool.permutation(n);
      const aNK = window.CombinatoricsTool.arrangement(n, k);
      const cNK = window.CombinatoricsTool.combination(n, k);
      const cBar = window.CombinatoricsTool.combinationWithRep(n, k);

      output.innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1rem;">
          <div class="stat-card">
            <div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">Hoán vị P(${n}) = ${n}!</div>
              <div style="font-size: 1.4rem; font-weight: 800; color: var(--primary); word-break: break-all;">${pN.toString()}</div>
            </div>
          </div>
          <div class="stat-card">
            <div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">Chỉnh hợp A(${n}, ${k})</div>
              <div style="font-size: 1.4rem; font-weight: 800; color: var(--primary); word-break: break-all;">${aNK.toString()}</div>
            </div>
          </div>
          <div class="stat-card">
            <div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">Tổ hợp C(${n}, ${k})</div>
              <div style="font-size: 1.4rem; font-weight: 800; color: var(--success); word-break: break-all;">${cNK.toString()}</div>
            </div>
          </div>
          <div class="stat-card">
            <div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">Tổ hợp lặp C̄(${n}, ${k})</div>
              <div style="font-size: 1.4rem; font-weight: 800; color: var(--warning); word-break: break-all;">${cBar.toString()}</div>
            </div>
          </div>
        </div>
      `;
    });
  }

  const calcEuclidBtn = document.getElementById('calcEuclidBtn');
  if (calcEuclidBtn) {
    calcEuclidBtn.addEventListener('click', () => {
      const a = parseInt(document.getElementById('euclidAInput').value, 10);
      const b = parseInt(document.getElementById('euclidBInput').value, 10);
      const output = document.getElementById('euclidResultOutput');

      if (isNaN(a) || isNaN(b) || a === 0 || b === 0) {
        output.innerHTML = '<span style="color: var(--danger);">Vui lòng nhập hai số nguyên khác 0!</span>';
        return;
      }

      const res = window.CombinatoricsTool.extendedEuclid(a, b);

      output.innerHTML = `
        <div style="margin-top: 1.25rem;">
          <div style="padding: 1rem; background: var(--primary-light); border-radius: var(--radius-md); margin-bottom: 1rem;">
            <div><strong>Ước số chung lớn nhất USCLN(${a}, ${b}):</strong> <span style="font-size: 1.2rem; font-weight: 800; color: var(--primary);">${res.gcd}</span></div>
            <div><strong>Bội số chung nhỏ nhất BSCNN(${a}, ${b}):</strong> <span style="font-size: 1.2rem; font-weight: 800; color: var(--primary);">${res.lcm}</span></div>
            <div style="margin-top: 0.5rem;"><strong>Đẳng thức Bézout:</strong> <code>${res.bezoutEquation}</code></div>
          </div>
          <h5 style="margin-bottom: 0.5rem;">Các bước chia thuật toán Euclide:</h5>
          <table class="lesson-body table" style="width: 100%;">
            <thead><tr><th>Bước</th><th>Phép chia có dư</th><th>Số dư</th></tr></thead>
            <tbody>
              ${res.steps.map((st, i) => `<tr><td>Bước ${i+1}</td><td><code>${st.equation}</code></td><td>${st.remainder}</td></tr>`).join('')}
            </tbody>
          </table>
        </div>
      `;
    });
  }
}

/* --- Lab 4: Relation Analyzer UI --- */
function initRelationToolUI() {
  const checkBtn = document.getElementById('analyzeRelationBtn');
  if (!checkBtn) return;

  const execute = () => {
    const setStr = document.getElementById('relSetInput').value;
    const pairsStr = document.getElementById('relPairsInput').value;
    const output = document.getElementById('relationResultOutput');

    const res = window.RelationTool.analyze(setStr, pairsStr);
    if (res.error) {
      output.innerHTML = `<div style="color: var(--danger); padding: 1rem;">${res.error}</div>`;
      return;
    }

    let html = `
      <div style="margin-top: 1.5rem;">
        <h4 style="margin-bottom: 1rem;">Phân tích 4 tính chất cơ bản:</h4>
        <div class="stat-grid">
          <div class="stat-card" style="border-left: 4px solid ${res.isReflexive ? 'var(--success)' : 'var(--danger)'};">
            <div>
              <div style="font-weight: 700;">${res.isReflexive ? '✅ Phản xạ (Reflexive)' : '❌ Không phản xạ'}</div>
              <div style="font-size: 0.85rem; color: var(--text-muted);">${res.isReflexive ? '∀x ∈ A: (x, x) ∈ R' : `Thiếu: ${res.reflexiveViolations.map(x=>`(${x},${x})`).join(', ')}`}</div>
            </div>
          </div>
          <div class="stat-card" style="border-left: 4px solid ${res.isSymmetric ? 'var(--success)' : 'var(--danger)'};">
            <div>
              <div style="font-weight: 700;">${res.isSymmetric ? '✅ Đối xứng (Symmetric)' : '❌ Không đối xứng'}</div>
              <div style="font-size: 0.85rem; color: var(--text-muted);">${res.isSymmetric ? '(x, y) ∈ R ⇒ (y, x) ∈ R' : 'Có cặp ngược chiều bị thiếu'}</div>
            </div>
          </div>
          <div class="stat-card" style="border-left: 4px solid ${res.isAntisymmetric ? 'var(--success)' : 'var(--danger)'};">
            <div>
              <div style="font-weight: 700;">${res.isAntisymmetric ? '✅ Phản xứng (Antisymmetric)' : '❌ Không phản xứng'}</div>
              <div style="font-size: 0.85rem; color: var(--text-muted);">${res.isAntisymmetric ? '(x, y) & (y, x) ∈ R ⇒ x = y' : 'Tồn tại cặp hai chiều x ≠ y'}</div>
            </div>
          </div>
          <div class="stat-card" style="border-left: 4px solid ${res.isTransitive ? 'var(--success)' : 'var(--danger)'};">
            <div>
              <div style="font-weight: 700;">${res.isTransitive ? '✅ Bắc cầu (Transitive)' : '❌ Không bắc cầu'}</div>
              <div style="font-size: 0.85rem; color: var(--text-muted);">${res.isTransitive ? '(x, y) & (y, z) ∈ R ⇒ (x, z) ∈ R' : 'Vi phạm tính bắc cầu'}</div>
            </div>
          </div>
        </div>

        <div style="margin-top: 1.5rem; padding: 1.25rem; background: var(--bg-card-subtle); border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
          <h4 style="font-size: 1.1rem; color: var(--primary); margin-bottom: 0.5rem;">Kết luận cấu trúc:</h4>
          ${res.isEquivalence ? `
            <div style="color: var(--success); font-weight: 700; font-size: 1.05rem; margin-bottom: 0.5rem;">
              🎉 Đây là một QUAN HỆ TƯƠNG ĐƯƠNG!
            </div>
            <div>Các lớp tương đương: ${res.equivalenceClasses.map(c => `[${c[0]}] = {${c.join(', ')}}`).join('; ')}</div>
            <div>Phân hoạch của A: <code>A / R = { ${res.equivalenceClasses.map(c => `{${c.join(',')}}`).join(', ')} }</code></div>
          ` : ''}

          ${res.isPartialOrder ? `
            <div style="color: var(--primary); font-weight: 700; font-size: 1.05rem; margin-bottom: 0.5rem;">
              📐 Đây là một QUAN HỆ THỨ TỰ (Poset)!
            </div>
            <div>- Phần tử tối đại: <code>{${res.posetDetails.maximal.join(', ') || 'Không có'}}</code></div>
            <div>- Phần tử tối tiểu: <code>{${res.posetDetails.minimal.join(', ') || 'Không có'}}</code></div>
            <div>- Phần tử lớn nhất: <code>${res.posetDetails.greatest || 'Không có'}</code></div>
            <div>- Phần tử bé nhất: <code>${res.posetDetails.least || 'Không có'}</code></div>
            <div>- Thứ tự toàn phần: <strong>${res.posetDetails.isTotalOrder ? 'Có' : 'Không'}</strong></div>
          ` : ''}

          ${!res.isEquivalence && !res.isPartialOrder ? `
            <div style="color: var(--text-muted);">Quan hệ này không phải quan hệ tương đương và cũng không phải quan hệ thứ tự.</div>
          ` : ''}
        </div>
      </div>
    `;

    output.innerHTML = html;
  };

  checkBtn.addEventListener('click', execute);
}

/* ==========================================================================
   8. Search Modal / Command Palette
   ========================================================================== */
function initSearch() {
  const modal = document.getElementById('searchModalBackdrop');
  const triggerBtn = document.getElementById('searchTriggerBtn');
  const input = document.getElementById('searchInput');
  const resultsContainer = document.getElementById('searchResults');

  if (!modal || !triggerBtn || !input) return;

  const openSearch = () => {
    modal.classList.add('open');
    input.value = '';
    input.focus();
    renderSearchResults('');
  };

  const closeSearch = () => {
    modal.classList.remove('open');
  };

  triggerBtn.addEventListener('click', openSearch);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeSearch();
  });

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSearch();
    }
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeSearch();
    }
  });

  input.addEventListener('input', (e) => {
    renderSearchResults(e.target.value.trim().toLowerCase());
  });

  function renderSearchResults(query) {
    if (!resultsContainer) return;
    const matched = [];

    THEORY_DATA.forEach(ch => {
      ch.lessons.forEach(l => {
        if (!query || l.title.toLowerCase().includes(query) || ch.title.toLowerCase().includes(query)) {
          matched.push({ type: 'lesson', chapterId: ch.id, lessonId: l.id, title: l.title, sub: ch.title });
        }
      });
    });

    if (matched.length === 0) {
      resultsContainer.innerHTML = '<li style="padding: 1.5rem; text-align: center; color: var(--text-muted);">Không tìm thấy kết quả phù hợp</li>';
      return;
    }

    resultsContainer.innerHTML = matched.map(m => `
      <li class="search-result-item" onclick="loadLesson('${m.chapterId}', '${m.lessonId}'); switchTab('theory'); document.getElementById('searchModalBackdrop').classList.remove('open');">
        <span class="result-title">${m.title}</span>
        <span class="result-chapter">${m.sub}</span>
      </li>
    `).join('');
  }
}

/* ==========================================================================
   9. Lightweight Markdown & Math Parser
   ========================================================================== */
function parseMarkdownToHtml(md) {
  if (!md) return '';

  let html = md;

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Blockquotes
  html = html.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>');

  // Bold & Italic
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Inline Code
  html = html.replace(/\`([^`]+)\`/g, '<code>$1</code>');

  // Tables
  html = html.replace(/\|(.+)\|/g, (match) => {
    const cells = match.split('|').filter(c => c.trim().length > 0);
    if (cells.some(c => c.includes('---'))) return '';
    return '<tr>' + cells.map(c => `<td>${c.trim()}</td>`).join('') + '</tr>';
  });
  html = html.replace(/(<tr>[\s\S]*?<\/tr>)+/g, '<table>$1</table>');

  // Lists
  html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
  html = html.replace(/(<li>[\s\S]*?<\/li>)+/g, '<ul>$1</ul>');

  // Paragraphs
  html = html.split('\n\n').map(p => {
    p = p.trim();
    if (!p) return '';
    if (p.startsWith('<h') || p.startsWith('<table') || p.startsWith('<ul') || p.startsWith('<block')) {
      return p;
    }
    return `<p>${p}</p>`;
  }).join('\n');

  return html;
}

function renderMath() {
  if (window.renderMathInElement) {
    try {
      window.renderMathInElement(document.body, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false },
          { left: "\\[", right: "\\]", display: true }
        ],
        throwOnError: false
      });
      return;
    } catch (e) {
      console.warn("KaTeX render error, using fallback", e);
    }
  }

  // Fallback unicode math symbol replacement
  document.querySelectorAll('.lesson-body, .quiz-question-text, .option-text, .quiz-explanation-box p').forEach(el => {
    let t = el.innerHTML;
    // Replace typical LaTeX tokens with readable HTML/Unicode
    t = t.replace(/\\neg/g, '¬')
         .replace(/\\land/g, '∧')
         .replace(/\\lor/g, '∨')
         .replace(/\\oplus/g, '⊕')
         .replace(/\\rightarrow|\\implies/g, '→')
         .replace(/\\leftrightarrow|\\iff/g, '↔')
         .replace(/\\forall/g, '∀')
         .replace(/\\exists/g, '∃')
         .replace(/\\in/g, '∈')
         .replace(/\\notin/g, '∉')
         .replace(/\\subset|\\subseteq/g, '⊆')
         .replace(/\\cup/g, '∪')
         .replace(/\\cap/g, '∩')
         .replace(/\\emptyset/g, '∅')
         .replace(/\\mathbb\{R\}/g, 'ℝ')
         .replace(/\\mathbb\{Z\}/g, 'ℤ')
         .replace(/\\mathbb\{N\}/g, 'ℕ')
         .replace(/\\mathbb\{Q\}/g, 'ℚ')
         .replace(/\\dots/g, '…')
         .replace(/\\le|\\leq/g, '≤')
         .replace(/\\ge|\\geq/g, '≥')
         .replace(/\\neq/g, '≠')
         .replace(/\\times/g, '×')
         .replace(/\$([^\$]+)\$/g, '<span class="math-fallback">$1</span>');
    el.innerHTML = t;
  });
}
