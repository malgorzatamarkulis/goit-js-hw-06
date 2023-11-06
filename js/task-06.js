const input = document.getElementById("validation-input"); input.addEventListener("blur", () => {
    const value = input.value;
    const dataLength = parseInt(input.getAttribute("data-length"));
    if (value.length === dataLength) { input.classList.remove("invalid"); input.classList.add("valid"); }
    else { input.classList.remove("valid"); input.classList.add("invalid"); }
});