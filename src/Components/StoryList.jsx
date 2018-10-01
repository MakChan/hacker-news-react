import React from "react";
import Timestamp from "react-timestamp";
import { withTheme } from '../Utils/theme-context';

const StoryList = ({theme, list }) => (
  <div className="pt-4">
    {list.map(item => (
      <div
        key={item.id}
        className="m-4 p-3 rounded"
        style={{ background: theme.theme.storyBackground, color: theme.theme.storyColor}}
      >
        <span>
          <a href={item.url} style={{ color: theme.theme.linkColor}}>{item.title}</a>
        </span>
        <div className="small">
          <span> {item.score} points </span>
          <span> by {item.by} </span>
          <span>
            <Timestamp time={item.time} /> 
          </span>
          <span> |{' '}
            <a href={"https://news.ycombinator.com/item?id="+item.id} 
            style={{ color: theme.theme.storyColor}}>{item.descendants} comments</a>
          </span>
          
        </div>
      </div>
    ))}
  </div>
);

export default withTheme(StoryList);
