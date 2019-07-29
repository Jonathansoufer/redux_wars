import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as MoviesActions } from "../../redux/ducks/movies";
import axios from "axios";

import { View, Text, ScrollView } from "react-native";

import {
  Container,
  ItemContainer,
  ItemText,
  ItemTitle,
  ListContainer
} from "./styles";

class DetailMovie extends Component {
  state = {
    refreshing: false,
    actors: []
  };

  _loadActorFromMovie = async item => {
    let res = await axios.get(item);
    this.setState({ actors: res.data.name });
    const { actors } = this.state;

    this.setState({ actors: [] });
    return (
      <View>
        <Text>Actor: {actors}</Text>
      </View>
    );
  };

  render() {
    const { navigation } = this.props;
    const movie = navigation.getParam("item");
    return (
      <Container>
        <ItemContainer>
          <ScrollView>
            <ItemTitle>Title: {movie.title}</ItemTitle>
            <ItemText>Crawl: {movie.opening_crawl}</ItemText>
            <ListContainer>
              {movie.characters.map((item, index) => {
                this._loadActorFromMovie(item);
              })}
            </ListContainer>
          </ScrollView>
        </ItemContainer>
      </Container>
    );
  }
}

DetailMovie.propTypes = {
  navigation: PropTypes.shape().isRequired
};

DetailMovie.navigationOptions = {
  header: null
};
export default DetailMovie;
