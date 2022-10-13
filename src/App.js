import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";
import Home from './components/pages/Home';
import MenuDetail from "./components/pages/MenuDetail";
import HomeLogin from "./components/pages/HomeLogin";

import ProfileUser from "./components/pages/ProfileUser";
import ProfilePatners from "./components/pages/ProfilePatners"

import EditProfile from "./components/pages/EditProfile";
import EditProfilePatner from "./components/pages/EditProfilePatner";
import AddProduct from "./components/pages/AddProduct";

import IncomeTransaction from "./components/pages/IncomeTransaction";
import CartOrder from "./components/pages/CartOrder";
import EditTwo from "./components/pages/EditTwo";




function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home-login-success" element={<HomeLogin />} />
        <Route exact path="/menu-detail" element={<MenuDetail />} />

        <Route exact path="/profile-user" element={<ProfileUser />} />
        <Route exact path="/profile-patners" element={<ProfilePatners />} />

        <Route exact path="/edit-profile" element={<EditProfile />} />
        <Route exact path="/edit-profile-patner" element={<EditProfilePatner />} />
        <Route exact path="/add-product" element={<AddProduct />} />

        <Route exact path="/income-transaction" element={<IncomeTransaction />} />
        <Route exact path="/cart-order" element={<CartOrder/>}/>

        <Route exact path="/edit-two" element={<EditTwo />} />

      </Routes>
    </Router>
  );
}

export default App;
