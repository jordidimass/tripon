module.exports = [
"[project]/apps/web/src/app/favicon.ico.mjs { IMAGE => \"[project]/apps/web/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/favicon.ico.mjs { IMAGE => \"[project]/apps/web/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/apps/web/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/apps/web/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/apps/web/src/components/ui/badge.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$40$19$2e$2$2e$4$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-slot@1.2.3_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-slot/dist/index.mjs [app-rsc] (ecmascript) <export * as Slot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
            secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
            destructive: "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
            outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
            ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
            link: "text-primary underline-offset-4 hover:underline"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant = "default", asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$14_react$40$19$2e$2$2e$4$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__["Slot"].Root : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/badge.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/apps/web/src/components/ui/card.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
function Card({ className, size = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("group/card flex flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/card.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/card.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("text-base leading-snug font-medium group-data-[size=sm]/card:text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/card.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/card.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("px-4 group-data-[size=sm]/card:px-3", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/card.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex items-center rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/card:p-3", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/card.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/apps/web/src/lib/format.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatCurrency",
    ()=>formatCurrency,
    "formatMoney",
    ()=>formatMoney,
    "formatNumber",
    ()=>formatNumber
]);
function formatMoney(amount, currency, locale = "es-GT") {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        maximumFractionDigits: 0
    }).format(amount);
}
function formatCurrency(amount) {
    return formatMoney(amount, "USD", "en-US");
}
function formatNumber(n) {
    return new Intl.NumberFormat("en-US").format(n);
}
}),
"[project]/apps/web/src/components/car/car-card.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CarCard",
    ()=>CarCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/badge.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/format.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
