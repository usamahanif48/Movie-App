import { Card, Skeleton } from "antd";

const Loader = () => {
  return (
    <div>
      {" "}
      <div className="container" style={{ width: "100%", height: "100vh" }}>
        <div className="row">
          <div className="col-md-4">
            <Card style={{ width: 300, marginTop: "50px" }}>
              <Skeleton avatar active></Skeleton>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: 300, marginTop: "50px" }}>
              <Skeleton avatar active></Skeleton>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: 300, marginTop: "50px" }}>
              <Skeleton avatar active></Skeleton>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: 300, marginTop: "50px" }}>
              <Skeleton avatar active></Skeleton>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: 300, marginTop: "50px" }}>
              <Skeleton avatar active></Skeleton>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: 300, marginTop: "50px" }}>
              <Skeleton avatar active></Skeleton>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: 300, marginTop: "50px" }}>
              <Skeleton avatar active></Skeleton>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: 300, marginTop: "50px" }}>
              <Skeleton avatar active></Skeleton>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: 300, marginTop: "50px" }}>
              <Skeleton avatar active></Skeleton>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
