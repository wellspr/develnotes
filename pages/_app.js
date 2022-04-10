import AppNavbar from '../components/AppNavbar';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return <div
    style={{ 
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        flexGrow: 1
    }}
    >

    <Header>
        <AppNavbar />
    </Header>

    <Main>
      <Component {...pageProps} />
    </Main>

    <Footer />
  </div>
}

export default MyApp
