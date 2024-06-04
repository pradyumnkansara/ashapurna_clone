import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './media.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Residential from './Pages/Residential';
import Media from './Pages/Media';
import Contact from './Pages/Contact';
import Windmills from './Pages/Windmills';
import Rental from './Pages/Rental';
import Upcoming from './Pages/Upcoming';
import OurJourney from './Pages/OurJourney';
import Management from './Pages/Management';
import Team from './Pages/Team';
import SocialResponsiblity from './Pages/SocialResponsiblity';
import Newsletter from './Pages/Newsletter';
import NriCorner from './Pages/NriCorner';
import WhyInvestJodhpur from './Pages/WhyInvestJodhpur';
import NriTownship from './Pages/NriTownship';



let router=createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/about-us',
    element:<About/>
  },
  {
    path:'/residential',
    element:<Residential/>
  },
  {
    path:'/media-events',
    element:<Media/>
  },
  {
    path:'/contact',
    element:<Contact/>
  },
  {
    path:'/windmills',
    element:<Windmills/>  
  },
  {
    path:'/rental',
    element:<Rental/>
  },
  {
    path:'/upcoming',
    element:<Upcoming/>
  },
  {
    path:'/our-journey',
    element:<OurJourney/>
  },
  {
    path:'/management-speaks',
    element:<Management/>
  },
  {
    path:'/our-team',
    element:<Team/>
  },
  {
    path:'/social-responsiblity',
    element:<SocialResponsiblity/>
  },
  {
    path:'/newsletter',
    element:<Newsletter/>
  },
  {
    path:'/nri',
    element:<NriCorner/>
  },
  {
    path:'/why-invest-in-jodhpur',
    element:<WhyInvestJodhpur/>
  },
  {
    path:'/nri-township',
    element:<NriTownship/>
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
