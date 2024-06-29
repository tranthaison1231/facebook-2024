import wadewarren from "../assets/images/wadewarren.png";
import polygon from "../assets/images/polygon.png";
import staged from "../assets/images/staged.png";
import like from "../assets/images/like.png";
import comment from "../assets/images/comment.png";
import share from "../assets/images/share.png";
import paumolive from "../assets/images/paumolive.png";
import robetfox from "../assets/images/robetfox.png";
import tools from "../assets/images/tools.png";
import camera from "../assets/images/camera.png";
import smile from "../assets/images/smile.png";



export default function NotFound() {
  return (
    <section className="flex h-screen w-full bg-slate-200 text-inter items-center justify-center">
      <div className="bg-white w-[700px] h-[1000px]">
        <div className="px-4 py-4">

          <div className="flex ">
            <img src={wadewarren} alt="wadewarren"></img>


            <div className="py-4 px-4 pr-[300px] ">
              <div className="font-extrabold">Wade Warren</div>
              <p>colleages</p>
            </div>

            <div className="py-4 px-4 flex">
              <p>29mins</p>
              <img className="py-4 px-4" src={polygon} alt="polygon"></img>
            </div>
          </div>



          <div className="pt-6">
            <img className="" src={staged} alt="staged" ></img>
            <div className="flex pt-4">
              <div className="">
                <img src={like} alt="like"></img>
              </div>

              <div className="pl-4 ">
                <img src={comment} alt="comment"></img>
              </div>
              <div className=" pl-[427px] ">
                <img src={share} alt="share"></img>
              </div>
            </div>

          </div>
          <div className="pt-2 text-lg text-gray-400">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quam tortor nec arcu. Euismod <br>
            </br>neque ultricies eget adipiscing condimentum.Lorem ipsum dolor sit amet, consectetur<br></br>
              adipiscing elit. Id quam tortor nec arcu. Euismod neque ultricies<br></br>
              eget adipiscing condimentum.</p>
            <p>Translate</p>
          </div>


          <div className="flex">
            <div className="px-6 py-4 ">
              <img src={paumolive} alt="paumolive"></img>
            </div>
            <div>
              <h1 className="">Paul Molive</h1>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
              <div>
                <img src={tools} alt="tools"></img>
              </div>
            </div>
          </div>

          <div className="flex pt-6">
            <div className="px-6 py-4">
              <img src={robetfox} alt="robetfox"></img>
            </div>
            <div>
              <h2>Robert Fox</h2>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
              <img src={tools} alt="tools"></img>
            </div>
          </div>
        </div>

        <div className="relative pt-4 flex">
            <input className="w-[700px] h-[46px] rounded-md border-solid border-2 border-zinc-200 " type="text" placeholder="Lovely!"/>
            <div className="absolute right-2 top-6">
          <button className="pr-2">   <img src={smile} alt="smile"></img> </button>
          <button><img src={camera} alt="camera"></img></button>
            </div>
      
    

          </div>
        </div>
    
    </section>
  );
}
