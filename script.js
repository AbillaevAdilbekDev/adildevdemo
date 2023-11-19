const modall=document.querySelector('.modal');
const closse=document.querySelector('.close');
const openn=document.querySelector('.open');
function funn(){
    modall.style="display:block";
    openn.style="display:none";
}
function funnn(){
    modall.style="display:none";
    openn.style="display:block";
}
openn.addEventListener('click',funn)
closse.addEventListener('click',funnn)