// Display messages
function showAlert(message,isError) {
    if (isError) {
        alertBox = document.getElementById('messageError');
        alertBoxClear = document.getElementById('messageOk')
    } else {
        alertBox = document.getElementById('messageOk');
        alertBoxClear = document.getElementById('messageError');
    };
    alertBox.innerText = message;
    alertBoxClear.innerText = '';
};

// Clear input form fields
function clearForm(form) {
    if (form) {
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.value = '';
            });
    }
    // Clear span text values
    const spans = form.querySelectorAll('span');
    spans.forEach(span => {
        span.textContent = ''; 
    });
};

// get form data submitted and 
document.addEventListener('DOMContentLoaded', () => {
    // Focus on the first input field once loaded
    const firstField = document.getElementById('pizzaName');
    firstField.focus(); 

    // Add event listener for Add Pizza Form submission 
    const pizzaForm = document.getElementById('addPizzaForm');
    if (pizzaForm) {
        pizzaForm.addEventListener('submit', async (event) => {
            event.preventDefault(); // Prevent default form submission

            const pizzaData = {
                pizzaName: firstField.value,
                ingredient1: document.getElementById('ingredient1').value,
                ingredient2: document.getElementById('ingredient2').value,
                ingredient3: document.getElementById('ingredient3').value,
                price: document.getElementById('price').value,
                pizzaNameText: firstField.value.toLowerCase()
            };

            try {
                const response = await fetch('/api/pizza', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(pizzaData),
                });
                const responseText = await response.text();
                
                console.log('Response from API:' + responseText);

                // Clear the form if post is successful
                if (response.ok) {
                    showAlert(responseText,false);
                    clearForm(pizzaForm);
                } else {
                    showAlert(responseText,true);
                }

            } catch (error) {
                console.error('Fetch error:', error);
                showAlert('Network error: ' + error.message, true);
            } 
        });
    }
});
