// recibe el prop tarea para que la fila se muestre
// Recibe el prop actualizarTarea para evaluarlo en App.js

function FilaTarea({tarea, actualizarTarea}) {
  return (
    <tr key={tarea.name}>
      <td>
        {tarea.name}
        <input
          type="checkbox"
          checked={tarea.done} //chekea si es false o true
          onChange={() => actualizarTarea(tarea)} // Si da click cambia el valor de tarea.done(leer arreglo, buscarlo y actualizarlo)
          // Ademas le pasamos a la funcion la tarea que estamos intentando cambiar el estado true o false
        />
      </td>
    </tr>
  );
}

export default FilaTarea;
