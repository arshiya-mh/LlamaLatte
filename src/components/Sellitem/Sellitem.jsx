import { useContext } from "react";
import { Buytbt } from "../../hooks/Buyprovider";
import { Card, Button } from "flowbite-react";
import { HiMinus, HiPlus, HiTrash } from "react-icons/hi";

// کمکی برای نمایش قیمت به تومان
const formatToman = (n) =>
  Number(n || 0).toLocaleString("fa-IR") + " تومان";

function Sellitem({ id, title, price, lprice , img, desc, inCart = false }) {
  const { addItem, increment, decrement, removeItem, cart } = useContext(Buytbt);
  const qty = cart[id]?.qty ?? 0;

  return (
    <Card className="max-w-sm w-[470px] shadow-none productshadow" imgSrc={img} horizontal>
      <div className="flex flex-col gap-1">
        <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white lale">
          {title}
        </h5>
        {desc && (
          <p className="text-xs text-gray-500 dark:text-gray-400 yekan">{desc}</p>
        )}
      </div>

      <p className="font-noraml text-xl text-gray-700 dark:text-gray-300 line-through decoration-[#774e26] decoration-2 lale">
        {formatToman(lprice)}
      </p>

     <div className="w-full h-0.5 bg-[#774e26] "></div>

      <div className="w-full flex items-center justify-between gap-3">
        <p className="text-base lale text-[#774e26] ">{formatToman(price)}</p>

        {!inCart ? (
          <Button
            className="cursor-pointer"
            color="yellow"
            onClick={() => addItem({ id, title, price, img })}
          >
            ثبت سفارش
          </Button>
        ) : (
          <div className="flex items-center gap-3">
            <Button pill className="bg-[#f3cf7a] cursor-pointer  hover:bg-[#f3cf7a] hover:opacity-90" size="xs" onClick={() => decrement(id)} aria-label="کم کردن">
              <HiMinus />
            </Button>
            <span className=" text-[#774e26] min-w-[2rem] text-center">{qty}</span>
            <Button pill className="bg-[#f3cf7a] cursor-pointer  hover:bg-[#f3cf7a] hover:opacity-90" size="xs" onClick={() => increment(id)} aria-label="زیاد کردن">
              <HiPlus />
            </Button>
            <Button
            className="cursor-pointer hover: text-[#774e26] hover:bg-[#f3cf7a]"
              color="light"
              size="xs"
              onClick={() => removeItem(id)}
              title="حذف از سبد"
              aria-label="حذف"
            >
              <HiTrash />
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}

export default Sellitem;
