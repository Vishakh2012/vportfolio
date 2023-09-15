import { BiLogoGithub } from "react-icons/bi";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
const Contacts:React.FunctionComponent = () => {
  return (
    <div className="flex min-h-screen justify-center items-center bg-base-200 w-screen">
      <div className="hero-content text-center w-screen">
        <div className="max-w-md mb-11">
          <h1 className="text-5xl font-bold mb-10">Contacts</h1>
          <div className="flex justify-between items-center ">
            <a href="https://github.com/Vishakh2012" className="flex mx-3">
              <div className="avatar">
                <div className="w-[64px] flex rounded-full justify-center items-center">
                  <BiLogoGithub size={64} />
                </div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/vishakhprakash/"
              className="flex mx-3"
            >
              <div className="avatar">
                <div className="w-[64px] flex rounded-full justify-center items-center">
                  <TiSocialLinkedinCircular size={64} />
                </div>
              </div>
            </a>
            <a
              href="https://www.instagram.com/vishakh_pro/"
              className="flex mx-3"
            >
              <div className="avatar">
                <div className="w-[64px] rounded-full flex justify-center items-center">
                  <FaInstagram size={64} />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
