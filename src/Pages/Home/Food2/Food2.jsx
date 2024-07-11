import boroMach from '../../../assets/Food/boro mach.jpg'
import murgi from '../../../assets/Food/murgi.jpg'
import chotoMach from '../../../assets/Food/choto mach.jpg'
import dimVuna from '../../../assets/Food/dim vuna.jpg'
import khicuri from '../../../assets/Food/khicuri.jpg'
import sobji from '../../../assets/Food/sobji.jpg'
import machVorta from '../../../assets/Food/mach vorta.jpg'
import dalVaji from '../../../assets/Food/dal-vaji.jpg'
import vorta from '../../../assets/Food/vorta.jpg'
const Food2 = () => {
    return (
        <div className="my-24">
            <div className="mb-10 text-center">
                <h1 className=" font-bold text-4xl text-[#63D5D7]">খাবার তালিকা</h1>
                <p className='text-xl'>প্রত্যেক মাসের শেষ সপ্তাহে নৈশ ভোজের আয়োজন করা হয়। </p>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-lg">
                            <th>বার</th>
                            <th>সকাল</th>
                            <th>দুপুর</th>
                            <th>রাত</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                           <th className='text-lg font-bold'>শুক্রবার</th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={khicuri}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="font-bold text-xl">ভুনা খিচুড়ি</div>
                                        <div className="text-sm opacity-50">ডিম ভাজি</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={murgi}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="font-bold text-xl">মুরগীর মাংস</div>
                                        <div className="text-sm opacity-50">ভাত, ডাল, সবজি/ ভর্তা</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={machVorta}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="font-bold text-xl">মাছ ভর্তা, সবজি</div>
                                        <div className="text-sm opacity-50">ভাত, ডাল</div>
                                    </div>
                                </div>
                            </td>
                            
                        </tr>
                        {/* row 2 */}
                        <tr>
                        <th className='text-lg font-bold'>শনিবার</th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={sobji}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl">রুটি</div>
                                        <div className="text-sm opacity-50">সবজি</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={boroMach}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl">বড় মাছ</div>
                                        <div className="text-sm opacity-50">ভাত, ডাল, সবজি/ভর্তা</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={murgi}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl">মুরগীর মাংস</div>
                                        <div className="text-sm opacity-50">ভাত, ডাল</div>
                                    </div>
                                </div>
                            </td>
                            
                        </tr>
                        {/* row 3 */}
                        <tr>
                        <th className='text-lg font-bold'>রবিবার</th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={dalVaji}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl">ভাত বা রুটি</div>
                                        <div className="text-sm opacity-50">ডাল, ভর্তা বা ভাজি</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={dimVuna}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl">ডিম ভুনা</div>
                                        <div className="text-sm opacity-50">ভাত, ডাল, সবজি, ভর্তা</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={chotoMach}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl">ছোটমাছ </div>
                                        <div className="text-sm opacity-50">ডাল, ভাত</div>
                                    </div>
                                </div>
                            </td>
                            
                        </tr>
                        {/* row 4 */}
                        <tr>
                        <th className='text-lg font-bold'>সোমবার</th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={dalVaji}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl">রুটি</div>
                                        <div className="text-sm opacity-50">বুটের ডাল</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={murgi}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl">মুরগীর মাংস</div>
                                        <div className="text-sm opacity-50">ভাত, ডাল, সবজি, ভর্তা</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={sobji}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl">ডিম ভাজি/ সবজি </div>
                                        <div className="text-sm opacity-50">ভাত, ডাল</div>
                                    </div>
                                </div>
                            </td>
                            
                        </tr>
                        {/* row 5 */}
                        <tr>
                        <th className='text-lg font-bold'>মঙ্গোলবার</th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={khicuri}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl">খিচুড়ি</div>
                                        <div className="text-sm opacity-50">সবজি খিচুড়ি</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={boroMach}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl">বড় মাছ</div>
                                        <div className="text-sm opacity-50">ভাত, ডাল, সবজি /ভর্তা</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={sobji}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl">গিলা কলিজা বা সবজি</div>
                                        <div className="text-sm opacity-50">ভাত, ভর্তা</div>
                                    </div>
                                </div>
                            </td>
                            
                        </tr>
                        {/* row 6 */}
                        <tr>
                        <th className='text-lg font-bold'>বুধবার</th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={sobji}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl">রুটি</div>
                                        <div className="text-sm opacity-50">হালুয়া</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={murgi}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl">মুরগীর মাংস</div>
                                        <div className="text-sm opacity-50">ভাত, ডাল, সবজি/ভর্তা</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={dimVuna}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl">ডিম ভুনা </div>
                                        <div className="text-sm opacity-50">ভাত, ডাল</div>
                                    </div>
                                </div>
                            </td>
                            
                        </tr>
                        {/* row 7 */}
                        <tr>
                        <th className='text-lg font-bold'>বৃহস্পতিবার</th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={vorta}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl">ভাত বা রুটি</div>
                                        <div className="text-sm opacity-50">ডাল, ভর্তা বা সবজি</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={dimVuna}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl">ডিম ভুনা</div>
                                        <div className="text-sm opacity-50">ডাল, ভাত, সবজি/ ভর্তা</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={chotoMach}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl">সবজি, ভর্তা বা ছোটমাছ</div>
                                        <div className="text-sm opacity-50">ডাল,ভাত</div>
                                    </div>
                                </div>
                            </td>
                            
                        </tr>
                    </tbody>
                    {/* foot */}
                    
                </table>
            </div>
        </div>
    );
};

export default Food2;