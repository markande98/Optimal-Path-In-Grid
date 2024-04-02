"use client";

import { optimalPath } from "@/actions/optimal-path";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { gridSelector, optimalTracePath } from "@/store/atoms/grid";
import { BrickWall, Weight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useTransition } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { toast } from "sonner";
import { GridInput } from "./grid-input";

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
    <div className="h-full flex flex-col ">
      <GridInput label="Add Weights" icon={Weight} hasWeight />
      <Separator />
      <GridInput label="Add Blocks" icon={BrickWall} />
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
