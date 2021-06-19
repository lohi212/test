import React, { useEffect, useState } from 'react';
import "./styles.css";
import Tab from "./Components/tab";
import Offline from './Components/offline';

export default function App() {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    window.addEventListener('online', () => setIsOffline(false));
    window.addEventListener('offline', () => setIsOffline(true));
    return () => {
      window.removeEventListener('online', () => console.log(false));
      window.removeEventListener('offline', () => console.log(false));
    }
  }, []);


  return (
    <div className="App">
      {
        isOffline ? (
          <Offline />
        ) : <Tab />
      }

    </div>
  );
}
