import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'
import AreasIndex from './components/AreasIndex.tsx'
import LocationPage from './components/LocationPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/areas" element={<AreasIndex />} />
          <Route path="/areas/:slug" element={<LocationPage />} />
          <Route path="/areas/:hubSlug/:slug" element={<LocationPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
