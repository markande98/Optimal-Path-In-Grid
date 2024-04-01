"use client";

import { GridInput } from "./grid-input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { gridSelector, optimalTracePath } from "@/store/atoms/grid";
import { useCallback, useState, useTransition } from "react";
import { optimalPath } from "@/actions/optimal-path";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const GridControl = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const cord = useRecoilValue(gridSelector);
  const setOptimalPath = useSetRecoilState(optimalTracePath);

  const onClick = useCallback(() => {
    startTransition(() => {
      optimalPath(cord).then((data) => {
        if (data.shortestPath.length === 0) {
          toast.error("No Optimal Path Found");
        } else {
          setOptimalPath(data.shortestPath);
          router.refresh();
        }
      });
    });
  }, [cord, setOptimalPath, router]);

  return (
    <div className="h-full flex flex-col">
      <GridInput label="Add Weights" imageUrl="/weight.avif" hasWeight />
      <Separator />
      <GridInput label="Add Blocks" imageUrl="/hash.png" />
      <div className="w-full h-screen flex items-end p-2">
        <Button
          disabled={isPending}
          onClick={onClick}
          variant="destructive"
          className="w-full"
        >
          Find shortest path
        </Button>
      </div>
    </div>
  );
};
