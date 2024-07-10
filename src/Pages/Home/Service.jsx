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
                <h1 className="text-center font-bold text-4xl text-[#63D5D7]">সার্ভিস সমূহ</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className='p-10 border-2 border-[#63D5D7] text-center rounded-2xl'>
                    <img className='mx-auto' src={icon3} />
                    <h3 className='text-xl font-bold'>মনোরম পরিবেশ</h3>
                </div>
                <div className='p-10 border-2 border-[#63D5D7] text-center rounded-2xl'>
                    <img className='mx-auto' src={icon8} />
                    <h3 className='text-xl font-bold'>সার্বক্ষণিক নিরাপত্তা</h3>
                </div>
                <div className='p-10 border-2 border-[#63D5D7] text-center rounded-2xl'>
                    <img className='mx-auto' src={icon9} />
                    <h3 className='text-xl font-bold'>পড়াশোনার সু-ব্যবস্থা</h3>
                </div>
                <div className='p-10 border-2 border-[#63D5D7] text-center rounded-2xl'>
                    <img className='mx-auto' src={icon10} />
                    <h3 className='text-xl font-bold'>বিশুদ্ধ খাবার পানি</h3>
                </div>
                <div className='p-10 border-2 border-[#63D5D7] text-center rounded-2xl'>
                    <img className='mx-auto' src={icon2} />
                    <h3 className='text-xl font-bold'>রুম ক্লিনিং সার্ভিস</h3>
                </div>
                <div className='p-10 border-2 border-[#63D5D7] text-center rounded-2xl'>
                    <img className='mx-auto' src={icon} />
                    <h3 className='text-xl font-bold'>সিসি ক্যামেরা</h3>
                </div>
                <div className='p-10 border-2 border-[#63D5D7] text-center rounded-2xl'>
                    <img className='mx-auto' src={icon4} />
                    <h3 className='text-xl font-bold'>উন্নত মানের খাবার</h3>
                </div>
                <div className='p-10 border-2 border-[#63D5D7] text-center rounded-2xl'>
                    <img className='mx-auto' src={icon5} />
                    <h3 className='text-xl font-bold'>ফ্রিজের ব্যবস্থা</h3>
                </div>
                <div className='p-10 border-2 border-[#63D5D7] text-center rounded-2xl'>
                    <img className='mx-auto' src={icon6} />
                    <h3 className='text-xl font-bold'>জেনারেটরের ব্যবস্থা</h3>
                </div>
                <div className='p-10 border-2 border-[#63D5D7] text-center rounded-2xl'>
                    <img className='mx-auto' src={icon7} />
                    <h3 className='text-xl font-bold'>মেডিকেল সার্ভিস</h3>
                </div>
            </div>
        </div>
    );
};

export default Service;