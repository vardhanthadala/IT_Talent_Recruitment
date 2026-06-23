import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: "Contact Us | Sreehisoft Solutions",
    description: "Get in touch with Sreehisoft Solutions for your IT staffing, recruitment, and technology service needs.",
};

export default function ContactPage() {
    return <ContactClient />;
}
