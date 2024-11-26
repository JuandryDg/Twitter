import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import tweetdata from "../data/tweets.json";
import TwitterCard from "../components/TwitterCard";
import TweetInput from "../components/TweetInput";
import { useState } from "react";
function Home() {
  const [tweets, setTweets] = useState(tweetdata);
  const addTweet = (content) => {
    const newTweet = {
      id: tweets.length + 1,
      author: "Alumno",
      content: content,
    };
    setTweets([newTweet, ...tweets]);
  };
  return (
    <div>
      <Navbar />
      <div>
        <h2 className="text-center font-bold">Bienvenidos a nuestra app</h2>
        <TweetInput sendTweet={addTweet} />
        <div>
          {tweets.map((tweet) => (
            <TwitterCard
              key={tweet.id}
              author={tweet.author}
              content={tweet.content}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
