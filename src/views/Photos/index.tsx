import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import { PageTitle } from "../../components/atoms";
import { Dropzone, Modal, ModalPreview } from "../../components/molecules";
import { capitalizeWord } from "../../utils/words";
import "./photos.scss";

const Photos = () => {
  const [dropzoneFiles, setDropzoneFiles] = React.useState<File[]>([]);
  const [previewImageModalData, setPreviewImageModalData] =
    React.useState<string>("");
  const [isOpenModalPreview, setIsOpenModalPreview] = React.useState(false);
  const [modalData, setModalData] = React.useState({});
  const [isOpen, setIsOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState<string>("");

  function handleImageUrl(fileImage: File) {
    return URL.createObjectURL(fileImage);
  }
  function handleOpenModalPreview(image: File): void {
    setIsOpenModalPreview(true);
    setPreviewImageModalData(handleImageUrl(image));
    return;
  }
  function handleButtonAction(type: string, data: File) {
    setIsOpen(true);
    setModalData(data);
    setModalType(type);
    setPreviewImageModalData(handleImageUrl(data));
  }

  return (
    <>
      <Modal
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        data={modalData}
        type={modalType}
        image={previewImageModalData}
        dataPreviewImages={dropzoneFiles}
        setDataPreviewImages={setDropzoneFiles}
        size="md"
      />
      <ModalPreview
        image={previewImageModalData}
        setIsOpenModalPreview={setIsOpenModalPreview}
        isOpenModalPreview={isOpenModalPreview}
      />
      <section className="photos-wrapper">
        <PageTitle text="Photos" />
        <Dropzone setDropzoneFiles={setDropzoneFiles} />
        {dropzoneFiles.length > 0 && (
          <>
            <h3 className="sub-pagetitle">Preview Photos</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {dropzoneFiles.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <div
                        className="table-image-wrapper"
                        onClick={() => handleOpenModalPreview(item)}
                      >
                        <img
                          src={handleImageUrl(item)}
                          alt={item.name}
                          className="table-image"
                        />
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.type}</td>
                    <td>
                      <div className="table-buttons">
                        <div
                          data-tooltip-id={"photo-edit-button"}
                          data-tooltip-content={capitalizeWord("edit")}
                          data-tooltip-place="top"
                          className="custom-tooltip button-icon"
                          onClick={() =>
                            handleButtonAction("preview-edit", item)
                          }
                        >
                          <Tooltip id={"photo-edit-button"} />
                          <AiFillEdit />
                        </div>
                        <div
                          data-tooltip-id={"photo-delete-button"}
                          data-tooltip-content={capitalizeWord("delete")}
                          data-tooltip-place="top"
                          className="custom-tooltip button-icon"
                          onClick={() =>
                            handleButtonAction("preview-delete", item)
                          }
                        >
                          <Tooltip id={"photo-delete-button"} />
                          <BsTrashFill />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
        <h3 className="sub-pagetitle">List Photos</h3>
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dropzoneFiles.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <div
                    className="table-image-wrapper"
                    onClick={() => handleOpenModalPreview(item)}
                  >
                    <img
                      src={handleImageUrl(item)}
                      alt={item.name}
                      className="table-image"
                    />
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>
                  <div className="table-buttons">
                    <div
                      data-tooltip-id={"photo-edit-button"}
                      data-tooltip-content={capitalizeWord("edit")}
                      data-tooltip-place="top"
                      className="custom-tooltip button-icon"
                      onClick={() => handleButtonAction("preview-edit", item)}
                    >
                      <Tooltip id={"photo-edit-button"} />
                      <AiFillEdit />
                    </div>
                    <div
                      data-tooltip-id={"photo-delete-button"}
                      data-tooltip-content={capitalizeWord("delete")}
                      data-tooltip-place="top"
                      className="custom-tooltip button-icon"
                      onClick={() => handleButtonAction("preview-delete", item)}
                    >
                      <Tooltip id={"photo-delete-button"} />
                      <BsTrashFill />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Photos;
