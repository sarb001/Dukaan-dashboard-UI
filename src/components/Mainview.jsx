import { Dropdownimg, Magnifyglassicon, Questionimg, SpeakerIcon, ToggleIcon } from "../images/Allimages"

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
        { cardstext : "Next Payout"  , price : "2312.23" , orders  : 23 , Nextpayoutdate : "Today 04:00PM" },
        { cardstext : "Next Payout"  , price : "92,312.20" , orders  : 13 , },
        { cardstext : "Next Payout"  , price : "23,92,312.19" , orders  : "" , },
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
           <div className = "bg-[#f1f5f9]">

             <div className = "grid grid-cols-2">
                <div> Overview </div>
                <div className="grid grid-cols-[1fr,1fr]">
                    <div> Last Month </div>
                    <div> <Dropdownimg color = "black" /> </div>
                </div>
             </div>

                {/* Cards layout */}
              <div>  Payouts </div>
           </div> 
        </>
    )
}
