import React from "react";
import "./dashboard.scss";
import { PageTitle } from "../../components/atoms";
import { Card } from "../../components/molecules";

const Dashboard = () => {
  return (
    <>
      <section>
        <PageTitle text="Dashboard" />
        <div className="dashboard-overview">
          <div className="card-container">
            {[1, 2, 3].map((item) => (
              <Card key={item} />
            ))}
          </div>
        </div>
        <div className="visitor-overview">
          <h3>Visitors</h3>
        </div>
        <div className="blog-overview">
          <h3>Blog</h3>
        </div>
        <div className="gallery-overview">
          <h3>Gallery</h3>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
