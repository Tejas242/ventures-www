"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

type TeamMemberCardProps = {
  id: number;
  name: string;
  role: string;
  team: string;
  image: string;
  bio: string;
  isLarge?: boolean;
  onClick: () => void;
  index?: number;
};

export default function TeamMemberCard({
  id,
  name,
  role,
  team,
  image,
  bio,
  isLarge = false,
  onClick,
  index = 0,
}: TeamMemberCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`${isLarge ? 'col-span-2 row-span-2 md:col-span-2 md:row-span-2' : 'col-span-1'}`}
    >
      <div 
        className="group cursor-pointer h-full"
        onClick={onClick}
      >
        <div className={`relative ${isLarge ? 'h-72 md:h-80' : 'h-40 md:h-44'} overflow-hidden rounded-xl`}>
          <Image 
            src={image} 
            alt={name}
            fill
            className="object-cover transform group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <h3 className="text-lg font-bold text-white">{name}</h3>
            <p className="text-emerald-400 text-sm">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}