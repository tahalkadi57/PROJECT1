const searchField = document.querySelector('.search-field');

const searchTxt = document.querySelector('.search-txt');

const searchBtn = document.querySelector('.search-btn');

const submit = document.getElementById('search-btn');

let active = false;

let writing = false;

function SubmitToButton(){
    if(searchTxt.value == ''){
        submit.type = 'button';
    }
}
SubmitToButton();

searchBtn.addEventListener('click', () => {
  
    if(active == false){
        searchField.classList.add('active');
        active = true;
        writing = true;
    } else {
        searchField.classList.remove('active');
        active = false;
        writing = false
    }
});

searchTxt.addEventListener('input',() => {
    if (searchTxt.value == '') {
        submit.type = 'button';
    } else {
        submit.type = 'submit';
    }
});

//if a ul li a clicked add this class 
let litem = document.querySelectorAll('.burger-links ul li');

litem.forEach( (elem) => { elem.addEventListener('mouseover', (e)=>{
  
    e.stopPropagation();
    
    e.target.parentElement.parentElement.querySelectorAll(`.active`).forEach((eleme) => eleme.classList.remove('active'));
    
    e.target.parentElement.classList.add('active');
  })
  
});

let page= document.querySelector('.landing-page');
 
const brger = document.querySelector('.burger');

let hi = false ;

let brgerLinks = document.querySelector('.burger-links');

let deviceLinks = brgerLinks.childNodes[1].cloneNode(true);

deviceLinks.classList = 'vertical-menu';

let header = document.querySelector('.landing-page header');

let deviceLi = deviceLinks.querySelectorAll('li');

function activateAnchors(element, event, classname ){
  element.forEach((elem) => { 
    elem.addEventListener(event, (e)=>{
      e.stopPropagation();
      e.target.parentElement.parentElement.querySelectorAll(`.${classname}`).forEach((eleme) => eleme.classList.remove(classname));
      e.target.parentElement.classList.add(classname);
    });
  })
}
function activateElem(element, event, classname) {
  element.forEach((elem) => {
    elem.addEventListener(event, (e) => {
      e.stopPropagation();
      e.target.parentElement.querySelectorAll(`.${classname}`).forEach((eleme) => eleme.classList.remove(classname));
      e.target.classList.add(classname);
    });
  })
}
  document.body.appendChild(deviceLinks);
activateAnchors(deviceLi, 'click', 'hover');
let carousel= document.querySelector('.intro-area ul');

let style = document.getElementsByTagName('style')[0];
brger.addEventListener('click',  function (e) {

    if(hi == false) {
        e.stopPropagation();
       
        brger.classList.add('active');
        
        document.body.classList.add ('active');
        
        topWrapper.classList.remove('show');

        hi = true;
        
    } else {
      if(window.pageYOffset  > carousel.getBoundingClientRect().top) {
        if(document.body.classList.contains('active')) {
          topWrapper.classList.add('show');
          console.log ('worked! ')
        }
      }
        document.body.classList.remove ('active');
        
        hi = false;
        
    }
  }
);

document.addEventListener('click', (e) => {
  if(e.target === brger ) {
    
  }
  if(e.target !== deviceLinks && e.target !== deviceLi) {
    
    if(document.body.classList.contains('active'))  {
        document.body.classList.remove('active');
    }
    if(brger.classList.contains('active')) {
        brger.classList.remove ('active');
    }
  }
});

deviceLinks.addEventListener('click',(e)=>{
  
  e.stopPropagation();
  
});
deviceLi.forEach((li)=> li.addEventListener('click',(e)=>{
  
  e.stopPropagation();
  
}));
window.addEventListener ('resize', resizedHead);
function resizedHead() {
  if(writing === false) {
    header.style.height = `${window.innerHeight}px`;
  }
}
/*window.onscroll = function () {
  header.style.backgroundPositionY = window.pageYOffset * 0.5+ 'px';
}
*/
/*--------------------
        slider
--------------------*/

// changing ul width 


let carouselLi = document.querySelectorAll('.intro-area ul li');

