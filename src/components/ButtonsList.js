import { useState } from "react"
import ChemGroupButton from "./chemGroupButton"

function ButtonsList({selected}) {
    
    const [select, setSelect] = useState(null)

    const grupos = ['Nonmetal', 'Noble gas', 'Alkali metal', 'Alkaline earth metal','Metalloid','Halogen','Transition metal','Post-transition metal','Lanthanide','Actinide']
    
    const toggle = value => {
        if (select === value) {
            return setSelect(null)
        }
        setSelect(value)
    }
    
    selected(select)
    return(
        <div>
            {
           grupos.map((item, index)=>
                <ChemGroupButton key={index} grupo={item} click={toggle}/>
            )}
        </div> 
    )
}

export default ButtonsList