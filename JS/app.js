'use strict';

var Name = prompt("Enter your name here");
var gender = prompt("Gender","male or female");
if(gender == "male" || gender == "Male"){
    var MrOrMs = "Mr";
}
else if(gender == "female" || gender == "Female"){
    var MrOrMs = "Ms";
}
else{
    var MrOrMs = ""
};
//try var instead of let and see what happen
var age = prompt("Enter your age")
if (age <= 0){
    alert("Try again later");
}
else{
    var Continue = confirm("Continue?")
};
if(Continue == true){
    alert("Welcome to our World \n"+ MrOrMs +" "+ Name +" ("+age+ ")")
}
