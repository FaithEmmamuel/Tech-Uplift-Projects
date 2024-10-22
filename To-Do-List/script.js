const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(inputBox.value === ''){
        alert('you must write something!'); // this mean if a msg isn't passed, it should alert immediately.
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span'); //to add the cross by the text which helps cancel.
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = ''; //this helps clear a msg off the typing bar after it has been added.
    saveData();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML); //this will save the data on the web browser so that 
    //whenever you refresh the page or come back you will still have your data saved.
    //after doing this here, you have to call the saveData everytime we have new changes.
}
// next we have to display this data anytime we open the web browser again.
//to do that let's create a function to execute that task.
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();