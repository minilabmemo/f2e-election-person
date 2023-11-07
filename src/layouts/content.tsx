
import "./content.scss";
import banner_photo from "../assets/images/banner_photo.svg"
import policy_1 from "../assets/images/policy_1.svg"



export const Content = () => {

  return (
    <>
      <div className="banner">
        <div className="title">台灣的明天 喵先鋪路</div>
        <div className="subtitle ">
          <div className="tag bg-primary m-r-16"> <div className="text">2024 立委參選人</div></div>
          <div className="tag-person shadow">
            <div className="number m-r-16">3</div>
            <div className="name">喵立翰 Miao Li-Han</div>
          </div>
        </div>
        <div className="photo"><img src={banner_photo} alt="banner_photo" /></div>
      </div>
      <div className="news-ticker">
        <div className="text">為喵星人，護台灣！從喵的眼中，看見台灣！喵的未來，人的希望</div>
      </div>
      <div className="section bg-orange p-tb-144 " id="policy">
        <div className="photo_policy">   <img src={policy_1} alt="policy_1" /></div>

      </div>
      <div className="section bg-white  p-tb-144 ">
        <div className="photo_policy">   <img src={policy_1} alt="policy_1" /></div>

      </div>
    </>
  );
};
