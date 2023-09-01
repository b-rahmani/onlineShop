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

  const countOrDefault = metadata?.totoalCount ? +metadata?.totoalCount : 5;
  const PageNumberOrDefault = pageNumber ? +pageNumber : 1;

  const lastPageNumber = Math.ceil(metadata?.totalCount / metadata?.pageSize);

  const pages = [...Array(countOrDefault || 5).keys()];
  const middleCount = Math.floor(countOrDefault / 2);

  const isAllDataShown = metadata?.pageSize >= metadata?.totalCount;

  const linkBuilder = (page) => {
    const { getLink } = behavior;
    return getLink(page);
  };

  const firstPageTitle = "";
  const lastPageTitle = "";
  const nextPageTitle = "";
  const previousPageTitle = "";

  const firstMarkup = PageNumberOrDefault > 1 && (
    <>
      <Link
        href={linkBuilder(1)}
        aria-label={`get to first page `}
        className="first"
      >
        <a>
          {first && (
            <span className={`paginate-buttons`}>
              <LastPageIcon className={first} />
            </span>
          )}
          <span className="sr-only">{firstPageTitle}</span>
        </a>
      </Link>
      {ellipses &&
        !previous &&
        !(PageNumberOrDefault <= Math.ceil(countOrDefault / 2)) && (
          <span className="ellipses">...</span>
        )}
    </>
  );

  const previousMarkup = PageNumberOrDefault > 1 && (
    <>
      <Link href={linkBuilder(1)} aria-label={`get to previous page`}>
        <a className="previous items">
          {previous && (
            <span className={`paginate-buttons`}>
              <ChevronRightIcon className={previous || " "} />
            </span>
          )}
          <span className="sr-only">{previousPageTitle}</span>
        </a>
      </Link>
      {ellipses && !(PageNumberOrDefault <= Math.ceil(countOrDefault / 2)) && (
        <span className="ellipses">...</span>
      )}
    </>
  );

  const nextMarkup = PageNumberOrDefault < lastPageNumber && (
    <>
      {ellipses && !(PageNumberOrDefault + middleCount >= lastPageNumber) && (
        <span className="ellipses">...</span>
      )}
      <Link href={linkBuilder(pageNumber + 1)} aria-label={`get to next page`}>
        <a className="next">
          {next && (
            <span>
              <ChevronLeftIcon className="icons" />
            </span>
          )}
          <span className="sr-only">{nextPageTitle}</span>
        </a>
      </Link>
    </>
  );

  const lastMarkup = PageNumberOrDefault < lastPageNumber && (
    <>
      {ellipses &&
        !next &&
        !(PageNumberOrDefault + middleCount >= lastPageNumber) && (
          <span className="ellipses">...</span>
        )}
      <Link href={linkBuilder(lastPageNumber)} aria-label={`get to last page`}>
        <a className={"last"}>
          {last && (
            <span>
              <FirstPageIcon className={`icons`} />
            </span>
          )}
          <span className="sr-only">{lastPageTitle}</span>
        </a>
      </Link>
    </>
  );

  return (
    <>
      {!isAllDataShown && (
        <nav className="pagination">
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
                >
                  <a
                    className={`relative inline-flex items-center numbers ${items} ${
                      PageNumberOrDefault ==
                      PageNumberOrDefault + index - middleCount
                        ? activeClassName
                        : ""
                    } `}
                  >
                    {PageNumberOrDefault + index - middleCount}
                  </a>
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
