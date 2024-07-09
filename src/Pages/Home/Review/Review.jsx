// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Review.css'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import slide_image_1 from '../../../assets/Review/img_1.jpg';
import slide_image_2 from '../../../assets/Review/img_2.jpg';
import slide_image_3 from '../../../assets/Review/img_3.jpg';
import slide_image_4 from '../../../assets/Review/img_4.jpg';
import slide_image_5 from '../../../assets/Review/img_5.jpg';
import slide_image_6 from '../../../assets/Review/img_6.jpg';
import slide_image_7 from '../../../assets/Review/img_7.jpg';
const Review = () => {
  return (
    <div className='mb-28'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <div className="avatar flex justify-center">
              <div className="ring-primary ring-offset-base-100 w-20 rounded-full ring ring-offset-2 mt-3">
                <img src={slide_image_1} />
              </div>
            </div>
            <h1 className='text-center mt-5 mb-2 text-xl'>আনিকা</h1>
            <div className="rating flex justify-center mb-5">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-600"
              />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" defaultChecked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
            </div>
            <p>স্থানধারক বা ডামি টেক্সট টাইপসেটিং এবং গ্রাফিক ডিজাইনে প্রিভিউ লেআউটের জন্য ব্যবহৃত হয় । এতে স্ক্র্যাম্বল করা ল্যাটিন টেক্সট রয়েছে, যা লেআউটের বিষয়বস্তুর উপর ডিজাইনের উপর জোর দেয়। এটি মুদ্রণ ও প্রকাশনা শিল্পের আদর্শ স্থানধারক পাঠ্য</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="avatar flex justify-center">
              <div className="ring-primary ring-offset-base-100 w-20 rounded-full ring ring-offset-2 mt-3">
                <img src={slide_image_2} />
              </div>
            </div>
            <h1 className='text-center mt-5 mb-2 text-xl'>অন্তরা</h1>
            <div className="rating flex justify-center mb-5">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-600"
              />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" defaultChecked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
            </div>
            <p>স্থানধারক বা ডামি টেক্সট টাইপসেটিং এবং গ্রাফিক ডিজাইনে প্রিভিউ লেআউটের জন্য ব্যবহৃত হয় । এতে স্ক্র্যাম্বল করা ল্যাটিন টেক্সট রয়েছে, যা লেআউটের বিষয়বস্তুর উপর ডিজাইনের উপর জোর দেয়। এটি মুদ্রণ ও প্রকাশনা শিল্পের আদর্শ স্থানধারক পাঠ্য</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="avatar flex justify-center">
              <div className="ring-primary ring-offset-base-100 w-20 rounded-full ring ring-offset-2 mt-3">
                <img src={slide_image_3} />
              </div>
            </div>
            <h1 className='text-center mt-5 mb-2 text-xl'>রিয়া</h1>
            <div className="rating flex justify-center mb-5">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-600"
              />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" defaultChecked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
            </div>
            <p>স্থানধারক বা ডামি টেক্সট টাইপসেটিং এবং গ্রাফিক ডিজাইনে প্রিভিউ লেআউটের জন্য ব্যবহৃত হয় । এতে স্ক্র্যাম্বল করা ল্যাটিন টেক্সট রয়েছে, যা লেআউটের বিষয়বস্তুর উপর ডিজাইনের উপর জোর দেয়। এটি মুদ্রণ ও প্রকাশনা শিল্পের আদর্শ স্থানধারক পাঠ্য</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="avatar flex justify-center">
              <div className="ring-primary ring-offset-base-100 w-20 rounded-full ring ring-offset-2 mt-3">
                <img src={slide_image_4} />
              </div>
            </div>
            <h1 className='text-center mt-5 mb-2 text-xl'>জান্নাতুল</h1>
            <div className="rating flex justify-center mb-5">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-600"
              />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" defaultChecked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
            </div>
            <p>স্থানধারক বা ডামি টেক্সট টাইপসেটিং এবং গ্রাফিক ডিজাইনে প্রিভিউ লেআউটের জন্য ব্যবহৃত হয় । এতে স্ক্র্যাম্বল করা ল্যাটিন টেক্সট রয়েছে, যা লেআউটের বিষয়বস্তুর উপর ডিজাইনের উপর জোর দেয়। এটি মুদ্রণ ও প্রকাশনা শিল্পের আদর্শ স্থানধারক পাঠ্য</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="avatar flex justify-center">
              <div className="ring-primary ring-offset-base-100 w-20 rounded-full ring ring-offset-2 mt-3">
                <img src={slide_image_5} />
              </div>
            </div>
            <h1 className='text-center mt-5 mb-2 text-xl'>রিমি</h1>
            <div className="rating flex justify-center mb-5">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-600"
              />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" defaultChecked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
            </div>
            <p>স্থানধারক বা ডামি টেক্সট টাইপসেটিং এবং গ্রাফিক ডিজাইনে প্রিভিউ লেআউটের জন্য ব্যবহৃত হয় । এতে স্ক্র্যাম্বল করা ল্যাটিন টেক্সট রয়েছে, যা লেআউটের বিষয়বস্তুর উপর ডিজাইনের উপর জোর দেয়। এটি মুদ্রণ ও প্রকাশনা শিল্পের আদর্শ স্থানধারক পাঠ্য</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="avatar flex justify-center">
              <div className="ring-primary ring-offset-base-100 w-20 rounded-full ring ring-offset-2 mt-3">
                <img src={slide_image_6} />
              </div>
            </div>
            <h1 className='text-center mt-5 mb-2 text-xl'>সাবানা</h1>
            <div className="rating flex justify-center mb-5">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-600"
              />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" defaultChecked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600"  />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
            </div>
            <p>স্থানধারক বা ডামি টেক্সট টাইপসেটিং এবং গ্রাফিক ডিজাইনে প্রিভিউ লেআউটের জন্য ব্যবহৃত হয় । এতে স্ক্র্যাম্বল করা ল্যাটিন টেক্সট রয়েছে, যা লেআউটের বিষয়বস্তুর উপর ডিজাইনের উপর জোর দেয়। এটি মুদ্রণ ও প্রকাশনা শিল্পের আদর্শ স্থানধারক পাঠ্য</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="avatar flex justify-center">
              <div className="ring-primary ring-offset-base-100 w-20 rounded-full ring ring-offset-2 mt-3">
                <img src={slide_image_7} />
              </div>
            </div>
            <h1 className='text-center mt-5 mb-2 text-xl'>চুমকি</h1>
            <div className="rating flex justify-center mb-5">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-600"
              />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" defaultChecked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
            </div>
            <p>স্থানধারক বা ডামি টেক্সট টাইপসেটিং এবং গ্রাফিক ডিজাইনে প্রিভিউ লেআউটের জন্য ব্যবহৃত হয় । এতে স্ক্র্যাম্বল করা ল্যাটিন টেক্সট রয়েছে, যা লেআউটের বিষয়বস্তুর উপর ডিজাইনের উপর জোর দেয়। এটি মুদ্রণ ও প্রকাশনা শিল্পের আদর্শ স্থানধারক পাঠ্য</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;