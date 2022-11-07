
import { useState, useEffect } from 'react';
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Routes } from './Components/Routes/Routes';



function App() {
 
  return (
    <div className="">
    <RouterProvider router={Routes}>

    </RouterProvider>
    </div>
  );
}

export default App;
