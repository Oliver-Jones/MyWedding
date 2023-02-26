//import logo from './logo.svg';
import './styles/App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Home from './Pages/Home';
import Travel from './Pages/Travel';
import Todo from './Pages/Todo';
import Photos from './Pages/Photos';
import Ceremony from './Pages/Ceremony';
import Registry from './Pages/Registry';
import Rsvp from './Pages/Rsvp';
import React, { useState } from 'react';
import Constants from './Constants';

function App() {
  const [page, setPage] = useState(Constants.nav1);
  const onPageChange = (value) => {
    setPage(value);
  };
  return (
    <div className="App-Bg">
      <div className="App-Bg-Overlay">
        <div className="App-Header">
          <Header onNavChange={onPageChange} />
        </div>
        <div className="App-Page">
          {page === Constants.nav1 &&
            <Home />
          }
          {page === Constants.nav2 && 
            <Ceremony />
          }
          {page === Constants.nav3 &&
            <Travel />
          }
          {page === Constants.nav4 && 
            <Todo />
          }
          {page === Constants.nav5 &&
            <Photos />
          }
          {page === Constants.nav6 && 
            <Ceremony />
          }
          {page === Constants.nav7 &&
            <Registry />
          }
          {page === Constants.nav8 && 
            <Rsvp />
          }
        </div>
        <div className="App-Footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
