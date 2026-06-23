import { Metadata } from "next";
import Career2Client from "./Career2Client";

export const metadata: Metadata = {
    title: "Open Opportunities | Rolva Tech",
    description: "Explore career opportunities that empower you to shape your future.",
};

export default function Career2Page() {
    return <Career2Client />;
}
