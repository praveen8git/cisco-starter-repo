import './App.css';
import Header from './Header';
import Card from './Card';
import Getip from './Getip';
import Latency from './Latency';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container mt-5'>
        <div className='row mt-2'>
          
            <Card title="IPv4" text="Your ipv4 Address" hight="">
              <Getip ip="v4" />
            </Card>
          
          
            <Card title="IPv6" text="Your ipv6 Address" hight="">
              <Getip ip="v6" />
            </Card>
          
          
            <Card title="Latency" text="Your network latency in ms" hight="">
              <Latency />
            </Card>
          
        </div>
      </div>
    </div>
  );
}

export default App;
