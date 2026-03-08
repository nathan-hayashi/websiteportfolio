/* =============================================================================
   CONTACT API — Cloudflare Pages Function (serverless endpoint)
   =============================================================================
   Handles contact form submissions at POST /api/contact.
   Validates Turnstile bot-protection token, then sends email via Resend.

   URL: /api/contact (POST only)

   Environment variables (set in Cloudflare Pages dashboard):
   - TURNSTILE_SECRET_KEY — Cloudflare Turnstile server-side secret
   - RESEND_API_KEY — Resend email service API key
   - SENDER_DOMAIN — verified sender domain (e.g., yourdomain.dev)
   - RECIPIENT_EMAIL — where contact emails are delivered

   Coordinated changes:
   - Contact page UI → src/pages/contact.astro
   - Adding form fields → update formData.get() calls below AND the
     email HTML template at the bottom
   - Turnstile setup → Cloudflare dashboard > Turnstile > site key + secret

   ADD: To add a new form field, add a formData.get() call and include it
   in the email HTML template string.
   ============================================================================= */

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const turnstileToken = formData.get('cf-turnstile-response');

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json({ error: 'All fields required' }, { status: 400 });
    }

    // Validate Turnstile token (single-use, expires 5 min)
    const turnstileResponse = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
          remoteip: request.headers.get('CF-Connecting-IP'),
        }),
      }
    );

    const turnstileResult = await turnstileResponse.json();
    if (!turnstileResult.success) {
      return Response.json({ error: 'Bot verification failed' }, { status: 400 });
    }

    // Send email via Resend
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `Contact <noreply@${env.SENDER_DOMAIN}>`,
        to: [env.RECIPIENT_EMAIL],
        reply_to: email,
        subject: `Portfolio Contact: ${name}`,
        html: `<h2>New Contact</h2>
  <p><b>Name:</b> ${escapeHtml(name)}</p>
  <p><b>Email:</b> ${escapeHtml(email)}</p>
  <p><b>Message:</b></p>
  <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
      }),
    });

    if (!emailResponse.ok) throw new Error('Failed to send');
    return Response.json({ success: true });
  } catch (error) {
    console.error('Contact error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}

function escapeHtml(text) {
  const map = {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#039;"};
  return String(text).replace(/[&<>"']/g, m => map[m]);
}

