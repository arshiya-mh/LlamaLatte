// Auth.tsx
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import 'animate.css';
import Swal from 'sweetalert2';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoBellFill } from "react-icons/go";
import authlogo from './../../assets/authlogo.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
function Auth() {
    const phoneSchema = Yup.object({
        tel: Yup.string()
            .required('شماره تلفن الزامی است')
            .matches(/^(\+98|0)?9\d{9}$/, 'فرمت شماره تلفن معتبر نیست')
    }).required();

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(phoneSchema)
    });

    const [isCodeVisible, setIsCodeVisible] = useState(false);
    const [generatedCode, setGeneratedCode] = useState('');
    const [userCode, setUserCode] = useState('');
    const [timeLeft, setTimeLeft] = useState(0);
    const [isRunning, setIsRunning] = useState(false);


    const generateRandomCode = () => {
        const newCode = Math.floor(10000 + Math.random() * 90000);
        setGeneratedCode(newCode.toString());
        return newCode;
    };

    const showToastCode = () => {
        toast.warn(`کد ارسالی: ${generatedCode}`, {
            position: 'top-center',
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            rtl: true,
            icon: <GoBellFill color='gold' fontSize={'28px'} />
        });
    };

    useEffect(() => {
        let timer;
        if (isRunning && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            clearInterval(timer);
            setIsRunning(false);
        }
        return () => clearInterval(timer);
    }, [isRunning, timeLeft]);

    const startTimer = () => {
        setTimeLeft(120);
        setIsRunning(true);
    };

    const formatTime = (seconds) => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min}:${sec < 10 ? '0' : ''}${sec}`;
    };


    const handleSendClick = () => {
        generateRandomCode();
        setIsCodeVisible(true);
        startTimer();
    };


    const handleResend = () => {
        generateRandomCode();
        startTimer();
    };

    useEffect(() => {
        if (generatedCode) {
            showToastCode();
        }
    }, [generatedCode]);

    const handleCodeSubmit = () => {
        if (userCode === generatedCode) {
            Swal.fire({
                title: 'کد تایید صحیح است',
                icon: 'success',
                confirmButtonText: 'ادامه',
                showClass: {
                    popup: `animate__animated animate__fadeInUp animate__faster`
                },
                hideClass: {
                    popup: `animate__animated animate__fadeOutDown animate__faster`
                }
            })
        } else {
            Swal.fire({
                title: "کد اشتباه است!",
                icon: "error",
                confirmButtonText: 'تایید'
            });
        }
    };

    const editTel = () => {
        setIsCodeVisible(false);
        setUserCode('');
        reset();
    };

    return (
        <>

            <main className="container mx-auto px-4 pt-24">

                <div
                    className="
          max-w-md mx-auto my-12   p-6
          [direction:rtl] text-center
          border border-gray-200 rounded-xl bg-white
            authshadow
        "
                >
                    <div className='flex items-center justify-items-end'>
                        <div>
                            <Link to={'/'}><FaArrowRightLong className='mr-5' size={'30px'} color='gray' /></Link>
                        </div>
                        <div className='w-[150px] mx-auto h-[150px]'>
                            <img className='w-full -mr-10 h-full rounded-full' src={authlogo} alt="" />
                        </div>
                    </div>


                    {!isCodeVisible ? (
                        <form onSubmit={handleSubmit(handleSendClick)}>
                            <h2 className='relative -mr-[300px] lale'>ورود | ثبت نام </h2>
                            <p className='text-gray-500 yekan -mr-[320px] mt-4'>سلام !</p>
                            <h2 className="mb-5 text-gray-500 yekan -mr-[185px] mt-3">شماره موبایل خود را وارد کنید</h2>

                            <input
                                type="tel"
                                dir="ltr"
                                {...register('tel')}
                                placeholder="+98"
                                className="
                w-full p-3 mb-3 text-base rounded-md border border-gray-300
                focus:outline-none focus:ring-2 focus:ring-[#f3cf7a] focus:border-[#f3cf7a]
              "
                            />

                            {errors.tel && (
                                <p className="text-red-500 text-sm mt-1 font-[lale]">
                                    {String(errors.tel.message)}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="
                w-full p-3 text-[20px] font-[lale]
                bg-[#f3cf7a] text-white rounded-md
                transition-colors duration-200 cursor-pointer   
                hover:bg-white hover:text-[#f3cf7a] hover:border-[#f3cf7a] hover:border
              "
                            >
                                ارسال
                            </button>
                        </form>
                    ) : (
                        <div className="mt-5 p-4 rounded-lg">
                            <h3 className="mb-2 text-gray-700 font-[lale]">کد ارسال شده به شماره را وارد کنید:</h3>

                            <input
                                type="text"
                                placeholder="کد تأیید"
                                value={userCode}
                                onChange={(e) => setUserCode(e.target.value)}
                                className="
                w-full p-3 mb-3 text-base rounded-md border border-gray-300 lale placeholder:text-right
                focus:outline-none focus:ring-2 focus:ring-[#f3cf7a] focus:border-[#f3cf7a]
              "
                                dir="ltr"
                                inputMode="numeric"
                            />

                            <div className="flex items-center justify-between p-2 -mt-2 h-[50px] font-[lale]">
                                <button
                                    type="button"
                                    onClick={editTel}
                                    className="text-gray-700 hover:text-[#f3cf7a] transition-colors cursor-pointer"
                                >
                                    ویرایش شماره تماس
                                </button>

                                {isRunning ? (
                                    <p className="mt-2 text-gray-700 ">
                                        ارسال مجدد کد:
                                        <span className="font-bold mr-1">{formatTime(timeLeft)}</span>
                                    </p>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={handleResend}
                                        className="text-gray-700 hover:text-[#f3cf7a] transition-colors"
                                    >
                                        ارسال مجدد کد
                                    </button>
                                )}
                            </div>

                            <button
                                onClick={handleCodeSubmit}
                                className="
                w-full p-3 mt-2 text-[20px] font-[lale]
                bg-[#f3cf7a] text-white rounded-md
                transition-colors duration-200
                hover:bg-white hover:text-[#f3cf7a] hover:border-[#f3cf7a] hover:border cursor-pointer
              "
                            >
                                تأیید کد
                            </button>
                        </div>
                    )}
                </div>

                <ToastContainer />
            </main>
        </>
    );
}

export default Auth;
