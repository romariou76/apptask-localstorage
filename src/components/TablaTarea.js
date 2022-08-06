import FilaTarea from "./FilaTarea";

// Recibimos como prop {tareas} de app.js las cuales seran el arreglo de tareas que luego mapearemos
function TablaTarea({tareas, actualizarTarea}){
    return(
        <table>
        <thead>
          <tr>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {
            tareas.map(tarea => (// Por cada tarea que haya devuelva un tr con el nombre y cada tarea debe tener una clave unica en <tr>
            <FilaTarea  // Vamos a separar tr en otro componente FilaTarea porque el td con el input necesita su propio stado o propiedades o clases
            tarea={tarea} // Como necesita los datos pe pasamos la prop tarea con el valor de cada una de las tareas
            key={tarea.name}// Cada una de esas filas necesitan una llave unica
            actualizarTarea={actualizarTarea} /> // Pasamos la funcion como prop actualizarTarea porque tiene el checkbox
            ))
          }
        </tbody>
      </table>
    )
}

export default TablaTarea;