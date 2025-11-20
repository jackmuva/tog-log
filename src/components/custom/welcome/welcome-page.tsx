"use server";

import { GithubSignIn } from "./github-sign-in";

export async function WelcomePage() {
	return (
		<div className="h-dvh w-dvw">
			Marketing Page
			<GithubSignIn />
		</div>
	)
}
