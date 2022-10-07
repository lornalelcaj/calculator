function newpage(){
    var i=document.querySelector("body");
  //  i.remove();
   // const newItem = document.createElement('li');
    i.innerHTML='<img class=" photo" src="2.png">'
  //  listItem.parentNode.replaceChild(newItem, i);
}
var arr=[];
var i=0;
var displayDiv = document.getElementById("display");
var x;
var op;
var temp;
function press(value1){
   // if(displayDiv.value ==="0"){ 
    displayDiv.innerHTML =value1;
    arr[i]=value1;
    i++;
    x=document.getElementById("display").value;
    console.log(x);}
   /* else {
         temp=displayDiv*10 + value1;
        displayDiv.innerHTML=temp;
    }
}*/
function clr(){
    displayDiv.innerHTML = 0;
}
function setOP(value){
        op=value;
}
function calculate(){
    if(i<3)
    {
    if(op=='+')
    displayDiv.innerHTML = arr[0]+arr[1];
    if(op=='-')
    displayDiv.innerHTML = arr[0]-arr[1];
    if(op=='*')
    displayDiv.innerHTML = arr[0]*arr[1];
    if(op=='/')
    displayDiv.innerHTML = arr[0]/arr[1];}
    displayDiv.innerText = "Null";
    console.log(i);
}