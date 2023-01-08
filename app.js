let leftInput  = document.querySelector('.leftInput');
let rightInput  = document.querySelector('.rightInput');
let btn  = document.querySelector('.btn');
let stand  = document.querySelector('.stand');

btn.addEventListener('click', ()=>{
    if(leftInput.value > rightInput.value){
        stand.classList.add('rotateLeft')
    }
    else if(rightInput.value > leftInput.value){
        stand.classList.add('rotateRight')
    }
})
