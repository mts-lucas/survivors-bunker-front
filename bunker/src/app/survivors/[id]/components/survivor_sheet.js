'use client';
import React, { useState, useEffect } from "react";
import Pagination from "../../../components/pagination";
import axios from "axios";



export function SurvivorSheet({ sheet }) {

  // const [currentPage, setCurrentPage] = useState(1);
  // const [survivorData, setSurvivorData] = useState({});
  

  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  // const fetchSurvivorData = async (pageNumber) => {
  //   try {
  //     const response = await axios.get(`https://bunkerapi.onrender.com/bunker/api/v1/survivors/?page=${pageNumber}`);
  //     console.log(response);
  //     const data = response.data.results.length > 0 ? response.data.results[0] : null;
      
  //     setSurvivorData(data);
  //   } catch (error) {
  //     console.error("Erro ao buscar dados da API:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchSurvivorData(currentPage);
  // }, [currentPage]);

  // const totalPages = 10;
  return (
    <div className="bg-red-800 border-solid border-yellow-100 border-4 rounded-3xl flex flex-col text-yellow-100 p-4 md:p-8 mt-8 mb-16 max-w-screen-xl mx-auto overflow-y-auto">
      <div className="container mx-auto overflow-y-auto" style={{ maxHeight: 'calc(100vh - 100px)' }}>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="mb-4 md:m-8">
            <h1 className="font-bold text-4xl md:text-6xl text-yellow-100">{survivorData.name}</h1>
          </div>
          <div className="mb-4 md:m-8">
            <img
              src="https://img.olhardigital.com.br/wp-content/uploads/2023/08/pokemon-anime.jpg"
              alt="cover"
              className="w-full md:min-w-36 md:max-w-xl rounded-xl border-2 p-2 border-yellow-100"
            />
          </div>
        </div>
        <div className="flex flex-col items-center border-2 rounded-xl border-dashed border-yellow-100 p-4 md:p-8 m-4 md:m-8">
          <h1 className="font-bold text-3xl md:text-4xl my-4 md:my-8 text-yellow-100">Characteristics</h1>
          <p className="text-lg md:text-2xl text-yellow-100">{sheet.characteristics}</p>
        </div>
        <div className="flex flex-col items-center border-2 rounded-xl border-dashed border-yellow-100 p-4 md:p-8 m-4 md:m-8">
          <h1 className="font-bold text-3xl md:text-4xl my-4 md:my-8 text-yellow-100">Torments</h1>
          <p className="text-lg md:text-2xl text-yellow-100">{survivorData.torments}</p>
        </div>
        <div className="flex flex-col items-center border-2 rounded-xl border-dashed border-yellow-100 p-4 md:p-8 m-4 md:m-8">
          <h1 className="font-bold text-3xl md:text-4xl my-4 md:my-8 text-yellow-100">Conditions</h1>
          <p className="text-lg md:text-2xl text-yellow-100">{survivorData.conditions}</p>
        </div>
        <div className="flex flex-col items-center border-2 rounded-xl border-dashed border-yellow-100 p-4 md:p-8 m-4 md:m-8">
          <h1 className="font-bold text-3xl md:text-4xl my-4 md:my-8 text-yellow-100"></h1>
          <p className="text-lg md:text-2xl text-yellow-100">{survivorData.conviction}</p>
        </div>
        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
      </div>
    </div>
  );
}
