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


var LikePepsi = prompt("Do you like Pepsi?","Yes or No");
if(LikePepsi == "Yes" || LikePepsi == "yes"){
        var LikePepsi = "yes";
    }
    else if(LikePepsi == "No" || LikePepsi == "no"){
        var LikePepsi = "no";
    }
    else{
        var LikePepsi = "Invalid"
    };

var LikeBurger = prompt("Do you like Burger?","Yes or No");
if(LikeBurger == "Yes" || LikeBurger == "yes"){
    var LikeBurger = "yes";
}
else if(LikeBurger == "No" || LikeBurger == "no"){
    var LikeBurger = "no";
}
else{
    var LikeBurger = "Invalid";
};

var LikeFries = prompt("Do you like Fries?","Yes or No");
if(LikeFries == "Yes" || LikeFries == "yes"){
    var LikeFries = "yes";
}
else if(LikeFries == "No" || LikeFries == "no"){
    var LikeFries = "no";
}
else{
    var LikeFries = "Invalid";
};


var LikesArr = [];
LikesArr.unshift(LikePepsi,LikeBurger,LikeFries);

function ShowLikesArr(){
    console.log(LikesArr.toString())
    alert(LikesArr)
}
ShowLikesArr();
