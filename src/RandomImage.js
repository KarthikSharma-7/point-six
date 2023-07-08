import React, { useState, useEffect } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const RandomImage = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    // Fetch a random image URL from the API
    const fetchRandomImage = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_KEY}`
        );
        response.json().then((data) => {
          setImageUrl(data.urls.small);
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchRandomImage();
  }, []);

  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      alignItems="center"
      background="white"
      spacing={2}
      style={{ height: "100vh" }}
    >
      <Grid item xs={12} sm={6}>
        <Card>
          <CardMedia
            component="img"
            alt="Random Image"
            height="300"
            image={imageUrl}
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Share this image:
            </Typography>
            {imageUrl && (
              <Grid container spacing={2}>
                <Grid item>
                  <FacebookShareButton url={imageUrl}>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<FacebookIcon />}
                    >
                      Share on Facebook
                    </Button>
                  </FacebookShareButton>
                </Grid>
                <Grid item>
                  <TwitterShareButton
                    url={imageUrl}
                    quote="Check out this image!"
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<TwitterIcon />}
                    >
                      Share on Twitter
                    </Button>
                  </TwitterShareButton>
                </Grid>
                <Grid item>
                  <WhatsappShareButton url={imageUrl}>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<WhatsAppIcon />}
                    >
                      Share on WhatsApp
                    </Button>
                  </WhatsappShareButton>
                </Grid>
              </Grid>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default RandomImage;
