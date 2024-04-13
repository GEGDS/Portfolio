import express from 'express';
const router = express.Router();


router.get("/", (req, res) => {
    const projects = [
        {
            title: 'Simon Game',
            image:'/Images/Simon Game.png',
            alt:'portfolio carousel',
            description: 'Jogo de gravar a sequencia de cores',
        }, 

        {
            title: 'IMC Calculator',
            image:'/Images/IMC Calculator.png',
            alt:'portfolio carousel',
            description: 'calculadora de indice de massa corporal'
        }
         
    ];

    res.render('home', {projects});
});


export { router };