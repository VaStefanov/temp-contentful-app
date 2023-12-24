import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contenttful CMS</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum iusto, reiciendis culpa unde assumenda beatae exercitationem magni. Libero delectus consectetur deserunt voluptatibus iure doloribus! Harum reiciendis tempore ipsa ullam inventore!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className='img'/>
        </div>
      </div>
    </section>
  )
}
export default Hero