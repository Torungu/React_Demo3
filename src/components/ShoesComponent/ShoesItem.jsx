import React from "react";

const ShoesItem = ({ item, handleOpen, updateDetail, isHidden }) => {
  return (
    <>
      <div className="border-2 rounded-md p-4 bg-white">
        <img src={item.image} alt="" className="" />
        <div className="">
          <h2 className="text-2xl font-bold text-blue-500">{item.name}</h2>
          <h4 className="py-3">{item.shortDescription}</h4>
          <div className="flex justify-between items-center pt-3 border-t-2">
            <p className="text-green-800 font-bold text-xl">{item.price} $</p>
            <button
              hidden={isHidden}
              className="bg-blue-700 rounded-md py-2 px-5 text-white font-semibold"
              onClick={() => {
                handleOpen();
                updateDetail(item);
              }}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoesItem;
