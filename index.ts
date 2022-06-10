import {Servidor} from "./classes/server";
import { router } from "./routes/router";
import cors from "cors";
import bodyParser from "body-parser";

let server = new Servidor();

server.app.use(bodyParser.urlencoded({
    extended:true
}));
server.app.use(bodyParser.json())
// Credenciales de seguridad
server.app.use(cors({origin:true, credentials:true}));

server.app.use('/', router)

server.start( () => {
    console.log("servidor corriendo en " + server.port);
    
});
