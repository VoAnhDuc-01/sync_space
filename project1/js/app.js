/**
 * DISCRETE MATH HUB v2.0 – MAIN APPLICATION CONTROLLER
 * Quản lý Định tuyến SPA, KaTeX chuẩn xác, 4 Cấp độ Thi & Fisher-Yates Shuffle,
 * Kho Đề thi ĐHSP (2022–2025), Flashcards 3D, 5 Công cụ Lab & Sao lưu/Khôi phục JSON.
 */

const EXAM_LEVEL_CONFIGS = {
  level1: {
    id: 'level1',
    name: 'Cấp độ 1: Kiểm tra 15 phút',
    questionCount: 15,
    durationMinutes: 15,
    description: 'Kiểm tra nhanh kiến thức nền tảng (Nhận biết & Thông hiểu)'
  },
  level2: {
    id: 'level2',
    name: 'Cấp độ 2: Thi Giữa Học Phần',
    questionCount: 30,
    durationMinutes: 70,
    description: 'Cấu trúc chuẩn ĐHSP TP.HCM: Trọng tâm Chương 1, 2, 3'
  },
  level3: {
    id: 'level3',
    name: 'Cấp độ 3: Thi Kết Thúc Học Phần',
    questionCount: 40,
    durationMinutes: 90,
    description: 'Tổng hợp toàn khóa Chương 1–5 chuẩn ĐHSP TP.HCM'
  },
  level4: {
    id: 'level4',
    name: 'Cấp độ 4: Thử thách Vận dụng cao',
    questionCount: 25,
    durationMinutes: 60,
    description: 'Tuyển chọn câu hỏi Thông hiểu sâu & Vận dụng phân loại điểm 9–10'
  },
  level_dithi: {
    id: 'level_dithi',
    name: 'Mức độ Đi thi: Thực chiến Đề ĐHSP',
    questionCount: 30,
    durationMinutes: 75,
    description: '100% câu hỏi biên soạn & mở rộng từ Đề thi ĐHSP TP.HCM (2022–2025)'
  },
  custom: {
    id: 'custom',
    name: 'Đề tùy chỉnh theo Bộ lọc',
    questionCount: 20,
    durationMinutes: 30,
    description: 'Lấy câu hỏi từ chương/bài đang chọn trên thanh bộ lọc'
  }
};

function safeReadStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (_) {
    return fallback;
  }
}

const AppState = {
  activeTab: 'dashboard',
  currentChapterId: 'c1',
  currentLessonId: 'l1_1',
  theme: localStorage.getItem('dm_theme') || 'light',
  sidebarCollapsed: localStorage.getItem('dm_sidebar_collapsed') === 'true',
  completedLessons: safeReadStorage('dm_completed_lessons', []),
  quizHistory: safeReadStorage('dm_quiz_history', []),
  bookmarks: safeReadStorage('dm_bookmarks', []),
  learnedFlashcards: safeReadStorage('dm_learned_flashcards', []),
  activities: safeReadStorage('dm_activities', []),

  // Quiz & Multi-level Exam state (Optimized Pagination & Instant Search)
  quizFilterChapter: 'all',
  quizFilterLesson: 'all',
  quizFilterDiff: 'all',
  quizBookmarkOnly: false,
  quizSearchQuery: '',
  practiceShuffle: false,
  quizPage: 1,
  quizPageSize: 20,
  quizNeedsRender: true,
  practiceAnswers: {},
  quizMode: 'practice', // 'practice' | 'exam'
  selectedExamLevel: 'level_dithi',
  examShuffle: true,
  practiceQuestions: [],
  examQuestions: [],
  userAnswers: {},
  isExamSubmitted: false,
  examTimerInterval: null,
  examTimeRemaining: 75 * 60,
  examStartedAt: null,

  // Official Exam Archive state
  archiveFilter: 'all',
  activeArchiveExamId: 'dhsp_gk_2223',
  archiveTimerInterval: null,
  archiveTimeRemaining: 70 * 60,
  archiveTimerRunning: false,

  // Flashcards state
  fcChapter: 'all',
  fcOnlyUnlearned: false,
  fcDeck: [],
  fcIndex: 0,
  fcFlipped: false,

  // Static tabs whose math was already rendered once
  renderedStaticTabs: {},

  // Pending backup payload
  pendingRestoreData: null
};

document.addEventListener('DOMContentLoaded', () => {
  initDataPools();
  initTheme();
  initSidebar();
  initSidebarToggle();
  initNavigation();
  initSearch();
  initDataSyncModal();
  initPdfPreviewModal();
  initExamResultModal();
  initDashboard();
  initTheoryReader();
  initQuizSystem();
  initExamArchive();
  initFlashcards();
  initTools();

  const activeSec = document.getElementById(`${AppState.activeTab}Section`);
  if (activeSec) renderMath(activeSec);
});

window.addEventListener('load', () => {
  const activeSec = document.getElementById(`${AppState.activeTab}Section`);
  const sidebarEl = document.getElementById('appSidebar');
  if (sidebarEl) renderMath(sidebarEl);
  if (activeSec) renderMath(activeSec);
});

/* ==========================================================================
   0. Data Pool Initialization & Toast / Activity Helpers
   ========================================================================== */
function initDataPools() {
  const extraPools = [
    typeof QUIZ_DATA_CH2_EXTRA !== 'undefined' ? QUIZ_DATA_CH2_EXTRA : [],
    typeof QUIZ_DATA_CH3_EXTRA !== 'undefined' ? QUIZ_DATA_CH3_EXTRA : [],
    typeof QUIZ_DATA_CH4_EXTRA !== 'undefined' ? QUIZ_DATA_CH4_EXTRA : [],
    typeof QUIZ_DATA_CH5 !== 'undefined' ? QUIZ_DATA_CH5 : [],
    typeof QUIZ_DATA_HANDOUT_EXTRA !== 'undefined' ? QUIZ_DATA_HANDOUT_EXTRA : [],
    typeof QUIZ_DATA_DHSP_EXAM !== 'undefined' ? QUIZ_DATA_DHSP_EXAM : []
  ];

  const existingIds = new Set(QUIZ_DATA.map(q => q.id));
  extraPools.forEach(pool => {
    if (Array.isArray(pool)) {
      pool.forEach(q => {
        if (q && q.id && !existingIds.has(q.id)) {
          existingIds.add(q.id);
          QUIZ_DATA.push(q);
        }
      });
    }
  });

  // Tag all official ĐHSP exam questions as difficulty "Đi thi" & precompute fast search key
  QUIZ_DATA.forEach(q => {
    const dhspMatch = q.question.match(/^\((Đề (?:GK|CK) ĐHSP[^)]+)\)/i);
    if (dhspMatch) {
      q.difficulty = 'Đi thi';
      if (!q.examSource) q.examSource = dhspMatch[1];
    }
    q._searchKey = `${q.lessonTitle || ''} ${q.examSource || ''} ${q.question || ''}`.toLowerCase();
  });
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const item = document.createElement('div');
  item.className = `toast-item toast-${type}`;
  item.textContent = message;
  container.appendChild(item);
  setTimeout(() => {
    item.style.opacity = '0';
    setTimeout(() => item.remove(), 220);
  }, 3200);
}

function logActivity(actionText) {
  const entry = {
    text: actionText,
    time: new Date().toISOString()
  };
  AppState.activities.unshift(entry);
  if (AppState.activities.length > 40) {
    AppState.activities = AppState.activities.slice(0, 40);
  }
  localStorage.setItem('dm_activities', JSON.stringify(AppState.activities));
}

function fisherYatesShuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = copy[i];
    copy[i] = copy[j];
    copy[j] = tmp;
  }
  return copy;
}

function prepareQuestionForSession(q, shouldShuffleOptions) {
  if (!shouldShuffleOptions) {
    return { ...q, options: [...q.options] };
  }
  const hasFixedLetterRef = q.options.some(opt =>
    /\b(Cả A|Cả hai|A và B|B và C|Tất cả các đáp án)\b/i.test(opt)
  );
  if (hasFixedLetterRef) {
    return { ...q, options: [...q.options] };
  }
  const indexed = q.options.map((text, idx) => ({ text, isCorrect: idx === q.correctAnswer }));
  const shuffled = fisherYatesShuffle(indexed);
  return {
    ...q,
    options: shuffled.map(item => item.text),
    correctAnswer: shuffled.findIndex(item => item.isCorrect)
  };
}

/* ==========================================================================
   1. Theme Management (Light / Dark)
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
  if (!icon) return;
  if (AppState.theme === 'light') {
    icon.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  } else {
    icon.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  }
}

/* ==========================================================================
   2. Navigation, Sidebar Collapse/Expand & Routing
   ========================================================================== */
function initSidebarToggle() {
  const appContainer = document.getElementById('appContainer');
  const sidebar = document.getElementById('appSidebar');
  const toggleBtn = document.getElementById('sidebarToggleBtn');
  const collapseBtn = document.getElementById('sidebarCollapseBtn');
  const reopenFab = document.getElementById('sidebarReopenFab');
  const backdrop = document.getElementById('sidebarMobileBackdrop');

  const syncSidebarUI = () => {
    const isMobile = typeof window.innerWidth === 'number' && window.innerWidth <= 920;
    if (isMobile) {
      const isOpen = sidebar ? sidebar.classList.contains('mobile-open') : false;
      if (backdrop) backdrop.classList.toggle('open', isOpen);
      if (toggleBtn) {
        toggleBtn.setAttribute('aria-expanded', String(isOpen));
        toggleBtn.classList.toggle('is-active', isOpen);
      }
    } else {
      if (sidebar) sidebar.classList.remove('mobile-open');
      if (backdrop) backdrop.classList.remove('open');
      if (appContainer) appContainer.classList.toggle('sidebar-collapsed', AppState.sidebarCollapsed);
      if (toggleBtn) {
        toggleBtn.setAttribute('aria-expanded', String(!AppState.sidebarCollapsed));
        toggleBtn.classList.toggle('is-active', !AppState.sidebarCollapsed);
      }
    }
  };

  window.toggleCourseSidebar = function(forceState) {
    const isMobile = typeof window.innerWidth === 'number' && window.innerWidth <= 920;
    if (isMobile) {
      if (!sidebar) return;
      const shouldOpen = typeof forceState === 'boolean' ? forceState : !sidebar.classList.contains('mobile-open');
      sidebar.classList.toggle('mobile-open', shouldOpen);
    } else {
      const nextCollapsed = typeof forceState === 'boolean' ? !forceState : !AppState.sidebarCollapsed;
      AppState.sidebarCollapsed = nextCollapsed;
      localStorage.setItem('dm_sidebar_collapsed', String(nextCollapsed));
    }
    syncSidebarUI();
  };

  toggleBtn?.addEventListener('click', () => window.toggleCourseSidebar());
  collapseBtn?.addEventListener('click', () => window.toggleCourseSidebar(false));
  reopenFab?.addEventListener('click', () => window.toggleCourseSidebar(true));
  backdrop?.addEventListener('click', () => window.toggleCourseSidebar(false));

  window.addEventListener('resize', syncSidebarUI);

  document.addEventListener('keydown', (e) => {
    const tag = e.target && e.target.tagName ? e.target.tagName.toLowerCase() : '';
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
      e.preventDefault();
      window.toggleCourseSidebar();
    }
  });

  syncSidebarUI();
}

function initNavigation() {
  document.querySelectorAll('.nav-item-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.getAttribute('data-tab'));
    });
  });
}

function switchTab(tabId) {
  AppState.activeTab = tabId;

  document.querySelectorAll('.nav-item-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
  });

  document.querySelectorAll('.content-section').forEach(sec => {
    sec.classList.remove('active');
  });

  const targetSec = document.getElementById(`${tabId}Section`);
  if (targetSec) targetSec.classList.add('active');

  const sidebar = document.getElementById('appSidebar');
  const backdrop = document.getElementById('sidebarMobileBackdrop');
  if (sidebar) sidebar.classList.remove('mobile-open');
  if (backdrop) backdrop.classList.remove('open');

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (tabId === 'dashboard') {
    updateDashboardStats();
    renderDashboardChapterCards();
  } else if (tabId === 'quiz') {
    if (AppState.quizMode === 'exam') {
      renderExamQuestions();
    } else if (AppState.quizNeedsRender) {
      renderPracticePage();
    }
    return; // Quiz renderer already runs scoped KaTeX on visible cards only!
  } else if (tabId === 'exams') {
    renderExamArchiveCards();
    renderActiveArchivePaper();
    return; // Archive renderer already runs scoped KaTeX!
  } else if (tabId === 'flashcards') {
    renderFlashcardStage();
    return; // Flashcard renderer already runs scoped KaTeX!
  } else if (tabId === 'cheatsheet' || tabId === 'documents' || tabId === 'tools') {
    if (!AppState.renderedStaticTabs[tabId] && targetSec) {
      renderMath(targetSec);
      AppState.renderedStaticTabs[tabId] = true;
    }
    return;
  }

  if (targetSec) renderMath(targetSec);
}

window.openToolPanel = function(toolId) {
  switchTab('tools');
  const btn = document.querySelector(`.tool-tab-btn[data-tool="${toolId}"]`);
  if (btn) btn.click();
};

/* ==========================================================================
   3. Sidebar & Course Curriculum Tree
   ========================================================================== */
function initSidebar() {
  const accordionContainer = document.getElementById('chapterAccordion');
  if (!accordionContainer) return;

  const totalLessons = THEORY_DATA.reduce((acc, c) => acc + c.lessons.length, 0);
  const completed = AppState.completedLessons.length;
  const pct = totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;

  const metaEl = document.getElementById('sidebarCurriculumMeta');
  const pctEl = document.getElementById('sidebarPctBadge');
  const barEl = document.getElementById('sidebarProgressBar');
  if (metaEl) metaEl.textContent = `${THEORY_DATA.length} Chương • ${totalLessons} Bài học`;
  if (pctEl) pctEl.textContent = `${pct}%`;
  if (barEl) barEl.style.width = `${pct}%`;

  accordionContainer.innerHTML = '';

  THEORY_DATA.forEach(chapter => {
    const group = document.createElement('div');
    group.className = `chapter-group ${chapter.id === AppState.currentChapterId ? 'open' : ''}`;
    group.id = `group_${chapter.id}`;

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

  accordionContainer.querySelectorAll('.chapter-header').forEach(header => {
    header.addEventListener('click', () => {
      header.closest('.chapter-group').classList.toggle('open');
    });
  });

  accordionContainer.querySelectorAll('.lesson-item-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      loadLesson(btn.getAttribute('data-chapter'), btn.getAttribute('data-lesson'));
      switchTab('theory');
    });
  });

  renderMath(accordionContainer);
}

/* ==========================================================================
   4. Dashboard Overview
   ========================================================================== */
