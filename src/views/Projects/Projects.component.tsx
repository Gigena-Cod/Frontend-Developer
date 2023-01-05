import { FC } from "react";
import "./Projects.css";

import MRLogo from "../../assets/projects/MonsterRolodexLogo.png";
import MR from "../../assets/projects/MonsterRolodex.png";


const ProjectsComponent: FC = () => (
  <div className="mt-8 min-h-custom snap-center h-auto justify-start flex items-center flex-col max-w-screen-2xl mx-auto text-white">
    <div className="justify-center flex items-center flex-col title-section">
      <div className="text-center uppercase text-5xl md:text-6xl font-bold title">
        PROYECTOS
      </div>
      <hr className=" w-10 h-2 my-3 rounded-xl  bg-yellow-400" />
      <div className="text-center  lg:w-4/5 text-xl mx-auto subtitle">
        Una mirada a mis trabajos, inspiración de diseño y creaciones
        cuestionables.
      </div>
    </div>

    <div className="mt-14 gap-16 flex flex-col  content">
      <div className=" max-w-5xl flex card">
        <div className="mt-20 mx-12 line">&nbsp;</div>
        <div className="flex gap-x-8 content-card">
          <div className="w-2/3  flex flex-col gap-x-4 decription">
            <div className="relative mb-4 title">
              <div className=" absolute title_logo">
                <img
                  src={MRLogo}
                  alt=""
                  className="w-16 h-16 border border-primary shadow shadow-slate-100  bg-gray-300 rounded-full"
                />
              </div>
              <div className="text-4xl pt-3 font-bold title_text">
                MONSTERS ROLODEX
              </div>
              <div className=" italic subtitle">Sept. 2022 - En progeso</div>
            </div>
            <div className="flex flex-col gap-y-4 text">
              Mi primer proyecto en React Js, en el cual pude entender los
              conceptos basicos de manera formidable.
              <br className="my-8" />
              Para el estado utilizo el hook useState, para los efectos
              secundarios el hook useEffect. Utilizo la desestructuración de
              objetos para pasar los props
            </div>
            <div className="mt-6 flex links">
              <a
                target="_blank"
                className="rounded-full  p-1 border border-white cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 git"
                href="https://www.github.com/Gigena-Cod/Monsters-Rolodex"
              >
                <svg
                  className="rounded-full  w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="pt-3 w-1/3 image">
            <img src={MR} alt="" className=" shadow rounded " />
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default ProjectsComponent;
