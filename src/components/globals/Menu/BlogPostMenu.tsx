import { Button, PageTitle } from "../../atoms";
import "./menu.scss";

const BlogPostMenu = () => {
  // const { showMenu } = React.useContext(LayoutContext);
  return (
    <>
      <div className={`blog-post-menu`}>
        <PageTitle text="Post Configuration" size={1.1} />
        <h5 className="sub-pagetitle">Tag</h5>
        <h5 className="sub-pagetitle">Published On</h5>
        <h5 className="sub-pagetitle">Viewer Permission</h5>
        <div className="flex button-wrapper">
          <Button name="Save to draft" classButton="button-outline" />
          <Button name="Publish" classButton="button-primary" />
        </div>
      </div>
    </>
  );
};

export default BlogPostMenu;
