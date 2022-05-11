import Header from './components/header/header';
import Footer from './components/footer/footer';
import Card from './components/card/card';

import './App.css';
import CardList from './components/card-list/card-list';

function App() {
  return (
    <div className="App">
      <Header/>

      <Card/>

      <CardList/>

      <Footer/>
    </div>
  );
}

export default App;
