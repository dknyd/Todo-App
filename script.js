"use strict"
// CONSTANTS
const listElements = document.getElementsByTagName("li");
const list = document.querySelector('ul');
const toDoInput = document.querySelector('.toDoInput');
const itemsLeft = document.querySelector('.itemsLeft');


let lightTheme = false;





// INITIAL CHECKS FUNCTION
function checkStatus (){
    itemsLeft.innerHTML =`${list.childElementCount} items left`;
    for (let i = 0; i < listElements.length; i++){
        const imageClose = document.createElement("img");
        imageClose.src = "images/icon-cross.svg";
        listElements[i].appendChild(imageClose);
        imageClose.className = "close";
        imageClose.addEventListener('click', function() {
            deleteEntry.call(this);
          });
    
        if (listElements[i].className === "checked"){
            const imageCheck = document.createElement("img");
            imageCheck.src = "images/icon-check.svg";
            listElements[i].appendChild(imageCheck);
            imageCheck.style.position  = "absolute";
            imageCheck.style.right = "92%";
            imageCheck.style.width = "1rem";
            imageCheck.style.height = "1rem";
            imageCheck.style.border = "2px solid grey"
            imageCheck.style.borderRadius = "0.8rem";
            imageCheck.style.padding = "3px"
            imageCheck.style.backgroundImage = "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))";
        } else if (listElements[i].className !== "checked"){
            const imageEmpty = document.createElement("img");
            listElements[i].appendChild(imageEmpty);
            imageEmpty.style.border = "2px solid hsl(233, 14%, 35%)"
            imageEmpty.style.borderRadius = "0.8rem";
            imageEmpty.style.padding = "3px"
            imageEmpty.style.width = "1rem";
            imageEmpty.style.height = "1rem";
            imageEmpty.style.position  = "absolute";
            imageEmpty.style.right = "92%";
        }
    } 
}

// INITIAL CHECKS FUNCTION CALL
checkStatus();

// CLOSE BUTTON HIDE FUNCTION
function deleteEntry(){
    const toDelete = this.parentElement;
    toDelete.remove();
}

// ADD ITEMS FUNCTION
function newElement(){
    let listLenght = list.childElementCount;
    const task = document.querySelector(".toDoInput").value;
    if(!task){
        alert("Title field can not be empty!")
    } else if (lightTheme === false){
        const newTask = document.createElement("li");
        newTask.textContent = task;
		newTask.draggable = "true";
        
        listLenght ++;
        newTask.id = `li${listLenght}`
        list.appendChild(newTask)
        const imageClose = document.createElement("img");
        imageClose.src = "images/icon-cross.svg";
        newTask.appendChild(imageClose);
        imageClose.className = "close";
        imageClose.addEventListener('click', function() {
            deleteEntry.call(this);
          });

        const imageEmpty = document.createElement("img");
        newTask.appendChild(imageEmpty);
        imageEmpty.style.border = "2px solid hsl(233, 14%, 35%)"
        imageEmpty.style.borderRadius = "0.8rem";
        imageEmpty.style.padding = "3px"
        imageEmpty.style.width = "1rem";
        imageEmpty.style.height = "1rem";
        imageEmpty.style.position  = "absolute";
        imageEmpty.style.right = "92%";
     } else if (lightTheme === true){
        const newTask = document.createElement("li");
        newTask.textContent = task;
		newTask.draggable = "true";
        
        listLenght ++;
        newTask.id = `li${listLenght}`
        list.appendChild(newTask)
        const imageClose = document.createElement("img");
        imageClose.src = "images/icon-cross.svg";
        newTask.appendChild(imageClose);
        newTask.style.backgroundColor = "white";
        newTask.style.color = "rgb(72, 75, 106)";
        newTask.style.borderColor = "hsl(236, 33%, 92%)"
        imageClose.className = "close";
        imageClose.addEventListener('click', function() {
            deleteEntry.call(this);
          });

        const imageEmpty = document.createElement("img");
        newTask.appendChild(imageEmpty);
        imageEmpty.style.border = "2px solid hsl(233, 14%, 35%)"
        imageEmpty.style.borderRadius = "0.8rem";
        imageEmpty.style.padding = "3px"
        imageEmpty.style.width = "1rem";
        imageEmpty.style.height = "1rem";
        imageEmpty.style.position  = "absolute";
        imageEmpty.style.right = "92%";
     }

     
}



// CHECKED STATUS WHEN CLICKING ON LIST ITEM
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');

    

    if (ev.target.className === 'checked'){
        const imageCheck = document.createElement("img");
        imageCheck.src = "images/icon-check.svg";
        ev.target.style.color = "grey";
        ev.target.appendChild(imageCheck);
        imageCheck.style.position  = "absolute";
        imageCheck.style.right = "92%";
        imageCheck.style.width = "1rem";
        imageCheck.style.height = "1rem";
        imageCheck.style.border = "2px solid grey"
        imageCheck.style.borderRadius = "0.8rem";
        imageCheck.style.padding = "3px"
        imageCheck.style.backgroundImage = "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))";
        imageCheck.className = "imageCheck"
    } else {
        if (lightTheme === true){
            ev.target.style.color = "rgb(72, 75, 106)"
        } else{
            ev.target.style.color = "white"
        }
        
        const imageCheckRemove = ev.target.querySelector(".imageCheck");
        if (imageCheckRemove) {
            imageCheckRemove.remove();
        }
    }
  }
});


