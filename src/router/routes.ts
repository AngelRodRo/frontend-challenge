enum Routes {
  Home = "Home",
  Plans = "Plans",
  Summary = "Summary",
}

export const routes: { [k in Routes]: string } = {
  [Routes.Home]: "/",
  [Routes.Plans]: "/planes",
  [Routes.Summary]: "/resumen",
};
