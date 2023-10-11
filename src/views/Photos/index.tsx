import React from "react";
import { Button, PageTitle } from "../../components/atoms";
import { Dropzone, ModalPreview } from "../../components/molecules";
import "./photos.scss";

const Photos = () => {
  const [dropzoneFiles, setDropzoneFiles] = React.useState<File[]>([]);
  const [previewImageModalData, setPreviewImageModalData] =
    React.useState<string>("");
  const [isOpenModalPreview, setIsOpenModalPreview] = React.useState(false);
  console.log(previewImageModalData);

  function handleImageUrl(fileImage: File) {
    return URL.createObjectURL(fileImage);
  }
  function handleOpenModalPreview(image: File): void {
    setIsOpenModalPreview(true);
    setPreviewImageModalData(handleImageUrl(image));
    return;
  }
  return (
    <>
      <ModalPreview
        image={previewImageModalData}
        setIsOpenModalPreview={setIsOpenModalPreview}
        isOpenModalPreview={isOpenModalPreview}
      />
      <section>
        <PageTitle text="Photos" />
        <Dropzone setDropzoneFiles={setDropzoneFiles} />
        {dropzoneFiles.length > 0 && (
          <>
            <h3 className="sub-pagetitle">Preview Photos</h3>
            <table className="preview-photos-table">
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
                        className="preview-image-wrapper"
                        onClick={() => handleOpenModalPreview(item)}
                      >
                        <img
                          src={handleImageUrl(item)}
                          alt={item.name}
                          className="preview-image"
                        />
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.type}</td>
                    <td>
                      <div className="preview-buttons">
                        <Button name="Edit" classButton="button-warning" />
                        <Button name="Delete" classButton="button-danger" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
        <h3 className="sub-pagetitle">List Photos</h3>
      </section>
    </>
  );
};

export default Photos;
