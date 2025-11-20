"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { User } from "@/db/schema";
import { ToglogSidebar } from "../toglog-sidebar";

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
			<SidebarTrigger />
			Real Page
		</div>
	);

}
