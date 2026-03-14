"use client";

export default function WholesaleForm() {
    return (
        <form 
            action="mailto:wholesale@ecolinstorage.com" 
            method="POST" 
            encType="text/plain"
            className="space-y-8"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium tracking-wide text-gray-900">First Name</label>
                    <input type="text" id="firstName" name="firstName" required className="w-full bg-gray-50 border border-gray-200 p-4 font-light text-gray-900 focus:outline-none focus:border-[#A98E5D] transition-colors" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium tracking-wide text-gray-900">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required className="w-full bg-gray-50 border border-gray-200 p-4 font-light text-gray-900 focus:outline-none focus:border-[#A98E5D] transition-colors" />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="businessName" className="block text-sm font-medium tracking-wide text-gray-900">Business Name</label>
                <input type="text" id="businessName" name="businessName" required className="w-full bg-gray-50 border border-gray-200 p-4 font-light text-gray-900 focus:outline-none focus:border-[#A98E5D] transition-colors" />
            </div>

            <div className="space-y-2">
                <label htmlFor="businessType" className="block text-sm font-medium tracking-wide text-gray-900">Business Type</label>
                <select id="businessType" name="businessType" className="w-full bg-gray-50 border border-gray-200 p-4 font-light text-gray-900 focus:outline-none focus:border-[#A98E5D] transition-colors appearance-none rounded-none">
                    <option value="Dry Cleaner">Dry Cleaner</option>
                    <option value="Tailor / Alterations">Tailor / Alterations</option>
                    <option value="Boutique / Retail">Boutique / Retail</option>
                    <option value="Interior Designer">Interior Designer / Closet Organizer</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium tracking-wide text-gray-900">Business Email</label>
                <input type="email" id="email" name="email" required className="w-full bg-gray-50 border border-gray-200 p-4 font-light text-gray-900 focus:outline-none focus:border-[#A98E5D] transition-colors" />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium tracking-wide text-gray-900">Inquiry Details</label>
                <textarea id="message" name="message" required rows={5} placeholder="Tell us about your estimated volume and specific product interests..." className="w-full bg-gray-50 border border-gray-200 p-4 font-light text-gray-900 focus:outline-none focus:border-[#A98E5D] transition-colors resize-y"></textarea>
            </div>

            <p className="text-xs text-gray-400 font-light italic">
                By submitting this form, you will open your default email client to send us your wholesale request directly.
            </p>

            <button 
                type="submit" 
                className="w-full bg-gray-900 text-white hover:bg-[#A98E5D] transition-colors duration-500 rounded-none px-8 py-4 uppercase tracking-widest text-sm font-bold shadow-md shadow-gray-900/10"
            >
                Submit Inquiry
            </button>
        </form>
    );
}
