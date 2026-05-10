import { Magnifyglassicon, Questionimg, SpeakerIcon, ToggleIcon } from "../images/Allimages"

export  const  Mainview = () => {
    return (
        <>
         <Header />
         MAIN VIEW  Section 
        </>
    )
}

export  const Header  = () => {
     return (
          <div className="grid grid-cols-[2.5fr,4fr,1fr]  h-[14vh] pl-4 pr-4"> 

            <div className="grid grid-cols-[2fr,4fr]">
               <div className="text-xl items-center flex"> Payouts </div>

                <div className="grid grid-cols-[1fr,6fr] justify-start items-center  "> 
                    <div className="flex items-center pl-2"> <Questionimg /> </div> 
                    <div className="text-[14px]"> How it work  </div>
                </div>

            </div>

            <div className = "p-3">
                <div className="bg-[#f2f2f2] grid grid-cols-[1fr,8fr] p-2 rounded-[4px] w-72 ">
                  <div className="flex items-center "> <Magnifyglassicon /> </div>
                  <div className="flex">
                    <input type = "text" placeholder="Search features,tuts & etc" 
                     className="focus:outline-none bg-[#f2f2f2] pr"
                    /> 
                  </div>
                </div>
            </div>

            <div className="grid grid-cols-[1fr,1fr] pl-4 items-center ">
                    <div> <SpeakerIcon /> </div>   
                    <div> <ToggleIcon /> </div>   
            </div>

          </div>
     )
}