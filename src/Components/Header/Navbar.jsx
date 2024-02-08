const Navbar = () => {
  return (
    <nav className='fixed z-50 top-0 w-full hidden md:block'>
      <div
        className='flex justify-between items-center gap-10 text-white mx-auto 
        py-3 container bg-white/5 backdrop-blur-lg mt-10 rounded-full px-10'
      >
        <a href='#'>MM</a>
        <ul className='flex items-center text-white gap-10'>
          <li>
            <a
              href='#about'
              className='py-2  hover:bg-white hover:text-background px-4 rounded-full
           duration-150'
            >
              About
            </a>
          </li>
          <li>
            <a
              href='#projects'
              className='py-2  hover:bg-white hover:text-background px-4 rounded-full
           duration-150'
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href='#skills'
              className='py-2 hover:bg-white hover:text-background px-4 rounded-full
           duration-150'
            >
              Skills
            </a>
          </li>
          <li>
            <a href='#contact'>
              <button
                className='px-6 py-2 border-blue-400 rounded-full border font-semibold
             shadow-md shadow-blue-400 hover:bg-white hover:text-black duration-150'
              >
                Contact
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
