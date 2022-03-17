// inisasi library default
import React, { useState, useEffect } from "react";
// inisiasi component

export default function DataBox({ handleAction }) {
  // const location = useLocation();
  // const { id } = queryString.parse(location.search.replace("?", ""));
  // const [description, setDescription] = useState("");

  // const date = () => {
  //   return moment().format();
  // };

  // const handleSubmit = () => {
  //   handleAction({ description, createAt: date() });
  // };

  // useEffect(() => {
  //   if (!id) setDescription("");
  // }, [id]);

  return (
    <div className="flex flex-row">
      <div class="p-6 bg-green-200 box-border h-32 w-32 ">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-red-500">200+</h5>
        <p class="font-normal text-gray-500">Kunjugan Industri</p>
      </div>
      <div class="p-6 bg-green-200 box-border h-32 w-32 ">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-red-500">30+</h5>
        <p class="font-normal text-gray-500">Bursa Kerja</p>
      </div>
      <div class="p-6 bg-green-200 box-border h-32 w-32 ">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-red-500">60+</h5>
        <p class="font-normal text-gray-500">Guru/Siswa Magang</p>
      </div>
      <div class="p-6 bg-green-200 box-border h-32 w-32 ">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-red-500">60+</h5>
        <p class="font-normal text-gray-500">Serifikasi Online</p>
      </div>
    </div>
  );
}
