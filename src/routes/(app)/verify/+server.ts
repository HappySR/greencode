import type { RequestHandler } from "./$types";
import { redirect } from "@sveltejs/kit";

export const POST: RequestHandler = async () => {
  return redirect(307, "/sign-in");
};
