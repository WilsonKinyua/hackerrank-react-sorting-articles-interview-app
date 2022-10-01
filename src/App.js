import React, { useState, useEffect } from "react";
import "./App.css";
import "h8k-components";

import Articles from "./components/Articles";

const title = "Sorting Articles";

function App({ articles }) {
  const [articlesList, setArticleLists] = useState([]);

  useEffect(() => {
    setArticleLists(articles);
  }, []);

  const upVoteHandler = () => {
    let newArticles = articles.sort((a, b) => b.upvotes - a.upvotes);
    setArticleLists([...newArticles]);
  };

  const mostRecentHandler = () => {
    let newArticles = articles.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setArticleLists([...newArticles]);
  };

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          data-testid="most-upvoted-link"
          className="small"
          onClick={upVoteHandler}
        >
          Most Upvoted
        </button>
        <button
          data-testid="most-recent-link"
          className="small"
          onClick={mostRecentHandler}
        >
          Most Recent
        </button>
      </div>
      <Articles articles={articlesList} />
    </div>
  );
}

export default App;
