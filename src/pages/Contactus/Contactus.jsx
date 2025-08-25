import Header from "../../components/header/Header"
import mapshoab from './../../assets/map.png'
import { Button, Card } from "flowbite-react";
import { Label, Modal, ModalBody, ModalHeader, TextInput } from "flowbite-react";
import { useState } from "react";
import { Banner, BannerCollapseButton } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { MdAnnouncement } from "react-icons/md";
import { Spinner } from "flowbite-react";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Footeer from "../../components/Footer/Footer";
function Contactus() {
    const [openModal, setOpenModal] = useState(false);
    return (

        <>
            <div className="relative w-full h-screen bg-[url(./assets/conectus.jpg)] bg-cover bg-center">
                <div className="relative z-10">
                    <Header />
                </div>
                <div className="relative z-0 flex flex-col items-center justify-center h-full text-center  text-white space-y-6 px-4">
                    <h1 className="text-9xl font-bold lale mt-[250px]">تماس با ما</h1>
                </div>
            </div>
            <h2 className="lale text-3xl mt-5 pr-10 pt-5 relative after:content-[''] after:block after:w-55 after:h-1 after:bg-[#f3cf7a] after:absolute after:-bottom-2 after:right-10">شعبه های ما در سرار کشور </h2>
            <img className="md:w-[60%] h-[560px] mx-auto mt-20 rounded-2xl" src={mapshoab} alt="" />
            <div className="flex flex-col md:flex-row items-center justify-around g-3 mt-10 p-5 ">
                <Card className="max-w-sm">
                    <h5 className=" lale text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        سفارش آنلاین
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 yekan">
                        همین حالا سفارشت رو در اسنپ فود ثبت کن و وضعیتش رو لحظه‌ای پیگیری کن.
                    </p>
                    <Button className="lale bg-[#f3cf7a] hover:opacity-90 cursor-pointer hover:bg-[#f3cf7a]">
                        اتصال به اسنپ فود
                    </Button>
                </Card>
                <Card className="max-w-sm">
                    <h5 className=" lale text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        همکاری و اعطای نمایندگی
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 yekan">
                        اگر دنبال توسعه کسب‌وکارید، فرم همکاری رو پر کنید تا شرایط راه‌اندازی شعبه رو براتون ارسال کنیم.
                    </p>
                    <Button onClick={() => setOpenModal(true)} className="lale bg-[#f3cf7a] hover:opacity-90 cursor-pointer hover:bg-[#f3cf7a]">
                        درخواست همکاری
                    </Button>
                    <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)}>
                        <ModalHeader />
                        <ModalBody>
                            <div className="space-y-6">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white lale mx-auto  ">اطلاعات شما </h3>
                                <div>
                                    <div className="mb-2 block">
                                        <Label className="lale">ایمیل شما</Label>
                                    </div>
                                    <TextInput id="email" placeholder="name@company.com" className="yekan" required />
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label className="lale">َشماره موبایل </Label>
                                    </div>
                                    <TextInput id="number" className="yekan" type="number" required />
                                </div>
                                <div className="w-full ">
                                    <Button onClick={() => setOpenModal(false)} className="mx-auto lale bg-[#f3cf7a] hover:opacity-90 cursor-pointer hover:bg-[#f3cf7a] text-black">ارسال</Button>
                                </div>
                            </div>
                        </ModalBody>
                    </Modal>
                </Card>
                <Card className="max-w-sm">
                    <h5 className="lale text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        پشتیبانی و خدمات مشتریان
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 yekan">
                        سوال، انتقاد یا مشکل داری؟ تیم پشتیبانی ما پاسخگوست.
                    </p>
                    <Button className="lale bg-[#f3cf7a] hover:opacity-90 cursor-pointer hover:bg-[#f3cf7a]">
                        گفت‌وگو
                    </Button>
                </Card>
            </div>
            <h2 className="lale text-3xl mt-5 pr-10 pt-5 relative after:content-[''] after:block after:w-30 after:h-1 after:bg-[#f3cf7a] after:absolute after:-bottom-2 after:right-10">لوکیشن شعب</h2>
            <main className="container mx-auto px-4 py-8 max-w-6xl">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* ----- تهران، سعادت‌آباد ----- */}
                    <Card className="w-full shadow-lg">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-lg font-semibold lale">سعادت‌آباد، تهران</h2>

                            <div className="text-sm text-gray-600 dark:text-gray-300 yekan">
                                <p>تهران، سعادت‌آباد، بلوار سرو غربی</p>
                                <p>پلاک ۱۲۳، کافی‌شاپ Llamma Latte</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm yekan">
                                <p>
                                    <span className="font-medium">تلفن: </span>
                                    <a href="tel:+982144441122" className="underline">
                                        +98 21 4444 1122
                                    </a>
                                </p>
                                <p>
                                    <span className="font-medium">ساعات کاری: </span>
                                    شنبه تا پنجشنبه 24 ساعته | جمعه 09:30–23:00
                                </p>
                            </div>

                            <div className="mt-2">
                                <div className="w-full h-64 overflow-hidden rounded-xl md:h-72">
                                    <iframe
                                        title="سعادت‌آباد، تهران"
                                        // Saadat Abad approx
                                        src="https://maps.google.com/maps?q=35.781254,51.361903&z=14&output=embed"
                                        className="w-full h-full border-0"
                                        loading="lazy"
                                        allowFullScreen
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card className="w-full shadow-lg">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-lg font-semibold lale"> شیراز</h2>

                            <div className="text-sm text-gray-600 dark:text-gray-300 yekan">
                                <p>شیراز، حوالی میدان شهدا / زند</p>
                                <p>واحد ۲، کافی‌شاپ Llamma Latte</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm yekan">
                                <p>
                                    <span className="font-medium">تلفن: </span>
                                    <a href="tel:+987132223344" className="underline">
                                        +98 71 3222 3344
                                    </a>
                                </p>
                                <p>
                                    <span className="font-medium">ساعات کاری: </span>
                                    هر روز 09:00–23:00
                                </p>
                            </div>

                            <div className="mt-2">
                                <div className="w-full h-64 overflow-hidden rounded-xl md:h-72">
                                    <iframe
                                        title="مرکز شهر شیراز"
                                        // Shiraz center approx
                                        src="https://maps.google.com/maps?q=29.591768,52.583698&z=14&output=embed"
                                        className="w-full h-full border-0"
                                        loading="lazy"
                                        allowFullScreen
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* ----- مشهد ----- */}
                    <Card className="w-full shadow-lg">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-lg font-semibold lale">مشهد</h2>

                            <div className="text-sm text-gray-600 dark:text-gray-300 yekan">
                                <p>مشهد، بلوار احمدآباد</p>
                                <p>پلاک ۵۶، کافی‌شاپ Llamma Latte</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm yekan">
                                <p>
                                    <span className="font-medium yeakn">تلفن: </span>
                                    <a href="tel:+985137658899" className="underline">
                                        +98 51 3765 8899
                                    </a>
                                </p>
                                <p>
                                    <span className="font-medium">ساعات کاری: </span>
                                    هر روز 09:00–23:30
                                </p>
                            </div>

                            <div className="mt-2">
                                <div className="w-full h-64 overflow-hidden rounded-xl md:h-72">
                                    <iframe
                                        title="مشهد"
                                        // Mashhad approx
                                        src="https://maps.google.com/maps?q=36.260462,59.616755&z=14&output=embed"
                                        className="w-full h-full border-0"
                                        loading="lazy"
                                        allowFullScreen
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </main>
            <div className="mx-auto w-full md:w-[70%]">
                <Banner>
                    <div className="flex w-full justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
                        <div className="mx-auto flex items-center">
                            <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                                <Spinner className="ml-4" color="warning" aria-label="Warning spinner example" />
                                <span className="[&_p]:inline lale  md:text-2xl">
                                    به زودی شعبه سوم ما در استان مرکزی شهر اراک
                                    <Spinner className="mr-4" color="warning" aria-label="Warning spinner example" />
                                </span>
                            </p>
                        </div>
                        <BannerCollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
                            <HiX className="h-4 w-4" />
                        </BannerCollapseButton>
                    </div>
                </Banner>
            </div>
            <h2 className="lale text-3xl mt-5 pr-10 pt-5 relative after:content-[''] after:block after:w-60 after:h-1 after:bg-[#f3cf7a] after:absolute after:-bottom-2 after:right-10">ما را در سوشال مدیا دنبال کنید!</h2>
            <div className="flex flex-col  md:flex-row g-2 items-center justify-around mt-10 mb-10">

                <Card href="#" className="max-w-sm  ">
                    <h5 className="mx-auto text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <FaInstagram size={'50px'} className="hover:text-[#f3cf7a]" />
                    </h5>
                    <p className="font-normal  text-gray-700 dark:text-gray-400 lale">
                        ما را در اینستاگرام دنبال کنید
                    </p>
                </Card>
                <Card href="#" className="max-w-sm mt-10">
                    <h5 className="mx-auto text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <FaYoutube size={'50px'} className="hover:text-[#f3cf7a]" />
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 lale">
                        ما را در یوتیوب دنبال کنید
                    </p>
                </Card>
                <Card href="#" className="max-w-sm mt-10">
                    <h5 className="mx-auto text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <FaXTwitter size={'50px'} className="hover:text-[#f3cf7a]" />
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 lale">
                        ما را در ایکس دنبال کنید
                    </p>
                </Card>
                <Card href="#" className="max-w-sm mt-10">
                    <h5 className="mx-auto text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <FaEnvelope size={'50px'} className="hover:text-[#f3cf7a]" />
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 lale">
                        ایمیل لاما لته در گوگل دنبال کنید
                    </p>
                </Card>
            </div>
            <Footeer />
        </>
    )
}
export default Contactus