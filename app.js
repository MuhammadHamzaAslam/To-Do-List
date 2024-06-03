// let userInput = document.getElementById("text")
// let button = document.getElementById("btn")
// let ul = document.getElementById("ul")

// button.addEventListener("click",()=>{
//     // creating li element
//     let li = document.createElement("li")
//     let liText = document.createTextNode(userInput.value)

//     // adding img
//     let img = document.createElement("img")

//     // adding img
//     img.src="img/circle.png"

//     // creating button
//     let deleteButton = document.createElement("button")

//     // setting attribute of button
//     deleteButton.setAttribute("class","abc")

//     // add button text
//     let deleteIcon = document.createTextNode(`x`)
//     deleteButton.appendChild(deleteIcon)

//     // creating new button of edit
//     let editButton = document.createElement("button")

//     // setting attribute of edit button
//     editButton.setAttribute("class","xyz")

//     // adding text on edit button
//     let editButtonText = document.createTextNode("🖋")

//     // combining with edit button
//     editButton.appendChild(editButtonText)
    
//     li.appendChild(img)
//     li.appendChild(liText)
//     li.appendChild(editButton)
//     li.appendChild(deleteButton)

//     // remove li on click
//     deleteButton.addEventListener("click",()=>{
//         li.remove()
//     })
//     editButton.addEventListener("click", (event) => {
//         // let userText = prompt("Enter a Text");
//         // let newText = document.createTextNode(userText);
//         // editButton.parentElement.replaceChild(newText, editButton.parentElement.childNodes[1]);
//     });

//     li.addEventListener("click", () => {
//         if (img.getAttribute("src") == "img/circle.png") {
//             img.setAttribute("src", "img/tick.jpg");
//             li.style.textDecoration = "line-through";
//         } else {
//             img.setAttribute("src", "img/circle.png");
//             li.style.textDecoration = "none";
//         }
//     });

//     ul.appendChild(li)
//     userInput.value = ""
// })




let userInput = document.getElementById("text");
let button = document.getElementById("btn");
let ul = document.getElementById("ul");

button.addEventListener("click", () => {
    addTask();
});

userInput.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        addTask();
    }
});

function addTask() {
    // creating li element
    let li = document.createElement("li");
    let liText = document.createTextNode(userInput.value);

    // adding img
    let img = document.createElement("img");
    img.src = "img/circle.png";

    // creating button
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "abc");
    let deleteIcon = document.createTextNode(`x`);
    deleteButton.appendChild(deleteIcon);

    // creating edit button
    let editButton = document.createElement("button");
    editButton.setAttribute("class", "xyz");
    let editButtonText = document.createTextNode("🖋");
    editButton.appendChild(editButtonText);

    li.appendChild(img);
    li.appendChild(liText);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
        li.remove();
    });

    editButton.addEventListener("click", (event) => {
        let userText = prompt("Enter a Text");
        let newText = document.createTextNode(userText);
        editButton.parentElement.replaceChild(newText, editButton.parentElement.childNodes[1]);
    });

    li.addEventListener("click", () => {
        if (img.getAttribute("src") == "img/circle.png") {
            img.setAttribute("src", "img/tick.jpg");
            li.style.textDecoration = "line-through";
        } else {
            img.setAttribute("src", "img/circle.png");
            li.style.textDecoration = "none";
        }
    });

    ul.appendChild(li);
    userInput.value = "";
}
