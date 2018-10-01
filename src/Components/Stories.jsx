import React, { Component } from "react";
import Api from "../api";
import Loading from "../Components/Loading.jsx";
import StoryList from "./StoryList";
import { withTheme } from '../Utils/theme-context';

class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemStories: [],
      isLoading: false,
    };
    this.fetchTopStories = this.fetchTopStories.bind(this);
  }

  fetchTopStories(storyIds) {
    let actions = storyIds.slice(0, 30).map(fetchSingleStory);
    let results = Promise.all(actions);
    results.then(itemStories => this.setState({ 
      itemStories,      
      isLoading: false,
    }));
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    
    Api.fetch(`/${this.props.storyType}stories`, {
      context: this,
      then(storyIds) {
        this.fetchTopStories(storyIds);
      }
    });
  }

  render() {   
    
    const theme = this.props.theme.theme;
    let { itemStories, isLoading } = this.state;

    if (!itemStories) {
      return null;
    }

    return (
      <div className="stories" style={{ background: theme.background }}>
        <div className="container">
          { isLoading ? <Loading /> : <StoryList list={itemStories} /> }
        </div>
      </div>
    );
  }
}


function fetchSingleStory(id) {
  return new Promise(resolve => {
    Api.fetch(`/item/${id}`, {
      then(data) {
        resolve(data);
      }
    });
  });
}




export default withTheme(Stories);
