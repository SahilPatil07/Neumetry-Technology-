document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (checkInputs()) {
        document.getElementById('thankYouMessage').classList.remove('d-none');
        document.getElementById('registrationForm').reset();
        removeValidationClasses();
    }
});

function checkInputs() {
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const mobileNumber = document.getElementById('mobileNumber');
    const birthdate = document.getElementById('birthdate');
    const collegeName = document.getElementById('collegeName');
    const education = document.getElementById('education');
    const graduationYear = document.getElementById('graduationYear');
    const graduationPercentage = document.getElementById('graduationPercentage');

    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const mobileNumberValue = mobileNumber.value.trim();
    const birthdateValue = birthdate.value.trim();
    const collegeNameValue = collegeName.value.trim();
    const educationValue = education.value.trim();
    const graduationYearValue = graduationYear.value.trim();
    const graduationPercentageValue = graduationPercentage.value.trim();

    let isValid = true;

    const namePattern = /^[a-zA-Z\s]+$/;
    if (!namePattern.test(fullNameValue)) {
        setErrorFor(fullName, 'Full Name can only contain letters and spaces');
        isValid = false;
    } else {
        setSuccessFor(fullName);
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
        setErrorFor(email, 'Email must be a valid email address');
        isValid = false;
    } else {
        setSuccessFor(email);
    }

    const mobileNumberPattern = /^\d{10}$/;
    if (!mobileNumberPattern.test(mobileNumberValue)) {
        setErrorFor(mobileNumber, 'Mobile Number must be a valid 10-digit number');
        isValid = false;
    } else {
        setSuccessFor(mobileNumber);
    }

    if (birthdateValue === '' || !isValidDate(birthdateValue)) {
        setErrorFor(birthdate, 'Birthdate cannot be blank and must be a valid date');
        isValid = false;
    } else {
        setSuccessFor(birthdate);
    }

    if (collegeNameValue === '') {
        setErrorFor(collegeName, 'College Name cannot be blank');
        isValid = false;
    } else {
        setSuccessFor(collegeName);
    }

    if (educationValue === '') {
        setErrorFor(education, 'Education cannot be blank');
        isValid = false;
    } else {
        setSuccessFor(education);
    }

    const yearPattern = /^\d{4}$/;
    if (!yearPattern.test(graduationYearValue)) {
        setErrorFor(graduationYear, 'Graduation Year must be a valid year');
        isValid = false;
    } else {
        setSuccessFor(graduationYear);
    }

    if (graduationPercentageValue === '' || isNaN(graduationPercentageValue) || graduationPercentageValue < 0 || graduationPercentageValue > 100) {
        setErrorFor(graduationPercentage, 'Graduation Percentage must be between 0 and 100');
        isValid = false;
    } else {
        setSuccessFor(graduationPercentage);
    }

    return isValid;
}

function isValidDate(dateString) {
