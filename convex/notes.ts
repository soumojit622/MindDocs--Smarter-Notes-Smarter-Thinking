import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const saveNotes = mutation({
    args: {
        fileId: v.string(),
        notes: v.string(),
        createdBy: v.string(),
    },
    handler: async (ctx, args) => {
        const records = await ctx.db
            .query("notes")
            .filter((v) => v.eq(v.field("fileId"), args.fileId))
            .collect();

        if (records.length == 0) {
            await ctx.db.insert("notes", {
                fileId: args.fileId,
                notes: args.notes,
                createdBy: args.createdBy,
            });
        } else {
            await ctx.db.patch(records[0]._id, {
                notes: args.notes,
            });
        }

        return "notes saved";
    },
});

export const getNotes = query({
    args: {
        fileId: v.string(),
    },
    handler: async (ctx, args) => {
        const result = await ctx.db
            .query("notes")
            .filter((v) => v.eq(v.field("fileId"), args.fileId))
            .collect();

        return result[0]?.notes;
    },
});