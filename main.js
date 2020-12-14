
AOS.init({
   offset: 50,
  delay: 0,
  easing: 'ease',
  duration: 1000,
});
var lazy_loader = document.querySelector(".lazy-loading")
document.addEventListener('DOMContentLoaded', (e) => {
   setTimeout(() => {
      lazy_loader.classList.add("fadeMeOut");
      lazy_loader.classList.remove("lazy-loading")
   }, 000);
})
let footer_margin = document.getElementById("footer_margin");
let footer = document.getElementById("footer");
function footerMargin() {
   footer_margin.style.marginBottom = footer.clientHeight + "px";
   let x = footer_margin.style.marginBottom;
   return x;
}
footerMargin();
window.addEventListener("resize", () => {
   footerMargin();
});
const progressbar = document.getElementById("progressBar");
var scrollValue = document.body.scrollHeight - (window.innerHeight);
window.onscroll = () => {
   progressbar.style.width = (Math.floor((window.pageYOffset / scrollValue) * 100)) + "%";
   //console.log(progressbar.style.width);
}
let sideNav = document.getElementById("nav-list");
function showMenu() {
   console.log("test");
   sideNav.classList.toggle("nav-list")
}
$(function () {
   
 
   let options = {
      root: null,
      rootMargin: '10px',
      threshold: 1,
   }
   let callback = (entries, observer) => {
     
      entries.forEach(entry => {
        if (entry.target.classList.contains("services-cards") == true && entry.isIntersecting == true) {
           console.log(true);
          $(".services-cards").toggleClass("test");
        } else {
           
        }
        
      })
   }


   let observer = new IntersectionObserver(callback, options)
   let target = document.querySelector('.services-cards');
   let card = document.querySelector('#footer_margin');

   //observer.observe(card);
   observer.observe(target);


   //infinite scroller
   var randomcards = document.querySelector("#rc-main")
   console.log(randomcards.scrollLeft);
 // randomcards.addEventListener('scroll', ()=>{
   //   console.log(randomcards.scroll);
  // })


});

window.onload = () => {
   createElements(50);
    cliptest();
   setTimeout(() => {
      
   }, 3000);
   navigator.sayswho= (function(){
      var ua= navigator.userAgent, tem, 
      M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
      if(/trident/i.test(M[1])){
          tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
          return 'IE '+(tem[1] || '');
      }
      if(M[1]=== 'Chrome'){
          tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
          if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
      }
      M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
      if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
      //console.log(M[0]);
      return M[0];
      
  })();
  let browserName = navigator.sayswho;
console.log(browserName);
  if(browserName == "Chrome"){
    document.querySelector("body").style.fontSize="80%";
  }
   
}
var body = document.querySelector('#rc-main');

function createElements(noOfElements) {
    for (let index = 0; index < noOfElements; index++) {
        var element = document.createElement('div');
        let thisColor = color();
        element.className += 'basicStyle';
        element.style.backgroundColor = thisColor;
        let para = document.createElement('span');
        let index1 = index+1;
        let text = document.createTextNode(index1);
        para.className += 'number';
        let para1 = document.createElement('span');

        let text1 = document.createTextNode(thisColor);
        para1.className += 'color';
        para1.appendChild(text1);
        para.appendChild(text);
        let clipboard = document.createElement('input');
        clipboard.className= 'clipboard';
        clipboard.type= 'text';
        //clipboard.disabled = true
        clipboard.value = thisColor;
        element.appendChild(para);

        element.appendChild(para1);
        element.appendChild(clipboard);
        body.appendChild(element);
    }
}
function color() {
    let a = ["1", "2", '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F'];
    var x = "#";
    for (let index = 0; index < 6; index++) {
            x += a[Math.ceil(Math.random() * 15)];
    }
    return x;
}      
function cliptest() {
    let clipboard = document.querySelectorAll('.basicStyle');
    clipboard.forEach(element =>{
        element.addEventListener('click', (e)=>{
            let mainElement = e.target;
            let childElement = mainElement.children[1];
            let text = childElement.innerHTML;
            let aux = document.createElement('input');
            aux.setAttribute('value',text);
            let body = document.querySelector('body');
            body.appendChild(aux);
            aux.select();
            document.execCommand('copy');
            alert("great... color copied to clipboard");
            body.removeChild(aux);
        })
    });
    
}


