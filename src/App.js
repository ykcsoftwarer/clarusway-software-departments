import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import data from './assests/data'
import img from './img/clarusway.png';

function App() {
  return (
<>
<Header/>
{data.map((item) => <Main {...item}/>)}
<Footer/>



</>


  );
}

export default App;
