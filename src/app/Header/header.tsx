import Image from "next/image"
import whitespace from "@/app/assert/Logo.png";

export default function MenuBar(){
    return(
        <nav>
         <div className="w-[1920px] h-[92px] top-[92px] left-[1px] py-[16px] px-[220px] bg-[#043873] text-[#FFFFFF] flex justify-between ">
           <div className="font-bold text-2xl">
            <Image src={whitespace} alt="logo"/>
           </div>
             <div className="w-[737.5px] h-[60px] gap-[60px] flex items-center ">
                 <div className="w-[549px] h-[23px] gap-8 flex items-center">
                     <div className="w-[78px] h-[23px] gap-[10px] ">Products</div>
                     <div className="w-[79px]"> Solution</div>
                     <div className="w-[89px] ">Resources</div>
                     <div className="w-[58px]">Pricing</div>
                 </div>
                 <div className="w-[125px] h-[60px] rounded-lg py-[16px] px-[40px] bg-[#FFE492]">
                    <div className="w-[46px] h-[23px] text-[#043873]">Login</div>
                 </div>
            </div>
        </div>
        
        
        </nav>
    )
}