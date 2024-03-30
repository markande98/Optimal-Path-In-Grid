import Image from "next/image";

interface HeadingProps {
  label: string;
  imageUrl: string;
}

export const Heading = ({ label, imageUrl }: HeadingProps) => {
  return (
    <div className="w-full flex items-center gap-x-4">
      <h1 className="text-3xl">{label}</h1>
      <Image src={imageUrl} width={40} height={40} alt="labelImage" />
    </div>
  );
};
