import { Downloadimg, Dropdownimg, Magnifyglassicon, Marketingimg, Questionimg, SpeakerIcon, ToggleIcon, TwosidedArrowimg } from "../images/Allimages";
import { IoIosArrowForward } from "react-icons/io";


export  const  Mainview = () => {
    return (
        <div>
            <Header />
            <MainSection />
        </div>
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

export const MainSection = () => {

    const Cardsinfo = [
        { cardstext : "Next Payout"  , price : "2312.23" , orders  : 23 , Nextpayoutdate : "Today 04:00PM" ,text : "text-white" , background : "bg-[#146eb4]" },
        { cardstext : "Amount Pending"  , price : "92,312.20" , orders  : 13 ,  background : "bg-white" },
        { cardstext : "Amount Processed"  , price : "23,92,312.19" , orders  : "" , background : "bg-white" },
    ]

    const  TrnsxList = [
        {
            orderId :  "#281209", Status : "Successful" , TransactionID : "13163445747" , RefundDate : "Today,08:45 PM" , OrderAmount : "1125.00"
        },
        {
            orderId :  "#281209", Status : "Processing" , TransactionID : "13163445747" , RefundDate : "Yesterday,3:00 PM" , OrderAmount : "1125.00"
        },
        {
            orderId :  "#281209", Status : "Successful" , TransactionID : "13163445747" , RefundDate : "11 Jul 2023,03:00 PM" , OrderAmount : "1125.00"
        },
        {
            orderId :  "#281209", Status : "Successful" , TransactionID : "13163445747" , RefundDate : "12 Jul 2023,04:00 AM" , OrderAmount : "1125.00"
        },
        {
            orderId :  "#281209", Status : "Successful" , TransactionID : "13163445747" , RefundDate : "12 Jul 2023,04:00 AM" , OrderAmount : "1125.00"
        },
        {
            orderId :  "#281209", Status : "Successful" , TransactionID : "13163445747" , RefundDate : "12 Jul 2023,05:00 AM" , OrderAmount : "1125.00"
        },
        {
            orderId :  "#281209", Status : "Processing" , TransactionID : "13163445747" , RefundDate : "13 Jul 2023,03:00 PM" , OrderAmount : "1125.00"
        },
        {
            orderId :  "#281209", Status : "Successful" , TransactionID : "13163445747" , RefundDate : "12 Jul 2023,05:00 PM" , OrderAmount : "1125.00"
        },
    ]

    return (
        <>
           <div className = "bg-[#f1f5f9] p-8  ">

             <div className = "grid grid-cols-[6fr,1fr]">
                <div> Overview </div>
                <div className="grid grid-cols-[6fr,1.5fr] bg-white p-1">
                    <div className="pl-2"> Last Month </div>
                    <div> <Dropdownimg  color = "black" /> </div>
                </div>
             </div>

                {/* Cards layout */}
            <div className="pt-4 grid grid-cols-3 gap-4 justify-end pr-0 ">
                 {Cardsinfo?.map(i => {
                    return (
                        <div>
                            <div className= {` ${i?.background} rounded-md `}>
                                    <div className =  {` grid grid-rows-2 gap-2 justify-center ${i?.text}
                                    px-2 py-10                       
                                     `}> 

                                        <div className="items-center flex"> 
                                                <div className="text-[14px] pr-4"> {i?.cardstext} </div>
                                                <Questionimg />
                                        </div>

                                        <div className="grid grid-cols-[4fr,2fr] gap-0">
                                            <div className="text-2xl">   ₹{i?.price} </div>
                                            <div className="flex  text-[14px] w-20"> 
                                                <div className="flex items-center border-b-2 border-white ">    {i?.orders ? `${i?.orders} orders` : ""} </div>
                                                <div className="flex items-center">  <IoIosArrowForward /> </div>
                                            </div>
                                        </div>
                                    </div>

                                    {i?.Nextpayoutdate ? (
                                        <div  className="p-2 rounded-md grid grid-cols-[4fr,3fr] text-white bg-[#0e4f82]">
                                        <div>  Next Payout date: </div>
                                        <div> {i?.Nextpayoutdate ? `${i?.Nextpayoutdate}` : ""}</div>
                                    </div>
                                    )
                                    : ""}
                            </div>
                        </div>
                    )
                 })}
            </div>
              <div className="py-4">  Payouts </div>

                {/* Payouts section */}
               <div className="bg-green-300 rounded-lg ">

                    <div className="grid grid-cols-[0fr,3fr] p-4 justify-between justify-items-end ">

                    <div>
                            <div className="flex  p-2 grid-cols-[1fr,3fr] items-center bg-[#f2f2f2] rounded-md "> 
                                <div className="grid items-center">  <Magnifyglassicon /> </div>
                                <input type = "text" placeholder="OrderID or transaction ID"  className=" pl-2 border-0 outline-none bg-[#f2f2f2]" />
                            </div>
                    </div>

                        <div className="grid  items-center gap-6 grid-cols-[2fr,1fr] justify-between"> 

                            <div className = "border-white border-[1px] rounded-[5px] grid grid-cols-2 p-1 "> 
                                 <div> Sort  </div>
                                 <div className="grid justify-center items-center "> <TwosidedArrowimg />  </div>
                            </div>

                            <div className="grid justify-center border-white rounded-[5px] border-[1px] py-1 "> 
                                 <Downloadimg /> 
                            </div>
                        </div>

                    </div>

                        {/* Transx Layout */}
                    <div>

                    </div>
               </div>
           </div> 
        </>
    )
}
