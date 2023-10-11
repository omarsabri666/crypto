import { BrowserRouter, Route, Routes } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";



import "./index.css";


import ContextP from "./context/ContextP.jsx";
import { Suspense, lazy } from "react";
import AppLayout from "./componots/AppLayout";

import Loader from "./Pages/Loader";



const Home = lazy(() => import("./Pages/Home.jsx"));
const CoinDetails = lazy(() => import("./Pages/CoinDetails.jsx"));
// const OurTeam = lazy(() => import("./Pages/OurTeam.jsx"));
// const Contact = lazy(() => import("./Pages/Contact.jsx"));
// const Cars = lazy(() => import("./Pages/Cars.jsx"));
// const About = lazy(() => import("./Pages/About"));


function App() {
 
 
  


  return (
    <BrowserRouter>
      <ContextP>
       
        <Suspense fallback={

           <Loader />
        
           }>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index path="/" element={<Home/>}/>
              <Route path="home" element={<Home/>}/>
              <Route path="home/:id" element={<CoinDetails/>}/>

             
            </Route>
          </Routes>
        </Suspense>
      </ContextP>
    </BrowserRouter>
  );
}

export default App;
