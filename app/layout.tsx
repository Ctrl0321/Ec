import type { Metadata } from "next";
import "./globals.css";
import { Shell } from "../components/ec-ui";
export const metadata: Metadata = {title: "EC Markets — UI Preview", description: "Responsive trading website design preview. Not an official broker website.", robots:{index:false,follow:false}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Shell>{children}</Shell></body></html>}
