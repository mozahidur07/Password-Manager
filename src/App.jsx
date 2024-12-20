import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
     <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
        transition="Slide"
      />
      <Navbar/>
      <div className='min-h-[85vh]'> 
      <Manager/>
      </div>
      <Footer/>
      <ToastContainer/>
    </>
  )
}

export default App
