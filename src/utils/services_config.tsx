


import donate_photo from "../assets/images/donate_photo.png"
import email from "../assets/images/email.png"

export const PropertyType = {
  donate: "donate" as "donate",
  email: "email" as "email",

}

export type ServiceItem = {
  serviceProperty: string;
  modal_title: string;
  bg_color: string;
  title: string;
  sub_title: string;
  btn_text: string;
  content: React.ReactNode;
  imageNode: React.ReactNode;
};



export const serviceItems: ServiceItem[] = [
  {
    serviceProperty: PropertyType.donate,
    modal_title: "小額捐款",
    bg_color: "bg-orange-dark",
    title: '小額支持喵喵',
    sub_title: '您的小筆捐款，是每隻毛孩未來的大大動力！',
    btn_text: '小額捐款',
    content: <div>您的小筆捐款 <br></br>是每隻毛孩未來的大大動力！</div>,
    imageNode: <img alt="donate_photo" src={donate_photo} />
  },
  {
    serviceProperty: PropertyType.email,
    modal_title: "民眾服務信箱",
    bg_color: "bg-primary",
    title: '民眾服務信箱',
    sub_title: '親愛的鄉親，每一位市民的意見都是我們社區前進的原動力',
    btn_text: '填寫表單',
    content: '分享您的想法 一同為我們的未來打造更美好！',
    imageNode: <img alt="email" src={email} />
  }
];
