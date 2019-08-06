import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as ActorsActions } from '../../redux/ducks/actors';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import Header from '../../components/Header/';
import { Container, ItemText, ItemContainer } from './styles';

class ListActors extends Component {
  static navigationOptions = { header: null };

  static propTypes = {
    loadActorsRequest: PropTypes.func.isRequired,
    actors: PropTypes.shape({
      data: PropTypes.array,
    }).isRequired,
  };

  state = {
    refreshing: false,
  };

  componentDidMount() {
    const { loadActorsRequest } = this.props;
    loadActorsRequest();
  }

  _loadActors = async () => {
    this.setState((refreshing: true));
    const { loadActorsRequest } = this.props;

    await loadActorsRequest();
    this.setState((refreshing: false));
  };

  render() {
    const { actors } = this.props;
    const { refreshing } = this.state;
    return (
      <Container>
        <Header title="Actors" />
        <FlatList
          data={actors.data}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('DetailActor', { item })
              }
            >
              <ItemContainer>
                <ItemText>{item.name}</ItemText>
              </ItemContainer>
            </TouchableOpacity>
          )}
          onRefresh={this._loadActors}
          refreshing={refreshing}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  actors: state.actors,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActorsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListActors);
