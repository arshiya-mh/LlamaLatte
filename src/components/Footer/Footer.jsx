import fic from "./../../assets/logo.jpg";
import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footeer() {
  return (
    <>

      <div className="w-full h-[1px] bg-[color:var(--border)] my-4" />

      <Footer
        container
        className="
          bg-[color:var(--bg)]
          text-[color:var(--text)]
        "
      >
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-around md:flex md:grid-cols-1">
            <div>
              <FooterBrand className="w-[100px] h-[100px] rounded-full" src={fic} />
            </div>

            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <FooterLinkGroup col className="items-center">
                  <FooterLink as={Link} to={"/"} className="hover:text-[#f3cf7a] lale">
                    صفحه اصلی
                  </FooterLink>
                  <FooterLink as={Link} to={"/blog"} className="hover:text-[#f3cf7a] lale">
                    بلاگ
                  </FooterLink>
                </FooterLinkGroup>
              </div>

              <div>
                <FooterLinkGroup col className="items-center">
                  <FooterLink as={Link} to={"/aboutus"} className="hover:text-[#f3cf7a] lale">
                    درباره ما
                  </FooterLink>
                  <FooterLink as={Link} to={"/contactus"} className="hover:text-[#f3cf7a] lale">
                    تماس با ما
                  </FooterLink>
                </FooterLinkGroup>
              </div>
            </div>
          </div>

          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <FooterCopyright
              href="#"
              by="ARSHIYA-MH"
              year={2024}
              className="text-[color:var(--text)]"
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FooterIcon className="hover:text-[#f3cf7a] text-[color:var(--text)]" href="#" icon={BsFacebook} />
              <FooterIcon className="hover:text-[#f3cf7a] text-[color:var(--text)]" href="#" icon={BsInstagram} />
              <FooterIcon className="hover:text-[#f3cf7a] text-[color:var(--text)]" href="#" icon={BsTwitter} />
              <FooterIcon className="hover:text-[#f3cf7a] text-[color:var(--text)]" href="#" icon={BsGithub} />
              <FooterIcon className="hover:text-[#f3cf7a] text-[color:var(--text)]" href="#" icon={BsDribbble} />
            </div>
          </div>


          <FooterDivider className="!border-[color:var(--border)]" />

          <div className="w-full text-center">
            <p className="text-[color:var(--text)]">Developed by Arshiya-mh</p>
          </div>
        </div>
      </Footer>
    </>
  );
}

export default Footeer;
