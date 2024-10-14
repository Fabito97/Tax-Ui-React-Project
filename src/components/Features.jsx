import Payroll from '../assets/payroll.png'
import './Features.css'

const features = [
  {
    title: "Payroll",
    text: "Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
  },
  {
    title: "Claim expenses",
    text: "All of your receipts organized into one place, as long as you don't mind typing in the data by hand.",
  },
  {
    title: "VAT handling",
    text: "We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
  },
  {
    title: "Reporting",
    text: "Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.",
  },
]

export const Features = () => {
  return (
    <div className='features'>
      <div className='container'>

        <div>
          <h1>Everything you need to run your books.</h1>
          <p className='pb-1'>Well everything you need if you aren't that picky about minor details like tax compliance.</p>
        </div>
        <div className='feature-items'>
          <ul>
            {features.map((feature) => 
              <FeatureItems title={feature.title} 
              text={feature.text} 
              key={feature.title} 
            />)}
          </ul>
          <div className='feature-img'>
            <img src={Payroll} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureItems = ({ title, text }) => {
  return (
    <li><h3>{title}</h3>
      <p>{text}</p>
    </li>
  );
};

