import React from "react";

function MiniInfo({ anime }) {
  return (
    <>
      <div className="container">
        <span className="opacity">type:</span>
        {anime?.type}
      </div>
      <div className="container">
        <span className="opacity">score:</span>
        {anime?.score} / {anime?.scored_by}
      </div>
      <div className="container">
        <span className="opacity">status:</span>
        {anime?.status}
      </div>
      <div className="container">
        <span className="opacity">aired:</span>
        {anime?.aired?.string || anime?.published?.string}
      </div>
      {anime?.type === "TV" && (
        <>
          <div className="container">
            <span className="opacity">episodes:</span>
            {anime?.episodes}
          </div>
          <div className="container">
            <span className="opacity">duration:</span>
            {anime?.duration}
          </div>
          <div className="container">
            <span className="opacity">year:</span>
            {anime?.year}
          </div>
          <div className="container">
            <span className="opacity">season:</span>
            {anime?.season}
          </div>
          <div className="container">
            <span className="opacity">rating:</span>
            {anime?.rating}
          </div>

          <div className="container">
            <span className="opacity">source:</span>
            {anime?.source}
          </div>
        </>
      )}
      {anime?.type === "Manga" && (
        <>
          <div className="container">
            <span className="opacity">chapters:</span>
            {anime?.chapters}
          </div>
          <div className="container">
            <span className="opacity">volumes:</span>
            {anime?.volumes}
          </div>
        </>
      )}
      <div className="container">
        <span className="opacity">popularity:</span>
        {anime?.popularity}
      </div>

      <div className="container">
        <span className="opacity">genres:</span>
        {anime?.genres.map((item, index) => {
          return <p key={index}>{item?.name},</p>;
        })}
      </div>
    </>
  );
}

export default MiniInfo;
