import { HashRouter, Route, Routes } from 'react-router-dom'

import AmbientBackdrop from '@/components/AmbientBackdrop'
import InteractiveCursor from '@/components/InteractiveCursor'
import StoryProgress from '@/components/StoryProgress'
import { LanguageProvider } from '@/contexts/LanguageContext'
import AboutPage from '@/pages/AboutPage'
import Home from '@/pages/Home'
import WorkDetailPage from '@/pages/WorkDetailPage'

export default function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <AmbientBackdrop />
        <StoryProgress />
        <InteractiveCursor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/works/:slug" element={<WorkDetailPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </HashRouter>
    </LanguageProvider>
  )
}
