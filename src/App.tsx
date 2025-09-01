
import Hero from './Components/Hero';
import SchoolCard from './Components/SchoolCard';
function App() {
  return (
    <div>
      <Hero/>
      <SchoolCard images='K' title='Kigali international Academy' category='primary and secondary ' location='Kigali , Gasabo District' seats={25} schoolfees={180000000} rating={4.6} />
    </div>
  );
}

export default App;
