var El={
    one:document.getElementById("one"),
    two:document.getElementById("two"),
    three:document.getElementById("three")
}
var x=0
function slider(){
    if(x==0){
        
      El.three.style="-50%"
      El.two.style.display="flex";
       El.one.style.left="50%";
        return x=1;
    }
    else if(x==1){
      El.one.style.left="100%";
      El.two.style.opacity=1;
      El.two.style.left="3%";
      return x=2;
    }
    else if(x==2){
        El.one.style.left="150%";
     El.two.style.left="50%";
        return x=3;
    }
    else if(x==3){
      //    El.one.style.display="none";
      El.one.style.display="none";
        El.one.style.left="-50%";
      
        El.two.style.left="100%";
        El.three.style.display="flex";
        El.three.style.left="3%";
        return x=4;
    }
    else if(x==4){
        El.one.style.display="flex";
        El.two.style.left="150%";
        El.three.style.left="50%";
        
      //   El.three.style.left="100%";
        return x=5;
    }
    else if(x==5){
       
        El.two.style.left="-50%";
         El.two.style.display="none";
        // El.one.style.display="inline";
        
        El.three.style.left="100%";
         El.one.style.left="3%";
     //   El.three.style.opacity=0;
        return x=6;
    }
    else if(x==6){
        El.three.style.left="150%";
        El.one.style.left="50%";
        return x=7;
    }
    else if(x==7){
        El.three.style.display="none";
        return x=0;
    }
}
setInterval(slider,2000)