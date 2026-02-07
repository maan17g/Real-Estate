const counters = document.querySelectorAll(".counter");
let totalsec=2;
counters.forEach(counter => {
  const start = +counter.dataset.bsStart;
  const end = +counter.dataset.bsEnd;
  const sign= counter.dataset.bsSign;
  let i = start;
 const interval=setInterval(() => {
    counter.innerHTML=i+sign;
    i++;
    if(i>end) clearInterval(interval);
  }, 1000/(end/totalsec));
});
