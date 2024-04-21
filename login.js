// Seleziona l'elemento dell'icona "toggle-password"
const togglePasswordIcon = document.querySelector('.toggle-password');

// Seleziona l'input della password
const passwordInput = document.getElementById('password');

// Funzione per gestire il click sull'icona "toggle-password"
function togglePasswordVisibility() {
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordIcon.src = './img/view.png'; 
    } else {
        passwordInput.type = 'password';
        togglePasswordIcon.src = './img/hidden.png'; 
    }
}

// Aggiungi l'event listener per il click sull'icona "toggle-password"
togglePasswordIcon.addEventListener('click', togglePasswordVisibility);


