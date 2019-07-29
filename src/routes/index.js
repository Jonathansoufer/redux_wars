import React from "react";
import { Text, YellowBox } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

YellowBox.ignoreWarnings([
  "Warning: componentWillMount is deprecated",
  "Warning: componentWillReceiveProps is deprecated",
  "Module RCTImageLoader requires",
]);
import Icon from "react-native-vector-icons/Ionicons";

import ListMovies from "../screens/ListMovies/";
import ListActors from "../screens/ListActors/";
import DetailMovie from "../screens/DetailMovie/";
import DetailActor from "../screens/DetailActor/";

const MovieStack = createStackNavigator(
  {
    Movies: {
      screen: ListMovies
    },
    DetailMovie: {
      screen: DetailMovie
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: <Text style={{ fontSize: 16 }}> Movies </Text>,
      header: null,
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-film" size={26} color="#ffe202" />
      )
    })
  }
);

const ActorStack = createStackNavigator(
  {
    Actors: {
      screen: ListActors
    },
    DetailActor: {
      screen: DetailActor
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: <Text style={{ fontSize: 16 }}> Actors </Text>,
      header: null,
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-arrow-dropright-circle" size={26} color="#ffe202" />
      )
    })
  }
);

const TabNavigatorRoutes = { MovieStack, ActorStack };

const TabNavigatorConfig = {
  initialRouteName: "MovieStack",
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === "MovieStack") {
        iconName = "md-film";
      } else if (routeName === "ActorStack") {
        iconName = "md-arrow-dropright-circle";
      }
      return <Icon name={iconName} size={26} color={tintColor} />;
    }
  }),
  activeTintColor: "#ffe202",
  inactiveTintColor: "#edebd5",
  barStyle: {
    backgroundColor: "#272b30",
    fontSize: 26,
    height: 100
  },
  showLabel: false
};

const AppRoutes = createMaterialBottomTabNavigator(
  TabNavigatorRoutes,
  TabNavigatorConfig
);

const AppContainer = createAppContainer(AppRoutes);

export default AppContainer;
