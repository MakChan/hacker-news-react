import React, { Component } from "react";
import Api from "../api";
import Loading from "../Components/Loading.jsx"
import Timestamp from "react-timestamp";

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
    
    Api.fetch(`/${this.props.storyType}`, {
      context: this,
      then(storyIds) {
        this.fetchTopStories(storyIds);
      }
    });
  }

  render() {
    let { itemStories, isLoading } = this.state;

    if (!itemStories) {
      return null;
    }

    return (
      <div className="container">
        { isLoading ? <Loading /> : <Table list={itemStories} /> }
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


const Table = ({ list }) => (
  <div>
    {list.map(item => (
      <div key={item.id} className="m-4 p-3 rounded border border-light bg-gradient-light">
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <div className="small">
          <span> {item.score} points </span>
          <span> by {item.by} </span>
          <span>
            <Timestamp time={item.time} />  | 
          </span>
          <span> {item.descendants} comments</span>
        </div>
      </div>
    ))}
  </div>
);

export default Stories;
