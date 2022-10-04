import '../styles/square.css';
import useWindowSize from '../customHooks/resize';

function Square({na, data, grupo, click}) {

  const [width, height] = useWindowSize()

  const id = na
  const info = data
  let isFill = ''
  let e = []
  for (let i = 0; i < info.length; i++) {
    const element = info[i].Cell;
    let aN = parseInt(element[0])
    if (aN ===id) {
      isFill = 'Fill'
      const atomicNumber = element[0]
      const simbolo = element[1]
      const nombre = element[2]
      const atomicMass = element[3]
      const hexColor = element[4]
      const electronConfiguration = element[5]
      const electronegativity = element[6]
      const atomicRadius = element[7]
      const ionizationEnergy = element[8]
      const electronAffinity = element[9]
      const oxidationStates = element[10]
      const standardState = element[11]
      const meltingPoint = element[12]
      const boilingPoint = element[13]
      const density = element[14]
      const groupBlock = element[15]
      const yearDiscovered = element[16]

      e = [atomicNumber, 
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
          yearDiscovered]
    }
  }
  let isSelected = true
  if (grupo!==null && e[15]!==undefined) {
    isSelected = grupo===e[15]
  }
  // console.log()
  return (
    <div className={isSelected ? `${e[15]} ${isFill}` : `${e[15]} ${isFill} Nonselected`} onClick={()=>click(e)}>
        <div className='AtomicNumber'>{e[0]}</div>
        <div className='Symbol'>{e[1]}</div>
        <div className={width <= 750?'Symbol': 'None'}>{e[2]}</div>
    </div>
  );
}

export default Square;