import { initialSyllabusData } from './syllabusData.js';

// Application State
let state = {
  currentSubjectId: null,
  currentTab: 'lesson-plan-pane', // 'lesson-plan-pane' or 'calendar-pane' or 'search-results-pane'
  previousTab: 'lesson-plan-pane', // For reverting search
  selectedChapterId: null,
  isEditing: false,
  searchQuery: '',
  activeSyllabusData: null,
  activeScheduleData: null
};

// Academic months in order (CBSE School cycle)
const ACADEMIC_MONTHS = [
  'April', 'May', 'June', 'July', 'August', 'September', 
  'October', 'November', 'December', 'January', 'February', 'March'
];

// DOM elements cached
const DOM = {
  landingView: document.getElementById('landing-view'),
  workspaceView: document.getElementById('workspace-view'),
  btnBackLanding: document.getElementById('btn-back-landing'),
  currentSubjectTitle: document.getElementById('current-subject-title'),
  btnResetSyllabus: document.getElementById('btn-reset-syllabus'),
  
  // Sidebar
  chapterSearch: document.getElementById('chapter-search'),
  sidebarChaptersList: document.getElementById('sidebar-chapters-list'),
  
  // Tabs
  tabBtnPlan: document.getElementById('tab-btn-plan'),
  tabBtnCalendar: document.getElementById('tab-btn-calendar'),
  tabButtons: document.querySelectorAll('.tab-btn'),
  tabPanes: document.querySelectorAll('.tab-pane'),
  
  // Panes
  lessonPlanPane: document.getElementById('lesson-plan-pane'),
  lessonPlanContent: document.getElementById('lesson-plan-content'),
  
  calendarPane: document.getElementById('calendar-pane'),
  calendarGridMonths: document.getElementById('calendar-grid-months'),
  schedulerChapterSelect: document.getElementById('scheduler-chapter-select'),
  schedulerMonthSelect: document.getElementById('scheduler-month-select'),
  btnScheduleAdd: document.getElementById('btn-schedule-add'),
  
  searchResultsPane: document.getElementById('search-results-pane'),
  searchResultsCount: document.getElementById('search-results-count'),
  searchKeywordDisplay: document.getElementById('search-keyword-display'),
  searchResultsItemsList: document.getElementById('search-results-items-list')
};

// --- INITIALIZATION ---
function init() {
  // Bind landing subject selectors
  document.querySelectorAll('.selector-card').forEach(card => {
    card.addEventListener('click', () => {
      const subjectId = card.getAttribute('data-subject');
      selectSubject(subjectId);
    });
  });

  // Bind back button
  DOM.btnBackLanding.addEventListener('click', showLandingView);

  // Bind reset button
  DOM.btnResetSyllabus.addEventListener('click', confirmResetSubject);

  // Bind search input
  DOM.chapterSearch.addEventListener('input', handleSearchInput);

  // Bind tabs
  DOM.tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetPaneId = btn.getAttribute('data-target');
      switchTab(targetPaneId);
      // Clear search if shifting away from search tab manually
      if (state.currentTab !== 'search-results-pane' && state.searchQuery) {
        DOM.chapterSearch.value = '';
        state.searchQuery = '';
        renderSidebar();
      }
    });
  });

  // Bind scheduler add button
  DOM.btnScheduleAdd.addEventListener('click', handleAddToSchedule);
}

// --- VIEW NAVIGATION ---
function showLandingView() {
  state.currentSubjectId = null;
  state.activeSyllabusData = null;
  state.activeScheduleData = null;
  state.selectedChapterId = null;
  state.isEditing = false;
  state.searchQuery = '';
  DOM.chapterSearch.value = '';
  
  DOM.workspaceView.style.display = 'none';
  DOM.landingView.style.display = 'flex';
}

