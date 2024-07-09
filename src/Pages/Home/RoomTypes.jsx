import type_1 from '../../assets/Room Types/room-1.jpg'
import type_2 from '../../assets/Room Types/room-2.jpg'
import type_3 from '../../assets/Room Types/room-3.jpg'
import type_4 from '../../assets/Room Types/room-4.jpg'
const RoomTypes = () => {
    return (
        <div>
            <div className="mb-10">
                <h1 className="text-center font-bold text-4xl text-[#63D5D7]">রুমের ধরন</h1>
            </div>
            <div className='flex justify-between gap-6 items-center mb-20 flex-col-reverse md:flex-row'>
                <div className='flex-1'>
                    <h3 className='text-3xl mb-4'>এটাচ বাথরুম এবং বারান্দা</h3>
                    <p className='text-lg'>যখন বাথরুমের কথা আসে, তখন শব্দটি সংলগ্ন, সংযুক্ত বা সংযুক্ত বোঝাতে ব্যবহৃত হয়। একটি স্যুট বাথরুম হল একটি বাথরুম যা একটি বেডরুমের সাথে সংযুক্ত। প্রায়শই, এটি একটি বিশেষ স্পর্শ যা অন্যদের থেকে প্রাথমিক বেডরুমকে চিহ্নিত করে, যা একটি সাধারণ বাথরুম ভাগ করার প্রয়োজন হতে পারে</p>
                </div>
                <div className='flex-1'>
                    <img className='rounded-2xl' src={type_1} />
                </div>
            </div>
            {/* type-2 */}
            <div className='flex justify-between gap-6 items-center mb-20 flex-col md:flex-row'>
                <div className='flex-1'>
                    <img className='rounded-2xl' src={type_2} />
                </div>
                <div className='flex-1'>
                    <h3 className='text-3xl mb-4'>এটাচ বাথরুম</h3>
                    <p className='text-lg'>যখন বাথরুমের কথা আসে, তখন শব্দটি সংলগ্ন, সংযুক্ত বা সংযুক্ত বোঝাতে ব্যবহৃত হয়। একটি স্যুট বাথরুম হল একটি বাথরুম যা একটি বেডরুমের সাথে সংযুক্ত। প্রায়শই, এটি একটি বিশেষ স্পর্শ যা অন্যদের থেকে প্রাথমিক বেডরুমকে চিহ্নিত করে, যা একটি সাধারণ বাথরুম ভাগ করার প্রয়োজন হতে পারে</p>
                </div>
            </div>
            {/* type-3 */}
            <div className='flex justify-between gap-6 items-center mb-20 flex-col-reverse md:flex-row'>
                <div className='flex-1'>
                    <h3 className='text-3xl mb-4'>কমন রুম এবং বারান্দা</h3>
                    <p className='text-lg'>যখন বাথরুমের কথা আসে, তখন শব্দটি সংলগ্ন, সংযুক্ত বা সংযুক্ত বোঝাতে ব্যবহৃত হয়। একটি স্যুট বাথরুম হল একটি বাথরুম যা একটি বেডরুমের সাথে সংযুক্ত। প্রায়শই, এটি একটি বিশেষ স্পর্শ যা অন্যদের থেকে প্রাথমিক বেডরুমকে চিহ্নিত করে, যা একটি সাধারণ বাথরুম ভাগ করার প্রয়োজন হতে পারে</p>
                </div>
                <div className='flex-1'>
                    <img className='rounded-2xl' src={type_3} />
                </div>
            </div>
            {/* type-2 */}
            <div className='flex justify-between gap-6 items-center mb-20 flex-col md:flex-row'>
                <div className='flex-1'>
                    <img className='rounded-2xl' src={type_4} />
                </div>
                <div className='flex-1'>
                    <h3 className='text-3xl mb-4'>এটাচ বারান্দা</h3>
                    <p className='text-lg'>যখন বাথরুমের কথা আসে, তখন শব্দটি সংলগ্ন, সংযুক্ত বা সংযুক্ত বোঝাতে ব্যবহৃত হয়। একটি স্যুট বাথরুম হল একটি বাথরুম যা একটি বেডরুমের সাথে সংযুক্ত। প্রায়শই, এটি একটি বিশেষ স্পর্শ যা অন্যদের থেকে প্রাথমিক বেডরুমকে চিহ্নিত করে, যা একটি সাধারণ বাথরুম ভাগ করার প্রয়োজন হতে পারে</p>
                </div>
            </div>
        </div>
    );
};

export default RoomTypes;