function CarCard({ car }) {
    const title = `${car.vehiculo.anio} ${car.vehiculo.marca} ${car.vehiculo.modelo}`;
    const score = car.inspeccion?.score_confianza;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
        className: "overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-[16/10] w-full bg-muted",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: car.foto_url || "/cars/tesla-model3.svg",
                        alt: title,
                        width: 640,
                        height: 400,
                        className: "h-full w-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/car/car-card.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-3 top-3 flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: car.publicacion.estado === "Disponible" ? "secondary" : "outline",
                                children: car.publicacion.estado
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/car/car-card.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            typeof score === "number" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "outline",
                                children: [
                                    "Score ",
                                    score
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/car/car-card.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/car/car-card.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/car/car-card.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "text-base",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/car/car-card.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "outline",
                                children: car.vehiculo.tipo
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/car/car-card.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "outline",
                                children: car.vehiculo.combustible
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/car/car-card.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "outline",
                                children: car.vehiculo.transmision
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/car/car-card.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/car/car-card.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/car/car-card.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "grid gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-baseline justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg font-semibold tracking-tight",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatMoney"])(car.precio.monto, car.precio.moneda)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/car/car-card.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-muted-foreground",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatNumber"])(car.vehiculo.kilometraje),
                                    " km"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/car/car-card.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/car/car-card.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-muted-foreground",
                        children: [
                            car.ubicacion.ciudad,
                            ", ",
                            car.ubicacion.departamento
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/car/car-card.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/car/car-card.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardFooter"], {
                className: "justify-between gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                    asChild: true,
                    size: "sm",
                    className: "w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: `/cars/${car.id}`,
                        children: "Ver vehiculo"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/car/car-card.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/car/car-card.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/car/car-card.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/car/car-card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/components/car/search-hero.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchHero",
    ()=>SearchHero
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const SearchHero = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SearchHero() from the server but SearchHero is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/apps/web/src/components/car/search-hero.tsx <module evaluation>", "SearchHero");
}),
"[project]/apps/web/src/components/car/search-hero.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchHero",
    ()=>SearchHero
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const SearchHero = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SearchHero() from the server but SearchHero is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/apps/web/src/components/car/search-hero.tsx", "SearchHero");
}),
"[project]/apps/web/src/components/car/search-hero.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$car$2f$search$2d$hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/components/car/search-hero.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$car$2f$search$2d$hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/car/search-hero.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$car$2f$search$2d$hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/packages/catalog/src/cars.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"id\":1,\"titulo\":\"Toyota Corolla LE 2018 Automatico\",\"vehiculo\":{\"marca\":\"Toyota\",\"modelo\":\"Corolla\",\"version\":\"LE\",\"anio\":2018,\"tipo\":\"Sedan\",\"color\":\"Gris Metalico\",\"numero_puertas\":4,\"capacidad_pasajeros\":5,\"combustible\":\"Gasolina\",\"transmision\":\"Automatica\",\"traccion\":\"FWD\",\"kilometraje\":78420,\"condicion\":\"Usado\"},\"identificacion\":{\"placa\":\"P123ABC\",\"vin\":\"JTDBU4EE9J1234561\"},\"precio\":{\"monto\":89250,\"moneda\":\"GTQ\",\"precio_sugerido\":90500},\"ubicacion\":{\"ciudad\":\"Guatemala\",\"departamento\":\"Guatemala\"},\"estado\":{\"unico_duenio\":true,\"servicios_al_dia\":true,\"recien_importado\":false,\"papeles_en_orden\":true,\"impuesto_circulacion_pagado\":true,\"choques_reportados\":false},\"inspeccion\":{\"realizada\":true,\"resultado\":\"Aprobado\",\"score_confianza\":92},\"vendedor\":{\"id\":\"U001\",\"nombre\":\"Carlos Mendoza\",\"telefono\":\"50255550101\",\"whatsapp\":\"50255550101\",\"tipo\":\"Particular\",\"verificado\":true},\"publicacion\":{\"estado\":\"Disponible\",\"fecha_publicacion\":\"2026-03-07\",\"fecha_actualizacion\":\"2026-03-07\"},\"descripcion\":\"Sedan economico en muy buen estado, ideal para ciudad y uso diario.\",\"facilidad_repuestos_gt\":\"Alta\",\"foto_url\":\"https://a54ak187y1.ufs.sh/f/brLE38KSM5oEHnbUA9d3LNrQslAkeKuHBEMOgpSwq1IYhPR7\"},{\"id\":2,\"titulo\":\"Honda Civic EX 2020 CVT\",\"vehiculo\":{\"marca\":\"Honda\",\"modelo\":\"Civic\",\"version\":\"EX\",\"anio\":2020,\"tipo\":\"Sedan\",\"color\":\"Blanco Perla\",\"numero_puertas\":4,\"capacidad_pasajeros\":5,\"combustible\":\"Gasolina\",\"transmision\":\"CVT\",\"traccion\":\"FWD\",\"kilometraje\":42110,\"condicion\":\"Usado\"},\"identificacion\":{\"placa\":\"P234BCD\",\"vin\":\"2HGFC2F68LH123462\"},\"precio\":{\"monto\":114900,\"moneda\":\"GTQ\",\"precio_sugerido\":117300},\"ubicacion\":{\"ciudad\":\"Mixco\",\"departamento\":\"Guatemala\"},\"estado\":{\"unico_duenio\":false,\"servicios_al_dia\":true,\"recien_importado\":false,\"papeles_en_orden\":true,\"impuesto_circulacion_pagado\":true,\"choques_reportados\":false},\"inspeccion\":{\"realizada\":true,\"resultado\":\"Aprobado\",\"score_confianza\":89},\"vendedor\":{\"id\":\"U002\",\"nombre\":\"Andrea Lopez\",\"telefono\":\"50255550102\",\"whatsapp\":\"50255550102\",\"tipo\":\"Particular\",\"verificado\":true},\"publicacion\":{\"estado\":\"Disponible\",\"fecha_publicacion\":\"2026-03-07\",\"fecha_actualizacion\":\"2026-03-07\"},\"descripcion\":\"Vehiculo comodo, moderno y bien cuidado, con buen consumo de combustible.\",\"facilidad_repuestos_gt\":\"Media\",\"foto_url\":\"https://a54ak187y1.ufs.sh/f/brLE38KSM5oE3M9gn7reUZs5uBgQvOfiI47610EwJFx9hPdl\"},{\"id\":3,\"titulo\":\"Mazda CX-5 Grand Touring 2019 AWD\",\"vehiculo\":{\"marca\":\"Mazda\",\"modelo\":\"CX-5\",\"version\":\"Grand Touring\",\"anio\":2019,\"tipo\":\"SUV\",\"color\":\"Rojo Vino\",\"numero_puertas\":5,\"capacidad_pasajeros\":5,\"combustible\":\"Gasolina\",\"transmision\":\"Automatica\",\"traccion\":\"AWD\",\"kilometraje\":55870,\"condicion\":\"Usado\"},\"identificacion\":{\"placa\":\"P345CDE\",\"vin\":\"JM3KFBDM7K0123463\"},\"precio\":{\"monto\":146500,\"moneda\":\"GTQ\",\"precio_sugerido\":148000},\"ubicacion\":{\"ciudad\":\"Antigua\",\"departamento\":\"Sacatepequez\"},\"estado\":{\"unico_duenio\":false,\"servicios_al_dia\":true,\"recien_importado\":false,\"papeles_en_orden\":true,\"impuesto_circulacion_pagado\":true,\"choques_reportados\":false},\"inspeccion\":{\"realizada\":true,\"resultado\":\"Aprobado\",\"score_confianza\":94},\"vendedor\":{\"id\":\"U003\",\"nombre\":\"Luis Arana\",\"telefono\":\"50255550103\",\"whatsapp\":\"50255550103\",\"tipo\":\"Importadora\",\"verificado\":true},\"publicacion\":{\"estado\":\"Reservado\",\"fecha_publicacion\":\"2026-03-07\",\"fecha_actualizacion\":\"2026-03-07\"},\"descripcion\":\"SUV equipada, excelente para familia y viajes largos con buen confort.\",\"facilidad_repuestos_gt\":\"Baja\",\"foto_url\":\"https://a54ak187y1.ufs.sh/f/brLE38KSM5oEMXAXricjR7IjVWUHyCXGqP1EovTmOFcSpagJ\"},{\"id\":4,\"titulo\":\"Toyota Hilux SRV 2017 4x4 Turbo Diesel\",\"vehiculo\":{\"marca\":\"Toyota\",\"modelo\":\"Hilux\",\"version\":\"SRV\",\"anio\":2017,\"tipo\":\"Pickup\",\"color\":\"Plata\",\"numero_puertas\":4,\"capacidad_pasajeros\":5,\"combustible\":\"Diesel\",\"transmision\":\"Mecanica\",\"traccion\":\"4x4\",\"kilometraje\":98640,\"condicion\":\"Usado\"},\"identificacion\":{\"placa\":\"P456DEF\",\"vin\":\"MR0HA3CD4H1234644\"},\"precio\":{\"monto\":164800,\"moneda\":\"GTQ\",\"precio_sugerido\":162000},\"ubicacion\":{\"ciudad\":\"Quetzaltenango\",\"departamento\":\"Quetzaltenango\"},\"estado\":{\"unico_duenio\":false,\"servicios_al_dia\":true,\"recien_importado\":false,\"papeles_en_orden\":true,\"impuesto_circulacion_pagado\":true,\"choques_reportados\":true},\"inspeccion\":{\"realizada\":true,\"resultado\":\"Observado\",\"score_confianza\":87},\"vendedor\":{\"id\":\"U004\",\"nombre\":\"Mario Castillo\",\"telefono\":\"50255550104\",\"whatsapp\":\"50255550104\",\"tipo\":\"Particular\",\"verificado\":true},\"publicacion\":{\"estado\":\"Disponible\",\"fecha_publicacion\":\"2026-03-07\",\"fecha_actualizacion\":\"2026-03-07\"},\"descripcion\":\"Pickup fuerte para trabajo y finca, con detalles normales de uso.\",\"facilidad_repuestos_gt\":\"Alta\",\"foto_url\":\"https://a54ak187y1.ufs.sh/f/brLE38KSM5oE8uxXc7zTCdxnkAVBlpg72rfzIEtwOmaMuyc0\"},{\"id\":5,\"titulo\":\"Kia Sportage LX 2016 Automatica\",\"vehiculo\":{\"marca\":\"Kia\",\"modelo\":\"Sportage\",\"version\":\"LX\",\"anio\":2016,\"tipo\":\"SUV\",\"color\":\"Negro\",\"numero_puertas\":5,\"capacidad_pasajeros\":5,\"combustible\":\"Gasolina\",\"transmision\":\"Automatica\",\"traccion\":\"FWD\",\"kilometraje\":87350,\"condicion\":\"Usado\"},\"identificacion\":{\"placa\":\"P567EFG\",\"vin\":\"KNDPMCAC7G7123465\"},\"precio\":{\"monto\":98200,\"moneda\":\"GTQ\",\"precio_sugerido\":99500},\"ubicacion\":{\"ciudad\":\"Villa Nueva\",\"departamento\":\"Guatemala\"},\"estado\":{\"unico_duenio\":false,\"servicios_al_dia\":false,\"recien_importado\":true,\"papeles_en_orden\":true,\"impuesto_circulacion_pagado\":true,\"choques_reportados\":false},\"inspeccion\":{\"realizada\":true,\"resultado\":\"Aprobado\",\"score_confianza\":85},\"vendedor\":{\"id\":\"U005\",\"nombre\":\"AutoCentro GT\",\"telefono\":\"50255550105\",\"whatsapp\":\"50255550105\",\"tipo\":\"Agencia\",\"verificado\":true},\"publicacion\":{\"estado\":\"Disponible\",\"fecha_publicacion\":\"2026-03-07\",\"fecha_actualizacion\":\"2026-03-07\"},\"descripcion\":\"SUV espaciosa y comoda para uso familiar, recien ingresada al pais.\",\"facilidad_repuestos_gt\":\"Media\",\"foto_url\":\"https://a54ak187y1.ufs.sh/f/brLE38KSM5oEbJH82SKSM5oEgxQILk7bUWrJwHAFlvCcPneY\"},{\"id\":6,\"titulo\":\"Hyundai Elantra GLS 2019\",\"vehiculo\":{\"marca\":\"Hyundai\",\"modelo\":\"Elantra\",\"version\":\"GLS\",\"anio\":2019,\"tipo\":\"Sedan\",\"color\":\"Azul Oscuro\",\"numero_puertas\":4,\"capacidad_pasajeros\":5,\"combustible\":\"Gasolina\",\"transmision\":\"Automatica\",\"traccion\":\"FWD\",\"kilometraje\":61280,\"condicion\":\"Usado\"},\"identificacion\":{\"placa\":\"P678FGH\",\"vin\":\"KMHD84LF2KU123466\"},\"precio\":{\"monto\":93400,\"moneda\":\"GTQ\",\"precio_sugerido\":95000},\"ubicacion\":{\"ciudad\":\"Guatemala\",\"departamento\":\"Guatemala\"},\"estado\":{\"unico_duenio\":true,\"servicios_al_dia\":true,\"recien_importado\":false,\"papeles_en_orden\":true,\"impuesto_circulacion_pagado\":true,\"choques_reportados\":false},\"inspeccion\":{\"realizada\":false,\"resultado\":\"Pendiente\",\"score_confianza\":78},\"vendedor\":{\"id\":\"U006\",\"nombre\":\"Jose Pineda\",\"telefono\":\"50255550106\",\"whatsapp\":\"50255550106\",\"tipo\":\"Particular\",\"verificado\":false},\"publicacion\":{\"estado\":\"Disponible\",\"fecha_publicacion\":\"2026-03-07\",\"fecha_actualizacion\":\"2026-03-07\"},\"descripcion\":\"Sedan moderno, buen equipamiento y mantenimiento reciente al dia.\",\"facilidad_repuestos_gt\":\"Alta\",\"foto_url\":\"https://a54ak187y1.ufs.sh/f/brLE38KSM5oEkc5rPWSHclpbuQGE7WMU20DqRFJtB4Onmv3P\"},{\"id\":7,\"titulo\":\"Nissan Frontier NP300 2018 Diesel\",\"vehiculo\":{\"marca\":\"Nissan\",\"modelo\":\"Frontier\",\"version\":\"NP300\",\"anio\":2018,\"tipo\":\"Pickup\",\"color\":\"Blanco\",\"numero_puertas\":4,\"capacidad_pasajeros\":5,\"combustible\":\"Diesel\",\"transmision\":\"Mecanica\",\"traccion\":\"4x4\",\"kilometraje\":111940,\"condicion\":\"Usado\"},\"identificacion\":{\"placa\":\"P789GHI\",\"vin\":\"MNTCBND28J0123467\"},\"precio\":{\"monto\":137600,\"moneda\":\"GTQ\",\"precio_sugerido\":136200},\"ubicacion\":{\"ciudad\":\"Escuintla\",\"departamento\":\"Escuintla\"},\"estado\":{\"unico_duenio\":false,\"servicios_al_dia\":true,\"recien_importado\":false,\"papeles_en_orden\":true,\"impuesto_circulacion_pagado\":true,\"choques_reportados\":false},\"inspeccion\":{\"realizada\":true,\"resultado\":\"Aprobado\",\"score_confianza\":83},\"vendedor\":{\"id\":\"U007\",\"nombre\":\"Rene Morales\",\"telefono\":\"50255550107\",\"whatsapp\":\"50255550107\",\"tipo\":\"Particular\",\"verificado\":true},\"publicacion\":{\"estado\":\"Disponible\",\"fecha_publicacion\":\"2026-03-07\",\"fecha_actualizacion\":\"2026-03-07\"},\"descripcion\":\"Pickup de trabajo con buen torque, estructura solida y buen rendimiento.\",\"facilidad_repuestos_gt\":\"Baja\",\"foto_url\":\"https://a54ak187y1.ufs.sh/f/brLE38KSM5oEIEtPvaMCxtSNaA7eHXuVbm3QURLYdjcTEgi0\"},{\"id\":8,\"titulo\":\"Ford Escape SE 2017 Ecoboost\",\"vehiculo\":{\"marca\":\"Ford\",\"modelo\":\"Escape\",\"version\":\"SE\",\"anio\":2017,\"tipo\":\"SUV\",\"color\":\"Gris Oscuro\",\"numero_puertas\":5,\"capacidad_pasajeros\":5,\"combustible\":\"Gasolina\",\"transmision\":\"Automatica\",\"traccion\":\"AWD\",\"kilometraje\":76430,\"condicion\":\"Usado\"},\"identificacion\":{\"placa\":\"P890HIJ\",\"vin\":\"1FMCU9GD9HUA12348\"},\"precio\":{\"monto\":101750,\"moneda\":\"GTQ\",\"precio_sugerido\":99500},\"ubicacion\":{\"ciudad\":\"Coban\",\"departamento\":\"Alta Verapaz\"},\"estado\":{\"unico_duenio\":false,\"servicios_al_dia\":true,\"recien_importado\":false,\"papeles_en_orden\":true,\"impuesto_circulacion_pagado\":true,\"choques_reportados\":true},\"inspeccion\":{\"realizada\":true,\"resultado\":\"Observado\",\"score_confianza\":80},\"vendedor\":{\"id\":\"U008\",\"nombre\":\"Patricia Gomez\",\"telefono\":\"50255550108\",\"whatsapp\":\"50255550108\",\"tipo\":\"Particular\",\"verificado\":true},\"publicacion\":{\"estado\":\"Disponible\",\"fecha_publicacion\":\"2026-03-07\",\"fecha_actualizacion\":\"2026-03-07\"},\"descripcion\":\"SUV comoda y turbo eficiente, con un choque leve ya reparado.\",\"facilidad_repuestos_gt\":\"Media\",\"foto_url\":\"https://a54ak187y1.ufs.sh/f/brLE38KSM5oEnN3iXTJWLEGgk3VQ9vcptdZ0BJ4YOqTijr7m\"},{\"id\":9,\"titulo\":\"Chevrolet Spark GT 2021 Manual\",\"vehiculo\":{\"marca\":\"Chevrolet\",\"modelo\":\"Spark\",\"version\":\"GT\",\"anio\":2021,\"tipo\":\"Hatchback\",\"color\":\"Rojo\",\"numero_puertas\":5,\"capacidad_pasajeros\":5,\"combustible\":\"Gasolina\",\"transmision\":\"Mecanica\",\"traccion\":\"FWD\",\"kilometraje\":28190,\"condicion\":\"Usado\"},\"identificacion\":{\"placa\":\"P901IJK\",\"vin\":\"KL8CD6SA1MC123469\"},\"precio\":{\"monto\":68800,\"moneda\":\"GTQ\",\"precio_sugerido\":70500},\"ubicacion\":{\"ciudad\":\"Guatemala\",\"departamento\":\"Guatemala\"},\"estado\":{\"unico_duenio\":true,\"servicios_al_dia\":true,\"recien_importado\":false,\"papeles_en_orden\":true,\"impuesto_circulacion_pagado\":true,\"choques_reportados\":false},\"inspeccion\":{\"realizada\":true,\"resultado\":\"Aprobado\",\"score_confianza\":91},\"vendedor\":{\"id\":\"U009\",\"nombre\":\"Diana Ruiz\",\"telefono\":\"50255550109\",\"whatsapp\":\"50255550109\",\"tipo\":\"Particular\",\"verificado\":true},\"publicacion\":{\"estado\":\"Disponible\",\"fecha_publicacion\":\"2026-03-07\",\"fecha_actualizacion\":\"2026-03-07\"},\"descripcion\":\"Compacto economico, ideal para primer carro y recorridos urbanos.\",\"facilidad_repuestos_gt\":\"Alta\",\"foto_url\":\"https://a54ak187y1.ufs.sh/f/brLE38KSM5oExpuny3UcwMhgWxi2IGfpyXbLB0A9zRO8N4KH\"},{\"id\":10,\"titulo\":\"Mitsubishi L200 GLX 2015 4x4 Diesel\",\"vehiculo\":{\"marca\":\"Mitsubishi\",\"modelo\":\"L200\",\"version\":\"GLX\",\"anio\":2015,\"tipo\":\"Pickup\",\"color\":\"Plata\",\"numero_puertas\":4,\"capacidad_pasajeros\":5,\"combustible\":\"Diesel\",\"transmision\":\"Mecanica\",\"traccion\":\"4x4\",\"kilometraje\":134260,\"condicion\":\"Usado\"},\"identificacion\":{\"placa\":\"P012JKL\",\"vin\":\"MMBJNKB47FD123470\"},\"precio\":{\"monto\":127900,\"moneda\":\"GTQ\",\"precio_sugerido\":125500},\"ubicacion\":{\"ciudad\":\"Huehuetenango\",\"departamento\":\"Huehuetenango\"},\"estado\":{\"unico_duenio\":false,\"servicios_al_dia\":true,\"recien_importado\":false,\"papeles_en_orden\":true,\"impuesto_circulacion_pagado\":false,\"choques_reportados\":false},\"inspeccion\":{\"realizada\":true,\"resultado\":\"Aprobado\",\"score_confianza\":84},\"vendedor\":{\"id\":\"U010\",\"nombre\":\"Transportes del Norte\",\"telefono\":\"50255550110\",\"whatsapp\":\"50255550110\",\"tipo\":\"Importadora\",\"verificado\":true},\"publicacion\":{\"estado\":\"Disponible\",\"fecha_publicacion\":\"2026-03-07\",\"fecha_actualizacion\":\"2026-03-07\"},\"descripcion\":\"Pickup confiable para trabajo pesado y terreno dificil.\",\"facilidad_repuestos_gt\":\"Baja\",\"foto_url\":\"https://a54ak187y1.ufs.sh/f/brLE38KSM5oEbklaQbKSM5oEgxQILk7bUWrJwHAFlvCcPneY\"}]"));}),
"[project]/packages/catalog/src/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "autos",
    ()=>autos,
    "bodyTypeSynonyms",
    ()=>bodyTypeSynonyms,
    "fuelSynonyms",
    ()=>fuelSynonyms,
    "getAutoById",
    ()=>getAutoById,
    "getCatalogFacets",
    ()=>getCatalogFacets,
    "getSearchableAutoById",
    ()=>getSearchableAutoById,
    "normalizeSearchText",
    ()=>normalizeSearchText,
    "searchableAutos",
    ()=>searchableAutos,
    "toDisplayBodyType",
    ()=>toDisplayBodyType,
    "toDisplayFuel",
    ()=>toDisplayFuel,
    "toDisplayTransmission",
    ()=>toDisplayTransmission,
    "tractionSynonyms",
    ()=>tractionSynonyms,
    "transmissionSynonyms",
    ()=>transmissionSynonyms
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$catalog$2f$src$2f$cars$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/packages/catalog/src/cars.json (json)");
;
function normalizeText(value) {
    return value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().trim();
}
const fuelSynonyms = {
    gasoline: [
        "gasolina",
        "gas",
        "nafta",
        "petrol"
    ],
    diesel: [
        "diesel",
        "diésel",
        "turbo diesel",
        "turbo-diesel"
    ],
    hybrid: [
        "hybrid",
        "hibrido",
        "híbrido"
    ],
    electric: [
        "electric",
        "electrico",
        "eléctrico",
        "ev"
    ]
};
const transmissionSynonyms = {
    automatic: [
        "automatica",
        "automatica",
        "automatico",
        "automático",
        "auto"
    ],
    manual: [
        "mecanica",
        "mecánica",
        "manual"
    ],
    cvt: [
        "cvt"
    ]
};
const bodyTypeSynonyms = {
    sedan: [
        "sedan",
        "sedán"
    ],
    suv: [
        "suv",
        "camioneta",
        "familiar"
    ],
    pickup: [
        "pickup",
        "pick up",
        "pick-up",
        "doble cabina"
    ],
    hatchback: [
        "hatchback",
        "compacto",
        "city car"
    ]
};
const tractionSynonyms = {
    fwd: [
        "fwd",
        "traccion delantera",
        "tracción delantera"
    ],
    rwd: [
        "rwd",
        "traccion trasera",
        "tracción trasera"
    ],
    awd: [
        "awd",
        "all wheel drive"
    ],
    "4x4": [
        "4x4",
        "4wd",
        "doble traccion",
        "doble tracción"
    ]
};
function normalizeFuel(value) {
    const normalized = normalizeText(value);
    if (fuelSynonyms.diesel.some((entry)=>normalized.includes(normalizeText(entry)))) return "diesel";
    if (fuelSynonyms.hybrid.some((entry)=>normalized.includes(normalizeText(entry)))) return "hybrid";
    if (fuelSynonyms.electric.some((entry)=>normalized.includes(normalizeText(entry)))) return "electric";
    return "gasoline";
}
function normalizeTransmission(value) {
    const normalized = normalizeText(value);
    if (transmissionSynonyms.cvt.some((entry)=>normalized.includes(normalizeText(entry)))) return "cvt";
    if (transmissionSynonyms.manual.some((entry)=>normalized.includes(normalizeText(entry)))) return "manual";
    return "automatic";
}
function normalizeBodyType(value) {
    const normalized = normalizeText(value);
    if (bodyTypeSynonyms.pickup.some((entry)=>normalized.includes(normalizeText(entry)))) return "pickup";
    if (bodyTypeSynonyms.suv.some((entry)=>normalized.includes(normalizeText(entry)))) return "suv";
    if (bodyTypeSynonyms.hatchback.some((entry)=>normalized.includes(normalizeText(entry)))) return "hatchback";
    return "sedan";
}
function normalizeTraction(value) {
    const normalized = normalizeText(value);
    if (normalized.includes("4x4")) return "4x4";
    if (normalized.includes("awd")) return "awd";
    if (normalized.includes("rwd")) return "rwd";
    return "fwd";
}
function buildAliases(auto) {
    const aliases = [
        auto.titulo,
        auto.vehiculo.marca,
        auto.vehiculo.modelo,
        auto.vehiculo.version,
        auto.vehiculo.tipo,
        auto.vehiculo.combustible,
        auto.vehiculo.transmision,
        auto.vehiculo.traccion,
        auto.descripcion,
        auto.ubicacion.ciudad,
        auto.ubicacion.departamento
    ];
    const fuel = normalizeFuel(auto.vehiculo.combustible);
    const transmission = normalizeTransmission(auto.vehiculo.transmision);
    const bodyType = normalizeBodyType(auto.vehiculo.tipo);
    const traction = normalizeTraction(auto.vehiculo.traccion);
    return [
        ...aliases,
        ...fuelSynonyms[fuel],
        ...transmissionSynonyms[transmission],
        ...bodyTypeSynonyms[bodyType],
        ...tractionSynonyms[traction]
    ];
}
function toSearchableAuto(auto) {
    const searchAliases = buildAliases(auto);
    return {
        id: auto.id,
        raw: auto,
        title: `${auto.vehiculo.anio} ${auto.vehiculo.marca} ${auto.vehiculo.modelo} ${auto.vehiculo.version}`.trim(),
        year: auto.vehiculo.anio,
        make: auto.vehiculo.marca,
        model: auto.vehiculo.modelo,
        version: auto.vehiculo.version,
        bodyType: normalizeBodyType(auto.vehiculo.tipo),
        fuel: normalizeFuel(auto.vehiculo.combustible),
        transmission: normalizeTransmission(auto.vehiculo.transmision),
        traction: normalizeTraction(auto.vehiculo.traccion),
        price: auto.precio.monto,
        currency: auto.precio.moneda,
        mileage: auto.vehiculo.kilometraje,
        locationCity: auto.ubicacion.ciudad,
        locationDepartment: auto.ubicacion.departamento,
        sellerType: auto.vendedor.tipo,
        onlyDeal: Boolean(auto.inspeccion?.realizada) && (auto.inspeccion?.score_confianza ?? 0) >= 90,
        searchAliases,
        searchableText: normalizeText([
            auto.titulo,
            auto.descripcion,
            auto.vehiculo.marca,
            auto.vehiculo.modelo,
            auto.vehiculo.version,
            auto.vehiculo.tipo,
            auto.vehiculo.color,
            auto.vehiculo.combustible,
            auto.vehiculo.transmision,
            auto.vehiculo.traccion,
            auto.vehiculo.condicion,
            auto.ubicacion.ciudad,
            auto.ubicacion.departamento,
            auto.vendedor.tipo,
            auto.facilidad_repuestos_gt,
            ...searchAliases
        ].join(" "))
    };
}
const autos = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$catalog$2f$src$2f$cars$2e$json__$28$json$29$__["default"];
const searchableAutos = autos.map(toSearchableAuto);
function getAutoById(id) {
    const numericId = typeof id === "string" ? Number(id) : id;
    if (!Number.isFinite(numericId)) return undefined;
    return autos.find((auto)=>auto.id === numericId);
}
function getSearchableAutoById(id) {
    const numericId = typeof id === "string" ? Number(id) : id;
    if (!Number.isFinite(numericId)) return undefined;
    return searchableAutos.find((auto)=>auto.id === numericId);
}
function getCatalogFacets() {
    return {
        makes: [
            ...new Set(searchableAutos.map((auto)=>auto.make))
        ].sort(),
        fuels: [
            ...new Set(searchableAutos.map((auto)=>auto.fuel))
        ],
        transmissions: [
            ...new Set(searchableAutos.map((auto)=>auto.transmission))
        ],
        bodyTypes: [
            ...new Set(searchableAutos.map((auto)=>auto.bodyType))
        ]
    };
}
function toDisplayFuel(fuel) {
    return ({
        gasoline: "Gasolina",
        diesel: "Diesel",
        hybrid: "Hibrido",
        electric: "Electrico"
    })[fuel];
}
function toDisplayTransmission(transmission) {
    return ({
        automatic: "Automatica",
        manual: "Mecanica",
        cvt: "CVT"
    })[transmission];
}
function toDisplayBodyType(bodyType) {
    return ({
        sedan: "Sedan",
        suv: "SUV",
        pickup: "Pickup",
        hatchback: "Hatchback"
    })[bodyType];
}
function normalizeSearchText(value) {
    return normalizeText(value);
}
}),
"[project]/packages/search-core/src/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyFilters",
    ()=>applyFilters,
    "cosineSimilarity",
    ()=>cosineSimilarity,
    "mergeFilters",
    ()=>mergeFilters,
    "parseNaturalLanguageQuery",
    ()=>parseNaturalLanguageQuery,
    "rankCars",
    ()=>rankCars,
    "scoreLexicalMatch",
    ()=>scoreLexicalMatch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$catalog$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/catalog/src/index.ts [app-rsc] (ecmascript)");