function initDashboard() {
  updateDashboardStats();
  renderDashboardChapterCards();

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
      setQuizMode('exam');
    });
  }

  const openLabBtn = document.getElementById('dashOpenLabBtn');
  if (openLabBtn) {
    openLabBtn.addEventListener('click', () => switchTab('tools'));
  }
}

function updateDashboardStats() {
  const totalLessons = THEORY_DATA.reduce((acc, c) => acc + c.lessons.length, 0);
  const completed = AppState.completedLessons.length;
  const progressPercent = totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;

  const totalQuestions = QUIZ_DATA.length;
  const history = AppState.quizHistory;
  const avgScore = history.length > 0
    ? (history.reduce((a, b) => a + (b.score / b.total) * 10, 0) / history.length).toFixed(1)
    : null;

  const totalCards = typeof FLASHCARDS_DATA !== 'undefined' ? FLASHCARDS_DATA.length : 65;
  const learnedCards = AppState.learnedFlashcards.length;

  const statProgress = document.getElementById('statProgress');
  const statCompleted = document.getElementById('statCompleted');
  const statAvgScore = document.getElementById('statAvgScore');
  const statTotalQuestions = document.getElementById('statTotalQuestions');
  const progressBar = document.getElementById('dashProgressBar');
  const progressLabel = document.getElementById('dashProgressLabel');
  const fcLabel = document.getElementById('dashFlashcardLabel');

  if (statProgress) statProgress.textContent = `${progressPercent}%`;
  if (statCompleted) statCompleted.textContent = `${completed}/${totalLessons}`;
  if (statAvgScore) statAvgScore.textContent = avgScore !== null ? `${avgScore}/10` : '--';
  if (statTotalQuestions) statTotalQuestions.textContent = `${totalQuestions}`;
  if (progressBar) progressBar.style.width = `${progressPercent}%`;
  if (progressLabel) progressLabel.textContent = `Tiến độ hoàn thành lộ trình: ${completed}/${totalLessons} bài (${progressPercent}%)`;
  if (fcLabel) fcLabel.textContent = `Flashcards đã thuộc: ${learnedCards}/${totalCards} thẻ`;
}

function renderDashboardChapterCards() {
  const container = document.getElementById('dashChapterCards');
  if (!container) return;

  container.innerHTML = THEORY_DATA.map((ch, idx) => {
    const completedInChapter = ch.lessons.filter(l => AppState.completedLessons.includes(l.id)).length;
    const qCount = QUIZ_DATA.filter(q => q.chapterId === ch.id).length;
    const pct = Math.round((completedInChapter / ch.lessons.length) * 100);
    return `
      <button type="button" class="chapter-banner-card" onclick="loadLesson('${ch.id}', '${ch.lessons[0].id}'); switchTab('theory');">
        <div class="chapter-banner-left">
          <div class="chapter-num-badge">0${idx + 1}</div>
          <div>
            <h4 style="font-weight: 700; font-size: 1rem;">${ch.title}</h4>
            <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.35rem;">${ch.subtitle}</p>
            <span style="font-size: 0.76rem; font-weight: 700; color: var(--info);">${ch.lessons.length} bài giảng • ${qCount} câu trắc nghiệm</span>
          </div>
        </div>
        <div style="text-align: right; flex-shrink: 0;">
          <span class="tabular-nums" style="font-size: 0.84rem; font-weight: 700; color: var(--primary);">${completedInChapter}/${ch.lessons.length} bài (${pct}%)</span>
          <div class="arrow-indicator">→</div>
        </div>
      </button>
    `;
  }).join('');

  renderMath(container);
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
      AppState.quizFilterDiff = 'all';
      AppState.quizBookmarkOnly = false;
      AppState.quizSearchQuery = '';
      const chSelect = document.getElementById('quizChapterSelect');
      const diffSelect = document.getElementById('quizDiffSelect');
      const searchInp = document.getElementById('quizSearchInput');
      if (chSelect) chSelect.value = AppState.currentChapterId;
      if (diffSelect) diffSelect.value = 'all';
      if (searchInp) searchInp.value = '';
      updateQuizLessonOptions();
      const lSelect = document.getElementById('quizLessonSelect');
      if (lSelect) lSelect.value = AppState.currentLessonId;
      AppState.activeTab = 'quiz';
      setQuizMode('practice');
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

  document.querySelectorAll('.lesson-item-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lesson') === lessonId);
  });
  document.querySelectorAll('.chapter-group').forEach(grp => {
    if (grp.id === `group_${chapterId}`) grp.classList.add('open');
  });

  const titleEl = document.getElementById('lessonTitle');
  const chapterTagEl = document.getElementById('lessonChapterTag');
  const readTimeEl = document.getElementById('lessonReadTime');
  const bodyEl = document.getElementById('lessonBody');

  if (titleEl) titleEl.innerHTML = escapeHtmlPreservingMath(lesson.title);
  if (chapterTagEl) chapterTagEl.textContent = chapter.title;
  if (readTimeEl) readTimeEl.textContent = `Thời lượng: ${lesson.readingTime}`;
  if (bodyEl) bodyEl.innerHTML = parseMarkdownToHtml(lesson.content);

  updateMarkCompletedBtn();
  renderLessonNavButtons(chapter, lesson);
  renderMath(document.getElementById('theorySection'));
}

function updateMarkCompletedBtn() {
  const btn = document.getElementById('markCompletedBtn');
  if (!btn) return;
  const isDone = AppState.completedLessons.includes(AppState.currentLessonId);
  if (isDone) {
    btn.className = 'btn btn-outline';
    btn.textContent = '✓ Đã hoàn thành bài này (Bấm để hủy)';
  } else {
    btn.className = 'btn btn-primary';
    btn.textContent = '✓ Đánh dấu đã học xong';
  }
}

function toggleLessonCompleted() {
  const lId = AppState.currentLessonId;
  const idx = AppState.completedLessons.indexOf(lId);
  if (idx > -1) {
    AppState.completedLessons.splice(idx, 1);
    showToast('Đã bỏ đánh dấu hoàn thành bài học.', 'info');
  } else {
    AppState.completedLessons.push(lId);
    logActivity(`Hoàn thành bài giảng ${lId.toUpperCase()}`);
    showToast('Tuyệt vời! Đã lưu tiến độ hoàn thành bài học.', 'success');
  }
  localStorage.setItem('dm_completed_lessons', JSON.stringify(AppState.completedLessons));
  updateMarkCompletedBtn();
  initSidebar();
  updateDashboardStats();
}

function renderLessonNavButtons(chapter, lesson) {
  const navContainer = document.getElementById('lessonNavButtons');
  if (!navContainer) return;

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
      <button class="btn btn-outline" onclick="loadLesson('${prevLesson.chapterId}', '${prevLesson.lessonId}'); window.scrollTo({top:0,behavior:'smooth'});">
        ← Bài trước: ${escapeHtmlPreservingMath(prevLesson.title)}
      </button>
    ` : '<div></div>'}
    ${nextLesson ? `
      <button class="btn btn-primary" onclick="loadLesson('${nextLesson.chapterId}', '${nextLesson.lessonId}'); window.scrollTo({top:0,behavior:'smooth'});">
        Bài tiếp theo: ${escapeHtmlPreservingMath(nextLesson.title)} →
      </button>
    ` : '<div></div>'}
  `;
}

/* ==========================================================================
   6. Quiz & 5-Level Exam System (Paginated, Lazy KaTeX & "Đi thi" ĐHSP Bank)
   ========================================================================== */
function initQuizSystem() {
  initQuizFilters();
  updateBookmarkBadge();
  updateExamDiffBadge();
  // Prepare filtered question array in < 1ms WITHOUT rendering 625 DOM cards on startup!
  rebuildPracticeDataset();

  const practiceModeBtn = document.getElementById('practiceModeBtn');
  const examModeBtn = document.getElementById('examModeBtn');
  if (practiceModeBtn && examModeBtn) {
    practiceModeBtn.addEventListener('click', () => setQuizMode('practice'));
    examModeBtn.addEventListener('click', () => setQuizMode('exam'));
  }

  // Exam level cards (5 levels including level_dithi)
  document.querySelectorAll('.exam-level-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.exam-level-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      AppState.selectedExamLevel = card.getAttribute('data-level');
      startExam(AppState.selectedExamLevel);
    });
  });

  const examShuffleChk = document.getElementById('examShuffleCheckbox');
  if (examShuffleChk) {
    examShuffleChk.addEventListener('change', (e) => {
      AppState.examShuffle = e.target.checked;
    });
  }

  const startSelectedBtn = document.getElementById('startSelectedExamBtn');
  if (startSelectedBtn) {
    startSelectedBtn.addEventListener('click', () => startExam(AppState.selectedExamLevel));
  }

  const customFilterExamBtn = document.getElementById('examUseCustomFilterBtn');
  if (customFilterExamBtn) {
    customFilterExamBtn.addEventListener('click', () => {
      document.querySelectorAll('.exam-level-card').forEach(c => c.classList.remove('active'));
      AppState.selectedExamLevel = 'custom';
      startExam('custom');
    });
  }

  const restartExamBtn = document.getElementById('restartExamBtn');
  if (restartExamBtn) {
    restartExamBtn.addEventListener('click', () => startExam(AppState.selectedExamLevel));
  }

  const togglePaletteBtn = document.getElementById('togglePaletteBtn');
  if (togglePaletteBtn) {
    togglePaletteBtn.addEventListener('click', () => {
      const box = document.getElementById('examPaletteBox');
      if (box) box.style.display = box.style.display === 'none' ? 'block' : 'none';
    });
  }

  const submitExamBtn = document.getElementById('submitExamBtn');
  if (submitExamBtn) {
    submitExamBtn.addEventListener('click', () => submitExam(false));
  }
}

