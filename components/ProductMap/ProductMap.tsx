import classes from "./productMap.module.scss";
import { allProductsMock } from "../../filterData/fakeProductData";
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
import { Dictionary } from "../../store/ContextAllProduct";

const ProductMap = () => {
  const dispatch = useDispatch();
  const AllProducts = useContext(AllProductContext);
  const [copied, copy] = useCopyToClipboard("", 3000);
  const isShare = useSelector(
    (state: RootState) => state.CartHoverAction.share.isShare
  );
  const sharedLink = useSelector(
    (state: RootState) => state.CartHoverAction.share.link
  );

  const extendData = useSelector(
    (state: RootState) => state.CartHoverAction.extend
  );
  const Router = useRouter();
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  let Mothened = motion(ProductCard);
  // console.log("props.res", props);

  return (
    <LayoutGroup>
      <div className={classes.productMapLayout}>
        {AllProducts.map((item: Dictionary) => (
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
              <CopyIcon />
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
