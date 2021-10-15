// const btn = document.getElementById('submit')

//       const data = () =>{
//           let name = document.getElementById('fname').value;
//           let name1 = document.getElementById('lname').value;
//           alert (name)
//           alert (name1)
//       }
//       submit.addEventListener('click', data)

var list = document.getElementById('list');

function myFunction() {
    var item = document.getElementById('todo')

    // create li tag with java text node
    var li = document.createElement('li')
    var listText = document.createTextNode(item.value)
    li.appendChild(listText)
    list.appendChild(li)

        // create delete button
        var delBtn = document.createElement('button')
        var delText = document.createTextNode('delete')
        delBtn .appendChild(delBtn)
        delBtn.setAttribute("class", "text")
        delBtn.setAttribute("onclick", "deleteItem(this)")

            // create Edit Buttons
            var editBtn = document.createElement("button")
            var editText = document.createTextNode("Edit")
            editBtn.appendChild(editText)
            li.appendChild(editBtn)
            editBtn.setAttribute("class", "text")
            editBtn.setAttribute("onclick", "editItem(this)")



            item.value = ""
            console.log(li)
}
// for delete item

function deleteItem(e) {
    e.parentNode.remove()
}
// for delete All

function deleteAll() {
    list.innerHTML = ""
}

// for Edit

function editItem(ee) {
    var editvalue = prompt("enter edit value", ee.parentNode.firstChild.nodeValue)

    ee.parentNode.firstChild.nodeValue = editvalue
}