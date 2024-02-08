import { stagger, motion, useAnimate, useInView, easeIn } from 'framer-motion';
import { useEffect } from 'react';
import { data } from './data';

const Skills = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    animate('div', isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }, {
      type: easeIn,
      duration: 0.3,

      delay: stagger(0.04),
    });
  }, [isInView]);

  return (
    <section id='skills' className='container mx-auto py-20'>
      <h2 className='text-center mb-2 text-3xl font-semibold text-white'>
        My Skills
      </h2>

      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{
          scaleX: 1,
          transition: {
            duration: 0.5,
          },
        }}
        viewport={{ once: true }}
        className='h-[.2rem] block max-w-lg mx-auto'
        style={{
          background:
            'radial-gradient(circle, rgba(96,165,250,1) 0%, rgba(15,23,42,0.45551631297050066) 100%)',
        }}
      ></motion.span>

      <div
        ref={scope}
        className='mx-auto flex justify-center items-center mt-20 gap-10
         max-w-xl flex-wrap '
      >
        {data.map((skill, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 30 }}>
            <div className='flex justify-center items-center flex-col'>
              <div
                className='bg-blue-100 rounded-full h-20 w-20 p-5
              md:h-28 md:w-28 flex justify-center items-center aspect-square'
              >
                <img
                  src={skill.imgSrc}
                  alt=''
                  className='object-contain block '
                />
              </div>
              <p className='text-white text-center mt-2 '>{skill.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
