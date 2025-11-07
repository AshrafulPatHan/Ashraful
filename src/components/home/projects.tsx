import Link from "next/link";
import AsumGamerBD from "./Projects/AsumGamerBD";
import Royal from "./Projects/Royal";
import Kuripara from "./Projects/Kuripara";


export default function Projects() {
    return (
        <>
            <div className="flex flex-col items-center 
            py-16  bg-gradient-to-r from-gray-900 to-gray-950 text-white max-w-screen overflow-hidden">
                <div>
                    <h2 className="text-[30px] font-bold text-center ">My Best Work</h2>
                    <p className="text-xl font-bold text-center text-[#F87171] mb-6 ">Explore My Projects and work</p>
                    <div className="flex flex-col xl:flex-row items-center gap-8">
                        <div className="flex flex-col xl:flex-row gap-8 lg:gap-8" id="project-2Card">
                            {/* project  1*/}
                            <AsumGamerBD />
                            {/* center card */}
                            <Royal/>
                            {/* <TechnoBlogger /> */}
                        </div>
                        <Kuripara />
                    </div>
                </div>
                <div className="mt-10">
                    <Link href='/project'
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold 
                        py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                    >
                        All Projects
                    </Link>
                </div>
            </div>
        </>
    )
}