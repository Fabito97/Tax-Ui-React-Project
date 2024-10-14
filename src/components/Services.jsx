import Profit from '../assets/profit-loss.png'
import Inventory from '../assets/inventory.png'
import Contacts from '../assets/contacts.png'
import './Services.css'

const tasks = [
  {
    icon: 'bx bxs-report',
    text: "Reporting",
    header: "Stay on top of things with always up-to-date reporting features.",
    content: "We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity.",
  },
  {
    icon: 'bx bxs-bank',
    text: "Inventory",
    header: "Never lose track of what’s in stock with accurate inventory tracking.",
    content: "We don’t offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.",
  },
  {
    icon: 'bx bxs-contact',
    text: "Contacts",
    header: "Organize all of your contacts, service providers, and invoices in one place.",
    content: "This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.",
  },
]

export const Services = () => {
  return (
    <div className='service'>
      <div className='container'>
        <div className='service-heading'>
          <h1>Simplify everyday business tasks.</h1>
          <p>Because you’d probably be a little confused if we suggested you complicate your everyday business tasks instead.</p>
        </div>

        <div className='service-items'>
          {tasks.map((task) =>  
            <ServiceItem 
            text={task.text}
            header={task.header}
            content={task.content}
            icon={task.icon}
            key={task.text}                        
          />)}
        </div>

        <div className='service-showcase'>
          <img src={Profit} alt="" />
          <img src={Inventory} alt="" />
          <img src={Contacts} alt="" />
          
        </div>
      </div>
    </div>
  );
};


const ServiceItem = ({ text, header, content,icon }) => {  

  return (
    <div className='service-item'>   
      <div className={text === "Reporting" ? "color" : ""}>
        <i className={icon }></i>
        <br/>
        <small >
          {text}</small>
      </div>         
      <h4>{header}</h4>
      {content}
    </div>
  );
};
