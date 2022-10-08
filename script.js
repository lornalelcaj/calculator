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
var k;
var l;
function press(value1){
    if( k==1) {
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
        temp=displayDiv1+ value1;//nqs hiqet *10 prishet mbledhja
        displayDiv.innerHTML=temp;
        arr[i]=parseInt(temp);
        // console.log(arr[i]);
    }
}
function clr(){
    var displayDiv = document.getElementById("display");
    displayDiv.innerHTML = 0;
    k=0;
    i=0;
    l=0;
}
function setOP(value1){
    // console.log(value1)
    op=value1.innerHTML;
    console.log(op)
     i++;
      k=1;
}
function calculate(){
    var displayDiv = document.getElementById("display");
    if(l==1)
    displayDiv.innerHTML = "NaN";
    else{
    var a=i--;
    if(op=='+')
    displayDiv.innerHTML = arr[a]+arr[i];
    if(op=='*')
        displayDiv.innerHTML=arr[a] * arr[i]; 
    if(op=='-')
    displayDiv.innerHTML = arr[i]-arr[a];
    if(op=='/')
    displayDiv.innerHTML = arr[i]/arr[a];
    i++;
    arr[i]=parseInt(document.getElementById("display").innerHTML) ;
    console.log(arr[i])
    
}
}
function float(el){
    var displayDiv = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML=displayDiv+el.innerHTML;
    l=1;
}
