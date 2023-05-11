import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoImg from '../../assets/img/clients/logo.png';

function ServiceMain() {
  return (
    <div>
    <section id="services" className="services section-bg">
    <div className="container">
        <div className="section-title">
            <h2>Services</h2>
            <h3> Our AIaaS platform is designed to grow with your business, providing you with the computing power and storage capacity you need as your data and user base expand.</h3>
            <h4>We work with you every step of the way, from system design to post-launch support and scaling.</h4>
        </div>
        <div className="row">
            <div className="history-wrapper title-wrap">
                <div className="title-wrap one-of-two"></div>
                <div className="timeline-box one-of-two">
                    <h3 className='text-center'>Chatbots and Virtual Assistants</h3>
                    <img  className="service-card-img-top" 
                          src="https://community.nasscom.in/sites/default/files/media/images/Difference%20between%20chatbot%20and%20virtual%20assistant.jpeg" 
                          alt="..." />
                    
                    <div className="year">1</div>
                </div>
                <div className="timeline-box one-of-two">
                    <h3 className='text-center'>Insurance</h3>
                    <img className="service-card-img-top" 
                         src="https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/27oct-v3/Insurance.jpg" alt="..." />
                    <div className="year">2</div>
                </div>
                <div className="timeline-box one-of-two">
                <h3 className='text-center'>Auto Claims</h3>
                    <img  className="service-card-img-top" 
                          src="https://www.shaip.com/wp-content/uploads/2022/04/Blog_Vehicle-Damage-Detection-Using-Machine-Learning.jpg" 
                          alt="..." />
                    <div className="year">3</div>
                </div>
                <div className="timeline-box one-of-two">
                <h3 className='text-center'>Healthcare Diagnosis</h3>
                    <img  className="service-card-img-top" 
                          src="https://www.edureka.co/blog/wp-content/uploads/2019/06/Artificial-Intelligence-In-Medical-Diagnosis.jpg" 
                          alt="..." />
                    <div className="year">4</div>
                </div>
                <div className="timeline-box one-of-two">
                <h3 className='text-center'>Industrial Automation</h3>
                    <img  className="service-card-img-top" 
                          src="https://emerj.com/wp-content/uploads/2018/10/industrial-auto-2.jpg" 
                          alt="..." />
                    <div className="year">5</div>
                </div>
                <div className="timeline-box one-of-two">
                <h3 className='text-center'>Personalized Product Recommendations</h3>
                    <img  className="service-card-img-top" 
                          src="https://www.dynamicyield.com/wp-content/uploads/2016/07/multiple-recommendation-strategies-illustration@x2.jpg" 
                          alt="..." />
                    <div className="year">6</div>
                </div>
                </div>
            </div>
        </div>
    </section>
    <section className='component--3up'>
        <div>
            <h1>We stand by our clients every step of the way.</h1>
            <div className='component--3up__items'>
            <div className="component--3up__item rhythm--small">
                <h4 className="heading-4">Design</h4>
                <div className='service-1'>
                    <p>We work closely with your team to understand your business goals, challenges and requirements to design a customized AI solution that meets your specific needs.</p>
                </div>
            </div>
            <div className="component--3up__item rhythm--small">
                <h4 className="heading-4">Data Ingestion</h4>
                <div className='service-1'>
                    <p>Our data ingestion solution is scalable and can handle large volumes of data, ensuring that you can continue to leverage data-driven insights as your business grows.</p>
                </div>
            </div>
            <div className="component--3up__item rhythm--small">
                <h4 className="heading-4">Model Training</h4>
                <div className='service-1'>
                    <p>We offer a scalable Model Training service that can accommodate large data volumes and complex model architectures, ensuring that your AI models remain efficient and effective as your business expands.</p>
                </div>
            </div> 
            <div className="component--3up__item rhythm--small">
                <h4 className="heading-4">Model Deployment</h4>
                <div className='service-1'>
                    <p>We provide continuous monitoring of your machine learning models to ensure that they are performing as expected and to identify and address any issues that may arise.</p>
                </div>
            </div>
            </div>
        </div>
    </section>
    </div>
    
  );
}

export default ServiceMain;


