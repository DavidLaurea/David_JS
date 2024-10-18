// Exercise 1
function validateForm(event) {
    event.preventDefault();
    
    let email = document.getElementById('email').value;
    let comment = document.getElementById('comment').value;
    let emailError = document.getElementById('email-error');
    let commentError = document.getElementById('comment-error');
    let valid = true;

    emailError.innerHTML = "";
    commentError.innerHTML = "";

    if (email.length < 6 || email.length > 15 || !email.includes('@')) {
        emailError.innerHTML = "Email must be between 6-15 characters and contain '@'.";
        valid = false;
    }
    
    if (comment.length === 0) {
        commentError.innerHTML = "Comment cannot be empty.";
        valid = false;
    } else if (comment.length > 50) {
        comment = comment.substring(0, 50);
    }

    if (valid) {
        alert(`Email: ${email}\nComment: ${comment}`);
        return true;
    }

    return false;
}

// Exercise 2
document.getElementById('membershipForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let type = document.getElementById('type').value;
    let years = parseInt(document.getElementById('years').value);
    let costElement = document.getElementById('cost');
    let discountMessage = document.getElementById('discountMessage');

    let costPerYear;
    if (type === 'basic') costPerYear = 10;
    else if (type === 'premium') costPerYear = 15;
    else if (type === 'gold') costPerYear = 20;
    else if (type === 'platinum') costPerYear = 25;

    let totalCost = costPerYear * years;
    let discount = 0;

    if (years > 2) {
        discount = totalCost * 0.20;
        discountMessage.textContent = "You get a 20% discount!";
    }

    if (years >= 5) {
        discountMessage.textContent += " And an extra $5 discount!";
        totalCost -= 5;
    }

    totalCost -= discount;
    costElement.value = `$${totalCost.toFixed(2)}`;
});

// Exercise 3
document.getElementById('submit-calculate').addEventListener('click', function() {
    let quantity = parseInt(document.getElementById('quantity').value);
    let price = parseFloat(document.getElementById('price').value);
    let tax = parseFloat(document.getElementById('tax').value);
    let discount = parseFloat(document.getElementById('discount').value);
    let shipping = parseFloat(document.getElementById('shipping').value);
    
    if (quantity > 100) {
        discount *= 2;
    }

    let subtotal = (quantity * price);
    let taxAmount = subtotal * (tax / 100);
    let total = subtotal + taxAmount - discount + shipping;
    
    document.getElementById('total').value = total.toFixed(2);
});

// Exercise 4
function showDetailsField() {
    const method = document.getElementById('contact-method').value;
    const detailField = document.getElementById('contact-detail-field');
    
    if (method) {
        detailField.style.display = 'block';
    } else {
        detailField.style.display = 'none';
    }
}
