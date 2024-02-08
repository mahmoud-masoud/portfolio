import { useEffect } from 'react';

const Toast = ({ setVisibility, message }) => {
  useEffect(() => {
    const toastTimer = setTimeout(() => {
      setVisibility(false);
    }, 3000);
    return () => clearTimeout(toastTimer);
  });
  return (
    <div
      className='fixed bottom-8 right-1/2 translate-x-1/2
        flex justify-center items-center
         w-fit py-2 px-4 mt-4 rounded-md bg-white text-background font-medium'
    >
      <span
        onClick={() => setVisibility(false)}
        className='text-2xl mr-2 cursor-pointer'
      >
        &times;
      </span>
      {message}
    </div>
  );
};
export default Toast;
