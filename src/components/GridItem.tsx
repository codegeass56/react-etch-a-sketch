function GridItem() {
  const alphaVal = 0;
  const styles: React.CSSProperties = {
    backgroundColor: `rgba(0,0,0,${alphaVal})`,
    border: "1px solid rgb(204, 204, 204)",
  };
  return <div style={styles} className="gridItem"></div>;
}

export default GridItem;
