import React from 'react'

const Saidbar = () => {
  return (
    <div>
      <div className='flex w-2/12'>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-full p-4">
            <li>
             <Link to={"dashbord"}><img className='w-10 h-15' src="dashbord.png" alt="" />  Dashboard</Link>
               
              </li>
            <li><Link to={"salory"}><img className='w-10 text-white' src="user.png" alt="" /> Salary</Link></li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Saidbar
