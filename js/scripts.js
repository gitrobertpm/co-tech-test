
// Program mountain nav to swap backgrounds and active class for links

const secondaryContent = document.querySelector('.secondary-content');
const mtLinkOne = document.querySelector('#mt-link-1');
const mtLinkTwo = document.querySelector('#mt-link-2');

mtLinkOne.addEventListener('click', e => {
  e.preventDefault();
  mtLinkOne.classList.add('active');
  mtLinkTwo.classList.remove('active');
  secondaryContent.style.backgroundImage = 'url(img/mountain-3.jpg)';
});

mtLinkTwo.addEventListener('click', e => {
  e.preventDefault();
  mtLinkTwo.classList.add('active');
  mtLinkOne.classList.remove('active');
  secondaryContent.style.backgroundImage = 'url(img/mountain-4.jpg)';
});