// CHANGE TEXT COLOR IN INPUT FIELD IF SOMETHING IS TYPED
toDoInput.addEventListener("input", function(){
    toDoInput.style.color = "hsl(235, 24%";
})

// COUNT NUMBER OF ITEMS
window.addEventListener("click", function(){
    itemsLeft.innerHTML =`${list.childElementCount} items left`;
})


// FILTERING ENTRIES
const buttonActive = document.querySelector(".buttonActive");
buttonActive.addEventListener("click", function(){
	for (let i = 0; i < listElements.length; i++) {
	   if (listElements[i].className === "checked"){
		   listElements[i].style.visibility = "hidden ";
		   listElements[i].style.position = "absolute";
	   } else {
		   listElements[i].style.visibility = "visible";
		   listElements[i].style.position = "";
	   }
	}
	
})

const buttonCompleted = document.querySelector(".buttonCompleted");
buttonCompleted.addEventListener("click", function(){
	for (let i = 0; i < listElements.length; i++) {
	   if (listElements[i].className !== "checked"){
		   listElements[i].style.visibility = "hidden ";
		   listElements[i].style.position = "absolute";
	   } else {
		   listElements[i].style.visibility = "visible";
		   listElements[i].style.position = "";
	   }
	}
	
})

const buttonAll = document.querySelector(".buttonAll");
buttonAll.addEventListener("click", function(){
	for (let i = 0; i < listElements.length; i++) {
		   listElements[i].style.visibility = "visible";
		   listElements[i].style.position = "";
		}
})


const buttonClear= document.querySelector(".buttonClear");
buttonClear.addEventListener("click", function(){
	for (let i = listElements.length -1 ; i >= 0 ; i--) {
		if(listElements[i].className === "checked")
		{
			listElements[i].remove();
			console.log(i);
		}
		}
})

// THEMES
const themeIcon = document.querySelector(".themeIcon");
const themeImage = document.querySelector(".themeImage");

const backgroundColor = document.querySelector(".backgroundColor");
const footer = document.querySelector("footer");





themeImage.addEventListener("click", function(){
    // light theme
    if (lightTheme === false){
        lightTheme = true;
        themeImage.src = "images/icon-moon.svg";
        backgroundColor.style.backgroundColor = "hsl(0, 0%, 98%)";
		toDoInput.style.backgroundColor = "white"
        for (let i = 0; i < listElements.length; i++){
            listElements[i].style.backgroundColor = "hsl(0, 0%, 98%)";
            listElements[i].style.color = "hsl(237, 14%, 26%)";
            listElements[i].style.borderColor = "hsl(236, 33%, 92%)";
            footer.style.borderColor = "hsl(236, 33%, 92%)";
            footer.style.backgroundColor = "hsl(0, 0%, 98%)";
            if (listElements[i].className === "checked"){
                listElements[i].style.color = "hsl(235, 19%, 35%)";
            } else{
                listElements[i].style.color = "rgb(72, 75, 106)";
            }
            
        }
        


    // dark theme
    } else {
        themeImage.src = "images/icon-sun.svg";
        lightTheme = false;
        backgroundColor.style.backgroundColor = "hsl(235, 21%, 11%)";
		toDoInput.style.backgroundColor = "hsl(235, 24%, 19%"
        for (let i = 0; i < listElements.length; i++){
            listElements[i].style.backgroundColor = "hsl(235, 24%, 19%)";
            listElements[i].style.borderColor = "hsl(237, 14%, 26%)";
            footer.style.borderColor = "hsl(237, 14%, 26%)";
            footer.style.backgroundColor = "hsl(235, 24%, 19%)";
            // checked li elements 
            if (listElements[i].className === "checked"){
                listElements[i].style.color = "hsl(235, 19%, 35%)";
            } else{
                listElements[i].style.color = "white";
            }
            
        }
    }
})



// DRAG N DROP

// dragstart
list.addEventListener('dragstart', dragStart);

function dragStart(e){
    e.dataTransfer.setData("text/plain", e.target.id);
    setTimeout(() => {
        e.target.classList.add('hidden');
    }, 0);
}

list.addEventListener("dragenter", dragEnter);
list.addEventListener("dragover", dragOver);
list.addEventListener("dragleave", dragLeave);
list.addEventListener("drop", drop);


function dragEnter(e){
    e.preventDefault();
    e.target.classList.add("dragOver");
}
function dragOver(e){
    e.preventDefault();
    e.target.classList.add("dragOver");
}
function dragLeave(e){
    e.target.classList.remove("dragOver");
}

function drop(e){
    e.preventDefault();
    e.target.classList.remove("dragOver");
    const id = e.dataTransfer.getData("text/plain");
    const draggable = document.getElementById(id);
    if(draggable){
        list.insertBefore(draggable, e.target);
        draggable.classList.remove("hidden");
    }
}











