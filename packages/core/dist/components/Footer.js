import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Globe } from "lucide-react";
import { Container } from "./Container";
export const Footer = () => {
    return (_jsx("footer", { className: "bg-zinc-100 dark:bg-zinc-900", children: _jsx(Container, { className: "py-12", children: _jsxs("div", { className: "flex flex-col items-center justify-between gap-6 sm:flex-row", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Globe, { className: "h-6 w-6 text-zinc-500" }), _jsx("span", { className: "font-semibold text-zinc-700 dark:text-zinc-300", children: "LanguBridge" })] }), _jsx("p", { className: "text-sm text-zinc-500", children: "Since 2004. Language opens doors." }), _jsxs("div", { className: "flex gap-4", children: [_jsx("a", { href: "#", className: "text-zinc-500 hover:text-zinc-700 dark:hover:text-white", children: "FB" }), _jsx("a", { href: "#", className: "text-zinc-500 hover:text-zinc-700 dark:hover:text-white", children: "IG" })] })] }) }) }));
};
