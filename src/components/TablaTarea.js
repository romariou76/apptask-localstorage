import FilaTarea from "./FilaTarea";

// Recibimos como prop {tareas} de app.js las cuales seran el arreglo de tareas que luego mapearemos
function TablaTarea({tareas, actualizarTarea, mostrarTareaCompletadas }){

  const TareasFila = (donevalue) => {
    // console.log(donevalue)
    return(
      //Antes de que recorra todas las filas o genere las filas de la tabla. VAMOS A FILTRAR ANTES
      // Filtre por cada una de las tareas en su prop done si es igual a true y mantendra las tareas en true, lo mismo si usamos false
      tareas
      .filter(tarea => tarea.done === donevalue)
      .map(tarea => (// Por cada tarea que haya devuelva un tr con el nombre y cada tarea debe tener una clave unica en <tr>
            <FilaTarea  // Vamos a separar tr en otro componente FilaTarea porque el td con el input necesita su propio stado o propiedades o clases
            tarea={tarea} // Como necesita los datos pe pasamos la prop tarea con el valor de cada una de las tareas
            key={tarea.name}// Cada una de esas filas necesitan una llave unica
            actualizarTarea={actualizarTarea} /> // Pasamos la funcion como prop actualizarTarea porque tiene el checkbox
            ))
    ) 
  }

    return(
        <table>
        <thead>
          <tr>
            <th>Tarea</th>
          </tr>
        </thead>
        <tbody>
          {/* Separamos esta logica en otra funcion aparte que se llamara TareasFila la cual la llamamos aqui*/}
          {/* basado en una propiedad vamos a cambiar los valores */}
          {/* mostrarTareaCompletadas es un prop booleano el cual luego recibimos el valor booleano en la funcion TareasFila */}
          {
          TareasFila(mostrarTareaCompletadas)
          }
        </tbody>
      </table>
    )
}

export default TablaTarea;