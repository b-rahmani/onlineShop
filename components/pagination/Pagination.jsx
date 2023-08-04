import { Router, useRouter } from "next/router";
import Link from "next/link";
import FirstPageIcon from "./icons/FirstPage";
import LastPageIcon from "./icons/LastPage";
import ChevronRightIcon from "./icons/NextPage";
import ChevronLeftIcon from "./icons/PrevPage";

const Pagination = ({
  activeClassName,
  behavior,
  container,
  count,
  ellipses,
  first,
  goTo,
  item,
  items,
  last,
  metadata,
  next,
  previous,
  size,
}) => {
  const Router = useRouter();
  const { query, asPath } = Router;
  const { pageNumber, pageSize } = query;

  const countOrDefault = count ? +count : 5;
  const PageNumberOrDefault = pageNumber ? +pageNumber : 1;
  const lastPageNumber = Math.ceil(metadata?.totalCount / metadata?.pageSize);

  const pages = [...Array(countOrDefault || 5).keys()];
  const middleCount = Math.floor(countOrDefault / 2);

  const isAllDataShown = metadata?.pageSize >= metadata?.totalCount;

  const linkBuilder = (page) =>
    Router.push("/", {
      ...query,
      pageNumber: page,
    });

  const firstPageTitle = "first";
  const lastPageTitle = "last";
  const nextPageTitle = "next";
  const previousPageTitle = "prev";

  const firstMarkup = pageNumber > 1 && (
    <>
      <Link
        href={linkBuilder(1)}
        aria-label={`get to first page `}
        className={`first inline-flex items-center justify-center ${
          items || ""
        }`}
      >
        {first && (
          <span
            className={`paginate-buttons relative inline-flex items-center focus:z-20 buttons`}
          >
            <LastPageIcon className={first} />
          </span>
        )}
        <span className="sr-only">{firstPageTitle}</span>
      </Link>
      {ellipses &&
        !previous &&
        !(PageNumberOrDefault <= Math.ceil(countOrDefault / 2)) && (
          <span className={`relative inline-flex items-center ${ellipses}`}>
            ...
          </span>
        )}
    </>
  );

  const previousMarkup = pageNumber > 1 && (
    <>
      <Link
        href={linkBuilder(1)}
        aria-label={`get to previous page`}
        className={`previous inline-flex items-center justify-center ${
          items || ""
        }`}
      >
        {previous && (
          <span
            className={`paginate-buttons relative inline-flex items-center focus:z-20 buttons`}
          >
            <ChevronRightIcon className={previous || " "} />
          </span>
        )}
        <span className="sr-only">{previousPageTitle}</span>
      </Link>
      {ellipses && !(PageNumberOrDefault <= Math.ceil(countOrDefault / 2)) && (
        <span className={`relative inline-flex items-center ${ellipses}`}>
          ...
        </span>
      )}
    </>
  );

  const nextMarkup = pageNumber < lastPageNumber && (
    <>
      {ellipses && !(PageNumberOrDefault + middleCount >= lastPageNumber) && (
        <span className={`relative inline-flex items-center ${ellipses}`}>
          ...
        </span>
      )}
      <Link
        href={linkBuilder(metadata.pageNumber + 1)}
        aria-label={`get to next page`}
        className={`next inline-flex items-center justify-center ${
          items || ""
        }`}
      >
        {next && (
          <span
            className={`paginate-buttons relative inline-flex items-center focus:z-20 buttons`}
          >
            <ChevronLeftIcon className={next || " "} />
          </span>
        )}
        <span className="sr-only">{nextPageTitle}</span>
      </Link>
    </>
  );

  const lastMarkup = pageNumber < lastPageNumber && (
    <>
      {ellipses &&
        !next &&
        !(PageNumberOrDefault + middleCount >= lastPageNumber) && (
          <span className={`relative inline-flex items-center ${ellipses}`}>
            ...
          </span>
        )}
      <Link
        href={linkBuilder(lastPageNumber)}
        aria-label={`get to last page`}
        className={`last inline-flex items-center justify-center ${
          items || ""
        }`}
      >
        {last && (
          <span
            className={`paginate-buttons relative inline-flex items-center focus:z-20 buttons`}
          >
            <FirstPageIcon className={last} />
          </span>
        )}
        <span className="sr-only">{lastPageTitle}</span>
      </Link>
    </>
  );

  return (
    <>
      {!isAllDataShown && (
        <nav
          className={`pagination flex items-center justify-center isolate-space-x-px flex-wrap text-center select-none ${
            container || ""
          }`}
        >
          {first && firstMarkup}
          {previous && previousMarkup}
          {pages.map((item, index) => {
            if (
              PageNumberOrDefault >= 1 &&
              PageNumberOrDefault <= lastPageNumber &&
              PageNumberOrDefault + index - middleCount > 0 &&
              PageNumberOrDefault + index - middleCount <= lastPageNumber
            ) {
              return (
                <Link
                  key={index}
                  aria-label={`get to page ${
                    PageNumberOrDefault + index - middleCount
                  }`}
                  href={linkBuilder(PageNumberOrDefault + index - middleCount)}
                  className={`relative inline-flex items-center numbers ${items} ${
                    PageNumberOrDefault ==
                    PageNumberOrDefault + index - middleCount
                      ? activeClassName
                      : ""
                  } `}
                >
                  {PageNumberOrDefault + index - middleCount}
                </Link>
              );
            }
          })}
          {next && nextMarkup}
          {last && lastMarkup}
        </nav>
      )}
    </>
  );
};

export default Pagination;
