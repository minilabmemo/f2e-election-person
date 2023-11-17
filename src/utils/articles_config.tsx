

import a1_photo from "../assets/images/a1_photo.png"
import a2_photo from "../assets/images/a2_photo.png"
import a3_photo from "../assets/images/a3_photo.png"
import a4_photo from "../assets/images/a4_photo.png"
import a1_photo_webp from "../assets/images/a1_photo.webp"
import a2_photo_webp from "../assets/images/a2_photo.webp"
import a3_photo_webp from "../assets/images/a3_photo.webp"
import a4_photo_webp from "../assets/images/a4_photo.webp"
export type ArticleItem = {
  time: string;
  title: string;
  content: string;
  imageNode: React.ReactNode;
};

export const articleItems: ArticleItem[] = [
  {
    time: '2023/12/26',
    title: '參與台北寵物論壇，爭取貓咪友善環境',
    content: '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。',
    imageNode: <picture>
      <source
        srcSet={a1_photo_webp}
        type="image/png" />
      <img alt="article_photo" src={a1_photo} />
    </picture>


  },
  {
    time: '2023/12/24',
    title: '掃街模式開啟！帶著你的貓耳，來和我一起走！',
    content: '街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！',
    imageNode: <picture>
      <source
        srcSet={a2_photo_webp}
        type="image/png" />
      <img alt="article_photo" src={a2_photo} />
    </picture>
  },
  {
    time: '2023/12/20',
    title: '收容所模特兒大比拼！',
    content: '今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！',
    imageNode: <picture>
      <source
        srcSet={a3_photo_webp}
        type="image/png" />
      <img alt="article_photo" src={a3_photo} />
    </picture>
  },
  {
    time: '2023/12/27',
    title: '參與台北寵物論壇，爭取貓咪友善環境',
    content: '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！',
    imageNode: <picture>
      <source
        srcSet={a4_photo_webp}
        type="image/png" />
      <img alt="article_photo" src={a4_photo} />
    </picture>
  },
  {
    time: '2023/12/25',
    title: '一起參與台北聖誕寵物論壇，裝扮大賽等你',
    content: '聖誕寵物裝扮，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！',
    imageNode: <picture>
      <source
        srcSet={a2_photo_webp}
        type="image/png" />
      <img alt="article_photo" src={a2_photo} />
    </picture>
  },
];
