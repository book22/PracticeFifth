'use strict';

{
  let toggle = document.getElementById('toggle-btn');
  let nav = document.getElementById('nav');
  let blackBg = document.getElementById('blackBg');
  let fadeImg = document.getElementById('fadeIn');

  toggle.addEventListener('click', ()=> {
    nav.classList.toggle('open');
    blackBg.classList.toggle('maskOn');
    toggle.classList.toggle('xMark');
  });
  
  blackBg.addEventListener('click', ()=>{
    nav.classList.remove('open');
    blackBg.classList.remove('maskOn');
    toggle.classList.remove('xMark');
  })

  // fadeImg.animate([{opacity: '0'},{opacity: '1'}], 1500)
  console.log("s")
}