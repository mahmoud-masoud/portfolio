const Spinner = () => {
  return (
    <div className='w-full flex justify-center items-center'>
      <div
        className='rounded-full animate-spin-fast h-7 w-7 bg-transparent
        border-[2.5px] border-l-white border-b-white border-background'
      ></div>
    </div>
  );
};
export default Spinner;
