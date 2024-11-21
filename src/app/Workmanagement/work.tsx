import Image from "next/image";
import work from "@/app/assert/workTogether.png";

export default function Content() {
  return (
    <div className="w-[1920px] h-[1528px] top-[921px] left-[1px] py-[140px] px-[220px] bg-[#FFFFFF] ">
      <div className="[1420px] h-[547px] flex items-center">
        <div className="w-[672px] h-[411px]  flex flex-col justify-evenly ">
          <h1 className=" text-6xl font-bold  leading-[5rem] ">
            Project <br />
            Management
          </h1>
          <div className="h-[90px] text-lg leading-[2rem] tracking-wide">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </div>
          <div className="w-[201px] h-[63px] rounded-md py-5 mt-[50px] px-10 gap-[10px] bg-[#4F9CF9]">
            <button className="w-[100px] h-[23px] leading-3 tracking-wide text-right text-[#FFFFFF] ">
              Get Started
            </button>
          </div>
        </div>
        <div className=" w-[748px] h-[547px] bg-[#C4DEFD] "></div>
      </div>

      <div className=" h-[661px] w-[1420px] mt-[100px] flex gap-[100px] items-center">
        <Image src={work} alt="worktogetherimage" width={748} height={547} />
        <div className="w-[672px] h-[411px] gap-[60px ] flex flex-col justify-evenly  ">
          <div>
          <h1 className="w-[900px] text-6xl font-bold leading-[7rem]   ">
            Work Together
          </h1></div>
          <div className="h-[90px] text-lg leading-[2rem] tracking-wide">
            With whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet and
            share the URL with others.
          </div>
          <div className="w-[201px] h-[63px] rounded-md mt-[50px] py-5 px-10 gap-[10px] bg-[#4F9CF9]">
            <button className="w-[100px] h-[23px] leading-3 tracking-wide text-right text-[#FFFFFF] ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
