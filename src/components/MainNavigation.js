import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import WebsiteBrand from "./websiteBrand";
import classes from "./MainNavigation.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { pageActions } from "../store";

const MainNavigationBar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(pageActions.setQuery(input));
  };
  return (
    <div>
      <WebsiteBrand />
      <div className={classes.searchBar}>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <Button variant="outline-dark" size="sm" onClick={handleClick}>
            <SearchIcon />
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default MainNavigationBar;
