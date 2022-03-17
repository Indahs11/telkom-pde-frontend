// inisiasi library default
import React from "react";

// inisiasi component
import LayoutNavbar from "../../components/Layout/LayoutNavbar";
import Corousel from "../../components/fragment/Corousel";
import DataBox from "../../components/fragment/DataBox";
import Card from "../../components/fragment/Card";
import HubungiBox from "../../components/fragment/hubungi-box/hubugi-box";

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
        <div className=" py-5 px-5">
          <Corousel />
        </div>
        <div className="py-5 px-5 text-center">
          <div className="flex flex-row justify-center">
            <DataBox />
            <DataBox />
            <DataBox />
            <DataBox />
          </div>
        </div>
        <div className="py-5 px-5 font-semibold">
          <h1 className="text-3xl text-center pb-14">Berita Terkini</h1>
          <div className=" flex flex-row gap-4 grid grid-cols-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="py-5 px-5 text-center">
          <h2 className="text-3xl font-semibold text-center pb-14">hubungi</h2>
          <div className="flex flex-row gap-4 justify-center">
            <HubungiBox />
            <HubungiBox />
            <HubungiBox />
          </div>
        </div>
        <div className="bg-red-200 py-5 px-5">
          <h2>footer</h2>
        </div>
      </>
    );
  }
}
