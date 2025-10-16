// import Image from "next/image"

const Banner = () => {
    return (
        <div className="aspect-video bg-[url('/assets/Avoid_mistakes_before_mass_garment_production_ft_lg.webp')] bg-cover rounded shadow flex items-end">
            {/* <Image src={'/assets/Avoid_mistakes_before_mass_garment_production_ft_lg.webp'} alt="banner" width={900} height={500} className="w-full h-full absolute top-0 left-0" /> */}
            <div className="font-bold h-fit rounded-full bg-black text-white px-3 py-1 text-xs m-2 md:text-base md:m-4">
                Taropud Producing Group
            </div>
        </div>
    )
}

export default Banner