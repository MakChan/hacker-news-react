import React, { Component } from "react";
import "./App.css";
import Api from "./api";


// const PATH_BASE = 'https://hacker-news.firebaseio.com/v0/';
// const PATH_SEARCH = '/search';
// const ITEM_ID = '';
// const REQUEST_TYPE = '';
// const DEFAULT_QUERY = '.json?print=pretty';

// const item_url = `${PATH_BASE}${REQUEST_TYPE}${ITEM_ID}${DEFAULT_QUERY}`;

// const stories_url = `${PATH_BASE}${REQUEST_TYPE}${DEFAULT_QUERY}`;


function fetchSingleStory(id) {
  // const rank = index + 1;
  return new Promise(resolve => {
    Api.fetch(`/item/${id}`, {
      then(data) {
        // let item = data;
        // add the rank since it does not exist yet
        // item.rank = rank;
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

  // setTopItemStories(result) {
  //   this.setState(prevState => ({
  //     itemStories: [...prevState.itemStories, result]
  //   }))    
  // }


  fetchTopStories(storyIds) {
    let actions = storyIds.slice(0, 30).map(fetchSingleStory);
    let results = Promise.all(actions);
    results.then(itemStories =>
      this.setState({itemStories})       
    );
  }


  // findItems(storiesId) {
  //   const request_type = "item/"

  //   for (let i = 0; i < 20; i++) {

  //     fetch(`${PATH_BASE}${request_type}${storiesId[i]}${DEFAULT_QUERY}`)
  //     .then(response => response.json())
  //     .then(result => this.setTopItemStories(result))
  //     .catch(error => error); 

  //   }
  // }

  // onSearchChange(e) {
  //   this.setState({ searchTerm: e.target.value });
  // }

  componentDidMount() {
    // const request_type = "topstories"
    // fetch(`${PATH_BASE}${request_type}${DEFAULT_QUERY}`)
    //   .then(response => response.json())
    //   .then(storiesId => this.findItems(storiesId))
    //   .catch(error => error);

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
    // itemStories = itemStories[0];
    
    if (!itemStories) { return null; }

    return (
      <div className="container">
        <Table list={itemStories}/>
      </div>
    );
  }
}

const Table = ({ list }) => (
  <div>
    {list.map(item => (
      <div key={item.id} className="mt-2">
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <div>
          <span>{item.by} </span>
          <span> {item.descendants} </span>
          <span> {item.score}</span>
        </div>
      </div>
    ))}
  </div>
);

export default App;
