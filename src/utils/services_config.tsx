


import donate_photo from "../assets/images/donate_photo.png"
import email from "../assets/images/email.png"



export type ServiceItem = {
  serviceProperty: string;
  bg_color: string;
  title: string;
  sub_title: string;
  btn_text: string;
  content: string;
  imageNode: React.ReactNode;
};
export const serviceItems: ServiceItem[] = [
  {
    serviceProperty: "Y",
    bg_color: "bg-orang-dark",
    title: '小額支持喵喵',
    sub_title: '您的小筆捐款，是每隻毛孩未來的大大動力！',
    btn_text: '小額捐款',
    content: '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。',
    imageNode: <img alt="donate_photo" src={donate_photo} />
  },
  {
    serviceProperty: "Y",
    bg_color: "bg-primary",
    title: '民眾服務信箱',
    sub_title: '親愛的鄉親，每一位市民的意見都是我們社區前進的原動力',
    btn_text: '填寫表單',
    content: '街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！',
    imageNode: <img alt="email" src={email} />
  }
];
