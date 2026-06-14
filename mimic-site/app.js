function handleLogin(e){
  e.preventDefault();
  // simple navigation to dashboard
  window.location.href = 'dashboard.html';
}

// Countdown timers for both pages
function startCountdowns(){
  document.querySelectorAll('#app-deadline, #transfer-deadline, #app-deadline-short, #transfer-deadline-short')
    .forEach(el=>{ if(el) el.textContent = ''; });
}

function formatDelta(ms){
  const s = Math.floor(ms/1000);
  const hh = String(Math.floor(s/3600)).padStart(2,'0');
  const mm = String(Math.floor((s%3600)/60)).padStart(2,'0');
  const ss = String(s%60).padStart(2,'0');
  return `${hh}:${mm}:${ss}`;
}

function renderKCSEResults(){
  const content = document.getElementById('page-content');
  if(!content) return;
  content.innerHTML = `
    <div class="space-y-6">
      <div class="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
        <div>
          <div class="text-xs uppercase tracking-[0.3em] text-slate-300">KCSE RESULTS</div>
          <div class="mt-2 text-xl font-semibold uppercase tracking-[0.2em] text-white">Secondary School Results</div>
        </div>
        <div class="grid grid-cols-2 gap-4 rounded border border-white/20 bg-white/5 p-4 text-center text-slate-200">
          <div class="border-r border-white/20 pr-4">
            <div class="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">Mean Grade</div>
            <div class="mt-3 text-4xl font-bold">A-</div>
          </div>
          <div class="pl-4">
            <div class="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">AGP</div>
            <div class="mt-3 text-4xl font-bold">75</div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-slate-200">
        <div class="rounded border border-white/20 p-4">
          <div class="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">101 ENG</div>
          <div class="mt-3 text-3xl font-bold">A</div>
        </div>
        <div class="rounded border border-white/20 p-4">
          <div class="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">102 KIS</div>
          <div class="mt-3 text-3xl font-bold">A-</div>
        </div>
        <div class="rounded border border-white/20 p-4">
          <div class="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">121 MAT A</div>
          <div class="mt-3 text-3xl font-bold">B+</div>
        </div>
        <div class="rounded border border-white/20 p-4">
          <div class="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">231 BIO</div>
          <div class="mt-3 text-3xl font-bold">A-</div>
        </div>
        <div class="rounded border border-white/20 p-4">
          <div class="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">232 PHY</div>
          <div class="mt-3 text-3xl font-bold">B</div>
        </div>
        <div class="rounded border border-white/20 p-4">
          <div class="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">233 CHE</div>
          <div class="mt-3 text-3xl font-bold">B-</div>
        </div>
        <div class="rounded border border-white/20 p-4">
          <div class="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">312 GEO</div>
          <div class="mt-3 text-3xl font-bold">B+</div>
        </div>
        <div class="rounded border border-white/20 p-4">
          <div class="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">451 CMP</div>
          <div class="mt-3 text-3xl font-bold">A</div>
        </div>
      </div>

      <div class="mt-6 text-center uppercase tracking-[0.2em] text-slate-300">No KCSE Bridging</div>
    </div>
  `;
}

function setActiveButton(buttonId){
  document.querySelectorAll('.dashboard-action-button').forEach(button=>{
    button.classList.remove('border-[var(--gold)]','bg-[var(--gold)]','text-[var(--dark-slate)]');
    button.classList.add('bg-[var(--deep-maroon)]','text-white');
  });
  const active = document.getElementById(buttonId);
  if(active){
    active.classList.remove('bg-[var(--deep-maroon)]','text-white');
    active.classList.add('border-[var(--gold)]','bg-[var(--gold)]','text-[var(--dark-slate)]');
  }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', ()=>{
  startCountdowns();
  const kcseButton = document.getElementById('kcse-results-button');
  if(kcseButton){
    kcseButton.addEventListener('click', ()=>{
      renderKCSEResults();
      setActiveButton('kcse-results-button');
    });
  }
});
