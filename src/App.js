import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, [])
  return (
    <div className='max-w-[1440px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
