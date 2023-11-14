
import "./Content.scss";
import banner_photo from "../assets/images/banner.png"
import idea from "../assets/images/idea.png" //TODO
import { Articles, ItemsModal } from "../components/Articles";
import donate_photo from "../assets/images/donate_photo.png"
import Button from "../components/btns/Button";
import { PersonBadge } from "../components/PersonBadge";

import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from "react";

import { ArticleItem } from "../utils/articles_config";
import { PolicyItem } from "../utils/polices_config";
import { Polices } from "../components/Polices";



export const Content = () => {

  const [ref1, inView1] = useInView({ triggerOnce: true, });
  const [ref2, inView2] = useInView({ triggerOnce: true, });
  const [ref3, inView3] = useInView({ triggerOnce: true, });
  const [ref4, inView4] = useInView({ triggerOnce: true, });
  const [ref5, inView5] = useInView({ triggerOnce: true, });
  const [isAnimated1, setIsAnimated1] = useState(false);
  const [isAnimated2, setIsAnimated2] = useState(false);
  const [isAnimated3, setIsAnimated3] = useState(false);
  const [isAnimated4, setIsAnimated4] = useState(false);
  const [isAnimated5, setIsAnimated5] = useState(false);
  useEffect(() => {
    if (inView1) {
      setIsAnimated1(true);
    }
  }, [inView1]);

  useEffect(() => {
    if (inView2) {
      setIsAnimated2(true);
    }
  }, [inView2]);
  useEffect(() => {
    if (inView3) {
      setIsAnimated3(true);
    }
  }, [inView3]);
  useEffect(() => {
    if (inView4) {
      setIsAnimated4(true);
    }
  }, [inView4]);
  useEffect(() => {
    if (inView5) {
      setIsAnimated5(true);
    }
  }, [inView5]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ArticleItem | PolicyItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);


  const openModal = (item: ArticleItem | PolicyItem, index: number) => {
    setSelectedItem(item);
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <main>
      <div className="banner">
        <div className="m-t-large"></div>
        <h1 className="clip-text matou title-wrap fadeIn-1 "> <div>台灣的明天 </div> <div>&nbsp;喵先鋪路</div></h1>
        <div className="group fadeIn-2 ">
          <div className="tag bg-primary m-r-16"> <div className="text">2024 立委參選人</div></div>
          <PersonBadge />
        </div>
        <div className="photo fadeIn-3 "><img src={banner_photo} alt="banner_photo" /></div>
      </div>
      <div className="news-ticker">
        <h3 className="marquee-text matou">為喵星人，護台灣！從喵的眼中，看見台灣！喵的未來，人的希望</h3>
      </div>

      <section className="bg-orange section-space" id="idea">

        <div ref={ref1} className={`idea-wrap content-wrap animated-block ${isAnimated1 ? 'animate-b-in' : ''}`}>
          <div className="left">
            <div className="title-group">
              <h6 className="tag-small p-x-12 p-y-8">ADVOCATE</h6>
              <h2 className="clip-text matou"> 候選人主張</h2>
            </div>

            <h3 className="">我堅信 ! 藉由推動更完善的<span className="text-orang-dark">貓咪福利</span>和相關政策，更是間接地投資於<span className="text-orang-dark">台灣的未來</span>。</h3>
            <div className="content">畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。
              因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。</div>
          </div>
          <div className="right"> <img src={idea} alt="idea_photo" /></div>

        </div>

      </section>

      <section ref={ref2} className={`bg-white  section-space `} id="events">
        <h6 className={`tag-small p-x-12 p-y-8   animated-block ${isAnimated2 ? 'fadeIn-no-delay' : ''}`}>  LATEST EVENTS </h6>
        <h2 className={`clip-text matou animated-block ${isAnimated2 ? 'fadeIn-no-delay' : ''}`}> 最新活動</h2>
        <div className="m-t-medium"></div>
        <div className={`center animated-block ${isAnimated2 ? 'fadeIn-delay-1' : ''}`}>
          <Articles openModal={openModal} />
        </div>
      </section>


      <section className={`bg-white  section-space`} id="policy">
        <h6 ref={ref3} className={`tag-small p-x-12 p-y-8 animated-block ${isAnimated3 ? 'fadeIn-no-delay' : ''}`}> POLICY ISSUES</h6>
        <h2 className={`clip-text matou animated-block ${isAnimated3 ? 'fadeIn-no-delay' : ''}`}> 政策議題</h2>
        <div className="m-t-medium"></div>
        <div className={`policies content-wrap animated-block ${isAnimated3 ? 'fadeIn-delay-1' : ''}`}>
          <Polices openModal={openModal} />
        </div>
      </section>


      <section ref={ref4} className={`bg-white  section-space animated-block ${isAnimated4 ? 'animate-fade-in' : ''}`} id="others">
        <div className="others text-white  content-wrap">
          <div className="other bg-orang-dark">
            <div className="wrap">
              <h4 className="matou">小額支持喵喵</h4>
              <div className="content">您的小筆捐款，是每隻毛孩未來的大大動力！</div>

            </div>
            <div className="more">
              <div className="btn-wrap"><Button className="bg-white text-bold-black  ">小額捐款</Button></div>
              <div className="photo"><img src={donate_photo} alt="donate_photo" /></div>
            </div>

          </div>
          <div className="other bg-primary">
            <div className="title-group">
              <h4 className="matou">民眾服務信箱</h4>
              <div className="content">親愛的鄉親，每一位市民的意見都是我們社區前進的原動力</div>

            </div>
            <div className="more">
              <div><Button className="bg-white text-bold-black  ">填寫表單</Button></div>
            </div>
          </div>
        </div>
      </section>


      <section ref={ref5} className={`bg-white  section-space`}>
        <div className={`center-column animated-block ${isAnimated5 ? 'animate-zoom-in' : ''}`}>
          <h2 className={`clip-text matou slogan-wrap`}>
            <div>台灣的明天&nbsp;</div>
            <div> 喵先鋪路</div>
          </h2>

          <div className="space-title" ></div>

          <PersonBadge />
        </div>
        <div className="m-b-64"></div>
      </section>
      <ItemsModal isModalOpen={isModalOpen} selectedItem={selectedItem} selectedIndex={selectedIndex} closeModal={closeModal} />

    </main>
  );
};
