import axios from "axios";

const apiKey = process.env.PAYMENT_API_KEY;
if (!apiKey) {
    throw new Error("PAYMENT_API_KEY not defined");
}

export const lemonsqueezyPayInstance = axios.create({
    baseURL: "https://api.lemonsqueezy.com/v1",
    headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
        Authorization: `Bearer ${apiKey}`,
    },
});
