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
        temp=displayDiv1*10 + value1;
        displayDiv.innerHTML=temp;
        arr[i]=temp;
        // console.log(arr[i]);
    }
}
function clr(){
    var displayDiv = document.getElementById("display");
    displayDiv.innerHTML = 0;
    k=0;
    i=0;
}
function setOP(value1){
    // console.log(value1)
    op=value1.innerHTML;
    console.log(op)
     i++;
      k=1;
    // document.getElementById("display").innerHTML = "  ";   
}
function calculate(){
    var displayDiv = document.getElementById("display");
    var a=i--;
    if(op=='+')
    displayDiv.innerHTML = arr[a]+arr[i];
    if(op=='*'){
        // console.log(arr[0])
        displayDiv.innerHTML=arr[a]*arr[i]; }
    if(op=='-')
    displayDiv.innerHTML = arr[a]-arr[i];
    if(op=='/')
    displayDiv.innerHTML = arr[a]/arr[i];
    i++;
    arr[i]=parseInt(document.getElementById("display").innerHTML) ;
    console.log(arr[i])

}
    
