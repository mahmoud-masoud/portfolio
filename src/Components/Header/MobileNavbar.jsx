import { useState } from 'react';
import Bars from '../../assets/Icons/Bars';
import { AnimatePresence, motion } from 'framer-motion';

const navbarVariants = {
  initial: { scaleY: 0 },
  animate: {
    scaleY: 1,
    transition: {
      ease: [0.6, -0.05, 0.01, 0.9],
      duration: 0.4,
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      ease: [0.25, 0.46, 0.45, 0.94],
      duration: 0.4,
    },
  },
};

const navLinksVariants = {
  initial: { y: 300, transition: { duration: 0.4 } },

  animate: { y: 0, transition: { duration: 0.4 } },
};

const listVariants = {
  initial: {
    opacity: 0,
    transition: { staggerChildren: 0.09, staggerDirection: -1 },
  },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.09,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const navLinks = [
  { title: 'Projects', url: '#projects' },
  { title: 'Skills', url: '#skills' },
  { title: 'Contact', url: '#contact' },
  { title: 'About me', url: '#about' },
];

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='fixed z-50 top-0 w-full md:hidden'>
      <div className='bg-white/5 backdrop-blur-lg py-2 px-4'>
        <div className='flex justify-between items-center'>
          <a href='#' className='text-white font-bold'>
            MM
          </a>
          <div className='flex items-center '>
            <button
              className='px-6 py-2 text-white border-blue-400 rounded-full border font-semibold
             shadow-md shadow-blue-400 hover:bg-white hover:text-black duration-150'
            >
              <a href='#'>Contact</a>
            </button>
            <button onClick={() => setIsOpen(!isOpen)}>
              <div className='h-[60px] w-[60px]'>
                <div className='relative w-full h-full'>
                  <span
                    className={`${
                      isOpen ? 'rotate-45 top-[30.5px]' : 'rotate-0 top-[25px]'
                    } h-0.5 w-8 bg-gray-300 absolute  right-[14px] rounded-full duration-150`}
                  ></span>
                  <span
                    className={`${
                      isOpen ? '-rotate-45 top-[30.5px]' : 'rotate-0 top-[35px]'
                    } h-0.5 w-8 bg-gray-300 absolute  right-[14px] rounded-full duration-150`}
                  ></span>
                </div>
              </div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  variants={navbarVariants}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                  className='absolute right-0 top-full origin-top h-screen w-screen
                   bg-background text-white'
                >
                  <motion.ul
                    variants={listVariants}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    className='flex justify-center items-center flex-col pt-52 gap-4'
                  >
                    {navLinks.map((link, index) => {
                      return (
                        <li
                          key={index}
                          className='text-4xl overflow-hidden p-2'
                        >
                          <motion.div variants={navLinksVariants}>
                            <a
                              className='block'
                              onClick={() => setIsOpen(false)}
                              href={link.url}
                            >
                              {link.title}
                            </a>
                          </motion.div>
                        </li>
                      );
                    })}
                  </motion.ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default MobileNavbar;
