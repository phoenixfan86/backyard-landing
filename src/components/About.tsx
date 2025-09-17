const About = () => {
  return (
    <section className="mt-16" id="About">
      <div className="md:flex items-center justify-between">
        <div className="md:w-188 md:flex flex-col gap-4">
          <h1>The yield-backed
            stablecoin protocol
            boosting DeFi liquidity</h1>
          <h3>Keep your yield working for you — we keep your liquidity accessible</h3>
          <div className="h-[57px] flex gap-[21px] md:mt-[79px]">
            <button className="btn btn_primary">Join Whitelist</button>
            <button className="btn btn_secondary">Read Docs</button>
          </div>
        </div>
        <div className="">
          <img src="./img/img_1.png" alt="img_1" />
        </div>
      </div>
    </section>
  );
}
export default About;