import { useRouter } from "next/router";

// our.domain.com/news/[newsId]

const DetailsPage = () => {
  const router = useRouter();

  const newsId = router.query.newsId; // parameter from url which is named in fileName in []

  return <h1>Details Page</h1>;
};

export default DetailsPage;
