import "./Header.css";
import {
  Button,
  MegaMenu,
  MegaMenuDropdown,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { MdRemoveShoppingCart, MdOutlineShoppingCart } from "react-icons/md";
import { Drawer, DrawerHeader, DrawerItems } from "flowbite-react";
import logo from "./../../assets/logo.jpg";
import { Link, NavLink } from "react-router-dom";
import { IoIosLogIn } from "react-icons/io";
import { FaRegSun, FaRegMoon } from "react-icons/fa";
import React, { useContext, useEffect, useState } from "react";
import { Buytbt } from "./../../hooks/Buyprovider";
import Sellitem from "../Sellitem/Sellitem";

const formatToman = (n) => Number(n || 0).toLocaleString("fa-IR") + " تومان";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, totalCount, totalPrice, isEmpty, clearCart } = useContext(Buytbt);

  // ----- Theme state (localStorage + prefers-color-scheme) -----
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <MegaMenu
        className="
          w-[90%] mx-auto inset-x-0 fixed mt-4 rounded-4xl
          text-[color:var(--text)]
          bg-[color:var(--bg)]
          border border-[color:var(--border)]
        "
      >
        <NavbarBrand href="/">
          <img src={logo} className="ml-3 h-9 sm:h-10 rounded-full" alt="logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold">
            <span className="text-[#f3cf7a]">L</span>lama{" "}
            <span className="text-[#f3cf7a]">Latte</span>
          </span>
        </NavbarBrand>

        <NavbarToggle />

        <NavbarCollapse className="yekan">
          <NavbarLink className="hhvr1" as={NavLink} to="/">
            صفحه اصلی
          </NavbarLink>

          <NavbarLink>
            <MegaMenuDropdown
              toggle={
                <>
                  <span className="hhvr1"> فروشگاه</span>
                </>
              }
            >
              <ul className="grid grid-cols-3 lale">
                <div className="space-y-4 p-4">
                  <li>
                    <a href="#" className="hover:text-gray-900 dark:hover:text-gray-400">
                      قهوه ویژه
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900 dark:hover:text-gray-400">
                      قهوه ویژه جهانی
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900 dark:hover:text-gray-400">
                      قهوه درجه یک
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900 dark:hover:text-gray-400">
                      قهوه تجاری
                    </a>
                  </li>
                </div>
                <div className="space-y-4 p-4">
                  <li>
                    <a href="#" className="hover:text-gray-900 dark:hover:text-gray-400">
                      کپسول قهوه
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900 dark:hover:text-gray-400">
                      قهوه برزیلی
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900 dark:hover:text-gray-400">
                      عربیکا
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900 dark:hover:text-gray-400">
                      قهوه ساز پمپی دیجیتال
                    </a>
                  </li>
                </div>
                <div className="space-y-4 p-4">
                  <li>
                    <a href="#" className="hover:text-gray-900 dark:hover:text-gray-400">
                      قهوه ساز خانگی
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900 dark:hover:text-gray-400">
                      قهوه ساز صنعتی
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900 dark:hover:text-gray-400">
                      موکاپات
                    </a>
                  </li>
                </div>
              </ul>
            </MegaMenuDropdown>
          </NavbarLink>

          <NavbarLink className="hhvr1" as={NavLink} to="/blog">
            بلاگ
          </NavbarLink>
          <NavbarLink className="hhvr1" as={NavLink} to="/aboutus">
            درباره ما
          </NavbarLink>
          <NavbarLink className="hhvr1" as={NavLink} to="/contactus">
            تماس با ما
          </NavbarLink>

          {/* سبد خرید */}
          <NavbarLink className="text-[color:var(--text)]">
            <div className="order-2 hidden items-center md:flex relative">
              <button
                onClick={() => setIsOpen(true)}
                className="ml-3 cursor-pointer hover:text-[#f3cf7a] relative"
                aria-label="سبد خرید"
              >
                <MdOutlineShoppingCart size={"24px"} />
                {totalCount > 0 && (
                  <span className="absolute -top-2 -right-2 text-xs bg-yellow-400 text-black rounded-full px-1 min-w-[18px] text-center">
                    {totalCount}
                  </span>
                )}
              </button>

              <Drawer className="w-[520px]" open={isOpen} onClose={handleClose}>
                <DrawerHeader title="سبد خرید" className="lale" />
                <DrawerItems>
                  {isEmpty ? (
                    <div className="flex flex-col items-center gap-3 py-6 text-[color:var(--text)]">
                      <p className="lale text-2xl">سبد خرید شما خالی می‌باشد</p>
                      <MdRemoveShoppingCart size={"50px"} className="mx-auto" />
                      <Link to={"/auth"}>
                        <div className="absolute right-5 bottom-5 underline-offset-4 hover:text-[#f3cf7a]">
                          ورود به حساب کاربری
                        </div>
                      </Link>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4 mr-[110px] md:mr-0">
                      {Object.values(cart).map((it) => (
                        <Sellitem
                          key={it.id}
                          id={it.id}
                          title={it.title}
                          price={it.price}
                          lprice={it.lprice}
                          img={it.img}
                          desc={it.desc}
                          inCart={true}
                        />
                      ))}

                      <div className="flex items-center justify-between border-t border-[#774e26] pt-4 mt-2">
                        <span className="font-semibold text-[#774e26]">جمع کل:</span>
                        <span className="font-bold text-[#774e26]">{formatToman(totalPrice)}</span>
                      </div>

                      <div className="flex items-center justify-end gap-2">
                        <Button className="cursor-pointer" color="light" onClick={clearCart}>
                          خالی کردن سبد
                        </Button>
                        <Button className="cursor-pointer" color="yellow">
                          تسویه نهایی
                        </Button>
                      </div>
                    </div>
                  )}
                </DrawerItems>
              </Drawer>
            </div>
          </NavbarLink>

          {/* تم روشن/تاریک و ورود */}
          <NavbarLink className="text-[color:var(--text)]">
            <button
              onClick={toggleTheme}
              className="ml-6 cursor-pointer hover:text-[#f3cf7a]"
              aria-label="تغییر تم"
              title="تغییر تم"
            >
              {theme === "dark" ? <FaRegSun size={"20px"} /> : <FaRegMoon size={"20px"} />}
            </button>
          </NavbarLink>

          <NavbarLink className="text-[color:var(--text)]">
            <Link to={"/auth"}>
              <button className="ml-3 flex items-center cursor-pointer hover:text-[#f3cf7a]">
                <IoIosLogIn size={"25px"} className="ml-2" />
                ثبت نام
              </button>
            </Link>
          </NavbarLink>
        </NavbarCollapse>
      </MegaMenu>
    </>
  );
}

export default Header;
