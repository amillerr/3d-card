const card = document.querySelector('.card');
const container = document.querySelector('.container');

const title = container.querySelector('.info__title');
const desc = container.querySelector('.info__desc');
const item = container.querySelector('.card__item_img');
const sizes = container.querySelector('.sizes');
const purchase = container.querySelector('.purchase');

// Movement animation event 

container.addEventListener('mousemove', e => {

  let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 70;
  
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate In

container.addEventListener('mouseenter', e => {
  card.style.transform = 'none';

  title.style.transform = "translateZ(150px)";
  desc.style.transform = "translateZ(125px)";
  item.style.transform = "translateZ(200px) rotateZ(-25deg)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});

// Animate Out

container.addEventListener('mouseleave', e => {
  card.style.transition = "all 0.3s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  title.style.transform = "translateZ(0px)";
  desc.style.transform = "translateZ(0px)";
  item.style.transform = "translateZ(0px) rotateZ(0deg)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});