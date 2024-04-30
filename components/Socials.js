import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://github.com/Aarya-Chauhan'} className="hover:text-accent transition-all duration-300">
      <FaGithub/>        
    </Link>
    <Link href={'https://www.linkedin.com/in/aarya-chauhan'} className="hover:text-accent transition-all duration-300">
      <FaLinkedin/>        
    </Link>
    <Link href={'https://www.instagram.com/aarya_c111'} className="hover:text-accent transition-all duration-300">
      <FaInstagram/>        
    </Link> 

  </div>;
};

export default Socials;

