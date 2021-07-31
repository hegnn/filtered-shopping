import React from 'react'
import { CheckBox } from './Checkbox/Checkbox'
import { Search } from './Search/Search'
import "./Sidebar.css"

export const Sidebar = (props) => {

    const titles = [{value:"DeFacto", label: "DeFacto"},  {value:"Mavi", label: "Mavi"},  {value:"Koton", label: "Koton"}, {value:"Ltb", label: "Ltb"}, {value:"Mudo", label: "Mudo"}, {value:"Colin's", label: "Colin's"}, {value:"Pull & Bear", label: "Pull & Bear"}, {value:"LC Waikiki", label: "LC Waikiki"}, {value:"Loft", label: "Loft"}, {value:"U.S. Polo Assn.", label: "U.S. Polo Assn."}, {value:"TRENDYOL MAN", label: "TRENDYOL MAN"}, {value:"Bershka", label: "Bershka"}, {value:"TRENDYOLMİLLA", label: "TRENDYOLMİLLA"}, {value:"İpekyol", label: "İpekyol"}]
    const colors = [{value:"17_Yeşil", label: "Yeşil"},  {value:"4_Gri", label: "Gri"},  {value:"14_Siyah", label: "Siyah"}, {value:"3_Beyaz", label: "Beyaz"}, {value:"8_Lacivert", label: "Lacivert"}, {value:"6_Kahverengi", label: "Kahverengi"}, {value:"2_Bej", label: "Bej"}, {value:"9_Mavi", label: "Mavi"}, {value:"13_Sarı", label: "Sarı"}, {value:"11_Mor", label: "1Mor"}, {value:"12_Pembe", label: "Pembe"}, {value:"16_Turuncu", label: "Turuncu"}, {value:"19_Bordo", label: "Bordo"}, {value:"21_Haki", label: "Haki"}, {value:"15_Turkuaz", label: "Turkuaz"}, {value:"Taba", label: "Taba"}, {value:"Lila", label: "Lila"}, {value:"Hardal", label: "Hardal"}, {value:"Kiremit", label: "Kiremit"}, {value:"Antrasit", label: "Antrasit"}, {value:"20_Ekru", label: "Ekru"}, {value:"Füme", label: "Füme"}, {value:"Krem", label: "Krem"}, {value:"Camel", label: "Camel"}, {value:"7_Kırmızı", label: "Kırmızı"}, {value:"5_Gümüş", label: "Gümüş"}, {value:"1_Altın", label: "Altın"}, {value:"10_Metalik", label: "Metalik"}, {value:"İndigo", label: "İndigo"}, {value:"Mürdüm", label: "Mürdüm"}, {value:"Mercan", label: "Mercan"}, {value:"Fusya", label: "Fusya"}]
    

    return (
        <div className="sidebar">
            <Search refreshFunction={term => props.refreshFunction(term)}/>
            <CheckBox
                handleFilter= {filters => props.companyFunction(filters, "productCompany")}
                array = {titles}
                title = "Marka"
            />
            <div className="line"></div>
            <CheckBox
                handleFilter= {filters => props.colorFunction(filters, "productColor")}
                array = {colors}
                title = "Renk"
            />
        </div>
    )
}
