function Calculate() {
  
    
    const amount = document.querySelector("#amount").value;
  
    
    const rate = document.querySelector("#rate").value;
  
    
    const months = document.querySelector("#months").value;
  
    const intrest = (amount * (months) * rate) / 100;

    const total = parseInt(amount) + intrest;
    

   document.querySelector("#total").innerHTML = " Maturity (₹) :" + total.toFixed(2);
}
/*



   const a = rate / 100 / 12;
   const b = months * 12;

   const total = (amount * a) / (1 - Math.pow(1 + a, -b));

   document.querySelector("#total")
            .innerHTML = "Monthly amount : (₹)" + total.toFixed(2);

     */