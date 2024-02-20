function GridItem() {
  const alphaVal = 0;
  const styles: React.CSSProperties = {
    backgroundColor: `rgba(0,0,0,${alphaVal})`,
  };
  return <div style={styles} className="gridItem"></div>;
}

export default GridItem;
