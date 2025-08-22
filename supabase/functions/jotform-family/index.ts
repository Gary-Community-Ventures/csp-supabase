import "jsr:@supabase/functions-js/edge-runtime.d.ts";

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const data = await req.formData();

  const rawRequest = data.get("rawRequest");
  console.log(rawRequest);

  if (rawRequest === null || typeof rawRequest !== "string") {
    return new Response("No rawRequest found", { status: 400 });
  }

  const jsonData = JSON.parse(rawRequest);
  console.log(jsonData);

  return new Response(JSON.stringify(jsonData), {
    headers: { "Content-Type": "application/json" },
  });
});
