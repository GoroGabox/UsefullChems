import '../styles/square.css';
import '../styles/chemGroupButton.css'

function ChemGroupButton({grupo, click}) {
    return(
        <button type="button" className={`Chem-Button ${grupo}`} onClick={()=>click(grupo)}>{grupo}</button>
    )
}

export default ChemGroupButton