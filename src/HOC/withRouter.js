import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const [queryParams] = useSearchParams();
  const search = queryParams.get("search");

  return <WrappedComponent {...props} params={params} navigate={navigate} search={search} />;
};

export default withRouter;
