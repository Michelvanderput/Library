// Groundwork: /portal staat achter een pincode.
// De pincode komt uit de Vercel-omgevingsvariabele PORTAL_PIN (Settings → Environment Variables).
// Optioneel: PORTAL_SECRET, een lange willekeurige tekst die de sessiecookie extra sterk maakt.
// Een nieuwe PORTAL_PIN (of PORTAL_SECRET) logt alle bestaande sessies direct uit.

export const config = { matcher: ["/portal", "/portal/:path*"] };

const COOKIE = "gw_session";
const MAX_AGE = 60 * 60 * 12; // 12 uur ingelogd
const enc = new TextEncoder();

const next = () => new Response(null, { headers: { "x-middleware-next": "1" } });
const sleep = ms => new Promise(r => setTimeout(r, ms));

function safeEqual(a, b) {
  a = String(a); b = String(b);
  let diff = a.length ^ b.length;
  for (let i = 0; i < Math.max(a.length, b.length); i++) diff |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  return diff === 0;
}

async function sign(secret, msg) {
  const key = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(msg));
  return [...new Uint8Array(sig)].map(b => b.toString(16).padStart(2, "0")).join("");
}

function readCookie(req, name) {
  const raw = req.headers.get("cookie") || "";
  const hit = raw.split(/;\s*/).find(c => c.startsWith(name + "="));
  return hit ? decodeURIComponent(hit.slice(name.length + 1)) : "";
}

const cookie = (value, maxAge) => `${COOKIE}=${value}; Path=/portal; Max-Age=${maxAge}; HttpOnly; Secure; SameSite=Strict`;

export default async function middleware(req) {
  const url = new URL(req.url);
  const path = url.pathname.replace(/\/+$/, "") || "/";
  const pin = process.env.PORTAL_PIN || "";
  const secret = `groundwork|${process.env.PORTAL_SECRET || ""}|${pin}`;

  if (!pin) return html(503, page({ setup: true }));

  if (path === "/portal/logout") {
    return new Response(null, { status: 303, headers: { Location: "/", "Set-Cookie": cookie("", 0), "Cache-Control": "no-store" } });
  }

  const session = readCookie(req, COOKIE);
  let valid = false;
  if (session.includes(".")) {
    const [exp, sig] = session.split(".");
    valid = Number(exp) > Date.now() && safeEqual(sig, await sign(secret, exp));
  }

  if (path === "/portal/login") {
    if (req.method === "POST") {
      let tried = "";
      try { tried = String((await req.formData()).get("pin") || ""); } catch {}
      const viaFetch = req.headers.get("x-gw-fetch") === "1";
      if (tried && safeEqual(tried, pin)) {
        const exp = String(Date.now() + MAX_AGE * 1000);
        const set = cookie(`${exp}.${await sign(secret, exp)}`, MAX_AGE);
        if (viaFetch) return new Response(null, { status: 204, headers: { "Set-Cookie": set, "Cache-Control": "no-store" } });
        return new Response(null, { status: 303, headers: { Location: "/portal/", "Set-Cookie": cookie(`${exp}.${await sign(secret, exp)}`, MAX_AGE), "Cache-Control": "no-store" } });
      }
      await sleep(1200); // remt raden af
      if (viaFetch) return new Response(null, { status: 401, headers: { "Cache-Control": "no-store" } });
      return html(401, page({ len: pin.length, error: true }));
    }
    if (valid) return new Response(null, { status: 303, headers: { Location: "/portal/" } });
  }

  if (valid) return next();
  return html(401, page({ len: pin.length }));
}

