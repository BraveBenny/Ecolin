"use client";

import { useActionState } from "react";
import { sendContactEmail } from "@/app/actions/sendEmail";

export default function ContactForm() {
    const [state, formAction, isPending] = useActionState(sendContactEmail, null);

    if (state?.success) {
        return (
            <div className="bg-[#F9F8F6] border border-gray-100 p-12 text-center space-y-4 animate-[fadeIn_0.5s_ease-out]">
                <h3 className="text-2xl font-serif text-gray-900">Thank You</h3>
                <p className="font-light text-gray-600">Your message has been sent successfully. Our team will be in touch shortly.</p>
            </div>
        );
    }

    return (
        <form 
            action={formAction}
            className="space-y-8"
        >
            <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium tracking-wide text-gray-900">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    readOnly={isPending}
                    className="w-full bg-gray-50 border border-gray-200 p-4 font-light text-gray-900 focus:outline-none focus:border-[#A98E5D] transition-colors"
                    placeholder="Your full name"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium tracking-wide text-gray-900">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    readOnly={isPending}
                    className="w-full bg-gray-50 border border-gray-200 p-4 font-light text-gray-900 focus:outline-none focus:border-[#A98E5D] transition-colors"
                    placeholder="you@example.com"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium tracking-wide text-gray-900">Subject</label>
                <select 
                    id="subject" 
                    name="subject" 
                    disabled={isPending}
                    className="w-full bg-gray-50 border border-gray-200 p-4 font-light text-gray-900 focus:outline-none focus:border-[#A98E5D] transition-colors appearance-none rounded-none disabled:opacity-75"
                >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Order Support">Order Support</option>
                    <option value="Product Question">Product Question</option>
                    <option value="Press & Media">Press & Media</option>
                </select>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium tracking-wide text-gray-900">Message</label>
                <textarea 
                    id="message" 
                    name="message" 
                    required 
                    readOnly={isPending}
                    rows={6}
                    className="w-full bg-gray-50 border border-gray-200 p-4 font-light text-gray-900 focus:outline-none focus:border-[#A98E5D] transition-colors resize-y"
                    placeholder="How can we help you?"
                ></textarea>
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
                {isPending ? "Sending..." : "Send Message"}
            </button>
        </form>
    );
}
