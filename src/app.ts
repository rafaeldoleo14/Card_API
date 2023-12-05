
import express from 'express';
import morgan from 'morgan';
import router from './routes/card.route';
import cors from 'cors';

// Express application
const app = express();

// Habilitar CORS para todas las rutas
app.use(cors());

// Middlewares
app.use(morgan("dev"));
app.use(express.json()); // to catch data

// Routes
app.use('/api/card', router)

// PORT config
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}...`);
})