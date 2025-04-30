import { useEffect, useState } from "react";

const ScienceNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScienceNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?category=science&apiKey=29bd776a881c49fd9cf2590f0fef4df6"
        );
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error("Error fetching science news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchScienceNews();
  }, []);

  return (
    <div>
      <h2>Science News </h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        news.map((article, index) => (
          <div key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))
      )}
    </div>
  );
};

export default ScienceNews;

