import {Route, Routes} from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Moviedetails from "./components/Moviedetails";
import Categories from "./components/Categories";
import * as React from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import Scrolltotop from "./components/Scrolltotop";
import Dashboard from "./components/Dashboard";
import Plans from "./components/Plans";
import Paymentsuccess from "./components/Paymentsuccess";



function App() {
  return (
  <>
  <ChakraProvider>
  <Router>
    <Navbar />
    <Scrolltotop />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
        <Route path="/movies/:id" element={<Moviedetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/success" element={<Paymentsuccess />} />
        {/* <Route path="/success" render={(props) => <Paymentsuccess paymentId={props.match.params.paymentId} />} /> */}
      </Routes>
    <Footer/>
    </Router>
    </ChakraProvider>
    </>
  );
}

export default App;
