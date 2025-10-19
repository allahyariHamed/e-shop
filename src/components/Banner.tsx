import { useTranslations } from "next-intl"

const Banner = () => {
    const t = useTranslations('headers')

    return (
        <div className="aspect-video bg-[url('/assets/Avoid_mistakes_before_mass_garment_production_ft_lg.webp')] bg-cover rounded shadow flex justify-center">
            <div className="font-bold h-fit rounded-full bg-black text-white px-3 py-1 text-xs mt-5 md:text-xl md:mt-10">
                {t('Taropud Producing Group')}
            </div>
        </div>
    )
}

export default Banner