import React from 'react';
import styles from './NavigationDesktopComponent.module.scss';

const NavigationDesktop = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.row}>
          {/* Logo Section */}
          <div className={styles.logoSection}>
            <div className={styles.logo}>
              <a href="index.html">
                <img src="img/logo.webp" alt="EDUCAT" />
              </a>
            </div>
          </div>

          {/* Main Menu & Search Section */}
          <div className={styles.menuSection}>
            <div className={styles.mainMenuArea}>
              <nav className={styles.mainMenu}>
                <ul className={styles.nav}>
                  <li className={styles.current}>
                    <a href="index.html">Home</a>
                    <ul className={styles.subMenu}>
                      <li>
                        <a href="index.html">Home Version 1</a>
                      </li>
                      <li>
                        <a href="index-2.html">Home Version 2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="gallery.html">Gallery</a>
                    <ul className={styles.subMenu}>
                      <li>
                        <a href="gallery.html">Gallery</a>
                      </li>
                      <li>
                        <a href="gallery-2.html">Gallery Filtaring</a>
                      </li>
                      <li>
                        <a href="gallery-four-column.html">Gallery Four Column</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="course.html">Courses</a>
                    <ul className={styles.subMenu}>
                      <li>
                        <a href="courses-details.html">Courses Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Features</a>
                    <ul className={styles.subMenu}>
                      <li>
                        <a href="#">
                          Blog <i className={styles.chevron}>{/* Icon placeholder */}</i>
                        </a>
                        <ul className={styles.insideMenu}>
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                          <li>
                            <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                          </li>
                          <li>
                            <a href="blog-no-sidebar.html">Blog No Sidebar</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          Shop <i className={styles.chevron}>{/* Icon placeholder */}</i>
                        </a>
                        <ul className={styles.insideMenu}>
                          <li>
                            <a href="shop.html">Shop</a>
                          </li>
                          <li>
                            <a href="single-product.html">Single Product</a>
                          </li>
                          <li>
                            <a href="cart.html">Shopping Cart</a>
                          </li>
                          <li>
                            <a href="wishlist.html">Wishlist</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout</a>
                          </li>
                          <li>
                            <a href="login-register.html">Login - Register</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="index.html">Pages</a>
                    <ul className={styles.subMenu}>
                      <li>
                        <a href="team-details.html">Team Details</a>
                      </li>
                      <li>
                        <a href="course.html">Courses Page</a>
                      </li>
                      <li>
                        <a href="courses-details.html">Course Details Page</a>
                      </li>
                      <li>
                        <a href="event.html">Event Page</a>
                      </li>
                      <li>
                        <a href="event-details.html">Event Details Page</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog Details Page</a>
                      </li>
                      <li>
                        <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-no-sidebar.html">Blog No Sidebar</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Wishlist Page</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout Page</a>
                      </li>
                      <li>
                        <a href="cart.html">Shopping Cart Page</a>
                      </li>
                      <li>
                        <a href="login-register.html">Login Page</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                      <li>
                        <a href="404.html">404 Error</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="shop.html">Shop</a>
                    <ul className={styles.subMenu}>
                      <li>
                        <a href="single-product.html">Single Product Page</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </nav>

              {/* Search Icon/Button */}
              <ul className={styles.headerSearch}>
                <li className={styles.searchMenu}>
                  Search
                  {/* <button type="button" onClick={() => {}}>
                    <i className={styles.searchIcon}></i>
                  </button> */}
                </li>
              </ul>

              {/* Search Form */}
              <div className={styles.search}>
                <div className={styles.searchForm}>
                  <form action="#">
                    <input type="search" placeholder="Search here..." name="search" />
                    <button type="submit">
                      <span>
                        <i className={styles.searchIcon}>{/* Search icon placeholder */}</i>
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationDesktop;