function initQuizFilters() {
  const chSelect = document.getElementById('quizChapterSelect');
  if (chSelect) {
    chSelect.innerHTML = `
      <option value="all">Tất cả 5 chương (${QUIZ_DATA.length} câu)</option>
      ${THEORY_DATA.map(c => {
        const cnt = QUIZ_DATA.filter(q => q.chapterId === c.id).length;
        return `<option value="${c.id}">${c.title} (${cnt} câu)</option>`;
      }).join('')}
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
    const dithiCount = QUIZ_DATA.filter(q => q.difficulty === 'Đi thi').length;
    diffSelect.innerHTML = `
      <option value="all">Mọi mức độ (${QUIZ_DATA.length})</option>
      <option value="Nhận biết">Nhận biết</option>
      <option value="Thông hiểu">Thông hiểu</option>
      <option value="Vận dụng">Vận dụng</option>
      <option value="Đi thi">Đi thi • Chuẩn Đề ĐHSP (${dithiCount})</option>
    `;
    diffSelect.addEventListener('change', (e) => {
      AppState.quizFilterDiff = e.target.value;
      syncExamDiffQuickBtn();
      refreshQuizList();
    });
  }

  const examDiffQuickBtn = document.getElementById('quizExamDiffBtn');
  if (examDiffQuickBtn) {
    examDiffQuickBtn.addEventListener('click', () => {
      AppState.quizFilterDiff = AppState.quizFilterDiff === 'Đi thi' ? 'all' : 'Đi thi';
      if (diffSelect) diffSelect.value = AppState.quizFilterDiff;
      syncExamDiffQuickBtn();
      if (AppState.quizMode === 'exam') {
        setQuizMode('practice');
      } else {
        refreshQuizList();
      }
    });
  }

  const bookmarkBtn = document.getElementById('quizBookmarkFilterBtn');
  if (bookmarkBtn) {
    bookmarkBtn.addEventListener('click', () => {
      AppState.quizBookmarkOnly = !AppState.quizBookmarkOnly;
      bookmarkBtn.classList.toggle('active', AppState.quizBookmarkOnly);
      refreshQuizList();
    });
  }

  const searchInput = document.getElementById('quizSearchInput');
  if (searchInput) {
    let searchTimer = null;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        AppState.quizSearchQuery = e.target.value.trim().toLowerCase();
        refreshQuizList();
      }, 110);
    });
  }

  const pageSizeSelect = document.getElementById('quizPageSizeSelect');
  if (pageSizeSelect) {
    pageSizeSelect.addEventListener('change', (e) => {
      AppState.quizPageSize = parseInt(e.target.value, 10) || 20;
      AppState.quizPage = 1;
      if (AppState.quizMode === 'practice') renderPracticePage();
    });
  }

  const practiceShuffleChk = document.getElementById('quizShuffleToggle');
  if (practiceShuffleChk) {
    practiceShuffleChk.addEventListener('change', (e) => {
      AppState.practiceShuffle = e.target.checked;
      AppState.practiceAnswers = {};
      refreshQuizList();
    });
  }
}

function syncExamDiffQuickBtn() {
  const btn = document.getElementById('quizExamDiffBtn');
  if (btn) btn.classList.toggle('active', AppState.quizFilterDiff === 'Đi thi');
}

function updateExamDiffBadge() {
  const badge = document.getElementById('examDiffCountBadge');
  if (badge) {
    const cnt = QUIZ_DATA.filter(q => q.difficulty === 'Đi thi').length;
    badge.textContent = String(cnt);
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
    ${chapter.lessons.map(l => `<option value="${l.id}">${l.title.replace(/\$/g, '')}</option>`).join('')}
  `;
  AppState.quizFilterLesson = 'all';
}

function updateBookmarkBadge() {
  const badge = document.getElementById('bookmarkCountBadge');
  if (badge) badge.textContent = String(AppState.bookmarks.length);
}

window.toggleQuestionBookmark = function(qid) {
  const idx = AppState.bookmarks.indexOf(qid);
  if (idx > -1) {
    AppState.bookmarks.splice(idx, 1);
    showToast('Đã bỏ lưu câu hỏi.', 'info');
  } else {
    AppState.bookmarks.push(qid);
    showToast('Đã lưu câu hỏi vào danh sách ôn tập!', 'success');
  }
  localStorage.setItem('dm_bookmarks', JSON.stringify(AppState.bookmarks));
  updateBookmarkBadge();

  document.querySelectorAll(`.bookmark-q-btn[data-qid="${qid}"]`).forEach(btn => {
    const isSaved = AppState.bookmarks.includes(qid);
    btn.classList.toggle('bookmarked', isSaved);
    btn.textContent = isSaved ? '★ Đã lưu' : '☆ Lưu câu';
  });

  if (AppState.quizBookmarkOnly && AppState.quizMode === 'practice') {
    refreshQuizList();
  }
};

function setQuizMode(mode) {
  AppState.quizMode = mode;
  const pBtn = document.getElementById('practiceModeBtn');
  const eBtn = document.getElementById('examModeBtn');
  const levelPanel = document.getElementById('examLevelPanel');
  const examBar = document.getElementById('examActionBar');
  const paletteBox = document.getElementById('examPaletteBox');
  const pagTop = document.getElementById('quizPaginationTop');
  const pagBot = document.getElementById('quizPaginationBottom');

  if (pBtn) {
    pBtn.classList.toggle('active', mode === 'practice');
    pBtn.setAttribute('aria-selected', String(mode === 'practice'));
  }
  if (eBtn) {
    eBtn.classList.toggle('active', mode === 'exam');
    eBtn.setAttribute('aria-selected', String(mode === 'exam'));
  }
  if (levelPanel) levelPanel.style.display = mode === 'exam' ? 'block' : 'none';
  if (examBar) examBar.style.display = mode === 'exam' ? 'flex' : 'none';
  if (paletteBox) paletteBox.style.display = mode === 'exam' ? 'block' : 'none';
  if (pagTop) pagTop.style.display = mode === 'practice' ? '' : 'none';
  if (pagBot) pagBot.style.display = mode === 'practice' ? '' : 'none';

  if (mode === 'exam') {
    startExam(AppState.selectedExamLevel);
  } else {
    stopExamTimer();
    AppState.userAnswers = {};
    AppState.isExamSubmitted = false;
    refreshQuizList();
  }
}

function buildExamPoolByLevel(levelKey) {
  const pickFrom = (arr, n) => fisherYatesShuffle(arr).slice(0, n);

  if (levelKey === 'level1') {
    // 15 câu: 9 Nhận biết + 6 Thông hiểu phủ đều 5 chương
    const easy = QUIZ_DATA.filter(q => q.difficulty === 'Nhận biết');
    const med = QUIZ_DATA.filter(q => q.difficulty === 'Thông hiểu');
    return [...pickFrom(easy, 9), ...pickFrom(med, 6)];
  }

  if (levelKey === 'level2') {
    // 30 câu Giữa học phần ĐHSP: Ch.1 (11 câu), Ch.2 (11 câu), Ch.3 (8 câu)
    const c1 = QUIZ_DATA.filter(q => q.chapterId === 'c1');
    const c2 = QUIZ_DATA.filter(q => q.chapterId === 'c2');
    const c3 = QUIZ_DATA.filter(q => q.chapterId === 'c3');
    return [...pickFrom(c1, 11), ...pickFrom(c2, 11), ...pickFrom(c3, 8)];
  }

  if (levelKey === 'level3') {
    // 40 câu Kết thúc học phần ĐHSP: Ch.1 (6), Ch.2 (9), Ch.3 (8), Ch.4 (9), Ch.5 (8)
    const c1 = QUIZ_DATA.filter(q => q.chapterId === 'c1');
    const c2 = QUIZ_DATA.filter(q => q.chapterId === 'c2');
    const c3 = QUIZ_DATA.filter(q => q.chapterId === 'c3');
    const c4 = QUIZ_DATA.filter(q => q.chapterId === 'c4');
    const c5 = QUIZ_DATA.filter(q => q.chapterId === 'c5');
    return [
      ...pickFrom(c1, 6),
      ...pickFrom(c2, 9),
      ...pickFrom(c3, 8),
      ...pickFrom(c4, 9),
      ...pickFrom(c5, 8)
    ];
  }

  if (levelKey === 'level4') {
    // 25 câu Vận dụng cao: ưu tiên Vận dụng & Đi thi
    const hard = QUIZ_DATA.filter(q => q.difficulty === 'Vận dụng' || q.difficulty === 'Đi thi');
    if (hard.length >= 25) return pickFrom(hard, 25);
    const med = QUIZ_DATA.filter(q => q.difficulty === 'Thông hiểu');
    return [...pickFrom(hard, hard.length), ...pickFrom(med, 25 - hard.length)];
  }

  if (levelKey === 'level_dithi') {
    // 30 câu 100% mức độ "Đi thi" (Chuẩn Đề thi ĐHSP TP.HCM) phân bố đều 5 chương
    const dithiPool = QUIZ_DATA.filter(q => q.difficulty === 'Đi thi');
    const dc1 = dithiPool.filter(q => q.chapterId === 'c1');
    const dc2 = dithiPool.filter(q => q.chapterId === 'c2');
    const dc3 = dithiPool.filter(q => q.chapterId === 'c3');
    const dc4 = dithiPool.filter(q => q.chapterId === 'c4');
    const dc5 = dithiPool.filter(q => q.chapterId === 'c5');
    const stratified = [
      ...pickFrom(dc1, 6),
      ...pickFrom(dc2, 7),
      ...pickFrom(dc3, 6),
      ...pickFrom(dc4, 5),
      ...pickFrom(dc5, 6)
    ];
    if (stratified.length >= 30) return stratified.slice(0, 30);
    return pickFrom(dithiPool, Math.min(30, dithiPool.length));
  }

  // Custom filtered exam
  let filtered = getFilteredQuestions();
  if (filtered.length < 5) filtered = [...QUIZ_DATA];
  return pickFrom(filtered, Math.min(20, filtered.length));
}

function startExam(levelKey = 'level_dithi') {
  const cfg = EXAM_LEVEL_CONFIGS[levelKey] || EXAM_LEVEL_CONFIGS.level_dithi;
  AppState.selectedExamLevel = cfg.id;

  let rawSelected = buildExamPoolByLevel(cfg.id);
  if (AppState.examShuffle) {
    rawSelected = fisherYatesShuffle(rawSelected);
  }

  AppState.examQuestions = rawSelected.map(q => prepareQuestionForSession(q, AppState.examShuffle));
  AppState.userAnswers = {};
  AppState.isExamSubmitted = false;
  AppState.examTimeRemaining = cfg.durationMinutes * 60;
  AppState.examStartedAt = Date.now();

  const levelBadge = document.getElementById('activeExamLevelBadge');
  if (levelBadge) levelBadge.textContent = cfg.name;

  const submitBtn = document.getElementById('submitExamBtn');
  if (submitBtn) submitBtn.disabled = false;

  updateExamAnsweredProgress();
  startExamTimer();
  renderExamQuestions();
  renderExamPalette();
  showToast(`Đã khởi tạo ${cfg.name} (${AppState.examQuestions.length} câu • ${cfg.durationMinutes} phút).`, 'info');
}

function startExamTimer() {
  stopExamTimer();
  updateTimerDisplay();

  AppState.examTimerInterval = setInterval(() => {
    AppState.examTimeRemaining--;
    updateTimerDisplay();
    if (AppState.examTimeRemaining <= 0) {
      stopExamTimer();
      showToast('Đã hết thời gian làm bài! Hệ thống tự động chấm điểm.', 'warning');
      submitExam(true);
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
  const m = Math.floor(Math.max(0, AppState.examTimeRemaining) / 60);
  const s = Math.max(0, AppState.examTimeRemaining) % 60;
  timerEl.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function updateExamAnsweredProgress() {
  const el = document.getElementById('examAnsweredCount');
  if (!el) return;
  const answered = Object.keys(AppState.userAnswers).length;
  el.textContent = `Đã chọn: ${answered}/${AppState.examQuestions.length}`;
}

function renderExamPalette() {
  const grid = document.getElementById('examPaletteGrid');
  if (!grid) return;

  grid.innerHTML = AppState.examQuestions.map((q, idx) => {
    let cls = '';
    const ans = AppState.userAnswers[q.id];
    if (AppState.isExamSubmitted) {
      cls = ans === q.correctAnswer ? 'correct' : 'wrong';
    } else if (ans !== undefined) {
      cls = 'answered';
    }
    return `<button type="button" class="palette-num-btn tabular-nums ${cls}" data-pqid="${q.id}" onclick="scrollToQuestionCard('${q.id}')">${idx + 1}</button>`;
  }).join('');
}

window.scrollToQuestionCard = function(qid) {
  const el = document.getElementById(`qcard_${qid}`);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

function submitExam(autoByTimer = false) {
  if (AppState.isExamSubmitted) return;

  const answeredCount = Object.keys(AppState.userAnswers).length;
  const total = AppState.examQuestions.length;
  if (!autoByTimer && answeredCount < total) {
    const confirmEarly = window.confirm(
      `Bạn mới hoàn thành ${answeredCount}/${total} câu hỏi. Bạn có chắc chắn muốn nộp bài ngay không?`
    );
    if (!confirmEarly) return;
  }

  stopExamTimer();
  AppState.isExamSubmitted = true;

  let correctCount = 0;
  AppState.examQuestions.forEach(q => {
    if (AppState.userAnswers[q.id] === q.correctAnswer) {
      correctCount++;
    }
  });

  const score10 = Math.round((correctCount / total) * 100) / 10;
  const cfg = EXAM_LEVEL_CONFIGS[AppState.selectedExamLevel] || EXAM_LEVEL_CONFIGS.level_dithi;
  const elapsedSec = AppState.examStartedAt ? Math.round((Date.now() - AppState.examStartedAt) / 1000) : 0;

  AppState.quizHistory.push({
    date: new Date().toISOString(),
    level: cfg.name,
    score: correctCount,
    total,
    score10,
    elapsedSec
  });
  localStorage.setItem('dm_quiz_history', JSON.stringify(AppState.quizHistory));
  logActivity(`Nộp bài ${cfg.name}: đạt ${score10}/10 (${correctCount}/${total} câu)`);
  updateDashboardStats();

  const submitBtn = document.getElementById('submitExamBtn');
  if (submitBtn) submitBtn.disabled = true;

  renderExamQuestions();
  renderExamPalette();
  openExamResultDialog(correctCount, total, score10, elapsedSec, cfg.name);
}

function initExamResultModal() {
  const dlg = document.getElementById('examResultDialog');
  const closeBtn = document.getElementById('closeExamResultBtn');
  if (dlg && closeBtn) {
    closeBtn.addEventListener('click', () => dlg.close());
    dlg.addEventListener('click', (e) => {
      if (e.target === dlg) dlg.close();
    });
  }
}

function openExamResultDialog(correct, total, score10, elapsedSec, levelName) {
  const dlg = document.getElementById('examResultDialog');
  const body = document.getElementById('examResultBody');
  if (!dlg || !body) return;

  const pct = Math.round((correct / total) * 100);
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (pct / 100) * circumference;
  const strokeColor = score10 >= 8 ? 'var(--success)' : score10 >= 5 ? 'var(--primary)' : 'var(--danger)';

  let feedback = 'Cần ôn tập lại lý thuyết nền tảng và xem kỹ lời giải các câu sai bên dưới.';
  if (score10 >= 9) feedback = 'Xuất sắc! Bạn đã sẵn sàng chinh phục điểm A+ kỳ thi Toán Rời Rạc!';
  else if (score10 >= 7.5) feedback = 'Rất tốt! Kiến thức vững vàng, chỉ cần rà soát lại một vài câu vận dụng.';
  else if (score10 >= 5) feedback = 'Đạt yêu cầu! Hãy xem chi tiết giải thích từng câu sai để củng cố phương pháp.';

  const mins = Math.floor(elapsedSec / 60);
  const secs = elapsedSec % 60;

  body.innerHTML = `
    <div class="score-ring-wrap">
      <svg width="136" height="136" viewBox="0 0 136 136" aria-label="Biểu đồ điểm số ${score10} trên 10">
        <circle cx="68" cy="68" r="${radius}" fill="none" stroke="var(--bg-card-subtle)" stroke-width="12"></circle>
        <circle cx="68" cy="68" r="${radius}" fill="none" stroke="${strokeColor}" stroke-width="12"
          stroke-dasharray="${circumference.toFixed(2)}" stroke-dashoffset="${offset.toFixed(2)}"
          stroke-linecap="round" transform="rotate(-90 68 68)"></circle>
        <text x="68" y="64" text-anchor="middle" fill="var(--text-main)" font-size="24" font-weight="800">${score10}</text>
        <text x="68" y="84" text-anchor="middle" fill="var(--text-muted)" font-size="12" font-weight="600">trên 10 điểm</text>
      </svg>
      <div style="flex: 1; min-width: 220px;">
        <div class="lesson-tag" style="display: inline-block; margin-bottom: 0.45rem;">${levelName}</div>
        <h4 style="font-size: 1.2rem; margin-bottom: 0.35rem;">Đúng ${correct} / ${total} câu (${pct}%)</h4>
        <p style="font-size: 0.86rem; color: var(--text-muted); margin-bottom: 0.5rem;">Thời gian hoàn thành: <strong>${mins} phút ${secs} giây</strong></p>
        <p style="font-size: 0.92rem;">${feedback}</p>
      </div>
    </div>
    <div style="display: flex; justify-content: flex-end; gap: 0.65rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
      <button type="button" class="btn btn-outline" onclick="document.getElementById('examResultDialog').close(); startExam(AppState.selectedExamLevel);">Thi đề mới</button>
      <button type="button" class="btn btn-primary" onclick="document.getElementById('examResultDialog').close();">Xem lời giải chi tiết từng câu</button>
    </div>
  `;

  if (typeof dlg.showModal === 'function') dlg.showModal();
}

function getFilteredQuestions() {
  const kw = AppState.quizSearchQuery;
  return QUIZ_DATA.filter(q => {
    if (AppState.quizFilterChapter !== 'all' && q.chapterId !== AppState.quizFilterChapter) return false;
    if (AppState.quizFilterLesson !== 'all' && q.lessonId !== AppState.quizFilterLesson) return false;
    if (AppState.quizFilterDiff !== 'all' && q.difficulty !== AppState.quizFilterDiff) return false;
    if (AppState.quizBookmarkOnly && !AppState.bookmarks.includes(q.id)) return false;
    if (kw && !(q._searchKey || '').includes(kw)) return false;
    return true;
  });
}

function rebuildPracticeDataset() {
  let baseList = getFilteredQuestions();
  if (AppState.practiceShuffle) {
    baseList = fisherYatesShuffle(baseList);
  }
  AppState.practiceQuestions = baseList.map(q => prepareQuestionForSession(q, AppState.practiceShuffle));
  AppState.quizPage = 1;
  AppState.quizNeedsRender = true;

  const countBadge = document.getElementById('quizTotalCountBadge');
  if (countBadge) countBadge.textContent = `${AppState.practiceQuestions.length} câu hỏi`;
}

function refreshQuizList() {
  if (AppState.quizMode === 'exam') {
    if (AppState.activeTab === 'quiz') renderExamQuestions();
    return;
  }

  rebuildPracticeDataset();
  if (AppState.activeTab === 'quiz') {
    renderPracticePage();
  }
}

function buildPageNumbers(current, totalPages) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  const pages = [1];
  const left = Math.max(2, current - 1);
  const right = Math.min(totalPages - 1, current + 1);
  if (left > 2) pages.push('...');
  for (let p = left; p <= right; p++) pages.push(p);
  if (right < totalPages - 1) pages.push('...');
  pages.push(totalPages);
  return pages;
}

function buildPaginationBarHtml(totalItems, startIdx, endIdx, currentPage, totalPages) {
  if (totalItems === 0) return '';
  const answeredInList = AppState.practiceQuestions.reduce(
    (acc, q) => acc + (AppState.practiceAnswers[q.id] !== undefined ? 1 : 0),
    0
  );
  const pageTokens = buildPageNumbers(currentPage, totalPages);

  return `
    <div class="pagination-info tabular-nums">
      <span>Hiển thị <strong>${startIdx + 1}–${endIdx}</strong> / <strong>${totalItems}</strong> câu</span>
      ${answeredInList > 0 ? `<span class="question-badge">Đã làm: ${answeredInList} câu</span>` : ''}
      ${answeredInList > 0 ? `<button type="button" class="btn btn-outline btn-xs" onclick="resetPracticeSessionAnswers()">Làm lại trang lọc</button>` : ''}
    </div>
    ${totalPages > 1 ? `
      <div class="pagination-controls tabular-nums">
        <button type="button" class="page-num-btn" ${currentPage <= 1 ? 'disabled' : ''} onclick="goToQuizPage(${currentPage - 1})">← Trước</button>
        ${pageTokens.map(tok =>
          tok === '...'
            ? `<span class="page-ellipsis">…</span>`
            : `<button type="button" class="page-num-btn ${tok === currentPage ? 'active' : ''}" onclick="goToQuizPage(${tok})">${tok}</button>`
        ).join('')}
        <button type="button" class="page-num-btn" ${currentPage >= totalPages ? 'disabled' : ''} onclick="goToQuizPage(${currentPage + 1})">Tiếp →</button>
      </div>
    ` : ''}
  `;
}

window.goToQuizPage = function(pageNum) {
  const totalPages = Math.max(1, Math.ceil(AppState.practiceQuestions.length / AppState.quizPageSize));
  const clamped = Math.min(Math.max(1, pageNum), totalPages);
  if (clamped === AppState.quizPage && !AppState.quizNeedsRender) return;
  AppState.quizPage = clamped;
  renderPracticePage();
  const quizSec = document.getElementById('quizSection');
  if (quizSec) quizSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

window.resetPracticeSessionAnswers = function() {
  AppState.practiceAnswers = {};
  renderPracticePage();
  showToast('Đã đặt lại trạng thái trả lời của danh sách đang lọc.', 'info');
};

function renderPracticePage() {
  const container = document.getElementById('quizQuestionsContainer');
  const pagTop = document.getElementById('quizPaginationTop');
  const pagBot = document.getElementById('quizPaginationBottom');
  if (!container) return;

  AppState.quizNeedsRender = false;
  const totalItems = AppState.practiceQuestions.length;
  const countBadge = document.getElementById('quizTotalCountBadge');
  if (countBadge) countBadge.textContent = `${totalItems} câu hỏi`;

  if (totalItems === 0) {
    if (pagTop) pagTop.innerHTML = '';
    if (pagBot) pagBot.innerHTML = '';
    container.innerHTML = `
      <div class="card" style="text-align: center; padding: 2.5rem;">
        <p style="font-size: 1.05rem; color: var(--text-muted);">Không tìm thấy câu hỏi phù hợp với bộ lọc hiện tại.</p>
        <button class="btn btn-outline" style="margin-top: 1rem;" onclick="resetQuizFilters()">Đặt lại bộ lọc</button>
      </div>
    `;
    return;
  }

  const totalPages = Math.max(1, Math.ceil(totalItems / AppState.quizPageSize));
  if (AppState.quizPage > totalPages) AppState.quizPage = totalPages;

  const startIdx = (AppState.quizPage - 1) * AppState.quizPageSize;
  const endIdx = Math.min(startIdx + AppState.quizPageSize, totalItems);
  const pageQuestions = AppState.practiceQuestions.slice(startIdx, endIdx);

  const pagHtml = buildPaginationBarHtml(totalItems, startIdx, endIdx, AppState.quizPage, totalPages);
  if (pagTop) pagTop.innerHTML = pagHtml;
  if (pagBot) pagBot.innerHTML = totalPages > 1 ? pagHtml : '';

  container.innerHTML = pageQuestions.map((q, localIdx) => {
    const globalIdx = startIdx + localIdx;
    const isSaved = AppState.bookmarks.includes(q.id);
    const chosenOpt = AppState.practiceAnswers[q.id];
    const isAnswered = chosenOpt !== undefined;

    return `
      <div class="quiz-card" id="qcard_${q.id}">
        <div class="quiz-question-header">
          <div class="quiz-header-badges">
            <span class="question-badge tabular-nums">Câu ${globalIdx + 1} • ${escapeHtmlPreservingMath(q.lessonTitle)}</span>
            <span class="difficulty-badge ${getDiffClass(q.difficulty)}">${q.difficulty === 'Đi thi' ? '🎓 Đi thi' : q.difficulty}</span>
            ${q.examSource ? `<span class="exam-source-badge">${escapeHtmlBasic(q.examSource)}</span>` : ''}
          </div>
          <button type="button" class="bookmark-q-btn ${isSaved ? 'bookmarked' : ''}" data-qid="${q.id}" onclick="toggleQuestionBookmark('${q.id}')">
            ${isSaved ? '★ Đã lưu' : '☆ Lưu câu'}
          </button>
        </div>
        <div class="quiz-question-text">${escapeHtmlPreservingMath(q.question)}</div>
        <div class="quiz-options-list">
          ${q.options.map((opt, optIdx) => {
            let cls = '';
            if (isAnswered) {
              if (optIdx === q.correctAnswer) cls = 'correct';
              else if (optIdx === chosenOpt) cls = 'wrong';
            }
            return `
              <button type="button" class="quiz-option-btn ${cls}" ${isAnswered ? 'disabled' : ''} data-qid="${q.id}" data-opt="${optIdx}" onclick="handlePracticeOptionClick('${q.id}', ${optIdx})">
                <span class="option-prefix">${String.fromCharCode(65 + optIdx)}</span>
                <span class="option-text">${escapeHtmlPreservingMath(opt)}</span>
              </button>
            `;
          }).join('')}
        </div>
        <div class="quiz-explanation-box" id="expl_${q.id}" style="display: ${isAnswered ? 'block' : 'none'};">
          ${isAnswered ? `
            <div class="explanation-header">${chosenOpt === q.correctAnswer ? '✓ Chính xác!' : `✕ Chưa đúng • Đáp án đúng: ${String.fromCharCode(65 + q.correctAnswer)}`}</div>
            <div>${escapeHtmlPreservingMath(q.explanation)}</div>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');

  renderMath(container);
}

function renderExamQuestions() {
  const container = document.getElementById('quizQuestionsContainer');
  if (!container) return;

  const questions = AppState.examQuestions;
  const countBadge = document.getElementById('quizTotalCountBadge');
  if (countBadge) countBadge.textContent = `${questions.length} câu trong đề`;

  container.innerHTML = questions.map((q, idx) => {
    const selectedOpt = AppState.userAnswers[q.id];
    const isSubmitted = AppState.isExamSubmitted;
    const isSaved = AppState.bookmarks.includes(q.id);

    return `
      <div class="quiz-card" id="qcard_${q.id}">
        <div class="quiz-question-header">
          <div class="quiz-header-badges">
            <span class="question-badge tabular-nums">Câu ${idx + 1} • ${escapeHtmlPreservingMath(q.lessonTitle)}</span>
            <span class="difficulty-badge ${getDiffClass(q.difficulty)}">${q.difficulty === 'Đi thi' ? '🎓 Đi thi' : q.difficulty}</span>
            ${q.examSource ? `<span class="exam-source-badge">${escapeHtmlBasic(q.examSource)}</span>` : ''}
          </div>
          <button type="button" class="bookmark-q-btn ${isSaved ? 'bookmarked' : ''}" data-qid="${q.id}" onclick="toggleQuestionBookmark('${q.id}')">
            ${isSaved ? '★ Đã lưu' : '☆ Lưu câu'}
          </button>
        </div>
        <div class="quiz-question-text">${escapeHtmlPreservingMath(q.question)}</div>
        <div class="quiz-options-list">
          ${q.options.map((opt, optIdx) => {
            let stateClass = '';
            if (selectedOpt === optIdx) stateClass = 'selected';
            if (isSubmitted) {
              if (optIdx === q.correctAnswer) stateClass = 'correct';
              else if (selectedOpt === optIdx && optIdx !== q.correctAnswer) stateClass = 'wrong';
            }
            return `
              <button type="button" class="quiz-option-btn ${stateClass}" ${isSubmitted ? 'disabled' : ''} onclick="handleExamOptionSelect('${q.id}', ${optIdx})">
                <span class="option-prefix">${String.fromCharCode(65 + optIdx)}</span>
                <span class="option-text">${escapeHtmlPreservingMath(opt)}</span>
              </button>
            `;
          }).join('')}
        </div>
        ${isSubmitted ? `
          <div class="quiz-explanation-box">
            <div class="explanation-header">${selectedOpt === q.correctAnswer ? '✓ Chính xác' : '✕ Chưa chính xác'} • Đáp án đúng: ${String.fromCharCode(65 + q.correctAnswer)}</div>
            <div>${escapeHtmlPreservingMath(q.explanation)}</div>
          </div>
        ` : ''}
      </div>
    `;
  }).join('');

  renderMath(container);
}

window.handlePracticeOptionClick = function(qid, optIdx) {
  const card = document.getElementById(`qcard_${qid}`);
  if (!card) return;

  const q = AppState.practiceQuestions.find(item => item.id === qid) || QUIZ_DATA.find(item => item.id === qid);
  if (!q) return;

  AppState.practiceAnswers[qid] = optIdx;

  card.querySelectorAll('.quiz-option-btn').forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correctAnswer) btn.classList.add('correct');
    else if (idx === optIdx && idx !== q.correctAnswer) btn.classList.add('wrong');
  });

  // Lazily render explanation & KaTeX ONLY for this single card (< 1ms!)
  const explBox = document.getElementById(`expl_${qid}`);
  if (explBox) {
    explBox.innerHTML = `
      <div class="explanation-header">${optIdx === q.correctAnswer ? '✓ Chính xác!' : `✕ Chưa đúng • Đáp án đúng: ${String.fromCharCode(65 + q.correctAnswer)}`}</div>
      <div>${escapeHtmlPreservingMath(q.explanation)}</div>
    `;
    explBox.style.display = 'block';
    renderMath(explBox);
  }

  // Update top/bottom pagination counters smoothly without touching question cards
  const totalItems = AppState.practiceQuestions.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / AppState.quizPageSize));
  const startIdx = (AppState.quizPage - 1) * AppState.quizPageSize;
  const endIdx = Math.min(startIdx + AppState.quizPageSize, totalItems);
  const pagHtml = buildPaginationBarHtml(totalItems, startIdx, endIdx, AppState.quizPage, totalPages);
  const pagTop = document.getElementById('quizPaginationTop');
  const pagBot = document.getElementById('quizPaginationBottom');
  if (pagTop) pagTop.innerHTML = pagHtml;
  if (pagBot) pagBot.innerHTML = totalPages > 1 ? pagHtml : '';
};

window.handleExamOptionSelect = function(qid, optIdx) {
  if (AppState.isExamSubmitted) return;
  AppState.userAnswers[qid] = optIdx;

  const card = document.getElementById(`qcard_${qid}`);
  if (card) {
    card.querySelectorAll('.quiz-option-btn').forEach((btn, idx) => {
      btn.classList.toggle('selected', idx === optIdx);
    });
  }
  updateExamAnsweredProgress();
  const pBtn = document.querySelector(`.palette-num-btn[data-pqid="${qid}"]`);
  if (pBtn) pBtn.classList.add('answered');
  else renderExamPalette();
};

function getDiffClass(diff) {
  if (diff === 'Nhận biết') return 'diff-easy';
  if (diff === 'Thông hiểu') return 'diff-medium';
  if (diff === 'Đi thi') return 'diff-exam';
  return 'diff-hard';
}

window.resetQuizFilters = function() {
  AppState.quizFilterChapter = 'all';
  AppState.quizFilterLesson = 'all';
  AppState.quizFilterDiff = 'all';
  AppState.quizBookmarkOnly = false;
  AppState.quizSearchQuery = '';
  const chSel = document.getElementById('quizChapterSelect');
  const diffSel = document.getElementById('quizDiffSelect');
  const bmBtn = document.getElementById('quizBookmarkFilterBtn');
  const searchInp = document.getElementById('quizSearchInput');
  if (chSel) chSel.value = 'all';
  if (diffSel) diffSel.value = 'all';
  if (bmBtn) bmBtn.classList.remove('active');
  if (searchInp) searchInp.value = '';
  syncExamDiffQuickBtn();
  updateQuizLessonOptions();
  refreshQuizList();
};

/* ==========================================================================
   7. Official ĐHSP Exam Archive (2022–2025)
   ========================================================================== */
function initExamArchive() {
  if (typeof EXAM_ARCHIVE_DATA === 'undefined') return;

  const filterBar = document.getElementById('examArchiveFilterBar');
  if (filterBar) {
    filterBar.querySelectorAll('[data-exfilter]').forEach(btn => {
      btn.addEventListener('click', () => {
        filterBar.querySelectorAll('[data-exfilter]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        AppState.archiveFilter = btn.getAttribute('data-exfilter');
        const visible = getFilteredArchiveExams();
        if (visible.length > 0 && !visible.some(e => e.id === AppState.activeArchiveExamId)) {
          selectArchiveExam(visible[0].id);
        } else {
          renderExamArchiveCards();
          renderActiveArchivePaper();
        }
      });
    });
  }

  renderExamArchiveCards();
  renderActiveArchivePaper();
}

function getFilteredArchiveExams() {
  if (typeof EXAM_ARCHIVE_DATA === 'undefined') return [];
  if (AppState.archiveFilter === 'all') return EXAM_ARCHIVE_DATA;
  return EXAM_ARCHIVE_DATA.filter(e => e.type === AppState.archiveFilter);
}

window.selectArchiveExam = function(examId) {
  const exam = EXAM_ARCHIVE_DATA.find(e => e.id === examId);
  if (!exam) return;
  stopArchiveTimer();
  AppState.activeArchiveExamId = examId;
  AppState.archiveTimeRemaining = exam.durationMinutes * 60;
  renderExamArchiveCards();
  renderActiveArchivePaper();
};

function renderExamArchiveCards() {
  const container = document.getElementById('examArchiveCards');
  if (!container || typeof EXAM_ARCHIVE_DATA === 'undefined') return;

  const list = getFilteredArchiveExams();
  container.innerHTML = list.map(ex => `
    <button type="button" class="archive-paper-card ${ex.id === AppState.activeArchiveExamId ? 'active' : ''}" onclick="selectArchiveExam('${ex.id}')">
      <div class="archive-paper-top">
        <span>${ex.code} • ${ex.type.toUpperCase()}</span>
        <span class="tabular-nums">${ex.durationMinutes} phút</span>
      </div>
      <h4>${ex.title}</h4>
      <p>${ex.problems.length} bài toán tự luận • Thang điểm ${ex.totalPoints}</p>
    </button>
  `).join('');
}

function renderActiveArchivePaper() {
  const viewer = document.getElementById('examArchiveViewer');
  if (!viewer || typeof EXAM_ARCHIVE_DATA === 'undefined') return;

  const exam = EXAM_ARCHIVE_DATA.find(e => e.id === AppState.activeArchiveExamId) || EXAM_ARCHIVE_DATA[0];
  if (!exam) return;

  const m = Math.floor(AppState.archiveTimeRemaining / 60);
  const s = AppState.archiveTimeRemaining % 60;
  const timeStr = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

  viewer.innerHTML = `
    <div class="archive-paper-header">
      <div>
        <div class="lesson-tag" style="display: inline-block; margin-bottom: 0.4rem;">${exam.institution} • ${exam.semester}</div>
        <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.25rem;">${exam.title}</h3>
        <p style="font-size: 0.86rem; color: var(--text-muted);">Nội dung: ${exam.chaptersCovered.join(' • ')}</p>
      </div>
      <div style="display: flex; align-items: center; gap: 0.65rem; flex-wrap: wrap;">
        <div class="archive-timer-widget">
          <span class="timer-box tabular-nums" id="archiveTimerText" style="color: var(--primary); font-size: 1.05rem;">${timeStr}</span>
          <button type="button" class="btn btn-primary btn-xs" onclick="toggleArchiveTimer()">${AppState.archiveTimerRunning ? 'Tạm dừng' : 'Bấm giờ làm đề'}</button>
          <button type="button" class="btn btn-outline btn-xs" onclick="resetArchiveTimer(${exam.durationMinutes})">Đặt lại</button>
        </div>
        <button type="button" class="btn btn-outline btn-sm" onclick="toggleAllArchiveSolutions()">Hiện / Ẩn tất cả lời giải</button>
      </div>
    </div>

    ${exam.problems.map(prob => `
      <div class="archive-problem-card">
        <div class="archive-problem-top">
          <div>
            <span class="question-badge">${prob.label} (${prob.points.toFixed(1)} điểm)</span>
            <strong style="margin-left: 0.5rem; font-size: 0.92rem;">${escapeHtmlPreservingMath(prob.topic)}</strong>
          </div>
          <button type="button" class="btn btn-outline btn-xs" onclick="toggleSingleSolution('sol_${prob.id}')">
            Xem / Ẩn lời giải từng bước
          </button>
        </div>
        <div class="lesson-body">${parseMarkdownToHtml(prob.statement)}</div>
        <div class="archive-solution-panel lesson-body" id="sol_${prob.id}">
          ${parseMarkdownToHtml(prob.solution)}
        </div>
      </div>
    `).join('')}
  `;

  renderMath(viewer);
}

window.toggleSingleSolution = function(domId) {
  const el = document.getElementById(domId);
  if (el) el.classList.toggle('open');
};

window.toggleAllArchiveSolutions = function() {
  const panels = document.querySelectorAll('#examArchiveViewer .archive-solution-panel');
  const anyClosed = Array.from(panels).some(p => !p.classList.contains('open'));
  panels.forEach(p => p.classList.toggle('open', anyClosed));
};

window.toggleArchiveTimer = function() {
  if (AppState.archiveTimerRunning) {
    stopArchiveTimer();
    renderActiveArchivePaper();
    return;
  }
  AppState.archiveTimerRunning = true;
  renderActiveArchivePaper();
  AppState.archiveTimerInterval = setInterval(() => {
    AppState.archiveTimeRemaining--;
    const tEl = document.getElementById('archiveTimerText');
    if (tEl) {
      const m = Math.floor(Math.max(0, AppState.archiveTimeRemaining) / 60);
      const s = Math.max(0, AppState.archiveTimeRemaining) % 60;
      tEl.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }
    if (AppState.archiveTimeRemaining <= 0) {
      stopArchiveTimer();
      showToast('Đã hết thời gian tự luyện đề thi! Hãy đối chiếu đáp án chi tiết.', 'warning');
      renderActiveArchivePaper();
    }
  }, 1000);
};

function stopArchiveTimer() {
  AppState.archiveTimerRunning = false;
  if (AppState.archiveTimerInterval) {
    clearInterval(AppState.archiveTimerInterval);
    AppState.archiveTimerInterval = null;
  }
}

window.resetArchiveTimer = function(minutes) {
  stopArchiveTimer();
  AppState.archiveTimeRemaining = minutes * 60;
  renderActiveArchivePaper();
};

/* ==========================================================================
   8. 3D Flip Flashcards System
   ========================================================================== */
function initFlashcards() {
  if (typeof FLASHCARDS_DATA === 'undefined') return;
  rebuildFlashcardDeck();

  const chFilter = document.getElementById('fcChapterFilter');
  if (chFilter) {
    chFilter.querySelectorAll('[data-fcchap]').forEach(btn => {
      btn.addEventListener('click', () => {
        chFilter.querySelectorAll('[data-fcchap]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        AppState.fcChapter = btn.getAttribute('data-fcchap');
        rebuildFlashcardDeck();
      });
    });
  }

  const unlearnedBtn = document.getElementById('fcOnlyUnlearnedBtn');
  if (unlearnedBtn) {
    unlearnedBtn.addEventListener('click', () => {
      AppState.fcOnlyUnlearned = !AppState.fcOnlyUnlearned;
      unlearnedBtn.classList.toggle('active', AppState.fcOnlyUnlearned);
      rebuildFlashcardDeck();
    });
  }

  const shuffleBtn = document.getElementById('fcShuffleBtn');
  if (shuffleBtn) {
    shuffleBtn.addEventListener('click', () => {
      AppState.fcDeck = fisherYatesShuffle(AppState.fcDeck);
      AppState.fcIndex = 0;
      AppState.fcFlipped = false;
      renderFlashcardStage();
      showToast('Đã xáo trộn ngẫu nhiên bộ thẻ Flashcards!', 'info');
    });
  }

  const scene = document.getElementById('flashcardScene');
  const flipBtn = document.getElementById('fcFlipBtn');
  const prevBtn = document.getElementById('fcPrevBtn');
  const nextBtn = document.getElementById('fcNextBtn');
  const learnedBtn = document.getElementById('fcToggleLearnedBtn');

  const flipCard = () => {
    if (AppState.fcDeck.length === 0) return;
    AppState.fcFlipped = !AppState.fcFlipped;
    if (scene) scene.classList.toggle('is-flipped', AppState.fcFlipped);
  };

  if (scene) scene.addEventListener('click', flipCard);
  if (flipBtn) flipBtn.addEventListener('click', flipCard);

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (AppState.fcDeck.length === 0) return;
      AppState.fcIndex = (AppState.fcIndex - 1 + AppState.fcDeck.length) % AppState.fcDeck.length;
      AppState.fcFlipped = false;
      renderFlashcardStage();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (AppState.fcDeck.length === 0) return;
      AppState.fcIndex = (AppState.fcIndex + 1) % AppState.fcDeck.length;
      AppState.fcFlipped = false;
      renderFlashcardStage();
    });
  }

  if (learnedBtn) {
    learnedBtn.addEventListener('click', () => {
      const card = AppState.fcDeck[AppState.fcIndex];
      if (!card) return;
      const idx = AppState.learnedFlashcards.indexOf(card.id);
      if (idx > -1) {
        AppState.learnedFlashcards.splice(idx, 1);
      } else {
        AppState.learnedFlashcards.push(card.id);
        logActivity(`Thuộc thẻ Flashcard ${card.id}`);
      }
      localStorage.setItem('dm_learned_flashcards', JSON.stringify(AppState.learnedFlashcards));
      updateDashboardStats();
      if (AppState.fcOnlyUnlearned) rebuildFlashcardDeck();
      else renderFlashcardStage();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (AppState.activeTab !== 'flashcards') return;
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) return;
    if (e.code === 'Space') {
      e.preventDefault();
      flipCard();
    } else if (e.key === 'ArrowRight') {
      nextBtn?.click();
    } else if (e.key === 'ArrowLeft') {
      prevBtn?.click();
    }
  });
}

function rebuildFlashcardDeck() {
  if (typeof FLASHCARDS_DATA === 'undefined') return;
  AppState.fcDeck = FLASHCARDS_DATA.filter(fc => {
    if (AppState.fcChapter !== 'all' && fc.chapterId !== AppState.fcChapter) return false;
    if (AppState.fcOnlyUnlearned && AppState.learnedFlashcards.includes(fc.id)) return false;
    return true;
  });
  AppState.fcIndex = 0;
  AppState.fcFlipped = false;
  renderFlashcardStage();
}

function renderFlashcardStage() {
  if (typeof FLASHCARDS_DATA === 'undefined') return;
  const totalAll = FLASHCARDS_DATA.length;
  const learnedCount = AppState.learnedFlashcards.length;
  const pct = totalAll > 0 ? Math.round((learnedCount / totalAll) * 100) : 0;

  const mText = document.getElementById('fcMasteryText');
  const mBar = document.getElementById('fcMasteryBar');
  if (mText) mText.textContent = `Đã thuộc: ${learnedCount} / ${totalAll} thẻ (${pct}%)`;
  if (mBar) mBar.style.width = `${pct}%`;

  const scene = document.getElementById('flashcardScene');
  const counter = document.getElementById('fcCounterLabel');
  const frontTag = document.getElementById('fcFrontTag');
  const statusPill = document.getElementById('fcStatusPill');
  const frontContent = document.getElementById('fcFrontContent');
  const backContent = document.getElementById('fcBackContent');
  const learnedBtn = document.getElementById('fcToggleLearnedBtn');

  if (scene) scene.classList.toggle('is-flipped', AppState.fcFlipped);

  if (AppState.fcDeck.length === 0) {
    if (counter) counter.textContent = '0 / 0 thẻ';
    if (frontTag) frontTag.textContent = 'Hoàn thành';
    if (statusPill) statusPill.textContent = 'Đã thuộc hết';
    if (frontContent) frontContent.innerHTML = 'Bạn đã thuộc toàn bộ các thẻ trong bộ lọc này!';
    if (backContent) backContent.innerHTML = 'Hãy tắt bộ lọc "Chỉ thẻ chưa thuộc" hoặc chọn chương khác để ôn lại.';
    return;
  }

  const card = AppState.fcDeck[AppState.fcIndex];
  const isLearned = AppState.learnedFlashcards.includes(card.id);

  if (counter) counter.textContent = `Thẻ ${AppState.fcIndex + 1} / ${AppState.fcDeck.length}`;
  if (frontTag) frontTag.innerHTML = escapeHtmlPreservingMath(card.tag);
  if (statusPill) {
    statusPill.textContent = isLearned ? '✓ Đã thuộc' : 'Cần ôn';
    statusPill.classList.toggle('learned', isLearned);
  }
  if (frontContent) frontContent.innerHTML = parseInlineFormattingWithMath(card.front);
  if (backContent) backContent.innerHTML = parseInlineFormattingWithMath(card.back);
  if (learnedBtn) {
    learnedBtn.textContent = isLearned ? 'Bỏ đánh dấu Đã thuộc' : '✓ Đánh dấu Đã thuộc';
    learnedBtn.className = isLearned ? 'btn btn-outline' : 'btn btn-primary';
  }

  renderMath(document.getElementById('flashcardsSection'));
}

/* ==========================================================================
   9. Save & Load Data Backup System (Modeled after tinhoc12-main) + PDF Modal
   ========================================================================== */
function initDataSyncModal() {
  const openBtn = document.getElementById('openDataSyncBtn');
  const dlg = document.getElementById('dataSyncDialog');
  const closeBtn = document.getElementById('closeDataSyncBtn');
  const exportBtn = document.getElementById('exportBackupBtn');
  const fileInput = document.getElementById('importBackupFileInput');
  const dropzone = document.getElementById('backupDropzone');
  const confirmRestoreBtn = document.getElementById('confirmRestoreBtn');
  const cancelRestoreBtn = document.getElementById('cancelRestoreBtn');
  const resetAllBtn = document.getElementById('resetAllProgressBtn');

  if (openBtn) openBtn.addEventListener('click', openDataSyncModal);
  if (closeBtn && dlg) closeBtn.addEventListener('click', () => dlg.close());
  if (dlg) {
    dlg.addEventListener('click', (e) => {
      if (e.target === dlg) dlg.close();
    });
  }
  if (exportBtn) exportBtn.addEventListener('click', exportProgressBackup);

  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (file) readBackupJsonFile(file);
    });
  }

  if (dropzone) {
    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    });
    dropzone.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));
    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
      const file = e.dataTransfer?.files?.[0];
      if (file) readBackupJsonFile(file);
    });
  }

  if (confirmRestoreBtn) {
    confirmRestoreBtn.addEventListener('click', applyPendingRestore);
  }

  if (cancelRestoreBtn) {
    cancelRestoreBtn.addEventListener('click', () => {
      AppState.pendingRestoreData = null;
      const box = document.getElementById('pendingRestoreConfirmBox');
      if (box) box.style.display = 'none';
    });
  }

  if (resetAllBtn) {
    resetAllBtn.addEventListener('click', () => {
      if (!window.confirm('Bạn có chắc chắn muốn xóa toàn bộ tiến độ bài học, lịch sử điểm thi, câu đã lưu và thẻ Flashcard không?')) {
        return;
      }
      AppState.completedLessons = [];
      AppState.quizHistory = [];
      AppState.bookmarks = [];
      AppState.learnedFlashcards = [];
      AppState.activities = [];
      localStorage.removeItem('dm_completed_lessons');
      localStorage.removeItem('dm_quiz_history');
      localStorage.removeItem('dm_bookmarks');
      localStorage.removeItem('dm_learned_flashcards');
      localStorage.removeItem('dm_activities');
      refreshAllViewsAfterSync();
      renderSyncModalSummary();
      showToast('Đã đặt lại toàn bộ tiến độ học tập về ban đầu.', 'warning');
    });
  }
}

