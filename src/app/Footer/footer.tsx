import Image from "next/image"
import logo from "@/app/assert/Logo.png"
export default function Footer (){
    return(
        <div className="w-[1920px] h-[461px] top-[5195px] px-[220px] pt-[140px] pb-[32px] bg-[#043873] ">
            <div className="w-[1480px] h-[289px] gap-[100px]  ">
                <div className="w-[1480px] h-[169px] gap-[100px] flex">
                    <div className="w-[295px] h-[169px]   ">
                        <Image src={logo} alt="logo" width={191} height={34}/>
                            <p className="w-[240px] h-[120px] text-[#FFFFFF] mt-4">whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                        
                    </div>
            
                    <ul className="w-[295px] h-[127px] text-[#FFFFFF] space-y-2 ">
                            <li className="w-[68px] h-[22px] font-bold">Product</li>
                            <li className="w-[70px] h-[20px] text-[#FFE492]">Overview</li>
                            <li className="w-[50px] h-[20px] ">Pricing</li>
                            <li className="w-[177px] h-[20px]">Customer stories</li>
                    </ul> 

                    <ul className="w-[295px] h-[130px] text-[#FFFFFF] space-y-2">
                            <li className="w-[91px] h-[22px] font-bold">Resources</li>
                            <li className="w-[33px] h-[20px]">Blog</li>
                            <li className="w-[128px] h-[20px] ">Guides & tutorials</li>
                            <li className="w-[130px] h-[20px]">Help center</li>
                    </ul> 

                    
                    <ul className="w-[295px] h-[130px] text-[#FFFFFF] space-y-2">
                            <li className="w-[91px] h-[22px] font-bold">Company</li>
                            <li className="w-[66px] h-[20px]">About us</li>
                            <li className="w-[62px] h-[20px] ">Careers</li>
                            <li className="w-[99px] h-[20px]">Media kit</li>
                    </ul> 


                     
                                    
                </div>
                
            </div>
                    
          
        </div>
    )
}