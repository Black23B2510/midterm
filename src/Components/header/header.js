import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
          <div className="header">
            <div className="work"><i className="fas fa-laptop-house"/> VIỆC LÀM</div>
            <div className="work youth">THANH NIÊN</div>
            <div className="search">
              <form action>
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit"><i className="fal fa-search" /></button>
              </form>
            </div>
          </div>
          <div>
            <ul>
              <li> <Link to={"/"} className="navbar-brand" href="#">The gioi</Link></li>
              <li><a href="#news">Quân sự-Quốc phòng</a></li>
              <li><a href="#contact">Đời sống</a></li>
              <li><a href="#about">Văn hóa</a></li>
              <li><a href="#about">Giải trí</a></li>
              <li><a href="#about">Giới trẻ</a></li>
              <li><a href="#about">Giáo dục</a></li>
              <li><a href="#about">Thể thao</a></li>
              <li><a href="#about">Sức khỏe</a></li>
              <li><a href="#about">Du lịch</a></li>
              <li><Link to={"/Admin"} className="nav-link active" aria-current="page"href="#">ADMIN</Link></li>
            </ul>
          </div>
      </header>
    );
  }
}

export default Header;