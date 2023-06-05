import { FC, useState } from "react";
import ReactModal from "react-modal";
import usePosition from "./usePosition";

type ModalProps = {
  open: boolean;
  onClose: () => void;
};
const Modal: FC<ModalProps> = ({ open, onClose }) => {
  const { updatePosition } = usePosition()
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);
  const [startingPosition, setStartingPosition] = useState('');
  const [maxTravelTime, setMaxTravelTime] = useState('');
  const [transportation, setTransportation] = useState('');
  const [category, setCategory] = useState('');

  return (
    <ReactModal
      isOpen={open}
      onRequestClose={(e) => onClose()}
      contentLabel="Example Modal"
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>
          <input
            type="checkbox"
            checked={useCurrentLocation}
            onChange={(e) => setUseCurrentLocation(e.target.checked)}
          />
          現在地を使用する
        </label>

        <label>
          開始位置
          <input
            type="text"
            value={startingPosition}
            disabled={useCurrentLocation}
            onChange={(e) => setStartingPosition(e.target.value)}
          />
        </label>

        <label>
          最大移動時間
          <input
            type="number"
            value={maxTravelTime}
            onChange={(e) => setMaxTravelTime(e.target.value)}
          />
        </label>

        <label>
          移動手段
          <select value={transportation} onChange={(e) => setTransportation(e.target.value)}>
            <option value="">選択してください</option>
            <option value="car">車</option>
            <option value="bicycle">自転車</option>
            <option value="on_foot">徒歩</option>
          </select>
        </label>

        <label>
          カテゴリ
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">選択してください</option>
            <option value="restaurant">飲食店</option>
            <option value="retail">小売</option>
          </select>
        </label>
      </div>
      <button onClick={(e) => onClose()}>close</button>
      <button onClick={(e) => {
          updatePosition(startingPosition)
          onClose()
      }}>search</button>
    </ReactModal>
  );
};

export default Modal;
