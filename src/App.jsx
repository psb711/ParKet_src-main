import './App.scss';
import LiveParking from './components/LiveParking';
import Mainslide from './components/Mainslide';
import Bannerslide from './components/Bannerslide';
import Header from './components/Header';
// import Shortcut from './components/Shortcut';
import Notice from './components/Notice';
import Footer from './components/Footer';
import Payment from './components/Payment';
import CommuterPass from './components/CommuterPass';
import LpData2 from './data/Lp_data2';
import Paymentdetail from './components/Paymentdetail';


function App() {
  return (
    <div className="App">

      <Header />
      {/* <Mainslide />
      <Shortcut />
      <Payment />
      <LiveParking />
      <Bannerslide />
      <Notice /> */}
      <CommuterPass   LpData2={LpData2}/>
      {/* <Paymentdetail /> */}
      <Footer />
      
    </div>
    
  );
}

export default App;
