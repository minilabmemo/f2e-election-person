
import "./Content.scss";
import banner_photo from "../assets/images/banner.png"
import idea from "../assets/images/idea.png" //TODO

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
        <h1 className="name">{person_name}</h1>
      </div>
    )
  }

  return (
    <main>

      <div className="banner">
        <div className="m-t-96"></div>
        <h1 className="clip-text matou">台灣的明天 喵先鋪路</h1>
        <div className="subtitle ">
          <div className="tag bg-primary m-r-16"> <div className="text">2024 立委參選人</div></div>
          <Person />
        </div>
        <div className="photo"><img src={banner_photo} alt="banner_photo" /></div>
      </div>
      <div className="news-ticker">
        <h3 className="marquee-text matou">為喵星人，護台灣！從喵的眼中，看見台灣！喵的未來，人的希望</h3>
      </div>

      <section className="bg-orange p-y-104" id="idea">
        <div className="idea-wrap">
          <div className="left">
            <div className="title-group">
              <h6 className="tag-small p-x-12 p-y-8 m-0">ADVOCATE</h6>
              <h2 className="clip-text matou"> 候選人主張</h2>
            </div>

            <h3 className="">我堅信 ! 藉由推動更完善的<span className="text-orang-dark">貓咪福利</span>和相關政策，更是間接地投資於<span className="text-orang-dark">台灣的未來</span>。</h3>
            <div className="content">畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。
              因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。</div>
          </div>
          <div className="right">   <img src={idea} alt="idea_photo" /></div>

        </div>
      </section>

      <section className="bg-white  p-y-104 " id="events">
        <h6 className="tag-small p-x-12 p-y-8">LATEST EVENTS</h6>
        <h2 className="clip-text matou"> 最新活動</h2>
        <div className="m-t-64"></div>
        <Articles />
      </section>

      <section className="bg-white  p-y-104 " id="policy">

        <h6 className="tag-small p-x-12 p-y-8"> POLICY ISSUES</h6>
        <h2 className="clip-text matou"> 政策議題</h2>
        <div className="m-t-64"></div>
        <div className="policies">
          <div className="policy">
            <div className="m-x-16 m-b-16">
              <h4 className="m-0">為毛孩子謀福利！</h4>
              <h4 className="m-0">推動寵物醫療保障方案</h4>
            </div>

            <div className="photo"> <img src={p1_photo} alt="policy_photo" /></div>
          </div>
          <div className="policy">
            <div className="m-x-16 m-b-16">
              <h4 className="m-0">打造休閒天堂！</h4>
              <h4 className="m-0">  推廣寵物休閒與娛樂場所</h4>
            </div>
            <div className="photo"><img src={p2_photo} alt="policy_photo" /></div>
          </div>
          <div className="policy">
            <div className="m-x-16 m-b-16">
              <h4 className="m-0">推廣寵物飼養教育，讓愛更加專業</h4>
            </div>
            <div className="photo"><img src={p3_photo} alt="policy_photo" /></div>
          </div>
        </div>
      </section>

      <section className="bg-white  p-y-104 " id="others">
        <div className="cards text-white ">
          <div className="card bg-orang-dark">
            <div className="title-group">
              <h4 className="matou">小額支持喵喵</h4>
              <div className="subtitle">您的小筆捐款，是每隻毛孩未來的大大動力！</div>

            </div>
            <div className="more">
              <div><Button className="bg-white  text-primary ">小額捐款</Button></div>
              <div className="photo"><img src={donate_photo} alt="donate_photo" /></div>
            </div>

          </div>
          <div className="card bg-primary">
            <div className="title-group">
              <h4 className="matou">民眾服務信箱</h4>
              <div className="subtitle">親愛的鄉親，每一位市民的意見都是我們社區前進的原動力</div>

            </div>
            <div className="more">
              <div><Button className="bg-white text-primary ">填寫表單</Button></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white  p-y-104 " >

        <h2 className="clip-text matou"> 台灣的明天 喵先鋪路</h2>
        <Person />
      </section>
    </main>
  );
};
