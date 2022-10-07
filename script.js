function newpage(){
    var i=document.querySelector("body");
  //  i.remove();
   // const newItem = document.createElement('li');
    i.innerHTML='<img class=" photo" src="2.png">'
  //  listItem.parentNode.replaceChild(newItem, i);
}
var arr=[];
var i=0;
var op=" ";



function press(value1){
    console.log("op is: ", op)
    if( op=="+" || op=="-" || op=="/" || op=="*") {
        document.getElementById("display").innerHTML = "  ";  
        
    }
    var displayDiv = document.getElementById("display");
    var displayDiv1 = document.getElementById("display").innerHTML;
     if(displayDiv1=="0" || displayDiv1==" " ){ 
        displayDiv.innerHTML =value1;
        arr[i]=value1;
        // console.log(arr[i]);
      }
    
   else {
        var temp;
        temp=displayDiv1*10 + value1;
        displayDiv.innerHTML=temp;
        arr[i]=temp;
        // console.log(arr[i]);
    }
}
function clr(){
    var displayDiv = document.getElementById("display");
    displayDiv.innerHTML = 0;
}
function setOP(value1){
    // console.log(value1)
    op=value1.innerHTML;
    // console.log(op)
     i++;
    // document.getElementById("display").innerHTML = "  ";   
}
function calculate(){
    var displayDiv = document.getElementById("display");
    if(op=='+')
    displayDiv.innerHTML = arr[0]+arr[1];
    if(op=='-')
    displayDiv.innerHTML = arr[0]-arr[1];
    if(op=='*')
    displayDiv.innerHTML = arr[0]*arr[1];
    if(op=='/')
    displayDiv.innerHTML = arr[0]/arr[1];}
    
