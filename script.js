const addCustomer = async (customerData) => {
    const response = await fetch('/api/customers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(customerData),
    });
    return response.json();
  };
  
  document.getElementById('customer-form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const customerData = {
      name: document.getElementById('customer-name').value,
      id: document.getElementById('customer-id').value,
      phone: document.getElementById('customer-phone').value,
      origin: document.getElementById('customer-origin').value,
      roomType: document.getElementById('room-type').value,
      checkIn: document.getElementById('check-in').value,
      checkOut: document.getElementById('check-out').value,
      amountPaid: document.getElementById('amount-paid').value,
    };
  
    const result = await addCustomer(customerData);
    alert(result.message);
    loadCustomerList(); // Reload the customer list after addition
  });
  