import { HashRouter, Route, Routes } from 'react-router-dom'

import Home from '@/pages/Home'
import WorkDetailPage from '@/pages/WorkDetailPage'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works/:slug" element={<WorkDetailPage />} />
      </Routes>
    </HashRouter>
  )
}
