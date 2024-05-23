import React, { useEffect } from 'react'
import SideBar from './SideBar'
import Header from './Header'

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <>
      <div className="DashboardLayout">
        <div className='DashboardLayout_Cover' >
          <div className='out_Sidebar'>
              <SideBar />

          </div>
          <div className={`DashboardLayout_Body`} id='DashboardLayout_Body'>
            <Header />
            <div className='Layout_Children'>
              {children}
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Layout