import { ArticleItem, articleItems } from "../../utils/articles_config";
import { PolicyItem, policyItems } from "../../utils/polices_config";
import { Modal } from "./Modal";
import "./ItemsModal.scss";
interface ItemsModalProps {
  isModalOpen: boolean;
  selectedItem: ArticleItem | PolicyItem | null;
  selectedIndex: number;
  closeModal: (() => void);
}



export const ItemsModal: React.FC<ItemsModalProps> = ({ isModalOpen, selectedItem, selectedIndex, closeModal }) => {

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      {selectedItem && (
        <div className="modal_box ">
          <div className="modal_title"> <h2 className=" p-x-48">
            {selectedItem && 'policyProperty' in selectedItem ? "政策議題" : "最新活動"}


          </h2></div>

          <div className="modal_content p-x-48 ">
            <div className="modal_main">
              <div className="modal_main_photo">{selectedItem.imageNode}</div>
              <h6 className="m-y-8">{selectedItem.title}</h6>
              <div className="f-normal">分享</div>
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
                      .filter((item, index) => index !== selectedIndex)
                      .slice(0, 2)
                      .map((item, index) => (
                        <div className="modal_more_content" key={index + 1} >
                          <div className="modal_more_photo">{item.imageNode}</div>
                          <div className="m-y-8 f-normal">{item.title}</div>
                        </div>
                      ))}</>
                  ) : (
                    <> {articleItems
                      .filter((item, index) => index !== selectedIndex)
                      .slice(0, 2)
                      .map((item, index) => (
                        <div className="modal_more_content" key={index + 1} >
                          <div className="modal_more_photo">{item.imageNode}</div>
                          <div className="m-y-8 f-normal">{item.title}</div>
                        </div>
                      ))}</>
                  )}

                </div>
              </div>
            </div>

          </div>


        </div>
      )}
    </Modal>
  )
}
