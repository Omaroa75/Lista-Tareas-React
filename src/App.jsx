import './App.css';
import omarLogo from './img/FreeCodeCamp_logo.png'
import ListaTareas from './components/ListaTareas';

function App() {
  return (
    <div className="Aplicacion-tareas">
      <div className='omar-logo-contenedor'>
        <img 
        src= {omarLogo} 
        className='omar-logo'
        alt="Logo Omar Roa" />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
