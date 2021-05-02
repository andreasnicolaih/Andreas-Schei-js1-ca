const contactForm = document.querySelector("#contact.form");

const usersName = document.querySelector("#users.name");
const usersNameInvalid = document.querySelector("#users.name.invalid");

const usersSubject = document.querySelector("#users.subject");
const usersSubjectInvalid = document.querySelector("#users.subject.invalid");

const usersEmail = document.querySelector("#users.email");
const usersEmailInvalid = document.querySelector("#users.email.invalid");

const usersMessage = document.querySelector("#users-message");


function contactFormValidate(event) {
    event.preventDefault();
    
    if (correctLengt(usersName.value, 0)) {
        usersNameInvalid.style.display = "none";
    
    } else {
        usersNameInvalid.style.display = "block";
    }

    if (correctLengt(usersSubject.value, 17)) {
        usersSubjectInvalid.style.display = "none";
    
    } else {
        usersSubjectInvalid.style.display = "block";
    }
    
    if (correctEmail(usersEmail.value)) {
        usersEmailInvalid.style.display = "none";
    } else {
        usersEmailInvalid.style.display = "block";
    }

    if (correctLengt(usersName.value, 0) && lengthCheck(usersSubject.value, 17) && correctEmail(usersEmail.value)) {
        usersMessage.innerHTML = '<div class="valid">Everything has been filled and the form is validated.</div>';
        form.reset();
    } else {
        usersMessage.innerHTML = '<div class="notvalid">All fields in the form has to be filled in. Try again.</div>';
    }


contactForm.addEventListener("submit", formValidated);

function correctLengt(value, len) {
    if(value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function correctEmail(usersEmail) {
    const regEx = /\S+@\S+\.\S+/;
    const meetsExpectations = regEx.test(usersEmail);
    return meetsExpectations
    }
}