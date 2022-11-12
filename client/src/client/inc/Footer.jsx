import React from "react";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className=" bg-light">
      <div className="container ">
        <div className="row">
          <div className="col-lg-12 mt-3 text-center">
            <h4 className="text-muted">{t("admin")}</h4>
            <p>যে কোনো প্রয়োজনে ইমেইল করুন। </p>
            <p>email: mdhgtushar@gamil.com</p>
            <p>।।__ধন্যবাদ__।।</p>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Footer;
