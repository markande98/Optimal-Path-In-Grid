"use client";

import { GridInput } from "./grid-input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useRecoilValue } from "recoil";
import { gridSelector } from "@/store/atoms/grid";
import { useCallback, useTransition } from "react";
import { shortestPath } from "@/actions/shortest-path";

export const GridControl = () => {
  const [isPending, startTransition] = useTransition();
  const cord = useRecoilValue(gridSelector);

  const onClick = useCallback(() => {
    startTransition(() => {
      shortestPath(cord).then((data) => {
        console.log(data);
      });
    });
  }, [cord]);

  return (
    <div className="h-full flex flex-col">
      <GridInput label="Add Weights" imageUrl="/weight.avif" hasWeight />
      <Separator />
      <GridInput label="Add Blocks" imageUrl="/hash.png" />
      <div className="w-full h-screen flex items-end p-2">
        <Button onClick={onClick} variant="destructive" className="w-full">
          Find shortest path
        </Button>
      </div>
    </div>
  );
};
