import React, { useState } from 'react';
import styles from './MobileMenuComponent.module.scss';

type MenuItemFields = {
  id?: { value: string };
  title?: { value: string };
  url?: { value: string; target?: string };
  children?: MenuItemFields[] | { value: MenuItemFields[] } | null;
};

type MobileMenuProps = {
  fields: {
    menuIcon?: { value: string };
    menuItems?: MenuItemFields[] | { value: MenuItemFields[] } | null;
  };
};

const MobileMenuComponent = (props: MobileMenuProps): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log('MobileMenuComponent props:', props);

  const toggleMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };

  let rawItems = props.fields.menuItems;
  let menuItems: MenuItemFields[] = [];
  if (Array.isArray(rawItems)) {
    menuItems = rawItems;
  } else if (rawItems && typeof rawItems === 'object' && Array.isArray(rawItems.value)) {
    menuItems = rawItems.value;
  }

  const renderMenuItems = (items: MenuItemFields[]): JSX.Element[] => {
    return items.map((item, index) => {
      let rawChildren = item.children;
      let childrenItems: MenuItemFields[] = [];
      if (Array.isArray(rawChildren)) {
        childrenItems = rawChildren;
      } else if (rawChildren && typeof rawChildren === 'object' && Array.isArray(rawChildren.value)) {
        childrenItems = rawChildren.value;
      }
      const hasChildren = childrenItems.length > 0;
      const titleText = item.title?.value || "Untitled";
      const urlValue = item.url?.value || "#";
      const urlTarget = item.url?.target || "_self";

      return (
        <li key={index} className={styles.menuItem}>
          <a href={urlValue} target={urlTarget} className={styles.menuLink}>
            {titleText}
          </a>
          {hasChildren && (
            <>
              <a href="#" className={styles.meanExpand} onClick={(e) => e.preventDefault()}>
                +
              </a>
              <ul className={styles.subMenu}>{renderMenuItems(childrenItems)}</ul>
            </>
          )}
        </li>
      );
    });
  };

  return (
    <div className={styles.mobileMenuArea}>
      <div className={`${styles.container} ${styles.meanContainer}`}>
        <div className={styles.meanBar}>
          <a 
            href="#nav" 
            className={styles.meanmenuReveal} 
            onClick={toggleMenu}
            style={{ fontSize: '18px', textAlign: 'center' }}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
          <nav className={styles.meanNav} style={{ display: menuOpen ? 'block' : 'none' }}>
            <ul>{renderMenuItems(menuItems)}</ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuComponent;
