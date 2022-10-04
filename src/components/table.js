import {useEffect, useState} from 'react'
import '../styles/table.css';
import Square from './square';
import ButtonsList from './ButtonsList';
import useWindowSize from '../customHooks/resize';

function Table({selectedElement}) {
  
  const [data, setData] = useState([])
  const [selectButton, setSelectButton] = useState(null)
  const [selectElement, setSelectElement] = useState(null)
  const [width, height] = useWindowSize()
  
  const API_URL = 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/periodictable/JSON' 

  const fetchPeriodicTable = (url) => {
      fetch(url)
      .then(response => response.json())
      .then(data => setData(data.Table.Row))
      .catch(error => console.log(error))
  }

  useEffect(()=> {
      fetchPeriodicTable(API_URL)
  }, [])
  
  //Crea el layout de la tabla asignando el numero atomico en cada square
  const blanks = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,20,21,22,23,24,25,26,27,28,29,38,39,40,41,42,43,44,45,46,47,92,110,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,162,163,164]
  const elementsWithBlanks = new Array(180).fill(null)
  let na = 0
  let sw = false
  const periodicTable = elementsWithBlanks.map((spot, index)=>{
    if (!blanks.includes(index)) {
        na = na + 1
        if (!sw) {
            if (na===57) {na =72}
            if (na===89) {
                na =104
                sw = !sw
            }
        } else {
            if (na===119) {na =57}
            if (na===72) {na =89}
        }
        
        spot = na
    }
    return spot
  })
   //Crea el layout de la lista eliminando los espacios vacios
  const periodicList = periodicTable.filter(Boolean)

  const pull_selected = (value) =>{
    if (value===null) {
        return setSelectButton(null)
    }
    setSelectButton(value)
  }
//   console.log(selectElement)
  const select_element = (value =>{
    if (value===null) {
        return setSelectElement(null)
    }
    setSelectElement(value)
  })
  selectedElement(selectElement)

  return (
    <div className="Table-Container">
        <div className='Buttons-List'>
            <ButtonsList selected={pull_selected}></ButtonsList>
        </div>
        <div className='Table'>
            {
                width>750 ? 
                periodicTable.map((item, index)=>
                <Square key={index} na={item} data={data} grupo={selectButton} click={select_element}/>)
                : periodicList.map((item, index)=>
                <Square key={index} na={item} data={data} grupo={selectButton} click={select_element}/>
            )
            }
        </div>
    </div>
  );
}

export default Table;