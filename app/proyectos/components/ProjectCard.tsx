import Image from "next/image";
import { Proyecto } from "../interfaces";
import Link from "next/link";

type Props = {
    project:Proyecto
}

const ProjectCard = ({ project }:Props) => {

    // console.log(project)
    return (
        <div className="card bg-base-100 shadow-sm col-span-6 md:col-span-3 lg:col-span-2 w-full mb-4">
            <figure>
                <Image src={project.imagen_principal}
                    alt={project.titulo}
                    width={600}
                    height={400}
                    className="rounded-xl object-cover w-full h-full" />
                {/* <img
                  src={project.imagen_principal}
                  alt="Shoes" /> */}
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {project.titulo}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{project.descripcion}</p>
                <div className="card-actions justify-end">
                    {project.tecnologias.map((el, index) => <div className="badge badge-outline" key={index}>{el}</div>)}
                </div>
                <div className='flex justify-end'>
                    <Link  href={`/proyectos/${project.id}`} className='btn btn-outline btn-secondary rounded-2xl w-full mt-1'>Ver</Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard