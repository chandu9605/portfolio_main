import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    console.log('Sending email...')

    emailjs
      .sendForm('service_ittsjys', 'template_pshpv0l', form.current, '7bbW0PqtBbxi-XePQ')
      .then(
        () => {
          console.log('Email sent successfully')
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        (error) => {
          console.error('Failed to send email:', error)
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <section className='bg-black text-white px-5 py-20 md:py-32' id='contact'>
      <div className="container mx-auto pb-6">
        <div className='project-info md:text-left'>
          <h2 className='text-4xl font-bold mb-5 border-b-[4px] w-[180px] border-teal-500 pb-2'>
            Contact
          </h2>
        </div>
      </div>
      <div className='contactg grid grid-cols-2 mx-auto'>
        <div className='contact ml-[230px]'>
          <p className='mr-24 mt-10 text-2xl font-semibold'>Got a <span className='text-teal-500'>question</span>, or just want to say <span className='text-teal-500'>hello</span>? Go ahead.</p>
          <br />
          <p className='text-2xl mb-10 font-semibold'>Feel free to <span className='text-teal-500'>email</span> or <span className='text-teal-500'>call</span> me.</p>
          <h1 className='py-4'>
            <FontAwesomeIcon icon={faEnvelope} color="#37e4db" className="mail-icon pr-3" />
            ontedduchandrahasreddy1997@gmail.com
          </h1>
          <h2>
            <FontAwesomeIcon icon={faPhone} color="#37e4db" className="phone-icon pr-3" />
            +1 (607) 313 0789
          </h2>
          <div className='pt-10'>
            <a href={`${process.env.PUBLIC_URL}/Resume.pdf`} rel="noreferrer" className='font-bold border-2 border-teal-500 px-4 py-2'>Resume</a>
          </div>
        </div>
        <div className="contact-form text-black mt-10">
          <form ref={form} onSubmit={sendEmail}>
            <ul>
              <li className="half mb-10">
                <input className='h-12 w-2/3 rounded-lg pl-4' placeholder="Name" type="text" name="name" required />
              </li>
              <li className="half mb-10">
                <input className='h-12 w-2/3 rounded-lg pl-4' placeholder="Email" type="email" name="email" required />
              </li>
              <li className='half mb-10'>
                <textarea className='h-64 w-2/3 rounded-lg pl-4 pt-4' placeholder="Message" name="message" required></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button border-2 border-teal-500 px-4 py-2 text-white" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
