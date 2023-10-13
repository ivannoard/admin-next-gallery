import { useNavigate } from "react-router-dom";
import { Badge, Button, PageTitle, Swicth } from "../../components/atoms";
import "./blog.scss";
import { dummy } from "../../utils/dummy";
import { capitalizeWord } from "../../utils/words";
import { AiFillEdit } from "react-icons/ai";
import { BsTrashFill, BsFillRocketTakeoffFill } from "react-icons/bs";
import { BiSolidCommentDetail } from "react-icons/bi";
import { DiGoogleAnalytics } from "react-icons/di";
import { Tooltip } from "react-tooltip";
const Blog = () => {
  const navigate = useNavigate();
  return (
    <>
      <section>
        <PageTitle text="Blog" />
        <Button
          name="Add New Post"
          onClick={() => navigate("/blog/add")}
          classButton="button-primary"
          style={{ marginBottom: "12px" }}
        />
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Title</th>
              <th>Tag</th>
              <th>Show</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dummy.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>
                  <div className="table-image-wrapper">
                    {item.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={item.title}
                        className="table-image"
                      />
                    ))}
                  </div>
                </td>
                <td>{item.title}</td>
                <td>
                  <div className="table-flex-content">
                    {item.tags.map((tag, index) => (
                      <Badge key={index} name={capitalizeWord(tag)} />
                    ))}
                  </div>
                </td>
                <td>
                  <Swicth />
                </td>
                <td>
                  <div className="table-buttons">
                    <div
                      data-tooltip-id={"blog-redirect-button"}
                      data-tooltip-content={capitalizeWord("go to web")}
                      data-tooltip-place="top"
                      className="custom-tooltip button-icon"
                    >
                      <Tooltip id={"blog-redirect-button"} />
                      <BsFillRocketTakeoffFill />
                    </div>
                    <div
                      data-tooltip-id={"blog-analytic-button"}
                      data-tooltip-content={capitalizeWord("analytic")}
                      data-tooltip-place="top"
                      className="custom-tooltip button-icon"
                    >
                      <Tooltip id={"blog-analytic-button"} />
                      <DiGoogleAnalytics />
                    </div>
                    <div
                      data-tooltip-id={"blog-detail-button"}
                      data-tooltip-content={capitalizeWord("detail")}
                      data-tooltip-place="top"
                      className="custom-tooltip button-icon"
                    >
                      <Tooltip id={"blog-detail-button"} />
                      <BiSolidCommentDetail />
                    </div>
                    <div
                      data-tooltip-id={"blog-edit-button"}
                      data-tooltip-content={capitalizeWord("edit")}
                      data-tooltip-place="top"
                      className="custom-tooltip button-icon"
                    >
                      <Tooltip id={"blog-edit-button"} />
                      <AiFillEdit />
                    </div>
                    <div
                      data-tooltip-id={"blog-delete-button"}
                      data-tooltip-content={capitalizeWord("delete")}
                      data-tooltip-place="top"
                      className="custom-tooltip button-icon"
                    >
                      <Tooltip id={"blog-delete-button"} />
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

export default Blog;
