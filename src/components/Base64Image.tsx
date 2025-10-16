import Image from "next/image";

const Base64Image = ({ src, name }: { src: string, name: string }) => {
    return (
        <Image
            className="rounded shadow w-full h-full aspect-[4/5]"
            src={src}
            alt={name}
            width={100}
            height={100}
            loader={() => src}
            unoptimized
        />
    );
}
export default Base64Image