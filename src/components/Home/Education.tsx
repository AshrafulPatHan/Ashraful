import Image from "next/image";
import tolaram from "@/assets/image/tolaram.png";
import Programming from "@/assets/image/programing-hero.jpeg";
import * as motion from "motion/react-client"



export default function Education() {
   return(
      <div className="py-20  bg-gradient-to-b from-gray-900 to-gray-900 text-white">
         <div className="flex flex-col items-center">
            <h2 className="text-[30px] font-bold mb-1  ">Education and Training</h2>
            <p className="text-lg font-medium text-[#9CA3AF] mb-12  text-center">My education has been a journey of self-discovery and growth. Here are my educational details.</p>
            <div className="flex flex-col items-center gap-14">
               <div data-aos="zoom-in">
                  <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="flex flex-col gap-4 w-[100vw] lg:w-[900px] p-6 bg-[#030712] text-white rounded-lg 
                  hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-shadow duration-300 ">
                     <div className="flex flex-row items-center gap-4">
                        <div>
                           <Image src={tolaram} alt="Hsc" className="w-[74px] h-[74px]  " />
                        </div>
                        <div>
                           <h3 className="font-bold text-[20px] ">government tolaram college</h3>
                           <p className="font-bold text-[18px] ">Bander, Narayanganj</p>
                           <p className="font-bold text-[16px] text-[#818CF8] ">Hsc,Science</p>
                           <p className="text-[14px] text-[#6B7280] ">2024-Present</p>
                        </div>
                     </div>
                     <div className="flex flex-col gap-2">
                        <h4 className="text-green-400">Grade: Pending GPA</h4>
                        <p>
                           I am currently studying in the Science Department at Government Tolaram College in Bandar, Narayanganj, Bangladesh. I achieved a GPA of 4.94 in my SSC
                           exams. My dream is to study Physics after completing my HSC, as I have a deep interest in the subject. I have been passionate about programming since I was 14 years old, and it has always been my favorite hobby. I enjoy learning and exploring new things in both science and technology.
                        </p>
                     </div>
                  </motion.div>
               </div>
               <div data-aos="fade-up" data-aos-duration="1500">
                  <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="flex flex-col gap-4 w-[100vw] lg:w-[900px] p-6 bg-[#030712] text-white rounded-lg 
                  hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-shadow duration-300 ">
                     <div className="flex flex-row items-center gap-4">
                        <div>
                           <Image src={Programming} alt="Hsc" className="w-[74px] h-[74px]  " />
                        </div>
                        <div>
                           <h3 className="font-bold text-[20px] ">programming hero</h3>
                           <p className="font-bold text-[18px] ">programming-hero.com/</p>
                           <p className="font-bold text-[16px] text-[#818CF8] ">TRAINING</p>
                           <p className="text-[14px] text-[#6B7280] ">2024-2025</p>
                        </div>
                     </div>
                     <div className="flex flex-col gap-2">
                        <h4 className="text-green-400">course is completed with certificate</h4>
                        <p>
                           I found an amazing course on Programming Hero (Batch 10, 2024-2025). I learned React.js, Next.js, JavaScript, HTML, CSS, and Tailwind CSS. The course is really great, and the mentor, Jhankar Mahbub, is an excellent trainer. He explains everything clearly, making complex topics easy to understand. The support team is also fantastic, offering 24/7 assistance whenever needed. This course is a perfect choice for anyone who wants to dive into web development with hands-on experience!
                        </p>
                        <p>
                           I give the course 5 ster .I learn many thing from this course
                        </p>
                     </div>
                  </motion.div>
               </div>
            </div>
         </div>
      </div>
   )
}