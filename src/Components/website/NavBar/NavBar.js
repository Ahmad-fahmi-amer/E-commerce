import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { Axios } from "../../../Api/axios";
import { CATEGORIES } from "../../../Api/Api";
import "./navbar.css";
import StringSlice from "../../../helpers/StringSlice";
export default function NavBar() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    Axios.get(`${CATEGORIES}`).then((res) => setCategories(res.data.slice(-10)));
  }, []);
  const categoriesShow = categories.map((category) => (
    StringSlice(category.title , 15)
  ));

  return (
    <nav className="py-3">
      <Container>
        <div className="d-flex align-items-center justify-content-between flex-wrap">
          <Link className="col-3" to="/">
            <img
              width="180px"
              src={require("../../../Assets/Icons/E-Commerce-Alamer.png")}
              alt="logo"
            />
          </Link>
          <div className="col-12 col-md-6 order-md-2 order-3 mt-md-0 mt-3 position-relative">
            <Form.Control
              type="search"
              className="form-control custom-search py-3 rounded-0"
              placeholder="Search Product"
            />
            <button className="btn btn-primary position-absolute top-0 end-0 h-100 line-height-0 px-4 rounded-0 d-flex align-items-center justify-content-center">
              Search
            </button>
          </div>
          <div className="col-3 d-flex align-items-center justify-content-end gap-4 order-md-3 order-1">
            <Link to="/cart">
              <img
                width="35px"
                src={require("../../../Assets/Icons/Cart.png")}
                alt="cart"
              />
            </Link>
            <Link to="/profile">
              <img
                width="35px"
                src={require("../../../Assets/Icons/profile.png")}
                alt="cart"
              />
            </Link>
          </div>
        </div>
        <div className="mt-3">
          <div className="d-flex align-items-center justify-content-start gap-3">
            {categoriesShow}
            <Link className="text-black category-title" to="/categories">
              show All
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}
