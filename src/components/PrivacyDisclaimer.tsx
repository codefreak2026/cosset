import Link from "next/link";
export default function PrivacyDisclaimer() {
  return (
    <section id="legal" className="py-16 md:py-20 bg-white border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p className="section-tag mb-3">Legal</p>
        <Link className="hover:underline hover:opacity-75 font-serif text-4xl font-bold" href={"/privacy-policies"} target="_blank" rel="noopener noreferrer">Privacy & Disclaimer</Link>

        <div className="space-y-8 mt-8 text-stone-600 leading-relaxed">
          <div>
            <h3 className="font-semibold text-stone-800 mb-2">"Your Privacy, Carefully Curated"</h3>
            <p>
              At Cosset Spaces, we value the trust you place in us as much as the spaces we design. When you share your information—whether through a consultation request or a project brief—we treat it with the same discretion and care as a private sanctuary. We collect only what is necessary to enhance your experience, such as contact details and project aspirations, to provide a more personalized and 'cosseted' service. Your data is never sold or traded; it is used exclusively to facilitate our architectural services, process your requests, and keep you informed of our latest innovations. We implement industry-standard security measures to safeguard your personal details from unauthorized access, ensuring your digital peace of mind is never compromised. 
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-stone-800 mb-2">Important</h3>
            <p>
              The content provided on the Cosset Spaces website—including project imagery, 3D renderings, and design descriptions—is for illustrative and informational purposes only. While we strive for absolute accuracy, these materials represent an artistic impression and do not constitute a final warranty, guarantee, or a formal contract of any kind. Actual project deliverables may vary based on site conditions, regulatory approvals, and evolving design refinements. By using this site, you acknowledge that Cosset Spaces is not liable for any decisions made based solely on this general information. Professional architectural advice should always be sought through a formal, signed agreement with our studio before commencing any structural work. We reserve the right to update our portfolio and policies at any time without prior notice.
            </p>
          </div>

          {/* <div>
            <h3 className="font-semibold text-stone-800 mb-2">Terms & Conditions</h3>
            <p>
              Use of this website implies acceptance of these terms. All intellectual property in the designs,
              branding, and content belongs to the studio. Unauthorized use or reproduction is prohibited.
              We reserve the right to update these policies at any time; continued use after changes
              constitutes acceptance.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
