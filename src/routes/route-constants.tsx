export const Paths = {
    email: "/",
    currencySelection: "/currency",
} as const;

export const RouteDetails = {
    [Paths.email]: {
        title: "Email verification",
    },
    [Paths.currencySelection]: {
        title: "Currency selection",
    },
} as const;
