import { useState } from "react"
import Navbar from './components/navbar';
import Table from './components/table';
import Element from "./components/element";
import './App.css';

function App() {
  const [select, setSelect] = useState(null)
  const pull_element = (value =>{
    if (value===null) {
        return setSelect(null)
    }
    setSelect(value)
  })
  // console.log(select)
  return (
    <div className="App">
      <Navbar></Navbar>
      <Table selectedElement={pull_element}></Table>
      <Element element={select} ></Element>
    </div>
  );
}

export default App;
