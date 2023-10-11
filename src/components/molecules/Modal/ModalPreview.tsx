import React from "react";
import "./modal.scss";
import { Modal } from "../../../utils/types";
import { LoadPage } from "../../globals";

type ModalPreviewType = {
  setIsOpenModalPreview: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModalPreview: boolean;
};

const ModalPreview = ({
  image,
  setIsOpenModalPreview,
  isOpenModalPreview,
}: ModalPreviewType & Modal) => {
  return (
    <>
      {isOpenModalPreview && (
        <div
          className="modal-overlay"
          onClick={() => setIsOpenModalPreview(false)}
        >
          <LoadPage>
            <div className="modal-preview">
              <img src={image} alt="" />
            </div>
          </LoadPage>
        </div>
      )}
    </>
  );
};

export default ModalPreview;
