"use client";

import { useActionState } from "react";
import { sendWholesaleEmail } from "@/app/actions/sendEmail";

export default function WholesaleForm() {
    const [state, formAction, isPending] = useActionState(sendWholesaleEmail, null);

    if (state?.success) {
        return (
            <div className="bg-[#F9F8F6] border border-gray-100 p-12 text-center space-y-4 animate-[fadeIn_0.5s_ease-out]">
                <h3 className="text-2xl font-serif text-gray-900">Inquiry Received</h3>
                <p className="font-light text-gray-600">Thank you for your interest in partnering with Ecolin. A member of our wholesale team will contact you shortly.</p>
            </div>
        );
    }

    return (
        <form 
            action={formAction}
            className="space-y-8"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium tracking-wide text-gray-900">First Name</label>
                    <input type="text" id="firstName" name="firstName" required readOnly={isPending} className="w-full bg-gray-50 border border-gray-200 p-4 font-light text-gray-900 focus:outline-none focus:border-[#A98E5D] transition-colors" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium tracking-wide text-gray-900">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required readOnly={isPending} className="w-full bg-gray-50 border border-gray-200 p-4 font-light text-gray-900 focus:outline-none focus:border-[#A98E5D] transition-colors" />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="businessName" className="block text-sm font-medium tracking-wide text-gray-900">Business Name</label>
                <input type="text" id="businessName" name="businessName" required readOnly={isPending} className="w-full bg-gray-50 border border-gray-200 p-4 font-light text-gray-900 focus:outline-none focus:border-[#A98E5D] transition-colors" />
            </div>

            <div className="space-y-2">
                <label htmlFor="businessType" className="block text-sm font-medium tracking-wide text-gray-900">Business Type</label>
                <select id="businessType" name="businessType" disabled={isPending} className="w-full bg-gray-50 border border-gray-200 p-4 font-light text-gray-900 focus:outline-none focus:border-[#A98E5D] transition-colors appearance-none rounded-none disabled:opacity-75">
                    <option value="Dry Cleaner">Dry Cleaner</option>
                    <option value="Tailor / Alterations">Tailor / Alterations</option>
                    <option value="Boutique / Retail">Boutique / Retail</option>
                    <option value="Interior Designer">Interior Designer / Closet Organizer</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium tracking-wide text-gray-900">Business Email</label>
                <input type="email" id="email" name="email" required readOnly={isPending} className="w-full bg-gray-50 border border-gray-200 p-4 font-light text-gray-900 focus:outline-none focus:border-[#A98E5D] transition-colors" />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium tracking-wide text-gray-900">Inquiry Details</label>
                <textarea id="message" name="message" required readOnly={isPending} rows={5} placeholder="Tell us about your estimated volume and specific product interests..." className="w-full bg-gray-50 border border-gray-200 p-4 font-light text-gray-900 focus:outline-none focus:border-[#A98E5D] transition-colors resize-y"></textarea>
            </div>

            {state?.error && (
                <div className="bg-red-50 border border-red-100 text-red-800 p-4 text-sm font-light animate-[fadeIn_0.5s_ease-out]">
                    {state.error}
                </div>
            )}

            <button 
                type="submit" 
                disabled={isPending}
                className="w-full bg-gray-900 text-white hover:bg-[#A98E5D] transition-colors duration-500 rounded-none px-8 py-4 uppercase tracking-widest text-sm font-bold shadow-md shadow-gray-900/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isPending ? "Submitting..." : "Submit Inquiry"}
            </button>
        </form>
    );
}
