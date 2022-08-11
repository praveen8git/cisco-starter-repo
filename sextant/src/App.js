import './App.css';
import Header from './Header';
import Card from './Card';
import Getip from './Getip';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container mt-5'>
        <div className='row mt-2'>
          <div className='col'>
            <Card title="IPv4" text="Your ipv4 Address" hight="">
              <Getip ip="v4" />
            </Card>
          </div>
          <div className='col'>
            <Card title="IPv6" text="Your ipv6 Address">
              <Getip ip="v6" />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
