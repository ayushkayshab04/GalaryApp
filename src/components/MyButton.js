import classes from "./MyButton.module.css";

const MyButton = (props) => {
  return (
    <button className={classes["button-54"]} role="button">
      {props.title}
    </button>
  );
};

export default MyButton;

/* CSS */
// <!-- HTML !-->
{
  /* <button class="button-54" role="button">Button 54</button> */
}

/* CSS */
