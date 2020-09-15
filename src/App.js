import React from 'react';
import './App.css';
import Contact from './components/Contact'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
    <Header branding='Contact Manager'/>
    <div className='container'>
    <Contact name='John' email='John@email.com' phone='555-514-5555'/>
    <Contact name='Doe' email='Doe@email.com' phone='515-554-5485'/>
    </div>
    </div>
  );
}

export default App;