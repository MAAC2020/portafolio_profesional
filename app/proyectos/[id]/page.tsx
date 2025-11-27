import ProjectView from "../components/ProjectView";
import { proyectos } from "../data/proyectos.data";


const page = async ({ params }) => {

  const { id } = await params;

  //objeto del proyecto
  const proyecto = proyectos.find(el => el.id == Number(id));

  return <ProjectView proyecto={proyecto} />;

};

export default page;
