import { createContext, useState } from "react";
import {Layout , Home ,Contact ,About ,Challenges, Projects} from "./pages";
import { Route , Routes } from "react-router";


const storageMode = localStorage.getItem('mode') ? localStorage.getItem('mode') : 'dark';

export const ModeContext = createContext();
export const NanigateContext = createContext();
export const NavigatorContext = createContext();

function App() {
  const [mode , setMode] = useState(storageMode);
  const [pageClass,setPageClass] = useState('');
  const [isVisibleNav , setIsVisibleNav] = useState(false);

  return (
    <ModeContext.Provider  value={{mode,setMode}}>
    <NanigateContext.Provider value={{pageClass,setPageClass}}>
    <NavigatorContext.Provider value={{isVisibleNav , setIsVisibleNav}}>
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
    </NavigatorContext.Provider>
    </NanigateContext.Provider> 
    </ModeContext.Provider>
  );
}

export default App;