;
const STOP_WORDS = new Set([
    "de",
    "del",
    "la",
    "el",
    "los",
    "las",
    "para",
    "con",
    "y",
    "o",
    "un",
    "una",
    "que"
]);
function tokenize(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$catalog$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeSearchText"])(value).split(/[^a-z0-9]+/).filter((token)=>token.length > 1 && !STOP_WORDS.has(token));
}
function detectPriceMax(query) {
    const patterns = [
        /menos de\s+(\d{4,6})/,
        /max(?:imo)?\s+(\d{4,6})/,
        /hasta\s+(\d{4,6})/,
        /under\s+(\d{4,6})/
    ];
    for (const pattern of patterns){
        const match = query.match(pattern);
        if (match) return Number(match[1]);
    }
    return undefined;
}
function detectPriceMin(query) {
    const patterns = [
        /desde\s+(\d{4,6})/,
        /arriba de\s+(\d{4,6})/,
        /above\s+(\d{4,6})/
    ];
    for (const pattern of patterns){
        const match = query.match(pattern);
        if (match) return Number(match[1]);
    }
    return undefined;
}
function detectYearMin(query) {
    const patterns = [
        /(\d{4})\+/,
        /desde\s+(20\d{2}|19\d{2})/,
        /after\s+(20\d{2}|19\d{2})/
    ];
    for (const pattern of patterns){
        const match = query.match(pattern);
        if (match) return Number(match[1]);
    }
    return undefined;
}
function detectMileageMax(query) {
    const patterns = [
        /menos de\s+(\d{2,6})\s*(?:km|kms|kilometros|kilómetros)/,
        /hasta\s+(\d{2,6})\s*(?:km|kms|kilometros|kilómetros)/,
        /under\s+(\d{2,6})\s*(?:km|miles)/
    ];
    for (const pattern of patterns){
        const match = query.match(pattern);
        if (match) return Number(match[1]);
    }
    return undefined;
}
function matchSynonym(query, entries) {
    for (const [key, values] of Object.entries(entries)){
        if (values.some((value)=>query.includes((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$catalog$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeSearchText"])(value)))) {
            return key;
        }
    }
    return undefined;
}
function detectMake(query, cars) {
    const makes = [
        ...new Set(cars.map((car)=>car.make))
    ];
    return makes.find((make)=>query.includes((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$catalog$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeSearchText"])(make)));
}
function detectLocation(query, cars) {
    const values = [
        ...new Set(cars.flatMap((car)=>[
                car.locationCity,
                car.locationDepartment
            ]).map((entry)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$catalog$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeSearchText"])(entry)))
    ];
    return values.find((value)=>query.includes(value));
}
function parseNaturalLanguageQuery(query, cars = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$catalog$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["searchableAutos"]) {
    const normalizedQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$catalog$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeSearchText"])(query);
    const inferredFilters = {
        make: detectMake(normalizedQuery, cars),
        fuel: matchSynonym(normalizedQuery, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$catalog$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fuelSynonyms"]),
        transmission: matchSynonym(normalizedQuery, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$catalog$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transmissionSynonyms"]),
        bodyType: matchSynonym(normalizedQuery, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$catalog$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bodyTypeSynonyms"]),
        traction: matchSynonym(normalizedQuery, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$catalog$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tractionSynonyms"]),
        priceMin: detectPriceMin(normalizedQuery),
        priceMax: detectPriceMax(normalizedQuery),
        yearMin: detectYearMin(normalizedQuery),
        mileageMax: detectMileageMax(normalizedQuery),
        location: detectLocation(normalizedQuery, cars),
        onlyDeals: normalizedQuery.includes("oferta") || normalizedQuery.includes("deal") || normalizedQuery.includes("mejor valor") || normalizedQuery.includes("verificado")
    };
    const residualTokens = tokenize(normalizedQuery).filter((token)=>{
        const values = Object.values(inferredFilters).filter(Boolean).map((entry)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$catalog$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeSearchText"])(String(entry)));
        return !values.some((value)=>value.includes(token) || token.includes(value));
    });
    return {
        rawQuery: query,
        normalizedQuery,
        residualQuery: residualTokens.join(" "),
        tokens: residualTokens,
        inferredFilters
    };
}
function mergeFilters(inferredFilters, manualFilters) {
    return {
        ...inferredFilters,
        ...manualFilters,
        q: manualFilters.q ?? inferredFilters.q
    };
}
function applyFilters(cars, filters) {
    return cars.filter((car)=>{
        if (filters.make && car.make !== filters.make) return false;
        if (filters.fuel && car.fuel !== filters.fuel) return false;
        if (filters.transmission && car.transmission !== filters.transmission) return false;
        if (filters.bodyType && car.bodyType !== filters.bodyType) return false;
        if (filters.traction && car.traction !== filters.traction) return false;
        if (typeof filters.priceMin === "number" && car.price < filters.priceMin) return false;
        if (typeof filters.priceMax === "number" && car.price > filters.priceMax) return false;
        if (typeof filters.yearMin === "number" && car.year < filters.yearMin) return false;
        if (typeof filters.yearMax === "number" && car.year > filters.yearMax) return false;
        if (typeof filters.mileageMax === "number" && car.mileage > filters.mileageMax) return false;
        if (filters.location) {
            const normalizedLocation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$catalog$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeSearchText"])(filters.location);
            const carLocation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$catalog$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeSearchText"])(`${car.locationCity} ${car.locationDepartment}`);
            if (!carLocation.includes(normalizedLocation)) return false;
        }
        if (filters.onlyDeals && !car.onlyDeal) return false;
        return true;
    });
}
function scoreLexicalMatch(car, parsedQuery) {
    if (!parsedQuery.normalizedQuery) return {
        score: 0,
        reasons: []
    };
    let score = 0;
    const reasons = [];
    if (parsedQuery.residualQuery && car.searchableText.includes(parsedQuery.residualQuery)) {
        score += 8;
        reasons.push("phrase");
    }
    for (const token of parsedQuery.tokens){
        if (`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$catalog$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeSearchText"])(car.make)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$catalog$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeSearchText"])(car.model)}`.includes(token)) {
            score += 4;
            reasons.push(`modelo:${token}`);
            continue;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$catalog$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeSearchText"])(car.version).includes(token)) {
            score += 3;
            reasons.push(`version:${token}`);
            continue;
        }
        if (car.searchableText.includes(token)) {
            score += 1.5;
            reasons.push(`texto:${token}`);
        }
    }
    return {
        score,
        reasons
    };
}
function cosineSimilarity(left, right) {
    if (left.length === 0 || right.length === 0 || left.length !== right.length) return 0;
    let dotProduct = 0;
    let leftMagnitude = 0;
    let rightMagnitude = 0;
    for(let index = 0; index < left.length; index += 1){
        dotProduct += left[index] * right[index];
        leftMagnitude += left[index] * left[index];
        rightMagnitude += right[index] * right[index];
    }
    if (leftMagnitude === 0 || rightMagnitude === 0) return 0;
    return dotProduct / (Math.sqrt(leftMagnitude) * Math.sqrt(rightMagnitude));
}
function rankCars({ cars, query, manualFilters, parsedQuery: parsedQueryOverride, semanticScores = new Map(), semanticWeight = 0.45 }) {
    const parsedQuery = parsedQueryOverride ?? parseNaturalLanguageQuery(query, cars);
    const appliedFilters = mergeFilters(parsedQuery.inferredFilters, manualFilters);
    const filteredCars = applyFilters(cars, appliedFilters);
    const results = filteredCars.map((car)=>{
        const lexical = scoreLexicalMatch(car, parsedQuery);
        const semanticScore = semanticScores.get(car.id) ?? 0;
        const score = lexical.score * (1 - semanticWeight) + semanticScore * 10 * semanticWeight;
        return {
            car: car.raw,
            score,
            lexicalScore: lexical.score,
            semanticScore,
            matchReasons: lexical.reasons
        };
    }).sort((left, right)=>right.score - left.score || right.car.vehiculo.anio - left.car.vehiculo.anio);
    return {
        query,
        inferredFilters: parsedQuery.inferredFilters,
        appliedFilters,
        total: results.length,
        results
    };
}
}),
"[project]/apps/web/src/lib/inventory.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "listAutos",
    ()=>listAutos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$catalog$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/catalog/src/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$search$2d$core$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/search-core/src/index.ts [app-rsc] (ecmascript)");
;
;
;
async function listAutos(filters) {
    const query = (filters.q ?? "").trim();
    if (query.length > 0) {
        const ranked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$search$2d$core$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rankCars"])({
            cars: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$catalog$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["searchableAutos"],
            query,
            manualFilters: filters
        });
        return ranked.results.map((r)=>r.car);
    }
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$search$2d$core$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["applyFilters"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$catalog$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["searchableAutos"], filters);
    return filtered.map((c)=>c.raw).sort((a, b)=>b.vehiculo.anio - a.vehiculo.anio || a.precio.monto - b.precio.monto);
}
}),
"[project]/apps/web/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$car$2f$car$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/car/car-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$car$2f$search$2d$hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/car/search-hero.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/inventory.ts [app-rsc] (ecmascript) <locals>");
;
;
;
;
;
;
const dynamic = "force-dynamic";
async function HomePage() {
    const autos = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["listAutos"])({});
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative overflow-hidden rounded-3xl border bg-card/60 p-8 shadow-sm ring-1 ring-foreground/10 sm:p-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_20%_10%,oklch(0.92_0.03_250),transparent_55%),radial-gradient(500px_circle_at_80%_0%,oklch(0.97_0_0),transparent_50%)]"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative grid gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-balance text-3xl font-semibold tracking-tight sm:text-4xl",
                                        children: "Find the right car, fast."
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 19,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "max-w-2xl text-pretty text-sm text-muted-foreground sm:text-base",
                                        children: "Search by make, model, budget, and key specs. Filter results and open a full vehicle view in one click."
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 22,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$car$2f$search$2d$hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SearchHero"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-3 sm:grid-cols-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border bg-background/70 p-4 ring-1 ring-foreground/5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-medium",
                                                children: "Transparent pricing"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 32,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 text-xs text-muted-foreground",
                                                children: "Clear totals and taxes estimate."
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 33,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 31,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border bg-background/70 p-4 ring-1 ring-foreground/5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-medium",
                                                children: "Real filters"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 38,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 text-xs text-muted-foreground",
                                                children: "Year, mileage, fuel, transmission."
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 39,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border bg-background/70 p-4 ring-1 ring-foreground/5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-medium",
                                                children: "Fast browsing"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 44,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 text-xs text-muted-foreground",
                                                children: "Save time with curated inventory."
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 45,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-semibold tracking-tight",
                                children: "Featured Cars"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Explore some of our top picks."
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
                        children: autos.slice(0, 3).map((car)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$car$2f$car$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CarCard"], {
                                car: car
                            }, car.id, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/cars",
                                children: "View All Cars"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/page.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__be5e1038._.js.map