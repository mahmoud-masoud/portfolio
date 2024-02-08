import { motion } from 'framer-motion';

const ArrowIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-6 h-6 stroke-[2.5px] group-hover:translate-x-4
       group-hover:scale-125 group-hover:-translate-y-4
       duration-150 group-hover:-rotate-45'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
      />
    </svg>
  );
};
export default ArrowIcon;
