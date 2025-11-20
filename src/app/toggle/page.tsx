"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { TogglePage } from "@/components/custom/toggle/toggle-page";

export default async function TogglePageServer() {
	const session = await auth.api.getSession({
		headers: await headers() // you need to pass the headers object.
	});
	if (!session) {
		redirect("/");
	} else {
		return (
			<TogglePage user={session.user} />
		);
	}
}
