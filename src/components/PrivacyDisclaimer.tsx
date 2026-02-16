export default function PrivacyDisclaimer() {
  return (
    <section id="legal" className="py-16 md:py-20 bg-white border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p className="section-tag mb-3">Legal</p>
        <h2 className="section-title mb-8">Privacy & Disclaimer</h2>

        <div className="space-y-8 text-stone-600 leading-relaxed">
          <div>
            <h3 className="font-semibold text-stone-800 mb-2">Privacy Policy</h3>
            <p>
              We respect your privacy. Any information you provide through our contact form or other channels
              will be used only to respond to your enquiries and improve our services. We do not sell or
              share your personal data with third parties. By using this website and submitting the contact
              form, you agree to our privacy practices as described here.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-stone-800 mb-2">Disclaimer</h3>
            <p>
              The content on this website is for general information only. While we strive to keep information
              accurate and up to date, we make no representations or warranties of any kind about the
              completeness or suitability of the content. Reliance on any information on this site is at your
              own risk. All designs, images, and project details are indicative and may vary as per site
              conditions and client requirements. For project-specific advice, please contact us directly.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-stone-800 mb-2">Terms & Conditions</h3>
            <p>
              Use of this website implies acceptance of these terms. All intellectual property in the designs,
              branding, and content belongs to the studio. Unauthorized use or reproduction is prohibited.
              We reserve the right to update these policies at any time; continued use after changes
              constitutes acceptance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
