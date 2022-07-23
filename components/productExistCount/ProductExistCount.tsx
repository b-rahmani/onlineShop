import ExistIcon from "../icons/ExistIcon";

interface ExistPropsType {
  count: number | string;
}
const ProductExistCount = (props: ExistPropsType) => {
  const { count } = props;
  const countNumber = +count;
  return (
    <div className="exist">
      {countNumber > 10 ? (
        <>
          <ExistIcon />
          <span>موجود در انبار</span>
        </>
      ) : countNumber < 10 && countNumber !== 0 ? (
        <span className="danger">
          تنها {countNumber} عدد در انبار باقی مانده
        </span>
      ) : (
        <span>&nbsp;</span>
      )}
    </div>
  );
};
export default ProductExistCount;
