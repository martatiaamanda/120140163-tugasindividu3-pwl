/* eslint-disable react-hooks/rules-of-hooks */
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { useState } from "react"
import axios from "axios";

const Tentang = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = () => {
    setLoading(true);
    axios.get('https://api.api-ninjas.com/v1/dadjokes?limit=1',{
      headers: { 'X-Api-Key': 'loZiraunTsZCJZ+LSuRlCQ==TD6rLCH5PPs5nXmr'}
    })
      .then((response) => {
        setData(response.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  };
  return (
    <div>
      <div className="m-auto fixed w-full">
        <Header />
      </div>
      {/* main content */}
      <div className="bg-[#FFE5E5] py-[100px] mx-auto container">
        <div className="wrap flex justify-center items-center">
          <div className="left w-[60%] flex items-center justify-center">
            <img src="Images/Tentang.png" className="w-[500px]" alt="" />
          </div>
          <div className="right w-[40%]">
            <div className="head text-[40px] font-extrabold italic text-center">Tentang <br /> Tele <span className="text-[#D0BFFF]">Tubbies</span></div>
            <div className="text mt-2 text-center text-[#F8BDEB]">
            "Teletubbies" adalah sebuah serial televisi anak-anak yang sangat
              terkenal yang pertama kali ditayangkan pada tahun 1997. Serial ini
              diproduksi oleh Ragdoll Productions, bersama-sama dengan
              distributornya, BBC. "Teletubbies" menggambarkan dunia ajaib yang
              dihuni oleh empat karakter utama yang disebut Teletubbies
            </div>
          </div>
        </div>
      </div>
      {/* main content */}
      {/* dad joke api */}
      <div className="bg-[#D0BFFF]">
        <div className="wrap container mx-auto py-[100px] flex justify-center items-center">
          <div className="card bg-[#FFE5E5] w-[800px] h-[350px] p-10">
            <button className="bg-srWhite text-srBlack px-4 py-2  mt-2 mb-3 block mx-auto" onClick={fetchData} disabled={loading} >Silahkan Di Tekan</button>
            <div className="text mt-2 text-center text-srBlack text-[20px]">{data.joke}</div>
          </div>
        </div>
      </div>
      {/* dad joke api */}
      <div className="bg-srBlack2 ">
        <Footer />
      </div>
    </div>
  )
}

export default Tentang