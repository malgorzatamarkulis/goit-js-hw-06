document.addEventListener('DOMContentLoaded', function () {
    const inputElement = document.getElementById('validation-input') as HTMLInputElement | null;

    if (inputElement) {
        inputElement.addEventListener('blur', () => {
            const inputValue = inputElement.value;
            const dataLengthAttribute = inputElement.getAttribute('data-length');

            if (dataLengthAttribute !== null) {
                const expectedLength = parseInt(dataLengthAttribute, 10);

                if (inputValue.length === expectedLength) {
                    inputElement.classList.remove('invalid');
                    inputElement.classList.add('valid');
                } else {
                    inputElement.classList.remove('valid');
                    inputElement.classList.add('invalid');
                }
            }
        });
    }
});
