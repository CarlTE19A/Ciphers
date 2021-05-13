"use strict";

const LOCAL_STORAGE_KEY_ALPHABET = "ciphers.alphabet";

let alphabets = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_ALPHABET));
let alphabetList = document.getElementById("alphabets");

function saveNew()
{
    alphabets = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_ALPHABET));
    save(LOCAL_STORAGE_KEY_ALPHABET, alphabets);
    let newAlphabet = document.getElementById("alphabetInput");
    let newAlphabetName = document.getElementById("alphabetNameInput");
    if(newAlphabet.value.trim() === "" || newAlphabetName.value.trim() === "")
    {
        console.log("All fields need to be filled");
        alert("All fields need to be filled");  //Test
        
        return;
    }
    else
    {
        listAdd(newAlphabetName.value.trim(), newAlphabet.value.trim());
        alphabets.push([newAlphabetName.value.trim(), newAlphabet.value.trim()]);   //FUCK!

        newAlphabet.value = "";
        newAlphabetName.value = "";
    }
}

function save(key, list)
{
    localStorage.setItem(key, JSON.stringify(list));
    console.log(list);
}

function listAdd(name, inner) 
{
    var parent = document.getElementById('alphabets');
    var item = document.createElement('option');
    item.appendChild(document.createTextNode(name));
    item.value = inner;
    item.text = name;
    parent.appendChild(item);
}
// function todoList(items) {
//   let list = document.createElement("ul");
//   items.forEach((item) => {
//     let todoListItem = document.createElement("li");
//     todoListItem.innerText = item;
//     todoListItem.classList.add("todo-list-item");
//     todoListItem.addEventListener("click", removeItem);
//     list.append(todoListItem);
//   });
//   return list;
// }

// function removeItem(event) {
//   let itemToRemove = event.target.innerText;
//   todos = todos.filter((item) => item !== itemToRemove);
//   updateList();
// }

// function updateList() {
//   saveList();
//   listRoot.innerHTML = "";
//   listRoot.append(todoList(todos));
// }

// function saveList() {
//   localStorage.setItem(LOCAL_STORAGE_KEY_TODOS, JSON.stringify(todos));
// }

// updateList();


//  Plan
//1.    Add a Alphabet div in htmls needing it and index
//2.    List of all custom alphabets saved in localStorage
//3.    Make it possible to add new alphabets
//4.    Then others accses it