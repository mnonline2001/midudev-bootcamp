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




const App = () => {
    //const [left, setLeft] = useState(0);
    // const [right, setRight] = useState(0);


    const [clicks, setClicks] = useState([]);

    const handLecClickLeft = () => {
        setClicks(prevClicks => {
            return [...prevClicks, "L"]
        })
    };

    const handLecClickRight = () => {
        setClicks(prevClicks => {
            return [...prevClicks, "R"]
        })
    };

    const handleReset = () => {
        setClicks([]);
    }

    const left = clicks.filter(click => click === "L")
    const right = clicks.filter(click => click === "R")


    return (
        <div>
            {left.length}
            <button onClick={handLecClickLeft}>
                left
            </button>
            <button onClick={handLecClickRight}>
                right
            </button>
            {right.length}
            <p>
                <button onClick={handleReset}>reset</button>
            </p>
            <p> Clicks totales: {clicks.length}</p>
            {clicks.length === 0
                ? (<WarningNotUsed />)
                : ( <ListOfClicks clicks={clicks}/>
                )}
            <p>mensaje</p>
        </div>
    )
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);