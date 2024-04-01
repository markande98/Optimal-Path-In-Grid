"use client";

import { BrickWall } from "lucide-react";
import { cn } from "@/lib/utils";
import { grid, gridSelector, optimalTracePath } from "@/store/atoms/grid";
import Image from "next/image";
import { useRecoilValue } from "recoil";

export const Grid = () => {
  const coordinates = useRecoilValue(gridSelector);
  const pathCoordinates = useRecoilValue(optimalTracePath);

  console.log(pathCoordinates);
  return (
    <div className="h-full w-2/3 border flex items-center justify-center bg-cyan-800/70">
      <div className="w-[70%] h-[70%] border rounded-lg overflow-hidden shadow-lg bg-white">
        {Array(6)
          .fill(null)
          .map((_, i) => {
            return (
              <div key={i} className="flex h-1/6">
                {Array(6)
                  .fill(null)
                  .map((_, j) => {
                    return (
                      <div
                        key={j}
                        className={cn(
                          "w-1/6 flex items-center justify-center border",
                          pathCoordinates.findIndex(
                            (coord) => coord[0] === i && coord[1] === j
                          ) !== -1 && "bg-black text-white"
                        )}
                      >
                        {i * 6 + j == 0 ? (
                          <h1 className="text-2xl font-bold">S</h1>
                        ) : i * 6 + j == 35 ? (
                          <h1 className="text-2xl font-bold">D</h1>
                        ) : coordinates.get(i * 6 + j) === -1 ? (
                          <BrickWall
                            className={cn(
                              pathCoordinates.findIndex(
                                (coord) => coord[0] === i && coord[1] === j
                              ) !== -1 && "text-white"
                            )}
                          />
                        ) : (
                          coordinates.get(i * 6 + j)
                        )}
                      </div>
                    );
                  })}
              </div>
            );
          })}
      </div>
    </div>
  );
};
