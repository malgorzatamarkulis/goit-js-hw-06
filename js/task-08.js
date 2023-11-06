
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const emailInput = loginForm.elements.email;
        const passwordInput = loginForm.elements.password;

        if (!emailInput.value || !passwordInput.value) {
            alert('Wszystkie pola powinny zostać wypełnione.');
        } else {
            const formData = {
                email: emailInput.value,
                password: passwordInput.value,
            };

            console.log(formData);
            loginForm.reset();
        }
    });
});
