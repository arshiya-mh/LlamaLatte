import Header from "../../components/header/Header";
import { Card, Rating, RatingStar, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Progress, Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import latte from "./../../assets/latte.jpg";
import iceam from "./../../assets/iceamer.jpg";
import icecara from "./../../assets/icecaramel.jpg";
import winimg from "./../../assets/prizebanner.png";
import llamawin from "./../../assets/llamawin.png";
import { useEffect, useState } from "react";
import Footer from "./../../components/Footer/Footer";

function Blog() {
  // --- Countdown to next Friday 20:00 ---
  function nextFriday20() {
    const end = new Date();
    end.setHours(20, 0, 0, 0);
    const day = end.getDay(); // 0=Sun ... 5=Fri
    let add = (5 - day + 7) % 7;
    if (add === 0 && end.getTime() <= Date.now()) add = 7;
    end.setDate(end.getDate() + add);
    return end;
  }
  const [now, setNow] = useState(Date.now());
  const end = nextFriday20();
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, end.getTime() - now);
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  const countdownBoxes = [
    { label: "روز", val: d },
    { label: "ساعت", val: h },
    { label: "دقیقه", val: m },
    { label: "ثانیه", val: s },
  ];

  // --- Progress ---
  const joined = 1280;
  const goal = 2000;
  const progress = Math.min(100, Math.round((joined / goal) * 100));

  return (
    <div className="bg-[color:var(--bg)] text-[color:var(--text)]">
      {/* هیرو با بک‌گراند تصویری، متن سفید حفظ می‌شود */}
      <div className="relative w-full h-screen bg-[url(./assets/blog.jpg)] bg-cover bg-center">
        <div className="relative z-10">
          <Header />
        </div>
        <div className="relative z-0 flex flex-col items-center justify-center h-full text-center text-white space-y-6 px-4">
          <h1 className="text-9xl font-bold lale mt-[250px]">بلاگ</h1>
        </div>
      </div>

      {/* پرفروش‌ها */}
      <h2 className="lale mr-20 text-3xl mt-25 relative after:content-[''] after:block after:w-50 after:h-1 after:bg-[#f3cf7a] after:absolute after:-bottom-36 after:right-20">
        محصولات پر فروش این هفته
      </h2>

      <div className="flex flex-col md:flex-row mt-10 p-5 gap-5">
        <Card className="max-w-sm md:w-[900px] md:ml-3 mt-5 bg-[color:var(--card)] border border-[color:var(--border)]" imgSrc={latte} horizontal>
          <h5 className="lale text-2xl font-bold tracking-tight text-[color:var(--text)]">لته (Latte)</h5>
          <p className="yekan font-normal text-[color:var(--text)]/70">اسپرسو ۱–۲ شات + شیر بخارخورده  + میکروفوم</p>
          <Rating>
            <RatingStar /><RatingStar /><RatingStar /><RatingStar /><RatingStar />
          </Rating>
        </Card>

        <Card className="max-w-sm md:w-[900px] md:ml-3 mt-5 bg-[color:var(--card)] border border-[color:var(--border)]" imgSrc={iceam} horizontal>
          <h5 className="lale text-2xl font-bold tracking-tight text-[color:var(--text)]">آیس آمریکانو (Iced Americano)</h5>
          <p className="yekan font-normal text-[color:var(--text)]/70">اسپرسو ۲ شات + آب سرد   + یخ</p>
          <Rating>
            <RatingStar /><RatingStar /><RatingStar /><RatingStar /><RatingStar filled={false} />
          </Rating>
        </Card>

        <Card className="max-w-sm md:w-[900px] md:ml-3 mt-5 bg-[color:var(--card)] border border-[color:var(--border)]" imgSrc={icecara} horizontal>
          <h5 className="lale text-2xl font-bold tracking-tight text-[color:var(--text)]">آیس کارامل ماکیاتو (Iced Caramel Macchiato)</h5>
          <p className="yekan font-normal text-[color:var(--text)]/70">شربت وانیل  + شیر سرد   + یخ ۶–۸ قطعه + اسپرسو  + سس کارامل</p>
          <Rating>
            <RatingStar /><RatingStar /><RatingStar /><RatingStar /><RatingStar filled={false} />
          </Rating>
        </Card>
      </div>

      {/* بنر جوایز */}
      <h2 className="lale mr-20 text-3xl mt-25 relative after:content-[''] after:block after:w-35 after:h-1 after:bg-[#f3cf7a] after:absolute after:-bottom-147 after:right-20">
        جایزه های نفیس ما
      </h2>

      <div className="relative">
        <span className="absolute right-77 flex size-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f3cf7a] opacity-75"></span>
          <span className="relative inline-flex size-4 rounded-full bg-[#f3cf7a] "></span>
        </span>
        <img src={winimg} alt="" className="md:w-[60%] mx-auto mt-10 rounded-3xl" />
        <span className="absolute -top-1 left-77 flex size-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f3cf7a] opacity-75"></span>
          <span className="relative inline-flex size-4 rounded-full bg-[#f3cf7a] "></span>
        </span>
      </div>

      {/* شمارش‌معکوس */}
      <h2 className="lale mr-20 text-3xl mt-25">زمان باقی مانده تا جایزه هفته :</h2>
      <div className="mb-6 grid md:mt-6 md:p-5 grid-cols-4 gap-2 text-center">
        {countdownBoxes.map((i) => (
          <div key={i.label} className="rounded-xl border border-[#f3cf7a] bg-[#f3cf7a] py-3">
            <div className="text-2xl text-[#774e26] font-bold tabular-nums lale">
              {String(i.val).padStart(2, "0")}
            </div>
            <div className="text-xs text-[#774e26] lale">{i.label}</div>
          </div>
        ))}
      </div>

      {/* پیشرفت + سوالات متداول */}
      <div className="flex flex-col md:flex-row items-center justify-center p-10">
        <div className="m-auto w-full md:w-1/2">
          <div className="flex justify-between text-xs lale text-[color:var(--text)]/70 mb-1">
            <span>شرکت‌کنندگان: {joined.toLocaleString("fa-IR")}</span>
            <span>هدف: {goal.toLocaleString("fa-IR")}</span>
          </div>
          <Progress progress={progress} color="yellow" />
        </div>

        <div className="w-full mt-10 md:w-1/2 md:mr-10">
          <Accordion>
            <AccordionPanel>
              <AccordionTitle className="lale">چطور شرکت کنم؟</AccordionTitle>
              <AccordionContent>
                <p className="yekan text-[color:var(--text)]/70">هر خرید = ۱ شانس. کد روی رسید را در حساب ثبت کنید.</p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle className="lale">اعلام نتایج چه زمانی است؟</AccordionTitle>
              <AccordionContent>
                <p className="yekan text-[color:var(--text)]/70">پس از اتمام شمارش‌معکوس، جمعه ساعت ۲۰:۰۰.</p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle className="lale">محدودیت دارد؟</AccordionTitle>
              <AccordionContent>
                <p className="yekan text-[color:var(--text)]/70">در هر روز حداکثر ۵ کد می‌توانید ثبت کنید.</p>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
        </div>
      </div>

      {/* جدول برندگان + تصویر */}
      <div className="flex flex-col md:flex-row md:mt-20 p-5">
        <div className="w-[50%] mx-auto overflow-x-auto">
          <Table hoverable className="bg-[color:var(--card)] border border-[color:var(--border)] rounded-xl">
            <TableHead>
              <TableRow className="lale">
                <TableHeadCell>نام</TableHeadCell>
                <TableHeadCell>نام خانوادگی</TableHeadCell>
                <TableHeadCell>جایزه</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody className="divide-y divide-[color:var(--border)] yekan">
              <TableRow className="bg-[color:var(--bg)]">
                <TableCell className="whitespace-nowrap font-medium text-[color:var(--text)]">علی</TableCell>
                <TableCell>محمدی</TableCell>
                <TableCell>خودرو 206</TableCell>
              </TableRow>
              <TableRow className="bg-[color:var(--bg)]">
                <TableCell className="whitespace-nowrap font-medium text-[color:var(--text)]">سارا</TableCell>
                <TableCell>رضایی</TableCell>
                <TableCell>کنسول بازی ps5</TableCell>
              </TableRow>
              <TableRow className="bg-[color:var(--bg)]">
                <TableCell className="whitespace-nowrap font-medium text-[color:var(--text)]">امیر</TableCell>
                <TableCell>کریمی</TableCell>
                <TableCell>50% تخفیف روی فاکتور</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <a className="text-blue-600 hover:border-b hover:border-blue-600 cursor-pointer lale md:mr-130">
            مشاهده برندگان هفته گذشته
          </a>
        </div>

        <div className="w-[50%] mt-10 mr-20 md:-mt-7 items-center">
          <img className="h-[50%] rounded-3xl shadow-gray-500 md:-mt mx-auto" src={llamawin} alt="" />
        </div>
      </div>

      <div className="md:-mt-[300px]">
        <Footer />
      </div>
    </div>
  );
}

export default Blog;
