import React, {useState} from 'react';
import Header from './components/Header';
import Main from './components/Main';


function App() {
  const [isModal, setIsModal] = useState(false)
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />
      {/* Main */}
      <Main isModal={isModal} setIsModal={setIsModal} />
    </div>
  );
}

export default App;
