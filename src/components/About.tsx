const About = () => {
  return (
    <section className="mt-16" id="About">
      <div className="md:flex items-center justify-between">
        <div className="md:flex flex-col gap-4">
          <div className="w-full flex gap-4">
            <div className="">
              <h1 className="leading-[1.1]">The yield-backed
                stablecoin protocol
                boosting DeFi <img
                  src="./img/img_1.png"
                  alt="img_1"
                  className="inline-block w-[55px] h-auto md:hidden align-middle ml-2"
                />{" "}liquidity</h1>
              <h3 className="mt-[14px]">Keep your yield working for you — we keep your liquidity accessible</h3>
            </div>
            <div className="hidden md:flex md:flex-1/2 items-baseline md:py-12 md:px-11 justify-end">
              <img src="./img/img_1.png" alt="img_1" className="" />
            </div>
          </div>
          <div className="h-[57px] flex gap-2 justify-center md:justify-start md:gap-[21px] mt-[38px] md:mt-[18px]">
            <button className="flex-[55%] md:flex-none btn btn_primary">Join Whitelist</button>
            <button className="flex-[45%] md:flex-none btn btn_secondary">
              <span className="hidden md:inline">Read Docs</span>
              <span className="inline md:hidden">Learn more</span>
              <span className="inline md:hidden ml-1">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;