import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { getStories } from '../actions';
import { SearchBar, CustomFlatList } from './common';

class StoryList extends Component {

  componentWillMount() {
    this.props.getStories();
  }

  render() {
    return (
      <View>
        <SearchBar placeholder='Arama Yapın' />
        <CustomFlatList itemList={this.props.storyList} />
      </View>
    );
  }
}


const mapStateToProps = ({ story }) => {
  const { storyList } = story;
  return { storyList };
};

export default connect(mapStateToProps, { getStories })(StoryList);
