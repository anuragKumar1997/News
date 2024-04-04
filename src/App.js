
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Webpagenews from './Webpagenews';
import Navbar from './component/Navbar';
import { useState } from 'react';


function App() {
  const [value, setvalue] = useState("");
  function xyz(ans){
    console.log(ans)
    setvalue(ans)
  }
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar xyz={xyz}/>
    <Routes>
     <Route path='/' element={<Webpagenews ans={value} />}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
