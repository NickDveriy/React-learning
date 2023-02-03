// our.domain.com/news

import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/some-cool-link">Some coool link</Link>
        </li>
        <li>Something else</li>
      </ul>
    </>
  );
};

export default NewsPage;
