const form = document.getElementById('employ-student');
const username = document.getElementById('name');
const companyName = document.getElementById('company');
const contactEmail = document.getElementById('email');
const contactPhone = document.getElementById('phone');
const typeOfStudent = document.getElementById('typeOfStudent');
const errorMessage = document.querySelector('error');



// INPUT FORM VALIDATION

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // get values from inputs
    const usernameValue = username.value.trim();
    const companyNameValue = companyName.value.trim();
    const contactEmailValue = contactEmail.value.trim();
    const contactPhoneValue = contactPhone.value.trim();
    const typeOfStudentValue = typeOfStudent.value.trim();

    if(usernameValue === '') {
        // show error
        // add error class
        setErrorFor(username, 'Име и презиме е задолжително!')
    } else {
        // add success class
        setSuccessFor(username);
    }

    if (companyNameValue === '') {
        // show error
        // add error class
        setErrorFor(companyName, 'Име на компанија е задолжително!')
    } else {
        // add success class
        setSuccessFor(companyName);
    }

    if (contactPhoneValue === '') {
        // show error
        // add error class
        setErrorFor(contactPhone, 'Телефонски број е задолжителен!')
    } else {
        // add success class
        setSuccessFor(contactPhone);
    }

    if(contactEmailValue === '') {
        setErrorFor(contactEmail, 'Email-от е задолжителен!');
    } else if(!isEmail(contactEmailValue)) {
        setErrorFor(email, 'Email-от не е валиден!')
    } else {
        setSuccessFor(email);
    }
}


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    
    // add error message
    small.innerText = message;
    // add error class
    formControl.classList = 'inner-input error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.classList = 'inner-input success'
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


// ADDING SELECT OPTIONS
fetch('students.json')
    .then(response => response.json())
    .then(data => {
        const selectElement = document.getElementById('typeOfStudent');
        data.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option.id;
            optionElement.text = option.name;
            selectElement.appendChild(optionElement);
        });
    })
    .catch(error => console.error(error));