import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ToglogSidebar } from "@/components/custom/toglog-sidebar";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<SidebarProvider>
			<ToglogSidebar />
			{children}
		</SidebarProvider>
	);
}
