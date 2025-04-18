import Image from "next/image";


export default function Navbar() {
   return(
      <div>
         <div>
            <div>
               <Image src="" alt="logo" />
               <h3>Ashraful pathan</h3>
            </div>
            <div>
               <p>HOME</p>
               <p>SKILLS</p>
               <p>PROJECTS</p>
               <p>EDUCATION</p>
               <p>CONTACT</p>
            </div>
            <div>
               <button>Github Profile</button>
            </div>
         </div>
      </div>
   )
}