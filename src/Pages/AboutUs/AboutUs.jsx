import CEO from '../../assets/About US/CEO profile.jpg'
import executive from '../../assets/About US/executive.jpg'
import executive2 from '../../assets/About US/executive_2.jpg'
import { FaFacebook } from "react-icons/fa6";
const AboutUs = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-4 my-6'>
            <div className='flex justify-between flex-col md:flex-row gap-4'>
                <div className='flex-1'>
                    <img className='rounded-xl md:w-96 md:h-96 mx-auto' src={CEO} />
                    <h4 className="block mb-2 font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 mt-4 text-center">
                        Rajon Ahmed
                    </h4>
                    <p
                        className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400 text-center mb-6">
                        Founder & CEO
                    </p>
                </div>
                <div className='flex-1'>
                    <h3></h3>
                    <p>যখনই আমি ছায়ানীড় সম্পর্কে কথা বলি বা লিখি, এটা আমাকে গর্বিত করে। কারণ ছায়ানীড় হল যা নিয়ে আমি আমার জীবনের বেশিরভাগ সময় কাটিয়েছি। <br />
                        শুধু আমি নই, আমাদের পুরো টিম আমাদের প্রিয় গ্রাহকদের জন্য সম্ভাব্য সর্বোত্তম থাকার সমাধান নিশ্চিত করার জন্যনিরলসভাবে কাজ করে যাচ্ছে, <br />
                        আমাদের প্রচেষ্টার মূল্য একটি উদ্দেশ্য। কারণ, আমাদের কাছে, আমাদের প্রতিশ্রুতি প্রদান করা অন্য যেকোনো কিছুরচেয়ে বেশি গুরুত্বপূর্ণ এবং আমরা সর্বশক্তিমানের কৃপায় আপনাকে সুরক্ষিত রাখার প্রতিশ্রুতি দিচ্ছি।</p>
                    <p>
                        একবিংশ শতাব্দীর প্রেক্ষাপটে, পৃথিবী যতটা ডিজিটালাইজড হয়ে গেছে তা কেউ কল্পনাও করতে পারেনি। 1960-এর দশকে উদ্ভাবিত সমন্বিত সার্কিটগুলি তার জাদু কাজ করেছে, বিশ্বকে আমাদের পকেটে রেখেছে। এর সাথে, আমরা নিরাপত্তার পুরো বিষয়টিও আমাদের পকেটে রাখতে সক্ষম হয়েছি। আপনি একটি ব্যবসা মালিক? আপনি আপনার গুদাম বা শোরুম 24/7 তদারকি করতে হবে? আমরা আপনাকে বিশ্বের যেকোনো কোণ থেকে 24/7 গুদাম বা শোরুম বা ব্যবসায়িক প্রাঙ্গনে কার্যত উপস্থিত থাকতে সক্ষম করি। আপনার একটি মূল্যবান খিলান আছে এবং এটি সুরক্ষিত করা দরকার? আমরা আপনাকে ফিঙ্গারপ্রিন্ট লকিং সিস্টেমের সাথে আচ্ছাদিত করেছি। আপনি আপনার কর্মীদের উপস্থিতি নিরীক্ষণ করতে হবে? আপনার উপস্থিতি নেওয়ার জন্য আমাদের বায়োমেট্রিক সিস্টেম রয়েছে যেন আপনি নিজেই এটি নিচ্ছেন।
                    </p>
                </div>
            </div>
            <div className='mt-10'>
                <div></div>
                <div className='flex flex-col md:flex-row justify-center'>
                    <div>
                        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl md:w-96">
                            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
                                <img src={executive} alt="profile-picture" />
                            </div>
                            <div className="p-6 text-center">
                                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    Sumaiya Jahan
                                </h4>
                                <p
                                    className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
                                    Executive
                                </p>
                            </div>
                            <div className="flex justify-center p-6 pt-2 gap-7">
                                <a href="#facebook"
                                    className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400">
                                    <FaFacebook />
                                </a>
                                <a href="#twitter"
                                    className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400">
                                    <i
                                        className="fab fa-twitter" aria-hidden="true">
                                    </i>
                                </a>
                                <a href="#instagram"
                                    className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400"><i
                                        className="fab fa-instagram" aria-hidden="true">
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div>
                        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl md:w-96">
                            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
                                <img src={executive2} alt="profile-picture" />
                            </div>
                            <div className="p-6 text-center">
                                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    Jinia Jannat
                                </h4>
                                <p
                                    className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
                                    Executive
                                </p>
                            </div>
                            <div className="flex justify-center p-6 pt-2 gap-7">
                                <a href="#facebook"
                                    className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400">
                                    <FaFacebook />
                                </a>
                                <a href="#twitter"
                                    className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400">
                                    <i
                                        className="fab fa-twitter" aria-hidden="true">
                                    </i>
                                </a>
                                <a href="#instagram"
                                    className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400"><i
                                        className="fab fa-instagram" aria-hidden="true">
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;