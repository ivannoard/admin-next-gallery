import React, { useEffect } from "react";
import { useDropzone } from "React-dropzone";
import { BsFillCameraFill } from "react-icons/bs";
import "./dropzone.scss";
import { Dropzone as DropzoneType } from "../../../utils/types";

const Dropzone = ({ setDropzoneFiles }: DropzoneType) => {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({});

  useEffect(() => {
    if (acceptedFiles.length > 0) setDropzoneFiles(acceptedFiles);
  }, [acceptedFiles]);

  return (
    <div {...getRootProps({ className: "dropzone" })}>
      <input className="input-zone" {...getInputProps()} />
      <div className="dropzone-content">
        <BsFillCameraFill size={60} />
        <p>Drop your file</p>
      </div>
    </div>
  );
};

export default Dropzone;
