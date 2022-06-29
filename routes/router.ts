import { Router, Request, Response, request, response } from "express";
import { Socie } from "../models/socie.model";
export const router = Router();

let socies: Array<Socie> = [
    {
        nombre: 'Lukas',
        apellido: 'Santillán',
        nick: 'Kriss',
        edad: 20
    },
    {
        nombre: 'Irina',
        apellido: 'Davico',
        nick: 'Ir1n4',
        edad: 21
    },
    {
        nombre: 'John',
        apellido: 'Maza',
        nick: 'J0hny',
        edad: 20
    }
];

router.get('/socies', (req: Request, res: Response) => {
    res.json({
        ok: true,
        socies: socies
    });
});

router.get('/socie/:nick', (req: Request, res: Response) => {
    let ficha:Socie= {nombre: "", apellido: "", nick: "", edad:0 };

    socies.forEach(socie => {
        if (socie.nick === req.params.nick){
            ficha = socie;
        }
    });
    res.json({
        ok: true,
        socie: ficha
    });
});

router.post('/edit-socie/:nick', (req: Request, res: Response) =>{
    
    socies.forEach(socie => {
        if (socie.nick === req.params.nick){
            if (req.body.edad === String){
                socie.nick = req.body.nick;
                socie.apellido = req.body.apellido;
                socie.edad = parseInt(req.body.edad);
                socie.nombre = req.body.nombre;
            } else {
                socie.nick = req.body.nick;
                socie.apellido = req.body.apellido;
                socie.edad = req.body.edad;
                socie.nombre = req.body.nombre;
            }
        }
    });
    res.json({
        socies: socies
    })
});

router.post('/registro', (req: Request, res: Response) => {

    let nombre:string = req.body.nombre?req.body.nombre:null;
    let apellido:string = req.body.apellido?req.body.apellido:null;
    let fecha_de_nacimiento:string = req.body.fechaNac?req.body.fechaNac:null;
    let pronombre:string = req.body.pronoun?req.body.pronoun:null;
    let documento:string = req.body.dni?req.body.dni:null;
    let nickname:string = req.body.nick?req.body.nick:null;

    let direccion:string = req.body.direccion?req.body.direccion:null;
    let barrio:string = req.body.barrio?req.body.barrio:null;
    let localidad:string = req.body.localidad?req.body.localidad:null;

    let telefono:string = req.body.tel?req.body.tel:null;
    let redes:string = req.body.redes?req.body.redes:null;
    let correo:string = req.body.mail?req.body.mail:null;

    let escuela:string = req.body.esc?req.body.esc:null;
    let carrera:string = req.body.carrera?req.body.carrera:null;

    let nombreTutor:string = req.body.nombreTutor?req.body.nombreTutor:null;
    let apellidoTutor:string = req.body.apellidoTutor?req.body.apellidoTutor:null;
    let vinculo:string = req.body.vinculo?req.body.vinculo:null;
    let telefonoTutor:string = req.body.telTutor?req.body.telTutor:null;
    let documentoTutor:string = req.body.dniTutor?req.body.dniTutor:null;
    let edadTutor:string = req.body.edadTutor?req.body.edadTutor:null;

    pronombre = String(pronombre).replace(",", "")
    if (nombre !== null && apellido !== null){
        console.log(`Nombre: ${nombre}`)
        console.log(`Apellido: ${apellido}`)
        console.log(`Fecha de nacimiento: ${fecha_de_nacimiento}`)
        console.log(`Pronombre preferido: ${pronombre}`)
        console.log(`DNI: ${documento}`)
    }else{
        console.log("Error: uno de los campos esenciales estaban vacíos")
    }
});