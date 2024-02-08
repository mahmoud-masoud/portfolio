import { motion } from 'framer-motion';
import Wrapper from '../../UI/Wrapper';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id='contact' className='py-32'>
      <Wrapper>
        <h2 className='text-center mb-6 text-3xl font-semibold text-white'>
          Get In Touch
        </h2>
        <p className='text-white text-lg text-center mb-6 p-4'>
          You can directly send me an
          <a
            href='mailto:mahmoudmasoud0000@gmail.com'
            className='inline-flex mx-2 text-amber-500 hover:text-amber-400 font-bold'
          >
            email
          </a>
          or via this form
        </p>
        <ContactForm />
      </Wrapper>
    </section>
  );
};
export default Contact;