function selectSubject(subjectId) {
  state.currentSubjectId = subjectId;
  
  // Load data from localStorage or initial pre-populated
  loadSubjectData(subjectId);
  
  // Set headers
  DOM.currentSubjectTitle.textContent = state.activeSyllabusData.title || subjectId.toUpperCase();
  
  // Reset tab views
  state.currentTab = 'lesson-plan-pane';
  state.previousTab = 'lesson-plan-pane';
  switchTab('lesson-plan-pane');
  
  // Render Sidebar navigation
  renderSidebar();
  
  // Render Calendar view
  renderCalendar();
  
  // Populate scheduler chapter dropdown options
  populateSchedulerDropdown();
  
  // Auto-select first chapter in the list
  const firstChapter = getFirstChapter();
  if (firstChapter) {
    selectChapter(firstChapter.id);
  } else {
    state.selectedChapterId = null;
    renderEmptyPlanState();
  }
  
  // Switch visual views
  DOM.landingView.style.display = 'none';
  DOM.workspaceView.style.display = 'flex';
}

function switchTab(paneId) {
  state.currentTab = paneId;
  
  // Toggle tab buttons state
  DOM.tabButtons.forEach(btn => {
    if (btn.getAttribute('data-target') === paneId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Toggle active pane
  DOM.tabPanes.forEach(pane => {
    if (pane.id === paneId) {
      pane.classList.add('active');
    } else {
      pane.classList.remove('active');
    }
  });
}

// --- DATA ACCESS & STORAGE ---
function loadSubjectData(subjectId) {
  const syllabusKey = `teaching_plan_syllabus_${subjectId}`;
  const scheduleKey = `teaching_plan_schedule_${subjectId}`;
  
  const savedSyllabus = localStorage.getItem(syllabusKey);
  if (savedSyllabus) {
    state.activeSyllabusData = JSON.parse(savedSyllabus);
  } else {
    // Clone initial data
    state.activeSyllabusData = JSON.parse(JSON.stringify(initialSyllabusData[subjectId]));
    localStorage.setItem(syllabusKey, JSON.stringify(state.activeSyllabusData));
  }
  
  const savedSchedule = localStorage.getItem(scheduleKey);
  if (savedSchedule) {
    state.activeScheduleData = JSON.parse(savedSchedule);
  } else {
    // Initialize empty schedule structure
    state.activeScheduleData = {};
    ACADEMIC_MONTHS.forEach(month => {
      state.activeScheduleData[month] = [];
    });
    localStorage.setItem(scheduleKey, JSON.stringify(state.activeScheduleData));
  }
}

function saveSyllabusData() {
  const syllabusKey = `teaching_plan_syllabus_${state.currentSubjectId}`;
  localStorage.setItem(syllabusKey, JSON.stringify(state.activeSyllabusData));
}

function saveScheduleData() {
  const scheduleKey = `teaching_plan_schedule_${state.currentSubjectId}`;
  localStorage.setItem(scheduleKey, JSON.stringify(state.activeScheduleData));
}

function confirmResetSubject() {
  const confirmMsg = `Are you sure you want to reset all modifications and schedule for "${state.activeSyllabusData.title}"?\nThis will revert to the default pre-populated lesson plans and clear the academic schedule.`;
  if (confirm(confirmMsg)) {
    const syllabusKey = `teaching_plan_syllabus_${state.currentSubjectId}`;
    const scheduleKey = `teaching_plan_schedule_${state.currentSubjectId}`;
    localStorage.removeItem(syllabusKey);
    localStorage.removeItem(scheduleKey);
    
    // Reload state
    selectSubject(state.currentSubjectId);
  }
}

// --- SIDEBAR RENDERING ---
function renderSidebar() {
  DOM.sidebarChaptersList.innerHTML = '';
  
  if (!state.activeSyllabusData || !state.activeSyllabusData.units) return;
  
  state.activeSyllabusData.units.forEach(unit => {
    const unitDiv = document.createElement('div');
    unitDiv.className = 'unit-container';
    
    const header = document.createElement('h3');
    header.className = 'unit-header';
    header.textContent = unit.name;
    unitDiv.appendChild(header);
    
    const list = document.createElement('ul');
    list.className = 'chapter-list';
    
    let activeChaptersCount = 0;
    unit.chapters.forEach(ch => {
      // Filter sidebar lists loosely if searching, or keep it normal
      const item = document.createElement('li');
      item.className = 'chapter-item';
      if (ch.id === state.selectedChapterId) {
        item.classList.add('active');
      }
      
      item.innerHTML = `
        <span class="bullet"></span>
        <span class="chapter-title-text">${ch.title} <span style="font-size:0.75rem; color:var(--text-light); font-weight:normal;">(${ch.periods} P)</span></span>
      `;
      
      item.addEventListener('click', () => {
        selectChapter(ch.id);
        // If in search view, switch back to plan view when clicking a sidebar item
        if (state.currentTab === 'search-results-pane') {
          switchTab('lesson-plan-pane');
          DOM.chapterSearch.value = '';
          state.searchQuery = '';
          renderSidebar();
        }
      });
      
      list.appendChild(item);
      activeChaptersCount++;
    });
    
    if (activeChaptersCount > 0) {
      unitDiv.appendChild(list);
      DOM.sidebarChaptersList.appendChild(unitDiv);
    }
  });
}

function getFirstChapter() {
  if (state.activeSyllabusData && state.activeSyllabusData.units && state.activeSyllabusData.units.length > 0) {
    const firstUnit = state.activeSyllabusData.units[0];
    if (firstUnit.chapters && firstUnit.chapters.length > 0) {
      return firstUnit.chapters[0];
    }
  }
  return null;
}

function findChapterById(chapterId) {
  if (!state.activeSyllabusData || !state.activeSyllabusData.units) return null;
  
  for (let unit of state.activeSyllabusData.units) {
    for (let ch of unit.chapters) {
      if (ch.id === chapterId) {
        return { chapter: ch, unitName: unit.name };
      }
    }
  }
  return null;
}

function selectChapter(chapterId) {
  state.selectedChapterId = chapterId;
  state.isEditing = false;
  
  // Highlight in sidebar
  document.querySelectorAll('.chapter-item').forEach(item => {
    item.classList.remove('active');
  });
  
  // Re-render sidebar to update active indicators
  renderSidebar();
  
  // Render selected plan
  renderLessonPlan(chapterId);
}

// --- LESSON PLAN RENDERING (VIEW & EDIT MODES) ---
function renderEmptyPlanState() {
  DOM.lessonPlanContent.innerHTML = `
    <div class="empty-plan-state">
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
      <h3>No Chapter Selected</h3>
      <p>Select a chapter from the sidebar navigation menu to view, edit, or print its lesson plan.</p>
    </div>
  `;
}

function renderLessonPlan(chapterId) {
  const result = findChapterById(chapterId);
  if (!result) {
    renderEmptyPlanState();
    return;
  }
  
  const { chapter, unitName } = result;
  
  if (state.isEditing) {
    renderLessonPlanEditMode(chapter, unitName);
  } else {
    renderLessonPlanViewMode(chapter, unitName);
  }
}

// VIEW MODE
function renderLessonPlanViewMode(chapter, unitName) {
  // Safe array formatting helpers
  const renderList = (arr) => {
    if (!arr || arr.length === 0) return '<li>None specified.</li>';
    return arr.map(item => `<li>${escapeHTML(item)}</li>`).join('');
  };
  
  DOM.lessonPlanContent.innerHTML = `
    <article class="lesson-plan-card">
      <header class="lesson-plan-header">
        <h2>${escapeHTML(chapter.title)}</h2>
        <div class="lesson-plan-meta">
          <span class="meta-item">
            <strong>Unit:</strong> ${escapeHTML(unitName)}
          </span>
          <span class="meta-item">
            <strong>Periods:</strong> ${chapter.periods} Lectures
          </span>
        </div>
      </header>
      
      <div class="lesson-plan-body">
        <div class="section-grid">
          <div class="plan-section half-width">
            <h3 class="section-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              Learning Objectives
            </h3>
            <ul class="bullet-list">
              ${renderList(chapter.objectives)}
            </ul>
          </div>
          
          <div class="plan-section half-width">
            <h3 class="section-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              Teaching Methodology
            </h3>
            <ul class="bullet-list">
              ${renderList(chapter.methodology)}
            </ul>
          </div>
        </div>
        
        <div class="section-grid">
          <div class="plan-section half-width">
            <h3 class="section-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
              Resources Needed
            </h3>
            <ul class="bullet-list">
              ${renderList(chapter.resources)}
            </ul>
          </div>
          
          <div class="plan-section half-width">
            <h3 class="section-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
              Activities & Assignments
            </h3>
            <ul class="bullet-list">
              ${renderList(chapter.activities)}
            </ul>
          </div>
        </div>
        
        <div class="section-grid">
          <div class="plan-section half-width">
            <h3 class="section-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              Assessment Methods
            </h3>
            <ul class="bullet-list">
              ${renderList(chapter.assessment)}
            </ul>
          </div>
          
          <div class="plan-section half-width">
            <h3 class="section-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              Homework / Practice Questions
            </h3>
            <ul class="bullet-list">
              ${renderList(chapter.homework)}
            </ul>
          </div>
        </div>
        
        <!-- Printed signature block -->
        <div class="print-footer-signature">
          <div class="signature-block">
            <div class="signature-line"></div>
            <p>Subject Teacher Signature</p>
          </div>
          <div class="signature-block">
            <div class="signature-line"></div>
            <p>Coordinator / HOD Signature</p>
          </div>
          <div class="signature-block">
            <div class="signature-line"></div>
            <p>Principal Sign-off</p>
          </div>
        </div>
      </div>
      
      <div class="plan-actions-footer">
        <button id="btn-edit-plan" class="btn btn-secondary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
          Edit Lesson Plan
        </button>
        <button id="btn-print-plan" class="btn btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
          Print / Export PDF
        </button>
      </div>
    </article>
  `;
  
  // Attach listeners
  document.getElementById('btn-edit-plan').addEventListener('click', () => {
    state.isEditing = true;
    renderLessonPlan(chapter.id);
  });
  
  document.getElementById('btn-print-plan').addEventListener('click', () => {
    window.print();
  });
}

// EDIT MODE
function renderLessonPlanEditMode(chapter, unitName) {
  // Helper to render editable item rows
  const renderEditableSection = (arr, listId) => {
    const items = (arr || []).map((item, idx) => `
      <div class="editable-item" data-index="${idx}">
        <input type="text" class="editable-input" value="${escapeHTML(item)}">
        <button class="btn-icon btn-delete" onclick="this.parentElement.remove()" title="Delete item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
    `).join('');
    
    return `
      <div id="${listId}-container" class="editable-list-container">
        <div class="editable-items-list" id="${listId}-list">
          ${items}
        </div>
        <button class="btn-add-item" data-target="${listId}-list" type="button">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          Add Item
        </button>
      </div>
    `;
  };

  DOM.lessonPlanContent.innerHTML = `
    <article class="lesson-plan-card">
      <header class="lesson-plan-header">
        <div style="margin-bottom: 8px;">
          <label style="font-size:0.8rem; font-weight:600; opacity:0.8; text-transform:uppercase;">Topic / Chapter Name</label>
          <input type="text" id="edit-chapter-title" value="${escapeHTML(chapter.title)}" style="width:100%; padding:10px 14px; font-family:var(--font-header); font-size:1.6rem; font-weight:700; border-radius:var(--radius-sm); border:1px solid var(--border-color); color:var(--primary-dark); outline:none;">
        </div>
        <div class="lesson-plan-meta" style="align-items: center;">
          <span class="meta-item">
            <strong>Unit:</strong> ${escapeHTML(unitName)}
          </span>
          <span class="meta-item duration-edit-wrapper">
            <strong>Periods Needed:</strong>
            <input type="number" id="edit-chapter-periods" class="duration-input" value="${chapter.periods}" min="1" max="100">
          </span>
        </div>
      </header>
      
      <div class="lesson-plan-body editing">
        <div class="section-grid">
          <div class="plan-section half-width">
            <h3 class="section-title">Learning Objectives</h3>
            ${renderEditableSection(chapter.objectives, 'edit-objectives')}
          </div>
          
          <div class="plan-section half-width">
            <h3 class="section-title">Teaching Methodology</h3>
            ${renderEditableSection(chapter.methodology, 'edit-methodology')}
          </div>
        </div>
        
        <div class="section-grid">
          <div class="plan-section half-width">
            <h3 class="section-title">Resources Needed</h3>
            ${renderEditableSection(chapter.resources, 'edit-resources')}
          </div>
          
          <div class="plan-section half-width">
            <h3 class="section-title">Activities & Assignments</h3>
            ${renderEditableSection(chapter.activities, 'edit-activities')}
          </div>
        </div>
        
        <div class="section-grid">
          <div class="plan-section half-width">
            <h3 class="section-title">Assessment Methods</h3>
            ${renderEditableSection(chapter.assessment, 'edit-assessment')}
          </div>
          
          <div class="plan-section half-width">
            <h3 class="section-title">Homework / Practice</h3>
            ${renderEditableSection(chapter.homework, 'edit-homework')}
          </div>
        </div>
      </div>
      
      <div class="plan-actions-footer">
        <button id="btn-save-plan" class="btn btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
          Save Changes
        </button>
        <button id="btn-cancel-edit" class="btn btn-secondary">
          Cancel
        </button>
      </div>
    </article>
  `;

  // Attach dynamic add item button listeners
  DOM.lessonPlanContent.querySelectorAll('.btn-add-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const listId = btn.getAttribute('data-target');
      const listEl = document.getElementById(listId);
      
      const row = document.createElement('div');
      row.className = 'editable-item';
      row.innerHTML = `
        <input type="text" class="editable-input" value="" placeholder="Enter new item details...">
        <button class="btn-icon btn-delete" onclick="this.parentElement.remove()" title="Delete item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      `;
      listEl.appendChild(row);
      row.querySelector('input').focus();
    });
  });

  // Attach Save and Cancel listener actions
  document.getElementById('btn-save-plan').addEventListener('click', saveEditedLessonPlan);
  document.getElementById('btn-cancel-edit').addEventListener('click', () => {
    state.isEditing = false;
    renderLessonPlan(chapter.id);
  });
}

