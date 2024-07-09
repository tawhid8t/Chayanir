import icon from '../../assets/service icon/cc camera.png'
import icon2 from '../../assets/service icon/cleaning.png'
import icon3 from '../../assets/service icon/environment.png'
import icon4 from '../../assets/service icon/food.png'
import icon5 from '../../assets/service icon/fridge.png'
import icon6 from '../../assets/service icon/generator.png'
import icon7 from '../../assets/service icon/medical.png'
import icon8 from '../../assets/service icon/security.png'
import icon9 from '../../assets/service icon/study.png'
import icon10 from '../../assets/service icon/water.png'
const Service = () => {
    return (
        <div className="my-24">
            <div className="mb-10">
                <h1 className="text-center font-bold text-4xl">সার্ভিস সমূহ</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-around items-center text-xl">
                <div className="flex flex-col gap-5">
                    <div className='flex justify-between gap-6 items-center'>
                        <img className='w-20 h-20' src={icon3} />
                        <h3>মনোরম পরিবেশ</h3>
                    </div>
                    <div className='flex justify-between gap-6 items-center'>
                        <img className='w-20 h-20' src={icon8} />
                        <h3>সার্বক্ষণিক নিরাপত্তা</h3>
                    </div>
                    <div className='flex justify-between gap-6 items-center'>
                        <img className='w-20 h-20' src={icon9} />
                        <h3>পড়াশোনার সু-ব্যবস্থা</h3>
                    </div>
                    <div className='flex justify-between gap-6 items-center'>
                        <img className='w-20 h-20' src={icon10} />
                        <h3>বিশুদ্ধ খাবার পানি</h3>
                    </div>
                    <div className='flex justify-between gap-6 items-center'>
                        <img className='w-20 h-20' src={icon2} />
                        <h3>রুম ক্লিনিং সার্ভিস</h3>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className='flex justify-between gap-6 items-center'>
                        <img className='w-20 h-20' src={icon} />
                        <h3>সিসি ক্যামেরা</h3>
                    </div>
                    <div className='flex justify-between gap-6 items-center'>
                        <img className='w-20 h-20' src={icon4} />
                        <h3>উন্নত মানের খাবার</h3>
                    </div>
                    <div className='flex justify-between gap-6 items-center'>
                        <img className='w-20 h-20' src={icon5} />
                        <h3>ফ্রিজের ব্যবস্থা</h3>
                    </div>
                    <div className='flex justify-between gap-6 items-center'>
                        <img className='w-20 h-20' src={icon6} />
                        <h3>জেনারেটরের ব্যবস্থা</h3>
                    </div>
                    <div className='flex justify-between gap-6 items-center'>
                        <img className='w-20 h-20' src={icon7} />
                        <h3>মেডিকেল সার্ভিস</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;