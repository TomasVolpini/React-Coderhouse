import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "./Navbar";

export default function NavbarContainer() {
  const [categs, setCateg] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products/category-list")
      .then((res) => res.json())
      .then((data) => setCateg(data));
  }, []);

  const handleChange = (e) => {
    const selected = e.target.value;
    if (selected !== "defect") {
      navigate(`/category/${selected}`);
    } else {
      navigate(`/`);
    }
  };

  return <Navbar categs={categs} onChange={handleChange}></Navbar>;
}
