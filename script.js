let intervalvalue;

function eventfun(){
  if(this.value==="00"){
    this.value="";
  }
}
function eventfun1(){
  if(this.value==""){
    this.value="00";
  }
}

     document.querySelectorAll('input[type="number"]').forEach(function(inp){   //inp parameter refere to the every input in the field
     inp.addEventListener('focus', eventfun);   //('eventname', userdefine function)
    inp.addEventListener('blur',eventfun1);
     
      });
    
  
 
   
  function mystart(){
    var hour=parseInt(document.getElementById("hrsinp").value);
    var minute=parseInt(document.getElementById("minsinp").value);
    var  second=parseInt(document.getElementById("secinp").value);

    intervalvalue=setInterval(function(){
      if(second>0){
        second--;
      }
      else{
        if(minute>0){
          minute--;
          second=59
        }else{
          if(hour>0){
            second=59;
            minute=59;
            hour--;
          }
          else{
            clearInterval(intervalvalue);
            alert("Time up");
            return
          }
        }
      }
       document.getElementById("hrsinp").value = hour;
        document.getElementById("minsinp").value = minute;
        document.getElementById("secinp").value =second;

        
      //  console.log("Hour: " + document.getElementById("hrsinp").value);
      //   console.log("Minute: " + document.getElementById("minsinp").value);
      //   console.log("Second: " + document.getElementById("secinp").value);
    },1000)   /*update very 100 millisecond i second    refer syntax of setinterval */
  


   }
 

function myreset(){
  clearInterval(intervalvalue);
    document.getElementById("hrsinp").value="00";
    document.getElementById("minsinp").value="00";
    document.getElementById("secinp").value="00";
  }



