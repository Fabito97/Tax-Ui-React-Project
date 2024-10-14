import { Features } from "./Features";
import './pricing.css'

const prices = [
  {
    price: 9,
    category: "Starter", 
    description: "Good for anyone who is self-employed and just getting started.",
    features: [ 
      " Send 10 quotes and invoices.",
      " Connect up to 2 bank accounts.",
      " Track up to 15 expenses per month",
      " Manual payroll support",
      " Export up to 3 reports",
      
    ]
  },
  {
    price: 15,
    category: "Small business", 
    description: "Perfect for small / medium sized businesses.",
    features: [ 
      " Send 25 quotes and invoices",
      " Connect up to 5 bank accounts",
      " Track up to 50 expenses per month",
      " Automated payroll support",
      " Export up to 12 reports",
      " Bulk reconcile transactions",
      " Track in multiple currencies",
    ]
  },
  {
    price: 39,
    category: "Starter", 
    description: "Good for anyone who is self-employed and just getting started.",
    features: [ 
      " Send unlimited quotes and invoices",
      " Connect up to 15 bank accounts",
      " Track up to 200 expenses per month",
      " Automated payroll support",
      " Export up to 25 reports, including TPS",      
    ]
  },
]

export const Pricing = () => {
  return (
    <div className='pricing'>
      <div className='container'>
        <h1 className='py-1'>Simple pricing, for everyone</h1>
        <p className='pb-2'>
          It doesn't matter what size your business is, 
          our software will wok well for you.
        </p>
        <div className="pricing-charts">
          {prices.map((price) => 
            <PricingChart 
              price={price.price} 
              category={price.category}
              description={price.description}
              features={price.features}
              key={price.price}
          />)}

        </div>
        
      </div>
    </div>
  );
};

const PricingChart = ({ price, category, description, features = [] }) => {
  return (
    <div className='pricing-chart'>
      <h1 className='pb-1'>${price}</h1>
      <h4 className='pb-1'>{category}</h4>
      <p className='pb-1'>{description}</p>
      <button className='btn-light'>Get Started</button>
      <ul className='pt-1'>
        {features.map((feature, index) => 
          <PricingFeatures 
          key={index}
          feature={feature}/>)}
      </ul>
    </div>
  );
};

const PricingFeatures = ({feature}) => {
  return (
    <li><i className='bx bx-check-circle'></i>  
    {feature}</li>
  )
}
