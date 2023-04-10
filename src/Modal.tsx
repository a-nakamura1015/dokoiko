import { FC } from "react";
import ReactModal from "react-modal";

type ModalProps = {
  open: boolean;
  onClose: () => void;
};
const Modal: FC<ModalProps> = ({ open, onClose }) => {
  return (
    <ReactModal
      isOpen={open}
      onRequestClose={(e) => onClose()}
      contentLabel="Example Modal"
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">現在地を使用する</label>
        </div>
        <div>
          <span>開始位置</span>
          <input type="text" placeholder="東京駅" />
        </div>
        <div>
          <span>移動時間</span>
          <input type="number" placeholder="30" />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <input type="radio" id="car" name="move" />
            <label htmlFor="car">自動車</label>
          </div>
          <div>
            <input type="radio" id="bycicle" name="move" />
            <label htmlFor="bycicle">自転車</label>
          </div>
          <div>
            <input type="radio" id="walk" name="move" />
            <label htmlFor="walk">徒歩</label>
          </div>
        </div>
        <div>
          <span>カテゴリー</span>
          <select>
            <option>飲食店</option>
            <option>小売</option>
          </select>
        </div>
      </div>
      <button onClick={(e) => onClose()}>close</button>
      <button onClick={(e) => onClose()}>search</button>
    </ReactModal>
  );
};

export default Modal;
