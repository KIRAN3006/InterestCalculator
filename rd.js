function Calculate() {
  
    
    const amount = document.querySelector("#amount").value;
  
 
    const rate = document.querySelector("#rate").value;
  
   
    const months = document.querySelector("#months").value;
  
    const a = amount * (months*12);
    const b = a*(rate/100);

    const total = a + (months*b);
    document.querySelector("#total").innerHTML = "Maturity :" +total.toFixed(2)+"\nIntrest :"+(months*b);
   
    
      
}


/*
var intrest = 0;
    var maturity = 0;
    for (var i =1; i <= months; i++) {
        maturity = maturity + parseInt(amount);
        maturity += (maturity * rate) / (12 * 100);
         document.querySelector("#total").innerHTML = "Maturity :" + total.toFixed(2); 
    }
    */