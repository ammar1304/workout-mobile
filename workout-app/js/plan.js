import { loadJson, saveJson } from './storage.js';
import { startRest } from './timer.js';

const setState = {};
const swapOpen = {};
const weightKey = 'workoutWeightLog';
const historyKey = 'workoutHistory';

let weightLog = loadJson(weightKey, {});
let history = loadJson(historyKey, []);
let active = 0;

const days = [
  {
    label: 'Day 1',
    name: 'Chest and Triceps',
    day: 'Monday',
    color: '#7C5CFF',
    lightBg: 'rgba(124, 92, 255, 0.18)',
    lightText: '#CFC5FF',
    muscles: ['Chest', 'Triceps', 'Front Delts'],
    exercises: [
      { name: 'Barbell Bench Press', sets: 3, reps: '8-10', rest: '90s', tip: 'Keep shoulder blades retracted; do not flare elbows too wide.' },
      { name: 'Incline Dumbbell Press', sets: 3, reps: '10-12', rest: '90s', tip: 'Set bench to 30-45 degrees. Emphasizes the upper chest.' },
      { name: 'Cable Chest Fly', sets: 3, reps: '12-15', rest: '60s', tip: 'Squeeze at the center, keep a slight bend in elbows.' },
      { name: 'Tricep Rope Pushdown', sets: 3, reps: '12-15', rest: '60s', tip: 'Lock elbows at sides, spread the rope at the bottom.' },
      { name: 'Overhead Dumbbell Extension', sets: 3, reps: '10-12', rest: '60s', tip: 'Long-head emphasis. Keep elbows close together.' }
    ]
  },
  {
    label: 'Day 2',
    name: 'Back and Biceps',
    day: 'Tuesday',
    color: '#2EC98C',
    lightBg: 'rgba(46, 201, 140, 0.16)',
    lightText: '#B5F6D9',
    muscles: ['Lats', 'Traps', 'Rhomboids', 'Biceps'],
    exercises: [
      { name: 'Barbell Bent-Over Row', sets: 3, reps: '8-10', rest: '90s', tip: 'Hinge at the hips, keep back flat, pull to lower chest.' },
      { name: 'Lat Pulldown', sets: 3, reps: '10-12', rest: '90s', tip: 'Pull the bar to your collarbone, lean back slightly.' },
      { name: 'Seated Cable Row', sets: 3, reps: '10-12', rest: '90s', tip: 'Chest up, drive elbows back, squeeze shoulder blades.' },
      { name: 'Face Pulls', sets: 3, reps: '15-20', rest: '60s', tip: 'Externally rotate at the end. Great for shoulder health.' },
      { name: 'Barbell or Dumbbell Curl', sets: 3, reps: '10-12', rest: '60s', tip: 'Control the eccentric phase - 2-3 seconds.' }
    ]
  },
  {
    label: 'Day 3',
    name: 'Legs',
    day: 'Thursday',
    color: '#F28B39',
    lightBg: 'rgba(242, 139, 57, 0.16)',
    lightText: '#FFD6B1',
    muscles: ['Quads', 'Hamstrings', 'Glutes', 'Calves'],
    exercises: [
      { name: 'Barbell Back Squat', sets: 4, reps: '6-8', rest: '2 min', tip: 'Break at hips and knees together. Hit at least parallel.' },
      { name: 'Romanian Deadlift', sets: 3, reps: '10-12', rest: '90s', tip: 'Hip hinge, feel a deep stretch in hamstrings, not lower back.' },
      { name: 'Leg Press', sets: 3, reps: '12-15', rest: '90s', tip: 'Foot placement higher = more glutes and hams, lower = quads.' },
      { name: 'Leg Curl (Seated or Lying)', sets: 3, reps: '12-15', rest: '60s', tip: 'Isolates hamstrings. Control the return slowly.' },
      { name: 'Standing Calf Raise', sets: 4, reps: '15-20', rest: '45s', tip: 'Full range of motion - pause at top and bottom.' }
    ]
  },
  {
    label: 'Day 4',
    name: 'Shoulders and Abs',
    day: 'Saturday',
    color: '#4FB1FF',
    lightBg: 'rgba(79, 177, 255, 0.16)',
    lightText: '#BFE6FF',
    muscles: ['Shoulders', 'Traps', 'Core'],
    exercises: [
      { name: 'Seated Dumbbell Shoulder Press', sets: 3, reps: '8-10', rest: '90s', tip: 'Press straight up, do not arch excessively in your lower back.' },
      { name: 'Dumbbell Lateral Raise', sets: 4, reps: '12-15', rest: '60s', tip: 'Slight forward lean, lead with elbows, do not swing.' },
      { name: 'Dumbbell Front Raise', sets: 3, reps: '12-15', rest: '60s', tip: 'Alternate arms to keep tension. Stop at shoulder height.' },
      { name: 'Cable Lateral Raise', sets: 3, reps: '15-20', rest: '45s', tip: 'Constant tension vs. dumbbells. Great finishing move.' },
      { name: 'Plank', sets: 3, reps: '30-45 sec', rest: '45s', tip: 'Squeeze glutes and abs simultaneously. Breathe normally.' },
      { name: 'Cable Crunch', sets: 3, reps: '15-20', rest: '45s', tip: 'Crunch your ribs toward your hips - not just bowing forward.' }
    ]
  }
];

