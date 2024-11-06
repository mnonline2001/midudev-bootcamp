import './App.css'
import Mensaje  from "./Mensaje.jsx";


const a = 2
const b = 3

const Mensaje2 = () => {
    return <h2>Componenete mensaje</h2>
}

const Description = () => {
    return <p>Esta es la descripción del curso fullstack bootcamp</p>
}


const App = () => {
  return (
    <>
        <div className="App">
            <h1> Titulo de la app</h1>

            <p>Evaluación desde JSX</p>
            <div>
            <br />
                <p> Resultados</p>
                {a + b}
                <br />
                {+ new Date()}
            </div>
            <div>
                <Mensaje2 />
                <Mensaje2 />
                <Mensaje2 />
                <Mensaje color="red" message='Usando los props' />
                <Mensaje color="red" message='son parametros pero en React se llaman' />
                <Mensaje color="red" message='Props' />
                <Description />
            </div>
        </div>
    </>
  )
}
export default App
