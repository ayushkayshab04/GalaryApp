import { useDispatch } from "react-redux";
import classes from "./MyButton.module.css";
import { pageActions } from "../store";

const MyButton = (props) => {
  const dispatch = useDispatch();
  const setQuery = (title) => {
    dispatch(pageActions.setQuery(title));
  };
  return (
    <button
      onClick={() => {
        setQuery(props.title);
      }}
      className={classes["button-54"]}
      role="button"
    >
      {props.title}
    </button>
  );
};

export default MyButton;
