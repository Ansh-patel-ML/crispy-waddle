import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <div>
        <Link to={`/`}>
          <h2 className="title">FakeShop</h2>
        </Link>
      </div>
    </div>
  );
}
