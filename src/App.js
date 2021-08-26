import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="flex flex-col overflow-hidden h-screen">
      {/* Header */}
      <Header />
      {/* Main */}
      <Main />
    </div>
  );
}

export default App;
