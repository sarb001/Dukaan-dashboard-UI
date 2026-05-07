
import { Analyticsimg, Appearancesimg, Audienceimg, Deliveryimg, Discountsimg, Homeimg, Marketingimg, Ordersimg, Payoutsimg, Pluginsimg, Productimg } from "../images/Allimages";

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
                  
              </div>

              
         </div>
        </>
    )
}
