//interfaz estructura de proyecto
export interface Proyecto {
  id: number;
  titulo: string;
  descripcion: string;
  github: string;
  publico: boolean;
  imagen_principal: string;
  fecha_subida?: string;
  tecnologias: string[];
  imagenes?: string[];
}
