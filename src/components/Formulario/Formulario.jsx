export function Formulario ({saludar}) {
    return (
    <>
            <form>
                <h3>Formulario</h3>
                <input type="text" />
                <button onClick={saludar}>saludar</button>
           </form>
    </>       
)}