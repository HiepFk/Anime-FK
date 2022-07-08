import React from "react";
import image from "../../asset/2.jpg";
import ListMini from "./ListMini";

function Manga() {
  return (
    <ListMini title={"TOP MANGA"} img={image} name="Your name" link="mangas" />
  );
}

export default Manga;
