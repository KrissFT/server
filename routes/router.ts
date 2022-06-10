import { Router, Request, Response } from "express";

export const router = Router();


router.get('/socies', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: "todo ok!"
    });
});

router.post('/registro', (req: Request, res: Response) => {
    const nombre = req.body.nombre?req.body.nombre:null;

    if(nombre===null){
        res.json({
            ok:false,
            mensaje: "Nombre no recibido"
        })
    } else {
        res.json({
            ok:true,
            mensaje: `Bienvenide ${nombre}!!!`
        })            
    }
    
    console.log(`Nombre: ${nombre}`)
});