import { Empresa } from "./empresa";
import { Persona } from "./persona";

export interface Contacto{
    id: number;
    titulo : string;
    imagenUrl : string;
    persona : Persona;
    empresa : Empresa
}