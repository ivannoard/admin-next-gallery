import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, PageTitle } from "../../components/atoms";
import { BlogPostMenu } from "../../components/globals";
import QuillToolbar, {
  formats,
  modules,
} from "../../components/molecules/QuillEditor";
import { LayoutContext } from "../../context/LayoutContext";
const BlogAdd = () => {
  const { state } = React.useContext(LayoutContext);
  const [data, setData] = React.useState("");

  return (
    <>
      <section className="blog-add">
        <div className="blog-add-content">
          <PageTitle text="Add New Post" goBack={true} />
          {/* <Dropzone setDropzoneFiles={setDropzoneFiles} /> */}
          <h3 className="sub-pagetitle">Choose Photos For Thumbnail</h3>
          <div
            className={`blog-add-photos-wrapper ${
              state.showMenu === "show" ? "six-grid" : "seven-grid"
            }`}
          >
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20,
            ].map((item) => (
              <div key={item} className="blog-add-photo"></div>
            ))}
          </div>
          <Button name="save Thumbnails" classButton="button-primary" />
          <h3 className="sub-pagetitle" style={{ margin: "10px 0px" }}>
            Write More
          </h3>
          <QuillToolbar />
          <ReactQuill
            theme="snow"
            value={data}
            onChange={setData}
            modules={modules}
            formats={formats}
          />
        </div>
        <BlogPostMenu />
      </section>
    </>
  );
};

export default BlogAdd;
