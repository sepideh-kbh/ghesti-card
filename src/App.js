import { ConfigProvider } from "antd";
import Dashboard from './pages/dashboard';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import AddUser from './pages/addUser/index';
import AddProduct from "pages/addProduct/index";

function App() {
  return (
    <ConfigProvider direction="rtl">
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/addusers' element={<AddUser />} />
          <Route path='/addproduct' element={<AddProduct />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
}
export default App;