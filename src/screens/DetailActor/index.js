import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { ScrollView } from "react-native";

import {
  Container,
  ItemContainer,
  ItemText,
  ItemTitle,
  ItemList,
  ListContainer
} from "./styles";

class DetailActor extends Component {
  state = {
    homeland: null,
    population: null,
    loading: false
  };

  componentDidMount() {
    this._loadPlanetFromActor();
  }

  _loadPlanetFromActor = async () => {
    const actor = this.props.navigation.getParam("item");
    const res = await axios.get(actor.homeworld);
    this.setState({ homeland: res.data.name, population: res.data.population });
  };

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
            <ItemText>Homeworld: {this.state.homeland}</ItemText>
            <ItemText>Population: {this.state.population}</ItemText>
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
