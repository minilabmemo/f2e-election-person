import "./Articles.scss";
import { ArticleItem, items } from "../utils/articles_config";
import Button from "./Button";
import { useState } from "react";
import { Modal } from "./Modal";

const Articles = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ArticleItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);


  const openModal = (item: ArticleItem, index: number) => {
    setSelectedItem(item);
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="articles">
        <div className="main">
          {items.slice(0, 1).map((item, index) => (
            <div className="article" key={index} onClick={() => openModal(item, index)}>
              <div className="main_article_photo">{item.imageNode}</div>
              <div className="article_time m-t-small">{item.time}</div>
              <h5 className="m-y-8">{item.title}</h5>
              <div className="article_content">{item.content}</div>
            </div>
          ))}
        </div>
        <div className="aside">
          {items.slice(1, 4).map((item, index) => (
            <div className="article" key={index + 1} onClick={() => openModal(item, index + 1)}>
              <div className="aside_article_photo">{item.imageNode}</div>
              <div className="content-group">
                <div className="article_time">{item.time}</div>
                <h6 className="m-y-8">{item.title}</h6>
                <div className="article_content">{item.content}</div>
              </div>
            </div>
          ))}
          <div>   <Button className="article_more black">查看更多</Button></div>


        </div>
      </div>
      <div>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {selectedItem && (
            <>
              <h3>{selectedItem.title}</h3>

            </>
          )}
        </Modal>
      </div>
    </>
  );
};

export default Articles;