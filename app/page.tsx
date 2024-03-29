import { Grid } from "@/components/grid";
import { GridControl } from "@/components/grid-control";

export default function Home() {
  return (
    <div className="h-full w-full flex p-2 gap-x-2">
      <Grid />
      <div className="h-full w-1/3 border">
        <GridControl />
      </div>
    </div>
  );
}
