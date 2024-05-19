
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { contactImgList, contactTextList } from '../data/contactData';
import { useInView } from 'react-intersection-observer';
import { SocialBar } from '../components';

const Contact = () => {
  const { ref:conatctIconsRef, inView:isConatctIconVisible} = useInView({triggerOnce:true}); 
  const { ref:conatctTextRef, inView:isConatctTextVisible} = useInView({triggerOnce:true}); 

  const [messageInfo , setMessageInfo] = useState({
    name:'',
    email:'',
    title:'',
    message:'',
    phone:''
  });

  const formRef = useRef()


  const handleMessageInfoChange = (e)=>{
    const {name,value} = e.target;

    setMessageInfo({
      ...messageInfo,
      [name]:value
    })
  }

  const handleSubmitMessage = (e)=> {
    e.preventDefault();
    emailjs.sendForm("service_mkjlzsd" , "template_4woy2un" , formRef.current , "fCTfbPOww761oArPb")
    formRef.current.reset()
  }

  return (
    <div className="contact">
      <div className="container">
        <h1 className="logo page-heading mb-1">
          Get In <span className='spiceal'> Touch </span> 
        </h1>
        <p className='text-center'>
          I’M <span>ALWAYS OPEN TO DISCUSS PRODUCT DESIGN WORK OR PARTNERSHIPS</span>
        </p>
      
        <div className='contact__content center-around'>
          
          <div className="contact__info flex-1">
            <h2>contact <span>information</span></h2>
            <p>
              You can find me via all these soical for hiring or freelancing work, or send me mail via form.
            </p>

            <div className='contact__list'>
              <a target='_blank' rel="noopener" href='https://mailto:ibrahimYoussef95.12@gmail.com' className='contact-item'>
                  <div className='flex-center'>
                    <i className="fa-regular fa-envelope"></i>
                  </div>
                  <div>
                    <h3>Email</h3>
                    <p>ibrahimYoussef95.12@gmail</p>
                  </div>
              </a>
              <a  target='_blank' rel="noopener" href='tel:01147359396' className='contact-item'>
                  <div className='flex-center'>
                    <i className="fa-solid fa-mobile-screen-button"></i>
                  </div>
                  <div>
                    <h3>Phone</h3>
                    <p>01147359396</p>
                  </div>
              </a>
              <div className='contact-item'>
                  <div className='flex-center'>
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <h3>Residence</h3>
                    <p>Egypt, Cairo</p>
                  </div>
              </div>
            </div>

            <h3> 
              <i className="fa-solid fa-user"></i>
              <span>Visit my social profiles and get contact </span>
            </h3>

            <SocialBar />
          
          </div>

          <div className="contact__form flex-1 form-contact">
            <h2>Just message <span>me</span></h2>     
              <form 
                ref={formRef} 
                onSubmit={handleSubmitMessage}
                action="https://formsubmit.co/https://formsubmit.co/el/kixuko"
                method="POST"
              >
                
              <div className='input-wrapper'>
                <label htmlFor='name'>Enter Your Name *</label>
                <input type="text" id='name' name='name' onChange={e => handleMessageInfoChange(e)} required/>
              </div>
              <div className='input-wrapper'>
                <label htmlFor='email'>Enter Your Email *</label>
                <input type="text" id='email' name='email' onChange={e => handleMessageInfoChange(e)} required/>
              </div>
              <div className='input-wrapper'>
                <label htmlFor='title'>Enter Msg Title *</label>
                <input type="text" id='title' name='title' onChange={e => handleMessageInfoChange(e)} required/>
              </div>
              <div className='input-wrapper'>
                <label htmlFor='phone'>Enter Your Phone</label>
                <input type="text" id='phone' name='phone' onChange={e => handleMessageInfoChange(e)}/>
              </div>
              <textarea type="text" id='message' name='message' onChange={e => handleMessageInfoChange(e)} required>
              </textarea>
              <button type='submit' onClick={handleSubmitMessage}>
                Submit
              </button>
            </form>
          </div> 

        </div>  
      </div>
    </div>
  )
}

export default Contact