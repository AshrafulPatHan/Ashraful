import Image from "next/image";
import ContactImg from '@/assets/image/Contact.jpg'

export default function Contact(){
   return(
      <div className="mb-28">
         <div>
            <p>Contact</p>
            <h2>CONTACT WITH ME</h2>
            <div>
               <div>
                  <Image src={ContactImg} alt="Contact" />
                  <div>
                     <p><span></span></p>
                     <p><span></span></p>
                     <p><span></span></p>
                     <p><span></span></p>
                  </div>
               </div>
               <div></div>
            </div>
         </div>
      </div>
   )
}

