// Enfoque reutilizable
// Responsabilidad -> Armar input completo con todo lo que necesita
function Input({ label, labelId, onChange, value, type }) {
    return (
        <div>
            <label htmlFor={labelId}>{label}</label>
            <input type={type} value={value} onChange={onChange} id={labelId} />
        </div>
    )
}

export default Input