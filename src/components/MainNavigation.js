import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import WebsiteBrand from "./websiteBrand";
import classes from "./MainNavigation.module.css";
import SearchIcon from "@mui/icons-material/Search";
const MainNavigationBar = () => {
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
          />
          <Button variant="outline-success" size="sm">
            <SearchIcon />
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default MainNavigationBar;
