import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NotFoundPage from './NotFoundPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<h1>Index Page </h1>} />
      <Route path="login" element={<h1>Login page</h1>} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
