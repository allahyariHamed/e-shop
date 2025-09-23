import Image from "next/image";

const Base64Image = ({ src, name }: { src: string, name: string }) => {
    return (
        <Image
            className="w-full h-full aspect-square rounded"
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