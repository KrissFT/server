import { Router, Request, Response } from "express";
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

router.post('/registro', (req: Request, res: Response) => {
    let nombre:string
    let apellido:string
    let fecha_de_nacimiento:string
    let pronombre:string
    let documento:string
    let nickname:string

    let direccion:string
    let barrio:string
    let localidad:string

    let telefono:string
    let redes:string
    let correo:string

    let escuela:string
    let carrera:string

    let nombreTutor:string
    let apellidoTutor:string
    let vinculo:string
    let telefonoTutor:string
    let documentoTutor:string
    let edadTutor:string

    nombre = req.body.nombre?req.body.nombre:null
    apellido = req.body.apellido?req.body.apellido:null
    fecha_de_nacimiento = req.body.fechaNac?req.body.fechaNac:null
    pronombre = req.body.pronoun?req.body.pronoun:null
    documento = req.body.dni?req.body.dni:null
    nickname = req.body.nick?req.body.nick:null

    direccion = req.body.direccion?req.body.direccion:null
    barrio = req.body.barrio?req.body.barrio:null
    localidad = req.body.localidad?req.body.localidad:null
    
    telefono = req.body.tel?req.body.tel:null
    redes = req.body.redes?req.body.redes:null
    correo = req.body.mail?req.body.mail:null

    escuela = req.body.esc?req.body.esc:null
    carrera = req.body.carrera?req.body.carrera:null

    nombreTutor = req.body.nombreTutor?req.body.nombreTutor:null
    apellidoTutor = req.body.apellidoTutor?req.body.apellidoTutor:null
    vinculo = req.body.vinculo?req.body.vinculo:null
    telefonoTutor = req.body.telTutor?req.body.telTutor:null
    documentoTutor = req.body.dniTutor?req.body.dniTutor:null
    edadTutor = req.body.edadTutor?req.body.edadTutor:null

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