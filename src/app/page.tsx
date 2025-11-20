import { TogglePage } from "@/components/custom/toggle/toggle-page";
import { WelcomePage } from "@/components/custom/welcome/welcome-page";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Home() {
	const session = await auth.api.getSession({
		headers: await headers() // you need to pass the headers object.
	});
	console.log("session: ", session);

	if (!session) {
		return (
			<WelcomePage />
		);
	} else {
		return (
			<TogglePage user={session.user} />
		);
	}
}
