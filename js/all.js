/* ========
    FV 動畫
=========== */
const  js_FVshow = document.querySelectorAll('.js-FVshow')
window.addEventListener('load',()=>{
  setTimeout(()=>{
    js_FVshow.forEach(item=>item.classList.add('FVmove'))
  },150)
})
/* ========
    打勾
=========== */
const checkbox = document.querySelectorAll(".checkbox-container");
const checkmark = document.querySelectorAll(".checkmark");

checkbox.forEach((item, ind) => {
  item.addEventListener("click", () => {
    console.log(item)
    checkmark.forEach((show, showInd) => {
      if (ind === showInd) {
        console.log(show)
        show.classList.toggle("checkShow");
      }
    });
  });
});

/* ========
 轉圈箭頭 延遲載入
=========== */
const bg22 = document.querySelector('.bg22')
const  thing22_1=document.querySelector('.thing22-1')
window.addEventListener('load',()=>{
  window.addEventListener('scroll',()=>{
    if(window.scrollY>=bg22.offsetTop-800){
      thing22_1.classList.add('rotateCircle')
    }
  })
})
/* ========
  morning & night change
=========== */

const M_jumpShow = document.querySelectorAll(".morning .js-jumpShow");
const N_jumpShow = document.querySelectorAll(".night .js-jumpShow");
const morningShow = document.querySelector(".morning");
const nightShow = document.querySelector(".night");

let num_M = 0;
let num_N = 0;
let interval_M, interval_N;
function morningActive() {
  clearInterval(interval_M);
  num_M = 0;
  interval_M = setInterval(() => {
    if (num_M < M_jumpShow.length) {
      M_jumpShow.forEach((item, ind) => {
        if (num_M === ind) {
          setTimeout(() => {
            item.classList.add("zoomIn");
          }, 125);
        }
      });
      num_M++;
    } else {
      clearInterval(interval_M);
      setTimeout(() => {
        morningShow.classList.add("close");
        nightShow.classList.remove("close");
        M_jumpShow.forEach((item) => {
          item.classList.remove("zoomIn");
        });
        num_M = 0;
        nightActive(); // 在A结束后开始B
      }, 3000);
    }
  }, 250);
}

function nightActive() {
  clearInterval(interval_N);
  num_N = 0;
  interval_N = setInterval(() => {
    if (num_N < N_jumpShow.length) {
      N_jumpShow.forEach((item, ind) => {
        if (num_N === ind) {
          setTimeout(() => {
            item.classList.add("zoomIn");
          }, 125);
        }
      });
      num_N++;
    } else {
      clearInterval(interval_N);
      setTimeout(() => {
        morningShow.classList.remove("close");
        nightShow.classList.add("close");
        N_jumpShow.forEach((item) => {
          item.classList.remove("zoomIn");
        });
        num_N = 0;
        morningActive(); // 在B结束后开始A
      }, 3000);
    }
  }, 250);
}
morningActive();

/* ========
    QA收合
=========== */
function scrollShow(scrollID) {
  const arrowActive = document.querySelector(
    `.arrow0${scrollID.charAt(scrollID.length - 1)}`
  );
  arrowActive.classList.toggle("QA_arrow--active");
  const show = document.querySelector(scrollID);
  show.classList.toggle("show");
}
function scrollShow2(scrollID) {

  const show = document.querySelector(scrollID);
  show.classList.toggle("show");
}

/* ========
   popup
=========== */
// function popUpShow(showElement){
//   document.body.style.overflow="hidden"
// const show = document.querySelector(showElement)
// show.classList.add("popControl--active");
// document.body.style.overflow="hidden";
// show.style.overflowY="scroll";
// }
// function popUpClose(showElement){
//   document.body.style.overflow="visible"
//   const show = document.querySelector(showElement)
//   show.classList.remove("popControl--active");
//   document.body.style.overflow="visible";
//   show.style.overflowY="hidden";
// }

let a = document.querySelector('.thing41-L');
let b = document.querySelector('.thing41-R');
let aa = document.querySelector('#color_natural');
let bb = document.querySelector('#color_pink_natural');
let inner = document.querySelector('.popUp__Content');


function popUp(e, f, g) {
  let html = document.documentElement;
  let Content = document.querySelector(`${e}`);
  let xxx = document.querySelector(`${f}`);
  let yyy = document.querySelector(`${g}`);

  console.log(xxx)
  if (xxx.classList.contains('display--none')) {
      xxx.classList.remove('display--none');
  }
  let close = document.querySelector('#close')

  Content.classList.add('active');
  html.style.overflowY = 'hidden';
  inner.style.overflowY = 'scroll';
  close.addEventListener("click", () => {
      // Content.classList.remove('active');
      Content.classList.remove('active');
      html.style.overflowY = 'scroll';
      inner.style.overflowY = 'hidden';
      xxx.classList.add('display--none');
      yyy.classList.add('display--none');
  })
}
        // 顏色切換
        function switchColor(e) {
          let el = document.querySelector(`${e}`);
          let Natural = el.querySelector('.color_natural');
          let PinkNatural = el.querySelector('.color_pink_natural');

          Natural.classList.toggle('display--none');
          PinkNatural.classList.toggle('display--none');
      }