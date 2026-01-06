const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Página principal (opcional)
app.get('/', (req, res) => {
  res.send('PetAdopt Web OK');
});

// Reset de contraseña
app.get('/reset-password', (req, res) => {
  res.sendFile(
    path.join(__dirname, 'public', 'reset-password.html')
  );
});

// Health (Render)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on ${PORT}`);
});
