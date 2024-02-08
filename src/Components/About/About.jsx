import Wrapper from '../../UI/Wrapper';
const About = () => {
  return (
    <section id='about' className='text-lg py-40 px-4'>
      <Wrapper>
        <div className='flex justify-between'>
          <div className='max-w-2xl relative'>
            <h2 className='border-b-2 border-blue-400 mb-10 text-3xl font-semibold text-white'>
              About me
            </h2>

            <p className='text-white text-2xl leading-10 font-light '>
              I'm a frontend developer based in Egypt who enjoys on exploring
              new experiences and experimenting with various interests. I'm
              passionate about staying informed on the latest trends and
              continually expanding my knowledge.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
export default About;
