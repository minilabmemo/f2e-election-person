


import a4_photo from "../assets/images/a4_photo.png"
import p1_photo from "../assets/images/p1_photo.png"
import p2_photo from "../assets/images/p2_photo.png"
import p3_photo from "../assets/images/p3_photo.png"


export type PolicyItem = {
  policyProperty: string;
  time: string;
  title: string;
  sub_title: string;
  content: React.ReactNode;
  imageNode: React.ReactNode;
};

export const policyItems: PolicyItem[] = [
  {
    policyProperty: "policyProperty",
    time: '2023/12/26',
    title: '為毛孩子謀福利！',
    sub_title: '推動寵物醫療保障方案',
    content: <><div>test <h2>h2</h2></div></>,
    imageNode: <img src={p1_photo} alt="policy_photo" />
  },
  {
    policyProperty: "policyProperty",
    time: '2023/12/24',
    title: '打造休閒天堂！',
    sub_title: '推廣寵物休閒與娛樂場所',
    content: '街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！',
    imageNode: <img src={p2_photo} alt="policy_photo" />
  },
  {
    policyProperty: "policyProperty",
    time: '2023/12/20',
    title: '推廣寵物飼養教育，讓愛更加專頁',
    sub_title: '',
    content: '今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！',
    imageNode: <img alt="policy_photo" src={p3_photo} />
  },
  {
    policyProperty: "policyProperty",
    time: '2023/12/27',
    title: '參與台北寵物論壇，爭取貓咪友善環境',
    sub_title: '',
    content: '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！',
    imageNode: <img alt="article_photo" src={a4_photo} />
  },

];
