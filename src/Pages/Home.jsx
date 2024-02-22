import { Grid } from "@mui/material";
import Slider from "../components/Slider";
import ShopByCategory from "../components/ShopByCategory";
import OurBestSeller from "../components/OurBestseller";
import DealOfTheMoth from "../components/DealOfTheMonth";

export default function Home() {
  return (
    <>
      <Grid container rowSpacing={2}>
        <Grid item xs={12} height={"100vh"} width={"100vh"}>
          <Slider />
        </Grid>
        <Grid item xs={12}>
          <ShopByCategory />
        </Grid>
        <Grid item xs={12}>
          <OurBestSeller />
        </Grid>
        <Grid item xs={12}>
          <DealOfTheMoth />
        </Grid>
      </Grid>
    </>
  );
}
