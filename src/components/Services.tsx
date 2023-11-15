import "./Services.scss";
import Button from "./btns/Button";
import { ServiceItem, serviceItems } from "../utils/services_config";

interface ItemsProps {
  openModal: ((item: ServiceItem, index: number) => void) | null;
}

export const Services: React.FC<ItemsProps> = ({ openModal }) => {

  const handleClick = (item: ServiceItem, index: number) => {
    if (openModal) {
      openModal(item, index);
    }
  };
  return (
    <div className="services text-white  content-wrap">
      {serviceItems
        .map((item, index) => (
          <div className={`service ${item.bg_color}`} key={index}>
            <div className="wrap">
              <h4 className="matou">{item.title}</h4>
              <div className="service_content">{item.sub_title}</div>

            </div>
            <div className="service_more">
              <div className="btn-wrap" onClick={() => handleClick(item, index)}><Button className="bg-white text-bold-black  ">{item.btn_text}</Button></div>
              <div className="service_photo">{item.imageNode}</div>
            </div>

          </div>
        ))


      }

    </div>
  );
};
