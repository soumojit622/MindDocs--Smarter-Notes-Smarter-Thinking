import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createUser = mutation({
    args: {
        email: v.string(),
        userName: v.string(),
        imageUrl: v.string(),
    },
    handler: async (ctx, args) => {
        const user = await ctx.db
            .query("users")
            .filter((v) => v.eq(v.field("email"), args.email))
            .collect();

        if (user?.length === 0) {
            await ctx.db.insert("users", {
                email: args.email,
                userName: args.userName,
                imageUrl: args.imageUrl,
                plan: "free",
            });

            return "User created successfully";
        }

        return "User already exists";
    },
});

export const updateUserPlan = mutation({
    args: {
        email: v.string(),
    },
    handler: async (ctx, args) => {
        const existingUser = await ctx.db
            .query("users")
            .filter((q) => q.eq(q.field("email"), args.email))
            .unique();

        if (!existingUser) {
            return "user not found";
        }

        await ctx.db.patch(existingUser._id, {
            plan: "unlimited",
        });
        return "user plan updated successfully";
    },
});

export const fetchUserPlan = query({
    args: {
        email: v.string(),
    },
    handler: async (ctx, args) => {
        const userData = await ctx.db
            .query("users")
            .filter((q) => q.eq(q.field("email"), args.email))
            .unique();

        return userData?.plan;
    },
});