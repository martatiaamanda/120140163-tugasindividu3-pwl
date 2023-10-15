import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Beranda = () => {
  const gradientStyle = {
    background: "linear-gradient(116deg, #D0BFFF 59.54%, #F1F3F2 0%)",
  };
  return (
    <div className="">
      <div className="m-auto fixed w-full">
        <Header />
      </div>

      {/* landing page */}
      <div className="landing flex w-full h-screen bg-[#e6b485]">
        <div className="left w-[60%] pl-[105px]">
          <div className="wrap  h-full flex flex-col justify-center">
            <div className="head text-[105px] font-extrabold leading-[100px] text-[#D0BFFF]">
              Cartoon <br />
              <span className="text-[#F8BDEB]">Teletubbies</span>
            </div>
            <div className="subhead text-[18px] mt-8 w-[90%] text-[#D0BFFF]">
              "Teletubbies" adalah sebuah serial televisi anak-anak yang sangat
              terkenal yang pertama kali ditayangkan pada tahun 1997. Serial ini
              diproduksi oleh Ragdoll Productions, bersama-sama dengan
              distributornya, BBC. "Teletubbies" menggambarkan dunia ajaib yang
              dihuni oleh empat karakter utama yang disebut Teletubbies
            </div>
            <div className="btn mt-6">
              <a
                className="bg-[#811c55] p-2 px-5 rounded border-red-500 inline-block hover:bg-[#46172a] hover:text-[white]"
                href="/tentang"
              >
                Selengkapnya
              </a>
            </div>
          </div>
        </div>
        <div className="right w-[50%] flex h-[100%] items-center">
          <img src="Images/home.png" className="w-[100%]" alt="" />
        </div>
      </div>
      {/* landing page */}

      {/* build */}
      <div className="build bg-[#FFE5E5]">
        <div className="wrap container m-auto flex pt-[140px] pb-[140px] ">
          <div className="left w-[50%] text-[#48379e]">
            <div className="head text-[87px]">
              Cartoon <br /> Teletubbies
            </div>
            <div className="subhead text-[19px] mt-5 ">
              "Teletubbies" adalah sebuah serial televisi anak-anak yang sangat
              terkenal yang pertama kali ditayangkan pada tahun 1997. Serial ini
              diproduksi oleh Ragdoll Productions, bersama-sama dengan
              distributornya, BBC. "Teletubbies" menggambarkan dunia ajaib yang
              dihuni oleh empat karakter utama yang disebut Teletubbies
            </div>
          </div>
          <div className="right w-[50%] bg-[#312061] flex flex-wrap justify-center p-5 gap-5">
            <Card title="Teletubbies">
              <img src="Images/bunga1.png" alt="" />
            </Card>
            <Card title="Teletubbies">
              <img src="Images/bunga1.png" alt="" />
            </Card>
            <Card title="Teletubbies">
              <img src="Images/bunga1.png" alt="" />
            </Card>
            <Card title="Teletubbies">
              <img src="Images/bunga1.png" alt="" />
            </Card>
          </div>
        </div>
      </div>
      {/* build */}

      {/* special */}
      <div className="special py-28 bg-[#e0c6c6]">
        <div
          className="wrap bg-[#D0BFFF] p-16 px-24 w-[980px] rounded-tl-[30px] rounded-br-[30px] mx-auto relative flex"
          style={gradientStyle}
        >
          <div className="left">
            <div className="head text-[35px] font-bold bg-srBlack2 p-2 px-4 rounded italic inline-block">
              Martatia <br /> Amanda
            </div>
            <div className="dis font-bold text-[55px] text-srBlack">
              120140163
            </div>
            <div className="Subhead text-[20px] text-srBlack">
              Teknik Informatika
            </div>
          </div>
          <div className="right  absolute right-0 bottom-0">
            <img className="" src="Images/diskon.png" alt="" />
          </div>
        </div>
      </div>
      {/* special */}

      {/* Footer */}
      <div className="bg-srBlack2 ">
        <Footer />
      </div>
      {/* Footer */}
    </div>
  );
};

export default Beranda;
