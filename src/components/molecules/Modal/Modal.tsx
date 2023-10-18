import React, { useEffect } from "react";
import { Modal as ModalType } from "../../../utils/types";
import { LoadPage } from "../../globals";
import { Button, FormGroup } from "../../atoms";

type ModalDataType = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  dataPreviewImages?: File[];
  setDataPreviewImages?: React.Dispatch<React.SetStateAction<File[]>>;
};

function ModalPreviewEdit({ data, image }: ModalType) {
  return (
    <>
      <div className="modal-preview-edit">
        <div className="modal-preview-image-wrapper">
          <img src={image} alt="" />
        </div>
        <form>
          <FormGroup type="text" labelFor="name" defaultValue={data?.name} />
        </form>
      </div>
    </>
  );
}

const Modal = ({
  image,
  data,
  type,
  setIsOpen,
  isOpen,
  size,
  dataPreviewImages,
  setDataPreviewImages,
}: ModalType & ModalDataType) => {
  const modalSize = { sm: "30%", md: "50%", lg: "70%" };
  const [modalTitle, setModalTitle] = React.useState<string>("");
  const [modalContent, setModalContent] = React.useState<JSX.Element>();

  function handleDeleteButton(type: string) {
    switch (type) {
      case "preview-delete":
        if (dataPreviewImages && data) {
          if (setDataPreviewImages !== undefined)
            setDataPreviewImages(
              dataPreviewImages?.filter((item) => item.name !== data.name)
            );
          setIsOpen(false);
        }
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    switch (type) {
      case "preview-edit":
        setModalTitle("Edit Preview Image");
        setModalContent(<ModalPreviewEdit data={data} image={image} />);
        break;
      case "preview-delete":
        setModalTitle("Delete Preview Image?");
        break;
      case "blog-delete":
        setModalTitle("Delete Blog Post?");
        break;
      default:
        break;
    }
  }, [type, data, image]);
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <LoadPage>
            <div
              className="modal-content"
              style={{
                width: size !== undefined ? modalSize[size] : "70%",
              }}
            >
              <h4 className="modal-title">{modalTitle}</h4>
              {modalContent}
              <div
                className={`buttons ${
                  type === "preview-delete" || type === "blog-delete"
                    ? "flex"
                    : ""
                }`}
              >
                <Button
                  name="cancel"
                  classButton="button-outline"
                  onClick={() => {
                    setIsOpen(false);
                    setModalContent(undefined);
                  }}
                />
                <Button
                  name={type === "preview-delete" ? "delete" : "save"}
                  classButton="button-primary"
                  onClick={() => handleDeleteButton(type as string)}
                />
              </div>
            </div>
          </LoadPage>
        </div>
      )}
    </>
  );
};

export default Modal;
