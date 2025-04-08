import { NextRequest, NextResponse } from "next/server";
import { lemonsqueezyPayInstance } from "@/lib/axios";

export async function POST(req: NextRequest) {
    const { email } = await req.json();

    try {
        const res = await lemonsqueezyPayInstance.post("/checkouts", {
            data: {
                type: "checkouts",
                attributes: {
                    checkout_data: {
                        email,
                    },
                    custom_price: 900, // in cents => $9
                    product_options: {
                        redirect_url: "https://your-site.com/thank-you", // Update this
                    },
                    variant_id: process.env.PRODUCT_ID, // 🟡 Replace with actual Variant ID
                },
            },
        });

        const url = res.data?.data?.attributes?.url;

        return NextResponse.json({ message: "success", url });
    } catch (error: any) {
        console.error("Checkout creation failed:", error.response?.data || error);
        return NextResponse.json(
            { message: "failed", error: error.response?.data },
            { status: 400 }
        );
    }
}
