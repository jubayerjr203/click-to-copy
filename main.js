let text = document.querySelector('.text');
let popup = document.querySelector('.popup');
let contenar = document.querySelector('.contenar');

text.addEventListener('click', () => {
  popup.classList.add('activ');
  copyTextFun();
});
popup.addEventListener('animationend', ()=>{
  popup.classList.remove('activ');
});

function copyTextFun(){
 let textarea = document.createElement('textarea');
 textarea.setAttribute('readonly','');
 textarea.style.position = 'absolute';
 contenar.appendChild(textarea);
 textarea.style.opacity = '0';
 textarea.value = text.innerText;
 textarea.select();
 document.execCommand("copy");
 contenar.removeChild(textarea);
}

