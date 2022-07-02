 function clearDisplay()
		 {
	           document.getElementById("screen").value="";
	     }
         function btnclick(val)
          {
 
	          document.getElementById('screen').value=document.getElementById('screen').value+val;
           }
           function equals()
           {
           document.getElementById("screen").value=eval(document.getElementById("screen").value);
         }