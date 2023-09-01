import { useRouter } from "next/router";

const usePaginationBehavior = (basePath) => {
  const { query, asPath } = useRouter();

  const getLink = (pageNumber) => {

    let url = {
      pathname: basePath,
      query: { ...query, page: pageNumber },
    };

    return url;
  };

  return {
    getLink,
  };
};

export default usePaginationBehavior;
