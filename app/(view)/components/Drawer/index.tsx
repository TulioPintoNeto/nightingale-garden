import { createContext, useContext, useState, PropsWithChildren } from 'react';
import ReactModernDrawer from 'react-modern-drawer';
import { DrawerIcon } from './DrawerIcon';
import styles from './styles.module.scss';
import 'react-modern-drawer/dist/index.css';

const DrawerContext = createContext<{ closeDrawer: Function }>({
  closeDrawer: () => {},
});

export const useDrawer = () => useContext(DrawerContext);

type Props = PropsWithChildren;

export const Drawer = ({ children }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const closeDrawer = () => setOpen(false);

  const toggleDrawer = () => setOpen((ps) => !ps);

  return (
    <>
      <button className={styles.button} onClick={toggleDrawer}>
        <DrawerIcon />
      </button>
      <ReactModernDrawer open={open} direction={'right'} onClose={closeDrawer}>
        <DrawerContext.Provider value={{ closeDrawer }}>
          {children}
        </DrawerContext.Provider>
      </ReactModernDrawer>
    </>
  );
};
