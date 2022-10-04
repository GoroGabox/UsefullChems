import '../styles/element.css'
import atomo from '../assets/atomo.png'

function Element({element}){
    let atomicNumber, simbolo, nombre, atomicMass, hexColor, electronConfiguration, electronegativity, atomicRadius, ionizationEnergy, electronAffinity, oxidationStates, standardState, meltingPoint, boilingPoint, density, groupBlock, yearDiscovered

    if (element!==null && element!==undefined) {
            [atomicNumber, 
            simbolo, 
            nombre, 
            atomicMass, 
            hexColor, 
            electronConfiguration, 
            electronegativity, 
            atomicRadius, 
            ionizationEnergy, 
            electronAffinity, 
            oxidationStates, 
            standardState, 
            meltingPoint, 
            boilingPoint, 
            density, 
            groupBlock, 
            yearDiscovered] = Object.values(element)
    }
    console.log()
    return (
        <div className="Container">
            <div className='GeneralInfo'>
                <div className='Info'>
                    <div className='Title'>{nombre}</div>
                    <div>Grupo: {groupBlock}</div>
                    <div>Punto de fusion: {meltingPoint} °C</div>
                    <div>Punto de ebullicion: {boilingPoint} °C</div>
                    <div>Densidad: {density}</div>
                    <div>Año de descubrimiento: {yearDiscovered}</div>
                </div>
                <div className='Card'>
                    <div className='Card-upper'>
                        <div>{atomicNumber}</div>
                        <div>{atomicMass}</div>
                    </div>
                    <div className='Card-lower'>
                        <div>{simbolo}</div>
                    </div>
                </div>
            </div>
            {/* <div className='AtomicInfo'>
                <div className='Atom-container'>
                    <img src={atomo} alt='atomo'></img>
                </div>
                <div className='Info-grid'>
                    <div>{electronConfiguration}</div>
                    <div>{electronegativity}</div>
                    <div>{electronAffinity}</div>
                    <div>{atomicRadius}</div>
                    <div>{ionizationEnergy}</div>
                    <div>{oxidationStates}</div>
                </div>
            </div> */}
        </div>
    )
}

export default Element