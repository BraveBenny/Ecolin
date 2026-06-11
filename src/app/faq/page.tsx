import { Metadata } from 'next';
import Link from 'next/link';
import { FAQAccordion, FAQAccordionItem } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Everything you need to know about Ecolin's breathable muslin garment protection, sweater care, essential oil moth deterrence, and orders.",
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: "FAQ | Ecolin",
    description: "Everything you need to know about Ecolin's breathable muslin garment protection, sweater care, and essential oil moth deterrence.",
    url: "https://ecolin.ca/faq",
    type: "website",
  }
};

export default function FAQPage() {
  // JSON-LD Schema data reflecting the actual Q&As
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Ecolin and what do you make?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ecolin is a premium garment care brand built around one belief: your valued clothing deserves better than a plastic bag. We make two products, the Signature Garment Muslin Bag for hanging garments (suits, coats, dresses) and the Signature Sweater Muslin Bag for folded knitwear (cashmere, wool, merino). Both are made from 100% unbleached, acid-free muslin and designed to replace synthetic and plastic storage permanently, not just seasonally."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Ecolin different from other garment bags on the market?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most garment bags are made from polyester, nylon, or plastic materials that trap moisture, restrict airflow, and introduce chemicals that silently degrade natural fibers over time. Ecolin bags are built from 100% breathable muslin, the same tight-weave natural cotton used to protect fine textiles for centuries. Every design decision reinforces this: acid-free construction, zero bleach or harsh chemicals, and piping specifically designed for absorbing cedar or lavender essential oils, a feature no other garment bag on the market offers. Simply apply a few drops to the piping and your bag becomes an active, chemical-free moth deterrent."
        }
      },
      {
        "@type": "Question",
        "name": "What is muslin and why does Ecolin use it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Muslin is a tightly-woven, unbleached cotton fabric with a long history in textile preservation. Its tight weave creates a natural barrier against dust, light, and insects — while its open fiber structure allows garments to breathe, preventing the moisture and humidity build-up that damages clothing in long-term storage. It is particularly well-suited to natural fibers like wool, cashmere, silk, and linen — fabrics that react poorly to the trapped gases and chemicals released by plastic bags. Muslin doesn't off-gas, doesn't transfer chemicals, and doesn't create the damp microclimate that causes yellowing, mildew, and fiber degradation."
        }
      },
      {
        "@type": "Question",
        "name": "What is the essential oil piping and how does it work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The piping is one of Ecolin's most distinctive design features and something you won't find on any other garment bag. Running along the edges of the bag, it is specifically designed for absorbing essential oils that you apply yourself. Simply apply a few drops of cedar or lavender essential oil directly onto the piping. It will absorb the oil and release it gradually over several weeks, turning the bag into an active, natural moth and pest deterrent without chemicals, sprays, or mothballs."
        }
      }
    ]
  };

  return (
    <main className="flex flex-col min-h-screen bg-[#FAF9F6] text-gray-900 font-sans selection:bg-[#A98E5D] selection:text-white relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Subtle snow noise texture matching the home page */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'
        }}>
      </div>

      {/* 1. Compact Hero */}
      <section className="relative w-full pt-32 pb-16 lg:pt-28 lg:pb-10 px-6 sm:px-12 md:px-24 bg-gradient-to-b from-[#EAE4D9]/30 to-transparent">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-[#A98E5D] uppercase tracking-[0.25em] text-xs font-bold block">
            Frequently Asked Questions
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
            Everything you need to know about Ecolin
          </h1>
          <p className="text-gray-600 font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover how our breathable muslin bags protect your wardrobe. Below, we address common questions regarding our products, material selection, essential oil piping, order procedures, and wholesale details.
          </p>
        </div>
      </section>

      {/* 2. Quick Category Cards & Separator */}
      <section className="px-6 pb-12 lg:pb-24 w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          <a
            href="#about"
            className="group flex flex-col items-center justify-center p-6 lg:p-10 lg:min-h-[160px] bg-white border border-[#A98E5D]/15 hover:border-[#8C734B] rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#A98E5D]/10"
          >
            <span className="font-serif text-xs lg:text-sm text-[#A98E5D] tracking-widest mb-1.5 lg:mb-3 transition-transform duration-300 group-hover:scale-110">01</span>
            <span className="font-serif text-sm lg:text-base text-gray-900 group-hover:text-[#8C734B] transition-colors duration-300 text-center">About Ecolin</span>
          </a>
          <a
            href="#materials"
            className="group flex flex-col items-center justify-center p-6 lg:p-10 lg:min-h-[160px] bg-white border border-[#A98E5D]/15 hover:border-[#8C734B] rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#A98E5D]/10"
          >
            <span className="font-serif text-xs lg:text-sm text-[#A98E5D] tracking-widest mb-1.5 lg:mb-3 transition-transform duration-300 group-hover:scale-110">02</span>
            <span className="font-serif text-sm lg:text-base text-gray-900 group-hover:text-[#8C734B] transition-colors duration-300 text-center">Materials & Design</span>
          </a>
          <a
            href="#using"
            className="group flex flex-col items-center justify-center p-6 lg:p-10 lg:min-h-[160px] bg-white border border-[#A98E5D]/15 hover:border-[#8C734B] rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#A98E5D]/10"
          >
            <span className="font-serif text-xs lg:text-sm text-[#A98E5D] tracking-widest mb-1.5 lg:mb-3 transition-transform duration-300 group-hover:scale-110">03</span>
            <span className="font-serif text-sm lg:text-base text-gray-900 group-hover:text-[#8C734B] transition-colors duration-300 text-center">Using Your Bag</span>
          </a>
          <a
            href="#orders"
            className="group flex flex-col items-center justify-center p-6 lg:p-10 lg:min-h-[160px] bg-white border border-[#A98E5D]/15 hover:border-[#8C734B] rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#A98E5D]/10"
          >
            <span className="font-serif text-xs lg:text-sm text-[#A98E5D] tracking-widest mb-1.5 lg:mb-3 transition-transform duration-300 group-hover:scale-110">04</span>
            <span className="font-serif text-sm lg:text-base text-gray-900 group-hover:text-[#8C734B] transition-colors duration-300 text-center">Orders & Returns</span>
          </a>
        </div>
        
        {/* Elegant Separator */}
        <div className="hidden lg:flex justify-center mt-24 w-full">
          <div className="w-16 h-px bg-[#A98E5D]/40"></div>
        </div>
      </section>

      {/* 3. FAQ Sections */}
      <section className="py-12 lg:pt-32 lg:pb-24 px-6 sm:px-12 md:px-24 w-full max-w-5xl mx-auto space-y-20">
        
        {/* Section 1: About Ecolin & Our Products */}
        <div id="about" className="scroll-mt-24 pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <span className="font-serif text-xs text-[#A98E5D] uppercase tracking-widest block mb-2">01</span>
              <h2 className="text-2xl font-serif text-gray-900 tracking-tight">About Ecolin &amp; Our Products</h2>
              <div className="w-8 h-px bg-[#A98E5D] mt-4 opacity-50"></div>
            </div>
            <div className="lg:col-span-8 bg-white border border-[#A98E5D]/10 px-6 md:px-8 py-4 rounded-sm shadow-sm">
              <FAQAccordion>
                <FAQAccordionItem question="What is Ecolin and what do you make?">
                  <p>
                    Ecolin is a premium garment care brand built around one belief: your valued clothing deserves better than a plastic bag. We make two products, the Signature Garment Muslin Bag for hanging garments (suits, coats, dresses) and the Signature Sweater Muslin Bag for folded knitwear (cashmere, wool, merino).
                  </p>
                  <p>
                    Both are made from 100% unbleached, acid-free muslin and designed to replace synthetic and plastic storage permanently, not just seasonally.
                  </p>
                </FAQAccordionItem>

                <FAQAccordionItem question="What makes Ecolin different from other garment bags on the market?">
                  <p>
                    Most garment bags are made from polyester, nylon, or plastic materials that trap moisture, restrict airflow, and introduce chemicals that silently degrade natural fibers over time.
                  </p>
                  <p>
                    Ecolin bags are built from 100% breathable muslin, the same tight-weave natural cotton used to protect fine textiles for centuries. Every design decision reinforces this: acid-free construction, zero bleach or harsh chemicals, and piping specifically designed for absorbing cedar or lavender essential oils, a feature no other garment bag on the market offers. Simply apply a few drops to the piping and your bag becomes an active, chemical-free moth deterrent.
                  </p>
                </FAQAccordionItem>

                <FAQAccordionItem question="What products does Ecolin offer?">
                  <p>We currently offer two products in the Signature Collection:</p>
                  <ul className="space-y-3 pl-4 list-disc text-gray-600">
                    <li>
                      <span className="font-medium text-gray-900">Signature Garment Muslin Bag — $18.99.</span> Hanging bag for suits, coats, blazers, and dresses. Features an organza viewing window, piping designed to absorb essential oils, and natural moth deterrent construction. Dimensions: 40&quot; &times; 24&quot; &times; 4&quot; (101.6 &times; 61 &times; 10.2 cm)
                    </li>
                    <li>
                      <span className="font-medium text-gray-900">Signature Sweater Muslin Bag — $14.99.</span> Fold-flat bag for cashmere, wool, and knitwear. Generously sized to prevent fiber compression, with organza viewing window and essential oil piping. Dimensions: 15&quot; &times; 18&quot; &times; 3&quot; (38 &times; 45.7 &times; 7.6 cm)
                    </li>
                  </ul>
                  <p>Both are available individually and through our wholesale program for retailers.</p>
                </FAQAccordionItem>

                <FAQAccordionItem question="Where can I purchase Ecolin products?">
                  <p>
                    Ecolin products are available through our website at <a href="https://ecolin.ca" target="_blank" rel="noopener noreferrer" className="text-[#A98E5D] underline hover:text-[#8C734B] transition-colors">ecolin.ca</a>, with checkout securely processed via our partner store, Treasury Boxes. For wholesale and retail inquiries, visit our <Link href="/wholesale" className="text-[#A98E5D] underline hover:text-[#8C734B] transition-colors">Wholesale</Link> page or contact us directly.
                  </p>
                </FAQAccordionItem>
              </FAQAccordion>
            </div>
          </div>
        </div>

        {/* Section 2: Materials & Design */}
        <div id="materials" className="scroll-mt-24 pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <span className="font-serif text-xs text-[#A98E5D] uppercase tracking-widest block mb-2">02</span>
              <h2 className="text-2xl font-serif text-gray-900 tracking-tight">Materials &amp; Design</h2>
              <div className="w-8 h-px bg-[#A98E5D] mt-4 opacity-50"></div>
            </div>
            <div className="lg:col-span-8 bg-white border border-[#A98E5D]/10 px-6 md:px-8 py-4 rounded-sm shadow-sm">
              <FAQAccordion>
                <FAQAccordionItem question="What is muslin and why does Ecolin use it?">
                  <p>
                    Muslin is a tightly-woven, unbleached cotton fabric with a long history in textile preservation. Its tight weave creates a natural barrier against dust, light, and insects — while its open fiber structure allows garments to breathe, preventing the moisture and humidity build-up that damages clothing in long-term storage.
                  </p>
                  <p>
                    It is particularly well-suited to natural fibers like wool, cashmere, silk, and linen — fabrics that react poorly to the trapped gases and chemicals released by plastic bags. Muslin doesn&apos;t off-gas, doesn&apos;t transfer chemicals, and doesn&apos;t create the damp microclimate that causes yellowing, mildew, and fiber degradation.
                  </p>
                  <div className="border-l-2 border-[#A98E5D]/30 pl-4 py-1 italic text-gray-500 text-[14px]">
                    Note: Muslin has been used in professional textile storage for decades. It&apos;s not a new material, it&apos;s the right one.
                  </div>
                </FAQAccordionItem>

                <FAQAccordionItem question="What does &quot;acid-free&quot; mean and why does it matter for my clothes?">
                  <p>
                    Acid-free means that no bleaches, harsh chemicals, or acidic compounds were used in the production of the fabric. This matters because acidic environments accelerate fabric breakdown, particularly in delicate natural fibers. Over time, exposure to acidic materials causes fibers to weaken, fabrics to yellow, and colors to fade or shift.
                  </p>
                  <p>
                    Ecolin&apos;s muslin is unbleached and chemically neutral, creating a truly inert protective environment for your garments. This is especially important for heirloom pieces, wedding dresses, tailored suits, and investment-grade outerwear where long-term preservation is the goal.
                  </p>
                </FAQAccordionItem>

                <FAQAccordionItem question="What is the essential oil piping and how does it work?">
                  <p>
                    The piping is one of Ecolin&apos;s most distinctive design features and something you won&apos;t find on any other garment bag. Running along the edges of the bag, it is specifically designed for absorbing essential oils that you apply yourself.
                  </p>
                  <p>
                    Simply apply a few drops of cedar or lavender essential oil directly onto the piping. It will absorb the oil and release it gradually over several weeks, turning the bag into an active, natural moth and pest deterrent without chemicals, sprays, or mothballs.
                  </p>
                  <p>
                    Cedar oil is a proven natural moth repellent. Lavender oil provides a gentler aromatic deterrent and leaves garments subtly scented. You choose the oil, the piping does the rest.
                  </p>
                  <div className="border-l-2 border-[#A98E5D]/30 pl-4 py-1 italic text-gray-500 text-[14px]">
                    Note: The piping also adds structural benefit: it helps the bag maintain its shape, keeping garments properly supported while stored.
                  </div>
                </FAQAccordionItem>

                <FAQAccordionItem question="What is the organza viewing window?">
                  <p>
                    Both Ecolin bags feature a sheer organza panel on the front face of the bag. This allows you to see exactly what&apos;s inside without unzipping, making daily closet navigation effortless, especially when rotating between seasonal pieces or storing multiple garments of similar style.
                  </p>
                  <p>
                    The organza is lightweight and transparent but structurally integrated into the bag. When washing the bag, avoid direct ironing contact with the organza panel.
                  </p>
                </FAQAccordionItem>

                <FAQAccordionItem question="Why is breathability so important for garment storage?">
                  <p>
                    Clothing is made from living fibers, natural materials like wool, cashmere, and cotton need to breathe to maintain their structural integrity over time. When sealed in non-breathable plastic, moisture from ambient air (and residual moisture in the fabric itself) has nowhere to go.
                  </p>
                  <p>
                    The result is a closed, humid microclimate that promotes:
                  </p>
                  <ul className="space-y-2 pl-4 list-disc text-gray-600">
                    <li>Mildew and musty odor development</li>
                    <li>Fiber weakening and brittleness</li>
                    <li>Yellowing and dye transfer</li>
                    <li>Accelerated deterioration in temperature-fluctuating environments (attics, storage units)</li>
                  </ul>
                  <p>
                    Muslin&apos;s breathable weave allows gentle air circulation, keeping the internal environment stable, dry, and clean without exposing garments to open-air dust or pests.
                  </p>
                </FAQAccordionItem>
              </FAQAccordion>
            </div>
          </div>
        </div>

        {/* Section 3: Using Your Ecolin Bag */}
        <div id="using" className="scroll-mt-24 pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <span className="font-serif text-xs text-[#A98E5D] uppercase tracking-widest block mb-2">03</span>
              <h2 className="text-2xl font-serif text-gray-900 tracking-tight">Using Your Ecolin Bag</h2>
              <div className="w-8 h-px bg-[#A98E5D] mt-4 opacity-50"></div>
            </div>
            <div className="lg:col-span-8 bg-white border border-[#A98E5D]/10 px-6 md:px-8 py-4 rounded-sm shadow-sm">
              <FAQAccordion>
                <FAQAccordionItem question="What garments belong in the Signature Garment Bag?">
                  <p>The Garment Bag (40&quot; &times; 24&quot; &times; 4&quot;) is designed for hanging garments, including:</p>
                  <ul className="space-y-3 pl-4 list-disc text-gray-600">
                    <li>
                      <span className="font-medium text-gray-900">Suits and blazers</span> — preserves shoulder structure and prevents dust accumulation on lapels
                    </li>
                    <li>
                      <span className="font-medium text-gray-900">Wool and cashmere coats</span> — breathable moth protection for high-value outerwear
                    </li>
                    <li>
                      <span className="font-medium text-gray-900">Dresses and formalwear</span> — protects delicate fabrics from light, snags, and contact transfer
                    </li>
                    <li>
                      <span className="font-medium text-gray-900">Tailored trousers and shirts</span> — maintains press and shape between wears
                    </li>
                    <li>
                      <span className="font-medium text-gray-900">Wedding gowns and special occasion pieces</span> — long-term heirloom preservation in an acid-free environment
                    </li>
                  </ul>
                </FAQAccordionItem>

                <FAQAccordionItem question="What belongs in the Signature Sweater Bag?">
                  <p>The Sweater Bag (15&quot; &times; 18&quot; &times; 3&quot;) is specifically dimensioned for folded knitwear storage, with generous depth to prevent fiber compression. Best suited for:</p>
                  <ul className="space-y-3 pl-4 list-disc text-gray-600">
                    <li>
                      <span className="font-medium text-gray-900">Cashmere and merino wool sweaters</span> — the most vulnerable garments to moth damage and compression
                    </li>
                    <li>
                      <span className="font-medium text-gray-900">Chunky knits and winter jumpers</span> — sized for bulk without crushing natural loft
                    </li>
                    <li>
                      <span className="font-medium text-gray-900">Wool blankets and throws (folded)</span>
                    </li>
                    <li>
                      <span className="font-medium text-gray-900">Fine cotton and linen knits</span> for seasonal storage
                    </li>
                  </ul>
                  <div className="border-l-2 border-[#A98E5D]/30 pl-4 py-1 italic text-gray-500 text-[14px]">
                    Note: Knitwear should always be folded and stored flat, never hung. Hanging stretches fibers and permanently distorts the shoulder and body shape of knits.
                  </div>
                </FAQAccordionItem>

                <FAQAccordionItem question="How do I hang a suit or coat inside the Garment Bag?">
                  <p>
                    Use a broad, contoured hanger that matches the width of the garment&apos;s shoulders — this prevents shoulder distortion during storage. Thread the hanger hook through the top opening of the bag, then zip up from the bottom. The structured piping helps the bag maintain its form around the garment.
                  </p>
                  <p>
                    For suits: hang the jacket on the contoured hanger and drape the trousers over the bar. Both pieces can be stored in the same bag.
                  </p>
                </FAQAccordionItem>

                <FAQAccordionItem question="How do I store a long dress or gown?">
                  <ol className="space-y-3 pl-4 list-decimal text-gray-600">
                    <li>Lay the open Garment Bag flat on a clean surface</li>
                    <li>Place the dress on a hanger and insert the hook through the top opening</li>
                    <li>Fold the sides of the dress inward toward the waistline</li>
                    <li>Gently roll the hem or train upward from the bottom, keeping the folds in place</li>
                    <li>Tuck the rolled train into the base of the bag</li>
                    <li>Zip slowly from the bottom, guiding the zipper away from the fabric with one finger</li>
                  </ol>
                  <div className="border-l-2 border-[#A98E5D]/30 pl-4 py-1 italic text-gray-500 text-[14px]">
                    Note: Always store clean, fully dry garments. Residual moisture or body oils significantly accelerate fiber deterioration during storage.
                  </div>
                </FAQAccordionItem>

                <FAQAccordionItem question="How do I apply essential oils to the piping?">
                  <p>
                    Apply 3–5 drops of pure cedar or lavender essential oil directly onto the piping, distributed evenly along its length. The piping will absorb the oil and release it gradually over several weeks.
                  </p>
                  <p>
                    Refresh the application when the scent begins to fade, typically every 4–8 weeks depending on the environment. Avoid applying oil directly to the muslin body of the bag or to the garment itself.
                  </p>
                  <p>
                    Use only pure essential oils, not synthetic fragrance oils, which may contain compounds that could transfer to fabric.
                  </p>
                </FAQAccordionItem>

                <FAQAccordionItem question="How do I wash and care for my Ecolin bag?">
                  <ol className="space-y-3 pl-4 list-decimal text-gray-600">
                    <li>Remove the zip-pull and turn the bag inside out</li>
                    <li>Machine wash on a cold, gentle cycle with a mild, fragrance-free detergent</li>
                    <li>Shake the bag after the wash cycle to reduce creasing</li>
                    <li>Hang to air dry, do not tumble dry, as heat may shrink the muslin</li>
                    <li>If needed, iron on a low heat setting — avoid the organza panel entirely</li>
                  </ol>
                  <p>
                    We recommend washing your bags once per season, or whenever reapplying essential oils to the piping.
                  </p>
                </FAQAccordionItem>

                <FAQAccordionItem question="Does the bag prevent clothes from wrinkling?">
                  <p>
                    Yes — for hanging garments, the vertical storage position prevents the compression creasing that comes from folding. The structured piping adds rigidity to the bag itself, which helps heavier garments like wool coats maintain their shape without collapsing inward against themselves.
                  </p>
                  <p>
                    For the Sweater Bag, the generous depth (3&quot;) is specifically designed to give folded knitwear room to breathe without the compressive pressure of an undersized bag — which is a primary cause of permanent fabric flattening.
                  </p>
                </FAQAccordionItem>
              </FAQAccordion>
            </div>
          </div>
        </div>

        {/* Section 4: Orders, Shipping & Returns */}
        <div id="orders" className="scroll-mt-24 pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <span className="font-serif text-xs text-[#A98E5D] uppercase tracking-widest block mb-2">04</span>
              <h2 className="text-2xl font-serif text-gray-900 tracking-tight">Orders &amp; Returns</h2>
              <div className="w-8 h-px bg-[#A98E5D] mt-4 opacity-50"></div>
            </div>
            <div className="lg:col-span-8 bg-white border border-[#A98E5D]/10 px-6 md:px-8 py-4 rounded-sm shadow-sm">
              <FAQAccordion>
                <FAQAccordionItem question="How do I place an order?">
                  <p>
                    Orders are placed through ecolin.ca and completed securely via our partner store, Treasury Boxes. Select your products, proceed to checkout, and your order will be processed and shipped directly to you.
                  </p>
                </FAQAccordionItem>

                <FAQAccordionItem question="Do you offer wholesale pricing for retailers?">
                  <p>
                    Yes — Ecolin has a dedicated wholesale program for retailers, boutiques, and large-volume buyers. Visit the <Link href="/wholesale" className="text-[#A98E5D] underline hover:text-[#8C734B] transition-colors">Wholesale</Link> page on our site or contact us directly to discuss pricing, minimum order quantities, and terms. We work with buyers across home goods, fashion retail, and gift categories.
                  </p>
                </FAQAccordionItem>

                <FAQAccordionItem question="What is your return policy?">
                  <p>
                    We stand behind our products. If you&apos;re not satisfied with your Ecolin purchase, contact us within 30 days of delivery and we&apos;ll make it right — whether that&apos;s a replacement, a refund, or a solution specific to your situation. Items should be unused and in original condition for a full refund to be processed.
                  </p>
                </FAQAccordionItem>

                <FAQAccordionItem question="I have a question that isn&apos;t answered here — how do I reach you?">
                  <p>
                    Use the <Link href="/contact" className="text-[#A98E5D] underline hover:text-[#8C734B] transition-colors">Contact page</Link> on ecolin.ca and we&apos;ll get back to you promptly. Whether it&apos;s a product question, a wholesale inquiry, or feedback, we read every message.
                  </p>
                </FAQAccordionItem>
              </FAQAccordion>
            </div>
          </div>
        </div>

      </section>

      {/* 4. Bottom CTA Section */}
      <section className="py-20 px-6 sm:px-12 md:px-24 bg-white border-t border-[#A98E5D]/15 mt-16 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight">
            Still deciding what your garments need?
          </h2>
          <p className="text-gray-600 font-light max-w-lg mx-auto leading-relaxed">
            Our collection is engineered to keep natural fibers pristine, preventing deterioration and moth damage cleanly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/products"
              className="inline-block w-full sm:w-auto bg-gray-900 text-white hover:bg-white hover:text-gray-900 border border-transparent hover:border-gray-900 px-8 py-4 uppercase tracking-widest text-xs font-bold transition-all duration-300 shadow-md shadow-gray-900/5"
            >
              Explore the Collection
            </Link>
            <Link
              href="/contact"
              className="inline-block w-full sm:w-auto bg-transparent text-gray-900 hover:bg-gray-900 hover:text-white border border-gray-900 px-8 py-4 uppercase tracking-widest text-xs font-bold transition-all duration-300"
            >
              Contact Ecolin
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
