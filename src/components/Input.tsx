const Input=({id,type,label,...props})=>{
    return(
        <>
            <label  htmlFor={id}>{label}</label>
            <input id={id} type={type} {...props} /> 
        </>
    )

}
export default Input;