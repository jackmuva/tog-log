"use client";

import { User } from "@/db/schema";

export const TogglePage = ({
	user
}: {
	user: {
		id: string;
		createdAt: Date;
		updatedAt: Date;
		email: string;
		emailVerified: boolean;
		name: string;
		image?: string | null | undefined | undefined;
	}
}) => {
	return (
		<div className="h-dvh w-dvw">
			Real Page
		</div>
	);

}
