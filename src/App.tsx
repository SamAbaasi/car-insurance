import './App.css';
import Layout from './components/Layout';
import { Signup } from './pages/Signup';
import {Route, Routes,BrowserRouter as Router} from 'react-router-dom';
import PrivateRoutes from './utils/PrivateRoutes';
import InsurancePage from './pages/Insurance';
import { AuthProvider } from './context/AuthContext';
function App() {
  return (
    <AuthProvider>
      <Layout>
        <Router>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route element={<InsurancePage />} path='/insurance' />
            </Route>
            <Route element={<Signup />} path='/signup' />
          </Routes>
        </Router>
      </Layout>
    </AuthProvider>
  );
}

export default App;
