import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import   About from './components/Mains/About/About'
import History from './components/Mains/History/History';
import Logo from './components/Mains/LogoClient/LgoClient';
import Comment from './components/Mains/Comment/Comment';
import Servics from './components/Mains/Servics/servics';
import Samples from './components/Mains/SampleWork/Samples';
import Team from './components/Mains/Team/team';
import Tariff from './components/Mains/Tariff/tariff';
import Question from './components/Mains/Questions/question';
import Contact from './components/Mains/Contact/contact';

import Footer from './components/Footer/footer';
function App() {
  return(
      <div>
    <Navbar></Navbar>
    <Header></Header>
    {/* section mains  */}
    <About></About>
    <History></History>
    <Logo></Logo>
    <Comment></Comment>
    <Servics></Servics>
    <Samples></Samples>
    <Team></Team>
    <Tariff></Tariff>
    <Question></Question>
    <Contact></Contact>
       {/* Footer  */}
       <Footer></Footer>
      </div>
  )
}

export default App;
