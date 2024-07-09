import contactImg from "../../assets/Contact Us/contactUs.jpg"
import location from "../../assets/Contact Us/location.gif"
import phone from "../../assets/Contact Us/phone.gif"
const ContactUs = () => {
    return (
        <div>
            <div className="text-center my-6">
                <h1 className="text-3xl font-bold mb-4">আমাদের সাথে যোগাযোগ করুন</h1>
                <p>কোন প্রশ্ন থাকলে নির্দ্বিধায় জিজ্ঞেস করতে পারেন আমাদের</p>
            </div>
            <div className="flex justify-around gap-4 mb-24 flex-col lg:flex-row items-center">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title flex justify-center">শাখা-১</h2>
                        <div className="flex gap-3 items-center">
                            <img src={location} />
                            <p>৭৩/ক, মনিপুরীপাড়া ফার্মগেট, ঢাকা</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <img src={phone} />
                            <p className="mt-4">০১৭৭৬৩৭১৬৭১</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title flex justify-center">শাখা-২</h2>
                        <div className="flex gap-3 items-center">
                            <img src={location} />
                            <p>৩৫/সি, মনিপুরীপাড়া ফার্মগেট, ঢাকা</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <img src={phone} />
                            <p className="mt-4">০১৭০৫৬৩০৬৮০</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title flex justify-center">শাখা-৩</h2>
                        <div className="flex gap-3 items-center">
                            <img src={location} />
                            <p>৬৪/এ, মনিপুরীপাড়া ফার্মগেট, ঢাকা</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <img src={phone} />
                            <p className="mt-4">০১৭৩৯৭২১৭১১</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.6302809118665!2d90.38376307522252!3d23.760560188386478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9c33341ca8f%3A0x30a34adbb2177bff!2sChayanir%20Women&#39;s%20Hostel%20(unit-3)!5e0!3m2!1sen!2sbd!4v1720526022740!5m2!1sen!2sbd" className="w-full h-[450px] rounded-xl"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></p>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex-1">
                    <img src={contactImg} />
                </div>
                <div className="flex-1">
                    <div className="flex flex-col items-center justify-center dark">
                        <div className="w-full bg-base-100 rounded-lg shadow-xl p-6">
                            <h2 className="text-2xl font-bold  mb-4 text-center">যোগাযোগ করুন</h2>

                            <form className="flex flex-wrap">
                                <input
                                    type="text"
                                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                                    placeholder="First Name"
                                />
                                <input
                                    type="text"
                                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                                    placeholder="Last Name"
                                />
                                <input
                                    type="email"
                                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                                    placeholder="Your Email"
                                />
                                <input
                                    type="number"
                                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                                    placeholder="Phone Number"
                                />
                                <textarea
                                    name="message"
                                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-auto md:mb-auto md:w-full md:h-auto md:min-h-[100px] md:max-h-[100px] md:flex-grow md:flex-shrink md:flex-auto focus:bg-gray-md:focus:outline-none:focus:ring-blue-md:focus:border-transparent transition ease-in-out duration-fastest"
                                    placeholder="Message"
                                ></textarea>

                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;