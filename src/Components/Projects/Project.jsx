import { motion, useScroll, useTransform } from 'framer-motion';
import ArrowIcon from '../../assets/Icons/ArrowIcon';
import GithubIcon from '../../assets/Icons/GithubIcon';
import { useRef } from 'react';

const Project = ({ img, demoUrl, githubUrl, title, description }) => {
  const projectWrapperRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: projectWrapperRef,
    offset: ['0 1', '1.33 1'],
  });

  const projectScale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const projectOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.section
      ref={projectWrapperRef}
      style={{ opacity: projectOpacity, scale: projectScale }}
      className='flex max-md:flex-col gap-10 '
    >
      <div className='pt-6 md:w-1/2 max-md:order-1'>
        <h3 className='text-2xl md:text-3xl font-medium mb-4 md:mb-6 text-blue-400'>
          {title}
        </h3>
        <p className={` leading-8 text-lg`}>{description}</p>
      </div>
      <div>
        <div
          className='w-full max-w-xl p-4 md:p-6 rounded-xl bg-blue-500/20
         duration-150'
        >
          <img
            src={img}
            alt={title}
            className=' duration-100 max-w-full rounded-lg w-full'
          />
        </div>
        <div className='flex gap-6 mt-6 justify-center items-center'>
          <a
            href={githubUrl}
            target='_blank'
            className='bg-white hover:bg-blue-100 duration-150 rounded-full'
          >
            <GithubIcon />
          </a>
          <a
            href={demoUrl}
            target='_blank'
            className='flex justify-center items-center p-2 group w-14 h-14  rounded-full  duration-150 hover:bg-blue-500
          bg-blue-400 text-white text-lg font-medium'
          >
            <ArrowIcon />
          </a>
        </div>
      </div>
    </motion.section>
  );
};
export default Project;
