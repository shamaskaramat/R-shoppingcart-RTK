import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"; 
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import { Provider } from "react-redux";
import { store } from "./store/store";
const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
    </Provider>
  )
}

export default App