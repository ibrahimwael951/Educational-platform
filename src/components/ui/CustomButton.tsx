"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  Icon?: boolean;
  title: string;
  href: string;
  x?: number;
  y?: number;
  scale?: boolean;
  bg?:boolean;
  width?:boolean;
  delay?:number;

}

const animation = {
  viewport: { once: true, amount: 0.5 },
  whileInView: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 },
},
};
const CustomButton: React.FC<Props> = ({
    Icon = false,
    title,
    href,
    x = 0,
    y = 60,
    scale = false,
    bg = false,
    width = false, 
    delay = 0
    
}) => {
    console.log(title.length)
  
  return (
    <Link href={href} >
      <motion.button
        {...animation}
        initial={{ y: y, x: x, scale: scale ? 0 : 1, opacity: 0 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{scale:0.97}}
        transition={{delay : delay}}
        style={width ? {width: `${title.length}rem`} : {width: 'fit'}}
        className={`rounded-2xl  p-3 px-4    cursor-pointer ${bg ?  "bg-purple-500 text-white ":"border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"}`}
      >
        {title}
        {Icon && "→"}
      </motion.button>
    </Link>
  );
};

export default CustomButton;
