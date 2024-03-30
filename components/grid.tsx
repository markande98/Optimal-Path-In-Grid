"use client";

import { grid } from "@/store/atoms/grid";
import Image from "next/image";
import { useRecoilValue } from "recoil";

export const Grid = () => {
  const cordinates = useRecoilValue(grid);

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
                        className="w-1/6 flex items-center justify-center border"
                      >
                        {cordinates.has(i * 6 + j) ? (
                          cordinates.get(i * 6 + j) === -1 ? (
                            <Image
                              src="/hash.png"
                              alt="hash"
                              width={30}
                              height={30}
                            />
                          ) : (
                            cordinates.get(i * 6 + j)
                          )
                        ) : null}
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
