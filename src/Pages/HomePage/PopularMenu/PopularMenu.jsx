import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/sectionTitle/sectionTitle";
import MenuItem from "../../../Shaird/menuItem/MenuItem";


const PopularMenu = () => {
const[menus,setMenus]=useState([])
    useEffect(()=>{
        fetch('Menu.json')
        .then(res=>res.json())
        .then(data=>{
            const setPopularMenu=data.filter(menu=>menu.category==="popular")
            setMenus(setPopularMenu)
        })
    },[])

console.log(menus);
    return (
        <section>
            <SectionTitle heading={"FROM OUR MENU"} subheading={"---Check it out---"}></SectionTitle>


<div className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-4">
    {
        menus.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
    }
</div>
            
        </section>
    );
};

export default PopularMenu;