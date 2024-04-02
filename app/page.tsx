import { Grid } from "@/components/grid";
import { GridControl } from "@/components/grid-control";

export default function Home() {
  return (
    <div className="h-full w-full flex p-2 gap-x-2 md:flex-row flex-col">
      <Grid />
      <div className="h-1/2 md:h-full w-full md:w-1/3 border">
        <GridControl />
      </div>
    </div>
  );
}
