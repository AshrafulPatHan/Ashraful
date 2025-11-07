import "./home.css"



export default function Offers() {
    return (
        <div className="text-white py-32 flex flex-col items-center justify-center offer-back">
            <div className="flex flex-col xl:flex-row items-center gap-8 z-10 ">
                <div className="flex flex-col gap-4 w-[100vw] lg:w-[400px] h-[300px] p-6 bg-[#030712] text-white rounded-lg 
                    hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-shadow duration-300 mx-2  ">
                    <div>
                        <p className="font-bold text-2xl text-[#818CF8]">Front End</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h4 className="text-green-400">Creating Morden and responsive website</h4>
                        <p>
                            I create morden and responsive website that looks nice . order now a new webstie
                        </p>
                        <p>
                            Tetes work with togather.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-[100vw] lg:w-[400px] h-[300px] p-6 bg-[#030712] text-white rounded-lg 
                    hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-shadow duration-300">
                    <div>
                        <p className="font-bold text-2xl text-[#818CF8]">Backend End</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h4 className="text-green-400">Creating Morden and responsive website</h4>
                        <p>
                            I create morden and responsive website that looks nice . order now a new webstie
                        </p>
                        <p>
                            Tetes work with togather.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-[100vw] lg:w-[400px] h-[300px] p-6 bg-[#030712] text-white rounded-lg 
                    hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-shadow duration-300">
                    <div>
                        <p className="font-bold text-2xl text-[#818CF8]">Dev Ops</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h4 className="text-green-400">Creating Morden and responsive website</h4>
                        <p>
                            I create morden and responsive website that looks nice . order now a new webstie
                        </p>
                        <p>
                            Tetes work with togather.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}