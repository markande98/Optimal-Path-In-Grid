import { LucideIcon } from "lucide-react";
import Image from "next/image";

interface HeadingProps {
  label: string;
  icon: LucideIcon;
}

export const Heading = ({ label, icon: Icon }: HeadingProps) => {
  return (
    <div className="w-full flex items-center gap-x-4">
      <h1 className="text-3xl">{label}</h1>
      <Icon className="h-6 w-6" />
    </div>
  );
};
