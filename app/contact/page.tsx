import Header from "@/components/Header";
import ContactHero from "@/components/ContactHero";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/footer";

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            {/* Header Component */}
            <Header />

            {/* Contact Hero Banner */}
            <ContactHero />

            {/* Office Information Section */}
            <ContactInfo />

            {/* Contact Enquiry Form */}
            <ContactForm />

            {/* Footer Component */}
            <Footer />
        </main>
    );
}
