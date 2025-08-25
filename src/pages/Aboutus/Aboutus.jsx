
import { Card } from "flowbite-react";
import Header from "../../components/header/Header"
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import about1 from './../../assets/about1.jpg'
import about2 from './../../assets/about2.jpg'
import llama1 from "./../../assets/llama1.jpg"
import llama2 from "./../../assets/llama2.jpg"
import llama3 from "./../../assets/llama3.jpg"
import Footeer from "../../components/Footer/Footer";
function Aboutus() {


    return (
        <>
            <div className="relative w-full h-screen bg-[url(./assets/aboutus.jpg)] bg-cover bg-center">
                <div className="relative z-10">
                    <Header />
                </div>
                <div className="relative z-0 flex flex-col items-center justify-center h-full text-center text-white space-y-6 px-4">
                    <h1 className="text-9xl font-bold lale ">درباره ما</h1>
                </div>
            </div>
            <div className="pt-[100px]">
                <div className="w-full flex flex-col lg:flex-row items-center justify-around gap-3 p-4">
                    <div className="w-full mt-[-60px] lg:w-[50%]">
                        <Accordion>
                            <AccordionPanel>
                                <AccordionTitle className="lale">درباره کافه ما چه چیزی خاص است؟</AccordionTitle>
                                <AccordionContent>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400 yekan">
                                        کافه ما فضایی گرم و صمیمی با ترکیب طراحی مدرن و جزئیات سنتی دارد. عطر قهوه تازه، نور ملایم و موسیقی آرام، محیطی ایده‌آل برای دیدار دوستان یا لحظات خلوت شما فراهم می‌کند.
                                    </p>
                                </AccordionContent>
                            </AccordionPanel>
                            <AccordionPanel>
                                <AccordionTitle className="lale">چه محصولاتی در منو داریم؟</AccordionTitle>
                                <AccordionContent>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400 yekan">
                                        منوی ما شامل انواع قهوه‌های تخصصی، نوشیدنی‌های سرد و گرم، چای‌های گیاهی، اسموتی‌ها و کیک‌های خانگی تازه است که همگی با بهترین مواد اولیه تهیه می‌شوند.
                                    </p>
                                </AccordionContent>
                            </AccordionPanel>
                            <AccordionPanel>
                                <AccordionTitle className="lale">چه خدماتی ارائه می‌دهیم؟</AccordionTitle>
                                <AccordionContent>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400 yekan">
                                        اینترنت پرسرعت، فضای کاری مجهز، برگزاری رویدادهای کوچک و خدمات‌رسانی ۲۴ ساعته بخشی از امکانات ماست تا در هر ساعت شبانه‌روز پذیرای شما باشیم.
                                    </p>
                                </AccordionContent>
                            </AccordionPanel>
                        </Accordion>
                        <Accordion className="mt-[100px]">
                            <AccordionPanel>
                                <AccordionTitle className="lale">چطور قهوه‌هایمان را تازه نگه می‌داریم؟</AccordionTitle>
                                <AccordionContent>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400 yekan">
                                        کافه ما از دانه‌های قهوه تازه و با کیفیت استفاده می‌کند و هر روز به میزان نیاز، قهوه آسیاب می‌شود. این کار تضمین می‌کند که هر فنجان قهوه عطر و طعم بی‌نظیر خود را حفظ کن
                                    </p>
                                </AccordionContent>
                            </AccordionPanel>
                            <AccordionPanel>
                                <AccordionTitle className="lale">آیا امکان سفارش آنلاین داریم؟</AccordionTitle>
                                <AccordionContent>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400 yekan">
                                        بله! شما می‌توانید از طریق وبسایت یا اپلیکیشن ما، سفارش خود را ثبت کنید و قهوه و محصولات دیگر را درب منزل دریافت کنید. همچنین امکان رزرو میز و خرید هدیه‌های ویژه وجود دارد.
                                    </p>
                                </AccordionContent>
                            </AccordionPanel>
                            <AccordionPanel>
                                <AccordionTitle className="lale">چه تجربه‌های خاصی در کافه ارائه می‌دهیم؟</AccordionTitle>
                                <AccordionContent>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400 yekan">
                                        کافه ما علاوه بر نوشیدنی‌های باکیفیت، ورکشاپ‌های قهوه‌سازی، موسیقی زنده در برخی روزها و رویدادهای دوستانه برگزار می‌کند تا لحظات شما در محیطی صمیمی و دلنشین بیشتر به یادماندنی شود.
                                    </p>
                                </AccordionContent>
                            </AccordionPanel>
                        </Accordion>
                    </div>
                    <div className="w-full lg:w-[400px] flex flex-col gap-4 p-3 justify-center items-center">
                        <img className="w-full rounded-2xl" src={about1} alt="" />
                        <img className="w-full rounded-2xl" src={about2} alt="" />
                    </div>
                </div>


                <div className=" w-full  mt-2 p-5 lale text-2xl">
                    <p>کافه « لاما لته »، جایی فراتر از یک محل نوشیدن قهوه، پناهگاهی گرم و دلنشین برای تمام لحظات شبانه‌روز است. این کافه با فضایی مدرن و در عین حال صمیمی، میزبان افرادی است که به دنبال تجربه‌ای متفاوت از طعم و آرامش هستند. نورهای ملایم، موسیقی آرام، و رایحه دل‌انگیز قهوه تازه‌دم، اولین چیزی است که با ورود به اینجا حس می‌کنید.

                        تنوع منو، یکی از شاخصه‌های اصلی کافه است. از انواع قهوه‌های تخصصی مانند اسپرسو، لاته، کاپوچینو و موکا گرفته تا نوشیدنی‌های سرد و تازه مانند اسموتی‌های میوه‌ای، چای‌های گیاهی، و شیک‌های خاص، همه با مواد اولیه درجه یک و به‌روز تهیه می‌شوند. برای دوستداران خوراکی نیز مجموعه‌ای متنوع از کیک‌های تازه، شیرینی‌های خانگی، صبحانه‌های کامل، و میان‌وعده‌های سبک در نظر گرفته شده تا هر سلیقه‌ای را راضی کند.

                        خدمات‌رسانی ۲۴ ساعته این کافه، آن را به پناهگاهی همیشگی برای شب‌بیداران، دانشجویان، مسافران و هر کسی که در ساعات غیرمعمول به دنبال مکانی دنج و آرام است، تبدیل کرده است. چه نیمه‌شب برای نوشتن و کار کردن آمده باشید، چه صبح زود برای شروع یک روز پرانرژی، همیشه کارکنان حرفه‌ای و خوش‌برخورد آماده‌اند تا با بهترین کیفیت از شما پذیرایی کنند.

                        این کافه با اینترنت پرسرعت، فضای کاری مجهز، و گوشه‌های آرام برای مطالعه یا جلسات دوستانه، انتخابی ایده‌آل برای هر نوع مهمانی یا فعالیت است. علاوه بر این، رویدادهای کوچک هنری و موسیقی زنده گاه‌به‌گاه، فضایی متفاوت و الهام‌بخش به آن می‌بخشد.

                        در «لاما لته»، ساعت هیچ معنایی ندارد؛ هر زمان که قدم بگذارید، عطر قهوه و لبخند کارکنان در انتظار شماست.</p>
                </div>
                <div className=" w-full  mt-4">
                    <h2 className="lale text-3xl pr-10 pt-5 relative after:content-[''] after:block after:w-15 after:h-1 after:bg-[#f3cf7a] after:absolute after:-bottom-2 after:right-10"> تیم ما </h2>
                    <div className="flex  flex-col lg:flex-row lg:g-3 items-center justify-around p-10  ">

                        <Card
                            className="max-w-sm mt-8 relative "
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc={llama1}
                        >
                            <span className="absolute -top-1 -right-1 flex size-4">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f3cf7a] opacity-75"></span>
                                <span className="relative inline-flex size-3 rounded-full bg-[#f3cf7a] "></span>
                            </span>
                            <h5 className="lale text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                مهدی عسگری
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400 yekan">
                                با تجربه و مهارت بالا در تهیه قهوه‌های تخصصی و نوشیدنی‌های گرم مانند لاته، کاپوچینو و موکا. عاشق خلق طعم‌های بی‌نظیر و تجربه‌ای دلنشین برای مشتریان است.
                            </p>
                        </Card>
                        <Card
                            className="max-w-sm mt-8 relative"
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc={llama2}
                        >
                            <span className="absolute -top-1 -right-1 flex size-4">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f3cf7a] opacity-75"></span>
                                <span className="relative inline-flex size-3 rounded-full bg-[#f3cf7a] "></span>
                            </span>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white lale">
                                کژال محمدی
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400 yekan">
                                متخصص در ساخت کوکتل‌ها و نوشیدنی‌های خنک تابستانی با انواع سیروپ‌ها و مخلوط‌های تازه. هر نوشیدنی او، ترکیبی از طعم و خلاقیت است که تابستان را جذاب‌تر می‌کند
                            </p>
                        </Card>
                        <Card
                            className="max-w-sm mt-8 relative"
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc={llama3}
                        >
                            <span className="absolute -top-1 -right-1 flex size-4">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f3cf7a] opacity-75"></span>
                                <span className="relative inline-flex size-3 rounded-full bg-[#f3cf7a] "></span>
                            </span>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white lale">
                                مرتضی مقدسی
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400 yekan">
                                دارای مدارک حرفه‌ای در مدیریت و کسب‌وکار، با تجربه در راهبری تیم و توسعه استراتژی‌های موفق. هدایت کسب‌وکار را با دیدی دقیق و خلاقانه بر عهده دارد
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
            <Footeer />
        </>
    )
}
export default Aboutus
