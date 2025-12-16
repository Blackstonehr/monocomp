import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const SectionTitle = ({ title, subtitle, align = "center", }) => {
    const alignment = align === "center" ? "text-center" : "text-left";
    return (_jsxs("div", { className: `mb-10 ${alignment}`, children: [_jsx("h2", { className: "text-3xl font-bold tracking-tight sm:text-4xl font-serif", children: title }), subtitle && _jsx("p", { className: "mt-2 text-zinc-600 dark:text-zinc-400 text-lg", children: subtitle })] }));
};
