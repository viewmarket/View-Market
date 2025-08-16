import "@styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "ViewMarket - Global Market Charting Platform | 60+ Brokers & 110+ AI Trading Tools",
	description: "ViewMarket is the world's leading global market charting platform with 60+ broker connections and 110+ AI-powered trading tools. Advanced technical analysis, real-time market data, and intelligent trading insights for traders worldwide.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
