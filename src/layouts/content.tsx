
import "./Content.scss";
import banner_photo from "../assets/images/banner.png"
import policy_1 from "../assets/images/policy_1.svg" //TODO

import Articles from "../components/Articles";
import p1_photo from "../assets/images/p1_photo.png"
import p2_photo from "../assets/images/p2_photo.png"
import p3_photo from "../assets/images/p3_photo.png"
import donate_photo from "../assets/images/donate_photo.png"
import Button from "../components/Button";
import { person_name, person_number } from "../utils/const_config";
export const Content = () => {


  const Person = () => {
    return (
      <div className="tag-person shadow">
        <div className="number m-r-16">{person_number}</div>
        <div className="name">{person_name}</div>
      </div>
    )
  }

  return (
    <main>

      <div className="banner">
        <div className="title">台灣的明天 喵先鋪路</div>
        <div className="subtitle ">
          <div className="tag bg-primary m-r-16"> <div className="text">2024 立委參選人</div></div>
          <Person />
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
            <div className="m-x-16 m-b-16">
              <h5 className="m-0">為毛孩子謀福利！</h5>
              <h5 className="m-0">推動寵物醫療保障方案</h5>
            </div>

            <div className="photo"> <img src={p1_photo} alt="policy_photo" /></div>
          </div>
          <div className="policy">
            <div className="m-x-16 m-b-16">
              <h5 className="m-0">打造休閒天堂！</h5>
              <h5 className="m-0">  推廣寵物休閒與娛樂場所</h5>
            </div>
            <div className="photo"><img src={p2_photo} alt="policy_photo" /></div>
          </div>
          <div className="policy">
            <div className="m-x-16 m-b-16">
              <h5 className="m-0">推廣寵物飼養教育，讓愛更加專業</h5>
            </div>
            <div className="photo"><img src={p3_photo} alt="policy_photo" /></div>
          </div>
        </div>
      </section>

      <section className="bg-white  p-y-104 " id="others">
        <div className="cards text-white ">
          <div className="card bg-orang-dark">
            <div className="title-group">
              <div className="title ">小額支持喵喵</div>
              <div className="subtitle">您的小筆捐款，是每隻毛孩未來的大大動力！</div>

            </div>
            <div className="more">
              <div><Button className="bg-white  text-primary ">小額捐款</Button></div>
              <div className="photo"><img src={donate_photo} alt="donate_photo" /></div>
            </div>

          </div>
          <div className="card bg-primary">
            <div className="title-group">
              <div className="title">民眾服務信箱</div>
              <div className="subtitle">親愛的鄉親，每一位市民的意見都是我們社區前進的原動力</div>

            </div>
            <div className="more">
              <div><Button className="bg-white text-primary ">填寫表單</Button></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white  p-y-104 " >

        <div className="title"> 台灣的明天 喵先鋪路</div>
        <Person />
      </section>
    </main>
  );
};
