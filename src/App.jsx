import { Routes, Route } from 'react-router-dom';

import HomeComponent from './pages/HomeComponent';
import SurveyComponent from './components/SurveyComponent';

export const App = () => {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/survey" element={<SurveyComponent />} />
          {/* <Route path="/lawyer" element={<SurveyComponent />} /> */}
        </Routes>
      </main>
    </div>
  );
};
