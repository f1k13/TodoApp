
var dark = false;
function themeDarkWhite() {
  if (dark === false) {
    dark = true;
    document.body.classList.add('dark')
    document.body.classList.remove('white')
  } else {
    dark = false;
    document.body.classList.add('white')
    document.body.classList.remove('dark')
  }
}


function addtask(){
  const title = document.getElementById('createTitle').value;
  const des = document.getElementById('createDescription').value;
  const time = document.getElementById('time').value;
   
  let $block = new DocumentFragment();

  const $div = document.createElement('div');
  const $blockTitle = document.createElement('span');
  const $blockDes = document.createElement('span');
  const $blockTime = document.createElement('span');
  const $blockDel = document.createElement('button');

  $div.classList.add('my-class');
  $blockDel.classList.add('del');
  $blockTime.innerHTML = `Время: ${time}`
  $blockTitle.innerHTML = `Название: ${title}`
  $blockDes.innerHTML = `Описание: ${des}`
  $blockDel.innerHTML = `Удалить`

  $div.appendChild($blockTime);
  $div.appendChild($blockTitle);
  $div.appendChild($blockDes);
  $div.appendChild($blockDel);
  $blockDel.addEventListener('click',() =>{
    $div.remove();
  }
  );
  
  $block.appendChild($div);
  document.querySelector('#newTask').append($block);

  
  
      
}














