"use server";
import { db } from "@/lib/db";

export default async function checkBlock(blockedUser, blokedBy) {
  const result = await db.query(
    `SELECT * FROM blocked_users WHERE blocked_user_id = $1 AND blocked_by_id = $2`,
    [blockedUser, blokedBy]
  );

  if (result.rows.length > 0) {
    // Block already exists
    return true;
  } else {
    // Block doesn't exist
    return false;
  }
}
