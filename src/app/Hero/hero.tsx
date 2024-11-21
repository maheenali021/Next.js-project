import FontAwesomeIcon from "next/font/local"
export default function Hero(){
    return(
        <div className="w-[1920px] h-[829px] top-[92px] left-[1px] py-[140px] px-[220px] bg-[#043873] text-[#FFFFFF] flex items-center ">
            <div className="w-[656px] h-[361px] gap-[60px] ">
                <div className="h-[154px] text-6xl font-bold">Get More Done with whitepace</div>
                <p className="h-[60px] text-lg  ">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                <div className="w-[219px] h-[63px] rounded-lg gap-[10px]  bg-[#4F9CF9] text-right mt-[84px]">
                    <p className="w-[180px] h-[23px] leading-[23px] tracking-wide pt-4">Try Whitepace free</p>
                    
                </div>   
            </div>
            <div className="w-[824px] h-[549px] gap-1 bg-[#C4DEFD] "></div>

        </div>
    )
}