import { initPlan } from './plan.js';
import { initNutrition } from './nutrition.js';
import { initForm } from './form.js';
import { initRestTimer } from './timer.js';

document.addEventListener('DOMContentLoaded', () => {
  initRestTimer();
  initNutrition();
  initPlan();
  initForm();

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js');
    });
  }
});
