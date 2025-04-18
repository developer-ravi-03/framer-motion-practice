import React from "react";
import { motion } from "motion/react";
import "./App.css";
import Scroll from "./components/Scroll";

const App = () => {
  return (
    <div>
      {/* <motion.div
        animate={{ x: 1000, y: 500, rotate: 360 }}
        transition={{ duration: 3, delay: 1 }}
        className="box"
      ></motion.div> */}

      {/* <motion.h1
        className="heading"
        animate={{ x: 100, y: 50 }}
        transition={{ duration: 3, delay: 1 }}
      >
        {" "}
        Hello Friends how are you!
      </motion.h1> */}

      {/* <motion.div
        initial={{ x: 500, y: 0, rotate: 0 }}
        animate={{ x: 1000, y: 300, rotate: 360 }}
        transition={{ duration: 3, delay: 1 }}
        className="box"
      ></motion.div> */}

      {/* <motion.div
        animate={{ x: 1000, y: 500, rotate: 360 }}
        transition={{ duration: 2, delay: 1, repeat: Infinity }}
        className="box"
      ></motion.div> */}

      {/* <motion.img
        src="public/oggy-1.png"
        animate={{ y: -1 }}
        transition={{ repeat: Infinity }}
        className="image"
        alt=""
      /> */}

      {/* <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{
          x: [0, 800, 800, 0, 0],
          y: [0, 0, 300, 300, 0],
          rotate: [0, 360, 0, -360, 0],
        }}
        transition={{ duration: 4, delay: 1, repeat: Infinity }}
        className="box"
      ></motion.div> */}

      {/* <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{
          x: [0, 800, 0, 800, 0],
          y: [0, 300, 300, 0, 0],
          rotate: [0, 360, 0, -360, 0],
        }}
        transition={{ duration: 4, delay: 1, repeat: Infinity }}
        className="box"
      ></motion.div> */}

      {/* <motion.div
        whileHover={{ backgroundColor: "yellow" }}
        whileTap={{ scale: 0.8 }}
        className="box"
      ></motion.div> */}

      {/* <motion.div
        drag
        whileDrag={{ scale: 0.8 }}
        dragConstraints={{ left: 0, top: 0, right: 1000, bottom: 500 }}
        className="box"
      ></motion.div> */}

      {/* 
      <motion.div
        drag
        whileDrag={{ scale: 0.8 }}
        dragConstraints={{ left: 0, top: 0, right: 1000, bottom: 500 }}
        dragDirectionLock="true"
        className="box"
      ></motion.div> */}

      <Scroll />
    </div>
  );
};

export default App;
