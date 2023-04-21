import React from "react";

const Quote = ({ quote, author }) => {
  return (
    <div>
    <center><div>
      <h2>{quote}</h2>
      <p>{author}</p>
    </div></center>
    </div>
  );
};

export default Quote;