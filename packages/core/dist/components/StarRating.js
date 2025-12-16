import { jsx as _jsx } from "react/jsx-runtime";
import { Star } from "lucide-react";
export const StarRating = ({ rating }) => (_jsx("div", { className: "flex items-center", children: [...Array(5)].map((_, i) => (_jsx(Star, { className: `h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}` }, i))) }));
