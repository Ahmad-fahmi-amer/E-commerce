import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Axios } from "../../../Api/axios";
import { CATEGORIES } from "../../../Api/Api";
import StringSlice from "../../../helpers/StringSlice";

export default function WebsiteCategories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    Axios.get(`${CATEGORIES}`).then((res) => setCategories(res.data));
  }, []);
  const showCategories = categories.map((item) => (
    <div className="col-lg-2 col-md-6 col-12 bg-transparent border-0">
      <div className="m-1 bg-white border d-flex align-items-center justify-content-start gap-3 rounded py-2 h-100">
        <img className="ms-3" width="50px" src={item.image} alt="just an img" />
        <p className="mb-0">
          {StringSlice(item.title , 12)}
        </p>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="bg-secondary py-5">
        <Container>
          <div className="d-flex align-items-stretch justify-content-center flex-wrap row-gap-2">
            {showCategories}
          </div>
        </Container>
      </div>
    </div>
  );
}
