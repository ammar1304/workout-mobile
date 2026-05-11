const DC = [
  { bg: "rgba(124, 92, 255, 0.18)", txt: "#CFC5FF", icoBg: "rgba(124, 92, 255, 0.3)", accent: "#7C5CFF", label: "Day 1 | Chest and Triceps" },
  { bg: "rgba(46, 201, 140, 0.18)", txt: "#9EF2CD", icoBg: "rgba(46, 201, 140, 0.3)", accent: "#2EC98C", label: "Day 2 | Back and Biceps" },
  { bg: "rgba(242, 139, 57, 0.18)", txt: "#FFD0A5", icoBg: "rgba(242, 139, 57, 0.3)", accent: "#F28B39", label: "Day 3 | Legs" },
  { bg: "rgba(79, 177, 255, 0.18)", txt: "#A7D7FF", icoBg: "rgba(79, 177, 255, 0.3)", accent: "#4FB1FF", label: "Day 4 | Shoulders and Abs" }
];

const EX = [
  { day: 0, icon: "ti-barbell", name: "Barbell bench press", muscles: ["Pectorals (main)", "Front deltoids", "Triceps"],
    steps: [
      "Lie flat on the bench, eyes directly under the bar. Plant your feet flat on the floor.",
      "Grip the bar just outside shoulder width. Retract your shoulder blades - think chest up, shoulders back and down - and maintain this throughout.",
      "Unrack the bar and hold it over your lower chest.",
      "Inhale and lower the bar in a slight arc to your lower chest (nipple line). Keep elbows at roughly 45-75 degrees from your torso, not flared to 90 degrees.",
      "When the bar touches your chest, press explosively upward and slightly back toward the rack. Exhale as you push.",
      "Lock out your elbows at the top, then repeat."
    ],
    mistakes: [
      "Flaring elbows to 90 degrees - puts extreme stress on the shoulder joint.",
      "Bouncing the bar off your chest - removes tension, risks injury.",
      "Lifting your hips or feet off the bench - reduces stability and power transfer.",
      "Holding your breath for multiple reps - exhale on the push."
    ],
    weight: "Men: start with the empty bar (20 kg) and learn the movement first. Add 5 kg per side once form is solid. Women: start with 10-15 kg total and progress from there." },

  { day: 0, icon: "ti-arrow-up", name: "Incline dumbbell press", muscles: ["Upper pectorals", "Front deltoids", "Triceps"],
    steps: [
      "Set the bench to 30-45 degrees. Sit with dumbbells on your thighs, then kick them up as you lie back.",
      "Hold dumbbells at chest level with a neutral or pronated grip, elbows at about 60 degrees from your torso.",
      "Press the dumbbells up and slightly inward until they nearly touch above your upper chest.",
      "Lower slowly (2 seconds) back to the start position, feeling the stretch in your chest.",
      "Keep your lower back lightly in contact with the bench - avoid excessive arch."
    ],
    mistakes: [
      "Setting the bench too high (above 45 degrees) - shifts work to delts, not upper chest.",
      "Letting dumbbells drift too far apart at the bottom - stresses the shoulder joint.",
      "Losing shoulder-blade retraction mid-set."
    ],
    weight: "Men: 8-12 kg per dumbbell to start. Women: 4-8 kg per dumbbell. Go lighter than you think - the angle is harder than flat bench." },

  { day: 0, icon: "ti-arrows-horizontal", name: "Cable chest fly", muscles: ["Pectorals (stretch emphasis)", "Front deltoids"],
    steps: [
      "Set both cable pulleys to chest height. Stand in the center, feet staggered for stability.",
      "Grab a handle in each hand, palms facing each other. Step forward slightly so cables are taut.",
      "With a slight bend in your elbows (locked throughout), bring your hands together in a wide arc as if hugging a large tree. Squeeze your chest hard at the center.",
      "Slowly return to the start, feeling a deep stretch across your chest. Do not let elbows go behind your torso."
    ],
    mistakes: [
      "Bending the elbows to help push - turns it into a press, not a fly.",
      "Using momentum to swing the weight - slow, controlled movement only.",
      "Going so heavy that you cannot feel the chest working."
    ],
    weight: "Men: 5-8 kg per side. Women: 3-5 kg per side. This is an isolation move - keep it light and feel every rep." },

  { day: 0, icon: "ti-arrow-down", name: "Tricep rope pushdown", muscles: ["Triceps (all three heads)"],
    steps: [
      "Attach a rope to a high cable pulley. Stand facing the machine, feet hip-width apart.",
      "Grip the rope with both hands, palms facing each other. Pull elbows to your sides - they stay glued there for the entire set.",
      "Push the rope down, spreading it apart at the bottom (hands go outward slightly) to fully contract the triceps.",
      "Slowly return to the start - forearms should reach roughly parallel to the floor, feeling a stretch in the tricep."
    ],
    mistakes: [
      "Letting your elbows drift forward as you push - uses front delts, not triceps.",
      "Using bodyweight to push the rope down instead of just the arm.",
      "Not spreading the rope at the bottom - shortchanges the contraction."
    ],
    weight: "Men: 10-15 kg. Women: 5-10 kg. You should feel a strong burn by rep 12." },

  { day: 0, icon: "ti-triangle", name: "Overhead dumbbell extension", muscles: ["Triceps long head (main)", "Medial and lateral heads"],
    steps: [
      "Sit on a bench with back support. Hold one dumbbell with both hands, overlapping your fingers under the top plate.",
      "Raise the dumbbell overhead with arms fully extended.",
      "Keeping your upper arms vertical and elbows pointing forward, lower the dumbbell behind your head until you feel a deep stretch in your triceps.",
      "Press back up to full extension. Do not let your elbows flare out wide."
    ],
    mistakes: [
      "Elbows flaring out to the sides - shortens the range and strains elbows.",
      "Moving the upper arms - only your forearms should move.",
      "Using too much weight, which causes the lower back to arch excessively."
    ],
    weight: "Men: 10-16 kg dumbbell. Women: 6-10 kg. The long head needs a full stretch - do not cut the range short." },

  { day: 1, icon: "ti-barbell", name: "Barbell bent-over row", muscles: ["Latissimus dorsi", "Rhomboids", "Traps", "Rear deltoids", "Biceps (secondary)"],
    steps: [
      "Stand with feet hip-width. Hinge at the hips until your torso is roughly 45 degrees to the floor (or more horizontal for heavier rows). Keep a neutral spine - no rounding.",
      "Grip the bar just outside shoulder width, overhand grip. Let the bar hang at arm's length.",
      "Inhale, then pull the bar to your lower chest or upper abdomen, driving your elbows back and up. Squeeze your shoulder blades together at the top.",
      "Lower the bar in a controlled way. Do not just let it drop.",
      "Keep your core braced and back flat throughout - if your lower back rounds, reduce the weight."
    ],
    mistakes: [
      "Rounding the lower back - the most common and dangerous mistake; use less weight.",
      "Standing too upright - becomes more of a shrug than a row.",
      "Letting momentum carry the bar - control every inch.",
      "Pulling to the neck instead of the lower chest."
    ],
    weight: "Men: 40-60 kg to start. Women: 20-30 kg. Master the hip hinge with lighter weight first." },

  { day: 1, icon: "ti-arrow-down", name: "Lat pulldown", muscles: ["Latissimus dorsi (main)", "Teres major", "Biceps", "Rear deltoids"],
    steps: [
      "Sit at the pulldown machine. Adjust the knee pad to secure your legs.",
      "Grip the bar wider than shoulder width, palms facing away. Lean back slightly (about 10-15 degrees).",
      "Pull the bar down to your collarbone, driving your elbows down and back. Think elbows to your back pockets.",
      "Squeeze your lats at the bottom, then slowly let the bar rise back up with full arm extension. Feel the stretch at the top."
    ],
    mistakes: [
      "Pulling behind the neck - puts dangerous stress on the cervical spine. Always pull to the front.",
      "Leaning back too far - turns it into a pullover, not a lat pulldown.",
      "Shrugging your shoulders up as the bar returns - keep them down throughout."
    ],
    weight: "Men: 40-55 kg. Women: 20-30 kg. You should just barely complete 12 clean reps." },

  { day: 1, icon: "ti-arrow-left", name: "Seated cable row", muscles: ["Rhomboids", "Traps", "Lats", "Rear deltoids", "Biceps"],
    steps: [
      "Sit upright at the cable row station with feet on the platform, knees slightly bent. Hold the handle with both hands.",
      "Start with arms extended and a slight forward lean. Then drive your chest tall and sit upright as you begin pulling.",
      "Pull the handle to your lower chest or upper abdomen, driving elbows back. Pinch your shoulder blades together hard at the end.",
      "Slowly return to the start with a slight controlled forward lean - feel the stretch in your mid-back."
    ],
    mistakes: [
      "Rounding the back and using momentum to heave the weight - use less weight.",
      "Pulling with your arms instead of leading with your elbows.",
      "Not reaching forward at the start - you lose the stretch and shorten the range of motion."
    ],
    weight: "Men: 40-55 kg. Women: 20-30 kg. Focus on feeling your mid-back, not just your arms." },

  { day: 1, icon: "ti-arrows-up", name: "Face pulls", muscles: ["Rear deltoids", "Rotator cuff", "Traps", "Rhomboids"],
    steps: [
      "Attach a rope to a cable set at face height (or slightly above). Grab both ends with an overhand grip, thumbs pointing back.",
      "Step back until your arms are almost straight. Stand tall with a slight lean back.",
      "Pull the rope toward your face, separating the hands as they near your ears. At the end, your upper arms should be parallel to the floor and hands beside your ears - externally rotate your shoulders so thumbs point behind you.",
      "Return slowly. This is a posture and shoulder-health exercise - feel it in the back of your shoulders, not your traps."
    ],
    mistakes: [
      "Pulling too low - toward the chin or chest - misses the rear delt entirely.",
      "Using too much weight, causing the traps to take over.",
      "Rushing the reps - the external rotation at the end is the whole point."
    ],
    weight: "Men: 10-15 kg. Women: 5-10 kg. This is a health movement - light weight, high reps, perfect form." },

  { day: 1, icon: "ti-arm", name: "Barbell or dumbbell curl", muscles: ["Biceps brachii (main)", "Brachialis", "Brachioradialis"],
    steps: [
      "Stand with feet hip-width, holding a barbell (or dumbbells) at arm's length, palms facing forward.",
      "Without moving your upper arms, curl the weight up toward your shoulders. Your elbows stay at your sides.",
      "Squeeze at the top, then lower the weight slowly over 2-3 seconds - the slow lowering (eccentric) is key for muscle growth.",
      "Do not swing your torso back to heave the weight up."
    ],
    mistakes: [
      "Swinging the back to momentum the bar up - reduces bicep work, risks lower back strain.",
      "Letting elbows drift forward at the top - locks out the tension. Keep elbows slightly behind the torso at peak.",
      "Dropping the weight too fast on the way down - you are throwing away 50% of the benefit."
    ],
    weight: "Barbell: Men 20-30 kg, Women 10-15 kg. Dumbbells: Men 8-12 kg each, Women 4-8 kg each." },

  { day: 2, icon: "ti-barbell", name: "Barbell back squat", muscles: ["Quadriceps (main)", "Glutes", "Hamstrings", "Core (stabilizer)", "Lower back (stabilizer)"],
    steps: [
      "Step under a barbell racked at upper-chest height. Place it across your upper traps (not on your neck). Grip it outside your shoulders for stability.",
      "Step back with two steps, feet shoulder-width apart, toes pointed out 15-30 degrees.",
      "Take a deep breath and brace your core hard (as if about to be punched). Begin the descent.",
      "Push your knees out in line with your toes, sit your hips back and down simultaneously until your thighs are at least parallel to the floor.",
      "Drive through your whole foot (especially the heel) to stand back up. Exhale as you rise."
    ],
    mistakes: [
      "Knees caving inward (valgus collapse) - push knees out actively.",
      "Heels rising off the floor - indicates ankle mobility issue; try elevating heels on plates.",
      "Only going halfway down - partial reps build partial results; aim for parallel or below.",
      "Looking down - keep your gaze slightly up to maintain a neutral spine."
    ],
    weight: "Men: start with the empty bar (20 kg) or 40-60 kg once comfortable. Women: 20-40 kg. Master depth and bracing before adding weight." },

  { day: 2, icon: "ti-arrow-down", name: "Romanian deadlift", muscles: ["Hamstrings (main)", "Glutes", "Lower back (erectors)"],
    steps: [
      "Stand with feet hip-width, bar or dumbbells in front of your thighs, overhand grip.",
      "With a slight bend in your knees (fixed - they do not move much), hinge at the hips and push them back.",
      "Lower the weight along the front of your legs, keeping the bar close to your body. You should feel a deep stretch in your hamstrings - stop when your back is about parallel to the floor or when you can no longer maintain a neutral spine.",
      "Drive your hips forward to return to standing, squeezing your glutes at the top. Do not hyperextend your lower back."
    ],
    mistakes: [
      "Rounding the lower back - the most critical error; hinge from the hips with a flat back.",
      "Bending the knees too much - turns it into a regular deadlift. Keep a soft, consistent knee bend.",
      "Letting the bar drift away from your body - keep it sliding close to your shins and thighs."
    ],
    weight: "Men: 40-60 kg. Women: 20-35 kg. Less weight than a squat - the hamstring stretch is the cue, not the load." },

  { day: 2, icon: "ti-device-gamepad", name: "Leg press", muscles: ["Quadriceps (main)", "Glutes", "Hamstrings (secondary)"],
    steps: [
      "Sit in the leg press machine with your back and head against the pad. Place feet shoulder-width on the platform - higher placement emphasizes glutes and hams, lower = more quads.",
      "Release the safety handles. Lower the platform by bending your knees until they reach about 90 degrees (no deeper if lower back lifts off the pad).",
      "Press back up through your whole foot to nearly full extension. Do not lock out your knees - keep a very slight bend.",
      "Re-engage the safety handles to rack."
    ],
    mistakes: [
      "Letting your lower back peel off the seat at the bottom - this loads your spine dangerously; raise the foot platform.",
      "Locking out the knees explosively - can damage the joint over time.",
      "Placing feet too low and narrow, which overloads the knees."
    ],
    weight: "Men: 60-100 kg. Women: 30-60 kg. This machine allows heavier loads - but only as much as you can control." },

  { day: 2, icon: "ti-wave-sine", name: "Leg curl (seated or lying)", muscles: ["Hamstrings (main)", "Gastrocnemius (secondary)"],
    steps: [
      "Adjust the machine so your knees align with the machine pivot point. Lie face down (lying) or sit (seated) with the pad just above your heels.",
      "Starting from a straight leg position, curl your heels toward your glutes as far as you can.",
      "Squeeze the hamstrings hard at the peak contraction.",
      "Lower the weight slowly - take at least 2 seconds on the way down. Do not let it drop."
    ],
    mistakes: [
      "Letting hips rise (lying version) to heave the weight - isolate the hamstring by keeping your hips down.",
      "Rushing the negative - slow lowering is where most growth happens.",
      "Using so much weight that you cannot fully flex - reduce and feel the muscle work."
    ],
    weight: "Men: 20-35 kg. Women: 10-20 kg. You should feel a deep hamstring burn by rep 12." },

  { day: 2, icon: "ti-arrow-up", name: "Standing calf raise", muscles: ["Gastrocnemius (main)", "Soleus"],
    steps: [
      "Stand with the balls of your feet on the edge of a step or calf raise platform. Hold a dumbbell in each hand (or use the machine).",
      "Lower your heels as far below the step as possible - a full, deep stretch.",
      "Rise up on the balls of your feet as high as you can, pausing at the top for one full second.",
      "Lower slowly back to the deep stretch. Every rep should have full range of motion."
    ],
    mistakes: [
      "Partial reps - only going halfway up or not lowering heels below the step.",
      "Bouncing at the bottom - removes the stretch benefit and risks the Achilles tendon.",
      "Going too heavy and losing the pause at the top."
    ],
    weight: "Men: 12-20 kg per hand. Women: 6-12 kg per hand. Calves respond to volume - 15-20 reps with full range beats heavy partial reps." },

  { day: 3, icon: "ti-barbell", name: "Seated dumbbell shoulder press", muscles: ["Anterior deltoids (main)", "Medial deltoids", "Triceps", "Upper traps"],
    steps: [
      "Sit on a bench with back support set vertically (90 degrees). Hold dumbbells at shoulder height, palms facing forward, elbows at about 90 degrees.",
      "Press the dumbbells straight overhead until your arms are almost fully extended. Do not let them touch at the top.",
      "Lower slowly back to the start - upper arms parallel to the floor. Keep your core braced and lower back neutral against the bench."
    ],
    mistakes: [
      "Arching your lower back excessively to press more weight - reduce the load or use a lighter dumbbell.",
      "Pressing the dumbbells forward instead of straight up - a sign of front-delt dominance; cue yourself to press directly overhead.",
      "Flaring elbows too far forward at the start position."
    ],
    weight: "Men: 10-16 kg per dumbbell. Women: 5-10 kg. Shoulders are a smaller muscle group than you might expect - do not ego lift." },

  { day: 3, icon: "ti-arrows-horizontal", name: "Dumbbell lateral raise", muscles: ["Medial deltoids (main)", "Supraspinatus"],
    steps: [
      "Stand with feet hip-width, a dumbbell in each hand by your sides. Hinge forward very slightly at the hip (this better targets the medial delt).",
      "With elbows very slightly bent (soft, not flexed), raise your arms out to the sides until they are parallel to the floor. Lead with your elbows, not your hands.",
      "Lower slowly - take at least 2 seconds on the way down. Do not let gravity drop the weight."
    ],
    mistakes: [
      "Swinging the body to heave the weight up - use lighter dumbbells with strict form.",
      "Raising arms too high (above parallel) - engages traps instead of medial delts.",
      "Pouring water - turning your thumbs down - actually reduces medial delt activation; keep wrists neutral or thumbs slightly up."
    ],
    weight: "Men: 6-10 kg. Women: 3-6 kg. This is probably lighter than you think - most beginners start too heavy and use momentum." },

  { day: 3, icon: "ti-arrow-up", name: "Dumbbell front raise", muscles: ["Anterior deltoids (main)", "Upper pectorals (secondary)"],
    steps: [
      "Stand holding dumbbells in front of your thighs, palms facing you.",
      "With a slight elbow bend, raise one dumbbell forward to shoulder height. Keep it in a smooth arc - do not jerk.",
      "Lower it back under control and raise the other arm (alternating keeps it strict).",
      "Stop at shoulder height - going higher brings the traps in."
    ],
    mistakes: [
      "Raising both dumbbells at once - increases the load on your lower back.",
      "Using momentum or swinging - defeats the purpose entirely.",
      "Going above shoulder height consistently."
    ],
    weight: "Men: 6-10 kg. Women: 3-6 kg. Alternate arms for better control. Strict form only." },

  { day: 3, icon: "ti-wave-sine", name: "Cable lateral raise", muscles: ["Medial deltoids", "Supraspinatus"],
    steps: [
      "Set a cable pulley to its lowest position. Stand sideways to the machine, the cable crossing in front of your body. Grip the handle with the far hand (the one away from the machine).",
      "Keeping a slight elbow bend and upright posture, raise your arm out to the side to shoulder height.",
      "The cable provides constant tension throughout the movement - unlike dumbbells, the hardest point is not just at the top.",
      "Lower slowly. Complete all reps on one side, then switch."
    ],
    mistakes: [
      "Standing too close to the machine - the cable angle reduces tension.",
      "Letting the weight pull your arm too far down on the return, losing control.",
      "Leaning away from the machine to cheat the weight up."
    ],
    weight: "Men: 5-8 kg. Women: 3-5 kg. Lighter than dumbbell raises - the constant tension makes it harder at the bottom." },

  { day: 3, icon: "ti-minus", name: "Plank", muscles: ["Transverse abdominis", "Rectus abdominis", "Obliques", "Glutes", "Shoulder stabilizers"],
    steps: [
      "Place your forearms on the floor, elbows directly under your shoulders. Extend your legs behind you, on your toes.",
      "Squeeze your glutes, brace your abs (like you are about to be punched), and keep your body in a perfectly straight line from head to heel.",
      "Do not let your hips sag toward the floor or pike up toward the ceiling.",
      "Breathe normally - do not hold your breath. Keep your neck neutral (look at the floor just ahead of your hands)."
    ],
    mistakes: [
      "Sagging hips - the most common error; squeeze glutes hard to prevent this.",
      "Holding your breath - you should be able to breathe throughout.",
      "Craning your neck up or letting your head drop.",
      "Shaking or trembling means you are close to failure - maintain form until you have to stop, do not collapse into bad position."
    ],
    weight: "Bodyweight only. Start with 20-30 second holds and build to 60+ seconds over weeks." },

  { day: 3, icon: "ti-arrow-down", name: "Cable crunch", muscles: ["Rectus abdominis (main)", "Obliques"],
    steps: [
      "Attach a rope to a high cable pulley. Kneel in front of the machine, holding the rope behind your head with both hands.",
      "Start with your torso upright. Crunch downward, driving your elbows toward your knees and rounding your spine - think of pulling your ribs down to your hips, not just bowing forward.",
      "Pause at the bottom and squeeze your abs hard.",
      "Return to the upright start position with control - do not just let the cable pull you back."
    ],
    mistakes: [
      "Pulling down with your arms or shoulders instead of crunching with your abs.",
      "Sitting back on your heels as you descend - should be a spinal flexion, not a hip hinge.",
      "Going too heavy - if you cannot feel your abs working, the weight is too high."
    ],
    weight: "Men: 10-20 kg. Women: 5-12 kg. You should feel this purely in your abs, not your neck or shoulders." }
];

