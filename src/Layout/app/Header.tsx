import React from 'react'
import { UserImageURL } from './Const'
import Translate from '../../Components/Utils/Translate'
import { useTranslation } from 'react-i18next'
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { useNavigate } from 'react-router-dom';
import useAuthState from '../../zustand/AuthState';
import { GiHamburgerMenu } from 'react-icons/gi';
import WithDrawer from './WithDrawer';
import Sidebar from './SideBar';
import { Dropdown, type MenuProps } from 'antd';

type TUserData =
  {
    username: string | null,
    role: string | null 
  }


const Header = () => {


  const [t] = useTranslation();
  const navigate = useNavigate()

  const { logout , user} = useAuthState()
  const handelClick = () => {
    logout()
    navigate('/auth')
  }
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div onClick={handelClick}>{t("Log Out")}</div>
      ),
    },
  ];

  
  
  return (
    <div className='Header'>
      <div className='Header_Left'> 
          <WithDrawer
    // title="Cart Item"
      button={ 
          <div className="Cart_Icon">
          <GiHamburgerMenu  />
          </div>
    }
    >
    <Sidebar/>
    </WithDrawer>
      </div>
      <div className='Header_Right'>


        <Dropdown menu={{ items }} placement="bottomLeft">
        <div className='User_Pro'>
            <img className='UNK_User' src={UserImageURL} alt='' width={40} height={40} />

          </div>
      </Dropdown>



      </div>
    </div>
  )
}

export default Header