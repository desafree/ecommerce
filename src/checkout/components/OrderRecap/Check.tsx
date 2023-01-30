import React from "react";
import { motion } from "framer-motion";

export const Check = () => {
  return (
    <svg viewBox="0 0 53.19 53.19" style={{ width: "100px" }}>
      <g>
        <motion.circle
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          stroke="#000"
          strokeWidth={3}
          fill="transparent"
          cx={26.59}
          cy={26.59}
          r={24}
        />
        <motion.path
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          stroke="#000"
          strokeWidth={3}
          strokeLinecap="round"
          fill="transparent"
          d="M12.29 26.59l10.98 10.42 17.49-18.23"
        />
      </g>
    </svg>
  );
};
