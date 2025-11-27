import ProjectList from "./components/ProjectList"
//importacion de la data
import { proyectos } from "./data/proyectos.data"

const page = () => {
  return (
    <>
      <div className='container sm:mx-auto py-2 px-4 lg:px-80'>

        <div className='flex justify-start mb-2'>
          <h1 className='text-4xl font-bold'>Proyectos</h1>
        </div>
        {/* Lista de proyectos */}
        <ProjectList proyectos={proyectos} />
      </div>

    </>
  )
}

export default page
