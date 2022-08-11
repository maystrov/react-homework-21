import './App.css';
import './Nav/Nav.css'

import Header from './Header/Header';
import Main from './Main/Main';
import Nav from './Nav/Nav';


function App() {
  const btnText = "some new text";

  return (
    <div className="App">
      <div className='wrap'>
        <div className='right-section'>
          <Header className='myHeader' text='Header section'></Header>
          <Main className='myMain' text='Main section'></Main>
        </div>
        <Nav className='myNav' text='Navigation section'></Nav>
      </div>
    </div>
  );
}

export default App;
