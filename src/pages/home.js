import { useEffect, useState } from "react";
import classes from "./home.module.css";
import MainNavigationBar from "../components/MainNavigation";
import ImgCard from "../components/Card";
import MyButton from "../components/MyButton";
import { Skeleton } from "@mui/material";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
  const per_page = 12;
  const query = "mountain";
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=${per_page}&format=json&nojsoncallback=1`;
      const response = await fetch(url);
      const responseData = await response.json();
      console.log("=========", responseData.photos.photo);
      setData(responseData.photos.photo);
      setIsLoading(false);
    };
    fetchData()
      .then()
      .catch((err) => {
        console.log(err);
      });
  }, [per_page, query]);

  return (
    <div>
      <MainNavigationBar />
      <div className={classes["button-div"]}>
        <MyButton title={"Mountain"} />
        <MyButton title={"Birds"} />
        <MyButton title={"Beaches"} />
        <MyButton title={"Food"} />
      </div>
      {!isLoading ? (
        <div className={classes["home-cont"]}>
          {data.map((item) => {
            return (
              <ImgCard
                key={item.id}
                farm={item.farm}
                id={item.id}
                server={item.server}
                secret={item.secret}
                title={item.title}
              />
            );
          })}
        </div>
      ) : (
        <div className={classes.skeleton}>
          {Array(12)
            .fill()
            .map(() => {
              return (
                <Skeleton variant="rectangular" height={200} width={310} />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default HomePage;
