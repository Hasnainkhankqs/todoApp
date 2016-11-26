var listArray = []; // create an empty array
function addTodo() {
    var takeInput = document.getElementById("todoInput").value;
    if (takeInput === "" || takeInput === " " || takeInput === undefined) {
        alert("Please write something");
    }
    else {
        listArray.push(takeInput);
        // alert(listArray);
    }
    if (listArray.length == 1) {
        var listHeading = document.getElementById("todoHeading").innerHTML = "YOU ENTERED THE FOLLOWING LIST";
    }
    else if (listArray.length > 1) {
        var listHeading = document.getElementById("todoHeading").innerHTML = "YOU ENTERED THE FOLLOWING LISTS";
    }
    var data = "";
    for (i = 0; i < listArray.length; i++) {
        data = data + "<li id='" + i + "'>" + listArray[i] + ' <input type="button" value="button" onclick="removeoneItem(this.parentNode);"/>' + "</li>";
        document.getElementById("todoList").innerHTML = data;
        // console.log(data)
        document.getElementById("todoInput").value = "";
    }
}


function removeoneItem(val) {
    console.log(val);
    console.log(val.id);
    listArray.splice(val.id, 1);
    val.parentNode.removeChild(val);
}

function Remove() {
    document.getElementById("todoList").innerHTML = "";
    listArray = [];
    var listHeading = document.getElementById("todoHeading").innerHTML = "All lists have been deleted!!"
}




