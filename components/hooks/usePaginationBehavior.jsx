import { useRouter } from "next/router";

const usePaginationBehavior = (basePath) => {
  const { query, asPath } = useRouter();

  // console.log("query in use pagination",query)
  const { pageNumber, ...rest } = query;

  const getLink = (pageNumber) => {
    let url = basePath;
    if (query) {
      const queryString = new URLSearchParams(rest);

      url += queryString;
    }

    if (pageNumber && pageNumber > 1) {
      url += `&pageNumber=${pageNumber}`;
    }

    return url;
  };

  return {
    getLink,
  };
};

export default usePaginationBehavior;
