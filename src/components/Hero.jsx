import './Hero.css'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-wrapper'>
        <h1>Accounting  <span>made simple</span> for small businesses.</h1>
        <p>Most bookkeeping software is accurate, but hard to use. We make the opposit trade-off, and hope you don't get audited</p>
        <div className='hero-buttons'>
          <HeroButton 
            className={"btn-dark"}>
              Get 6 months free
          </HeroButton>
          <HeroButton 
            className={"btn-light"}>
              Watch video
          </HeroButton>
        </div>
      </div>
    </div>
  );
};


const HeroButton = ({ className, children }) => {
  return (
    <button className={className}>{children}</button>
  );
};

export default Hero
