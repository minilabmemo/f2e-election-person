import "./Articles.scss";
import { PolicyItem, policyItems } from "../utils/polices_config";
import { Modal } from "./Modal";
import { ArticleItem } from "../utils/articles_config";


//TODO ArticleItem | PolicyItem  more best program?

interface ArticlesProps {
  openModal: ((item: ArticleItem | PolicyItem, index: number) => void) | null;
}

export const Polices: React.FC<ArticlesProps> = ({ openModal }) => {
  const handleClick = (item: PolicyItem, index: number) => {
    if (openModal) {
      openModal(item, index);
    }
  };
  return (
    <>

      {policyItems
        .slice(0, 3)
        .map((item, index) => (
          <div className="policy" onClick={() => handleClick(item, index)}>
            <div className="group ">
              <h4>{item.title}</h4>
              <h4>{item.sub_title}</h4>
            </div>
            <div className="photo"> {item.imageNode}</div>
          </div>
        ))}

    </>
  );
};
