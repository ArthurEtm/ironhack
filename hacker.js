var hacker1 = "joe";
var hacker2 = window.prompt("please input navigators name");
console.log("the drivers name is " + hacker1)

 if(hacker2.length>hacker1.length){
console.log(hacker2+ " has the longest name:"+ hacker2.length +" characters") 
};

  if(hacker2.length<hacker1.length){
console.log(hacker1+ " has the longest name:"+hacker1.length + " characters")
 }

if(hacker2.length==hacker1.length){
  console.log("woah you both have the same length name dude:" +hacker1.length + "characters")
}
console.log(
hacker2.split("").join(' '))
console.log(
hacker2.split("").reverse().join(''))




// Depending on which name is longer, print:
// The Driver has the longest name, it has XX characters or
// Yo, navigator got the longest name, it has XX characters or
// wow, you both got equally long names, XX characters!!
