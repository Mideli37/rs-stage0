console.log(`При нажатии на кнопки:Gardens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50
При выборе одной услуги (нажатии одной кнопки), остальные карточки услуг принимают эффект blur, выбранная услуга остается неизменной + 20
Пользователь может нажать одновременно две кнопки услуги, тогда эта кнопка тоже принимает стиль активной и карточки с именем услуги выходят из эффекта blur. При этом пользователь не может нажать одновременно все три кнопки услуг. При повторном нажатии на активную кнопку она деактивируется (становится неактивной) а привязанные к ней позиции возвращаются в исходное состояние (входит в состяние blur если есть еще активная кнопка или же перестають быть в блюре если это была единственная нажатая кнопка). +20
Анимации плавного перемещения кнопок в активное состояние и карточек услуг в эффект blur +10
Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50
При нажатии на dropdown кнопку появляется описание тарифов цен в соответствии с макетом. Внутри реализована кнопка order, которая ведет на секцию contacts, при нажатии на нее Accordion все еще остается открытым. +25
Пользователь может самостоятельно закрыть содержимое нажав на кнопку dropup, но не может одновременно открыть все тарифы услуг, при открытии нового тарифа предыдущее автоматически закрывается. +25
В разделе contacts реализован select с выбором городов +0
В зависимости от выбора пользователя появляется блок с адресом и телефоном офиса в определенном городе +0
При нажатии на кнопку Call us реализован вызов по номеру, который соответствует выбранному городу +0
Всего 100/100`);

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

const accordeonToggle = (block) => {
  block.classList.toggle('active');
  block.lastElementChild.classList.toggle('none');
  let basic = block.firstElementChild;
  basic.children[1].classList.toggle('none');
  basic.children[2].classList.toggle('none');
};
let orderButtons = document.querySelectorAll('.order');
let accordeonButtons = document.querySelectorAll('.price.block');
accordeonButtons.forEach((block) => {
  block.addEventListener('click', (event) => {
    if (Array.from(orderButtons).includes(event.target)) {
    } else {
      if (Array.from(accordeonButtons).filter((x) => x.className.includes('active')).length == 0) {
        accordeonToggle(block);
      } else if (block.className.includes('active')) {
        accordeonToggle(block);
      } else {
        accordeonButtons.forEach((button) => {
          if (button.className.includes('active')) {
            accordeonToggle(button);
          }
        });
        accordeonToggle(block);
      }
    }
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
