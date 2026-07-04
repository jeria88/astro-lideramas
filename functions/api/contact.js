export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const { nombre, cargo, establecimiento, comuna, email, mensaje } = await request.json();

    if (!email) {
      return json({ error: 'Falta el correo' }, 400);
    }

    await env.DB.prepare(
      'INSERT INTO mensajes (nombre, cargo, establecimiento, comuna, email, mensaje) VALUES (?, ?, ?, ?, ?, ?)'
    ).bind(
      nombre?.trim() || null,
      cargo?.trim() || null,
      establecimiento?.trim() || null,
      comuna?.trim() || null,
      email.trim(),
      mensaje?.trim() || null
    ).run();

    return json({ ok: true });

  } catch (err) {
    console.error('contact error:', err);
    return json({ error: 'Error interno' }, 500);
  }
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
