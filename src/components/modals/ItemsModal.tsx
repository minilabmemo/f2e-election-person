import { ArticleItem, articleItems } from "../../utils/articles_config";
import { PolicyItem, policyItems } from "../../utils/polices_config";
import { Modal } from "./Modal";
import icon_fb from "../../assets/images/icon_fb.svg"
import icon_line from "../../assets/images/icon_line.svg"
import icon_ig from "../../assets/images/icon_ig.svg"
import share_email from "../../assets/images/share_email.png"
import "./ItemsModal.scss";
import { PropertyType, ServiceItem } from "../../utils/services_config";
import { useEffect, useState } from "react";

interface ItemsModalProps {
  isModalOpen: boolean;
  selectedItem: ArticleItem | PolicyItem | ServiceItem | null;
  selectedIndex: number;
  closeModal: (() => void);
}


function ItemsModalStyle({ initSelectedItem, initSelectedIndex }: { initSelectedItem: ArticleItem | PolicyItem, initSelectedIndex: number }) {

  const [selectedItem, setSelectedItem] = useState(initSelectedItem) //當更多區塊按下會替換掉目前觀看文章區塊
  const [selectedIndex, setSelectedIdex] = useState(initSelectedIndex)
  const handleClick = (item: ArticleItem | PolicyItem, index: number) => {

    setSelectedItem(item);
    setSelectedIdex(index);
  };


  return (
    <>
      <div className="modal_main">
        <div className="modal_main_photo">{selectedItem.imageNode}</div>
        <h6 className="m-y-8">{selectedItem.title}</h6>
        <div className="f-normal">

          <div className='share-block'>
            <div>分享</div>
            <img src={icon_fb} alt="icon_fb" className="social-icon" />
            <img src={icon_ig} alt="icon_ig" className="social-icon" />
            <img src={icon_line} alt="icon_line" className="social-icon" />
          </div>


        </div>
      </div>
      <div className="modal_aside">
        <h2 className="m-y-8 text-orang-dark">{selectedItem.title}</h2>
        <div className="article_time">{selectedItem.time}</div>
        <div className="m-b-32"></div>
        <div className="modal_item_content f-normal">{selectedItem.content}</div>

        <div className="modal_more p-8">
          <div className="f-w-600 m-b-16">
            {selectedItem && 'policyProperty' in selectedItem ? "更多政策議題" : "更多活動"}


          </div>

          <div className="modal_more_contents">
            {selectedItem && 'policyProperty' in selectedItem ? (
              <> {policyItems
                .map((item, index) => ({ ...item, originalIndex: index })) // Add originalIndex to each item
                .filter((item, index) => index !== selectedIndex)
                .slice(0, 2)
                .map((item, index) => (
                  <div className="modal_more_content" key={index} onClick={() => handleClick(item, item.originalIndex)}>
                    <div className="modal_more_photo">{item.imageNode}</div>
                    <div className="m-y-8 f-normal">{item.title}</div>
                  </div>
                ))}</>
            ) : (
              <> {articleItems
                .map((item, index) => ({ ...item, originalIndex: index })) // Add originalIndex to each item
                .filter((item, index) => index !== selectedIndex)
                .slice(0, 2)
                .map((item, index) => (
                  <div className="modal_more_content" key={index} onClick={() => handleClick(item, item.originalIndex)}>
                    <div className="modal_more_photo">{item.imageNode}</div>
                    <div className="m-y-8 f-normal">{item.title}</div>
                  </div>
                ))}</>
            )}

          </div>
        </div>
      </div>
    </>
  )
}

function ServicesModalStyle({ selectedItem, selectedIndex }: { selectedItem: ServiceItem, selectedIndex: number }) {

  const isDonate = selectedItem.serviceProperty === PropertyType.donate;
  return (
    <>
      <div className="service_wrap ">
        <div className={`service_left ${isDonate ? 'bg-orange' : 'bg-light-blue'}`}>
          <>
            <div className="title_wrap">
              <h1 className={`${isDonate ? "text-orang-dark" : ""}`}>{selectedItem.content}</h1>
              {isDonate ? (
                <>
                  <div className="m-t-small">目前小額贊助總金額</div>
                  <h2>987,655,873</h2>
                </>
              )
                :
                <></>
              }


            </div>


            {isDonate ? (
              <div className="modal_service_photo">
                <div className="img_wrap"> {selectedItem.imageNode}</div>
              </div>
            )
              :
              <>

                <div className="share_img_wrap">
                  <img src={share_email} alt="share_email" />
                </div>

              </>
            }





          </>

        </div>
        <div className="service_right">

          {isDonate ? (

            <div className="price_wrap">
              <h5>捐款方案</h5>

              <div className="price_list">
                <h5 className="title">喵星人之友</h5>
                <div className="currency">
                  <div className="city">NT$</div>
                  <h4 className="price"> 600</h4>
                </div>

                <div className="total">已有 9,957 人贊助</div>
              </div>
              <div className="price_list">
                <h5 className="title">喵星大使</h5>
                <div className="currency">
                  <div className="city">NT$</div>
                  <h4 className="price"> 6,000</h4>
                </div>

                <div className="total">已有 3,957 人贊助</div>
              </div>
              <div className="price_list">
                <h5 className="title">喵星傳奇</h5>
                <div className="currency">
                  <div className="city">NT$</div>
                  <h4 className="price"> 60,000</h4>
                </div>

                <div className="total">已有 9,95 人贊助</div>
              </div>
              <div className="price_list">
                <h5 className="title">自訂贊助金額</h5>
                <input type="text" className="service_input" placeholder="NT$ 輸入金額" />
              </div>
              <div className="service_btn bg-orang-dark ">前往捐款</div>
            </div>
          )
            :
            (
              <div className="share_wrap">
                <h5 className="title">您的姓名</h5>
                <input type="text" className="service_input" placeholder="姓名" />
                <h5 className="title">Email</h5>
                <input type="text" className="service_input" placeholder="Email" />
                <h5 className="title">手機</h5>
                <input type="text" className="service_input" placeholder="手機" />
                <h5 className="title">您的建言</h5>
                <input type="text" className="service_input large" placeholder="輸入內容" />
                <div className="service_btn bg-orang-dark ">送出意見</div>
              </div>
            )
          }
          <div className="m-b-16"></div>
        </div>
      </div >






    </>
  )
}


export const ItemsModal: React.FC<ItemsModalProps> = ({ isModalOpen, selectedItem, selectedIndex, closeModal }) => {

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      {selectedItem && (
        <div className="modal_box ">
          <div className="modal_title"> <h2 className=" p-x-48">
            {selectedItem && 'serviceProperty' in selectedItem ? (
              <> {selectedItem.modal_title}</>
            ) : (
              selectedItem && 'policyProperty' in selectedItem ? "政策議題" : "最新活動"
            )}

          </h2></div>

          <div className="modal_content p-x-48 ">
            {selectedItem && 'serviceProperty' in selectedItem ?
              (

                <ServicesModalStyle selectedItem={selectedItem} selectedIndex={selectedIndex} />


              )
              :
              (
                <ItemsModalStyle initSelectedItem={selectedItem} initSelectedIndex={selectedIndex} />

              )
            }


          </div>


        </div>
      )
      }
    </Modal >
  )
}
