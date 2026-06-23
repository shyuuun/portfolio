"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface Dot {
	id: number;
	x: number;
	y: number;
	size: number;
}

export default function ClickDoodles() {
	const [dots, setDots] = useState<Dot[]>([]);

	// useEffect(() => {
	// 	window.addEventListener("click", addDot);
	// 	return () => window.removeEventListener("click", addDot);
	// }, [addDot]);

	return (
		<AnimatePresence>
			{dots.map((d) => (
				<motion.div
					key={d.id}
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 0.6, scale: 1 }}
					exit={{ opacity: 0, scale: 0 }}
					transition={{ duration: 0.4 }}
					className="fixed pointer-events-none z-999 rounded-full"
					style={{
						left: d.x - d.size / 2,
						top: d.y - d.size / 2,
						width: d.size,
						height: d.size,
					}}
					onAnimationComplete={() => {
						setDots((prev) => prev.filter((x) => x.id !== d.id));
					}}
				/>
			))}
		</AnimatePresence>
	);
}
