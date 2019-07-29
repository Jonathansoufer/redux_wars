import React, { Component } from "react";
import PropTypes from "prop-types";

import { View, Text, ScrollView } from "react-native";

import {
  Container,
  ItemContainer,
  ItemText,
  ItemTitle,
  ListContainer
} from "./styles";

class DetailActor extends Component {
  render() {
    const { navigation } = this.props;
    const actor = navigation.getParam("item");

    return (
      <Container>
        <ItemContainer>
          <ScrollView>
            <ItemTitle>Name: {actor.name}</ItemTitle>
            <ItemText>Height: {actor.height}</ItemText>
            <ItemText>Mass: {actor.mass}</ItemText>
            <ListContainer>
              <ItemText>Homeworld: {actor.homeworld}</ItemText>
            </ListContainer>
          </ScrollView>
        </ItemContainer>
      </Container>
    );
  }
}

DetailActor.propTypes = {
  navigation: PropTypes.shape().isRequired
};

DetailActor.navigationOptions = {
  header: null
};

export default DetailActor;
