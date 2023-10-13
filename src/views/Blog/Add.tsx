import React from "react";
import { PageTitle } from "../../components/atoms";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import QuillToolbar, {
  modules,
  formats,
} from "../../components/molecules/QuillEditor";
import { Dropzone } from "../../components/molecules";
const BlogAdd = () => {
  const [data, setData] = React.useState("");
  const [dropzoneFiles, setDropzoneFiles] = React.useState<File[]>([]);
  console.log(data);
  return (
    <>
      <section className="blog-add">
        <PageTitle text="Add New Post" goBack={true} />
        <Dropzone setDropzoneFiles={setDropzoneFiles} />

        <QuillToolbar />
        <ReactQuill
          theme="snow"
          value={data}
          onChange={setData}
          modules={modules}
          formats={formats}
        />
      </section>
    </>
  );
};

export default BlogAdd;