function saveEditedLessonPlan() {
  const result = findChapterById(state.selectedChapterId);
  if (!result) return;
  const { chapter } = result;
  
  // Extract inputs
  const titleInput = document.getElementById('edit-chapter-title');
  const periodsInput = document.getElementById('edit-chapter-periods');
  
  const extractList = (listId) => {
    const listEl = document.getElementById(listId);
    if (!listEl) return [];
    const inputs = listEl.querySelectorAll('.editable-input');
    const values = [];
    inputs.forEach(input => {
      if (input.value.trim()) {
        values.push(input.value.trim());
      }
    });
    return values;
  };
  
  // Update state data
  chapter.title = titleInput.value.trim() || chapter.title;
  chapter.periods = parseInt(periodsInput.value) || chapter.periods;
  chapter.objectives = extractList('edit-objectives-list');
  chapter.methodology = extractList('edit-methodology-list');
  chapter.resources = extractList('edit-resources-list');
  chapter.activities = extractList('edit-activities-list');
  chapter.assessment = extractList('edit-assessment-list');
  chapter.homework = extractList('edit-homework-list');
  
  // Persist to local storage
  saveSyllabusData();
  
  // Redraw
  state.isEditing = false;
  
  // Refresh sidebar (updates title/periods)
  renderSidebar();
  
  // Redraw active page
  renderLessonPlan(state.selectedChapterId);
  
  // Re-populate schedule dropdowns in case chapter name changed
  populateSchedulerDropdown();
}

