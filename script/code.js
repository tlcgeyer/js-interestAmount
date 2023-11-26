function calculateInterest() {
    // Get values from input fields
    let principal = parseFloat(document.getElementById('principal').value);
    let rate = parseFloat(document.getElementById('rate').value);
    let time = parseFloat(document.getElementById('time').value);

    // Check if values are valid
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }

    // Calculate interest amount
    let interestAmount = (principal * rate * time) / 100;

    // Display the result
    document.getElementById('result').innerHTML = 'Interest Amount: R' + interestAmount.toFixed(2);
}
