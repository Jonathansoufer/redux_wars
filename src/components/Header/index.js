import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { Container, Title } from "./styles";

const Header = props => {
  return (
    <Container>
      <Title>{props.title}</Title>
      {/* <TouchableOpacity>
      <Icon name="ios-arrow-round-back" size={40} color="#FFE202" />
    </TouchableOpacity> */}
    </Container>
  );
};

export default Header;
