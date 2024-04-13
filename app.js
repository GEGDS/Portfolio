import express from "express";
import path from 'path';
import { router } from './routes/routes.js'; 

const app = express();
const port = 3000; 

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(path.resolve('public')));
app.use('/', router);


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});