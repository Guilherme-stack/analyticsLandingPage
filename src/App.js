import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Apresenta from './components/Apresenta';
import Header from './components/Header';
import Features from './components/Features';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionTree from './components/SectionTree';
import Planos from './components/Planos';
function App() {
  return (
    <div className="App">
      <div className="Topo">
         <Header></Header>
         <Apresenta></Apresenta>
      </div>
       <Features></Features>
       <SectionOne></SectionOne>
       <SectionTwo></SectionTwo>
       <SectionTree></SectionTree>
       <div className="Bottom">
        <Planos></Planos>
       </div>
    </div>
  );
}

export default App;
