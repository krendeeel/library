import React, { useEffect } from 'react';
import { Header } from './header/Header';
import { NavBar } from './navBar/NavBar';
import { Container } from 'react-bootstrap'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Basket } from './basketPage/Basket';
import { Home } from './homePage/Home';
import { Library } from './libraryPage/Library';
import { Settings } from './settingsPage/Settings';
import { LoginPage } from './forms/LoginPage/Login';
import { RegPage } from './forms/RegPage/Reg';
import { Info } from './infoPage/Info';
import { cookies } from './utils/utils';
import { useDispatch } from 'react-redux';
import { infoUserThunk } from '../redux/store';

function App() {
  const dispatch = useDispatch()
    useEffect(()=>{
      const token =  cookies.get('token');
      if(token){
       dispatch(infoUserThunk({token: token}))
      }
    }, [])
    return (
    <BrowserRouter>
      <Container>
        <LoginPage/>
        <RegPage/>
        <Header/>
        <div className='workspace'>
          <NavBar/>
          <div className='main'>
            <Switch>
              <Route exact path='/' render={()=> <Home/>}/>
              <Route path='/library' render={()=> <Library/>}/>
              <Route path='/basket' render={()=> <Basket/>}/>
              <Route path='/settings' render={()=> <Settings/>}/>
              <Route path='/info:u?' render={()=> <Info/>}/>
              <Redirect to='/'/>
            </Switch>
          </div>
        </div>
      </Container>
    </BrowserRouter>
  );
}

export default App;