window.openDataSyncModal = function() {
  const dlg = document.getElementById('dataSyncDialog');
  if (!dlg) return;
  AppState.pendingRestoreData = null;
  const confirmBox = document.getElementById('pendingRestoreConfirmBox');
  if (confirmBox) confirmBox.style.display = 'none';
  renderSyncModalSummary();
  if (typeof dlg.showModal === 'function') dlg.showModal();
};

function renderSyncModalSummary() {
  const summaryEl = document.getElementById('syncStatsSummary');
  const logEl = document.getElementById('syncActivityList');

  if (summaryEl) {
    summaryEl.innerHTML = `
      <div class="sync-stat-pill"><strong class="tabular-nums">${AppState.completedLessons.length}</strong><span>Bài đã học</span></div>
      <div class="sync-stat-pill"><strong class="tabular-nums">${AppState.quizHistory.length}</strong><span>Lượt nộp đề</span></div>
      <div class="sync-stat-pill"><strong class="tabular-nums">${AppState.bookmarks.length}</strong><span>Câu đã lưu</span></div>
      <div class="sync-stat-pill"><strong class="tabular-nums">${AppState.learnedFlashcards.length}</strong><span>Thẻ đã thuộc</span></div>
    `;
  }

  if (logEl) {
    if (AppState.activities.length === 0) {
      logEl.innerHTML = '<li style="color: var(--text-muted); justify-content: center;">Chưa có hoạt động nào được ghi nhận.</li>';
    } else {
      logEl.innerHTML = AppState.activities.slice(0, 12).map(act => {
        const d = new Date(act.time);
        const timeStr = Number.isNaN(d.getTime()) ? '' : d.toLocaleString('vi-VN');
        return `<li><span>${act.text}</span><span class="tabular-nums" style="color: var(--text-muted); font-size: 0.75rem;">${timeStr}</span></li>`;
      }).join('');
    }
  }
}

