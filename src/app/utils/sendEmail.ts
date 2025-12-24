//import { Resend } from "resend";
//
//const resend = new Resend(process.env.RESEND_API_KEY!);
//
//export async function sendWelcomeEmail(email: string, name: string) {
//  try {
//    await resend.emails.send({
//      from: "ApniSec <onboarding@resend.dev>",
//      to:
//        process.env.NODE_ENV === "production"
//          ? email
//          : "govindpurty350@gmail.com",
//      subject: "Welcome to ApniSec 🎉",
//      html: `
//        <div style="font-family: Arial, sans-serif;">
//          <h2>Welcome, ${name} 👋</h2>
//          <p>Your ApniSec account has been created successfully.</p>
//          <p>You can now log in and start managing issues.</p>
//          <br />
//          <p>— Team ApniSec</p>
//        </div>
//      `,
//    });
//  } catch (error) {
//    console.error("Welcome email failed:", error);
//    // ❗ Do NOT throw — email failure should not break register
//  }
//}
