import { useState, useEffect } from "react";
import "./App.css";
import CreadorTareas from "./components/CreadorTareas";

function App() {
  const [tareaItems, setTareaItems] = useState([])
  /* Datos de ejemplo dentro de useState
  { name: "tarea 1", done: false },
  { name: "tarea 2", done: false },
  { name: "tarea 3", done: false }, */

  // Pasaremos esta funcion al componente CreadorTareas(linea19) mediante props para que lo ejecute
  function crearTarea(tareaName){
    // alert('creando...')// alert(tareaName)
    // Si devuelve undefined pues ese dato no existe entonces si puedes añadir esa tarea, mas si existe no hace nada :V - Compara si hay un objeto si existe o no
    if (!tareaItems.find(tarea => tarea.name === tareaName)) {
      setTareaItems([...tareaItems, {name: tareaName, done: false}])// React dice crear una copia del arreglo (...tareas) y añade el nuevo elemento como un "Objeto"
    } else{
      alert('tarea ya agregada')
    }
  }
  
// Cuando cargue la app iniclamente ejecutara este hook, si no le colocamos nada en el array, se ejecutara apenas la app cargue 
  useEffect(() => {
    // console.log('cargo')
    // leemos el localstorage y guardamso en la var data
    let data = localStorage.getItem("tasks"); //Si existe datos vamos a convertirlo a su forma de javascript
    if (data) {
      setTareaItems(JSON.parse(data)); // Lo seteamos como el valor de la variabl que tiene todas las tareas
      // console.log(JSON.parse(data))
    } 
  }, []); //importante este parametro array para evitar millones de erroes xd

  // El hook useEffect se ejecuta cada vez si un dato cambia
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tareaItems)) // Convertimos a string el array tareaItems
    // console.log('cambio')
  }, [ tareaItems ]) // Le pasamos el dato variable que va cambiando en este caso la lista(tareaItems), si cambia vuelve a ejecutar lo que esta dentro de la funcion
                    // Por lo tanto aqui seria el lugar correcto para guardarlo en el localStorage
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
            tareaItems.map(tarea => (// Por cada tarea que haya devuelva un tr con el nombre y cada tarea debe tener una clave unica en <tr>
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
