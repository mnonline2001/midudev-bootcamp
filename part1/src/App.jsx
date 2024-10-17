import './App.css';
import Saludar from "./Saludar.jsx";


const Descripcion = () => {
    return <p> Esta es una descripción</p>
}

function App() {
  return(
      <div>
          <Saludar color= 'red' mensaje='Este' />
          <Saludar color= 'pink' mensaje='de practica '/>
          <Saludar color= 'blue' mensaje='con React '/>
          <Descripcion />
      </div>
  )
}

export default App
