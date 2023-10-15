
const Footer = () => {
  return (
    <div className="container m-auto py-[50px] bg-[#FFF8C9]">
        <div className="wrap flex flex-col gap-[30px]">
            <div className="title text-[32px] text-[#D0BFFF] font-bold text-center">Cartoon <br /> <span className="text-[#F8BDEB]">Teletubbies</span> </div>
            <div className="nav flex gap-3 justify-center">
            <a href="/" className={`text-lg ${location.pathname === '/' ? 'font-semibold' : ''} text-white`}>Beranda</a>
                <a href="/tentang" className={`text-lg ${location.pathname === '/tentang' ? 'font-semibold' : ''} text-white`}>Tentang</a>
                <a href="/kontak" className={`text-lg ${location.pathname === '/kontak' ? 'font-semibold' : ''} text-white`}>Kontak</a>
            </div>
            <div className="text-center">Martatia Amanda - 120140163</div>
        </div>
    </div>
  )
}

export default Footer