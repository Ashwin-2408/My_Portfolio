import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div className="p-7 px-12 bg-[#EDEBE6] flex flex-row justify-between">
      <div className="flex flex-row gap-24">
        <a className="font-bold">HOME</a>
        <a className="font-bold">ABOUT</a>
        <a className="font-bold">PROJECTS</a>
      </div>
      <div className="flex flex-row gap-12 justify-end pr-7">
        <FontAwesomeIcon
          icon={faLinkedin}
          color="#1e3050"
          className=" h-[30px]"
        />
        <FontAwesomeIcon icon={faGithub} className="h-[30px]" />
        <FontAwesomeIcon icon={faInstagram} className="h-[30px]" />
      </div>
    </div>
  );
};

export default Header;
