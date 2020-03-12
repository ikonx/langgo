import { TabRouter } from "@react-navigation/native";

const createSidebarNavigator = (routeConfigMap) => {
  const customTabRouter = TabRouter(routeConfigMap);
  return createNavigator(SidebarTabsNavigator, customTabRouter, {});
};
