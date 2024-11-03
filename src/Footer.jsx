import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 mt-20 text-base-content">
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">React JS</a> 
    <a className="link link-hover">MERN Stack</a> 
    <a className="link link-hover">Front-end  Development</a> 
    <a className="link link-hover">Figma to  Bootstrap</a>
  </div> 
  <div>
    <span className="footer-title">About us</span> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Projects</a> 
    <a className="link link-hover">Blog</a>
  </div> 
  <div > 
    <h1 className=" footer-title">My all social Info</h1>
    <div className="flex gap-5 text-2xl" >
    <FaFacebook onClick={()=> window.open("https://www.facebook.com/lynx.sohan/", "_blank")}></FaFacebook> 
   <FaLinkedinIn onClick={()=> window.open("https://www.linkedin.com/in/mehedi-hassan-sohan-926093230/", "_blank")}></FaLinkedinIn> 
   <FaGithub onClick={()=> window.open("https://github.com/mehedi-hassan-sohan", "_blank")}></FaGithub> 
   <FaInstagram onClick={()=> window.open("https://www.instagram.com/lynx_sohan/?hl=en", "_blank")}></FaInstagram></div> 

   
  </div> 
  <div>
    <span className="footer-title">Contact Via email </span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text"  className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div>
</footer>
    );
};

export default Footer;