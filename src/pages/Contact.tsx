import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { Contact as ContactSection } from "@/components/sections/Contact";

export default function ContactPage() {
  useDocumentTitle(
    "Contact — Klyde",
    "Tell us about your project. We reply within one business day.",
  );
  return (
    <div className="pt-16">
      <ContactSection />
    </div>
  );
}
