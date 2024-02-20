function Grid({ children }: ChildrenProps) {
  const size = 16;

  const styles: React.CSSProperties = {
    gridTemplateRows: `repeat(${size}, auto)`,
    gridTemplateColumns: `repeat(${size}, auto)`,
  };
  return (
    <div className="grid" style={styles}>
      {children}
    </div>
  );
}

export default Grid;
