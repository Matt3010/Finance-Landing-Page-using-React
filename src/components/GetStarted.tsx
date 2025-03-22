import { arrowUp } from "../assets";

const GetStarted = () => (
    <div className="w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer">
      <div className="bg-primary w-full h-full rounded-full flex justify-center items-center flex-col">
        <div className="flex flex-row justify-center items-start">
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrowUp} alt="Arrow Up" className="w-[23px] h-[23px] object-contain" />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
);
export default GetStarted;