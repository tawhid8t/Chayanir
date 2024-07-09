import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './Food.css';
import food1 from '../../../assets/Food/food-1.jpg'
import food2 from '../../../assets/Food/food-2.jpg'
import food3 from '../../../assets/Food/food-3.jpg'
import food4 from '../../../assets/Food/food-4.jpg'
import food5 from '../../../assets/Food/food-5.jpg'
import food6 from '../../../assets/Food/food-6.jpg'

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
const Food = () => {
    return (

        <div>
            <div className="mb-10">
                <h1 className="text-center font-bold text-4xl">খাবার তালিকা</h1>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='shadow-xl rounded-lg'>
                    <div className="card">
                        <div className="card-inner">
                            <div className="card-front flex flex-col">
                                <h1 className='text-xl text-center font-bold pb-2'>শুক্রবার</h1>
                                <img className='w-[300px] h-[300px] rounded-xl' src={food1} />
                            </div>
                            <div className="card-back flex flex-col justify-around">
                                <div className='flex gap-4 mt-6 items-center border-2 p-4 flex-col lg:flex-row'>
                                    <p>সকাল ৬ঃ৩০</p>
                                    <p>ভুনা খিচুড়ি, ডিম ভাজি</p>
                                </div>
                                <div className='flex gap-4 my-10 items-center border-2 p-4 flex-col lg:flex-row'>
                                    <p>দুপুর ১ টা</p>
                                    <p>ডাল, ভাত, মুরগির মাংস, সবজি/ভর্তা</p>
                                </div>
                                <div className='flex gap-4 items-center border-2 p-4 flex-col lg:flex-row'>
                                    <p>রাত ৮ টা</p>
                                    <p>ভাত, ডাল, ভর্তা, সবজি</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-xl rounded-lg'>
                    <div className="card">
                        <div className="card-inner">
                            <div className="card-front flex flex-col">
                                <h1 className='text-xl text-center font-bold pb-2'>শনিবার</h1>
                                <img className='w-[300px] h-[300px] rounded-xl' src={food2} />
                            </div>
                            <div className="card-back flex flex-col justify-around">
                                <div className='flex gap-4 mt-6 items-center border-2 p-4'>
                                    <p>সকাল ৬ঃ৩০</p>
                                    <p>রুটি, সবজি</p>
                                </div>
                                <div className='flex gap-4 my-10 items-center border-2 p-4'>
                                    <p>দুপুর ১ টা</p>
                                    <p>ডাল, ভাত, বড় মাছ, সবজি/ভর্তা</p>
                                </div>
                                <div className='flex gap-4 items-center border-2 p-4'>
                                    <p>রাত ৮ টা</p>
                                    <p>ডাল, ভাত, মুরগীর মাংস</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-xl rounded-lg'>
                    <div className="card">
                        <div className="card-inner">
                            <div className="card-front flex flex-col">
                                <h1 className='text-xl text-center font-bold pb-2'>রবিবার</h1>
                                <img className='w-[300px] h-[300px] rounded-xl' src={food3} />
                            </div>
                            <div className="card-back flex flex-col justify-around">
                                <div className='flex gap-4 mt-6 items-center border-2 p-4'>
                                    <p>সকাল ৬ঃ৩০</p>
                                    <p>ডাল, ভাত, ভর্তা বা রুটি, ভাজি</p>
                                </div>
                                <div className='flex gap-4 my-10 items-center border-2 p-4'>
                                    <p>দুপুর ১ টা</p>
                                    <p>ডাল, ভাত, ডিম ভুনা, সবজি/ভর্তা</p>
                                </div>
                                <div className='flex gap-4 items-center border-2 p-4'>
                                    <p>রাত ৮ টা</p>
                                    <p>ডাল, ভাত, ছোট মাছ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-xl rounded-lg'>
                    <div className="card">
                        <div className="card-inner">
                            <div className="card-front flex flex-col">
                                <h1 className='text-xl text-center font-bold pb-2'>সোমবার</h1>
                                <img className='w-[300px] h-[300px] rounded-xl' src={food4} />
                            </div>
                            <div className="card-back flex flex-col justify-around">
                                <div className='flex gap-4 mt-6 items-center border-2 p-4'>
                                    <p>সকাল ৬ঃ৩০</p>
                                    <p>রুটি, বুটের ডাল</p>
                                </div>
                                <div className='flex gap-4 my-10 items-center border-2 p-4'>
                                    <p>দুপুর ১ টা</p>
                                    <p>ডাল, ভাত, মুরগীর মাংস, সবজি/ভর্তা</p>
                                </div>
                                <div className='flex gap-4 items-center border-2 p-4'>
                                    <p>রাত ৮ টা</p>
                                    <p>ডাল, ভাত, ভিম ভাজি, ভর্তা</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-xl rounded-lg'>
                    <div className="card">
                        <div className="card-inner">
                            <div className="card-front flex flex-col">
                                <h1 className='text-xl text-center font-bold pb-2'>মঙ্গোলবার</h1>
                                <img className='w-[300px] h-[300px] rounded-xl' src={food5} />
                            </div>
                            <div className="card-back flex flex-col justify-around">
                                <div className='flex gap-4 mt-6 items-center border-2 p-4'>
                                    <p>সকাল ৬ঃ৩০</p>
                                    <p>সবজি খিচুড়ি</p>
                                </div>
                                <div className='flex gap-4 my-10 items-center border-2 p-4'>
                                    <p>দুপুর ১ টা</p>
                                    <p>ডাল, ভাত, বড় মাছ, সবজি/ভর্তা</p>
                                </div>
                                <div className='flex gap-4 items-center border-2 p-4'>
                                    <p>রাত ৮ টা</p>
                                    <p>ডাল, ভাত, গিলা কলিজা বা সবজি, ভর্তা</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-xl rounded-lg'>
                    <div className="card">
                        <div className="card-inner">
                            <div className="card-front flex flex-col">
                                <h1 className='text-xl text-center font-bold pb-2'>বুধবার</h1>
                                <img className='w-[300px] h-[300px] rounded-xl' src={food6} />
                            </div>
                            <div className="card-back flex flex-col justify-around">
                                <div className='flex gap-4 mt-6 items-center border-2 p-4'>
                                    <p>সকাল ৬ঃ৩০</p>
                                    <p>রুটি হালুয়া</p>
                                </div>
                                <div className='flex gap-4 my-10 items-center border-2 p-4'>
                                    <p>দুপুর ১ টা</p>
                                    <p>ডাল, ভাত, মুরগীর মাংস, সবজি/ভর্তা</p>
                                </div>
                                <div className='flex gap-4 items-center border-2 p-4'>
                                    <p>রাত ৮ টা</p>
                                    <p>ডাল, ভাত, ডিম ভুনা</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div >
    );
};

export default Food;