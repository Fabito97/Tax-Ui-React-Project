import './Testimonial.css'
import Avatar1 from '../assets/avatars/avatar-1.png'
import Avatar2 from '../assets/avatars/avatar-2.png'
import Avatar3 from '../assets/avatars/avatar-3.png'
import Avatar4 from '../assets/avatars/avatar-4.png'
import Avatar5 from '../assets/avatars/avatar-5.png'
import Avatar6 from '../assets/avatars/avatar-4.png'

const testimonials = [
  {
    id: 1,
    name: "Sheryl Berge",
    position: "CEO at Lynch LLC",
    content: "TaxPal is so easy to use I can't help but wonder if it's really doing the things the government expects me to do.",
    avatar: Avatar1,
    alt: "Sheryl Berge",    
  },
  {
    id: 2,
    name: "Leland Kiehn",
    position: "Founder of Kiehn and Sons",
    content: "The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go   down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
    avatar: Avatar2,
    alt: "Sheryl Berge",    
  },
  {
    id: 3,
    name: "Peter Renolds",
    position: "Founder of West Inc.",
    content: "I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.",
    avatar: Avatar3,
    alt: "Sheryl Berge",    
  },
  {
    id: 4,
    name: "Amy Hahn",
    position: "Director at Velocity Industries",
    content: "I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.",
    avatar: Avatar4,
    alt: "Sheryl Berge",    
  },
  {
    id: 5,
    name: "Erin Powlowski",
    position: "COO at Armstrong Inc.",
    content: "There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.",
    avatar: Avatar5,
    alt: "Sheryl Berge",    
  },
  {
    id: 6,
    name: "Amy Hahn",
    position: "Director at Velocity Industries",
    content: "This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.",
    avatar: Avatar6,
    alt: "Sheryl Berge",    
  },
]

export const Testimonial = () => {
  return (
    <div className='testimonial'>
      <div className='container'>
        <div className='testimonial-heading py-3'>
          <h1 className='pb-2'>Loved by businesses worldwide</h1>
          <p>Our software is so simple that people can't help but fall in love with it. Simplicity is easy when just skip tons of mission-critical features.</p>
        </div>
        <div className='testimonial-items'>
          {testimonials.map((testimonial) => 
          <TestimonialItem 
            name={testimonial.name}
            position={testimonial.position}
            content={testimonial.content}
            avatar={testimonial.avatar}        
            alt={testimonial.name}
            key={testimonial.id}
          />)}
        </div>
      </div>
    </div>
  );
};

const TestimonialItem = ({ name, position, content, avatar, alt }) => {
  return (
    <div className='testimonial-item'>
      <p className='pb-2'>{content}</p>
      <div className='client-wrap'>
        <div className='pt-1'>
          <h4 className='pb-1'>{name}</h4>
          <span>{position}</span>
        </div>
        <div className='client-img'>
          <img src={avatar} alt={alt} />
        </div>
      </div>
    </div>
  );
};
