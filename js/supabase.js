// Configuración de Conexión a Supabase
// (Reemplaza los valores con los de tu panel de Supabase en Project Settings > API)
const SUPABASE_URL = 'https://gjjuhvtfqmnhioluluxk.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_cQvXVZKgcb8f1UbpWb1l5g_v3C1yo2T';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Lógica de inicio de sesión conectada a Supabase
document.getElementById('loginForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validación contra la tabla 'usuarios' en Supabase
    const { data, error } = await supabaseClient
        .from('usuarios')
        .select('*')
        .eq('email', email)
        .eq('password', password)
        .single();

    if (error || !data) {
        alert("Credenciales incorrectas o usuario no registrado en Supabase.");
    } else {
        alert("¡Bienvenido al sistema EducSex, " + data.nombre + "!");
        if (data.rol === 'admin') {
            window.location.href = "normativa.html";
        } else {
            window.location.href = "interactivo.html";
        }
    }
});