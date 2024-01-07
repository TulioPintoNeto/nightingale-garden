import { useState, ComponentProps } from 'react';
import ReactModernDrawer from 'react-modern-drawer';
import { DrawerIcon } from './DrawerIcon';
import styles from './styles.module.scss';
import 'react-modern-drawer/dist/index.css';
import { DrawerLink } from './DrawerLink';

type DrawerLinkProps = ComponentProps<typeof DrawerLink>;

type Props = {
  links: Omit<DrawerLinkProps, 'onClick'>[];
};

export const Drawer = ({ links }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const closeDrawer = () => setOpen(false);

  const openDrawer = () => setOpen(true);

  return (
    <>
      <button className={styles.button} onClick={openDrawer}>
        <DrawerIcon />
      </button>
      <ReactModernDrawer open={open} direction={'right'} onClose={closeDrawer}>
        <nav className={styles.drawer}>
          {links.map((linkProps) => (
            <DrawerLink {...linkProps} onClick={closeDrawer} />
          ))}
        </nav>
      </ReactModernDrawer>
    </>
  );
};
