export function initNutrition() {
  const weightInput = document.getElementById('wt');
  const weightOut = document.getElementById('wt-out');
  const macros = document.getElementById('macros');
  const tipText = document.getElementById('tip-text');
  const goalButtons = Array.from(document.querySelectorAll('.goal-btn'));

  let goal = 0;
  const storedGoal = localStorage.getItem('workoutGoal');
  const storedWeight = localStorage.getItem('workoutBodyweight');

  if (storedGoal !== null) {
    goal = Number(storedGoal);
  }

  if (storedWeight && weightInput) {
    weightInput.value = storedWeight;
  }

  function setGoal(value) {
    goal = value;
    goalButtons.forEach((btn) => {
      const on = Number(btn.dataset.goal) === goal;
      btn.classList.toggle('active', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    localStorage.setItem('workoutGoal', String(goal));
    calc();
  }

  function calc() {
    if (!weightInput || !weightOut || !macros || !tipText) return;
    const wt = Number(weightInput.value);
    weightOut.textContent = `${wt} kg`;
    localStorage.setItem('workoutBodyweight', String(wt));

    const protein = Math.round(wt * 2.0);
    const cals = goal === 0 ? Math.round(wt * 33 + 300) : Math.round(wt * 33 + 500);
    const fat = Math.round(wt * 0.9);
    const carbCals = cals - (protein * 4) - (fat * 9);
    const carbs = Math.round(carbCals / 4);

    const protPct = Math.round((protein * 4 / cals) * 100);
    const carbPct = Math.round((carbs * 4 / cals) * 100);
    const fatPct = Math.round((fat * 9 / cals) * 100);

    macros.innerHTML = `
      <div class="macro-card">
        <div class="macro-label">Calories</div>
        <div class="macro-val" style="color:#4FB1FF">${cals.toLocaleString()}</div>
        <div class="macro-sub">kcal / day</div>
        <div class="bar-wrap"><div class="bar-fill" style="width:100%;background:#82C4FF"></div></div>
      </div>
      <div class="macro-card">
        <div class="macro-label">Protein</div>
        <div class="macro-val" style="color:#C8BEFF">${protein}g</div>
        <div class="macro-sub">${protPct}% of calories</div>
        <div class="bar-wrap"><div class="bar-fill" style="width:${protPct}%;background:#AFA9EC"></div></div>
      </div>
      <div class="macro-card">
        <div class="macro-label">Carbohydrates</div>
        <div class="macro-val" style="color:#9EF2CD">${carbs}g</div>
        <div class="macro-sub">${carbPct}% of calories</div>
        <div class="bar-wrap"><div class="bar-fill" style="width:${carbPct}%;background:#62D9B2"></div></div>
      </div>
      <div class="macro-card">
        <div class="macro-label">Fat</div>
        <div class="macro-val" style="color:#FFD0A5">${fat}g</div>
        <div class="macro-sub">${fatPct}% of calories</div>
        <div class="bar-wrap"><div class="bar-fill" style="width:${fatPct}%;background:#F2A65A"></div></div>
      </div>`;

    tipText.textContent = goal === 0
      ? 'Lean bulk: a ~300 kcal surplus above your maintenance. You will gain muscle with minimal fat. Best for most beginners - slow, steady, and sustainable.'
      : 'Aggressive bulk: a ~500 kcal surplus. Faster muscle gain, but expect some fat gain too. Better suited once you are past your first 3-4 months of training.';
  }

  goalButtons.forEach((btn) => {
    btn.addEventListener('click', () => setGoal(Number(btn.dataset.goal)));
  });

  if (weightInput) {
    weightInput.addEventListener('input', calc);
  }

  setGoal(goal);
}
