import type { PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ locals }) => {
  if (!locals.user) {
    return redirect(307, "/sign-in");
  }

  return {
    user: locals.user,
  };
};
