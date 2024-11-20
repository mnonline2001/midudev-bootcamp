import ReactDOM from 'react-dom';
import {useState} from "react";


const rootElement = document.getElementById('root');

const Counter = (props) => {
    console.log('Counter render');
    return <p style={{color: props.color}} >{props.number}</p>
}

const App = (props) => {
    const [contador, updateContador] = useState(13);

    //Equivalente
    //const contador = useState(13);
    //const contadorValue = contador[0];
    //const updateContador = contador[1];


    //setInterval(() => {
     //   updateContador(contadorValue + 1);
   // }, 2000)
   // No es recomendable usar

    // Mejor usar un evento click para tener un poco más de control

    console.log('render');
    const handleClick = (increment) => {
        //   return(
        //      updateContador(contador + 1)
        //  )

         updateContador((prevContador) => {
        return increment ? prevContador + 1 : prevContador - 1;
        });


    }

    const hadLeClickdecrementar = () => {
        updateContador(contador - 1)
    }

    const handLecClickReset = () => {
        updateContador(0);
    }

    const isEven = contador % 2 === 0 ? 'Es par' : 'Es impar';

   return (
       <div>
           <p> El valor del contador es:</p>
           <Counter color="red"   number={contador} />
           <small>{isEven}</small><br />
           <button
           onClick={() => handleClick(true)}
           >
               Incrementar
           </button>

           <button
           onClick={handLecClickReset}
           >
               Reset
           </button>
           <button
               onClick={() => handleClick(false)}
           >
               Decrementar
           </button>
       </div>
   );
};


ReactDOM.render(<App />, rootElement);






