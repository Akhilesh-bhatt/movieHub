import { Button, Tab, Tabs, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import Template from "../components/Template";
import Cpagination from "../components/Cpagination";

export default function Search() {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [totalPage, setTotalPage] = useState();
  const [content, setContent] = useState([]);

  const fetchSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US&query=${searchText}&page=${page}&include_adult=true`
    );
    setContent(data.results);
    setTotalPage(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
  }, [type, page]);

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      fetchSearch();
    }
  };

//   const [first, setfirst] = useState();
  return (
    <>
      <div style={{ display: "flex", margin: "15px 0px" }}>
        <TextField
          id="filled-basic"
          label="Search"
          variant="filled"
          style={{ flex: 1 }}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button
          variant="contained"
          style={{ marginLeft: 10 }}
          onClick={() => {
            fetchSearch();
            setPage(1);
          }}
          onKeyPress={handleKeyPress}
        >
          <SearchIcon />
        </Button>
      </div>
      <Tabs
        value={type}
        // onChange={handleChange}
        onChange={(event, newValue) => {
          setType(newValue);
          setPage(1);
        }}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        style={{ marginBottom: "15px" }}
      >
        <Tab label="Movie Search" style={{ width: "50%" }} />
        <Tab label="Series Search" style={{ width: "50%" }} />
      </Tabs>
      <div
        className="trending"
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {content &&
          content.map((c) => (
            <Template
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={c.vote_average}
            />
          ))}
        {searchText &&
          !content &&
          (type ? <h2>No tv Series found</h2> : <h2>No movies found</h2>)}
      </div>
      {totalPage > 1 && <Cpagination setPage={setPage} totalPage={totalPage} />}
    </>
  );
}