let currentFilter = 'all';
const openIdx = new Set();

function setFilter(filter) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach((btn) => {
    const on = btn.dataset.filter === filter;
    btn.classList.toggle('on', on);
    if (on) {
      btn.style.background = on && filter !== 'all' ? DC[Number(filter)].accent : '#444441';
      btn.style.color = '#fff';
    } else {
      btn.style.background = '';
      btn.style.color = '';
    }
  });
  render();
}

function toggle(index) {
  if (openIdx.has(index)) {
    openIdx.delete(index);
  } else {
    openIdx.add(index);
  }
  render();
}

function render() {
  const search = document.getElementById('q');
  const list = document.getElementById('list');
  if (!list || !search) return;

  const q = search.value.toLowerCase();
  const filtered = EX.map((e, i) => ({ ...e, i })).filter((e) => {
    if (currentFilter !== 'all' && e.day !== Number(currentFilter)) return false;
    if (q && !e.name.toLowerCase().includes(q) && !e.muscles.join(' ').toLowerCase().includes(q)) return false;
    return true;
  });

  list.style.opacity = '0.2';
  requestAnimationFrame(() => {
    list.innerHTML = filtered.map((e) => {
      const c = DC[e.day];
      const open = openIdx.has(e.i);
      const pillsHtml = e.muscles.map((m) => `<span class="muscle-pill" style="background:${c.bg};color:${c.txt}">${m}</span>`).join('');
      const stepsHtml = e.steps.map((s, n) => `<div class="step"><div class="step-num" style="background:${c.bg};color:${c.txt}">${n + 1}</div><div class="step-text">${s}</div></div>`).join('');
      const mistakesHtml = e.mistakes.map((m) => `<div class="mistake"><i class="ti ti-alert-triangle" style="font-size:16px;flex-shrink:0;margin-top:1px" aria-hidden="true"></i><span>${m}</span></div>`).join('');
      const body = open ? `<div class="ex-body">
        <div class="section-label">Muscles worked</div>
        <div class="muscles-row">${pillsHtml}</div>
        <div class="section-label">Step-by-step form</div>
        <div class="steps">${stepsHtml}</div>
        <div class="section-label">Common mistakes to avoid</div>
        <div class="mistakes">${mistakesHtml}</div>
        <div class="section-label">Starting weight guideline</div>
        <div class="weight-box"><i class="ti ti-barbell" style="font-size:18px;flex-shrink:0;margin-top:1px" aria-hidden="true"></i><div class="weight-text">${e.weight}</div></div>
      </div>` : '';
      return `<div class="ex-card">
        <div class="ex-header" data-index="${e.i}" role="button" aria-expanded="${open}">
          <div class="ex-icon" style="background:${c.icoBg}"><i class="ti ${e.icon}" style="color:${c.txt}" aria-hidden="true"></i></div>
          <div class="ex-meta">
            <div class="ex-name">${e.name}</div>
            <div class="ex-sub">${c.label}</div>
          </div>
          <i class="ti ti-chevron-down chevron${open ? ' open' : ''}" aria-hidden="true"></i>
        </div>${body}
      </div>`;
    }).join('');
    list.style.opacity = '1';
  });
}

function handleListClick(event) {
  const header = event.target.closest('.ex-header');
  if (!header) return;
  const index = Number(header.dataset.index);
  if (!Number.isNaN(index)) toggle(index);
}

export function initForm() {
  const search = document.getElementById('q');
  const list = document.getElementById('list');

  if (search) {
    search.addEventListener('input', render);
  }

  if (list) {
    list.addEventListener('click', handleListClick);
  }

  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => setFilter(btn.dataset.filter));
  });

  setFilter('all');
}
