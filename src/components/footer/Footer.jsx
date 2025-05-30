import React from "react";
import mainLogo from "../../images/main-logo 1.png";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  //--------- Footer data ------------
  const footerData = [
    {
      title: "SERVICES",
      items: [
        "Express Parcel",
        "Warehousing",
        "Part Truckload",
        "Full Truckload",
        "Cross Border",
        "Data Intelligence",
        "Software Platform",
      ],
    },
    {
      title: "SOLUTIONS",
      items: ["D2C Brands", "Personal Courier", "B2B Enterprises"],
    },
    {
      title: "PARTNERS",
      items: ["Franchise Opportunities", "Delivery Partner", "Fleet Owner"],
    },
    {
      title: "COMPANY",
      items: [
        "About Us",
        "Governance",
        "Investor Relations",
        "ODR Portal",
        "Press Release",
        "Careers",
      ],
    },
    {
      title: "GET IN TOUCH",
      items: ["Support", "Raise a query", "Rate Calculator"],
    },
    {
      title: "POLICIES",
      items: [
        "Terms & Conditions",
        "Privacy Policy",
        "Cookie Policy",
        "Fraud Disclaimer",
        "ONDC Disclaimer",
      ],
    },
  ];
  //--------- Footer data end ------------

  return (
    <>
      {/* ------------------ main container ---------------- */}
      <div className="bg-custom-gray p-[0.535rem] xl:px-10">
        <div className=" container mx-auto pt-10 px-5">
          <div className=" py-3 ">
            <img src={mainLogo} alt="logo" className="h-[2rem] " />
            <p className="text-#808080 text-[0.6rem] px-2">
              ISO 9001: 2015, ISO 27001: 2013 Certified Company
            </p>
            <p className="#808080 text-[0.6rem] px-2">
              {" "}
              
            </p>
          </div>
          <hr className=" border-2 border-#808080" />
          <div className=" py-10">
            <div className="container mx-auto px-4  ">
              {/* ------------- footer data mapping here -------------- */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-8 ">
                {footerData?.map((section, index) => (
                  <div key={index} className="col-span-1">
                    <h3 className=" font-bold mb-4">{section.title}</h3>
                    <ul className="font-sansation font-regular text-sm space-y-4 cursor-pointer ">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} >{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              {/* ------------- footer data mapping end here -------------- */}
            </div>
          </div>
          <hr className="border-2 border-#808080" />
          {/* ------------------- copyright content ----------------- */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4  h-[auto] ">
            <div className="col-span-3 ">
              <div> 
                <h1 className="bold-sansation"> Information Security Policy</h1>
                <p className="text-[0.7rem] font-sansation font-regular">
                  {" "}
                  Nextday is committed to safeguarding the confidentiality,
                  integrity and availability of all physical and electronic
                  information assets of the organization.
                </p>
                <p className="text-[0.7rem] font-sansation font-regular">
                  {" "}
                  We ensure that the regulatory, operational and contractual
                  requirements are fulfilled
                </p>
              </div>
            </div>
            {/* ------------------- copyright content end ----------------- */}

            {/* ------------------- social icons ------------------ */}
            <div className="lg:col-span-1 ">
              <div className="flex justify-center items-center  h-full gap-2 ">
                <a href="">
                  {" "}
                  <FaFacebook className="text-4xl rounded-full bg-black  text-white p-2 cursor-pointer " />
                </a>
                <a href="">
                  {" "}
                  <FaXTwitter className="text-4xl rounded-full bg-black text-white p-2 cursor-pointer" />
                </a>
                <a href="">
                  {" "}
                  <LiaLinkedinIn className="text-4xl rounded-full bg-black text-white p-2 cursor-pointer" />
                </a>
                <a href="">
                  {" "}
                  <FaYoutube className="text-4xl rounded-full bg-black text-white p-2 cursor-pointer" />
                </a>
                <a href="">
                  <FaInstagram className="text-4xl rounded-full bg-black text-white p-2 cursor-pointer " />
                </a>
              </div>
            </div>
            {/* ------------------- social icons end ------------------ */}
          </div>

        </div>
      </div>
      {/* ------------------ main container end ---------------- */}
    </>
  );
};

export default Footer;
