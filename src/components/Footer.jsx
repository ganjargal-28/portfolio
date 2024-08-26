import { Icon } from "./icon/Icons";
export const Footer = () => {
  return (
    <div className="w-full h-[560px] md:flex flex-col  p-5   justify-center ">
      <div className="container h-[368px] flex flex-col mx-auto   justify-center    ">
        <div className="    justify-center  g ">
          <div className=" flex justify-center  ">
            <p className=" max-w-11 dark:text-gray-600 rounded-lg bg-gray-100 flex  w-full">
              Get in touch
            </p>
          </div>
          <div className=" flex  dark:text-white justify-center mt-2 ">
            <p>
              What’s next? Feel free to reach out to me if you're looking for a
              developer, have a query, or simply want to connect.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="max-w-[436px] h-[104px]  ">
            <div className="max-w-[436px] h-[44px]  flex">
              <img src="mail.png" alt="" />
              <p className=" dark:text-white text-3xl">tom@pinecone.mn</p>
              <img src="aaa.png" alt="" />
            </div>
            <div className="max-w-[436px] h-[44px]  flex">
              <img src="phone.png" alt="" />
              <p className=" dark:text-white text-3xl">+976 88112233</p>
              <img src="aaa.png" alt="" />
            </div>
          </div>
        </div>
        <div className="max-w-[1216px] h-[68px] pt-9 flex justify-center">
          <div className="max-w-[312px] h-[68px] ">
            <p>You may also find me on these platforms!</p>
            <div className=" flex justify-center">
              <Icon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
