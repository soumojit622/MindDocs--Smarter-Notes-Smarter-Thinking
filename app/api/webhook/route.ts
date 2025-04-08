import crypto from "crypto";
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";

export async function POST(req: Request) {
    try {
        const clonedReq = req.clone();
        const eventType = req.headers.get("X-Event-Name");
        const body = await req.json();

        const secret = process.env.WEBHOOK_SECRET!;
        const hmac = crypto.createHmac("sha256", secret);
        const digest = Buffer.from(
            hmac.update(await clonedReq.text()).digest("hex"),
            "utf8"
        );
        const signature = Buffer.from(req.headers.get("X-Signature") || "", "utf8");

        if (!crypto.timingSafeEqual(digest, signature)) {
            throw new Error("Invalid signature.");
        }

        console.log(body);

        if (eventType === "order_created") {
            const userEmail = body.meta.custom_data.email;
            const isSuccessful = body.data.attributes.status === "paid";
            console.log(userEmail, isSuccessful);
            if (isSuccessful) {
                const result = await fetchMutation(api.user.updateUserPlan, {
                    email: userEmail,
                });
                console.log(result);
            }
        }

        return new Response(JSON.stringify({ message: "Webhook received" }), {
            status: 200,
        });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ message: "Server error" }), {
            status: 500,
        });
    }
}