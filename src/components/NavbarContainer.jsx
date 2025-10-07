import { useEffect, useState, useParams } from "react";
import { useNavigate, useLocation } from "react-router";
import Navbar from "./Navbar";
import { getCategories } from "../firebase/db";

export default function NavbarContainer() {
  const [categs, setCateg] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCategories().then((data) => setCateg(data));
  }, []);

  const location = useLocation();
  const isDetailPage = location.pathname.startsWith("/item/");

  const handleChange = (e) => {
    const selected = e.target.value;
    if (selected !== "defect") {
      navigate(`/category/${selected}`);
    } else {
      navigate(`/`);
    }
  };

  function handleClick() {
    navigate(`/`);
  }

  return (
    <Navbar
      categs={categs}
      onChange={handleChange}
      onClick={handleClick}
      isDetailPage={isDetailPage}
    ></Navbar>
  );
}
