import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useRef } from 'react';
import Spinner from '../../UI/Spinner';
import Toast from './Toast';
import { motion } from 'framer-motion';
const ContactForm = () => {
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const formRef = useRef(null);
  const onSubmit = (e) => {
    setSubmitting(true);
    e.preventDefault();
    emailjs
      .sendForm(
        'service_rqigqob',
        'template_pahp1lz',
        formRef.current,
        '6Vmrn0VzYcs90XJkV'
      )
      .then(
        () => {
          setSubmitting(false);
          setSuccess(true);
        },
        () => {
          setSubmitting(false);
          setError(true);
        }
      );
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
    >
      <form
        ref={formRef}
        onSubmit={onSubmit}
        className='text-white max-w-lg mx-auto p-4'
      >
        <div className='flex flex-col '>
          <input
            required
            name='email'
            type='email'
            id='email'
            placeholder='email'
            className='focus:border-blue-400 border-slate-400 border-2 outline-0 py-3 px-3 
          rounded-xl bg-background text-white text-lg font-medium mb-6'
          />

          <textarea
            required
            name='message'
            type='text'
            id='message'
            placeholder='message...'
            className='focus:border-blue-400 text-white outline-0 p-3
          rounded-xl border-slate-400 border-2 
           text-lg font-medium bg-background min-h-40'
          />
        </div>

        <button
          className='mt-6 h-10 px-8 text-lg font-medium active:scale-90
       bg-blue-500 hover:bg-blue-400 duration-150 text-white rounded-full '
        >
          {submitting ? <Spinner /> : 'Send'}
        </button>

        {success && (
          <Toast
            setVisibility={setSuccess}
            message={'Your message sent successfully.'}
          />
        )}
        {error && (
          <Toast setVisibility={setError} message={'Something went wrong.'} />
        )}
      </form>
    </motion.div>
  );
};
export default ContactForm;
