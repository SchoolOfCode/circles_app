import '../styles/globals.css'
import Navbar from '../components/navbar.jsx'

export default function App({ Component, pageProps }) {
  
  return (
    <>
    <Navbar/>
   <Component {...pageProps} />
   </>
  )
}
