import "./MyButton.css";

function MyButton(props) {

  return (
    <button
      onClick={props.onTouchButton}
      style={{ marginBotton: "10px" }}
      className="btn"
    >
      {props.children}
    </button>
  );
}

export default MyButton;