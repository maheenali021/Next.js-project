import Image from "next/image";
import  image1 from "@/app/assert/Apple.png";
import  image2 from "@/app/assert/Microsoft.png";
import  image3 from "@/app/assert/Slack_Technologies_Logo 1.png";
import  image4 from "@/app/assert/Google.png";

export default function Spon(){
    return(
        <div className="w-[1922px] h-[538px] top-[4654px] py-[140px] px-[220px]  text-center">
            <div className="w-[1482px] h-[87px] text-6xl font-bold  "> Our sponsors</div>
            <div className="w-[1482px] h-[71px] flex justify-between mt-[100px] ">
                <Image  src={image1} alt="Apple.png"/>
                <Image  src={image2} alt="Microsoft.png"/>
                <Image  src={image3} alt="Slack_logo.png"/>
                <Image  src={image4} alt="Google.png"/>  
            </div>
        </div>
    )
}