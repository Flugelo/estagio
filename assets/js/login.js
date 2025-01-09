window.onload = (on) => {
    document.getElementById('form-login').addEventListener('submit', function (event) {
        event.preventDefault();

        const emailInput = document.getElementById('input-email');
        const passwordInput = document.getElementById('input-password');
        if (emailInput.value.trim() === '') {
            emailInput.classList.add("error");
        }
    
        if (passwordInput.value.trim() === ''){
            passwordInput.classList.add("error");
            return;
        }

        if(emailInput.value !== "admin" || passwordInput.value !== "admin"){
            alert("Usuário ou senha incorretos.")
            return;
        }

        window.location.href = "src/pages/dashboard.html"
        
    });
};

