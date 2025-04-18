import Image from "next/image";


export default function Education() {
   return(
      <div>
         <div className="flex flex-col items-center">
            <h2 className="text-[30px] font-bold mb-4  ">Education and Training</h2>
            <p className="text-lg font-medium text-[#9CA3AF] mb-12 ">My education has been a journey of self-discovery and growth. Here are my educational details.</p>
            <div>
               <div>
                  <div>
                     <div>
                        <Image src="" alt="SSC" />
                     </div>
                     <div>
                        <h3>government tolaram college</h3>
                        <p>Bander, Narayanganj</p>
                     </div>
                  </div>
                  <div></div>
               </div>
            </div>
         </div>
      </div>
   )
}