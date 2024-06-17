import Navbar from "./components/Navbar.js";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.js";
import SignUp from "./components/SignUp.js";
import PrivateComponent from "./components/PrivateComponent.js";
import Login from "./components/Login.js";
import AddProduct from "./components/AddProduct.js";
import Products from "./components/Products.js";
import Update from "./components/Update.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<Products/>}></Route>
            <Route path="/add" element={<AddProduct/>}></Route>
            <Route path="/update/:id" element={<Update/>}></Route>
            <Route path="/logout" element={<h1>logout page</h1>}></Route>
            <Route path="/profile" element={<h1>profile page</h1>}></Route>
          </Route>
        <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
