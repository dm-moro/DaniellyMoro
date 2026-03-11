const obs = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);} }), {threshold:0.08});
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

let dur=25*60,rem=dur,iv=null,run=false,mname='Foco';
function setMode(m,n,btn){clearInterval(iv);run=false;dur=m*60;rem=dur;mname=n;document.getElementById('startBtn').textContent='Iniciar';upd();document.querySelectorAll('.ptab').forEach(t=>t.classList.remove('active'));btn.classList.add('active');}
function upd(){const mm=String(Math.floor(rem/60)).padStart(2,'0'),ss=String(rem%60).padStart(2,'0');document.getElementById('timer').textContent=mm+':'+ss;document.getElementById('tlbl').textContent=mname+(run?' · Em andamento':' · Pronto');}
function toggleTimer(){if(run){clearInterval(iv);run=false;document.getElementById('startBtn').textContent='Continuar';}else{run=true;document.getElementById('startBtn').textContent='Pausar';iv=setInterval(()=>{rem--;if(rem<=0){clearInterval(iv);run=false;rem=0;upd();document.getElementById('startBtn').textContent='Iniciar';alert('✦ '+mname+' concluída!');return;}upd();},1000);}upd();}
function resetTimer(){clearInterval(iv);run=false;rem=dur;document.getElementById('startBtn').textContent='Iniciar';upd();}