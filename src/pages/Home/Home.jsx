import Header from "../../components/header/Header";
import Sellitem from "../../components/Sellitem/Sellitem";
import homes1 from "./../../assets/homes1.png";
import homes2 from "./../../assets/homes2.png";
import catg1 from "./../../assets/catg1.png";
import catg2 from "./../../assets/catg2.png";
import catg3 from "./../../assets/catg3.png";
import catg4 from "./../../assets/catg4.png";
import lamaclub from "./../../assets/LamaClub.png";
import lovelama from "./../../assets/lovelatte.png";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../Products";
import { Button } from "flowbite-react";
import "./Home.css";
import Footeer from "../../components/Footer/Footer";

function Home() {
  const items = PRODUCTS.slice(0, 6);

  return (
    // لایه‌ی سراسری: رنگ متن/پس‌زمینه از توکن‌ها
    <div className="bg-[color:var(--bg)] text-[color:var(--text)]">
      {/* هدر + هیرو با بک‌گراند تصویری اختصاصی (متن سفید باقی می‌مونه) */}
      <div className="relative w-full h-screen backph bg-cover bg-center">
        <div className="relative z-10">
          <Header />
        </div>
        <div className="relative z-0 flex flex-col items-center justify-center h-full text-center text-white space-y-6 px-4">
          <h1 className="text-8xl font-bold lale">لاما لَته</h1>
          <h2 className="text-2xl font-semibold lale"> طعم خاص قهوه با حس ناب آرامش</h2>
          <p className="text-lg max-w-xl yekan">
            تازه‌ترین دانه‌ها، برشته‌کاری حرفه‌ای و طعمی فراتر از قهوه معمولی.
          </p>
        </div>
      </div>

      {/* سکشن محصولات: بک‌گراندهای سفارشی پروژه حفظ شده؛ متن/بوردر از توکن‌ها */}
      <main className="w-full mx-auto py-10 lightproback h-[520vh] md:h-screen bg-center bg-top bg-no-repeat bg-cover dark:darkproback dark:h-screen dark:bg-center dark:bg-top dark:bg-no-repeat dark:bg-cover">
        <h2 className="lale text-3xl pr-10 mb-6 pt-5 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-[#f3cf7a] after:absolute after:-bottom-2 after:right-10">
          محصولات
        </h2>

        <div className="w-[98%] mr-1 grid gap-5 gap-x-10 grid-cols-1 md:grid-cols-3">
          {items.map((p) => (
            <Sellitem
              key={p.id}
              id={p.id}
              title={p.title}
              desc={p.desc}
              price={p.price}
              lprice={p.lprice}
              img={p.img}
              inCart={false}
            />
          ))}
        </div>
      </main>

      {/* دو تصویر ردیفی */}
      <div className="flex flex-col md:flex-row w-full items-center justify-center md:mt-10 mt-[100px]">
        <div className="md:w-1/2 items-center">
          <img className="w-[500px] h-[300px] mx-auto rounded-3xl" src={homes1} alt="" />
        </div>
        <div className="md:w-1/2 items-center mt-10">
          <img className="w-[500px] h-[300px] mx-auto rounded-3xl" src={homes2} alt="" />
        </div>
      </div>

      {/* دسته‌بندی‌ها: کپشن‌ها از رنگ متن تم ارث می‌گیرند */}
      <div className="grid grid-row-4 md:grid-cols-4 gap-1 p-5 mt-8">
        <div>
          <div className="mx-auto p-5 w-[200px] h-[200px]">
            <img className="cursor-pointer w-full h-full rounded-full" src={catg1} alt="" />
          </div>
          <div className="text-center mx-auto lale">قهوه و اسپرسو</div>
        </div>
        <div>
          <div className="mx-auto p-5 w-[200px] h-[200px]">
            <img className="cursor-pointer w-full h-full rounded-full" src={catg2} alt="" />
          </div>
          <div className="text-center mx-auto lale">لوازم جانبی و تجهیزات</div>
        </div>
        <div>
          <div className="mx-auto p-5 w-[200px] h-[200px]">
            <img className="cursor-pointer w-full h-full rounded-full" src={catg3} alt="" />
          </div>
          <div className="text-center mx-auto lale">قهوه ساز </div>
        </div>
        <div>
          <div className="mx-auto p-5 w-[200px] h-[200px]">
            <img className="cursor-pointer w-full h-full rounded-full" src={catg4} alt="" />
          </div>
          <div className="text-center mx-auto lale">قهوه عربیکا</div>
        </div>
      </div>

      {/* بنر باشگاه لاما */}
      <div className="w-full h-[200px] md:w-[80%] md:h-[300px] mx-auto mt-10">
        <Link to={"/blog"}>
          <img className="w-full h-full rounded-2xl" src={lamaclub} alt="" />
        </Link>
      </div>

      {/* سکشن محصول/توضیح: رنگ‌های خاص حفظ؛ متن‌ها به توکن وصل شدند */}
      <div className="p-30 flex flex-row items-center justify-around">
        <div className="w-[500px] h-[500px]">
          <img className="rounded-br-2xl rounded-tr-2xl" src={lovelama} alt="" />
        </div>
        <div className="mr-15 -mt-40">
          <h5 className="-mt-10 text-5xl lale font-bold tracking-tight text-[color:var(--text)]">
            یکی از بهترین قهوه ها!
          </h5>
          <p className="yekan font-normal text-[color:var(--text)]/70">
            کیفیت قهوه را از ما بخواهید...
          </p>
          <p className="yekan font-normal text-[color:var(--text)]/70">...</p>
          <p className="yekan font-normal text-[color:var(--text)]/70">
            فضای گرم و دنج ما را احساس کنید. جایی که همه می‌توانند قهوه معطری پیدا کنند و دسرهای
            خوشمزه ما را که کاملاً با قهوه داغ همراه شده است، امتحان کنند. فضای داخلی شیک و کارکنان
            خوش‌برخورد ما روز شما را می‌سازد!
          </p>
          <div className="flex flex-row mt-10">
            <Button color="yellow" className="cursor-pointer" pill>
              سفارش از اسنپ فود
            </Button>
            <Button color="yellow" className="mr-5 cursor-pointer" pill>
              سفارش تلفنی شعب ها
            </Button>
          </div>
        </div>
      </div>

      <div className="-mt-40">
        <Footeer />
      </div>
    </div>
  );
}

export default Home;
