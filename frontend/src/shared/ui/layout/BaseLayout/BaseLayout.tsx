import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import { Button } from '@/shared/ui/button';
import { Navbar } from '@/shared/ui/navbar';
import { Drawer } from '@/shared/ui/drawer';
import { Menu } from '@/shared/ui/menu';

import type { BaseLayoutProps } from './type';
import { menuItems } from './constants';

export const BaseLayout = (props: BaseLayoutProps) => {
  const { children } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const toggleOpenMenu = () => setOpenMenu((value) => !value);
  return (
    <>
      <Drawer
        onClose={toggleOpenMenu}
        mobile
        open={openMenu}
        childrenMenu={<Menu open items={menuItems} />}
      >
        <Navbar
          childrenStart={
            <Button
              onClick={toggleOpenMenu}
              type="text"
              className={{
                'lg:hidden': true,
              }}
            >
              {openMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
            </Button>
          }
        />
        {children}
      </Drawer>
    </>
  );
};