window.exportProgressBackup = function() {
  const dateStr = new Date().toISOString().slice(0, 10);
  const payload = {
    app: 'DiscreteMathHub',
    version: '2.0',
    exportedAt: new Date().toISOString(),
    data: {
      theme: AppState.theme,
      completedLessons: AppState.completedLessons,
      quizHistory: AppState.quizHistory,
      bookmarks: AppState.bookmarks,
      learnedFlashcards: AppState.learnedFlashcards,
      activities: AppState.activities
    }
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `discrete-math-backup-${dateStr}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);

  logActivity('Xuất tệp sao lưu dữ liệu (.json)');
  renderSyncModalSummary();
  showToast(`Đã tải xuống tệp sao lưu discrete-math-backup-${dateStr}.json!`, 'success');
};

function readBackupJsonFile(file) {
  const nameLabel = document.getElementById('selectedBackupFileName');
  if (nameLabel) nameLabel.textContent = `Đã chọn: ${file.name}`;

  const reader = new FileReader();
  reader.onload = (ev) => {
    try {
      const parsed = JSON.parse(String(ev.target?.result || ''));
      const core = parsed && typeof parsed === 'object' && parsed.data && typeof parsed.data === 'object'
        ? parsed.data
        : parsed;

      if (!core || typeof core !== 'object') {
        throw new Error('Cấu trúc tệp JSON không hợp lệ.');
      }

      const normalized = {
        theme: core.theme === 'dark' ? 'dark' : 'light',
        completedLessons: Array.isArray(core.completedLessons) ? core.completedLessons.filter(x => typeof x === 'string') : [],
        quizHistory: Array.isArray(core.quizHistory) ? core.quizHistory : [],
        bookmarks: Array.isArray(core.bookmarks) ? core.bookmarks.filter(x => typeof x === 'string') : [],
        learnedFlashcards: Array.isArray(core.learnedFlashcards) ? core.learnedFlashcards.filter(x => typeof x === 'string') : [],
        activities: Array.isArray(core.activities) ? core.activities : []
      };

      const hasValidField = ['completedLessons', 'quizHistory', 'bookmarks', 'learnedFlashcards'].some(k => k in core);
      if (!hasValidField) {
        throw new Error('Tệp JSON không chứa trường dữ liệu học tập Discrete Math Hub.');
      }

      AppState.pendingRestoreData = normalized;
      const confirmBox = document.getElementById('pendingRestoreConfirmBox');
      const infoEl = document.getElementById('pendingRestoreInfo');
      if (infoEl) {
        infoEl.innerHTML = `Tìm thấy bản sao lưu hợp lệ: <strong>${normalized.completedLessons.length}</strong> bài hoàn thành, <strong>${normalized.quizHistory.length}</strong> lượt thi, <strong>${normalized.bookmarks.length}</strong> câu đã lưu và <strong>${normalized.learnedFlashcards.length}</strong> thẻ Flashcard. Bạn muốn khôi phục ngay?`;
      }
      if (confirmBox) confirmBox.style.display = 'block';
    } catch (err) {
      AppState.pendingRestoreData = null;
      showToast(`Lỗi đọc tệp sao lưu: ${err.message}`, 'danger');
    }
  };
  reader.readAsText(file, 'utf-8');
}

function applyPendingRestore() {
  if (!AppState.pendingRestoreData) return;
  const d = AppState.pendingRestoreData;

  AppState.theme = d.theme;
  AppState.completedLessons = d.completedLessons;
  AppState.quizHistory = d.quizHistory;
  AppState.bookmarks = d.bookmarks;
  AppState.learnedFlashcards = d.learnedFlashcards;
  AppState.activities = d.activities;

  localStorage.setItem('dm_theme', AppState.theme);
  localStorage.setItem('dm_completed_lessons', JSON.stringify(AppState.completedLessons));
  localStorage.setItem('dm_quiz_history', JSON.stringify(AppState.quizHistory));
  localStorage.setItem('dm_bookmarks', JSON.stringify(AppState.bookmarks));
  localStorage.setItem('dm_learned_flashcards', JSON.stringify(AppState.learnedFlashcards));
  logActivity('Khôi phục dữ liệu học tập từ tệp sao lưu (.json)');

  AppState.pendingRestoreData = null;
  const confirmBox = document.getElementById('pendingRestoreConfirmBox');
  if (confirmBox) confirmBox.style.display = 'none';

  refreshAllViewsAfterSync();
  renderSyncModalSummary();
  showToast('Khôi phục toàn bộ tiến độ học tập thành công!', 'success');
}

function refreshAllViewsAfterSync() {
  document.documentElement.setAttribute('data-theme', AppState.theme);
  updateThemeIcon();
  initSidebar();
  updateDashboardStats();
  renderDashboardChapterCards();
  updateMarkCompletedBtn();
  updateBookmarkBadge();
  rebuildFlashcardDeck();
  if (AppState.activeTab === 'quiz') refreshQuizList();
}

function initPdfPreviewModal() {
  const dlg = document.getElementById('pdfPreviewDialog');
  const closeBtn = document.getElementById('closePdfPreviewBtn');
  const frame = document.getElementById('pdfPreviewFrame');

  if (closeBtn && dlg) {
    closeBtn.addEventListener('click', () => {
      if (frame) frame.src = 'about:blank';
      dlg.close();
    });
  }
  if (dlg) {
    dlg.addEventListener('click', (e) => {
      if (e.target === dlg) {
        if (frame) frame.src = 'about:blank';
        dlg.close();
      }
    });
  }
}

window.openPdfPreview = function(pdfPath, title) {
  const dlg = document.getElementById('pdfPreviewDialog');
  const titleEl = document.getElementById('pdfPreviewTitle');
  const frame = document.getElementById('pdfPreviewFrame');
  const openLink = document.getElementById('pdfModalOpenNewTab');
  const dlLink = document.getElementById('pdfModalDownload');

  if (!dlg || !frame) return;
  const encodedUrl = encodeURI(pdfPath);
  if (titleEl) titleEl.textContent = title || 'Xem tài liệu PDF';
  if (openLink) openLink.href = encodedUrl;
  if (dlLink) dlLink.href = encodedUrl;
  frame.src = encodedUrl;
  logActivity(`Xem tài liệu: ${title}`);
  if (typeof dlg.showModal === 'function') dlg.showModal();
};

/* ==========================================================================
   10. Interactive Labs (5 Tools)
   ========================================================================== */
function initTools() {
  const toolBtns = document.querySelectorAll('.tool-tab-btn');
  toolBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const toolId = btn.getAttribute('data-tool');
      toolBtns.forEach(b => b.classList.toggle('active', b === btn));
      document.querySelectorAll('.tool-panel').forEach(p => p.classList.remove('active'));
      const activePanel = document.getElementById(`panel_${toolId}`);
      if (activePanel) {
        activePanel.classList.add('active');
        renderMath(activePanel);
      }
    });
  });

  initTruthTableToolUI();
  initKMapToolUI();
  initCombinatoricsToolUI();
  initRelationToolUI();
  initRecurrenceToolUI();
}

/* --- Lab 1: Truth Table with KaTeX Intermediate Columns --- */
function initTruthTableToolUI() {
  const calcBtn = document.getElementById('calcTruthTableBtn');
  const input = document.getElementById('logicExprInput');
  const resultDiv = document.getElementById('truthTableResult');
  const clearBtn = document.getElementById('clearLogicExprBtn');

  if (!calcBtn || !input || !resultDiv) return;

  const execute = () => {
    const expr = input.value.trim();
    if (!expr) {
      resultDiv.innerHTML = '<div style="color: var(--danger); padding: 0.75rem;">Vui lòng nhập biểu thức mệnh đề logic!</div>';
      return;
    }

    const res = window.TruthTableTool.generate(expr);
    if (res.error) {
      resultDiv.innerHTML = `<div style="color: var(--danger); background: var(--danger-light); padding: 0.9rem 1rem; border-radius: var(--radius-md);">Lỗi cú pháp: ${res.error}</div>`;
      return;
    }

    let summaryBadge = '';
    if (res.isTautology) summaryBadge = `<span style="background: var(--success-light); color: var(--success); padding: 0.28rem 0.75rem; border-radius: var(--radius-full); font-weight: 700;">✓ HẰNG ĐÚNG (Tautology)</span>`;
    else if (res.isContradiction) summaryBadge = `<span style="background: var(--danger-light); color: var(--danger); padding: 0.28rem 0.75rem; border-radius: var(--radius-full); font-weight: 700;">✕ HẰNG SAI / MÂU THUẪN (Contradiction)</span>`;
    else summaryBadge = `<span style="background: var(--info-light); color: var(--info); padding: 0.28rem 0.75rem; border-radius: var(--radius-full); font-weight: 700;">TIẾP LIÊN / KHẢ THỎA (Contingency)</span>`;

    const subs = res.subExpressions || [];

    resultDiv.innerHTML = `
      <div style="margin: 1.25rem 0 1rem 0; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.85rem;">
        <div><strong>Phân loại biểu thức $${res.mainLatex}$:</strong> ${summaryBadge}</div>
        <div class="tabular-nums" style="font-size: 0.88rem; color: var(--text-muted);">${res.totalRows} dòng (${res.onesCount} Đúng, ${res.zerosCount} Sai)</div>
      </div>
      <div style="overflow-x: auto;">
        <table class="lesson-body table" style="width: 100%;">
          <thead>
            <tr>
              ${res.variables.map(v => `<th style="text-align: center;">$${v}$</th>`).join('')}
              ${subs.map(s => `<th style="text-align: center; color: var(--text-muted);">$${s.latex}$</th>`).join('')}
              <th style="text-align: center; background: var(--primary-light); color: var(--primary); font-weight: 800;">$${res.mainLatex}$</th>
            </tr>
          </thead>
          <tbody>
            ${res.rows.map(r => `
              <tr>
                ${res.variables.map(v => `<td class="tabular-nums" style="text-align: center;">${r.env[v]}</td>`).join('')}
                ${(r.subVals || []).map(sv => `<td class="tabular-nums" style="text-align: center; color: var(--text-muted);">${sv}</td>`).join('')}
                <td class="tabular-nums" style="text-align: center; font-weight: 800; color: ${r.result === 1 ? 'var(--success)' : 'var(--danger)'}; background: ${r.result === 1 ? 'var(--success-light)' : 'var(--danger-light)'};">${r.result}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;

    renderMath(resultDiv);
  };

  calcBtn.addEventListener('click', execute);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') execute(); });

  // Math keypad insert at cursor
  document.querySelectorAll('.key-btn[data-insert]').forEach(btn => {
    btn.addEventListener('click', () => {
      const sym = btn.getAttribute('data-insert');
      const start = input.selectionStart ?? input.value.length;
      const end = input.selectionEnd ?? input.value.length;
      input.value = input.value.slice(0, start) + sym + input.value.slice(end);
      input.focus();
      const nextPos = start + sym.length;
      input.setSelectionRange(nextPos, nextPos);
    });
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      input.value = '';
      input.focus();
    });
  }

  document.querySelectorAll('.preset-logic-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      input.value = btn.getAttribute('data-expr');
      execute();
    });
  });

  execute();
}

/* --- Lab 2: K-Map Solver + SVG Logic Gate Circuit --- */
function initKMapToolUI() {
  window.KMapTool.init(4);
  const textbookMinterms = [0, 1, 2, 4, 5, 8, 10, 14, 15];
  textbookMinterms.forEach(m => window.KMapTool.setVal(m, 1));
  renderKMapGrid();

  const varSelect = document.getElementById('kmapVarSelect');
  const presetSelect = document.getElementById('kmapPresetSelect');

  if (varSelect) {
    varSelect.addEventListener('change', (e) => {
      const vars = parseInt(e.target.value, 10);
      window.KMapTool.init(vars);
      renderKMapGrid();
    });
  }

  const applySelectedPreset = () => {
    const key = presetSelect ? presetSelect.value : 'textbook';
    const presets = {
      textbook: { vars: 4, minterms: [0, 1, 2, 4, 5, 8, 10, 14, 15] },
      ck2223: { vars: 4, minterms: [4, 5, 9, 10, 11, 13, 15] },
      ck2324: { vars: 4, minterms: [2, 4, 5, 10, 13, 14, 15] },
      ck2425: { vars: 4, minterms: [0, 1, 5, 6, 7, 9, 10] },
      majority3: { vars: 3, minterms: [3, 5, 6, 7] }
    };
    const p = presets[key] || presets.textbook;
    window.KMapTool.init(p.vars);
    if (varSelect) varSelect.value = String(p.vars);
    p.minterms.forEach(m => window.KMapTool.setVal(m, 1));
    renderKMapGrid();
  };

  if (presetSelect) presetSelect.addEventListener('change', applySelectedPreset);

  document.getElementById('kmapSetZerosBtn')?.addEventListener('click', () => {
    window.KMapTool.setAll(0);
    renderKMapGrid();
  });

  document.getElementById('kmapSetOnesBtn')?.addEventListener('click', () => {
    window.KMapTool.setAll(1);
    renderKMapGrid();
  });

  document.getElementById('kmapSampleBtn')?.addEventListener('click', applySelectedPreset);
}

function renderKMapGrid() {
  const container = document.getElementById('kmapGridContainer');
  if (!container) return;

  const dim = window.KMapTool.getDimensions();
  const rowLabels = dim.rows === 2 ? ['0', '1'] : ['00', '01', '11', '10'];
  const colLabels = dim.cols === 2 ? ['0', '1'] : ['00', '01', '11', '10'];

  container.innerHTML = `
    <div class="kmap-wrapper">
      <table class="kmap-grid">
        <thead>
          <tr>
            <th class="kmap-legend-header">$${dim.rowVars.join('')} \\setminus ${dim.colVars.join('')}$</th>
            ${colLabels.map(cl => `<th class="kmap-legend-header tabular-nums">${cl}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${rowLabels.map((rl, r) => `
            <tr>
              <th class="kmap-legend-header tabular-nums">${rl}</th>
              ${colLabels.map((cl, c) => {
                const val = window.KMapTool.getGridValue(r, c);
                const m = window.KMapTool.cellToMinterm(r, c);
                return `
                  <td class="kmap-cell tabular-nums ${val === 1 ? 'active-1' : ''}" onclick="toggleKMapCell(${r}, ${c})" title="Minterm m${m}">
                    ${val}
                    <div style="font-size: 0.66rem; color: var(--text-muted); font-weight: 500;">$m_{${m}}$</div>
                  </td>
                `;
              }).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  renderMath(container);
  updateKMapSolution();
}

window.toggleKMapCell = function(r, c) {
  const m = window.KMapTool.cellToMinterm(r, c);
  window.KMapTool.toggle(m);
  renderKMapGrid();
};

function buildLogicCircuitSVG(sol) {
  if (!sol.chosenPIs || sol.chosenPIs.length === 0 || sol.minimalSOPLatex === '0' || sol.minimalSOPLatex === '1') {
    return `<div style="font-size: 0.86rem; color: var(--text-muted);">Hàm hằng $f = ${sol.minimalSOPLatex}$ (nối trực tiếp mức logic hằng số, không cần cổng logic).</div>`;
  }

  const terms = sol.chosenPIs;
  const rowH = 54;
  const svgH = Math.max(120, terms.length * rowH + 30);
  const svgW = 540;
  const outY = svgH / 2;

  const termNodes = terms.map((pi, idx) => {
    const y = 30 + idx * rowH;
    const label = pi.literals.map(l => l.negated ? `${l.varName}\u0304` : l.varName).join(' , ');
    const isSingleLit = pi.literalCount <= 1;
    return `
      <text x="16" y="${y + 5}" fill="var(--text-main)" font-size="13" font-weight="700">${label}</text>
      <line x1="95" y1="${y}" x2="180" y2="${y}" stroke="var(--primary)" stroke-width="2"></line>
      ${isSingleLit ? `
        <rect x="180" y="${y - 14}" width="66" height="28" rx="6" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="1.8"></rect>
        <text x="213" y="${y + 4}" text-anchor="middle" fill="var(--primary)" font-size="11" font-weight="700">DÂY</text>
      ` : `
        <path d="M180,${y - 16} L212,${y - 16} A16,16 0 0,1 212,${y + 16} L180,${y + 16} Z" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="2"></path>
        <text x="202" y="${y + 4}" text-anchor="middle" fill="var(--primary)" font-size="10" font-weight="800">AND</text>
      `}
      <line x1="230" y1="${y}" x2="345" y2="${outY + (idx - (terms.length - 1) / 2) * 8}" stroke="var(--primary)" stroke-width="1.8"></line>
    `;
  }).join('');

  const orStage = terms.length === 1 ? `
    <line x1="345" y1="${outY}" x2="450" y2="${outY}" stroke="var(--success)" stroke-width="2.5"></line>
  ` : `
    <path d="M338,${outY - 24} Q354,${outY} 338,${outY + 24} Q382,${outY + 22} 404,${outY} Q382,${outY - 22} 338,${outY - 24} Z" fill="var(--success-light)" stroke="var(--success)" stroke-width="2.2"></path>
    <text x="370" y="${outY + 4}" text-anchor="middle" fill="var(--success)" font-size="10" font-weight="800">OR</text>
    <line x1="404" y1="${outY}" x2="462" y2="${outY}" stroke="var(--success)" stroke-width="2.5"></line>
  `;

  return `
    <svg width="${svgW}" height="${svgH}" viewBox="0 0 ${svgW} ${svgH}" role="img" aria-label="Sơ đồ mạng cổng logic 2 mức AND-OR">
      ${termNodes}
      ${orStage}
      <text x="470" y="${outY + 5}" fill="var(--success)" font-size="14" font-weight="800">f</text>
    </svg>
  `;
}

function updateKMapSolution() {
  const resDiv = document.getElementById('kmapSolutionOutput');
  if (!resDiv) return;

  const sol = window.KMapTool.solve();
  const piListLatex = sol.primeImplicants.length > 0
    ? sol.primeImplicants.map(pi => `$${pi.termLatex}\\;(\\{${pi.coverArray.join(',')}\\})$`).join(', ')
    : 'Không có';
  const epiListLatex = sol.essentialPI.length > 0
    ? sol.essentialPI.map(pi => `$${pi.termLatex}$`).join(', ')
    : 'Không có';

  resDiv.innerHTML = `
    <div class="card" style="margin-top: 1.25rem; background: var(--bg-card-subtle);">
      <h4 style="font-size: 1.08rem; color: var(--primary); margin-bottom: 0.75rem;">Phân tích Tế bào lớn & Đa thức tối tiểu chuẩn Giáo trình:</h4>
      <div style="margin-bottom: 0.55rem;">
        <strong>Tập Minterm:</strong>
        ${sol.minterms.length > 0 ? `$f = \\sum m(${sol.minterms.join(', ')})$` : '$f = 0$'}
      </div>
      <div style="margin-bottom: 0.55rem;">
        <strong>Dạng nối rời chính tắc (Canonical DNF):</strong>
        <div style="margin-top: 0.2rem; overflow-x: auto;">$f = ${sol.canonicalDNFLatex}$</div>
      </div>
      <div style="margin-bottom: 0.55rem;">
        <strong>Tất cả Tế bào lớn (Prime Implicants):</strong> ${piListLatex}
      </div>
      <div style="margin-bottom: 0.75rem;">
        <strong>Tế bào lớn cốt yếu (Essential PIs):</strong> ${epiListLatex}
      </div>
      <div style="margin-bottom: 0.85rem; padding: 0.85rem 1rem; background: var(--primary-light); border-radius: var(--radius-md); border: 1px solid var(--primary-border);">
        <strong style="color: var(--primary); font-size: 0.92rem;">CÔNG THỨC ĐA THỨC TỐI TIỂU (Minimal SOP):</strong>
        <div style="font-size: 1.25rem; margin-top: 0.35rem;">$$f = ${sol.minimalSOPLatex}$$</div>
      </div>
      <div style="font-size: 0.88rem; color: var(--text-muted);">
        Chi phí phần cứng tối ưu: <strong>${sol.notGates} cổng NOT</strong>, <strong>${sol.andGates} cổng AND</strong> và <strong>${sol.orGates} cổng OR</strong>.
      </div>
      <div class="circuit-svg-wrap">
        <div style="font-size: 0.82rem; font-weight: 700; color: var(--text-muted); margin-bottom: 0.4rem;">SƠ ĐỒ MẠCH CỔNG LOGIC 2 TẦNG (AND–OR):</div>
        ${buildLogicCircuitSVG(sol)}
      </div>
    </div>
  `;

  renderMath(resDiv);
}

/* --- Lab 3: Combinatorics, Euclid & Linear Congruence --- */
function initCombinatoricsToolUI() {
  const calcCombBtn = document.getElementById('calcCombBtn');
  const calcEuclidBtn = document.getElementById('calcEuclidBtn');
  const calcCongBtn = document.getElementById('calcCongBtn');

  const runComb = () => {
    const n = parseInt(document.getElementById('combNInput').value, 10);
    const k = parseInt(document.getElementById('combKInput').value, 10);
    const output = document.getElementById('combResultOutput');
    if (!output) return;

    if (Number.isNaN(n) || Number.isNaN(k) || n < 0 || k < 0 || n > 100 || k > 100) {
      output.innerHTML = '<div style="color: var(--danger); margin-top: 0.75rem;">Vui lòng nhập $0 \\le n, k \\le 100$!</div>';
      renderMath(output);
      return;
    }

    const pN = window.CombinatoricsTool.permutation(n);
    const aNK = window.CombinatoricsTool.arrangement(n, k);
    const fNK = window.CombinatoricsTool.arrangementWithRep(n, k);
    const cNK = window.CombinatoricsTool.combination(n, k);
    const kNK = window.CombinatoricsTool.combinationWithRep(n, k);

    output.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(175px, 1fr)); gap: 0.75rem; margin-top: 1rem;">
        <div class="stat-card" style="padding: 0.85rem;">
          <div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">Hoán vị $P_{${n}} = ${n}!$</div>
            <div class="tabular-nums" style="font-size: 1.15rem; font-weight: 800; color: var(--primary); word-break: break-all;">${pN.toString()}</div>
          </div>
        </div>
        <div class="stat-card" style="padding: 0.85rem;">
          <div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">Chỉnh hợp $A_{${n}}^{${k}}$</div>
            <div class="tabular-nums" style="font-size: 1.15rem; font-weight: 800; color: var(--primary); word-break: break-all;">${aNK.toString()}</div>
          </div>
        </div>
        <div class="stat-card" style="padding: 0.85rem;">
          <div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">Chỉnh hợp lặp $F_{${n}}^{${k}} = ${n}^{${k}}$</div>
            <div class="tabular-nums" style="font-size: 1.15rem; font-weight: 800; color: var(--info); word-break: break-all;">${fNK.toString()}</div>
          </div>
        </div>
        <div class="stat-card" style="padding: 0.85rem;">
          <div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">Tổ hợp $C_{${n}}^{${k}} = \\binom{${n}}{${k}}$</div>
            <div class="tabular-nums" style="font-size: 1.15rem; font-weight: 800; color: var(--success); word-break: break-all;">${cNK.toString()}</div>
          </div>
        </div>
        <div class="stat-card" style="padding: 0.85rem;">
          <div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">Tổ hợp lặp $K_{${n}}^{${k}} = \\overline{C}_{${n}}^{${k}}$</div>
            <div class="tabular-nums" style="font-size: 1.15rem; font-weight: 800; color: var(--warning); word-break: break-all;">${kNK.toString()}</div>
          </div>
        </div>
      </div>
    `;
    renderMath(output);
  };

  const runEuclid = () => {
    const a = parseInt(document.getElementById('euclidAInput').value, 10);
    const b = parseInt(document.getElementById('euclidBInput').value, 10);
    const output = document.getElementById('euclidResultOutput');
    if (!output) return;

    if (Number.isNaN(a) || Number.isNaN(b) || a === 0 || b === 0) {
      output.innerHTML = '<div style="color: var(--danger); margin-top: 0.75rem;">Vui lòng nhập hai số nguyên khác $0$!</div>';
      renderMath(output);
      return;
    }

    const res = window.CombinatoricsTool.extendedEuclid(a, b);
    output.innerHTML = `
      <div style="margin-top: 1rem;">
        <div style="padding: 0.9rem 1rem; background: var(--primary-light); border-radius: var(--radius-md); margin-bottom: 0.85rem;">
          <div>$\\gcd(${a}, ${b}) = \\mathbf{${res.gcd}}$, $\\quad \\text{lcm}(${a}, ${b}) = \\mathbf{${res.lcm}}$</div>
          <div style="margin-top: 0.35rem;"><strong>Đẳng thức Bézout:</strong> $${res.bezoutLatex}$</div>
        </div>
        <table class="lesson-body table" style="width: 100%;">
          <thead><tr><th>Bước</th><th>Phép chia Euclide</th><th>Số dư</th></tr></thead>
          <tbody>
            ${res.steps.map((st, i) => `<tr><td>Bước ${i + 1}</td><td>$${st.equationLatex}$</td><td class="tabular-nums">${st.remainder}</td></tr>`).join('')}
          </tbody>
        </table>
      </div>
    `;
    renderMath(output);
  };

  const runCongruence = () => {
    const a = parseInt(document.getElementById('congAInput').value, 10);
    const b = parseInt(document.getElementById('congBInput').value, 10);
    const m = parseInt(document.getElementById('congMInput').value, 10);
    const output = document.getElementById('congResultOutput');
    if (!output) return;

    if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(m) || m <= 0) {
      output.innerHTML = '<div style="color: var(--danger); margin-top: 0.75rem;">Vui lòng nhập $a, b \\in \\mathbb{Z}$ và mô-đun $m > 0$!</div>';
      renderMath(output);
      return;
    }

    const res = window.CombinatoricsTool.solveLinearCongruence(a, b, m);
    if (res.error) {
      output.innerHTML = `<div style="color: var(--danger); margin-top: 0.75rem;">${res.error}</div>`;
    } else if (!res.hasSolution) {
      output.innerHTML = `<div style="margin-top: 1rem; padding: 0.9rem 1rem; background: var(--danger-light); color: var(--danger); border-radius: var(--radius-md); font-weight: 600;">${res.messageLatex}</div>`;
    } else {
      output.innerHTML = `
        <div style="margin-top: 1rem; padding: 1rem; background: var(--success-light); border: 1px solid var(--success); border-radius: var(--radius-md);">
          <div>Phương trình $${a}x \\equiv ${b} \\pmod{${m}}$ có $\\gcd(${a}, ${m}) = ${res.gcd} \\mid ${b}$ nên có đúng <strong>$${res.solutionsCount}$ nghiệm không đồng dư modulo $${m}$</strong>:</div>
          <div style="margin-top: 0.5rem;">$$${res.generalFormLatex}$$</div>
          <div style="font-size: 0.9rem;">Tập nghiệm cụ thể trong $\\mathbb{Z}_{${m}}$: $x \\in \\{${res.allSolutions.join(', ')}\\}$.</div>
        </div>
      `;
    }
    renderMath(output);
  };

  calcCombBtn?.addEventListener('click', runComb);
  calcEuclidBtn?.addEventListener('click', runEuclid);
  calcCongBtn?.addEventListener('click', runCongruence);

  runComb();
  runEuclid();
  runCongruence();
}

/* --- Lab 4: Relation Analyzer --- */
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

    output.innerHTML = `
      <div style="margin-top: 1.25rem;">
        <div class="stat-grid" style="margin-bottom: 1rem;">
          <div class="stat-card" style="border-left: 4px solid ${res.isReflexive ? 'var(--success)' : 'var(--danger)'};">
            <div>
              <div style="font-weight: 700;">${res.isReflexive ? '✓ Phản xạ' : '✕ Không phản xạ'}</div>
              <div style="font-size: 0.82rem; color: var(--text-muted);">${res.isReflexive ? '$\\forall x \\in A: (x, x) \\in \\mathcal{R}$' : `Thiếu: ${res.reflexiveViolations.map(x => `$(${x},${x})$`).join(', ')}`}</div>
            </div>
          </div>
          <div class="stat-card" style="border-left: 4px solid ${res.isSymmetric ? 'var(--success)' : 'var(--danger)'};">
            <div>
              <div style="font-weight: 700;">${res.isSymmetric ? '✓ Đối xứng' : '✕ Không đối xứng'}</div>
              <div style="font-size: 0.82rem; color: var(--text-muted);">${res.isSymmetric ? '$(x, y) \\in \\mathcal{R} \\implies (y, x) \\in \\mathcal{R}$' : 'Thiếu cặp đảo ngược'}</div>
            </div>
          </div>
          <div class="stat-card" style="border-left: 4px solid ${res.isAntisymmetric ? 'var(--success)' : 'var(--danger)'};">
            <div>
              <div style="font-weight: 700;">${res.isAntisymmetric ? '✓ Phản xứng' : '✕ Không phản xứng'}</div>
              <div style="font-size: 0.82rem; color: var(--text-muted);">${res.isAntisymmetric ? '$(x, y), (y, x) \\in \\mathcal{R} \\implies x = y$' : 'Tồn tại cặp 2 chiều $x \\neq y$'}</div>
            </div>
          </div>
          <div class="stat-card" style="border-left: 4px solid ${res.isTransitive ? 'var(--success)' : 'var(--danger)'};">
            <div>
              <div style="font-weight: 700;">${res.isTransitive ? '✓ Bắc cầu' : '✕ Không bắc cầu'}</div>
              <div style="font-size: 0.82rem; color: var(--text-muted);">${res.isTransitive ? '$(x, y), (y, z) \\in \\mathcal{R} \\implies (x, z) \\in \\mathcal{R}$' : 'Vi phạm tính bắc cầu'}</div>
            </div>
          </div>
        </div>

        <div style="padding: 1.15rem; background: var(--bg-card-subtle); border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
          <h4 style="font-size: 1.05rem; color: var(--primary); margin-bottom: 0.45rem;">Kết luận cấu trúc đại số:</h4>
          ${res.isEquivalence ? `
            <div style="color: var(--success); font-weight: 700; margin-bottom: 0.35rem;">✓ Đây là QUAN HỆ TƯƠNG ĐƯƠNG!</div>
            <div>Các lớp tương đương: ${res.equivalenceClasses.map(c => `$[${c[0]}] = \\{${c.join(', ')}\\}$`).join('; ')}</div>
            <div>Thương tập phân hoạch: $A / \\mathcal{R} = \\{ ${res.equivalenceClasses.map(c => `\\{${c.join(', ')}\\}`).join(', ')} \\}$</div>
          ` : ''}

          ${res.isPartialOrder ? `
            <div style="color: var(--primary); font-weight: 700; margin-bottom: 0.35rem; margin-top: ${res.isEquivalence ? '0.6rem' : '0'};">✓ Đây là QUAN HỆ THỨ TỰ (Poset)!</div>
            <div>• Phần tử tối tiểu: $\\{${res.posetDetails.minimal.join(', ') || '\\emptyset'}\\}$ | Phần tử tối đại: $\\{${res.posetDetails.maximal.join(', ') || '\\emptyset'}\\}$</div>
            <div>• Phần tử nhỏ nhất: <strong>${res.posetDetails.least || 'Không tồn tại'}</strong> | Phần tử lớn nhất: <strong>${res.posetDetails.greatest || 'Không tồn tại'}</strong></div>
            <div>• Thứ tự toàn phần (Chuỗi): <strong>${res.posetDetails.isTotalOrder ? 'Có' : 'Không'}</strong></div>
          ` : ''}

          ${!res.isEquivalence && !res.isPartialOrder ? `
            <div style="color: var(--text-muted);">Quan hệ này không phải quan hệ tương đương và cũng không phải quan hệ thứ tự.</div>
          ` : ''}
        </div>
      </div>
    `;

    renderMath(output);
  };

  checkBtn.addEventListener('click', execute);

  document.querySelectorAll('.preset-rel-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('relSetInput').value = btn.getAttribute('data-set');
      document.getElementById('relPairsInput').value = btn.getAttribute('data-pairs');
      execute();
    });
  });

  execute();
}

/* --- Lab 5: Recurrence Relation Solver --- */
function initRecurrenceToolUI() {
  const solveBtn = document.getElementById('solveRecurrenceBtn');
  const output = document.getElementById('recurrenceResultOutput');
  if (!solveBtn || !output || !window.RecurrenceTool) return;

  const execute = () => {
    const c1 = parseFloat(document.getElementById('recC1Input').value);
    const c2 = parseFloat(document.getElementById('recC2Input').value);
    const a0 = parseFloat(document.getElementById('recA0Input').value);
    const a1 = parseFloat(document.getElementById('recA1Input').value);

    const res = window.RecurrenceTool.solveSecondOrder(c1, c2, a0, a1);
    if (res.error) {
      output.innerHTML = `<div style="color: var(--danger); margin-top: 1rem;">${res.error}</div>`;
      return;
    }

    output.innerHTML = `
      <div class="step-derivation-box">
        <div class="step-row-card">
          <div class="step-row-label">Bước 1 • Hệ thức truy hồi & Phân loại (${res.caseType})</div>
          <div>$$${res.recurrenceLatex}$$</div>
        </div>
        <div class="step-row-card">
          <div class="step-row-label">Bước 2 • Phương trình đặc trưng & Nghiệm đặc trưng</div>
          <div>Phương trình đặc trưng: $${res.charEqLatex}$</div>
          <div style="margin-top: 0.25rem;">Nghiệm đặc trưng: $${res.rootsLatex}$</div>
        </div>
        <div class="step-row-card">
          <div class="step-row-label">Bước 3 • Dạng nghiệm tổng quát & Xác định hằng số từ điều kiện đầu</div>
          <div>Dạng tổng quát: $${res.generalFormLatex}$</div>
          <div style="margin-top: 0.35rem;">$$${res.constantsLatex}$$</div>
        </div>
        <div class="step-row-card" style="background: var(--primary-light); border-color: var(--primary);">
          <div class="step-row-label">Bước 4 • Công thức Nghiệm đóng (Closed-Form Solution)</div>
          <div style="font-size: 1.15rem;">$$${res.closedFormLatex} \\quad (\\forall n \\ge 0)$$</div>
        </div>
      </div>

      <div style="margin-top: 1.15rem; overflow-x: auto;">
        <h4 style="font-size: 0.92rem; margin-bottom: 0.45rem; color: var(--text-muted);">Bảng kiểm chứng 11 số hạng đầu tiên ($a_0 \\dots a_{10}$):</h4>
        <table class="lesson-body table" style="width: 100%;">
          <thead>
            <tr>${res.sequence.map((_, i) => `<th style="text-align: center;">$a_{${i}}$</th>`).join('')}</tr>
          </thead>
          <tbody>
            <tr>${res.sequence.map(val => `<td class="tabular-nums" style="text-align: center; font-weight: 700;">${val}</td>`).join('')}</tr>
          </tbody>
        </table>
      </div>
    `;

    renderMath(output);
  };

  solveBtn.addEventListener('click', execute);

  document.querySelectorAll('.preset-rec-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('recC1Input').value = btn.getAttribute('data-c1');
      document.getElementById('recC2Input').value = btn.getAttribute('data-c2');
      document.getElementById('recA0Input').value = btn.getAttribute('data-a0');
      document.getElementById('recA1Input').value = btn.getAttribute('data-a1');
      execute();
    });
  });

  execute();
}

/* ==========================================================================
   11. Command Palette / Global Search
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

  const closeSearch = () => modal.classList.remove('open');

  triggerBtn.addEventListener('click', openSearch);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeSearch(); });

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
          matched.push({
            title: l.title,
            sub: `Bài giảng • ${ch.title}`,
            action: `loadLesson('${ch.id}', '${l.id}'); switchTab('theory');`
          });
        }
      });
    });

    if (typeof EXAM_ARCHIVE_DATA !== 'undefined') {
      EXAM_ARCHIVE_DATA.forEach(ex => {
        if (!query || ex.title.toLowerCase().includes(query) || ex.type.toLowerCase().includes(query)) {
          matched.push({
            title: ex.title,
            sub: `Đề thi chính thức ĐHSP • ${ex.durationMinutes} phút`,
            action: `selectArchiveExam('${ex.id}'); switchTab('exams');`
          });
        }
      });
    }

    if (matched.length === 0) {
      resultsContainer.innerHTML = '<li style="padding: 1.5rem; text-align: center; color: var(--text-muted);">Không tìm thấy kết quả phù hợp</li>';
      return;
    }

    resultsContainer.innerHTML = matched.slice(0, 20).map(m => `
      <li class="search-result-item" onclick="${m.action} document.getElementById('searchModalBackdrop').classList.remove('open');">
        <span class="result-title">${escapeHtmlPreservingMath(m.title)}</span>
        <span class="result-chapter">${m.sub}</span>
      </li>
    `).join('');

    renderMath(resultsContainer);
  }
}

/* ==========================================================================
   12. Math-Safe Markdown Parser & KaTeX Renderer
   ========================================================================== */
function escapeHtmlBasic(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeHtmlPreservingMath(text) {
  if (!text) return '';
  const mathTokens = [];
  let safe = String(text).replace(/\$\$[\s\S]*?\$\$|\$[^$\n]+\$/g, (m) => {
    const idx = mathTokens.length;
    mathTokens.push(escapeHtmlBasic(m));
    return `@@MATH_INLINE_${idx}@@`;
  });
  safe = safe.replace(/@@MATH_INLINE_(\d+)@@/g, (_, i) => mathTokens[Number(i)]);
  return safe;
}

function parseInlineFormattingWithMath(text) {
  if (!text) return '';
  const mathTokens = [];
  let out = String(text).replace(/\$\$[\s\S]*?\$\$|\$[^$\n]+\$/g, (m) => {
    const idx = mathTokens.length;
    mathTokens.push(escapeHtmlBasic(m));
    return `@@MATH_TOKEN_${idx}@@`;
  });
  out = out
    .replace(/`([^`]+)`/g, (_, c) => `<code>${escapeHtmlBasic(c)}</code>`)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
  out = out.replace(/@@MATH_TOKEN_(\d+)@@/g, (_, i) => mathTokens[Number(i)]);
  return out;
}

function parseMarkdownToHtml(md) {
  if (!md) return '';

  // 1. Protect display math $$...$$ and inline math $...$ BEFORE any Markdown rule runs!
  const mathBlocks = [];
  let text = String(md).replace(/\$\$[\s\S]*?\$\$/g, (m) => {
    const id = mathBlocks.length;
    mathBlocks.push({ display: true, raw: escapeHtmlBasic(m) });
    return `\n\n@@MATH_BLOCK_${id}@@\n\n`;
  });

  text = text.replace(/\$[^$\n]+\$/g, (m) => {
    const id = mathBlocks.length;
    mathBlocks.push({ display: false, raw: escapeHtmlBasic(m) });
    return `@@MATH_BLOCK_${id}@@`;
  });

  // 2. Protect inline code `...`
  const codeSpans = [];
  text = text.replace(/`([^`\n]+)`/g, (_, code) => {
    const id = codeSpans.length;
    codeSpans.push(`<code>${escapeHtmlBasic(code)}</code>`);
    return `@@CODE_SPAN_${id}@@`;
  });

  const formatInline = (line) =>
    line
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>');

  // 3. Parse block structures line-by-line (headings, tables, blockquotes, lists, paragraphs)
  const lines = text.replace(/\r\n/g, '\n').split('\n');
  const htmlParts = [];
  let i = 0;

  while (i < lines.length) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    if (!trimmed) {
      i++;
      continue;
    }

    // Standalone display math block
    if (/^@@MATH_BLOCK_\d+@@$/.test(trimmed)) {
      htmlParts.push(`<div class="math-display-wrap">${trimmed}</div>`);
      i++;
      continue;
    }

    // Headings
    const hMatch = trimmed.match(/^(#{1,4})\s+(.*)$/);
    if (hMatch) {
      const level = hMatch[1].length;
      htmlParts.push(`<h${level}>${formatInline(hMatch[2])}</h${level}>`);
      i++;
      continue;
    }

    // Markdown Tables (strictly lines starting and ending with |)
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      const tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith('|') && lines[i].trim().endsWith('|')) {
        tableLines.push(lines[i].trim());
        i++;
      }
      const rows = tableLines
        .filter(l => !/^\|[\s:\-|]+\|$/.test(l))
        .map(l => l.slice(1, -1).split('|').map(c => formatInline(c.trim())));
      if (rows.length > 0) {
        const headHtml = `<thead><tr>${rows[0].map(c => `<th>${c}</th>`).join('')}</tr></thead>`;
        const bodyRows = rows.slice(1);
        const bodyHtml = bodyRows.length > 0
          ? `<tbody>${bodyRows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>`
          : '';
        htmlParts.push(`<table>${headHtml}${bodyHtml}</table>`);
      }
      continue;
    }

    // Blockquotes
    if (trimmed.startsWith('>')) {
      const bqLines = [];
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        bqLines.push(formatInline(lines[i].trim().replace(/^>\s?/, '')));
        i++;
      }
      htmlParts.push(`<blockquote>${bqLines.join('<br>')}</blockquote>`);
      continue;
    }

    // Unordered Lists
    if (/^[-*]\s+/.test(trimmed)) {
      const items = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i].trim())) {
        items.push(`<li>${formatInline(lines[i].trim().replace(/^[-*]\s+/, ''))}</li>`);
        i++;
      }
      htmlParts.push(`<ul>${items.join('')}</ul>`);
      continue;
    }

    // Ordered Lists
    if (/^\d+\.\s+/.test(trimmed)) {
      const items = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(`<li>${formatInline(lines[i].trim().replace(/^\d+\.\s+/, ''))}</li>`);
        i++;
      }
      htmlParts.push(`<ol>${items.join('')}</ol>`);
      continue;
    }

    // Regular paragraph
    const paraLines = [];
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !/^(#{1,4}\s+|[-*]\s+|\d+\.\s+|>\s?|@@MATH_BLOCK_\d+@@$)/.test(lines[i].trim()) &&
      !(lines[i].trim().startsWith('|') && lines[i].trim().endsWith('|'))
    ) {
      paraLines.push(formatInline(lines[i].trim()));
      i++;
    }
    if (paraLines.length > 0) {
      htmlParts.push(`<p>${paraLines.join(' ')}</p>`);
    }
  }

  let finalHtml = htmlParts.join('\n');
  finalHtml = finalHtml.replace(/@@CODE_SPAN_(\d+)@@/g, (_, id) => codeSpans[Number(id)]);
  finalHtml = finalHtml.replace(/@@MATH_BLOCK_(\d+)@@/g, (_, id) => mathBlocks[Number(id)].raw);

  return finalHtml;
}

function renderMath(rootEl = document.body) {
  if (!rootEl || !window.renderMathInElement) return;
  try {
    window.renderMathInElement(rootEl, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\(', right: '\\)', display: false },
        { left: '\\[', right: '\\]', display: true }
      ],
      throwOnError: false,
      strict: false
    });
  } catch (e) {
    console.warn('KaTeX auto-render warning:', e);
  }
}
