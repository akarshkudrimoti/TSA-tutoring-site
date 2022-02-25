document.writeln("<script type='text/javascript' src='Teacher.js'></script>")
document.writeln("<script type='text/javascript' src='index.js'></script>")

function getUser(){
Input=localStorage.getItem("teacherUser")
document.getElementById("USERNAME_PROFILE").innerHTML= Input

}
window.onload=getUser()
