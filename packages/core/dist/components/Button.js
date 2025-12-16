"use client";
import { jsx as _jsx } from "react/jsx-runtime";
export const Button = ({ className = "", children, ...props }) => (_jsx("button", { className: `inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-white transition-colors bg-blue-600 hover:bg-blue-700 disabled:opacity-50 ${className}`, ...props, children: children }));
