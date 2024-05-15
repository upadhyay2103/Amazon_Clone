import { useEffect } from 'react'
import './App.css'
import Checkout from './Checkout'
import Header from './Header'
import Home from './Home'
import Login from './Login.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { auth } from './firebase.js'
import { useStateValue } from './StateProvider.jsx'
import Payment from './Payment.jsx'
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"

const promise=loadStripe('pk_test_51P5iIeSCiGy4DLjyudRgg7JxTpd985YaZQVw3LiCGSxVew4XmuOmjhil0JMSer7KRUfST03FEJCqGWn5qZ6QiVBD00t8nOtSQi')

function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('User is ', authUser)
      if (authUser) {
        // the user was logged in/ or the user just got logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      }
      else {
        // the user logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className='app'>
        <Routes>
        <Route path='/payment' element={<><Header /><Payment></Payment> </>}>
          </Route>
          <Route path='/login' element={<><Login></Login> </>}>
          </Route>
          <Route path='/checkout' element={<> <Header /><Checkout></Checkout></>}>
          </Route>
          <Route path='/' element={<><Header /><Home /> </>}>
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
