import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import "../../styles/sass/css/shoesLists.css";
import arrShoes from "../../assets/data/data.json";
import ShoesItem from "./ShoesItem";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ShoesLists = () => {
  const [open, setOpen] = React.useState(false);
  const [detail, setDetail] = useState();
  const [hidden, setHidden] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const updateDetail = (shoesDetail) => {
    setDetail(shoesDetail);
  };

  return (
    <>
      <div className="container mx-auto shoes-lists py-5 px-5">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4">
          {arrShoes.map((item, index) => {
            return (
              <ShoesItem
                key={index}
                item={item}
                handleOpen={handleOpen}
                updateDetail={updateDetail}
              />
            );
          })}
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ShoesItem item={detail} isHidden={hidden} />
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default ShoesLists;
