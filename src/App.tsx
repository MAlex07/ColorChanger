import { useState } from "react"

function App() {

  const [szin, setSzin] = useState("#ffffff");

  function Randomszin(){
    const randomszin = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")

  setSzin("#" + randomszin)  
  }
  

  return (
    <div style={{
      backgroundColor: szin,
      height: "100vh",
      width: "100vh"
    }}>
      <Fejlec></Fejlec>
      <button onClick={Randomszin}>Sziváltás</button>

      <Lablec lablecnev="Color Changer" tema="2. feladats"/>
    </div>
  )
}


function Fejlec(){
  
  return<>
  <header>
    <h1>Color Changer</h1>
  </header>
  </>
}

interface LablecProps{
  lablecnev: string;
  tema: string;
}

function Lablec({lablecnev, tema} : LablecProps){
  return <>
    <footer>
      <hr />

      <p>Név: {lablecnev}</p>
      <p>Téma: {tema}</p>
    </footer>
  
  </>
}




export default App
