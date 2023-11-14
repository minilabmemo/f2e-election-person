


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
    time: '2023/12/24',
    title: '打造休閒天堂！',
    sub_title: '推廣寵物休閒與娛樂場所',
    content: <><div>
      <h5 className="m-y-8">設立寵物醫療基金</h5>
      <div className="m-b-16">每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用</div>
      <h5 className="m-y-8">提供醫療補助</h5>
      <div className="m-b-16">每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力</div>
      <h5 className="m-y-8">合作動物醫院</h5>
      <div className="m-b-16">目前已有和超過 200 家動物醫院進行初步的合作討論</div>
    </div></>,
    imageNode: <img src={p2_photo} alt="policy_photo" />
  }, {
    policyProperty: "policyProperty",
    time: '2023/12/26',
    title: '為毛孩子謀福利！',
    sub_title: '推動寵物醫療保障方案',
    content: <><div>
      <h5 className="m-y-8">設立寵物醫療基金</h5>
      <div className="m-b-16">每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用</div>
      <h5 className="m-y-8">提供醫療補助</h5>
      <div className="m-b-16">每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力</div>
      <h5 className="m-y-8">合作動物醫院</h5>
      <div className="m-b-16">目前已有和超過 200 家動物醫院進行初步的合作討論</div>
    </div></>,
    imageNode: <img src={p1_photo} alt="policy_photo" />
  },
  {
    policyProperty: "policyProperty",
    time: '2023/12/20',
    title: '推廣寵物飼養教育，讓愛更加專業',
    sub_title: '',
    content: <><div>
      <h5 className="m-y-8">設立寵物醫療基金</h5>
      <div className="m-b-16">每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用</div>
      <h5 className="m-y-8">提供醫療補助</h5>
      <div className="m-b-16">每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力</div>
      <h5 className="m-y-8">合作動物醫院</h5>
      <div className="m-b-16">目前已有和超過 200 家動物醫院進行初步的合作討論</div>
    </div></>,
    imageNode: <img alt="policy_photo" src={p3_photo} />
  },
  {
    policyProperty: "policyProperty",
    time: '2023/12/27',
    title: '參與台北寵物論壇，爭取貓咪友善環境',
    sub_title: '',
    content: <><div>
      <h5 className="m-y-8">設立寵物醫療基金</h5>
      <div className="m-b-16">每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用</div>
      <h5 className="m-y-8">提供醫療補助</h5>
      <div className="m-b-16">每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力</div>
      <h5 className="m-y-8">合作動物醫院</h5>
      <div className="m-b-16">目前已有和超過 200 家動物醫院進行初步的合作討論</div>
    </div></>,
    imageNode: <img alt="article_photo" src={a4_photo} />
  },

];
