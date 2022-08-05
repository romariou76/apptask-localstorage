import { useState } from "react";
import "./App.css";
import CreadorTareas from "./components/CreadorTareas";

function App() {
  const [tareasItems, setTareasItems] = useState([
    { name: "tarea 1", done: false },
    { name: "tarea 2", done: false },
    { name: "tarea 3", done: false },
  ]);

  // Pasaremos esta funcion al componente CreadorTareas(linea19) mediante props para que lo ejecute
  function crearTarea(tareaName){
    // alert('creando...')// alert(tareaName)
    // Si devuelve undefined pues ese dato no existe entonces si puedes añadir esa tarea, mas si existe no hace nada :V - Compara si hay un objeto si existe o no
    if(!tareasItems.find(tarea => tarea.name === tareaName)) {
      setTareasItems([...tareasItems, {name: tareaName, done: false}])// React dice crear una copia del arreglo (...tareas) y añade el nuevo elemento como un "Objeto"
    } else{
      alert('tarea ya agregada')
    }
  }

  return (
    <div className="App">
      <CreadorTareas crearTarea={crearTarea}/>

      <table>
        <thead>
          <tr>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {
            tareasItems.map(tarea => (// Por cada tarea que haya devuelva un tr con el nombre y cada tarea debe tener una clave unica en <tr>
              <tr key={tarea.name}>
                <td>
                  {tarea.name}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  );
}

export default App;