const weekSchedule = [
  { d: 'Mon', l: 'Day 1', idx: 0 },
  { d: 'Tue', l: 'Day 2', idx: 1 },
  { d: 'Wed', l: 'Rest', idx: -1 },
  { d: 'Thu', l: 'Day 3', idx: 2 },
  { d: 'Fri', l: 'Rest', idx: -1 },
  { d: 'Sat', l: 'Day 4', idx: 3 },
  { d: 'Sun', l: 'Rest', idx: -1 }
];

const workoutByWeekday = { 1: 0, 2: 1, 4: 2, 6: 3 };

const swapMap = {
  'Barbell Bench Press': ['Dumbbell Bench Press', 'Push-up'],
  'Incline Dumbbell Press': ['Incline Barbell Press', 'Incline Push-up'],
  'Cable Chest Fly': ['Dumbbell Fly', 'Pec Deck'],
  'Tricep Rope Pushdown': ['Tricep Bar Pushdown', 'Bench Dips'],
  'Overhead Dumbbell Extension': ['Overhead Cable Extension', 'Skull Crushers'],
  'Barbell Bent-Over Row': ['Dumbbell Row', 'Chest-Supported Row'],
  'Lat Pulldown': ['Assisted Pull-up', 'Band Pulldown'],
  'Seated Cable Row': ['Dumbbell Row', 'Machine Row'],
  'Face Pulls': ['Band Face Pulls', 'Reverse Pec Deck'],
  'Barbell or Dumbbell Curl': ['EZ-Bar Curl', 'Hammer Curl'],
  'Barbell Back Squat': ['Goblet Squat', 'Leg Press'],
  'Romanian Deadlift': ['Dumbbell RDL', 'Kettlebell Hinge'],
  'Leg Press': ['Goblet Squat', 'Hack Squat'],
  'Leg Curl (Seated or Lying)': ['Assisted Nordic Curl', 'Stability Ball Leg Curl'],
  'Standing Calf Raise': ['Seated Calf Raise', 'Leg Press Calf Raise'],
  'Seated Dumbbell Shoulder Press': ['Standing DB Press', 'Machine Shoulder Press'],
  'Dumbbell Lateral Raise': ['Cable Lateral Raise', 'Leaning Lateral Raise'],
  'Dumbbell Front Raise': ['Plate Front Raise', 'Cable Front Raise'],
  'Cable Lateral Raise': ['Dumbbell Lateral Raise', 'Machine Lateral Raise'],
  'Plank': ['Dead Bug', 'Side Plank'],
  'Cable Crunch': ['Weighted Crunch', 'Decline Sit-up']
};

function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

