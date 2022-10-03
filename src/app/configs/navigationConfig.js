import i18next from "i18next";
import ar from "./navigation-i18n/ar";
import en from "./navigation-i18n/en";
import tr from "./navigation-i18n/tr";
import DashboardIcon from "@mui/icons-material/Dashboard";
i18next.addResourceBundle("en", "navigation", en);
i18next.addResourceBundle("tr", "navigation", tr);
i18next.addResourceBundle("ar", "navigation", ar);

const navigationConfig = [
  {
    id: "",
    title: "Example",
    translate: "EXAMPLE",
    type: "item",
    icon: "heroicons-outline:star",
    url: "example",
  },
  // Dash Board
  {
    id: "DashBoard-component",
    title: "Dashboard",
    translate: "Dashboard",
    type: "item",
    icon: "heroicons-outline:chart-pie",
    url: "Dashboard",
  },
  // Marketing
  {
    id: "Marketing-component",
    title: "Marketing",
    translate: "Marketing",
    type: "item",
    icon: "heroicons-outline:speakerphone",
    url: "marketing",
  },

  // People
  {
    id: "People-component",
    title: "People",
    translate: "People",
    type: "item",
    icon: "heroicons-outline:users",
    url: "people",
  },
  // Finance
  {
    id: "Finance-component",
    title: "Finance",
    translate: "Finance",
    type: "item",
    icon: "heroicons-outline:currency-dollar",
    url: "Finance",
  },
  // Recruit
  {
    id: "Recruit-component",
    title: "Recruit",
    translate: "Recruit",
    type: "item",
    icon: "heroicons-outline:user-add",
    url: "Recruit",
  },
  // Admin
  {
    id: "Admin-component",
    title: "Admin",
    translate: "Admin",
    type: "item",
    icon: "heroicons-outline:user",
    url: "Admin",
  },
  // Hub
  {
    id: "Hub-component",
    title: "Hub",
    translate: "Hub",
    type: "item",
    icon: "heroicons-outline:cube-transparent",
    url: "Hub",
  },
];

export default navigationConfig;
