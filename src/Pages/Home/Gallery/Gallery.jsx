import React from "react";

const Gallery = () => {
    const data = [
        {
            imgelink:
                "https://i.postimg.cc/3JdNnrqD/IMG-20200912-114729.jpg",
        },
        {
            imgelink:
                "https://i.postimg.cc/rsL6WJ7J/IMG-20200912-115447.jpg",
        },
        {
            imgelink:
                "https://i.postimg.cc/tRmCZQgR/IMG-20200912-114805.jpg",
        },
        {
            imgelink:
                "https://i.postimg.cc/HLQVXShZ/IMG-20200912-113208.jpg",
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
    );
};

export default Gallery;