import '../styles/navbar.css';
import Logo from'../logo.svg';
 
function Navbar() {
  return (
    <div className="Navbar">
      <div className='Logo'>
        <img src={Logo} alt='Logo'/>
      </div>
      <div>Tabla periodica Interactiva</div>
    </div>
  );
}

export default Navbar;