// inisiasi library default
import React from "react";

// inisiasi component
import LayoutNavbar from "../../components/Layout/LayoutNavbar";
import Corousel from "../../components/fragment/Corousel";
import DataBox from "../../components/fragment/DataBox";
import Card from "../../components/fragment/Card";

export default class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      // call variable
    };
  }
  render() {
    return (
      <>
        <LayoutNavbar />
        {/* COROUSEL */}
        <div className="bg-green-200 py-5 px-5">
          <Corousel />
        </div>
        <div className="bg-red-200 py-5 px-5">
          <h2>nilai</h2>
          <DataBox />
        </div>
        <div className="bg-yellow-200 py-5 px-5">
          <h2>berita terkini</h2>
          <div className="grid gap-4">
            <Card />
            <Card />
          </div>
        </div>
        <div className="bg-green-200 py-5 px-5">
          <h2>hubungi</h2>
        </div>
        <div className="bg-red-200 py-5 px-5">
          <h2>footer</h2>
        </div>
      </>
    );
  }
}
