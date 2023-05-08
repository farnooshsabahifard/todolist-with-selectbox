const inputElmt = document.getElementById("input-tag")
const ulElmnt = document.getElementById("ul-tag")
const filterToDo = document.querySelector(".select-box")

function toDo() {
    const liElmnt = document.createElement("li") 
    const pElment = document.createElement("p") 
    const doneElmnt = document.createElement("img")
    const trashElmnt = document.createElement("img")
    liElmnt.setAttribute("class" , "li-tag")
    pElment.setAttribute("class" , "p-tag")
    doneElmnt.setAttribute("src" , "./assets/check-mark-sign-svgrepo-com.svg")
    doneElmnt.setAttribute("class" , "check-mark")
    trashElmnt.setAttribute("src" , "./assets/trash.svg")
    trashElmnt.setAttribute("class" , "trash-mark")
 
if(inputElmt.value.length>80) {
    alert("it is too long")
}else {  if(inputElmt.value.length >3){
    pElment.innerHTML = inputElmt.value
    // saveLocalToDo(inputElmt.value)
    liElmnt.appendChild(pElment)
    liElmnt.appendChild(doneElmnt)
    liElmnt.appendChild(trashElmnt)
    ulElmnt.appendChild(liElmnt)
    inputElmt.value = ""
    trashElmnt.addEventListener("click" , delTask)
    function delTask() {
        liElmnt.remove()
    }
    doneElmnt.addEventListener("click" , doneTask)
    function doneTask() {
        pElment.classList.toggle("done-task")
    }


    filterToDo.addEventListener("mouseout" , filter )
    function filter(event) {
        const todos = ulElmnt.childNodes;
        console.log(event)
        console.log(todos)
        todos.forEach(function (e) {
            console.log(e)
            console.log(event.target.value)
            switch (event.target.value) {
                case "all":
                    liElmnt.style.display = "flex";
                    break;
                case "complete":
                    if (pElment.classList.contains("done-task")) {
                        liElmnt.style.display = "flex";
                    } else {
                        liElmnt.style.display = "none";
                    }
                    break;
                case "uncomplete":
                    if (pElment.classList.contains("done-task")) {
                        liElmnt.style.display = "none";
                    } else {
                        liElmnt.style.display = "flex";
                    }
                    break;
            }
        })
    }




}else{
    alert("type something")
}
}      
}
inputElmt.addEventListener("keypress" , add)
function add(e){
    if(e.which ==13) {
        toDo()
    }

}
// function saveLocalToDo(todo) {
// let todos
// if(localStorage.getItem("todos")===null){
//     todos=[]
// }else{
//     todos =JSON.parse(localStorage.getItem("todos"))
// }
// todos.push(todo)
// localStorage.setItem("todos" , JSON.stringify(todos))
// }   



