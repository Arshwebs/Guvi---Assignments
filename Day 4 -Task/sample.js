var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v2/all ',true);
request.send();
request.onload = function(){
if(request.status == 200){
var data = JSON.parse(request.responseText);
//  console.log(data);
 for(let i =0 ; i < data.length; i++){
    console.log(data[i].name);
    console.log(data[i].region);
    console.log(data[i]["subregion"]);
    console.log(data[i].population);
    console.log(data[i].flags.png);
    console.log(data[i].flags.svg);
}
 }
}
//How to compare two JSON have the same properties without order?
var bob = {Gender:"male",age:21};
var bill = {Gender:"male",age:21};
if(JSON.stringify(bob) === JSON.stringify(bill) ){
console.log("we are equal");
}else{
	console.log("we are not equal");
}
