
import "./Content.scss";
import banner_photo from "../assets/images/banner.png"
import banner_ipad from "../assets/images/banner_ipad.png"
import banner_phone from "../assets/images/banner_phone.png"
import banner_photo_webp from "../assets/images/banner.webp"

import idea_webp from "../assets/images/idea.webp"
import idea from "../assets/images/idea.png"
import idea_ipad from "../assets/images/idea_ipad.png"
import idea_phone from "../assets/images/idea_phone.png"
import { Articles } from "../components/Articles";

import { PersonBadge } from "../components/PersonBadge";

import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from "react";

import { ArticleItem } from "../utils/articles_config";
import { PolicyItem } from "../utils/polices_config";
import { Polices } from "../components/Polices";
import { ItemsModal } from "../components/modals/ItemsModal";
import { Services } from "../components/Services";
import { ServiceItem } from "../utils/services_config";



export const Content = () => {
  const pictureLarge = getComputedStyle(document.documentElement).getPropertyValue('--picture-large');
  const pictureMedium = getComputedStyle(document.documentElement).getPropertyValue('--picture-medium');
  const pictureSmall = getComputedStyle(document.documentElement).getPropertyValue('--picture-small');

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
  const [selectedItem, setSelectedItem] = useState<ArticleItem | PolicyItem | ServiceItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const openModal = (item: ArticleItem | PolicyItem | ServiceItem, index: number) => {
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
        <h1 className="clip-text matou title-wrap fadeIn-delay-2s "> <div>台灣的明天 </div> <div>&nbsp;喵先鋪路</div></h1>
        <div className="group fadeIn-delay-3s  ">
          <div className="tag bg-primary m-r-16"> <div className="text">2024 立委參選人</div></div>
          <PersonBadge />
        </div>
        <div className="photo fadeIn-delay-3s ">
          <picture>
            <source
              media={`${pictureLarge}`}
              srcSet={banner_photo_webp}
              type="image/webp" />
            <source
              media={`${pictureMedium}`}
              srcSet={banner_ipad}
              type="image/png" />
            <source
              media={`${pictureSmall}`}
              srcSet={banner_phone}
              type="image/png" />
            <img src={banner_photo} alt="banner_photo" />
          </picture>

        </div>
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
          <div className="right">

            <picture>
              <source
                media={`${pictureLarge}`}
                srcSet={idea_webp}
                type="image/webp" />
              <source
                media={`${pictureMedium}`}
                srcSet={idea_ipad}
                type="image/png" />
              <source
                media={`${pictureSmall}`}
                srcSet={idea_phone}
                type="image/png" />
              <img src={idea} alt="idea_photo" />
            </picture>
          </div>
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


      <section className={`bg-orange  section-space`} id="policy">
        <h6 ref={ref3} className={`tag-small p-x-12 p-y-8 animated-block ${isAnimated3 ? 'fadeIn-no-delay' : ''}`}> POLICY ISSUES</h6>
        <h2 className={`clip-text matou animated-block ${isAnimated3 ? 'fadeIn-no-delay' : ''}`}> 政策議題</h2>
        <div className="m-t-medium"></div>
        <div className={` full-wrap animated-block ${isAnimated3 ? 'fadeIn-delay-1' : ''}`}>
          <Polices openModal={openModal} />
        </div>
      </section>


      <section ref={ref4} className={`bg-white  section-space animated-block ${isAnimated4 ? 'animate-fade-in' : ''}`} id="services">
        <Services openModal={openModal}></Services>
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
