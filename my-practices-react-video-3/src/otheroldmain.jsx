import ReactDOM from 'react-dom';
import {useState} from "react";
import './index.css';

const WarningNotUsed =() => {
    return <h1> Todavía no se ha usado el contador </h1>
}

const ListOfClicks = ({clicks}) => {
    //console.log({clicks});
    //debuger;
    return <p> {clicks.join(", ")} </p>

};

const INITIAL_COUNTER_STATE ={
    left: 2,
    right: 4,
    clicks: 0,
    mensaje: 'Mensaje '
}



const App = () => {
     //const [left, setLeft] = useState(0);
    // const [right, setRight] = useState(0);

    const [counters, setCounters] = useState(INITIAL_COUNTER_STATE);

    const [clicks, setClicks] = useState([]);

    const handLecClickLeft = () => {
        const newCountersLeft = {
            ...counters,
            left: counters.left + 1,
            clicks: counters.clicks + 1,
        }
        setCounters(newCountersLeft);
        setClicks(prevClicks => {
            return [...prevClicks, "L"]
        })
    };

    const handLecClickRight = () => {
        setCounters({
            ...counters,
            right: counters.right + 1,
            clicks: counters.clicks + 1
        });
        setClicks(prevClicks => {
            return [...prevClicks, "R"]
        })
    };

    const handleReset = () => {
        setCounters(INITIAL_COUNTER_STATE);
        setClicks([]);
    }


    return (
        <div>
            {counters.left}
            <button onClick={handLecClickLeft}>
                left
            </button>
            <button onClick={handLecClickRight}>
                right
            </button>
            {counters.right}
            <p>
                <button onClick={handleReset}>reset</button>
            </p>
            <p> Clicks totales: {counters.clicks}</p>
            {clicks.length === 0
                ? (<WarningNotUsed />)
                : ( <ListOfClicks clicks={clicks}/>
                )}
            <p>{counters.mensaje}</p>
        </div>
    )
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);