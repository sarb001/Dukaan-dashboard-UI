
import { Analyticsimg, Appearancesimg, Audienceimg, Deliveryimg, Discountsimg, Dropdownimg, Homeimg, Marketingimg, Ordersimg, Payoutsimg, Pluginsimg, Productimg, Walletimg } from "../images/Allimages";

import Nishayanimg from '../assets/nishyanpic.webp';

export  const  Sidebar = () => {

    const OptionsList = [
        {   logo : <Homeimg  /> , name : "Home" },
        {   logo : <Ordersimg /> , name : "Orders" },
        {   logo : <Productimg /> , name : "Products" },
        {   logo : <Deliveryimg /> , name : "Delivery" },
        {   logo : <Marketingimg /> , name : "Marketing" },
        {   logo : <Analyticsimg /> , name : "Analysis" },
        {   logo : <Payoutsimg /> , name : "Payouts" ,color : "bg-[#ffffff1a]" },
        {   logo : <Discountsimg  /> , name : "Discounts" },
        {   logo : <Audienceimg /> , name : "Audience" },
        {   logo : <Appearancesimg /> , name : "Appearances" },
        {   logo : <Pluginsimg  /> , name : "Plugins" },
    ]

    return (
        <>
         <div className="bg-[#1e2640]  text-white h-[100vh]">

              <div className="grid grid-cols-3 p-6 pt-4 items-center ">
                    <div>
                    <img src = {Nishayanimg}
                        width="40" height = "40" 
                         className="rounded-sm"
                        />
                    </div>
                <div> 
                    <span> Nishyan </span>   
                    <span className="text-xs"> Visit  store </span>
                  </div>
                  <div className="flex justify-center  items-center"> <Dropdownimg color = "white" /> </div>
              </div>

            {/* options List  */}
             <div className=" pt-4 pl-4 pr-3 text-[14px]">
                     {OptionsList?.map(i => {
                       return (
                        <div className = { `grid grid-cols-[2fr,6fr] pt-2 pb-2 items-center ${i?.color} pl-4 rounded-sm`}>
                           <div> {i?.logo} </div>
                           <div>  {i?.name} </div> 
                        </div>
                        )
                     })}
             </div>
              
              <div className="grid grid-cols-[1fr,6fr] m-4 justify-center bg-[#ffffff1a] p-1 rounded-sm ">
                <div className="flex items-center pl-2"> <Walletimg /> </div>
                <div className="grid grid-rows-2 pl-4">
                    <div> Available credits </div>
                    <span> 222.10 </span>
                </div>
              </div>

         </div>
        </>
    )
}
