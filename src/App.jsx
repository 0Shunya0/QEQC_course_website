import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import UnitPage from './pages/UnitPage';
import TopicPage from './pages/TopicPage';
import QuestionBankPage from './pages/QuestionBankPage';
import TaNotesPage from './pages/TaNotesPage';

import GuidePage from './pages/GuidePage';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/unit/:unitId" element={<UnitPage />} />
        <Route path="/unit/:unitId/topic/:topicId" element={<TopicPage />} />
        <Route path="/question-bank" element={<QuestionBankPage />} />
        <Route path="/ta-notes" element={<TaNotesPage />} />
        <Route path="/guide" element={<GuidePage />} />
      </Routes>
    </Layout>
  );
}
