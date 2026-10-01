import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { BookModalProvider } from './context/BookModalContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookInterestModal } from './components/BookInterestModal';

// Pages
import { HomePage } from './pages/HomePage';
import { TopicsIndexPage } from './pages/TopicsIndexPage';
import { TopicDetailPage } from './pages/TopicDetailPage';
import { EvidenceIndexPage } from './pages/EvidenceIndexPage';
import { EvidenceDetailPage } from './pages/EvidenceDetailPage';
import { ResourcesIndexPage } from './pages/ResourcesIndexPage';
import { ProtocolsPage } from './pages/ProtocolsPage';
import { DigitalAgreementPage } from './pages/DigitalAgreementPage';
import { AiGuidePage } from './pages/AiGuidePage';
import { HelpPage } from './pages/HelpPage';
import { UpdatesIndexPage } from './pages/UpdatesIndexPage';
import { UpdateDetailPage } from './pages/UpdateDetailPage';
import { BookPage } from './pages/BookPage';
import { BookInterestPage } from './pages/BookInterestPage';
import { MethodologyPage } from './pages/MethodologyPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Automatic scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <BookModalProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1E1E1E]">
          <Header />

          <main id="main-content" className="flex-1 px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <Routes>
              {/* Home */}
              <Route path="/" element={<HomePage />} />

              {/* Temas */}
              <Route path="/temas" element={<TopicsIndexPage />} />
              <Route path="/temas/:slug" element={<TopicDetailPage />} />

              {/* Evidencia */}
              <Route path="/evidencia" element={<EvidenceIndexPage />} />
              <Route path="/evidencia/:slug" element={<EvidenceDetailPage />} />

              {/* Recursos */}
              <Route path="/recursos" element={<ResourcesIndexPage />} />
              <Route path="/recursos/protocolos" element={<ProtocolsPage />} />
              <Route path="/recursos/acuerdo-digital" element={<DigitalAgreementPage />} />
              <Route path="/recursos/guia-ia" element={<AiGuidePage />} />

              {/* Ayuda inmediata */}
              <Route path="/ayuda" element={<HelpPage />} />

              {/* Actualizaciones */}
              <Route path="/actualizaciones" element={<UpdatesIndexPage />} />
              <Route path="/actualizaciones/:slug" element={<UpdateDetailPage />} />

              {/* El libro */}
              <Route path="/libro" element={<BookPage />} />
              <Route path="/libro/avisame" element={<BookInterestPage />} />

              {/* Institucional y legal */}
              <Route path="/metodologia" element={<MethodologyPage />} />
              <Route path="/sobre" element={<AboutPage />} />
              <Route path="/contacto" element={<ContactPage />} />
              <Route path="/privacidad" element={<PrivacyPage />} />

              {/* 404 */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          <Footer />
          <BookInterestModal />
        </div>
      </BookModalProvider>
    </BrowserRouter>
  );
}
