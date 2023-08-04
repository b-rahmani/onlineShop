import classes from "./productMap.module.scss";

import ProductCard from "../productCard/ProductCard";
import Modal from "../modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeIsExtend, closeIsShare } from "../../store/hoverActionsSlice";
import { RootState } from "../../store/store";
import CloseIcon from "../icons/CloseIcon";
import CopyIcon from "../icons/copyIcon";
import TelegramIcon from "../icons/telegramIcon";
import { useRouter } from "next/router";
import { joinClassModules } from "../../utils/utils";
import WhatsappIcon from "../icons/WhatsappIcon";
import TwetterIcon from "../icons/TwetterIcon";
import useCopyToClipboard from "../hooks/useCopyToClipBoard";
import { LayoutGroup, motion } from "framer-motion";
import { useContext } from "react";
import { AllProductContext } from "../../store/ContextAllProduct";

// import { Dictionary } from "../../store/ContextAllProduct";
import CheckIcon from "../icons/checkIcon";
import { productType } from "../SingleProduct/SingleProduct";
import LoadingCard from "../productCard/LoadingCard";
import NotFoundSearch from "../icons/NotFoundSearch";
import Pagination from "../pagination/Pagination";

const ProductMap = () => {
  const dispatch = useDispatch();
  const { allProductState, loading } = useContext(AllProductContext);
  const [copied, copy] = useCopyToClipboard("", 3000);
  const isShare = useSelector((state) => state.CartHoverAction.share.isShare);
  const sharedLink = useSelector((state) => state.CartHoverAction.share.link);

  const extendData = useSelector((state) => state.CartHoverAction.extend);
  const Router = useRouter();
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  let Mothened = motion(ProductCard);

  return (
    <LayoutGroup>
      {!loading && allProductState?.length === 0 ? (
        <section className={classes.notFoundSearch}>
          <NotFoundSearch />
          <p>نتیجه‌ای یافت نشد!</p>
        </section>
      ) : (
        ""
      )}
      <div className={classes.productMapLayout}>
        {loading &&
          Array.from(Array(12).keys()).map((item) => (
            <LoadingCard key={item} break />
          ))}

        {allProductState?.map((item) => (
          <Mothened
            layout
            key={item.id.toString()}
            data={item}
            layoutId={item.id.toString()}
          />
        ))}

        <Modal
          backdrop
          close={() => dispatch(closeIsShare())}
          show={isShare}
          type="center"
          style={{ borderRadius: "15px" }}
        >
          <div className={classes.shareBox}>
            <div className={classes.header}>
              <span>اشتراک‌گذاری</span>
              <CloseIcon click={() => dispatch(closeIsShare())} />
            </div>
            <div className="divider"></div>
            <div className={classes.shareText}>
              با روش های زیر این محصول را به اشتراک بگذارید !
            </div>

            <div
              className={classes.copyLinkBox}
              onClick={() => copy(sharedLink)}
            >
              {copied ? <CheckIcon /> : <CopyIcon />}
              {copied ? <span>کپی شد</span> : <span>کپی کردن لینک</span>}{" "}
            </div>
            <div className={classes.Icons}>
              <a
                href={`https://t.me/share/url=${sharedLink}?text=تست`}
                target="_blank"
                rel="noreferrer"
                className={joinClassModules(classes.Icon, classes.telegram)}
              >
                <TelegramIcon />
                <span>تلگرام</span>
              </a>

              <a
                href={`https://api.whatsapp.com/send?text=${sharedLink}`}
                target="_blank"
                rel="noreferrer"
                className={joinClassModules(classes.Icon, classes.whatsapp)}
              >
                <WhatsappIcon />
                <span>واتس‌اپ</span>
              </a>

              <a
                href={`https://twitter.com/intent/tweet?url=${sharedLink}`}
                target="_blank"
                rel="noreferrer"
                className={joinClassModules(classes.Icon, classes.twetter)}
              >
                <TwetterIcon />
                <span>توییتر</span>
              </a>
            </div>
          </div>
        </Modal>
      </div>
      <Pagination
        activeClassName="active"
        container=""
        count={2}
        ellipses=""
        first="first"
        previous="prev"
        next="next"
        last="last"
        metadata={{
          totalCount: allProductState.count,
          PageSize: 6,
        }}
      />
      {/* <AnimatePresence presenceAffectsLayout>
        {extendData.isExtend && (
          <motion.div
            layoutId={extendData.id}
            onClick={() => dispatch(closeIsExtend())}
            className={classes.extendSection}
          >
            <img src={extendData.image} alt="csd" />
          </motion.div>
        )}
      </AnimatePresence> */}
    </LayoutGroup>
  );
};

export default ProductMap;
