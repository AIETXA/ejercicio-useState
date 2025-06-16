import './App.css'
import { useState } from 'react'




function App() {
    const [ name, setName ] = useState('Sofía');
    const [ newName, setNewName ] = useState('');

return (
    <div> 
        <h2>Teacher name: {name}</h2>
      
      <ul>
        <li><button onClick={()=>setName('Data')}>Data</button></li>
        <li><button onClick={()=>setName('Reyes')}>Reyes</button></li>
        <li><button onClick={()=>setName('Yolanda')}>Yolanda</button></li>
      </ul>
    </div>
    )
};


export default App
