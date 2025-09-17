import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Whatis = () => {
  const whatIsItems = [
    {
      img: "./img/seed.png",
      title: "Yield Aggregator",
      sub_title: "One-click yield aggregation",
      description: "Choose multiple stablecoin strategies, diversify in seconds, and optimize your yield without complexity",
    },
    {
      img: "./img/plant_1.png",
      title: "Yield-backed Stablecoin ",
      sub_title: "Unlock liquidity with BYD",
      description: "Mint BYD against your yield-generating LP tokens to stay liquid and productive at the same time",
    },
    {
      img: "./img/plant_2.png",
      title: "Boost DeFi Liquidity",
      sub_title: "Boost protocols, earn more",
      description: "Your liquidity empowers DeFi — vote for pools, earn bribes, and maximize your rewards.",
    },
  ]

  return (
    <section className="">
      <h2>What is Backyard?</h2>
      <div className=" md:flex gap-[78px] items-end pt-5">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          className="md:hidden"
        >
          {whatIsItems.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="flex-1 flex-col items-center">
                <div className="h-50 relative
             flex items-center justify-center">
                  <img src={item.img} alt={item.title} className="absolute -bottom-6" />
                </div>
                <div className="flex items-center gap-[34px] py-3 px-[13px] rounded-[45px] bg-(--bg-09) backdrop-blur-xs">
                  <span className="size-[33px] flex items-center justify-center font-[Archivo] font-[600] text-(--color-06) rounded-full bg-(--bg-10)">{i + 1}</span>
                  <span className="font-[Gilroy] font-[600]  text-xl text-(--color-02)">{item.title}</span>
                </div>
                <div className="py-[30px] px-8 mt-[15px] rounded-[31px] bg-(--bg-09) backdrop-blur-xs">
                  <h4>{item.sub_title}</h4>
                  <p className="font-[Gilroy] text-sm text-(--color-18)">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>

          ))}
        </Swiper>

      </div>
    </section>
  );
}
export default Whatis;