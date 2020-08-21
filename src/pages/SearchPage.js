import React from "react";
import "./SearchPage.css";
import { useStateProviderValue } from "../datalayer/StateProvider";
import useGoogleSearch from "../useGoogleSearch";

function SearchPage() {
  const [{ term }] = useStateProviderValue();
  const { data } = useGoogleSearch(term);

  console.log(data);

  return (
    <div className="searchPage">
      <div class="searchPage__header">{term}</div>
      <div class="searchPage__results"></div>
    </div>
  );
}

export default SearchPage;
