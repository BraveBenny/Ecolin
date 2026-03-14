"use client";

export default function ContactForm() {
    return (
        <form 
            action="mailto:support@ecolinstorage.com" 
            method="POST" 
            encType="text/plain"
            className="space-y-8"
        >
            <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium tracking-wide text-gray-900">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
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
                    className="w-full bg-gray-50 border border-gray-200 p-4 font-light text-gray-900 focus:outline-none focus:border-[#A98E5D] transition-colors"
                    placeholder="you@example.com"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium tracking-wide text-gray-900">Subject</label>
                <select 
                    id="subject" 
                    name="subject" 
                    className="w-full bg-gray-50 border border-gray-200 p-4 font-light text-gray-900 focus:outline-none focus:border-[#A98E5D] transition-colors appearance-none rounded-none"
                >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Order Support">Order Support</option>
                    <option value="Product Question">Product Question</option>
                    <option value="Press">Press & Media</option>
                </select>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium tracking-wide text-gray-900">Message</label>
                <textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows={6}
                    className="w-full bg-gray-50 border border-gray-200 p-4 font-light text-gray-900 focus:outline-none focus:border-[#A98E5D] transition-colors resize-y"
                    placeholder="How can we help you?"
                ></textarea>
            </div>

            <p className="text-xs text-gray-400 font-light italic">
                By submitting this form, you will open your default email client to send us your message directly.
            </p>

            <button 
                type="submit" 
                className="w-full bg-gray-900 text-white hover:bg-[#A98E5D] transition-colors duration-500 rounded-none px-8 py-4 uppercase tracking-widest text-sm font-bold shadow-md shadow-gray-900/10"
            >
                Send Message
            </button>
        </form>
    );
}
