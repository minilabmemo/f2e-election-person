
import "./Content.scss";
import banner_photo from "../assets/images/banner.png"
import policy_1 from "../assets/images/policy_1.svg"

import Articles from "../components/Articles";
import Button from "../components/Button";

export const Content = () => {

  return (
    <main>

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
      <section className="bg-orange p-y-104 " id="idea">
        <div className="photo_policy">   <img src={policy_1} alt="policy_1" /></div>
      </section>

      <section className="bg-white  p-y-104 " id="events">
        <h6 className="tag-small p-x-12 p-y-8">   LATEST EVENTS</h6>
        <div className="title"> 最新活動</div>
        <div className="m-t-64"></div>
        <Articles />
      </section>

      <section className="bg-white  p-y-104 " id="policy">

        <h6 className="tag-small p-x-12 p-y-8"> POLICY ISSUES</h6>
        <div className="title"> 政策議題</div>
        <div className="m-t-64"></div>
        <div className="policies">
          <div className="policy">
            <h5>為毛孩子謀福利！
              推動寵物醫療保障方案</h5>
            <div className="photo"></div>
          </div>
          <div className="policy">
            <h5>打造休閒天堂！
              推廣寵物休閒與娛樂場所</h5>
            <div className="photo"></div>
          </div>
          <div className="policy">
            <h5>推廣寵物飼養教育，讓愛更加專業</h5>
            <div className="photo"></div></div>
        </div>
      </section>

      <section className="bg-white  p-y-104 " id="others">

        123
      </section>

      <section className="bg-white  p-y-104 " >

        <div className="title"> 台灣的明天 喵先鋪路</div>
      </section>
    </main>
  );
};
