import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
    <section id="home" className="flex md:flex-row flex-col sm:py-16 py-6">
        <div>

        </div>
        <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
            <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                <img src={discount} alt="Discount" className="w-[32px] h-[32px]"/>
                <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ml-2">
                    <span className="text-white">Crohn</span> Certified{" "}
                    {/*<span className="text-white">1 Month</span> Account*/}
                </p>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
                <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
                    The Next <br className="sm:block hidden"/> <span className="text-gradient">Generation</span>
                </h1>
                <div className="ss:flex hidden md:mr-4 mr-0">
                    <GetStarted/>
                </div>
            </div>
            <div className="flex items-end gap-2 flex-wrap">
                <h1 className="font-poppins font-semibold text-[52px] text-white leading-[1.1]">
                    Incremental Blockchain Trading System ™
                </h1>
                <small className="text-white text-xs">by Design</small>
            </div>

            <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-12">
                Our team of data scientists experts uses an A.I. methodology to identify scammers all over the world...
                ..and scam them back.
            </p>
        </div>
        <div className="ss:hidden flex justify-center items-center">
            <GetStarted/>
        </div>


        <div className="flex-1 flex justify-center items-center md:my-0 my-10 relative">
            <img src={robot} alt="Billing" className="w-full h-full relative z-[5]"/>
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"/>
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
        </div>

    </section>
);
export default Hero;
