
// recibimos la funcion como prop desde app
function ControlVisibilidad({setMostrarTareaCompletadas, limpiartareas, isChecked}) {

    // Al momento de darle click lo eliminamos
    const borrarTareas = () => {
        if (window.confirm('Seguro que quiere eliminar las tareas')) {
            limpiartareas()
        }
    }

    return (
        <div>
        <input
          type="checkbox" 
          checked={isChecked}
          //En vez de pasarle lo contrario de !mostrarTareaCompletadas, le pasamos el valor , es el que realmente va cambiar el valor
          // Lo que significa que si el input esta marcado es true y si no es false, de esa forma pasamos el valor 
          onChange={(e) => setMostrarTareaCompletadas(e.target.checked)}
        />
        <label>Mostrar tareas hechas</label>
{/* Al hacer click lanzara una funcion que  uitara todos los elemntos */}
        <button onClick={borrarTareas}>
            Limpiar            
        </button>

      </div>
    );
  }
  
  export default ControlVisibilidad;
  