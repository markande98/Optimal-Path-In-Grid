import { GridInput } from "./grid-input";
import { Separator } from "@/components/ui/separator";

export const GridControl = () => {
  return (
    <div className="h-full">
      <GridInput label="Add Weights" imageUrl="/weight.avif" hasWeight />
      <Separator />
      <GridInput label="Add Blocks" imageUrl="/hash.png" />
    </div>
  );
};
