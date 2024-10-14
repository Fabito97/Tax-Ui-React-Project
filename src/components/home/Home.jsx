import { Action } from "../Action"
import { FAQ } from "../FAQ"
import { Features } from "../Features"
import Hero from "../Hero"
import Partners from "../Partners"
import { Pricing } from "../Pricing"
import { Services } from "../Services"
import { Testimonial } from "../Testimonial"

const Home = () => {
  return (
    <>
      <Hero/>
      <Partners/>
      <Features/>
      <Services/>
      <Action/>
      <Testimonial/>
      <Pricing/>
      <FAQ/>    
    </>
  )
}

export default Home