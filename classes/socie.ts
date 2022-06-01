export class Tutor {
    public nombre : string;
    public apellido : string;
    public vinculo : string;
    public telefono : string;
    public documento : string;
    public edad : string;

    public constructor(nombre:string, apellido:string, vinculo:string, telefono:string, documento: string, edad:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.vinculo = vinculo;
        this.telefono = telefono;
        this.documento = documento;
        this.edad = edad;        
    }
}

export class Domicilio {
    public direccion : string;
    public barrio : string;
    public localidad : string;

    public constructor(direccion:string, barrio:string, localidad:string){
        this.direccion = direccion;
        this.barrio = barrio;
        this.localidad = localidad;
    }
}

export class Socie {
    public nombre : string;
    public apellido : string;
    public fecha_de_nacimiento : string;
    public documento : string;
    public pronombre : string;
    public escuela : string;
    public carrera : string;
    public telefono : string;
    public redes : string;
    public email : string;

    public tutor? = Tutor;
    public domicilio? = Domicilio;

    public constructor(nombre:string, apellido:string, fechaDeNacimiento:string, documento:string, pronombre:string, escuela:string, carrera:string, telefono:string, redes:string, email:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fecha_de_nacimiento = fechaDeNacimiento;
        this.documento = documento;
        this.pronombre = pronombre;
        this.escuela = escuela;
        this.carrera = carrera;
        this.telefono = telefono;
        this.redes = redes;
        this.email = email;
    }
}