// --- ACADEMIC CALENDAR SCHEDULER ---
function populateSchedulerDropdown() {
  DOM.schedulerChapterSelect.innerHTML = '<option value="">-- Choose Chapter --</option>';
  
  if (!state.activeSyllabusData || !state.activeSyllabusData.units) return;
  
  state.activeSyllabusData.units.forEach(unit => {
    const group = document.createElement('optgroup');
    group.label = unit.name;
    
    unit.chapters.forEach(ch => {
      const opt = document.createElement('option');
      opt.value = ch.id;
      opt.textContent = `${ch.title} (${ch.periods} Periods)`;
      group.appendChild(opt);
    });
    
    DOM.schedulerChapterSelect.appendChild(group);
  });
}

function renderCalendar() {
  DOM.calendarGridMonths.innerHTML = '';
  
  ACADEMIC_MONTHS.forEach(month => {
    const monthCard = document.createElement('div');
    monthCard.className = 'month-card';
    
    const chaptersScheduled = state.activeScheduleData[month] || [];
    
    // Calculate total periods scheduled for this month
    let totalPeriods = 0;
    chaptersScheduled.forEach(chId => {
      const chResult = findChapterById(chId);
      if (chResult) {
        totalPeriods += chResult.chapter.periods;
      }
    });
    
    monthCard.innerHTML = `
      <div class="month-name">
        <span>${month}</span>
        <span class="month-periods">${totalPeriods} Periods</span>
      </div>
      <ul class="month-chapters" id="calendar-month-list-${month}">
        <!-- Chapters list inside month -->
      </ul>
    `;
    
    DOM.calendarGridMonths.appendChild(monthCard);
    
    const monthListEl = document.getElementById(`calendar-month-list-${month}`);
    
    if (chaptersScheduled.length === 0) {
      monthListEl.innerHTML = '<li class="no-chapters">No topics scheduled</li>';
    } else {
      chaptersScheduled.forEach(chId => {
        const chResult = findChapterById(chId);
        if (chResult) {
          const { chapter } = chResult;
          const li = document.createElement('li');
          li.className = 'scheduled-chapter-tag';
          li.innerHTML = `
            <span>${escapeHTML(chapter.title)}</span>
            <button class="remove-btn" data-month="${month}" data-chapter="${chId}" title="Remove from schedule">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          `;
          
          li.querySelector('.remove-btn').addEventListener('click', (e) => {
            const chIdToRemove = e.currentTarget.getAttribute('data-chapter');
            const monthToRemoveFrom = e.currentTarget.getAttribute('data-month');
            removeChapterFromSchedule(monthToRemoveFrom, chIdToRemove);
          });
          
          monthListEl.appendChild(li);
        }
      });
    }
  });
}

