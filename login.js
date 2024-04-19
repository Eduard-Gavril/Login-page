// Seleziona l'elemento dell'icona "toggle-password"
const togglePasswordIcon = document.querySelector('.toggle-password');

// Seleziona l'input della password
const passwordInput = document.getElementById('password');

// Funzione per gestire il click sull'icona "toggle-password"
function togglePasswordVisibility() {
    // Cambia il tipo di input della password
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        // Cambia l'icona per indicare che la password è visibile
        togglePasswordIcon.src = './img/view.png'; // Assicurati di avere un'icona appropriata per indicare la password nascosta
    } else {
        passwordInput.type = 'password';
        // Cambia l'icona per indicare che la password è nascosta
        togglePasswordIcon.src = './img/hidden.png'; // Assicurati di avere un'icona appropriata per indicare la password visibile
    }
}

// Aggiungi l'event listener per il click sull'icona "toggle-password"
togglePasswordIcon.addEventListener('click', togglePasswordVisibility);


