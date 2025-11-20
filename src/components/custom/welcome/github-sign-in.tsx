"use client";

import { Button } from "@/components/ui/button";
import { signInGithub } from "@/lib/auth-client";
import { GithubIcon } from "lucide-react";
import Image from "next/image";

export const GithubSignIn = () => {
	return (
		<Button onClick={() => signInGithub()}>
			<GithubIcon />
			Sign In
		</Button>
	);
}
