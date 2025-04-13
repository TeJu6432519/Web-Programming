function calculateTotal() {
    const adultTickets = parseInt(document.getElementById("adults").value) || 0;
    const childTickets = parseInt(document.getElementById("children").value) || 0;
    const adultTicketPrice = 10; 
    const childTicketPrice = 5; 
    const totalAmount = (adultTickets * adultTicketPrice) + (childTickets * childTicketPrice);
    document.getElementById("totalAmount").value = "Rs." + totalAmount;
}
