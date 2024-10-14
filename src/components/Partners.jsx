import Transistor from "../assets/transistor.svg"
import Mirage from "../assets/mirage.svg"
import Stactickit from "../assets/statickit.svg"
import Laravel from "../assets/laravel.svg"
import Statamic from "../assets/statamic.svg"
import Tuple from "../assets/tuple.svg"
import './Partners.css'

const Partners = () => {
  return (
    <div className='partners'>
      <div className='container'>
        <h5>Trusted by these six companies so far</h5>
        <div className='partner-wrapper'>   
          <div>
            <img src={Transistor} alt="" />
          </div>       
          <div>
            <img src={Tuple} alt="" />
          </div>       
          <div>
            <img src={Stactickit}alt="" />
          </div>       
          <div>
            <img src={Mirage} alt="" />
          </div>       
          <div>
            <img src={Laravel} alt="" />
          </div>
          <div>
            <img src={Statamic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners