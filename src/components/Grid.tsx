import GridItem from "./GridItem";

function Grid() {
  const size = 16;

  const styles: React.CSSProperties = {
    gridTemplateRows: `repeat(${size}, auto)`,
    gridTemplateColumns: `repeat(${size}, auto)`,
  };
  return (
    <div className="grid" style={styles}>
      {Array.from({ length: Math.pow(size, 2) }, (_, i) => (
        <GridItem key={i} />
      ))}
    </div>
  );
}

export default Grid;
