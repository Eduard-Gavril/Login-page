// Configura il client Supabase
const supabaseUrl = 'https://uuusektiafxceukkpxdc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1dXNla3RpYWZ4Y2V1a2tweGRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM2OTA1MDcsImV4cCI6MjAyOTI2NjUwN30.sWc1CVbnIUNaqzD8lFaORs-7LhZlYSqj5_CenrXraUI';
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

// Gestisci l'evento di login
document.getElementById('loginButton').addEventListener('click', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    //verifica le credenziali
    const { data, error } = await supabaseClient.from('authorized').select().eq('email', email).eq('password', password);
    
    if (error) {
        console.error(error.message);
        return;
    }

    if (data.length > 0) {
        console.log('Login successful');
        window.location.href = './TEST/TEST.HTML'; // Reindirizza alla pagina successiva
    } else {
        console.error('Invalid credentials');
        window.location.href = 'fallito.html'; // Reindirizza alla pagina successiva
    }
});