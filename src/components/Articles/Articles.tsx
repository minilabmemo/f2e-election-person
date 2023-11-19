import "./Articles.scss";
import { ArticleItem, articleItems } from "../../utils/articles_config";
import Button from "../btns/Button";


interface ArticlesProps {
  openModal: ((item: ArticleItem, index: number) => void) | null;
}

const Articles: React.FC<ArticlesProps> = ({ openModal }) => {
  const handleClick = (item: ArticleItem, index: number) => {
    if (openModal) {
      openModal(item, index);
    }
  };
  return (
    <>
      <div className="articles">
        <div className="main">
          {articleItems.slice(0, 1).map((item, index) => (
            <div className="article" key={index} onClick={() => handleClick(item, index)}>
              <div className="main_article_photo">{item.imageNode}</div>
              <div className="article_time m-t-small">{item.time}</div>
              <h5 className="m-y-8">{item.title}</h5>
              <div className="article_content">{item.content}</div>
            </div>
          ))}
        </div>
        <div className="aside">
          {articleItems.slice(1, 4).map((item, index) => (
            <div className="article" key={index + 1} onClick={() => handleClick(item, index + 1)}>
              <div className="aside_article_photo">{item.imageNode}</div>
              <div className="content-group">
                <div className="article_time">{item.time}</div>
                <h6 className="m-y-8">{item.title}</h6>
                <div className="article_content">{item.content}</div>
              </div>
            </div>
          ))}
          <div onClick={() => handleClick(articleItems[4], 4)}>   <Button className="article_more black" >查看更多</Button></div>


        </div>
      </div>
      <div>


      </div>

    </>
  );
};

export default Articles;