import ProjectCard from "./ProjectCard";
import { Proyecto } from "../interfaces";
type Props = {
    proyectos:Proyecto[]
}

const ProjectList = ({proyectos}:Props) => {
    return (
        <div className='grid grid-cols-6 gap-3'>
            {proyectos.map((el, index) => (

                <ProjectCard project={el} key={el.id} />
            ))}

        </div>
    )
}

export default ProjectList