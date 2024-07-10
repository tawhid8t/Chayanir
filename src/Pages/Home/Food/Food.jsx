import './Food.css';
import food1 from '../../../assets/Food/food-1.jpg'
import food2 from '../../../assets/Food/food-2.jpg'
import food3 from '../../../assets/Food/food-3.jpg'
import food4 from '../../../assets/Food/food-4.jpg'
import food5 from '../../../assets/Food/food-5.jpg'
import food6 from '../../../assets/Food/food-6.jpg'

const Food = () => {
    return (
        <div className='mb-40'>
            <div className="mb-10 text-center">
                <h1 className=" font-bold text-4xl text-[#63D5D7]">খাবার তালিকা</h1>
                <p className='text-xl'>খাবার মেনু দেখতে ছবিতে ক্লিক করুন</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className="card shadow-xl mb-6 mx-auto">
                    <div className="card-inner">
                        <div className="card-front flex flex-col">
                            <h1>শুক্রবার</h1>
                            <img className='rounded-xl' src={food1} />
                        </div>
                        <div className="card-back">
                            <div className="overflow-x-auto">
                                <table className="table table-zebra">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>সময়</th>
                                            <th>খাবার</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <td>সকাল ৬ঃ৩০ টা</td>
                                            <td>ভুনা খিচুড়ি, ডিম ভাজি</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                            <td>দুপুর ১ঃ০০ টা</td>
                                            <td>ভাত, ডাল, মুরগীর মাংস</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>
                                            <td>রাত ৮ঃ০০ টা</td>
                                            <td>ভাত, ডাল, মাছ ভর্তা, সবজি</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="card shadow-xl mb-6 mx-auto">
                    <div className="card-inner">
                        <div className="card-front flex flex-col">
                            <h1>শনিবার</h1>
                            <img className='rounded-xl' src={food2} />
                        </div>
                        <div className="card-back">
                            <div className="overflow-x-auto">
                                <table className="table table-zebra">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>সময়</th>
                                            <th>খাবার</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <td>সকাল ৬ঃ৩০ টা</td>
                                            <td>ভুনা খিচুড়ি, ডিম ভাজি</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                            <td>দুপুর ১ঃ০০ টা</td>
                                            <td>ভাত, ডাল, মুরগীর মাংস</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>
                                            <td>রাত ৮ঃ০০ টা</td>
                                            <td>ভাত, ডাল, মাছ ভর্তা, সবজি</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className="card shadow-xl mb-6 mx-auto">
                    <div className="card-inner">
                        <div className="card-front flex flex-col">
                            <h1>রবিবার</h1>
                            <img className='rounded-xl' src={food3} />
                        </div>
                        <div className="card-back">
                            <div className="overflow-x-auto">
                                <table className="table table-zebra">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>সময়</th>
                                            <th>খাবার</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <td>সকাল ৬ঃ৩০ টা</td>
                                            <td>ভুনা খিচুড়ি, ডিম ভাজি</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                            <td>দুপুর ১ঃ০০ টা</td>
                                            <td>ভাত, ডাল, মুরগীর মাংস</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>
                                            <td>রাত ৮ঃ০০ টা</td>
                                            <td>ভাত, ডাল, মাছ ভর্তা, সবজি</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 4 */}
                <div className="card shadow-xl mb-6 mx-auto">
                    <div className="card-inner">
                        <div className="card-front flex flex-col">
                            <h1>সোমবার</h1>
                            <img className='rounded-xl' src={food4} />
                        </div>
                        <div className="card-back">
                            <div className="overflow-x-auto">
                                <table className="table table-zebra">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>সময়</th>
                                            <th>খাবার</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <td>সকাল ৬ঃ৩০ টা</td>
                                            <td>ভুনা খিচুড়ি, ডিম ভাজি</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                            <td>দুপুর ১ঃ০০ টা</td>
                                            <td>ভাত, ডাল, মুরগীর মাংস</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>
                                            <td>রাত ৮ঃ০০ টা</td>
                                            <td>ভাত, ডাল, মাছ ভর্তা, সবজি</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 5 */}
                <div className="card shadow-xl mb-6 mx-auto">
                    <div className="card-inner">
                        <div className="card-front flex flex-col">
                            <h1>মঙ্গোলবার</h1>
                            <img className='rounded-xl' src={food5} />
                        </div>
                        <div className="card-back">
                            <div className="overflow-x-auto">
                                <table className="table table-zebra">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>সময়</th>
                                            <th>খাবার</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <td>সকাল ৬ঃ৩০ টা</td>
                                            <td>ভুনা খিচুড়ি, ডিম ভাজি</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                            <td>দুপুর ১ঃ০০ টা</td>
                                            <td>ভাত, ডাল, মুরগীর মাংস</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>
                                            <td>রাত ৮ঃ০০ টা</td>
                                            <td>ভাত, ডাল, মাছ ভর্তা, সবজি</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 6 */}
                <div className="card shadow-xl mb-6 mx-auto">
                    <div className="card-inner">
                        <div className="card-front flex flex-col">
                            <h1>বুধবার</h1>
                            <img className='rounded-xl' src={food6} />
                        </div>
                        <div className="card-back">
                            <div className="overflow-x-auto">
                                <table className="table table-zebra">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>সময়</th>
                                            <th>খাবার</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <td>সকাল ৬ঃ৩০ টা</td>
                                            <td>ভুনা খিচুড়ি, ডিম ভাজি</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                            <td>দুপুর ১ঃ০০ টা</td>
                                            <td>ভাত, ডাল, মুরগীর মাংস</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>
                                            <td>রাত ৮ঃ০০ টা</td>
                                            <td>ভাত, ডাল, মাছ ভর্তা, সবজি</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 7 */}
                <div className="card shadow-xl mb-6 mx-auto">
                    <div className="card-inner">
                        <div className="card-front flex flex-col">
                            <h1>বৃহস্পতিবার</h1>
                            <img className='rounded-xl' src={food4} />
                        </div>
                        <div className="card-back">
                            <div className="overflow-x-auto">
                                <table className="table table-zebra">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>সময়</th>
                                            <th>খাবার</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <td>সকাল ৬ঃ৩০ টা</td>
                                            <td>ভুনা খিচুড়ি, ডিম ভাজি</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                            <td>দুপুর ১ঃ০০ টা</td>
                                            <td>ভাত, ডাল, মুরগীর মাংস</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>
                                            <td>রাত ৮ঃ০০ টা</td>
                                            <td>ভাত, ডাল, মাছ ভর্তা, সবজি</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Food;