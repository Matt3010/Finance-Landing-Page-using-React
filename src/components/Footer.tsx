import { footerLinks, socialMedia } from "../constants";
import { logo } from "../assets";

const Footer = () => (
    <section className="flex justify-center items-center flex-col sm:py-16 py-6">
        <div className="flex justify-between items-start md:flex-row flex-col mb-8 w-full">
            <div className="flex flex-col justify-start mr-10">
                <img src={logo} alt="hooBank" className="w-[266px] h-[72px] object-contain" />
                <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[310px] mt-4">
                    A new way to make the payments easy, reliable and secure.
                </p>
            </div>
            <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap mt-10 md:mt-0">
                {footerLinks.map((section) => (
                    <div key={section.title} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                        <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                            {section.title}
                        </h4>
                        <ul className="list-none mt-4">
                            {section.links.map((link, index) => (
                                <li
                                    key={link.name}
                                    className={`font-poppins font-normal text-dimWhite text-[16px] leading-[24px] hover:text-secondary cursor-pointer ${
                                        index !== section.links.length - 1 ? "mb-4" : "mb-0"
                                    }`}
                                >
                                    {link.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        <div className="w-full flex justify-between items-center pt-6 border-t-[1px] border-t-[#3F3E45]">
            <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
                © 2024 Brokerly. All Rights Reserved.
            </p>
            <div className="flex flex-row mt-6 md:mt-0">
                {socialMedia.map((social, index) => (
                    <img
                        key={social.id}
                        src={social.icon}
                        alt={social.id}
                        className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                            index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                        }`}
                    />
                ))}
            </div>
        </div>
    </section>
);
export default Footer;