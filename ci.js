function Calculate() {
  
    
    const amount = document.querySelector("#amount").value;
  
   
    const rate = document.querySelector("#rate").value;
  
   
    const months = document.querySelector("#months").value;
 
  
    const totamount = amount * (Math.pow(1 + (rate / 100), months ));
    const total = totamount - amount;
  
    document.querySelector("#total")
            .innerHTML = "C I : (₹)" + total.toFixed(2);
}
