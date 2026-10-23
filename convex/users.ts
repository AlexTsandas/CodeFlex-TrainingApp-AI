import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const syncUser = mutation({
  args: {
    email: v.string(),
    name: v.string(),
    image: v.optional(v.string()),
    clerk_id: v.string(),
  },
  handler: async (ctx, args) => {
    const existingUser = await ctx.db.query("users").filter((q) => q.eq(q.field("clerk_id"), args.clerk_id))
    .first();

    if (!existingUser) {
      await ctx.db.insert("users", args);
    }
  }
})

export const updateUser = mutation({
 args: {
   name: v.string(),
   email: v.string(),
   clerk_id: v.string(),
   image: v.optional(v.string()),
 },
 handler: async (ctx, args) => {
   const existingUser = await ctx.db.query("users").withIndex("by_clerk_id", q => q.eq("clerk_id", args.clerk_id))
   .first();

    if (!existingUser) return ;

    
    return await ctx.db.patch(existingUser._id, args);
   
    }
 })

