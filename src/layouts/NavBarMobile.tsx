
import "./NavBarMobile.scss";
import nav_events from "../assets/images/nav_events.svg"


export const NavBarMobile = () => {

  return (
    <>
      <div className=" space-bottom"></div>
      <nav className=" menu-bottom">

        <ul className='link-list-bottom'>
          <li className="link-bottom p-y-12 ">
            <a href="#idea" className="nav-wrap">
              <div className="nav-img-wrap"><img src={nav_events} alt="nav_events" /></div>
              <div>候選人主張</div>
            </a>
          </li>
          <li className="link-bottom  p-y-12 ">
            <a href="#events" className="nav-wrap">

              <div className="nav-img-wrap"><img src={nav_events} alt="nav_events" /></div>
              最新活動
            </a>
          </li>
          <li className="link-bottom  p-y-12">
            <a href="#policy" className="nav-wrap">
              <div className="nav-img-wrap"><img src={nav_events} alt="nav_events" /></div>
              政策議題</a>
          </li>
          <li className="link-bottom  p-y-12">
            <a href="#others" className="nav-wrap">
              <div className="nav-img-wrap">
                <img src={nav_events} alt="nav_events" /></div>小額捐款</a>
          </li>
          <li className="link-bottom  p-y-12 ">
            <a href="#others" className="nav-wrap">
              <div className="nav-img-wrap"><img src={nav_events} alt="nav_events" />
              </div>民眾服務信箱</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
