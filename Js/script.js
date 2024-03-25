document.getElementById("B1").onclick = function(){
    let massege = "Hllo";
    let name = "Ali";
    let banger = "!";
    console.log(massege + name + banger);
    document.getElementById("otpt").innerHTML = massege+" "+name+" "+banger
}
document.getElementById("B2").onclick = function(){
    let name = prompt("Enter your name");
    console.log('name',name);
document.getElementById("otpt").innerHTML = name
}
document.getElementById("B3").onclick = function() {
    let num1 = +prompt("Enter 1st num");
    let num2 = +prompt("Enter 2nd num");
    if ( num1 == num2 ){  
        document.getElementById("org").innerHTML = num1+ " = " + num2
        document.getElementById("otpt").innerHTML = "Both nums are Equal"
    }
    else if( num1 !== num2 ){
        document.getElementById("org").innerHTML = num1+ " != " + num2
        document.getElementById("otpt").innerHTML = "Both nums are not Equal"
    }
}
document.getElementById("B4").onclick = function(){
    let num1 = +prompt("Enter 1st num");
    let num2 = +prompt("Enter 2nd num");
    if( num1 > num2 ){
       document.getElementById("org").innerHTML = num1+ " > " + num2
       document.getElementById("otpt").innerHTML = "num1 greater than num2"
    }
    else if( num1 < num2 ){
       document.getElementById("org").innerHTML = num1+ " < " + num2
       document.getElementById("otpt").innerHTML = "num1 less than num2"
    }
}
document.getElementById("B5").onclick = function(){
    let age = +prompt("Enter your age")
    let weight = +prompt("Enter your weight")
    document.getElementById("org").innerHTML =  "You enter age="+age+" and weight="+weight
    if(age >= 18 && weight < 70)
    {
        document.getElementById("otpt").innerHTML =  "You are Smart"
    }
    else if(age >= 18 && weight > 70)
    {
        document.getElementById("otpt").innerHTML =  "You are fatty"
    }
    else if(age < 18)
    {
        document.getElementById("otpt").innerHTML = "You are Teenager" 
    }
    
}
document.getElementById("B6").onclick = function(){

}
document.getElementById("B7").onclick = function(){
    let username = prompt("Enter Username");
    let password = prompt("Enter Password");
}
document.getElementById("B8").onclick = function(){
    document.getElementById("org").innerHTML = "You enter following" 
    document.getElementById("otpt").innerHTML = "Username = " + username + "<br>Password = " + password
    
}
document.getElementById("btn-org").onclick = function(){
    document.getElementById("org").innerHTML = ""
}
document.getElementById("btn-otpt").onclick = function(){
    document.getElementById("otpt").innerHTML = ""
}