"use client";

import { motion } from "motion/react";
import { MouseEventHandler } from "react";

type ButtonProps = {
	children: React.ReactNode;
	className?: string;
	onClick?: MouseEventHandler;
};

export default function Button({ children, className, onClick }: ButtonProps) {
	return (
		<motion.button
			className={`${className} btn-primary border-2 px-2 py-2 cursor-pointer`}
			onClick={onClick}
		>
			{children}
		</motion.button>
	);
}
