import Header from "./components/Header"
import Formulario from './components/Formulario'
import ListadoPacientes from "./components/ListadoPacientes"
import { useState, useEffect } from "react" 

function App() {
  // Obtener datos de localStorage o utilizar un array vacío si no hay datos
  const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) || [];

  // Inicializar el estado con los datos recuperados
  const [pacientes, setPacientes] = useState(pacientesLS);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS = async () => {
      try {
        const pacientesLS = await JSON.parse(localStorage.getItem('pacientes')) || [];
        console.log('Datos recuperados:', pacientesLS);
        setPacientes(pacientesLS);
      } catch (error) {
        console.error('Error al cargar datos desde localStorage:', error);
      }
    };
    obtenerLS();
  }, []);

  useEffect(() => {
    try {
      const ver = localStorage.setItem('pacientes', JSON.stringify(pacientes));
      console.log('Datos guardados en localStorage:', pacientes, ver);
    } catch (error) {
      console.error('Error al guardar en localStorage:', error);
    }
  }, [pacientes]);

  const eliminarPaciente = id => {
    const pacienteActualizado = pacientes.filter(
      paciente => paciente.id !== id
    );

    if (JSON.stringify(pacientes) !== JSON.stringify(pacienteActualizado)) {
      setPacientes(pacienteActualizado);
    }
  };

  return (
    <div>
      <Header/>

      <div className="mt-12 md:flex bg-slate-200">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />

        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App;