function getSetState(dayIndex, exIndex, sets) {
  if (!setState[dayIndex]) setState[dayIndex] = {};
  if (!setState[dayIndex][exIndex]) {
    setState[dayIndex][exIndex] = Array.from({ length: sets }, () => false);
  }
  return setState[dayIndex][exIndex];
}

function toggleSet(dayIndex, exIndex, setIndex) {
  const state = getSetState(dayIndex, exIndex, days[dayIndex].exercises[exIndex].sets);
  state[setIndex] = !state[setIndex];
  renderContent();
}

function saveWeight(exKey, value) {
  if (value === '') return;
  const weight = Number(value);
  if (!weight) return;
  if (!weightLog[exKey]) weightLog[exKey] = [];
  const entries = weightLog[exKey];
  const today = formatDate(new Date());
  if (entries.length && entries[entries.length - 1].date === today) {
    entries[entries.length - 1].weight = weight;
  } else {
    entries.push({ date: today, weight });
  }
  if (entries.length > 30) entries.shift();
  saveJson(weightKey, weightLog);
  renderContent();
}

function renderSparkline(entries) {
  if (entries.length < 2) return '';
  const weights = entries.map(entry => entry.weight);
  const min = Math.min(...weights);
  const max = Math.max(...weights);
  const range = max - min || 1;
  const points = weights.map((value, index) => {
    const x = (index / (weights.length - 1)) * 100;
    const y = 28 - ((value - min) / range) * 24;
    return { x, y };
  });
  const line = points.map(point => `${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(' ');
  const last = points[points.length - 1];
  return `<svg class="sparkline" viewBox="0 0 100 30" preserveAspectRatio="none">
    <polyline fill="none" stroke="rgba(79, 177, 255, 0.9)" stroke-width="2" points="${line}" />
    <circle cx="${last.x.toFixed(1)}" cy="${last.y.toFixed(1)}" r="2" fill="#4fb1ff" />
  </svg>`;
}

function toggleSwap(key) {
  swapOpen[key] = !swapOpen[key];
  renderContent();
}

function markWorkoutComplete(dayIndex) {
  const today = formatDate(new Date());
  const existing = history.find(entry => entry.date === today);
  if (existing) {
    existing.day = dayIndex;
  } else {
    history.push({ date: today, day: dayIndex });
  }
  saveJson(historyKey, history);
  renderHistory();
  updateHistoryAction();
}

function computeStreak() {
  const dateSet = new Set(history.map(entry => entry.date));
  let streak = 0;
  const cursor = new Date();
  while (dateSet.has(formatDate(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function renderHistory() {
  const streak = computeStreak();
  const streakEl = document.getElementById('streakText');
  if (streakEl) streakEl.textContent = `${streak} day${streak === 1 ? '' : 's'}`;

  const heatmap = document.getElementById('heatmap');
  if (heatmap) {
    const dateSet = new Set(history.map(entry => entry.date));
    const today = new Date();
    const cells = [];
    for (let i = 27; i >= 0; i -= 1) {
      const day = new Date(today);
      day.setDate(today.getDate() - i);
      const key = formatDate(day);
      cells.push(`<div class="heatmap-cell${dateSet.has(key) ? ' active' : ''}" title="${key}"></div>`);
    }
    heatmap.innerHTML = cells.join('');
  }

  const note = document.getElementById('historyNote');
  if (note) {
    if (!history.length) {
      note.textContent = 'No workouts logged yet.';
    } else {
      const last = [...history].sort((a, b) => a.date.localeCompare(b.date)).pop();
      const dayLabel = last ? days[last.day].label : 'Workout';
      note.textContent = `Last workout: ${last.date} (${dayLabel})`;
    }
  }
}

function updateHistoryAction() {
  const btn = document.getElementById('markCompleteBtn');
  if (!btn) return;
  btn.textContent = `Mark ${days[active].label} complete`;
  const today = formatDate(new Date());
  const entry = history.find(item => item.date === today);
  btn.disabled = Boolean(entry && entry.day === active);
}

function scrollToPlan() {
  const plan = document.getElementById('plan');
  if (plan) plan.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function initTodayBanner() {
  const banner = document.getElementById('todayBanner');
  const text = document.getElementById('todayText');
  const btn = document.getElementById('todayBtn');
  if (!banner || !text || !btn) return;

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const weekday = new Date().getDay();
  const workoutIndex = workoutByWeekday[weekday];
  if (workoutIndex !== undefined) {
    text.textContent = `Today is ${dayNames[weekday]} - ${days[workoutIndex].name}.`;
    btn.textContent = "Open today's plan";
    btn.onclick = () => {
      setDay(workoutIndex);
      scrollToPlan();
    };
  } else {
    const next = findNextWorkout(weekday);
    text.textContent = `Today is ${dayNames[weekday]} - Rest day.`;
    if (next) {
      btn.textContent = `Next: ${dayNames[next.weekday]} - ${days[next.plan].name}`;
      btn.onclick = () => {
        setDay(next.plan);
        scrollToPlan();
      };
    } else {
      btn.textContent = 'View plan';
      btn.onclick = () => scrollToPlan();
    }
  }

  banner.hidden = false;
}

function findNextWorkout(weekday) {
  for (let offset = 1; offset <= 7; offset += 1) {
    const nextDay = (weekday + offset) % 7;
    if (workoutByWeekday[nextDay] !== undefined) {
      return { weekday: nextDay, plan: workoutByWeekday[nextDay] };
    }
  }
  return null;
}

function renderWeek() {
  const grid = document.getElementById('weekGrid');
  if (!grid) return;
  grid.innerHTML = weekSchedule.map((w) => {
    const d = w.idx >= 0 ? days[w.idx] : null;
    const bg = d ? d.lightBg : 'var(--color-background-secondary)';
    const clr = d ? d.lightText : 'var(--color-text-secondary)';
    const brd = d ? `border-color: ${d.color}66` : 'border-color: var(--color-border-tertiary)';
    const accent = d ? d.color : 'transparent';
    return `<div class="week-cell${d ? ' active-day' : ''}" style="--accent:${accent}; background:${bg}; ${brd}">
      <div class="d" style="color:${d ? clr : 'var(--color-text-primary)'}">${w.d}</div>
      <div class="l" style="color:${d ? clr : 'var(--color-text-secondary)'};opacity:${d ? 1 : 0.7}">${w.l}</div>
    </div>`;
  }).join('');
}

function renderTabs() {
  const tabs = document.getElementById('dayTabs');
  if (!tabs) return;
  tabs.innerHTML = days.map((d, i) =>
    `<button type="button" class="tab-btn${i === active ? ' active' : ''}" data-day="${i}" style="--accent:${d.color}">${d.label}: ${d.name}</button>`
  ).join('');
}

function renderContent() {
  const d = days[active];
  const tags = d.muscles.map((m, i) =>
    `<span class="muscle-tag" style="--i:${i}; background:${d.lightBg}; color:${d.lightText}; border-color:${d.color}55">${m}</span>`
  ).join('');
  const rows = d.exercises.map((e, i) => {
    const setStatus = getSetState(active, i, e.sets);
    const completed = setStatus.filter(Boolean).length;
    const percent = Math.round((completed / e.sets) * 100);
    const setButtons = setStatus.map((done, idx) =>
      `<button class="set-btn${done ? ' done' : ''}" type="button" data-action="toggle-set" data-ex="${i}" data-set="${idx}" aria-pressed="${done}">${idx + 1}</button>`
    ).join('');

    const exKey = e.name;
    const keyId = exKey.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const exKeyAttr = encodeURIComponent(exKey);
    const entries = weightLog[exKey] || [];
    const lastEntry = entries[entries.length - 1];
    const lastWeight = lastEntry ? lastEntry.weight : '';
    const hintText = lastEntry ? `Last: ${lastEntry.weight} kg` : 'No log yet';
    const sparkline = renderSparkline(entries.slice(-8));

    const swaps = swapMap[exKey] || [];
    const swapPanel = swaps.length && swapOpen[keyId]
      ? `<div class="swap-panel">${swaps.map(item => `<div class="swap-item">${item}</div>`).join('')}</div>`
      : '';

    return `<tr>
      <td>
        <div class="ex-name">${e.name}</div>
        <div class="ex-tip">${e.tip}</div>
        <div class="set-controls">
          <div class="set-buttons">${setButtons}</div>
          <div class="set-progress"><div class="set-progress-fill" style="width:${percent}%"></div></div>
        </div>
        <div class="weight-row">
          <input class="weight-input" type="number" inputmode="decimal" placeholder="Working weight (kg)" value="${lastWeight}" data-action="save-weight" data-ex-key="${exKeyAttr}">
          <div class="weight-hint" id="weight-hint-${keyId}">${hintText}</div>
          ${sparkline}
        </div>
        <div class="swap-row">
          <button class="swap-btn" type="button" data-action="toggle-swap" data-key="${keyId}">${swapOpen[keyId] ? 'Hide swaps' : 'Swap exercise'}</button>
        </div>
        ${swapPanel}
      </td>
      <td data-label="Sets" style="white-space:nowrap"><span class="badge" style="background:${d.lightBg};color:${d.lightText}">${e.sets} sets</span></td>
      <td data-label="Reps" style="white-space:nowrap;color:var(--color-text-secondary)">${e.reps}</td>
      <td data-label="Rest" style="white-space:nowrap;color:var(--color-text-secondary)">
        <div class="rest-line"><span>${e.rest}</span><button class="rest-btn" type="button" data-action="start-rest" data-rest="${e.rest}">Rest</button></div>
      </td>
    </tr>`;
  }).join('');

  const content = document.getElementById('dayContent');
  if (!content) return;
  content.innerHTML = `
    <div class="day-card" style="--accent:${d.color}; --accent-soft:${d.lightBg}; --accent-text:${d.lightText}">
      <div class="day-header">
        <h3 style="color:${d.color}">${d.name} - ${d.day}</h3>
        <p style="color:var(--color-text-secondary)">Full gym | Beginner | ~45-55 min</p>
        <div class="muscles">${tags}</div>
      </div>
      <table class="ex-table">
        <thead><tr>
          <th>Exercise</th><th>Sets</th><th>Reps</th><th>Rest</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <div class="rest-bar"><i class="ti ti-info-circle" style="color:${d.color}" aria-hidden="true"></i>Warm up 5 min before each session. Cool down and stretch 5 min after.</div>
    </div>`;

  updateHistoryAction();
}

function setDay(i) {
  active = i;
  renderTabs();
  renderContent();
}

function handleTabClick(event) {
  const btn = event.target.closest('.tab-btn');
  if (!btn) return;
  const idx = Number(btn.dataset.day);
  if (!Number.isNaN(idx)) setDay(idx);
}

function handleContentClick(event) {
  const button = event.target.closest('[data-action]');
  if (!button) return;
  const action = button.dataset.action;
  if (action === 'toggle-set') {
    toggleSet(active, Number(button.dataset.ex), Number(button.dataset.set));
  }
  if (action === 'start-rest') {
    startRest(button.dataset.rest);
  }
  if (action === 'toggle-swap') {
    toggleSwap(button.dataset.key);
  }
}

function handleContentFocusOut(event) {
  const input = event.target.closest('[data-action="save-weight"]');
  if (!input) return;
  const exKey = decodeURIComponent(input.dataset.exKey || '');
  saveWeight(exKey, input.value);
}

export function initPlan() {
  renderWeek();
  renderTabs();
  renderContent();
  renderHistory();
  initTodayBanner();

  const tabs = document.getElementById('dayTabs');
  if (tabs) tabs.addEventListener('click', handleTabClick);

  const content = document.getElementById('dayContent');
  if (content) {
    content.addEventListener('click', handleContentClick);
    content.addEventListener('focusout', handleContentFocusOut);
  }

  const markBtn = document.getElementById('markCompleteBtn');
  if (markBtn) {
    markBtn.addEventListener('click', () => markWorkoutComplete(active));
  }
}
