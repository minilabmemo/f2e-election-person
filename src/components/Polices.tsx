import "./Polices.scss";
import { PolicyItem, policyItems } from "../utils/polices_config";

import { ArticleItem } from "../utils/articles_config";
import { useEffect, useRef, useState } from "react";


interface ItemsProps {
  openModal: ((item: ArticleItem | PolicyItem, index: number) => void) | null;
}

export const Polices: React.FC<ItemsProps> = ({ openModal }) => {
  const [focusIndex, setFocusIndex] = useState(1)
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const objectRef = useRef<HTMLDivElement | null>(null);
  //想法說明
  //原本想要藉由 viewportRef.current.scrollLeft -= move; 去移動增加或減少，但不管怎麼改都無法準確對應到物件中心點，marked 的地方是第一版寫法
  // useEffect(() => {
  //   if (viewportRef.current) {
  //     viewportRef.current.scrollLeft += 116 + 656.73; //初始偏移
  //   }
  //   // return () => {
  //   //   second
  //   // }
  // }, [])
  //第二版寫法 //計算目標中心點相對於 viewport 的位置 focusIndex 有更動就重新計算，增加或減少按鈕只會去更動 focusIndex
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
    if (viewportRef.current) {
      const width = viewportRef.current.offsetWidth;
      console.log("🚀 ~ file: Polices.tsx:33 ~ handleBack ~ width:", width)
      const move = width / 4;
      const scrollLength = viewportRef.current.scrollWidth;
      console.log("Scroll Length:", scrollLength);
      if (focusIndex === 0) {
        //do nothing
      } else {
        // viewportRef.current.scrollLeft -= move;
        setFocusIndex((prev) => prev - 1);
      }

    }

  };
  const handleNext = () => {

    if (viewportRef.current) {
      const width = viewportRef.current.offsetWidth;
      const move = width / 4;

      if (focusIndex === policyItems.length - 1) {//最後一個就回到第一個 循環
        // setFocusIndex(0);
      }
      else {
        //viewportRef.current.scrollLeft += move;
        setFocusIndex((prev) => prev + 1);
      }
    }

  };
  return (
    <>
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
      <button onClick={() => handleBack()}>back</button>
      <button onClick={() => handleNext()}>next</button>
    </>
  );
};
