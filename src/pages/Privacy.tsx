import { Link } from "react-router-dom";
import { useEffect } from "react";

const Privacy = () => {
  useEffect(() => {
    // Add a temporary meta robots noindex for this page while mounted
    let meta: HTMLMetaElement | null = document.querySelector('meta[name="robots"]');
    const created = !meta;
    if (created) {
      meta = document.createElement('meta');
      meta.name = 'robots';
      document.head.appendChild(meta);
    }
    const prev = meta.getAttribute('content');
    meta.setAttribute('content', 'noindex');
    return () => {
      if (!meta) return;
      if (prev !== null) meta.setAttribute('content', prev);
      else if (created && meta.parentNode) meta.parentNode.removeChild(meta);
    };
  }, []);
  return (
    <section className="py-section bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-6">
          <Link to="/" className="text-primary-hover hover:underline">← Back to home</Link>
        </div>
        <h1 className="text-display font-serif font-semibold text-primary mb-6">Privacy Policy</h1>
        <p className="mb-4 text-muted-foreground">Effective date: October 2025</p>

        <h2 className="font-semibold mt-6 mb-2">Introduction</h2>
        <p className="text-foreground mb-4">
          Sena Strategy ("we", "our", "us") is committed to protecting the privacy and security of the personal information we collect from clients, website visitors and other stakeholders. This Privacy Policy explains what information we collect, why we collect it, and how we use and share it.
        </p>

        <h2 className="font-semibold mt-6 mb-2">Information We Collect</h2>
        <ul className="list-disc pl-6 mb-4 text-foreground">
          <li>Contact information (name, email, phone) you provide when contacting us.</li>
          <li>Company and role information supplied in proposals or inquiries.</li>
          <li>Usage data collected automatically when you visit our website (IP address, browser, pages visited).</li>
        </ul>

        <h2 className="font-semibold mt-6 mb-2">How We Use Information</h2>
        <p className="text-foreground mb-4">
          We use personal information to respond to enquiries, provide our services, assess suitability and manage our relationship with clients. We may also use aggregated or anonymised information for research and improvement of our services.
        </p>

        <h2 className="font-semibold mt-6 mb-2">Legal Basis</h2>
        <p className="text-foreground mb-4">Where applicable, we rely on legitimate interests, contractual necessity, or consent as the lawful basis for processing personal data.</p>

        <h2 className="font-semibold mt-6 mb-2">Sharing and Disclosure</h2>
        <p className="text-foreground mb-4">
          We do not sell personal data. We may share information with service providers who support our operations (e.g., hosting, analytics, payment processors) consistent with this policy and subject to confidentiality agreements.
        </p>

        <h2 className="font-semibold mt-6 mb-2">Data Security and Retention</h2>
        <p className="text-foreground mb-4">
          We maintain administrative and technical safeguards to protect data. We retain personal data only for as long as necessary to fulfil the purposes described in this policy and as required by law.
        </p>

        <h2 className="font-semibold mt-6 mb-2">Your Rights</h2>
        <p className="text-foreground mb-4">
          Depending on your jurisdiction, you may have rights to access, rectify, or delete your personal information and to restrict or object to certain processing. To exercise these rights, please contact us at contact@senastrategy.ai.
        </p>

        <h2 className="font-semibold mt-6 mb-2">GDPR and UK/EU Specifics</h2>
        <p className="text-foreground mb-4">
          If you are a resident of the European Union or United Kingdom, the following additional provisions apply:
        </p>
        <h3 className="font-semibold mt-4 mb-1">Lawful Bases</h3>
        <p className="text-foreground mb-4">
          We process personal data where we have a lawful basis to do so, including (i) to perform a contract with you or your organisation, (ii) to comply with legal obligations, (iii) where processing is necessary for our legitimate interests (for example, to provide and improve our services), and (iv) where you have given consent.
        </p>

        <h3 className="font-semibold mt-4 mb-1">Data Subject Rights</h3>
        <p className="text-foreground mb-4">
          Data subjects have the right to access their personal data, request rectification or erasure, request restriction of processing, object to processing, and request data portability. You may also withdraw consent at any time where processing is based on consent.
        </p>

        <h3 className="font-semibold mt-4 mb-1">International Transfers</h3>
        <p className="text-foreground mb-4">
          Where personal data is transferred outside the EEA or UK, we will ensure appropriate safeguards are in place such as standard contractual clauses, and only transfer data where permitted by applicable law.
        </p>

        <h3 className="font-semibold mt-4 mb-1">Supervisory Authority</h3>
        <p className="text-foreground mb-4">
          If you are in the EU or UK and believe we have unlawfully processed your personal data, you have the right to lodge a complaint with the relevant supervisory authority in your jurisdiction.
        </p>

        <h2 className="font-semibold mt-6 mb-2">Contact</h2>
  <p className="text-foreground">For privacy questions or to exercise your rights, please contact us at contact@senastrategy.ai.</p>
      </div>
    </section>
  );
};

export default Privacy;
