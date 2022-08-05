import { useState } from "react";

function CreadorTareas({crearTarea}) {

  // console.log(props)

  const [nuevaTarea, setNuevaTarea] = useState('');
        //variable -  funcion

  // Manejando el evento de envio - recibimos el evento (e)
  const handleSubmit = (e) => {
    e.preventDefault(); // Cancele la actualizacion de la pagina
    crearTarea(nuevaTarea)  // Antes de guardar, llamamos desde props la funcion crearTarea
    localStorage.setItem("tareas", nuevaTarea); //Hace el guardado en LocalStorage de la tarea que tipeo el usuario = clave - valor
    setNuevaTarea(""); // Una vez guardado limpiamos el input como string vacio
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* onSubmit captura los datos antes de que se envien */}
      <input
        type="text"
        placeholder="Ingresa una nueva tarea"
        value={nuevaTarea} // Muestra el valor del estado - limpiar el input
        onChange={(e) => setNuevaTarea(e.target.value)} //Muestra el evento con su target y recibe el valor para actualizarlo en ña var nuevaTarea
      />

      {/* <button onClick={() => alert(nuevaTarea)}>Guardar tarea</button> */}
      <button>Guardar tarea</button>
    </form>
  );
}

export default CreadorTareas;
