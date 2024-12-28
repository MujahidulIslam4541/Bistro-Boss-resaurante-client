import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as React from "react";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from './Routes/router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-screen-xl mx-auto'>
    <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
