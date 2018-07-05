import React, { Component } from "react";
import "./App.css";
import Api from "./api";

import Timestamp from "react-timestamp";

function fetchSingleStory(id) {
  return new Promise(resolve => {
    Api.fetch(`/item/${id}`, {
      then(data) {
        resolve(data);
      }
    });
  });
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemStories: []
    };
    this.fetchTopStories = this.fetchTopStories.bind(this);
  }

  fetchTopStories(storyIds) {
    let actions = storyIds.slice(0, 30).map(fetchSingleStory);
    let results = Promise.all(actions);
    results.then(itemStories => this.setState({ itemStories }));
  }

  componentDidMount() {
    Api.fetch(`/topstories`, {
      context: this,
      then(storyIds) {
        this.fetchTopStories(storyIds);
      }
    });
  }

  render() {
    console.log(this.state);
    let { itemStories } = this.state;

    if (!itemStories) {
      return null;
    }

    return (
      <div className="container">
        {itemStories ? <Table list={itemStories} /> : null}
      </div>
    );
  }
}

const Table = ({ list }) => (
  <div>
    {list.map(item => (
      <div key={item.id} className="m-4 p-2 bg-gradient-light">
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

export default App;
