export const Grid = () => {
  return (
    <div className="h-full w-2/3 border flex items-center justify-center bg-cyan-800/70">
      <div className="w-[700px] h-[700px] border rounded-lg overflow-hidden shadow-lg bg-white">
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
                      ></div>
                    );
                  })}
              </div>
            );
          })}
      </div>
    </div>
  );
};
