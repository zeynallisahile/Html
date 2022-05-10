
let btn = document.getElementById('createBtn');

btn.onclick = function(){
    let input = document.getElementById('textInput');

    let newLi = document.createElement('li');
    newLi.innerText = input.value;
    newLi.className = 'list-group-item';


    let closeSpan = document.createElement('span');
    closeSpan.innerText = 'X';
    closeSpan.style.float = 'right';
    closeSpan.style.color = 'red';
    closeSpan.style.cursor = 'pointer';
    closeSpan.onclick = function(){
        newLi.remove();
    }


    newLi.appendChild(closeSpan);
    input.value = "";
    document.querySelector('ul').appendChild(newLi)
    console.log(newLi)
}