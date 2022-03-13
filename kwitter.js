function addUser(){
    user_nameh=document.getElementById("input_name").value;
    localStorage.setItem("user_nameh", user_nameh);
    window.location="kwitter_room.html";
}