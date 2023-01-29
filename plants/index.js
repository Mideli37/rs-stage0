console.log(`1. Вёрстка соответствует макету. Ширина экрана 768px +24
2. Вёрстка соответствует макету. Ширина экрана 380px +24
3. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15
4. На ширине экрана 380рх и меньше реализовано адаптивное меню +22 (Допускается появление адаптивного меня на ширине более 380, но не допускается на ширине более 770px)
- при ширине страницы 380рх панель навигации скрывается, появляется бургер-иконка +2   
- при нажатии на бургер-иконку плавно появляется адаптивное меню +4
- адаптивное меню соответствует цветовой схеме макета +4
- при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4
- ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4 
- при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4 
Всего - 85/75`);

let serviceButtons = document.querySelectorAll('.serviceButtons button');
let cards = document.querySelectorAll('.card.main');
let serviceButtonsArr = Array.from(serviceButtons);
serviceButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    if (serviceButtonsArr.filter((x) => x.className.includes('active')).length < 2) {
      button.classList.toggle('active');
    } else {
      button.classList.remove('active');
    }

    if (serviceButtonsArr.filter((x) => x.className.includes('active')).length > 0) {
      cards.forEach((card) => card.classList.add('blur'));
    } else {
      cards.forEach((card) => card.classList.remove('blur'));
    }

    serviceButtons.forEach((button) => {
      if (button.className.includes('active')) {
        cards.forEach((card) => {
          console.log(button.className);
          console.log(card.querySelector('.head').innerHTML.slice(0, 4).toLowerCase());
          if (
            button.className.includes(
              card.querySelector('.head').innerHTML.slice(0, 4).toLowerCase(),
            )
          ) {
            card.classList.remove('blur');
          }
        });
      }
    });
  });
});



function burgerToggle() {
  let nav = document.querySelector('.burgerNavigation');
  if (nav.style.left === '0%') {
    nav.style.left = '100%';
    document.querySelector('.burgerIcon img').style.display = 'initial';
    document.querySelector('.cross').style.display = 'none';
    document.querySelector('.modal').style.display = 'none';
  } else {
    document.querySelector('.burgerIcon img').style.display = 'none';
    document.querySelector('.cross').style.display = 'unset';
    nav.style.left = '0%';
    document.querySelector('.modal').style.display = 'block';
  }
}
