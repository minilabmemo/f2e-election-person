import "./Services.scss";
import { PolicyItem, } from "../utils/polices_config";

import { ArticleItem } from "../utils/articles_config";
import Button from "./btns/Button";
import { serviceItems } from "../utils/services_config";

interface ItemsProps {
  openModal: ((item: ArticleItem | PolicyItem, index: number) => void) | null;
}

export const Services: React.FC<ItemsProps> = ({ openModal }) => {


  return (
    <div className="services text-white  content-wrap">
      {serviceItems
        .map((item, index) => (
          <div className={`service ${item.bg_color}`}>
            <div className="wrap">
              <h4 className="matou">{item.title}</h4>
              <div className="content">{item.sub_title}</div>

            </div>
            <div className="more">
              <div className="btn-wrap"><Button className="bg-white text-bold-black  ">{item.btn_text}</Button></div>
              <div className="photo">{item.imageNode}</div>
            </div>

          </div>
        ))


      }

    </div>
  );
};
