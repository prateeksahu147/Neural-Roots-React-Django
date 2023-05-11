import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';
import HeroImg from '../../assets/img/clients/hero-img.png';

function MainCarousel() {
  return (
    // <!-- ======= Hero Section ======= -->
    <div>
    <section id="hero" className="d-flex align-items-center">
      <Container>
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <div className="d-flex justify-content-center justify-content-lg-start">
            <h1>Revolutionize Your Business with AI-Powered Solutions</h1>
            </div>
            <h2>We combine cutting-edge technology with human expertise to help businesses thrive in the digital age</h2>
            </div>
          
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
            {/* <img src="" className="img-fluid animated" alt=""> */}
            <img className="img-fluid animated" alt="" src={HeroImg}></img>
            </div>
        </div>
      </Container>
    </section>
    </div>
  );
}
export default MainCarousel;