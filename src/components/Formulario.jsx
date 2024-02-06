import { useState, useEffect } from "react"
import Error from "./Error";
const Formulario = ( { pacientes ,  setPacientes, paciente, setPaciente  } ) =>{



    const [nombre, setNombre ] = useState('');
    const [propietario, setPropietario ] = useState('');
    const [email, setEmail ] = useState('');
    const [fecha, setFecha ] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error,setError] = useState(false);
    
    useEffect(() => {
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
  
        }
    },[paciente])

    const gererId = ()=>{
        const radom = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)
        return radom + fecha

    }
    

    const handleSubmit = (e) => {
        e.preventDefault();

        
        if( [ nombre, propietario, email,fecha,sintomas].includes('') ){
            console.log('Hay al menos un campo vacio')
            setError(true)
            return;
        }
 
        setError(false)

        const objetoPaciente = {
            nombre, 
            propietario, 
            email,
            fecha,
            sintomas 
        }

        if(paciente.id){

            objetoPaciente.id = paciente.id
            const pacienteActualizado = pacientes.map(pacienteState => pacienteState.id ===
                paciente.id ? objetoPaciente : pacienteState)

                setPacientes(pacienteActualizado)
                setPaciente({})
        }else{
            objetoPaciente.id = gererId()
            setPacientes([...pacientes, objetoPaciente])
        }

        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }

    return(
        <div className="md:w-1/2 lg:w-2/5 bg-inherit mx-5  bg-white shadow-md" >
            <h1 className="font-black text-3xl text-center">Seguimiento Pacientes</h1>
            <p className="text-lg mt-5 text-center mb-10">
                Añadir pacientes y 
                {''}
                <span className="text-indigo-600 font-bold ">Administador</span>
            </p>

            <form className="shadow-md rounded-lg py-10 px-5 mb-20" onSubmit={handleSubmit}>
                { error && 
                <Error>Todos los campos son obligatorios</Error>
                }
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre  de la Mascota</label>
                    <input type="text" id="mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-r-md" 
                    placeholder="Nombre de la mascota" 
                    value={nombre} 
                    onChange={
                        (e)=> setNombre(e.target.value)
                    }/>
                </div>
                <div>
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold" >Nombre del propietario</label>
                    <input type="text" id="propietario" className="border-2 w-full p-2 mt-2
                    placeholder-gray-400 rounded-r-md" 
                    placeholder="Nombre del propietario"
                    value={propietario} 
                    onChange={
                        (e)=> setPropietario(e.target.value)
                    }
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold" >Email</label>
                    <input type="email" id="email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-r-md" placeholder="Email del propietario" 
                        value={email} 
                        onChange={
                        (e)=> setEmail(e.target.value)
                    }/>
                </div>
                <div>
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold" >Alta</label>
                    <input type="date" id="alta" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-r-md"
                        value={fecha} 
                        onChange={
                            (e)=> setFecha(e.target.value)
                        } />
                </div>
                <div>
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold" >Alta</label>
                    <textarea type="text" id="alta" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-r-md"
                        value={sintomas} 
                        onChange={
                            (e)=> setSintomas(e.target.value)
                        } />
                </div>

                <input type="submit" className="bg-indigo-600 w-full p-3 text-white font-bold hover:bg-indigo-700 cursor-pointer" 
                value={ paciente.id ? 'Editar Paciente ' : 'Agregar Paciente' } 
        
                
                />

            </form>
        </div>
        
    )
}

export default Formulario