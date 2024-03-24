import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import HostDashboard from './components/HostDashboard'
import Layout from './components/Layout'
import About from './pages/About'
import Home from './pages/Home'
import Income from './pages/host/Income'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import SelectedVan from './pages/SelectedVan'
import Vans from './pages/Vans'
import Dashboard from './pages/host/Dashboard'
import HostVans from './pages/host/HostVans'
import Reviews from './pages/host/Reviews'
import SelectedHostVan from './pages/host/SelectedHostVan'
import SelectedHostVanDetails from './components/SelectedHostVanDetails'
import SelectedHostVanPricing from './components/SelectedHostVanPricing'
import SelectedHostVanPhotos from './components/SelectedHostVanPhotos'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='vans' element={<Vans />} />
            <Route path='login' element={<Login />} />
            <Route path='vans/:id' element={<SelectedVan />} />
            <Route path='host' element={<HostDashboard />}>
              <Route index element={<Dashboard/>}/>
              <Route path='income' element={<Income/>}/>
              <Route path='vans' element={<HostVans/>}/>
              <Route path='vans/:id' element={<SelectedHostVan/>}>
                <Route index element={<SelectedHostVanDetails/>}/>
                <Route path='pricing' element={<SelectedHostVanPricing/>}/>
                <Route path='photos' element={<SelectedHostVanPhotos/>}/>

              </Route>
              <Route path='reviews' element={<Reviews/>}/>
            </Route>
            <Route path='*' element={<NotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
