import React, { Component } from "react";
import "./App.css";

const list = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

const PATH_BASE = 'https://hacker-news.firebaseio.com/v0/';
// const PATH_SEARCH = '/search';
const ITEM_ID = '';
const REQUEST_TYPE = '';
const DEFAULT_QUERY = '.json?print=pretty';

const item_url = `${PATH_BASE}${REQUEST_TYPE}${ITEM_ID}${DEFAULT_QUERY}`;

const stories_url = `${PATH_BASE}${REQUEST_TYPE}${DEFAULT_QUERY}`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      itemStories: [],
      searchTerm: ""
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.setTopItemStories = this.setTopItemStories.bind(this);  
    this.findItems = this.findItems.bind(this);    
  }

  setTopItemStories(result) {
    this.setState(prevState => ({
      itemStories: [...prevState.itemStories, result]
    }))    
  }

  findItems(result) {
    const request_type = "item/"

    for (let i = 0; i < 20; i++) {

      fetch(`${PATH_BASE}${request_type}${result[i]}${DEFAULT_QUERY}`)
      .then(response => response.json())
      .then(result => this.setTopItemStories(result))
      .catch(error => error); 

    }
  }

  onSearchChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  componentDidMount() {
    const request_type = "topstories"
    fetch(`${PATH_BASE}${request_type}${DEFAULT_QUERY}`)
      .then(response => response.json())
      .then(result => this.findItems(result))
      .catch(error => error);
  }
    
    

  render() {
    console.log(this.state);
    const { searchTerm, itemStories } = this.state;

    if (!itemStories) { return null; }

    return (
      <div className="container">
      <div>
        <Search value={searchTerm} onChange={this.onSearchChange}>
          Search
        </Search>
        </div>
        <Table list={itemStories} pattern={searchTerm}/>
      </div>
    );
  }
}

const Search = ({ value, onChange, children }) => (
  <form>
    {children} <input type="text" value={value} onChange={onChange} />
  </form>
);

const Table = ({ list, pattern }) => (
  <div>
    {list.filter(isSearched(pattern)).map(item => (
      <div key={item.objectID} className="mt-2">
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <div>
          <span>{item.by}</span>
          <span>{item.descendants}</span>
          <span>{item.score}</span>
        </div>
      </div>
    ))}
  </div>
);

const Button = ({ onClick, className = "", children }) => (
  <button onClick={onClick} className={className} type="button">
    {children}
  </button>
);

export default App;
