const Buttons=({label,children,...props})=>{
    return(
        <button {...props}>
            {label}
            {children}
            </button>
    )
}
export default Buttons;