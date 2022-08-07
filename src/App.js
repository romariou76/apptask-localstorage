import { useState, useEffect } from "react";
import "./App.css";
import CreadorTareas from "./components/CreadorTareas";
import TablaTarea from "./components/TablaTarea";

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

  // Creamos esta funcion para actualizar una tarea(true, false)
  // Funcion usada por TablaTarea porque tiene la lista de tareas
  const actualizarTarea = (tarea) =>
  setTareaItems(
    // por cada una de las tareas recibimos los datos y vamos a compararlo
    // Si la var que esta recorriendo es igual en su propiedad name es igual a tarea.name, vamos a considerarlo como que lo ha encontrado
    tareaItems.map((t) => (t.name === tarea.name ? { ...t, done: !t.done } : t))
    // sI SON IGUALES, si tiene su prop en true lo cambia a false y al revez, si no son iguales o no lo encuentra solo lo conserva que seria la tarea
    // Esto al final devuelve un nuevo arreglo, que sera el nuevo arreglo de tareas seteado por setTareaItems
    );
  
// Cuando cargue la app iniclamente ejecutara este hook, si no le colocamos nada en el array, se ejecutara apenas la app cargue 
  useEffect(() => {
    // console.log('cargo')
    // leemos el localstorage y guardamso en la var data
    let data = localStorage.getItem("tareas"); //Si existe datos vamos a convertirlo a su forma de javascript
    if (data) {
      setTareaItems(JSON.parse(data)); // Lo seteamos como el valor de la variabl que tiene todas las tareas
      // console.log(JSON.parse(data))
    } 
  }, []); //importante este parametro array para evitar millones de erroes xd

  // El hook useEffect se ejecuta cada vez si un dato cambia
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareaItems)) // Convertimos a string el array tareaItems
    // console.log('cambio')
  }, [ tareaItems ]) // Le pasamos el dato variable que va cambiando en este caso la lista(tareaItems), si cambia vuelve a ejecutar lo que esta dentro de la funcion
                    // Por lo tanto aqui seria el lugar correcto para guardarlo en el localStorage
  return (
    <div className="App">
      <CreadorTareas crearTarea={crearTarea}/>
      <TablaTarea tareas={tareaItems} actualizarTarea={actualizarTarea} mostrarTareaCompletadas={false}/>

      {/* Vamos a usar la misma tabla para filtrar las tareas a partir de la propiedad done:false true */}
      <TablaTarea tareas={tareaItems} actualizarTarea={actualizarTarea} mostrarTareaCompletadas={true} />
    </div>
  );
}

export default App;
