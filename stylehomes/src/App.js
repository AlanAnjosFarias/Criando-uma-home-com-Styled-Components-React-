import React from 'react';
import Header from './components/Header';
import Global from './theme/global';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Global/>
      <Header/>
      <Footer/>
    </React.Fragment>
    
  );
}

export default App;
