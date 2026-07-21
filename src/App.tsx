import { HashRouter, Route, Routes } from 'react-router-dom'

import AboutPage from '@/pages/AboutPage'
import Home from '@/pages/Home'
import WorkDetailPage from '@/pages/WorkDetailPage'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/works/:slug" element={<WorkDetailPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  )
}
