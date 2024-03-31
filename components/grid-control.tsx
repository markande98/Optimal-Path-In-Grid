"use client";

import { GridInput } from "./grid-input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export const GridControl = () => {
  return (
    <div className="h-full flex flex-col">
      <GridInput label="Add Weights" imageUrl="/weight.avif" hasWeight />
      <Separator />
      <GridInput label="Add Blocks" imageUrl="/hash.png" />
      <div className="w-full h-screen flex items-end p-2">
        <Button variant="destructive" className="w-full">
          Find shortest path
        </Button>
      </div>
    </div>
  );
};
