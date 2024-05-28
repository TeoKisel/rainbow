            // SCROLL PAGE ANIMATION //

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('show');
      } 
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.title');
  let cards = document.querySelectorAll('.features_item');
  let trandsCard = document.querySelectorAll('.trands_card');
  let animation = document.querySelectorAll('.observer');
  let animationRight = document.querySelectorAll('.observer-right');

  
  for (let elm of elements) {
    observer.observe(elm);
  }
  for (let elm of cards) {
    observer.observe(elm);
  }
  for (let elm of trandsCard) {
    observer.observe(elm);
  }
  for (let elm of animation) {
    observer.observe(elm);
  }
  for (let elm of animationRight) {
    observer.observe(elm);
  }

            // SCROLL PAGE ANIMATION //

                // ACTIVE MENU //


const menuBurger = document.querySelector('.burger-menu');
const header = document.querySelector('.header');

console.log(menuBurger);

menuBurger.addEventListener('click', function(){
    if(header.classList.contains('open')){
      header.classList.remove('open');
    } else {
      header.classList.add('open');
    }
});


