export const Aboutinfo = () => {
  return (
    <div className=" w-full  bg-gray-50 dark:bg-[#111827] p-8 ">
      <div className="container mx-auto">
        <div className=" flex justify-center">
          <p className=" dark:text-white rounded-lg  justify-center">
            about me
          </p>
        </div>
        <div className=" flex w-full justify-center items-center md:hidden">
          <img src="tommobileinfo.png" alt="" />
        </div>
        <div className="w-full  border-3 flex">
          <div className=" md:flex hidden">
            <img src="image.png" alt="" />
          </div>
          <div className="w-[584px] gap-2 flex flex-col dark:text-white">
            <h1 className="">Curious about me? Here you have it:</h1>
            <p className=" ">
              I'm a designer turned full stack developer, passionate about
              React.js and Node.js. I excel in blending technical and visual
              aspects to craft exceptional digital products, prioritizing user
              experience, precise design, and optimized code.
            </p>
            <p className=" ">
              Since starting my web development journey in 2015, I've embraced
              challenges and kept up with the latest tech trends. Now in my
              early thirties, seven years in, I'm building cutting-edge web apps
              using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and
              more.
            </p>
            <p className=" ">
              Since starting my web development journey in 2015, I've embraced
              challenges and kept up with the latest tech trends. Now in my
              early thirties, seven years in, I'm building cutting-edge web apps
              using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and
              more.
            </p>
            <p className="">Finally, some quick bits about me.</p>
            <div className="">
              <div className=" flex">
                <div className=" flex flex-col">
                  <li className=" ">B.E. in Computer Engineering</li>
                  <li className="   ">Full time freelancer</li>
                </div>
                <div className=" ">
                  <li className=" ">Avid learner</li>
                </div>
              </div>
            </div>

            <div className="">
              <p>
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
