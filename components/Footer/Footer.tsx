import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer
      className={"flex flex-col text-black-100 mt-5 border-t border-gray-100"}
    >
      <div
        className={
          "flex justify-between flex-wrap gap-5 max-md:flex-col sm:px-16 px-6 py-10"
        }
      >
        <div className={"flex flex-col justify-start items-start gap-6"}>
          <Image
            className={"object-contain"}
            src={"./logo.svg"}
            alt={"car logo"}
            width={118}
            height={18}
          />
          <p className={"text-base text-gray-700"}>
            Car Hub 2024 <br /> Все права защищены &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => {
            return (
              <div className={"footer__link"} key={link.title}>
                <h3 className={"font-bold"}>{link.title}</h3>
                {link.links.map((item) => {
                  return (
                    <Link key={item.title} href={item.url}>
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

        <div
          className={
            "flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 py-10"
          }
        >
          <div className="footer-copyright-link">
            <Link className={"text-gray-500"} href={"/"}>
              Правила политики
            </Link>
            <Link className={"text-gray-500"} href={"/"}>
              Условия Использования
            </Link>
          </div>
        </div>
    </footer>
  );
};
