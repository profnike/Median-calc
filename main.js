let butn= document.getElementById("butn");
butn.addEventListener("click",median)

function median(){
    let arras= document.getElementById("arras").value
    let result=document.getElementById("result");
    let arrs=arras.split(",")
    let arr=arrs.sort();
    let len=arr.length
    if (len%2===0){
    
    let divi=len/2
    let diviA= +arr[divi]
    let diviB= +arr[divi-1]
    let addDiv= (diviA+ diviB)/2
    result.innerHTML=addDiv
    
    }
    else{
        let diviC=(len+1)/2
       sub=arr[diviC-1];
        result.innerHTML=sub
    }
   
    };
    function func(arras){
        
        arras.value="" ;
        let results=document.getElementById("result");
        results.innerHTML="";
    }