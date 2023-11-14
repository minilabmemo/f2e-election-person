import "./Polices.scss";
import { PolicyItem, policyItems } from "../utils/polices_config";

import { ArticleItem } from "../utils/articles_config";
import { useEffect, useRef, useState } from "react";
import control from "../assets/images/control.svg"


interface ItemsProps {
  openModal: ((item: ArticleItem | PolicyItem, index: number) => void) | null;
}

export const Polices: React.FC<ItemsProps> = ({ openModal }) => {
  const [focusIndex, setFocusIndex] = useState(1)
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const objectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    const object = objectRef.current;
    if (viewport && object) {
      const objectCenterX = object.offsetLeft + object.offsetWidth / 2; //計算目標中心點相對於viewport的位置
      const viewportCenterX = viewport.offsetWidth / 2;
      const scrollLeft = objectCenterX - viewportCenterX;
      viewport.scrollLeft = scrollLeft;
    }
  }, [focusIndex]);

  const handleClick = (item: PolicyItem, index: number) => {
    if (openModal) {
      openModal(item, index);
    }
  };
  const handleBack = () => {
    if (focusIndex === 0) {
      //do nothing
    } else {
      setFocusIndex((prev) => prev - 1);
    }


  };
  const handleNext = () => {
    if (focusIndex === policyItems.length - 1) {
      //do nothing
    }
    else {
      setFocusIndex((prev) => prev + 1);
    }
  };
  return (
    <div className="policies_wrap">
      <div className="policies" ref={viewportRef}>

        <div className="policy_invisible" ></div>
        {policyItems

          .map((item, index) => (
            <div className={`policy ${focusIndex === index ? "active" : ""}`}
              ref={focusIndex === index ? objectRef : null}
              key={index} onClick={() => handleClick(item, index)}>
              <div className="policy_photo"> {item.imageNode}</div>
              <div className="group ">
                <h4>{item.title}</h4>
                {item.sub_title && <h4>{item.sub_title}</h4>}

              </div>

            </div>
          ))}

        <div className="policy_invisible"></div>
      </div>
      <div className="carousel_wrap">
        <button className="control_btn" onClick={() => handleBack()}>
          <img className="back" src={control} alt="control" />
        </button>
        {policyItems
          .map((item, index) => (
            <div className={`control_circle ${focusIndex === index ? "active" : ""}`}>

            </div>
          ))
        }


        <button className="control_btn" onClick={() => handleNext()}>
          <img src={control} alt="control" />
        </button>
      </div>

    </div>
  );
};
