
import Pacientes from "./Pacientes"


const ListadoPacientes = ( {pacientes, setPaciente , eliminarPaciente} )=>{
  

  return(
    <div className="md:w-1/2 lg:w-2/5 bg-inherit mx-5  bg-white shadow-md">
      {pacientes && pacientes.length ? (
        <>
              <h2 className="font-black text-3xl text-center">Lista Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">Administra tus {''} 
      <span className="text-indigo-600 font-bold "> Pacientes y Citas
        </span>
        </p>
        {pacientes.map( paciente => 
        <Pacientes 
        key= {paciente.id} 
        paciente = { paciente } 
        setPaciente = {setPaciente}
        eliminarPaciente = {eliminarPaciente}
        />
        )
        }

        </>
        
      ) 
      : (
        <>
        <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">Comienza agregando pacientes {''} 
      <span className="text-indigo-600 font-bold "> y apareceran en este lugar
        </span>
        </p>
        
        </>
      )}

    </div>
  )
}
export default ListadoPacientes