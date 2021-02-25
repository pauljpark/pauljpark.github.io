// $(function(){  // $(document).ready shorthand
//     $('.example').fadeIn('slow');
//   });
  
//   $(document).ready(function() {
      
//       /* Every time the window is scrolled ... */
//       $(window).scroll( function(){
      
//           /* Check the location of each desired element */
//           $('.hi').each( function(i){
              
//               var bottom_of_object = $(this).position().top + $(this).outerHeight();
//               var bottom_of_window = $(window).scrollTop() + $(window).height();
              
//               /* If the object is completely visible in the window, fade it it */
//               if( bottom_of_window > bottom_of_object ){
                  
//                   $(this).animate({'opacity':'1'},1500);
                      
//               }
              
//           }); 
      
//       });
      
//   });

window.onload=function() {
    const darkModeButton = document.getElementById('dark')
    darkModeButton.addEventListener('click', onDarkClick)

    const lightModeButton = document.getElementById('light')
    lightModeButton.addEventListener('click', onLightClick)
}

const line = document.head.appendChild(document.createElement('style'))
const circles = document.head.appendChild(document.createElement('style'))

function onLightClick() {
    document.querySelector('.hi').setAttribute('style', 'color: #1D1D1F')
    document.querySelector('.text').setAttribute('style', 'color: #1D1D1F')
    document.querySelector('.skills-header').setAttribute('style', 'color: #1D1D1F')
    document.querySelector('.projects-header').setAttribute('style', 'color: #1D1D1F')
    document.querySelector('.experience-header').setAttribute('style', 'color: #1D1D1F')
    document.querySelector('.intro-background').setAttribute('style', 'background-color: #fff')
    document.querySelector('.intro-container').setAttribute('style', 'background-color: #fff')
    document.querySelector('.skills-background').setAttribute('style', 'background-color: #F6F6F6')
    document.querySelector('.projects-background').setAttribute('style', 'background-color: #fff')
    document.querySelector('.experience-background').setAttribute('style', 'background-color: #F6F6F6')
    document.querySelectorAll('.project-text')[0].setAttribute('style', 'color: #1D1D1F')
    document.querySelectorAll('.project-text')[1].setAttribute('style', 'color: #1D1D1F')
    line.innerHTML = ".timeline::after {background-color: #1D1D1F}"
    circles.innerHTML = ".container::after {background-color: #1D1D1F}"
    document.getElementById('dark').setAttribute('style', 'display: block')
    document.getElementById('light').setAttribute('style', 'display: none')
}

function onDarkClick() {
    document.querySelector('.hi').setAttribute('style', 'color: #fff')
    document.querySelector('.text').setAttribute('style', 'color: #fff')
    document.querySelector('.skills-header').setAttribute('style', 'color: #fff')
    document.querySelector('.projects-header').setAttribute('style', 'color: #fff')
    document.querySelector('.experience-header').setAttribute('style', 'color: #fff')
    document.querySelector('.intro-background').setAttribute('style', 'background-color: #1D1D1F')
    document.querySelector('.intro-container').setAttribute('style', 'background-color: #1D1D1F')
    document.querySelector('.skills-background').setAttribute('style', 'background-color: #1D1D1F')
    document.querySelector('.projects-background').setAttribute('style', 'background-color: #1D1D1F')
    document.querySelector('.experience-background').setAttribute('style', 'background-color: #1D1D1F')
    document.querySelectorAll('.project-text')[0].setAttribute('style', 'color: #F6F6F6')
    document.querySelectorAll('.project-text')[1].setAttribute('style', 'color: #F6F6F6')
    line.innerHTML = ".timeline::after {background-color: #fff}"
    circles.innerHTML = ".container::after {background-color: #fff}"
    document.getElementById('dark').setAttribute('style', 'display: none')
    document.getElementById('light').setAttribute('style', 'display: block')
}