import React from "react";
import img_1 from '../../../assets/Room Types/room-1.jpg'
import img_2 from '../../../assets/Room Types/room-2.jpg'
import img_3 from '../../../assets/Room Types/room-3.jpg'
import img_4 from '../../../assets/Room Types/room-4.jpg'


const Gallery = () => {
    const data = [
        {
            imgelink:
                `${img_1}`
        },
        {
            imgelink:
                `${img_2}`
        },
        {
            imgelink:
                `${img_3}`
        },
        {
            imgelink:
                `${img_4}`
        },
        {
            imgelink:
                "https://i.postimg.cc/wv2Mb1HD/IMG-20200912-114131.jpg",
        },
        {
            imgelink:
                "https://i.postimg.cc/tg2GKWZR/IMG-20200912-122104.jpg",
        },
        {
            imgelink:
                "https://i.postimg.cc/wv2Mb1HD/IMG-20200912-114131.jpg",
        },
        {
            imgelink:
                "https://i.postimg.cc/fb2Tx6vv/IMG-20200912-114606.jpg",
        },

    ];

    const [active, setActive] = React.useState(
        "https://i.postimg.cc/3JdNnrqD/IMG-20200912-114729.jpg",
    );
    return (
        <div>
            <div>
                <h1 className='text-center font-bold text-4xl text-[#63D5D7]'>রুমের কিছু ছবি</h1>
            </div>
            <div className="grid gap-4 my-24">
                <div>
                    <img
                        className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                        src={active}
                        alt=""
                    />
                </div>
                <div className="grid grid-cols-5 gap-4">
                    {data.map(({ imgelink }, index) => (
                        <div key={index}>
                            <img
                                onClick={() => setActive(imgelink)}
                                src={imgelink}
                                className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                                alt="gallery-image"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;