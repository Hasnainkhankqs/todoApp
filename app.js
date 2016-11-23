var listArray = []; // create an empty array
function addTodo(){
    var takeInput = document.getElementById("todoInput").value;
    if(takeInput === "" || takeInput === " " || takeInput === undefined){
        alert("Please write something");
    }
    else{
        listArray.push(takeInput);
        // alert(listArray);
    }
    if(listArray.length == 1){
        var listHeading = document.getElementById("todoHeading").innerHTML = "YOU ENTERED THE FOLLOWING LIST";
    }
    else if(listArray.length > 1 ){
    var listHeading = document.getElementById("todoHeading").innerHTML = "YOU ENTERED THE FOLLOWING LISTS";
    }
    var data = ""; 
    for(i = 0; i<listArray.length ; i++){
    data = data + "<li>"+listArray[i]+' <input type="button" value="button" onclick="remove();"/>'+"</li>";
    document.getElementById("todoList").innerHTML = data;
    // console.log(data)
    function remove(){
        listArray.splice(i,1);
        }


    document.getElementById("todoInput").value = "";
    }
}
function Remove(){
    document.getElementById("todoList").innerHTML = "";
    listArray = [];
    var listHeading = document.getElementById("todoHeading").innerHTML  ="All lists have been deleted!!"
}




