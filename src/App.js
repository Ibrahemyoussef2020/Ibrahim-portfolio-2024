import { createContext, useState } from "react";
import {Layout , Home ,Contact ,About ,Challenges, Projects} from "./pages";
import { Route , Routes } from "react-router";


export const ModeContext = createContext();

function App() {
  const [mode , setMode] = useState('dark');

  return (
    <ModeContext.Provider  value={{mode,setMode}}>
    <div className={`app ${mode}`}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="challenges" element={<Challenges />} />
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
    </div>
    </ModeContext.Provider>
  );
}

export default App;
