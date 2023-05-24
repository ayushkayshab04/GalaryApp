import Pagination from "@mui/material/Pagination";
import classes from "./Pagination.module.css";
import { useDispatch, useSelector } from "react-redux";
import { pageActions } from "../store";

const MyPagination = () => {
  const page = useSelector((state) => state.pageCounter.pageNumber);
  const dispatch = useDispatch();
  const handleChange = (event, value) => {
    dispatch(pageActions.setPage(value));
  };
  return (
    <div className={classes.pagination}>
      <Pagination count={2000} page={page} onChange={handleChange} />
    </div>
  );
};

export default MyPagination;
