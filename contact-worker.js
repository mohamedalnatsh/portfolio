
const buildCorsHeaders = (allowed) => ({
  "Access-Control-Allow-Origin": allowed || "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept",
  "Access-Control-Max-Age": "86400",
  Vary: "Origin",
});

const json = (data, status, cors) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...cors },
  });

function validate(body) {
  const errors = [];
  if (typeof body !== "object" || body === null) return ["Invalid payload"];
  const { name, email, message, service } = body;
  if (typeof name !== "string" || !name.trim() || name.length > 100)
    errors.push("Invalid name");
  if (
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    email.length > 255
  )
    errors.push("Invalid email");
  if (typeof message !== "string" || !message.trim() || message.length > 2000)
    errors.push("Invalid message");
  if (!Array.isArray(service) || service.length === 0)
    errors.push("Select at least one service");
  return errors;
}

async function sendEmail(env, body) {
  // Optional: only sends when RESEND_API_KEY + TO_EMAIL are configured.
  if (!env.RESEND_API_KEY || !env.TO_EMAIL) return;
  const services = Array.isArray(body.service) ? body.service.join(", ") : "";
  const html = `
    <h2>New contact message</h2>
    <p><b>Name:</b> ${escapeHtml(body.name)}</p>
    <p><b>Email:</b> ${escapeHtml(body.email)}</p>
    <p><b>WhatsApp:</b> ${escapeHtml(body.whatsapp || "—")}</p>
    <p><b>Service:</b> ${escapeHtml(services)}</p>
    <p><b>Message:</b></p>
    <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(body.message)}</pre>
  `;
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
      to: [env.TO_EMAIL],
      reply_to: body.email,
      subject: `New portfolio inquiry from ${body.name}`,
      html,
    }),
  });
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[c]));
}

export default {
  async fetch(request, env) {
    const cors = buildCorsHeaders(env.ALLOWED_ORIGIN);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }
    if (request.method !== "POST") {
      return json({ error: "Method not allowed" }, 405, cors);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: "Invalid JSON" }, 400, cors);
    }

    const errors = validate(body);
    if (errors.length) {
      return json({ error: errors.join("; ") }, 400, cors);
    }

    try {
      await sendEmail(env, body);
      return json({ ok: true }, 200, cors);
    } catch (err) {
      return json(
        { error: err instanceof Error ? err.message : "Server error" },
        500,
        cors,
      );
    }
  },
};
