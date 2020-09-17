import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import { useStateValue } from './StateProvider';
import Widgets from './Widgets';

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
{!user ? (<Login/>) :(
  <>
 {/* Header */}
      <Header />
      {/* App Body */}
      <div className="app_body">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
        <Widgets />
      </div>
      </>
)}

     
    </div>
  );
}

export default App;
