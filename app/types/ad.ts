export type AdCategory = "shopping" | "pets" | "garden" | "repairs" | "babysitting" | "other";

export type Ad = {
    id: string;
    title: string;
    description: string;
    category: AdCategory;
};