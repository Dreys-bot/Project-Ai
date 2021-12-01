import React, { useState, useEffect } from "react";
import "./styles.css";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./NewsCards/NewsCards";

import wordsToNumbers from "words-to-numbers";

//KEY FROM ALAN STUDIO
const alanKey =
  "739ff2629ffde04d841c4aacb8f982b92e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  const [newsArticles, setNewArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  // const classes = useStyles();
  useEffect(() => {
    //BUTTON IN THE LEFT CORNER
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        //COMMAMDS -> FROM ALAN STUDIO
        if (command === "newHeadlines") {
          setNewArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          //USED TO SELECT THE CARD TO HIGHLIGHT
          setActiveArticle((prev) => prev + 1);
        } else if (command === "open") {
          //TO RECTIFY THE NUMBERS
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];
          if (parsedNumber > 20) {
            alanBtn().playText("Please try that again");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening.");
          }
        }
      }
    });
  }, []);

  return (
    <div>
      <NewsCards articles={newsArticles} active={activeArticle} />
    </div>
  );
}

export default App;
