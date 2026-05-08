
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
        {   logo : <Payoutsimg /> , name : "Payouts" },
        {   logo : <Discountsimg  /> , name : "Discounts" },
        {   logo : <Audienceimg /> , name : "Audience" },
        {   logo : <Appearancesimg /> , name : "Appearances" },
        {   logo : <Pluginsimg  /> , name : "Plugins" },
    ]

    return (
        <>
         <div className="bg-[#1e2640]  text-white">


              <div>
                  <img src = {Nishayanimg}
                    width="18" height = "18" />
                <div> 
                    <span> Nishyan </span>   
                    <span> Visit  store </span>
                  </div>
                  <div> <Dropdownimg /> </div>
              </div>

            {/* options List  */}
             <div>
                     {OptionsList?.map(i => {
                       return (
                        <div className="grid grid-cols-[2fr,6fr] pt-2 pb-2 ">
                           <div> {i?.logo} </div>
                           <div>  {i?.name} </div> 
                        </div>
                        )
                     })}
                     {/* {OptionsList?.map(i => (
                        <>
                          <div>  {i?.logo} </div> 
                          <div>  {i?.name} </div> 
                        </>
                     ))} */}
             </div>
              
              <div>
                <div> <Walletimg /> </div>
                <div>
                    <div> Available credits </div>
                    <span> 222.10 </span>
                </div>
              </div>
         </div>
        </>
    )
}
