import Image from 'next/image';
import SignatureReveal from '@/components/effects/SignatureReveal';

export default function BrandSignatureSection() {
    return (
        <section className="relative py-32 md:py-48 px-6 lg:px-12 w-full bg-white overflow-hidden border-t border-[#EAE4D9]/30">
            <SignatureReveal>
                <div className="max-w-[105rem] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16 relative px-4">
                    
                    {/* Left Product: Garment Bag */}
                    <div className="w-full md:w-[38%] flex flex-col items-center group">
                        <div className="relative w-full aspect-[3/4] max-w-[400px] mb-12 overflow-hidden bg-[#FDFBF9]/80 rounded-sm opacity-0 translate-y-12 [.is-visible_&]:opacity-100 [.is-visible_&]:translate-y-0 transition-all duration-[2500ms] ease-[cubic-bezier(0.25,1,0.5,1)] delay-[1400ms] hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#A98E5D]/5">
                            <Image 
                                src="/images/product-suit-cover.png" 
                                alt="Garment Muslin Bag"
                                fill
                                className="object-contain p-8 transition-transform duration-[3000ms] ease-out group-hover:scale-[1.03]"
                            />
                        </div>
                        <div className="text-center w-full">
                            <h3 className="text-[#8C734B] uppercase tracking-[0.25em] text-[11px] font-bold mb-6 opacity-0 translate-y-2 [.is-visible_&]:opacity-100 [.is-visible_&]:translate-y-0 transition-all duration-[1500ms] ease-out delay-[2500ms]">
                                Garment Muslin Bag
                            </h3>
                            <ul className="space-y-3 font-light text-gray-600 text-[14px] px-4">
                                <li className="opacity-0 translate-y-2 [.is-visible_&]:opacity-100 [.is-visible_&]:translate-y-0 transition-all duration-[1500ms] ease-out delay-[2800ms]">Structured garment protection</li>
                                <li className="opacity-0 translate-y-2 [.is-visible_&]:opacity-100 [.is-visible_&]:translate-y-0 transition-all duration-[1500ms] ease-out delay-[3100ms]">Breathable natural storage</li>
                                <li className="opacity-0 translate-y-2 [.is-visible_&]:opacity-100 [.is-visible_&]:translate-y-0 transition-all duration-[1500ms] ease-out delay-[3400ms]">Designed for suits and coats</li>
                            </ul>
                        </div>
                    </div>

                    {/* Center Logo */}
                    <div className="w-full md:w-[30%] flex justify-center items-center py-24 md:py-0 relative opacity-0 scale-[0.96] [.is-visible_&]:opacity-100 [.is-visible_&]:scale-100 transition-all duration-[3500ms] ease-[cubic-bezier(0.25,1,0.5,1)]">
                        <div className="absolute w-[220%] h-[220%] bg-gradient-to-radial from-[#A98E5D]/15 to-transparent blur-[60px] opacity-0 [.is-visible_&]:opacity-100 transition-opacity duration-[4000ms] delay-500 pointer-events-none"></div>
                        
                        <div className="relative w-[360px] h-[125px] md:w-[450px] md:h-[155px] lg:w-[580px] lg:h-[200px] drop-shadow-[0_0_15px_rgba(169,142,93,0.1)]">
                            <Image 
                                src="/images/logo-minimal.png" 
                                alt="Ecolin Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Product: Sweater Bag */}
                    <div className="w-full md:w-[38%] flex flex-col items-center group">
                        <div className="relative w-full aspect-[3/4] max-w-[400px] mb-12 overflow-hidden bg-[#FDFBF9]/80 rounded-sm opacity-0 translate-y-12 [.is-visible_&]:opacity-100 [.is-visible_&]:translate-y-0 transition-all duration-[2500ms] ease-[cubic-bezier(0.25,1,0.5,1)] delay-[1600ms] hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#A98E5D]/5">
                            <Image 
                                src="/images/sweater-muslin-bag-main.png" 
                                alt="Sweater Muslin Bag"
                                fill
                                className="object-contain p-8 transition-transform duration-[3000ms] ease-out group-hover:scale-[1.03]"
                            />
                        </div>
                        <div className="text-center w-full">
                            <h3 className="text-[#8C734B] uppercase tracking-[0.25em] text-[11px] font-bold mb-6 opacity-0 translate-y-2 [.is-visible_&]:opacity-100 [.is-visible_&]:translate-y-0 transition-all duration-[1500ms] ease-out delay-[2600ms]">
                                Sweater Muslin Bag
                            </h3>
                            <ul className="space-y-3 font-light text-gray-600 text-[14px] px-4">
                                <li className="opacity-0 translate-y-2 [.is-visible_&]:opacity-100 [.is-visible_&]:translate-y-0 transition-all duration-[1500ms] ease-out delay-[2900ms]">Soft storage for knitwear</li>
                                <li className="opacity-0 translate-y-2 [.is-visible_&]:opacity-100 [.is-visible_&]:translate-y-0 transition-all duration-[1500ms] ease-out delay-[3200ms]">Preserves shape and texture</li>
                                <li className="opacity-0 translate-y-2 [.is-visible_&]:opacity-100 [.is-visible_&]:translate-y-0 transition-all duration-[1500ms] ease-out delay-[3500ms]">Breathable folded protection</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </SignatureReveal>
        </section>
    );
}
