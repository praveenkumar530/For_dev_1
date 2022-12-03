import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Layout from './components/Layout';
import Payment from './components/Payment';
import Admin from './components/Admin';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import InputForm from './components/inputForm';
import LinkPage from './components/LinkPage';
import RequireAuth from './components/RequireAuth';
import { Routes, Route } from 'react-router-dom';

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes */}
        <Route />
          <Route path="/" element={<Home />} />
        </Route>

        <Route >
          <Route path="payment" element={<Payment />} />
        </Route>


        <Route >
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route>
          <Route path="InputForm" element={<InputForm />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      {/* </Route> */}
    </Routes>
  );
}

export default App;