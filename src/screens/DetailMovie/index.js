import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as MoviesActions } from "../../redux/ducks/movies";
import axios from "axios";

import { View, Text, ScrollView, FlatList } from "react-native";

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

  componentDidMount() {
    this._loadActorFromMovie;
  }
  _loadActorFromMovie = async item => {
    let res = await axios.get(item);
    const { actors } = this.state;
    this.setState({ actors: [...actors, res.data.name] });
    console.log(actors);
    return (
      <View>
        <Text>Actor Name: {actors}</Text>;
      </View>
    );
  };

  render() {
    const { navigation, refreshing } = this.props;
    const { actors } = this.state;
    const movie = navigation.getParam("item");
    return (
      <Container>
        <ItemContainer>
          <ScrollView>
            <ItemTitle>Title: {movie.title}</ItemTitle>
            <ItemText>Crawl: {movie.opening_crawl}</ItemText>
            <ListContainer>
              <FlatList
                data={actors}
                renderItem={item => console.log(actors)}
              />
              {/* {movie.characters.map(async item => {
                let res = await axios.get(item);
                const { actors } = this.state;
                this.setState({ actors: [...actors, res.data.name] });
                console.log(actors); */}
              {/* // return (
                //   <View>
                //     <Text>Actor Name: {actors}</Text>;
                //   </View>
                // ); */}
              {/* })} */}
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
