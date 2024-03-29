export const Grid = () => {
  return (
    <div className="h-full w-2/3 border flex items-center justify-center">
      <div className="w-[700px] h-[700px] border rounded-md shadow-lg">
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
                        {i}-{j}
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
