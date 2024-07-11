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
      <div>
        <h1 className='text-center font-bold text-4xl text-[#63D5D7]'>ছাত্রীদের কথা</h1>
      </div>
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
            <p>I had a very good time in this hostel. Great location, staff is helpful and always available</p>
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
            <p>এই হোস্টেলটিতে থাকার অভিজ্ঞতা থেকে আমি সবাইকে এখানে থাকার সুপারিশ করছি। কারণ আমি এখানে থাকা ও খাওয়ার জন্য অনেক কিছু পেয়েছি, সবকিছুই রিল্যাক্সিং। তাই এই হোস্টেলটিতে আবার খুব ভালো লাগবে। এখানে কোনো অভিযোগ খুব দ্রুত সমাধান করা হয়। সত্যি হোস্টেলটির পরিষেবা খুব ভালো।</p>
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
            <p>This is amazing hostel where you will make friends and feel like part of a family. I had a great experience at this hostel. The owner and incharge were really friendly and helpful and the facilities were excellent, perfect for girls looking for a safe and comfortable stay. Highly recommend</p>
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
            <p>হোস্টেলটি এক্সসেস ফর আরডার হোস্টেল থেকে নাইক হওয়ায় তোমরা এই হোস্টেলকে বেছে নিয়েছে। আমি এখানে থাকি নিরাপত্তা (সিসি), এখানের প্রাচীরের জন্যও বেশি ভালো ছিল। তে হোস্টেলের বিষয়ক সুপারিশ করতে পারি। আমি প্রায় ৩ বছর এখানে আছি, তাই তারাদের দীর্ঘ অভিজ্ঞতা থেকে তোমরা সবকিছু খুব সুপারিশ করছি।</p>
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
            <p>এখানকার কর্মচারীরা অত্যন্ত সহযোগিতাপূর্ণ ও নম্রতার, তাছাড়াও তারা তোমাদের যে কোনো সমস্যা খুব প্রম্পটেসের সাহায্য করতে প্রস্তুত থাকে। এখানকার খাবারও যোটুকু ভালো ছিল তবে ডাইনিং ধারাবার পরিচালন যথেষ্ট হওয়ায় একটু ভালো ছিল।</p>
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
            <p>I had a very good time in this hostel. Great location, staff is helpful and always available.</p>
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
            <p>এই হোস্টেলে তুমি তোমার অবস্থান ছিল অত্যন্ত আরামদায়ক ও সুরক্ষিত। এখানে সর্বোচ্চ নিরাপত্তা ব্যবস্থা রয়েছে হোস্টেলের ধামার ফ্লান পিন্ডর প্রেক্ষানও অপরাধী যাতে না আসে। তবে এখানকার খাবার ভালো ছিল।</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;