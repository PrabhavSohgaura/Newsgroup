import { useEffect, useState } from "react";
import "./App.css";
import JobPosting from "./components/JobPosting";

const Item_Per_Page = 5;

const API = "https://hacker-news.firebaseio.com/v0";

function App() {
  const [items, setItems] = useState([]);
  const [itemIds, setItemIds] = useState(null);
  const [fetching, setFetching] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchPost = async (currPage) => {
    setCurrentPage(currPage);
    setFetching(true);
    let itemList = itemIds;
    if (itemList === null) {
      const response = await fetch(`${API}/jobstories.json`);
      itemList = await response.json();
      setItemIds(itemList);
    }
    const itemIdsForPage = itemList.slice(
      currPage * Item_Per_Page,
      currPage * Item_Per_Page + Item_Per_Page
    );

    const ItemPerPage = await Promise.all(
      itemIdsForPage.map((itemId) =>
        fetch(`${API}/item/${itemId}.json`).then((response) => response.json())
      )
    );

    setItems([...items, ...ItemPerPage]);
    setFetching(false);
  };

  useEffect(() => {
    if (currentPage === 0) fetchPost(currentPage);
  }, [currentPage]);

  return (
    <>
      <div className="news_app">
        <h1 className="news_app--title">News Group</h1>
        {itemIds === null || items.length < 1 ? (
          <p>Loading...</p>
        ) : (
          <div>
            <div>
              {items.map((item) => (
                <JobPosting key={item.id} {...item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
