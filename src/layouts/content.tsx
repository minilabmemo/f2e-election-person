
import "./content.scss";
import banner_photo from "../assets/images/banner.png"
import policy_1 from "../assets/images/policy_1.svg"

import a1_photo from "../assets/images/a1_photo.png"
import a2_photo from "../assets/images/a2_photo.png"
import a3_photo from "../assets/images/a3_photo.png"
import a4_photo from "../assets/images/a4_photo.png"

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

      <section className="bg-white  p-y-104 activity" id="activity">
        <h6 className="tag-small p-x-12 p-y-8">   LATEST EVENTS</h6>
        <div className="title"> 最新活動</div>
        <div className="articles">
          <div className="main">
            <div className="article">
              <div className="photo"><img src={a1_photo} alt="article_photo" /></div>
              <div className="time">2023/12/26 </div>
              <h5 className="title">參與台北寵物論壇，爭取貓咪友善環境</h5>
              <div className="content">炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。</div>
            </div>
          </div>
          <div className="aside">
            <div className="article">
              <div className="photo"><img src={a2_photo} alt="article_photo" /></div>
              <div className="content-group">
                <div className="time">2023/12/24</div>
                <h5 className="title">掃街模式開啟！帶著你的貓耳，來和我一起走！</h5>
                <div className="content">街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！</div>
              </div>
            </div>
            <div className="article">
              <div className="photo"><img src={a3_photo} alt="article_photo" /></div>
              <div className="content-group">
                <div className="time">2023/12/20</div>
                <h5 className="title">收容所模特兒大比拼！</h5>
                <div className="content">今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！</div>
              </div>
            </div>
            <div className="article">
              <div className="photo"><img src={a4_photo} alt="article_photo" /></div>
              <div className="content-group">
                <div className="time">2023/12/26</div>
                <h5 className="title">參與台北寵物論壇，爭取貓咪友善環境</h5>
                <div className="content">炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！</div>
              </div>
            </div>
            <div className="more">查看更多</div>
          </div>
        </div>
      </section>

    </main>
  );
};
