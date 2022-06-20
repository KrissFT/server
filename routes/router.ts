import { Router, Request, Response } from "express";

export const router = Router();


router.get('/socies', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: "todo ok!"
    });
});

router.post('/registro', (req: Request, res: Response) => {
    let nombre:string
    let apellido:string
    let fecha_de_nacimiento
    let pronombre:string
    let documento:string
    let nickname:string

    nombre = req.body.nombre?req.body.nombre:null
    apellido = req.body.apellido?req.body.apellido:null
    fecha_de_nacimiento = req.body.fechaNac?req.body.fechaNac:null
    pronombre = req.body.pronoun?req.body.pronoun:null
    documento = req.body.dni?req.body.dni:null
    nickname = req.body.nick?req.body.nick:null
    
    if (nombre !== null && apellido !== null && fecha_de_nacimiento !== null && pronombre !== null && documento !== null){
        console.log(`Nombre: ${nombre}`)
        console.log(`Apellido: ${apellido}`)
        console.log(`Fecha de nacimiento: ${fecha_de_nacimiento}`)
        console.log(`Pronombre preferido: ${pronombre}`)
        console.log(`DNI: ${documento}`)
    }else{
        console.log("Error: uno de los campos esenciales estaban vacíos")
    }
});