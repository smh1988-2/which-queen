import React, { useEffect } from "react";

function Queens({
  randomQueen,
  wrongQueen,
  score,
  setScore,
  returnRandomQueen,
}) {
    
  function clickCorrect() {
    setScore((score += 1));
    console.log("your score is ", score);
    returnRandomQueen();
  }

  function wrongButton() {
    setScore((score -= 1));
    console.log("stupid bitch! ", score);
    returnRandomQueen();
  }

  const answerOrder = Math.floor(Math.random() * 2);
  console.log(answerOrder);

  return (
    <div>
      {randomQueen ? (
        <>
          <br />
          <br />
          {randomQueen.quote}
          <br />
          <br />

          {answerOrder === 1 ? (
            <>
              <img src={randomQueen.image_url} height="100px"></img>
              <br />
              <button onClick={clickCorrect}>{randomQueen.name}</button>
              <br />
              <br />
              <img src={wrongQueen.image_url} height="100px"></img>
              <br />
              <button onClick={wrongButton}>{wrongQueen.name}</button>
            </>
          ) : (
            <>
              <img src={wrongQueen.image_url} height="100px"></img>
              <br />
              <button onClick={wrongButton}>{wrongQueen.name}</button>
              <br />
              <br />
              <img src={randomQueen.image_url} height="100px"></img>
              <br />
              <button onClick={clickCorrect}>{randomQueen.name}</button>
            </>
          )}
        </>
      ) : null}
    </div>
  );
}

export default Queens;

{
  /* {queens.map((q) => {
        return (
          <>
            {fetch(backend, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: q.name,
                winner: q.winner,
                missCongeniality: q.missCongeniality,
                image_url: q.image_url,
                quote: q.quote,
              }),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log("Success:", data);
              })}
          </>
        );
      })} */
}
