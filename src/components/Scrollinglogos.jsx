import React from "react";

const logos = [
  // List of image URLs or import statements for logos
  "data:image/png;base64,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",
  "https://1000logos.net/wp-content/uploads/2018/08/Nike-logo-500x281.jpg",
  "https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-2006.png",
  "https://qph.cf2.quoracdn.net/main-qimg-b90773fe6efacd38d54449d41dcbe2a2-lq",
  "https://inkbotdesign.com/wp-content/uploads/2023/08/nvidia-logo-design-tech-company-1024x536.webp",
  "https://inkbotdesign.com/wp-content/uploads/2023/02/Intel-Logo-Design-in-BLue-1024x640.png",
  "https://inkbotdesign.com/wp-content/uploads/2012/09/Microsoft-Logo-Design.png",
  "https://www.logogenie.net/images/articles/tech-logos9.jpg",
  "https://static.wixstatic.com/media/72c0b2_6648e1f9b7ea4cdd9a748d832e241382~mv2.jpg/v1/fill/w_924,h_476,al_c,q_85,enc_auto/72c0b2_6648e1f9b7ea4cdd9a748d832e241382~mv2.jpg",
  "https://www.articulatemarketing.com/hubfs/tech%20company%20logos%20-%20the%20articulate%20logo.png",
  "https://www.logogenie.net/images/articles/tech-logos7.jpg",
  "https://bcassetcdn.com/public/blog/wp-content/uploads/2022/01/10211259/Loom.jpg",
  "https://www.logogenie.net/images/articles/tech-logos6.jpg",
  "https://www.logosvgpng.com/wp-content/uploads/2018/03/hyland-software-logo-vector.png",
  "https://www.veracode.com/sites/default/files/2022-10/verified-directory-amtech_logo_2.png",
  "https://static.vecteezy.com/system/resources/previews/042/148/611/non_2x/new-twitter-x-logo-twitter-icon-x-social-media-icon-free-png.png",
];
const logos1 = [
  "https://static.wixstatic.com/media/72c0b2_555566b6e49a48a09cf53b301fce6769~mv2.jpg/v1/fill/w_924,h_476,al_c,q_85,enc_auto/72c0b2_555566b6e49a48a09cf53b301fce6769~mv2.jpg",
  "https://media.designrush.com/inspirations/676695/conversions/20-preview.jpg",
  "https://justcreative.com/wp-content/uploads/2023/05/Square.png.webp",
  "https://justcreative.com/wp-content/uploads/2023/05/Evernote.png.webp",
  "https://www.logogenie.net/images/articles/tech-logos2.jpg",
  "https://bcassetcdn.com/public/blog/wp-content/uploads/2022/11/09183931/comtug-logo-design-combination-mark-logo-unused-by-md-zahid-hasan-dribbble.png",
  "https://bcassetcdn.com/public/blog/wp-content/uploads/2022/11/09184036/hostlink-logo-design-software-company-logo-by-mahjabin-afrin-dribbble.png",
  "https://media.designrush.com/tinymce_images/332765/conversions/Widefix-content.jpg",
  "https://transcolabs.com/wp-content/uploads/2020/03/Software-Company-Logo-Design.png",
  "https://1000logos.net/wp-content/uploads/2020/08/Infosys-Logo-tumb.jpg",
  "https://media.designrush.com/tinymce_images/471113/conversions/Sipod-Software-app-company-logo-design-content.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHB3-ZMUidYngurLAswE3HMfdB1ZyJnBDKSA&s",
  "https://media.designrush.com/inspirations/676237/conversions/10-preview.jpg",
  "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1956.jpg?width=672&height=454&name=ibm-logo-1956.jpg",
  "https://careers.schbang.com/recruit/viewCareerImage.do?page_id=596430000000311277&type=logo&file_name=company_logo.png",
  // Add more logos as needed
];

const ScrollingLogos = () => {
  return (
    <div className="scrolling-logos">
      <h1>Companies hiring with us</h1>
      <div className="logos-container">
        <div className="logos-row">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt="logo" className="logo" />
          ))}
        </div>
        <div className="logos-row">
          {logos1.map((logo, index) => (
            <img key={index} src={logo} alt="logo" className="logo" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingLogos;