function changeHerosWidth() {
  carousel.style.width = window.innerWidth * carousel.childElementCount + 'px';
}
changeHerosWidth();

/*----------------------
   start prev & next btn
-----------------------*/
let next = document.querySelector('.next'), 

prev = document.querySelector('.prev');

let i = 0;

let liWidth =  carouselLi[0].clientWidth;


let navig = document.querySelector('.navigators');
let mee = (Array.from(carouselLi).fill('')).map((val, i) => {
  let span = document.createElement('span');
  return '<span data-index=' + (i) + '>' + val +'</span>';
})
navig.innerHTML = mee.join('');
next.addEventListener ('click', ()=>{
  if(window.getComputedStyle(document.body).direction === 'rtl') {
    previ();
  } else {
    nexty();
  }

});
prev.addEventListener ('click', ()=> {
  if(window.getComputedStyle(document.body).direction === 'rtl') {
    nexty();
  } else {
    previ();
  }

});

let spans = document.querySelectorAll('.navigators span');
spans[0].classList.add('active');
function nexty() {
   if( i >= carouselLi.length - 1){i = -1;}
     i++;
     carousel.style.transition = `transform 0.5s`;
     carousel.style.transform = `translateX(${-liWidth * i}px)`;
     activeBullet();

}
function activeBullet() {
  spans[i].parentElement.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
  spans[i].classList.add('active');
}
function previ() {
   if( i <= 0)i = carouselLi.length;
     i--;
     carousel.style.transition = `transform 0.5s`;
     carousel.style.transform = `translateX(${-liWidth * i}px)`;
     activeBullet();
}
spans.forEach(el => el.addEventListener('click', (e) => {
  i = e.target.dataset.index;
  carousel.style.transform = `translateX(${-liWidth * i}px)`;
  e.target.parentElement.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
  e.target.classList.add('active');
  carousel.style.transition = `transform 0.5s`;
}))
let btun = document.querySelectorAll('.btn');
if ( window.innerWidth < 768) {
  btun.forEach( (btn) => btn.addEventListener( 'touchstart', function() {
    btn.style.color = 'rgba(255,255,255,0.5)';
  }));
  btun.forEach( (btn) => btn.addEventListener('touchend', function() {
    btn.style.color = 'rgba(255,255,255,1)';
  }));
} 
if ( window.innerWidth > 768) {
  btun.forEach((btn) => btn.addEventListener('mouseenter', function() {
    btn.style.backgroundColor = 'rgba(255,255,255,0.9)';
  }));
  btun.forEach((btn) => btn.addEventListener('mouseout', function() {
    btn.style.backgroundColor = 'rgba(255,255,255,0.5)';
  }));
}
if(window.getComputedStyle(document.body).direction === 'rtl') {
  liWidth  = -carouselLi[0].clientWidth;
}
if ( window.innerWidth < 768) {

  console.log(window.innerWidth);
  document.body.appendChild(deviceLinks );
}
/*----------------------
    end next & prev btn
----------------------*/

/*----------------------
   start site settings
----------------------*/

let toggleBtn = document.querySelector('.toggle-btn');

let toggleBtnI = document.querySelector('.toggle-btn i');

let siteSettings= document.querySelector('.site-settings');

resizedHead(siteSettings);

let activeBtn = document.querySelector('.change-background .button');

let localBackOption = localStorage.getItem('background_option');

let backOption = true;

let backchange = setInterval(changeHeaderBackground, 5000);

toggleBtn.addEventListener('click',(e) => {
  
  e.stopPropagation();
  
  toggleBtnI.classList.toggle('fa-spin');
  
  siteSettings.classList.toggle('show');
  
  document.body.classList.toggle('show');
  
})


page.addEventListener('click', (e) => {
  
    if (siteSettings.classList.contains('show')) {
      
      siteSettings.classList.remove('show');
      
  }
});

/*---------------------------
   start auto bakground change
----------------------------*/
let y = 0;
let imgsArray = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg'];

