import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import TestConnection from './pages/TestConnection';  

// TODO: create these page files as you build each feature
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Dashboard from './pages/Dashboard';
// import Analytics from './pages/Analytics';
// import Repositories from './pages/Repositories';
// import AIInsights from './pages/AIInsights';
// import Profile from './pages/Profile';
// import PublicProfile from './pages/PublicProfile';
// import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<TestConnection />} /> 


        {/* Uncomment each route as you build the matching page */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/analytics" element={<Analytics />} /> */}
        {/* <Route path="/repositories" element={<Repositories />} /> */}
        {/* <Route path="/ai-insights" element={<AIInsights />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
        {/* <Route path="/u/:username" element={<PublicProfile />} /> */}
        {/* <Route path="/settings" element={<Settings />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;