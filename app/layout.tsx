"use client";

// import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Menu, Button } from "@mantine/core";
import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/carousel/styles.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { GrLocation, GrMailOption } from "react-icons/gr";
import { PiPhoneCallLight } from "react-icons/pi";
import Image from "next/image";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import NotificationIcon from "@/components/home/notification-icon";
import LoveIcon from "@/components/home/love-icon";
import classes from "@/components/home/login.module.css";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import ModalProvider from "@/components/provider/modal-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import { GiHamburgerMenu } from "react-icons/gi";
import HamburgerMenu from "@/components/common/hamburger-menu";

const inter = Inter({
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});

const navArray = [
  { name: "Home", link: "/", dropDown: <IoIosArrowDown /> },
  { name: "Resources", link: "/resources", dropDown: <IoIosArrowDown /> },
  {
    name: "Mentors",
    link: "/mentors",
    dropDown: (
      <span className="">
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <span>
              <IoIosArrowDown />
            </span>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item>
              <Link href="./mentors/requests">
                <p className=" text-[14px] text-black font-normal z-50 cursor-pointer p-1 hover:bg-slate-300">
                  Mentorship requests
                </p>
              </Link>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </span>
    ),
  },

  { name: "Blog", link: "" },
  { name: "Messages", link: "/messages" },
];

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={poppins.className}>
        <MantineProvider>
          <ModalProvider>
            <Toaster />
            <QueryClientProvider client={queryClient}>
              <main>
                <header className=" py-[11px] bg-purple text-white">
                  <div className="flex max-w-[1400px] mx-auto px-4 justify-between items-center">
                    <section className=" flex items-center gap-[clamp(0.9rem,2vw,1.8rem)] ">
                      <div className=" flex  gap-[10px] items-center ">
                        <GrLocation color="#DAD4FF" size={20} className="" />

                        <p
                          className={`${poppins.className} text-creame text-[14px] font-medium`}
                        >
                          123 Str., Lagos, Nigeria
                        </p>
                      </div>

                      <div className=" flex items-center gap-[9.6px]">
                        <GrMailOption
                          color="#DAD4FF"
                          className="max-[550px]:hidden"
                        />
                        <p
                          className={`${poppins.className} text-creame text-[14px] font-medium max-[550px]:hidden`}
                        >
                          info@pathfinders.com
                        </p>
                      </div>
                    </section>
                    <section className="flex items-center gap-[1.18rem]">
                      <div className=" flex items-center gap-[9.6px]">
                        <PiPhoneCallLight
                          color="#DAD4FF"
                          size={20}
                          className="max-[550px]:hidden "
                        />
                        <p
                          className={`${poppins.className} text-creame text-[14px] font-medium max-[610px]:hidden`}
                        >
                          Call us:
                        </p>
                        <p
                          className={`${poppins.className} text-creame text-[14px] font-medium max-[550px]:hidden`}
                        >
                          234 801234567
                        </p>
                      </div>

                      <div className=" flex gap-[9.6px] items-center max-[883px]:hidden max-[550px]:flex">
                        <p className=" text-[#DAD4FF] text-[14px] font-medium max-[550px]:hidden">
                          Follow Us On :
                        </p>
                        <article className=" flex gap-[9.6px]">
                          <FaFacebookF color="#E7EFFC" size={16} />
                          <FaTwitter color="#E7EFFC" size={16} />
                          <FaWhatsapp color="#E7EFFC" size={18} />
                          <FaLinkedinIn color="#E7EFFC" size={16} />
                          <FaYoutube color="#E7EFFC" size={16} />
                        </article>
                      </div>
                    </section>
                  </div>
                </header>
                <nav className="py-[11px] sticky top-0 bg-white w-full z-10">
                  <div className="flex items-center max-w-[1400px] mx-auto px-4 justify-between">
                    <section className=" flex gap-[clamp(2.5rem,5.9vw,5.3rem)] items-center">
                      <figure className=" w-[clamp(2.7rem,4.4vw,4.4rem)] h-[clamp(2.7rem,4.4vw,4.4rem)]">
                        <Image
                          className="!h-full !w-full"
                          src="/logo.svg"
                          width={100}
                          height={0}
                          alt="logo"
                        />
                      </figure>

                      <div className=" flex justify-between gap-[clamp(14px,1.8vw,27px)] max-[738px]:hidden">
                        {navArray.map((item, index) => (
                          <div className=" flex gap-[10px] ">
                            <Link
                              key={index}
                              href={item.link}
                              className=" flex items-center cursor-pointer"
                            >
                              <p className=" text-[#161439] font-medium text-base  hover:text-purple">
                                {item.name}
                              </p>
                            </Link>
                            <span className="pt-3  cursor-pointer ">
                              {/* <IoIosArrowDown /> */}
                              {item.dropDown}
                            </span>
                          </div>
                        ))}
                      </div>
                    </section>
                    <section className=" flex gap-6 items-center ">
                      <div className="flex border-[#8D9DB5] h-12 px-[9px] border items-center rounded-[50px] min-w-[120px] w-[80%] overflow-hidden  max-[1275px]:hidden">
                        <article className=" flex gap-[10px] items-center">
                          <TbCategoryPlus color="#7630F7" />
                          <p className=" text-black text-[14px] font-medium">
                            Categories
                          </p>
                          <MdOutlineKeyboardArrowDown />
                        </article>
                        <input
                          type="text"
                          placeholder="Search For Mentors . . ."
                          className="border-none outline-none placeholder:text-[14px] placeholder:text-[#8D9DB5] placeholder:font-normal border-l"
                        />
                      </div>

                      <div className=" flex items-center gap-[clamp(15px,2vw,29px)]">
                        <article className=" flex gap-[29px]">
                          <div className=" gap-[14px] flex items-center  ">
                            {/* <article className=" hidden relative max-[735px]:flex ">
                              <div
                                className=" flex rounded-full bg-purple items-center justify-center p-[4px] w-[25px] h-[25px] absolute left-[21px] bottom-[29px]
    "
                              >
                                <p className=" text-white">0</p>
                              </div>

                              <span>
                              <GiHamburgerMenu
                                size={24}
                                className="cursor-pointer"
                              />
                              <LoveIcon />
                              </span>
                            </article> */}
                            {/* <div className=" hidden max-[735px]:flex  ">
                              <Menu shadow="md" width={200}>
                                <Menu.Target>
                                  <span>
                                  <GiHamburgerMenu
                                size={24}
                                className="cursor-pointer"
                              />
                                  </span>
                                </Menu.Target>

                                <Menu.Dropdown>
                                  <Menu.Item>
                                    <Link href="./mentors/requests">
                                      <p className=" text-[14px] text-black font-normal z-50 cursor-pointer p-1 hover:bg-slate-300">
                                        Mentorship requests
                                      </p>
                                    </Link>
                                  </Menu.Item>
                                </Menu.Dropdown>
                              </Menu>
                            </div> */}
                             <div className=" hidden max-[735px]:flex  ">
                            <HamburgerMenu/>

                             </div>



                            <Link href="/notification" className=" relative">
                              <div
                                className=" flex rounded-full bg-purple items-center justify-center p-[4px] w-[25px] h-[25px] absolute left-[21px] bottom-[29px]
    "
                              >
                                <p className=" text-white">0</p>
                              </div>

                              <span>
                                <NotificationIcon />
                              </span>
                            </Link>
                          </div>
                        </article>
                        <Link href="/login">
                          <Button
                            style={{
                              height: "40px",
                              borderRadius: "50px",
                              backgroundColor: "#4B0082",
                              color: "#fff",
                              paddingInline: "30px",
                            }}
                          >
                            <span className="font-semibold text-[16px] ">
                              {" "}
                              Log in
                            </span>
                          </Button>
                        </Link>
                      </div>
                    </section>
                  </div>
                </nav>
                {children}
                <footer className="  bg-purple  py-[37px]">
                  <section className=" mx-auto grid grid-cols-4  max-[816px]:grid-cols-3 justify-between px-4 max-w-[1400px]">
                    <div className=" flex flex-col gap-[13px]">
                      <figure className=" w-[clamp(2.7rem,4.4vw,4.4rem)] h-[clamp(2.7rem,4.4vw,4.4rem)]">
                        <Image
                          className="!h-full !w-full"
                          src="/logo.svg"
                          width={100}
                          height={0}
                          alt="logo"
                        />
                      </figure>
                      <article>
                        <p className=" text-[14px] text-[#B2BBCC] font-medium">
                          123 Street, Lagos, Nigeria
                        </p>
                        <p className=" text-[14px] text-[#B2BBCC] font-medium">
                          +234 801234567
                        </p>
                      </article>
                    </div>
                    <div className=" flex flex-col gap-[20px]">
                      <article className=" flex gap-[16px] flex-col">
                        <h2 className=" text-[20px] font-semibold text-white">
                          Useful Links
                        </h2>
                        <div className=" bg-[#5751E1] h-1 w-[30px] rounded-[2px]"></div>
                      </article>
                      <ul className=" flex flex-col gap-[10px] ">
                        <li className=" text-[#B2BBCC] font-medium text-[14px]">
                          {" "}
                          Our values
                        </li>
                        <li className="text-[#B2BBCC] font-medium text-[14px]">
                          {" "}
                          Our advisory board
                        </li>
                        <li className="text-[#B2BBCC] font-medium text-[14px]">
                          Our partners
                        </li>
                        <li className="text-[#B2BBCC] font-medium text-[14px]">
                          Become a partner
                        </li>
                      </ul>
                    </div>
                    <div className=" flex flex-col gap-[20px]">
                      <article className=" flex gap-[16px] flex-col">
                        <h2 className=" text-[20px] font-semibold text-white">
                          Our Company
                        </h2>
                        <div className=" bg-[#5751E1] h-1 w-[30px] rounded-[2px]"></div>
                      </article>
                      <ul className=" flex flex-col gap-[10px] ">
                        <li className=" text-[#B2BBCC] font-medium text-[14px]">
                          Contact Us
                        </li>
                        <li className="text-[#B2BBCC] font-medium text-[14px]">
                          Become Teacher
                        </li>
                        <li className="text-[#B2BBCC] font-medium text-[14px]">
                          Blog
                        </li>
                        <li className="text-[#B2BBCC] font-medium text-[14px]">
                          Instructor
                        </li>
                        <li className="text-[#B2BBCC] font-medium text-[14px]">
                          Events
                        </li>
                      </ul>
                    </div>
                    <div className=" flex flex-col gap-[20px]">
                      <article className=" flex gap-[16px] flex-col">
                        <h2 className=" text-[20px] font-semibold text-white">
                          Get In Touch
                        </h2>
                        <div className=" bg-[#5751E1] h-1 w-[30px] rounded-[2px]"></div>
                      </article>
                      <section className=" flex flex-col gap-[40px]">
                        <article className=" flex flex-col gap-[18p]">
                          <p className=" text-[#B2BBCC] font-medium text-[14px] w-[229px]">
                            We would like to connect with you, follow us on
                          </p>
                        </article>
                        <article className=" flex gap-[9.6px]">
                          <FaFacebookF color="#E7EFFC" size={16} />
                          <FaTwitter color="#E7EFFC" size={16} />
                          <FaWhatsapp color="#E7EFFC" size={18} />
                          <FaLinkedinIn color="#E7EFFC" size={16} />
                          <FaYoutube color="#E7EFFC" size={16} />
                        </article>
                      </section>
                    </div>
                  </section>
                </footer>
                <section className="bg-[#392A48] py-[35px]">
                  <section className="flex items-center max-w-[1400px] px-4 mx-auto justify-between">
                    <p className="text-base leading-7 text-[#8C9AB4]">
                      &copy; 2024 pathfinders.com. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="w-[1px] h-3 bg-[#8C9AB4]" />
                      <p className="text-base leading-7 text-[#8C9AB4]">
                        Privacy Policy
                      </p>
                    </div>
                  </section>
                </section>
              </main>
            </QueryClientProvider>
          </ModalProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