function changeHeaderBackground() {
  if (backOption === true) {
    if (y >= imgsArray.length - 1) y = 0;
    header.style.backgroundImage = `url(${imgsArray[y++]})`;
    }
}
/*---------------------------
   end auto bakground change
----------------------------*/

if (localBackOption !== null) {
  if (localBackOption === 'true') {
    backOption = true;
    header.style.animation = `animateHeader 5s linear 0s infinite alternate running`;
    activeBtn.classList.add('active');
    hi = true;
  } else {
    backOption = false;
    activeBtn.classList.remove('active');
    clearInterval(backchange)
    hi = false;
  }
}
activeBtn.addEventListener('click', function() {
  
  if (hi == false) {
    
    activeBtn.classList.add('active');
    
    if (activeBtn.classList.contains('active')) {
    
      backOption = true;
      
      changeHeaderBackground();
      
      location.reload();
      
      localStorage.setItem('background_option', true);
    
    } 
    
    hi = true;
    
  } else {
    
    activeBtn.classList.remove('active');
    
    activeBtn.classList.remove('fa-spin');
    
    hi = false;
    
    header.style.animation = `animateHeader 0s linear 0s infinite both paused`;

    if(!activeBtn.classList.contains('active')) {
      
      backOption = false;
      
      clearInterval(backchange);
      
      localStorage.setItem('background_option', false) ;

    }
  }
});
/*----------------------
   end site settings
----------------------*/
let topWrapper = document.querySelector('.burger-wrapper')

function changeTopWrapper() {
  let ii = window.pageYOffset;
  topWrapper.style.backgroundColor = `rgba(255,255,255 ,${ii/ window.innerHeight *4})`;
  if (window.pageYOffset >= window.innerHeight) {
    header.style.animationPlayState = `paused`;
    backOption = false;
  } else {
    header.style.animationPlayState = `running`;
    backOption = true;
  }
}
let toTop = document.querySelector('.to-top');

let lastScrollTop = window.pageYOffset || header.scrollTop;
let bord= document.querySelector('.burger_bord')
function std() { // or window.addEventListener("scroll"....
  var st = window.pageYOffset || header.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  if (st > lastScrollTop) {
    topWrapper.style.top = -topWrapper.clientHeight + 'px';
  } else {
    topWrapper.style.top = 0 + 'px';
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

};
let tooval= carousel.getBoundingClientRect().top - topWrapper.clientHeight;
window.addEventListener('scroll', ()=>{
  std();
  if (window.pageYOffset > window.innerHeight) {
    toTop.style.display = 'flex';
  } else {
    toTop.style.display = 'none';
  }
  if(!document.body.classList.contains('active')) {
    if (window.pageYOffset > tooval) {
      topWrapper.classList.add('show');
    } else {
      if(topWrapper.classList.contains('show')){
        topWrapper.classList.remove('show');
      }
    }
  } 
});
/*----------------------
  resize top page height
----------------------*/

function resizeElemHeight() {
  if(writing === false) {
    topWrapper.style.height = (60 + window.innerHeight * 0.01) +'px';
  }
}
resizeElemHeight();
window.addEventListener('resize', resizeElemHeight);

let istanwer = /إستنور/g;
let word = document.body.textContent.match(istanwer).toString();
let str = 'hii';

function changeWord() {
  let istanwer = /إستنور/g;
  let globalText = document.body.innerHTML;
  globalText = document.body.innerHTML.replace(istanwer, `<mark >${word}</mark>`);
} 
changeWord();
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.

console.log(carousel.clientTop);

let moving;

toTop.addEventListener('touchstart',()=>{
  moving = false;
  window.addEventListener('touchmove', (e) => {
    if(moving == false ) {
      let x = e.touches[0].screenX;
      let y = e.touches[0].screenY;
      toTop.style.left = x + 'px';
      toTop.style.top = y + 'px';
      toTop.style.transform = `translate(${-x * 0.33}%, ${-y * 0.33}%) `
    } 
  });
});

toTop.addEventListener('touchend', ()=>{
    moving = true;
});
toTop.addEventListener('click', ()=>{
  window.scrollTo(0,0);
})
console.log(document.body.hasChildNodes(toTop));