function handleAddToSchedule() {
  const chapterId = DOM.schedulerChapterSelect.value;
  const month = DOM.schedulerMonthSelect.value;
  
  if (!chapterId) {
    alert('Please select a chapter to schedule.');
    return;
  }
  
  if (!state.activeScheduleData[month]) {
    state.activeScheduleData[month] = [];
  }
  
  // Check if already scheduled in this month to avoid duplicates
  if (state.activeScheduleData[month].includes(chapterId)) {
    alert('This chapter is already scheduled in this month.');
    return;
  }
  
  // Append to month schedule array
  state.activeScheduleData[month].push(chapterId);
  saveScheduleData();
  
  // Re-render
  renderCalendar();
  
  // Reset select
  DOM.schedulerChapterSelect.value = '';
}

function removeChapterFromSchedule(month, chapterId) {
  if (state.activeScheduleData[month]) {
    state.activeScheduleData[month] = state.activeScheduleData[month].filter(id => id !== chapterId);
    saveScheduleData();
    renderCalendar();
  }
}

// --- GLOBAL SEARCH & HIGHLIGHTING ---
function handleSearchInput(e) {
  const query = e.target.value.toLowerCase().trim();
  state.searchQuery = query;
  
  if (query.length > 1) {
    // If not already in search results pane, cache previous tab
    if (state.currentTab !== 'search-results-pane') {
      state.previousTab = state.currentTab;
    }
    
    // Switch to search pane
    switchTab('search-results-pane');
    
    // Perform search matches
    performSearch(query);
  } else {
    // Revert tab back if search cleared
    if (state.currentTab === 'search-results-pane') {
      switchTab(state.previousTab);
    }
  }
}

