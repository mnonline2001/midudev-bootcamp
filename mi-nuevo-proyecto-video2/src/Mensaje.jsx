const Mensaje = (props) => {
    console.log(props)
    return <p style={{ color: props.color}} >{props.message}</p>
}


export default Mensaje