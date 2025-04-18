import Image from "next/image";
import ContactImg from '@/assets/image/contace.png'

export default function Contact(){
   return(
      <div className="mb-28">
         <div className="flex flex-col items-center">
            <p className=" text-[16px] text-[#6B7280] ">Contact</p>
            <h2 className="font-bold text-[36px] mb-6 ">CONTACT WITH ME</h2>
            <div className="flex flex-row items-center justify-between p-4 w-[1122px] bg-black border-2 border-blue-100 text-white rounded-lg ">
               <div className="flex flex-col gap-2 ">
                  <Image src={ContactImg} alt="Contact" className="w-[170px] h-[170px] " />
                  <div className="flex flex-col gap-1">
                     <p className="text-lg font-semibold">Email: <span className="text-[#725bd6] ">ashrafulPathan3927@gmail.com</span></p>
                     <p className="text-lg font-semibold">Phone: <span className="text-[#725bd6] ">+8801614871378</span></p>
                     <p className="text-lg font-semibold">WhatsApp: <span className="text-[#725bd6] ">+8801614871378</span></p>
                     <p className="text-lg font-semibold">Or, Call: <span className="text-[#725bd6] ">+8801568706037</span></p>
                  </div>
               </div>
               <div className="flex flex-col ">
                  <div>
                     <input type="text" name="email" placeholder="Write your email address" id="email" />
                  </div>
                  <div>
                     <input type="text" name="Message" placeholder="Write your massage" id="Message" />
                  </div>
                  <button>
                     Submit
                  </button>
               </div>
            </div>
         </div>
      </div>
   )
}

