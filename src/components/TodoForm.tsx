const TodoForm = () => {

  

  return (
    <div className="container text-center">
      <h1 className="my-5">Formulario de lista de tareas</h1>
      <form>
        <input type="text" className="form-control mb-3" placeholder="Ingrese la tarea" required/>
        <textarea className="form-control mb-3" placeholder="Ingrese una descripción de la tarea" required/>
        <select className="form-select mb-3" defaultValue="">
          <option value="" disabled>Elija una opción</option>
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>
        <button type="submit" className="btn btn-primary">Agregar</button>
      </form>
    </div>
  )
}
export default TodoForm