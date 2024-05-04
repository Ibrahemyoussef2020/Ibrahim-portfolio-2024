
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { contactImgList, contactTextList } from '../data/contactData';
import { useInView } from 'react-intersection-observer';

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
      <h1 className="logo page-heading">
        CONTACT <span className='spiceal'> ME </span> VIA
      </h1>
      <p className='second-title'>I’M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK OR PARTNERSHIPS</p>
     
     <div className="lists">
      <section className='contact-ul'>
        {
          contactTextList.map(contact =>
            <li key={contact.name} className={`obs trans-right ${isConatctIconVisible ? 'back-to-place' : ''}`}>
              <span>{contact.name}</span>
              <span>
                <a href={contact.sub} target='_blank'>{contact.title}</a>
              </span>
            </li>
        )}
      </section>

      <section className="bull-ul">
        {
          contactImgList.map(contact =>{
            const {toggeClass} = contact;
            console.log(toggeClass);
            return <a
              className={`contact-circle obs ${contact.staticClass} ${isConatctIconVisible ? toggeClass : ''}`}
              key={contact.name} 
              target="_blank"
              ref={conatctIconsRef}
              href={contact.link}>
                  {contact.icon}
            </a>
          }
        )}
      </section>
      </div>

    <div className="lists">

      <div className="form-heading">
        Do not hesitate to write to me via my private email for any Idea
      </div>

    <section className="form-contact">    
    <form 
      ref={formRef} 
      onSubmit={handleSubmitMessage}
      action="https://formsubmit.co/https://formsubmit.co/el/kixuko"
      method="POST"
    >
        
      <div className='input-wrapper'>
        <h3>Enter Your Name *</h3>
        <input type="text" name='name' onChange={e => handleMessageInfoChange(e)} required/>
      </div>
      <div className='input-wrapper'>
        <h3>Enter Your Email *</h3>
        <input type="text" name='email' onChange={e => handleMessageInfoChange(e)} required/>
      </div>
      <div className='input-wrapper'>
        <h3>Enter Msg Title *</h3>
        <input type="text" name='title' onChange={e => handleMessageInfoChange(e)} required/>
      </div>
      <div className='input-wrapper'>
        <h3>Enter Your Phone</h3>
        <input type="text" name='phone' onChange={e => handleMessageInfoChange(e)}/>
      </div>
      <textarea type="text" name='message' onChange={e => handleMessageInfoChange(e)} required>
      </textarea>
      <button type='submit' onClick={handleSubmitMessage}>
        Submit
      </button>
    </form>
    </section> 
    </div>   
    </div>
  )
}

export default Contact