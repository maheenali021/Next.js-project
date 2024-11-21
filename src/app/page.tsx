import MenuBar from "./Header/header";
import Hero from "./Hero/hero";
import Content from "./Workmanagement/work";
import Custom from "./Extenstion/customise";
import Customise from "./Customise/customise";
import MyWork from "./Your-work/mywork";
import Spon from "./Sponsors/sponsor";
import Footer from "./Footer/footer";
export default function Home(){
  return(
    <>
    <div >
    <MenuBar/>
    <Hero/>
    <Content/>
    <Custom/>
    <Customise/>
    <MyWork/>
    <Spon/>
    <Footer/>
    </div>
     
    </>
  
   
   

   
  )
}
