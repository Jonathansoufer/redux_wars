import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as MoviesActions } from "../../redux/ducks/movies";
import { FlatList, TouchableOpacity } from "react-native";

import Header from "../../components/Header/";
import { Container, ItemText, ItemContainer } from "./styles";

class ListMovies extends Component {
  static navigationOptions = { header: null };

  static propTypes = {
    loadMoviesRequest: PropTypes.func.isRequired,
    movies: PropTypes.shape({
      data: PropTypes.array
    }).isRequired
  };

  state = {
    refreshing: false
  };

  componentDidMount() {
    const { loadMoviesRequest } = this.props;
    loadMoviesRequest();
  }

  _loadMovies = async () => {
    this.setState((refreshing: true));
    const { loadMoviesRequest } = this.props;

    await loadMoviesRequest();
    this.setState((refreshing: false));
  };

  render() {
    const { movies } = this.props;
    const { refreshing } = this.state;
    return (
      <Container>
        <Header />
        <FlatList
          data={movies.data}
          keyExtractor={item => item.title}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("DetailMovie", { item })
              }
            >
              <ItemContainer>
                <ItemText>{item.title}</ItemText>
              </ItemContainer>
            </TouchableOpacity>
          )}
          onRefresh={this._loadMovies}
          refreshing={refreshing}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(MoviesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListMovies);
