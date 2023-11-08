import "./Articles.scss";
import { items } from "../utils/articles_config";

const Articles = () => {
  return (
    <div className="articles">
      <div className="main">
        {items.slice(0, 1).map((item, index) => (
          <div className="article" key={index}>
            <div className="photo">{item.imageNode}</div>
            <div className="time">{item.time}</div>
            <h5 className="title">{item.title}</h5>
            <div className="content">{item.content}</div>
          </div>
        ))}
      </div>
      <div className="aside">
        {items.slice(1, 4).map((item, index) => (
          <div className="article" key={index}>
            <div className="photo">{item.imageNode}</div>
            <div className="content-group">
              <div className="time">{item.time}</div>
              <h5 className="title">{item.title}</h5>
              <div className="content">{item.content}</div>
            </div>
          </div>
        ))}
        <div className="more">查看更多</div>
      </div>
    </div>
  );
};

export default Articles;