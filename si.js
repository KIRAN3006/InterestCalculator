function Calculate() {
  
   
    const amount = document.querySelector("#amount").value;
  

    const rate = document.querySelector("#rate").value;
  
    
    const months = document.querySelector("#months").value;
  
    
    const total = (amount*rate*months)/100;
  
    document.querySelector("#total")
            .innerHTML = "SI : (₹)" + total;
}
