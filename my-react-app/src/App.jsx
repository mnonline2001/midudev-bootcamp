
import './App.css'




const Course = () => {
    return <h1> Half Stack application development </h1>;
};
const Part1 = () => {
    return <p> Fundamentals of React </p>;
};
const Exercises1 = () => {
    return (10)
};
const Part2 = () => {
    return <p> Using props to pass data </p>;
};
const Exercises2 = () => {
    return (7);
};
const Part3 = () => {
    return <p> State of a component </p>;
};
const Exercises3 = () => {
    return (14);
};


function App() {


  return (
    <>
          <Course />
          <Part1 /> <Exercises1 />
          <Part2 /> <Exercises2 />
          <Part3 /> <Exercises3 />
          <p>Number of exercises {Exercises1() + Exercises2() + Exercises3()}</p>

    </>
  )
}

export default App


//código a transformar

//function App() {

//    const Course = 'Half Stack application development'
//    const Part1 = 'Fundamentals of React'
//   const Part1Exercises = 10
//   const Part2 = 'Using props to pass data'
//    const Part2Exercises = 7
//    const Part3 = 'State of a component'
//    const Part3Exercises = 14


//    return (
//       <>
//            <div>
//                <h1>{Course}</h1>
//                <p>{Part1} {Part1Exercises}</p>
//               <p>{Part2} {Part2Exercises}</p>
//               <p>{Part3} {Part3Exercises}</p>
//               <p>Number of exercises {Part1Exercises + Part2Exercises + Part3Exercises}</p>
//            </div>
//       </>
//   )
//}