function performSearch(query) {
  DOM.searchKeywordDisplay.textContent = query;
  DOM.searchResultsItemsList.innerHTML = '';
  
  if (!state.activeSyllabusData || !state.activeSyllabusData.units) return;
  
  const results = [];
  
  state.activeSyllabusData.units.forEach(unit => {
    unit.chapters.forEach(ch => {
      let matchScore = 0;
      const matchDetails = [];
      
      // Match Title
      if (ch.title.toLowerCase().includes(query)) {
        matchScore += 10;
        matchDetails.push(`Matched in title: "${ch.title}"`);
      }
      
      // Match Objectives
      (ch.objectives || []).forEach(obj => {
        if (obj.toLowerCase().includes(query)) {
          matchScore += 2;
          matchDetails.push(`Learning Objective: "...${obj}..."`);
        }
      });
      
      // Match Methodology
      (ch.methodology || []).forEach(meth => {
        if (meth.toLowerCase().includes(query)) {
          matchScore += 2;
          matchDetails.push(`Methodology: "...${meth}..."`);
        }
      });
      
      // Match Activities
      (ch.activities || []).forEach(act => {
        if (act.toLowerCase().includes(query)) {
          matchScore += 2;
          matchDetails.push(`Activity: "...${act}..."`);
        }
      });
      
      // Match Homework
      (ch.homework || []).forEach(hw => {
        if (hw.toLowerCase().includes(query)) {
          matchScore += 1;
          matchDetails.push(`Homework: "...${hw}..."`);
        }
      });
      
      if (matchScore > 0) {
        results.push({
          chapter: ch,
          unitName: unit.name,
          score: matchScore,
          snippets: matchDetails
        });
      }
    });
  });
  
  // Sort results by match score
  results.sort((a, b) => b.score - a.score);
  
  DOM.searchResultsCount.textContent = results.length;
  
  if (results.length === 0) {
    DOM.searchResultsItemsList.innerHTML = `
      <div style="text-align:center; padding:50px; color:var(--text-light);">
        No matching chapters found. Try searching for other terms like "Python", "SQL", "Pandas", "Network", or "Activity".
      </div>
    `;
    return;
  }
  
  results.forEach(res => {
    const { chapter, unitName, snippets } = res;
    const item = document.createElement('div');
    item.className = 'search-result-item';
    
    // Highlight helper
    const highlightText = (text, word) => {
      const regex = new RegExp(`(${escapeRegex(word)})`, 'gi');
      return text.replace(regex, '<span class="highlight">$1</span>');
    };
    
    // Render snippets (maximum 2 snippets)
    const renderedSnippets = snippets.slice(0, 2).map(snip => {
      return `<div>${highlightText(escapeHTML(snip), query)}</div>`;
    }).join('');
    
    item.innerHTML = `
      <div class="search-result-title">${highlightText(escapeHTML(chapter.title), query)}</div>
      <div class="search-result-meta">${escapeHTML(unitName)} &bull; ${chapter.periods} Periods</div>
      <div class="search-result-snippet">
        ${renderedSnippets}
      </div>
    `;
    
    item.addEventListener('click', () => {
      selectChapter(chapter.id);
      switchTab('lesson-plan-pane');
      DOM.chapterSearch.value = '';
      state.searchQuery = '';
      renderSidebar();
    });
    
    DOM.searchResultsItemsList.appendChild(item);
  });
}

// --- HELPERS ---
function escapeHTML(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function escapeRegex(string) {
  return string.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&');
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', init);
