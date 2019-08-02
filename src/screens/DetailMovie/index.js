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

class DetailMovie extends Component {
  state = {
    actors: [],
    loading: false
  };

  componentDidMount() {
    this._loadActorFromMovie();
  }

  _loadActorFromMovie = () => {
    const movie = this.props.navigation.getParam("item");

    movie.characters.map(async chars => {
      const res = await axios.get(chars);
      this.setState({ actors: [...this.state.actors, res.data.name] });
    });
  };

  render() {
    const { navigation } = this.props;
    const { actors } = this.state;
    const movie = navigation.getParam("item");
    return (
      <Container>
        <ItemContainer>
          <ScrollView>
            <ItemTitle>Title: {movie.title}</ItemTitle>
            <ItemText>Crawl: {movie.opening_crawl}</ItemText>
            {/* <FlatList
              data={[{ actors }]}
              renderItem={({ actor }) => <ItemText>{actor}</ItemText>}
              keyExtractor={(actor, index) => index.toString()}
            /> */}
            {actors.map(actor => (
              <ItemList key={actor}>{actor}</ItemList>
            ))}
            <ListContainer />
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
