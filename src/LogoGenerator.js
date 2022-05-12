import React, { useEffect } from "react";
import "./App.css";
import { ImageList, ImageListItem, Paper } from "@mui/material";
import logo1 from "./Images/1.svg";
import logo2 from "./Images/2.svg";
import logo3 from "./Images/3.svg";
import logo4 from "./Images/4.svg";
import logo5 from "./Images/5.svg";
import logo6 from "./Images/6.svg";
import logo7 from "./Images/7.svg";
import logo8 from "./Images/8.svg";
import logo9 from "./Images/9.svg";
import Typography from "@mui/material/Typography";
import WebFont from "webfontloader";

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function LogoGenerator(props) {
  useEffect(() => {
    WebFont.load({
      google: {
        families: [
          "Georgia",
          "Verdana",
          "Helvetica",
          "Garamond",
          "Merriweather",
          "Open Sans",
          "Ubuntu",
          "Lora",
          "Abril Fatface",
          "Poppins",
          "Cinzel",
          "Fauna One",
          "Fjalla One",
          "Libre Baskerville",
          "Space Mono",
          "Muli",
          "Spectral",
          "Rubik",
        ],
      },
    });
  }, []);

  let fontPairs = [
    {
      companyName: "Georgia",
      slogan: "Verdana",
    },
    {
      companyName: "Helvetica",
      slogan: "Garamond",
    },
    {
      companyName: "Merriweather",
      slogan: "Open Sans",
    },
    {
      companyName: "Ubuntu",
      slogan: "Lora",
    },
    {
      companyName: "Abril Fatface",
      slogan: "Poppins",
    },
    {
      companyName: "Cinzel",
      slogan: "Fauna One",
    },
    {
      companyName: "Fjalla One",
      slogan: "Libre Baskerville",
    },
    {
      companyName: "Space Mono",
      slogan: "Muli",
    },
    {
      companyName: "Spectral",
      slogan: "Rubik",
    },
  ];
  let itemData = [
    {
      img: logo1,
      title: "Logo1",
      fontFamilyCompany: "Open Sans",
      fontFamilySlogan: "PT Sans",
    },
    {
      img: logo2,
      title: "Logo2",
      fontFamily: "Times New Roman",
    },
    {
      img: logo3,
      title: "Logo3",
      fontFamily: "Courier New",
    },
    {
      img: logo4,
      title: "Logo4",
      fontFamily: "Brush Script MT",
    },
    {
      img: logo5,
      title: "Logo5",
      fontFamily: "Lucida Handwriting",
    },
    {
      img: logo6,
      title: "Logo6",
      fontFamily: "Copperplate",
    },
    {
      img: logo7,
      title: "Logo7",
      fontFamily: "Papyrus",
    },
    {
      img: logo8,
      title: "Logo8",
      fontFamily: "Helvetica",
    },
    {
      img: logo9,
      title: "Logo9",
      fontFamily: "Georgia",
    },
  ];
  itemData = shuffleArray(itemData);
  fontPairs = shuffleArray(fontPairs);
  return (
    <React.Fragment>
      <div align="center">
        <ImageList sx={{ width: 1200 }} cols={3} rowHeight={300} gap={20}>
          {itemData.map((item, index) => (
            <Paper
              variant="elevation"
              square
              style={{ padding: "20px" }}
              key={item.img}
              elevation={2}
            >
              <ImageListItem>
                <img
                  style={{
                    margin: "auto",
                    padding: "10px",
                    alignItems: "center",
                    objectFit: "scale-down",
                    width: "200px",
                    height: "200px",
                  }}
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                />
                <Typography
                  variant="h2"
                  align="center"
                  fontFamily={fontPairs[index].companyName}
                >
                  {props.CompanyName}
                </Typography>
                <Typography
                  variant="caption"
                  align="center"
                  fontFamily={fontPairs[index].slogan}
                >
                  {props.slogan}
                </Typography>
              </ImageListItem>
            </Paper>
          ))}
        </ImageList>
      </div>
    </React.Fragment>
  );
}

export default LogoGenerator;
