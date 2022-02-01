'use strict';

var Name = prompt("Enter your name here");
var gender = prompt("Gender","male or female");
if(gender == "male" || gender == "Male"){
    var MrOrMs = "Mr";
}
else if(gender == "female" || gender == "Female"){
    MrOrMs = "Ms";
}
else{
    MrOrMs = ""
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
var LikesArr = [];
for(let i = 0;i<3;i++){
        if(i==0){
        var LikePepsi = prompt("Do you like Pepsi?","Yes or No");
        if(LikePepsi == "Yes" || LikePepsi == "yes"){
                LikePepsi = "yes";
            }
            else if(LikePepsi == "No" || LikePepsi == "no"){
                LikePepsi = "no";
            }
            else{
                LikePepsi = "Invalid"
            }
            LikesArr.push(LikePepsi)
    }else if(i==1){
        var LikeBurger = prompt("Do you like Burger?","Yes or No");
        if(LikeBurger == "Yes" || LikeBurger == "yes"){
            LikeBurger = "yes";
        }
        else if(LikeBurger == "No" || LikeBurger == "no"){
            LikeBurger = "no";
        }
        else{
            LikeBurger = "Invalid";
        }
        LikesArr.push(LikeBurger)
    }else{
        var LikeFries = prompt("Do you like Fries?","Yes or No");
        if(LikeFries == "Yes" || LikeFries == "yes"){
            LikeFries = "yes";
        }
        else if(LikeFries == "No" || LikeFries == "no"){
            LikeFries = "no";
        }
        else{
            LikeFries = "Invalid";
        }
        LikesArr.push(LikeFries)
    }
}

console.log(LikesArr)
// var LikesArr = [];

// LikesArr.push(LikePepsi,LikeBurger,LikeFries);

function ShowLikesArr(){
    console.log(LikesArr.toString())
    alert(LikesArr)
}
ShowLikesArr()
