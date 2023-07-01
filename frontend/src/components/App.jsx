import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NotFoundPage from './NotFoundPage';
import LoginPage from './LoginPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<h1>Index Page </h1>} />
      <Route path="login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
