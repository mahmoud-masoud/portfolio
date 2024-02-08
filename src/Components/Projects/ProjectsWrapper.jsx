import Wrapper from '../../UI/Wrapper';
import Project from './Project';

import { data } from './data';

const ProjectsWrapper = () => {
  return (
    <Wrapper>
      <div id='projects' className='text-white py-10 md:py-20 px-4'>
        <h2 className='font-semibold text-center mb-10 md:mb-20 text-3xl'>
          Some of my last work
        </h2>

        <div>
          {data.map((project, index) => {
            return (
              <div
                key={index}
                className='border-b border-slate-700 py-16 last:border-none'
              >
                <Project
                  description={project.description}
                  img={project.imgSrc}
                  title={project.title}
                  githubUrl={project.githubUrl}
                  demoUrl={project.demoUrl}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
export default ProjectsWrapper;
