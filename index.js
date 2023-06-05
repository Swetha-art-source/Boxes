const Box = (props) => {
  //  Write your code here.
  const { color, size, message } = props;
  const boxStyle = {
    backgroundColor: color,
    width: `${size}px`,
    height: `${size}px`,
  };
  return (
    <div className="box" style={boxStyle}>
      {message}
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
        <Box color:"#fbbf24" size={100} message="Small" />
        <Box color:"#38bdf8" size={150} message="Medium" />
        <Box color:"#ec4899" size={200} message="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
