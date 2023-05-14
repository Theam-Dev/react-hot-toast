import './App.css';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const mystyle = {
    color: "white",
    backgroundColor: "#960899",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ff000000",
    margin: "5px",
    cursor: "pointer"
  };

  const topright = () => toast.success('Hello World', {
    duration: 1500,
    position: 'top-right',
    style: {
      background:"green",
      color:"white"
    },
  });
  const bottomright =()=>toast.error('Hello World', {
    duration: 1500,
    position: 'bottom-right',
    style: {
      background:"red",
      color:"white"
    },
  });
  const topleft =()=>toast.loading('Hello World', {
    duration: 1500,
    position: 'top-left',
    style: {
      background:"purple",
      color:"white"
    },
  });
  const bottomleft =()=>toast.success('Hello World', {
    duration: 1500,
    position: 'bottom-left',
    style: {
      background:"green",
      color:"white"
    },
  });
  return (
    <div className="App">
      <h2>React using react-hot-toast</h2>
      <button onClick={topright} style={mystyle}>Top Right</button>
      <button onClick={bottomright} style={mystyle}>Bottom Right</button>
      <button onClick={topleft} style={mystyle}>Top Left</button>
      <button onClick={bottomleft} style={mystyle}>Bottom Left</button>
      <Toaster />
    </div>
  );
}

export default App;
