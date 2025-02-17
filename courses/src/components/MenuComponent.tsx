import React from 'react';
import styles from './MenuComponent.module.scss';

type MenuItemFields = {
  id?: { value: string };
  title?: { value: string };
  url?: { value: string; target?: string };
  children?: MenuItemFields[] | { value: MenuItemFields[] } | null;
};

type MenuProps = {
  fields: {
    menuIcon?: { value: string };
    menuItems?: MenuItemFields[] | { value: MenuItemFields[] } | null;
  };
};

const MenuComponent = (props: MenuProps): JSX.Element => {
  const { menuIcon } = props.fields;
  let rawItems = props.fields.menuItems;
  let menuItems: MenuItemFields[] = [];
  if (Array.isArray(rawItems)) {
    menuItems = rawItems;
  } else if (rawItems && typeof rawItems === 'object' && Array.isArray(rawItems.value)) {
    menuItems = rawItems.value;
  }

  if (!menuItems || menuItems.length === 0) {
    return <nav className={styles.nav}><ul className={styles.navList} /></nav>;
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

      const hasChildren = childrenItems && childrenItems.length > 0;
      const titleText = item.title?.value || "Untitled";
      const urlValue = item.url?.value || "#";
      const urlTarget = item.url?.target || "_self";

      return (
        <li key={index} className={styles.menuItem}>
          <a
            href={urlValue}
            target={urlTarget}
            rel={urlTarget === "_blank" ? "noopener noreferrer" : undefined}
            className={styles.menuLink}
          >
            {titleText}
          </a>
          {hasChildren && (
            <ul className={styles.subMenu}>
              {renderMenuItems(childrenItems)}
            </ul>
          )}
        </li>
      );
    });
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.logoSection}>
        <div className={styles.logo}>
          <a href="index.html">
            <img src="img/logo.webp" alt="EDUCAT" />
          </a>
        </div>
      </div>
      {menuIcon && menuIcon.value && (
        <div className={styles.menuIcon}>
          <img src={menuIcon.value} alt="Menu Icon" />
        </div>
      )}
      <ul className={styles.navList}>{renderMenuItems(menuItems)}</ul>
    </div>
  );
};

export default MenuComponent;
