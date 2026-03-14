"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "marketing@busybeegold.com";
const FROM_EMAIL = "Ecolin Website <onboarding@resend.dev>"; // This should be a verified domain in production if possible, but onboarding/default verified domain works initially.

export async function sendContactEmail(prevState: any, formData: FormData) {
    try {
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const subject = formData.get("subject") as string;
        const message = formData.get("message") as string;

        if (!name || !email || !message) {
            return { error: "Please fill out all required fields." };
        }

        const emailHtml = `
            <h2>New Contact Form Submission &mdash; Ecolin</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
            <hr />
            <p><small>Submitted on: ${new Date().toUTCString()} (UTC)</small></p>
        `;

        const { data, error } = await resend.emails.send({
            from: FROM_EMAIL,
            to: TO_EMAIL,
            replyTo: email,
            subject: `New Contact Form Submission — Ecolin`,
            html: emailHtml,
        });

        if (error) {
            console.error("Resend API Error:", error);
            return { error: "There was an issue sending your message. Please try again later." };
        }

        return { success: true };

    } catch (e) {
        console.error("Unknown Server Error:", e);
        return { error: "An unexpected error occurred. Please try again later." };
    }
}

export async function sendWholesaleEmail(prevState: any, formData: FormData) {
    try {
        const firstName = formData.get("firstName") as string;
        const lastName = formData.get("lastName") as string;
        const businessName = formData.get("businessName") as string;
        const businessType = formData.get("businessType") as string;
        const email = formData.get("email") as string;
        const message = formData.get("message") as string;

        if (!firstName || !lastName || !businessName || !email || !message) {
            return { error: "Please fill out all required fields." };
        }

        const emailHtml = `
            <h2>New Wholesale Inquiry &mdash; Ecolin</h2>
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Business Name:</strong> ${businessName}</p>
            <p><strong>Business Type:</strong> ${businessType}</p>
            <p><strong>Business Email:</strong> ${email}</p>
            <p><strong>Inquiry Details:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
            <hr />
            <p><small>Submitted on: ${new Date().toUTCString()} (UTC)</small></p>
        `;

        const { data, error } = await resend.emails.send({
            from: FROM_EMAIL,
            to: TO_EMAIL,
            replyTo: email,
            subject: `New Wholesale Inquiry — Ecolin`,
            html: emailHtml,
        });

        if (error) {
            console.error("Resend API Error:", error);
            return { error: "There was an issue submitting your inquiry. Please try again later." };
        }

        return { success: true };

    } catch (e) {
        console.error("Unknown Server Error:", e);
        return { error: "An unexpected error occurred. Please try again later." };
    }
}
