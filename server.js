const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal - Verificación de email
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para reseteo de contraseña
app.get('/reset-password', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'reset-password.html'));
});

// Health check para Render
app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'ok',
        service: 'PetAdopt Web',
        timestamp: new Date().toISOString()
    });
});

// Iniciar servidor
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 PetAdopt Web Server running on port ${PORT}`);
    console.log(`📧 Email Verification: http://localhost:${PORT}`);
    console.log(`🔐 Password Reset: http://localhost:${PORT}/reset-password`);
});