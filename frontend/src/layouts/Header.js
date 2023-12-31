import React, { Component, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import menuservice from "../services/MenuService";
import MenuItem from "../pages/menu/MenuItem";

function Header() {
    const [menus, setMenus] = useState([]);
    useEffect(function () {
        (async function () {
            await menuservice.getByParentId('mainmenu', 0).then(function (result) {
                setMenus(result.data.menus);
            })
        })();
    }, []);
    return (

        <header>



            <div className="header-main">

                <div className="container">

                    <Link to="#" className="header-logo">

                        <img src={require("../assets/images/logo/logo01.png")} alt="Anon's logo" width={200} height={50} />



                    </Link>

                    <div className="header-search-container">

                        <input type="search" name="search" className="search-field" placeholder="Tìm kiếm" />

                        <button className="search-btn">
                            <ion-icon name="search-outline"></ion-icon>
                        </button>

                    </div>

                    <div className="header-user-actions">
                        <div className="widget-header">
                            <a href="/gio-hang" className="widget-view">
                                <div className="icon-area">
                                    <i className="fa fa-shopping-cart"></i>
                                </div>
                                <span className="count">0</span>
                            </a>
                        </div>
                        {/* <button className="action-btn" >
                                <ion-icon name="bag-handle-outline" ></ion-icon>
                                <span className="count">0</span>
                            </button> */}

                        <div className="dropdown">
                            <div className="widget-header">
                                <a href="#" className="widget-view">
                                    <div className="icon-area">
                                        <i className="fa fa-user"></i>
                                    </div>
                                </a>
                            </div>

                            <div className="dropdown-content">
                                <a className="footer-nav-link" href="/dang-nhap">Đăng nhập</a>
                                <a className="footer-nav-link" href="/dang-ky">Tạo tài khoản</a>
                                <a className="footer-nav-link" href="/tai-khoan">Thông tin tài khoản</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <nav className="desktop-navigation-menu">
            <div className="container">
                    <ul className="desktop-menu-category-list">

                {menus.map(function (menu, index) {
                    return (<MenuItem menu={menu} key={index} />);
                })}
                </ul>

</div>
                {/* <div className="container">

                    <ul className="desktop-menu-category-list">

                        <li className="menu-category">
                            <a href="/" className="menu-title">Trang chủ</a>
                        </li>
                        <li className="menu-category">
                            <a href="#" className="menu-title ">Sản phẩm</a>
                            <ul class="dropdown-list">

                                <li class="dropdown-item">
                                    <a href="/tat-ca-san-pham">Tất cả sản phẩm</a>
                                </li>

                                <li class="dropdown-item">
                                    <a href="#">Sản phẩm theo danh mục</a>
                                </li>

                                <li class="dropdown-item">
                                    <a href="#">Sản phẩm theo thương hiệu</a>
                                </li>



                            </ul>
                        </li>
                        <li className="menu-category">
                            <a href="/gioi-thieu" className="menu-title">Giới thiệu</a>
                        </li>
                        <li className="menu-category">
                            <a href="/tin-tuc" className="menu-title">Tin tức</a>
                        </li>
                        <li className="menu-category">
                            <a href="lien-he" className="menu-title">Liên hệ</a>
                        </li>



                    </ul>

                </div> */}

            </nav>

            {/* <div className="mobile-bottom-navigation">

                    <button className="action-btn" data-mobile-menu-open-btn>
                        <ion-icon name="menu-outline"></ion-icon>
                    </button>

                    <button className="action-btn">
                        <ion-icon name="bag-handle-outline"></ion-icon>

                        <span className="count">0</span>
                    </button>

                    <button className="action-btn">
                        <ion-icon name="home-outline"></ion-icon>
                    </button>

                    <button className="action-btn">
                        <ion-icon name="heart-outline"></ion-icon>

                        <span className="count">0</span>
                    </button>

                    <button className="action-btn" data-mobile-menu-open-btn>
                        <ion-icon name="grid-outline"></ion-icon>
                    </button>

                </div> */}

            {/* <nav className="mobile-navigation-menu  has-scrollbar" data-mobile-menu>

                    <div className="menu-top">
                        <h2 className="menu-title">Menu</h2>

                        <button className="menu-close-btn" data-mobile-menu-close-btn>
                            <ion-icon name="close-outline"></ion-icon>
                        </button>
                    </div>

                    <ul className="mobile-menu-category-list">

                        <li className="menu-category">
                            <a href="#" className="menu-title">Home</a>
                        </li>

                        <li className="menu-category">

                            <button className="accordion-menu" data-accordion-btn>
                                <p className="menu-title">Men's</p>

                                <div>
                                    <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                    <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                                </div>
                            </button>

                            <ul className="submenu-category-list" data-accordion>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Shirt</a>
                                </li>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Shorts & Jeans</a>
                                </li>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Safety Shoes</a>
                                </li>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Wallet</a>
                                </li>

                            </ul>

                        </li>

                        <li className="menu-category">

                            <button className="accordion-menu" data-accordion-btn>
                                <p className="menu-title">Women's</p>

                                <div>
                                    <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                    <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                                </div>
                            </button>

                            <ul className="submenu-category-list" data-accordion>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Dress & Frock</a>
                                </li>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Earrings</a>
                                </li>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Necklace</a>
                                </li>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Makeup Kit</a>
                                </li>

                            </ul>

                        </li>

                        <li className="menu-category">

                            <button className="accordion-menu" data-accordion-btn>
                                <p className="menu-title">Jewelry</p>

                                <div>
                                    <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                    <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                                </div>
                            </button>

                            <ul className="submenu-category-list" data-accordion>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Earrings</a>
                                </li>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Couple Rings</a>
                                </li>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Necklace</a>
                                </li>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Bracelets</a>
                                </li>

                            </ul>

                        </li>

                        <li className="menu-category">

                            <button className="accordion-menu" data-accordion-btn>
                                <p className="menu-title">Perfume</p>

                                <div>
                                    <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                    <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                                </div>
                            </button>

                            <ul className="submenu-category-list" data-accordion>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Clothes Perfume</a>
                                </li>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Deodorant</a>
                                </li>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Flower Fragrance</a>
                                </li>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Air Freshener</a>
                                </li>

                            </ul>

                        </li>

                        <li className="menu-category">
                            <a href="#" className="menu-title">Blog</a>
                        </li>

                        <li className="menu-category">
                            <a href="#" className="menu-title">Hot Offers</a>
                        </li>

                    </ul>

                    <div className="menu-bottom">

                        <ul className="menu-category-list">

                            <li className="menu-category">

                                <button className="accordion-menu" data-accordion-btn>
                                    <p className="menu-title">Language</p>

                                    <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
                                </button>

                                <ul className="submenu-category-list" data-accordion>

                                    <li className="submenu-category">
                                        <a href="#" className="submenu-title">English</a>
                                    </li>

                                    <li className="submenu-category">
                                        <a href="#" className="submenu-title">Espa&ntilde;ol</a>
                                    </li>

                                    <li className="submenu-category">
                                        <a href="#" className="submenu-title">Fren&ccedil;h</a>
                                    </li>

                                </ul>

                            </li>

                            <li className="menu-category">
                                <button className="accordion-menu" data-accordion-btn>
                                    <p className="menu-title">Currency</p>
                                    <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
                                </button>

                                <ul className="submenu-category-list" data-accordion>
                                    <li className="submenu-category">
                                        <a href="#" className="submenu-title">USD $</a>
                                    </li>

                                    <li className="submenu-category">
                                        <a href="#" className="submenu-title">EUR &euro;</a>
                                    </li>
                                </ul>
                            </li>

                        </ul>

                        <ul className="menu-social-container">

                            <li>
                                <a href="#" className="social-link">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </a>
                            </li>

                        </ul>

                    </div>

                </nav> */}

        </header>

    );
}

export default Header;