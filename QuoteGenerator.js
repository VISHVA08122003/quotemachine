import React, { useState } from "react";
import Quote from "./Quote";
import quotes from "./quotes";

const QuoteGenerator = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const handleClick = () => {
    setQuoteIndex(Math.floor(Math.random() * quotes.length));
  };

  return (
    <center><div id="boxshadow">
      <Quote quote={quotes[quoteIndex].quote} author={quotes[quoteIndex].author} />
      <button onClick={handleClick}>Generate Quote</button>
    </div></center>
  );
};

export default QuoteGenerator;