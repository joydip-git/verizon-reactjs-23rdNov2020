import './App.css';
import DashBoard from '../../components/Common/DashBoard/DashBoard'
import RouteGenerator from '../../routes/RouteGenerator';

function App() {
  return (
    <div className="App">
      <DashBoard />
      {/* <ProductContainer /> */}
      <RouteGenerator />
    </div>
  );
}

export default App;
