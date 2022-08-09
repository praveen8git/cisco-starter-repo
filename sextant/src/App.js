import './App.css';
import Header from './Header';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container mt-5'>
        <div className='row mt-2'>
          <div className='col'>
            <Card title="Title here" content="content here" />
          </div>
          <div className='col'>
            <Card title="Title here" content="content here" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
