import './App.css'
import { useState } from 'react'




function App() {
    const [ name, setName ] = useState('Sofía');
    const [ newName, setNewName ] = useState('');

      const changeName = () => {
    if(newName.trim() !== '') {
      setName(newName);
      setNewName('')
    }
  }

  return (
<>
    <form onSubmit={(e) => {
      e.preventDefault()
      changeName()
    }}>
      <input 
        type='text'
        value={newName}
        placeholder='Add new teacher'
        onChange={(e) => setNewName(e.target.value) }
      >
      </input>
    <button type='submit'>Add teacher</button>
    </form>

    <h2>Teacher name: {name}</h2>
      
      <ul>
        <li><button onClick={()=>setName('Data')}>Data</button></li>
        <li><button onClick={()=>setName('Reyes')}>Reyes</button></li>
        <li><button onClick={()=>setName('Yolanda')}>Yolanda</button></li>
      </ul>
   

    </>
    )

};


export default App
