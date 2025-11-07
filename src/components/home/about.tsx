import Image from "next/image";
import GifImage from "@/assets/image/learn-web-designing.gif";

import facebookLogo from "@/assets/image/logo/facebook.svg";
import twitterLogo from "@/assets/image/logo/bird.svg";
import linkedinLogo from "@/assets/image/logo/linkedin.svg";
import GithubLogo from "@/assets/image/logo/github.png";
import RESUME from "../ui/RESUME";

export default function About() {
    return (
        <div className="about-Background ">
            <div className="flex justify-between max-w-7xl mx-auto pt-20">
                <div>
                    <Image src={GifImage} alt="gif image" width={400} className="rounded-2xl" />
                </div>
                <div className="w-[500px] text-white ">
                    <h2 className="text-4xl">Hello, I am Ashraful Pathan A MernStack developer </h2>
                    <p className="mt-2 mb-3">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas expedita rerum reprehenderit blanditiis, exercitationem adipisci optio dolorem nisi ipsam saepe, molestias sint aliquam necessitatibus itaque maxime perspiciatis. Beatae facilis, fugiat inventore rem fuga veritatis corrupti ea, vero architecto repellendus laboriosam exercitationem saepe quod, voluptatem quia temporibus? Quisquam excepturi porro iusto.
                    </p>
                    <p className="italic">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium possimus sint voluptates non accusantium, nostrum quas molestias omnis temporibus laboriosam?
                    </p>
                    <div>
                        {/* Social links */}
                        <div className="flex flex-row items-center gap-3 mt-7">
                            <a
                                href="https://github.com/AshrafulPatHan"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image src={GithubLogo} alt="GitHub link" width={30} height={30} />
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=100090953234693"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src={facebookLogo}
                                    alt="Facebook link"
                                    width={30}
                                    height={30}
                                />
                            </a>
                            <a
                                href="https://x.com/AshrafulPa25233"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src={twitterLogo}
                                    alt="Twitter link"
                                    width={30}
                                    height={30}
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ashraful-hasan-safin/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src={linkedinLogo}
                                    alt="LinkedIn link"
                                    width={30}
                                    height={30}
                                />
                            </a>
                        </div>
                        <RESUME />

                    </div>
                </div>
            </div>
        </div>
    )
}