function html(status, body) {
  return new Response(body, { status, headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store", "X-Robots-Tag": "noindex" } });
}

function page({ len = 4, error = false, setup = false }) {
  const boxes = Array.from({ length: Math.min(Math.max(len, 4), 8) }, () => '<span aria-hidden="true"></span>').join("");
  const body = setup
    ? `<h1>Nog geen pincode</h1><p>Zet in Vercel een omgevingsvariabele <code>PORTAL_PIN</code> (bijvoorbeeld 4 cijfers) en deploy opnieuw.</p><a class="back" href="/">← Naar het portfolio</a>`
    : `<h1>Hoi Michel 👋</h1><p id="sub">Vul je pincode in.</p>
<form method="post" action="/portal/login/" id="f">
  <label class="pin"><span class="sr">Pincode</span><input id="pin" name="pin" type="password" inputmode="numeric" pattern="[0-9]*" maxlength="${len}" autocomplete="current-password" required autofocus aria-describedby="msg">${boxes}</label>
  <p class="msg${error ? " err" : ""}" id="msg" role="status">${error ? "Verkeerde pincode, probeer opnieuw." : ""}</p>
  <noscript><button type="submit">Inloggen</button></noscript>
</form>
<a class="back" href="/">← Naar het portfolio</a>`;
  return `<!doctype html><html lang="nl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex">
<title>Groundwork · inloggen</title>
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='30' fill='%23c81e3a' stroke='%23ffcf3a' stroke-width='5'/%3E%3Ctext x='32' y='43' font-family='Arial,sans-serif' font-weight='900' font-size='30' text-anchor='middle' fill='%23fff'%3EM%3C/text%3E%3C/svg%3E">
<link rel="preload" as="script" href="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js" crossorigin>
<link rel="preload" as="script" href="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/SplitText.min.js" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,400..800&family=JetBrains+Mono:wght@600&display=swap">
<style>
:root{--paper:#f3ead8;--card:#fbf5e9;--ink:#121733;--muted:#56536a;--accent:#2e3df0;--cherry:#c81e3a;--sun:#ffcf3a;--err:#c0262d;color-scheme:light}
@media (prefers-color-scheme:dark){:root{--paper:#0b0e1d;--card:#141933;--ink:#f6eedd;--muted:#aaa6bd;--accent:#8d98ff;--cherry:#ff5a70;--sun:#ffd65a;--err:#ff7a72;color-scheme:dark}}
*{box-sizing:border-box}body{margin:0;min-height:100dvh;display:grid;place-items:center;padding:20px;background:var(--paper);color:var(--ink);font-family:"Bricolage Grotesque",system-ui,sans-serif}
main{width:min(420px,100%);background:var(--card);border:1.5px solid var(--ink);border-radius:28px;box-shadow:0 6px 0 var(--ink);padding:32px 26px;display:grid;gap:14px;text-align:center}
main.shake{animation:sh .4s}@keyframes sh{20%,60%{transform:translateX(-8px)}40%,80%{transform:translateX(8px)}}
.logo{width:64px;height:64px;margin:0 auto;border-radius:50%;background:var(--cherry);box-shadow:inset 0 0 0 5px var(--sun);display:grid;place-items:center;font-weight:800;font-size:30px;color:#fff}
.eyebrow{font:600 12px "JetBrains Mono",monospace;letter-spacing:.1em;text-transform:uppercase;color:var(--cherry)}
h1{margin:0;font-weight:800;font-size:2.2rem;letter-spacing:-.01em}p{margin:0;color:var(--muted)}
.pin{position:relative;display:flex;justify-content:center;gap:10px;margin:8px 0 0}
.pin input{position:absolute;inset:0;width:100%;height:100%;opacity:0;font-size:16px}
.pin span[aria-hidden]{width:56px;height:68px;border:1.5px solid var(--ink);border-radius:16px;background:var(--paper);display:grid;place-items:center;font-weight:800;font-size:2rem;box-shadow:0 3px 0 var(--ink);transition:transform .15s,background .15s}
.pin span.f{background:var(--sun);color:#121733;transform:translateY(-3px)}
.pin:focus-within span.c{outline:2.5px solid var(--accent);outline-offset:2px}
.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}
.msg{min-height:1.4em;font-weight:700;margin-top:8px}.msg.err{color:var(--err)}
.back{color:var(--ink);font-weight:600}code{font-family:"JetBrains Mono",monospace;background:var(--paper);padding:2px 6px;border-radius:6px}
.pin.busy span[aria-hidden]{animation:pulse .9s ease-in-out infinite}
.pin.busy span[aria-hidden]:nth-of-type(2){animation-delay:.1s}.pin.busy span[aria-hidden]:nth-of-type(3){animation-delay:.2s}.pin.busy span[aria-hidden]:nth-of-type(4){animation-delay:.3s}
@keyframes pulse{50%{transform:translateY(-8px)}}
.pin.ok span[aria-hidden]{background:#17734a;color:#fff;border-color:#17734a}
#wipe{position:fixed;left:50%;top:50%;width:64px;height:64px;margin:-32px 0 0 -32px;border-radius:50%;background:var(--cherry);transform:scale(0);z-index:9;pointer-events:none;transition:transform .7s cubic-bezier(.7,0,.2,1)}
#wipe.go{transform:scale(60)}
@media (prefers-reduced-motion:reduce){#wipe,.pin.busy span[aria-hidden]{transition:none;animation:none}}
button{font:800 16px "Bricolage Grotesque",system-ui,sans-serif;padding:12px 20px;border-radius:99px;border:1.5px solid var(--ink);background:var(--cherry);color:#fff}
</style></head><body><main${error ? ' class="shake"' : ""}><span class="logo" aria-hidden="true">M</span><span class="eyebrow">Groundwork · alleen voor Michel</span>${body}</main>
<script>
(()=>{const i=document.getElementById("pin");if(!i)return;const b=[...document.querySelectorAll(".pin span[aria-hidden]")],L=${len},f=document.getElementById("f"),m=document.getElementById("msg"),pinBox=document.querySelector(".pin"),card=document.querySelector("main");let busy=false;
const paint=()=>{const v=i.value;b.forEach((x,k)=>{x.textContent=v[k]?"•":"";x.classList.toggle("f",!!v[k]);x.classList.toggle("c",k===Math.min(v.length,b.length-1));});};
const fail=()=>{busy=false;pinBox.classList.remove("busy");m.textContent="Verkeerde pincode, probeer opnieuw.";m.classList.add("err");card.classList.remove("shake");void card.offsetWidth;card.classList.add("shake");i.value="";paint();i.focus();};
const go=async()=>{busy=true;pinBox.classList.add("busy");m.classList.remove("err");m.textContent="Even kijken…";
  try{const r=await fetch("/portal/login/",{method:"POST",headers:{"x-gw-fetch":"1"},body:new URLSearchParams({pin:i.value}),credentials:"same-origin"});
    if(r.status===204){pinBox.classList.remove("busy");pinBox.classList.add("ok");m.textContent="Welkom terug!";try{sessionStorage.setItem("gw-enter","1")}catch(e){}
      const w=document.createElement("div");w.id="wipe";document.body.appendChild(w);requestAnimationFrame(()=>requestAnimationFrame(()=>w.classList.add("go")));
      setTimeout(()=>location.replace("/portal/"),matchMedia("(prefers-reduced-motion: reduce)").matches?0:650);}
    else fail();}catch(e){f.submit();}};
i.addEventListener("input",()=>{if(busy){return;}i.value=i.value.replace(/\\D/g,"").slice(0,L);paint();if(i.value.length<L){m.textContent="";m.classList.remove("err");}if(i.value.length===L)go();});
f.addEventListener("submit",e=>{if(i.value.length===L){e.preventDefault();if(!busy)go();}});
paint();i.focus();})();
</script></body></html>`;
}
