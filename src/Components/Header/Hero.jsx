import Wrapper from '../../UI/Wrapper';

const Hero = () => {
  return (
    <Wrapper>
      <div>
        <div className='text-white py-56  flex flex-col p-4 justify-center md:items-center'>
          <div className='max-w-2xl'>
            <div className='mb-5'>
              <p className='text-4xl mb-2 font-thin'>Hi, I'm</p>
              <h1
                className='gradient-name animate-gradient mb-6 text-transparent text-6xl font-medium
              '
              >
                Mahmoud Masoud
              </h1>
              <div className='text-lg'>
                <p>Frontend developer specializing in React.js</p>
              </div>
            </div>
          </div>
          <a href='#contact'>
            <button
              className='mt-16 bg-blue-500 max-w-fit font-semibold
           text-wight text-xl py-2.5 px-8 rounded-md hover:bg-blue-600 duration-150'
            >
              Get in touch
            </button>
          </a>
        </div>
      </div>
    </Wrapper>
  );
};
export default Hero;
