const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const emailAddress = document.querySelector('#emailAddress');
const Password = document.querySelector('#Password');
const button = document.querySelector('#buttonClaim');
const group = document.querySelectorAll('.group__input');
const containerInput = document.querySelector('.inputs');
const textError = document.querySelector('.text__error');
const form = document.querySelector('form');


button.addEventListener('click',()=>{
  event.preventDefault();
  console.log("click");

  for(i=0; i< group.length; i++){
    group[i].classList.remove('activado');
    if (group[i].firstElementChild.value == ""){
        console.log("campo vacio");
        group[i].classList.toggle('activado')
    }
  }

});


