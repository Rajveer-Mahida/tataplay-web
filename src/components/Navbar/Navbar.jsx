const Navbar = () => {
  return (
    <div className='navbar bg-gray-900 text-white'>
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl'>Tataplat Catchup</a>
      </div>
      <div className='flex-none gap-2'>
        <div className='form-control'>
          <input type='text' placeholder='Search' className='input input-bordered bg-gray-700 w-40 md:w-auto' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
