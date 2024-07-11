import Faq from "react-faq-component";
import faq from "../../assets/FAQ/FAQ.png"

const data = {
    rows: [
        {
            title: "থাকা খাওয়া সহ প্রতি মাসে সর্বনিম্ন কত টাকা খরচ হবে?",
            content: `৩ বেলা থাকা খাওয়া ও সকল সার্ভিস চার্জ সহ সর্বনিম্ন ৭০০০ থেকে সর্বচ্চো ১৮০০০ টাকা খরচ হতে পারে।`,
        },
        {
            title: "ভর্তি ফী কত??",
            content:
                `ভর্তি ফী বাবদ এককালীন ১০০০০ টাকা (অফেরতযোগ্য) দিতে হবে।`,
        },
        {
            title: "নিজে রান্না করে খাওয়া যাবে?",
            content: `জী নিজে রান্না করে খেতে পারবেন কিন্তু এক্ষেত্রে মাসিক সিট ভাড়া কম হবে না।`,
        },
        {
            title: "ফার্মগেট হোস্টেল থেকে কত দূরে?",
            content: `ফার্মগেটের সকল কোচিং সেন্টার থেকে ১০ মিনিট পায়ে হাঁটার দূরত্ব`
        },
        {
            title:"ছাত্রী না এমন কেউ কি হোস্টেলে থাকতে পারবে?",
            content: `জী, ছাত্রী ছাড়া যেকোনো জব Holder মহিলা এখানে থাকতে পারবে `
        },
    ],
};


const styles = {
    bgColor: 'white',
    // titleTextColor: "blue",
    // rowTitleColor: "blue",
    rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    animate: true,
    arrowIcon: "+",
    tabFocus: true
};


const FAQ = () => {
    return (
        <div className="flex justify-between items-center flex-col lg:flex-row">
            <div>
                <img className="w-[350px] h-[350px]" src={faq} />
            </div>
            <div className="mb-24">
                <h1 className="text-center text-4xl my-5 font-bold text-[#63D5D7]">কিছু কমন প্রশ্ন</h1>
                <Faq
                    data={data}
                    styles={styles}
                    config={config}
                />
            </div>
        </div>
    );
};

export default FAQ;