const express = require("express")
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();
const app = express();
// Middlewares de segurança
app.use(helmet());
app.use(cors({
origin: process.env.FRONTEND_URL || 'http://localhost:3000',
credentials: true
}));
// Rate limiting
const limiter = rateLimit({
windowMs: 15 * 60 * 1000, // 15 minutos
max: 100
});
app.use(limiter);
// Middlewares para parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
// Servir arquivos estáticos
app.use('/uploads', express.static('uploads'));
// Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI, {
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then(() => console.log('✅ Conectado ao MongoDB'))
.catch(err => console.error('❌ Erro ao conectar MongoDB:', err));
// Rota de teste
app.get('/api/health', (req, res) => {
res.json({
status: 'OK',
message: 'Servidor funcionando!',
timestamp: new Date().toISOString()
});
});
// Middleware de tratamento de erros
app.use((err, req, res, next) => {
console.error('Erro:', err);
res.status(500).json({
success: false,
message: 'Erro interno do servidor',
error: process.env.NODE_ENV === 'development' ? err.message : undefined
});
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log(`🚀 Servidor rodando na porta ${PORT}`);
console.log(`📊 Ambiente: ${process.env.NODE_ENV || 'development'}`);
});
module.exports = app;
