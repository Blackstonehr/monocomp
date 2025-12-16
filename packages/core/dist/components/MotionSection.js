"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
export const MotionSection = ({ children, className = "" }) => (_jsx(motion.section, { className: className, initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.3 }, transition: { duration: 0.5 }, children: children }));
