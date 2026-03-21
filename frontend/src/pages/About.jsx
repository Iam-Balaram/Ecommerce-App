import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox"

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"}/>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-112.5" src={assets.about_img} alt="About us"/>
        <div className="flex flex-col justify-center gap-6 ms:w-2/4 text-gray-600">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, veritatis. Minus sequi optio recusandae, similique quas, dolor eos, ipsa iure maiores quidem minima? Facere hic minima, fugit asperiores minus aperiam.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae esse, adipisci maxime nisi voluptas molestiae veniam corporis nulla ipsam modi harum aspernatur debitis illum, officia architecto atque consequuntur expedita assumenda.</p>
          <b className="text-gray-800">Our Mission</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus atque cupiditate minus. Ad, delectus. Ullam blanditiis optio illo vel ipsa veritatis, nisi dicta fugit delectus itaque quam labore rerum molestias placeat obcaecati accusamus fugiat cum quae dolorum ratione animi corrupti autem doloremque reprehenderit! Officiis unde praesentium pariatur sapiente exercitationem asperiores molestiae optio libero odit minima esse excepturi voluptate, voluptatibus voluptatem, enim saepe temporibus aspernatur hic? Corporis minus dolorem dolor deserunt perspiciatis facilis voluptate nulla, provident nesciunt optio obcaecati in nisi suscipit ad nihil? Quia accusamus esse a deleniti praesentium quis, dolores omnis impedit nesciunt quisquam debitis laborum aperiam? Tempore eaque ipsa officia corporis iure asperiores, tempora, quam eos laborum praesentium in quae a tenetur, hic minus nemo aperiam earum laudantium similique. Eaque cumque labore sequi explicabo inventore quasi quae sapiente rerum dolorem delectus aperiam dolore nam exercitationem non molestiae animi, modi amet beatae. Possimus itaque excepturi dicta facilis alias voluptatem! Veritatis sapiente accusamus molestiae non, recusandae laudantium repellendus ab dolore. Iste voluptatibus odit debitis deleniti tempore iusto nihil, dicta voluptatum eum adipisci minima at delectus et magni odio excepturi. Itaque labore enim eligendi doloribus aut, necessitatibus esse! Obcaecati magnam odit molestias minima eveniet, asperiores eos soluta excepturi dolor repellendus modi.</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam soluta nulla impedit at dolorum, vero, nostrum placeat asperiores accusantium incidunt illo hic exercitationem quia accusamus tempore. A sapiente soluta quod!</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam soluta nulla impedit at dolorum, vero, nostrum placeat asperiores accusantium incidunt illo hic exercitationem quia accusamus tempore. A sapiente soluta quod!</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">Lorempsum dolor sit, amet consectetur adipisicing elit. Veniam soluta nulla impedit at dolorum, vero, nostrum placeat asperiores accusantium incidunt illo hic exercitationem quia accusamus tempore. A sapiente soluta quod!</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
};

export default About;
