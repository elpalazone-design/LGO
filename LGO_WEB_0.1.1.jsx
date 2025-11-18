import React, { useEffect } from "react";

export default function WebFuturista() {
  useEffect(() => {
    // Loader
    setTimeout(() => {
      const loader = document.getElementById("fire-loader");
      if (loader) {
        loader.style.opacity = "0";
        setTimeout(() => loader.remove(), 600);
      }
    }, 2500);

    // Año
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();

    // Navegación
    const pages = document.querySelectorAll('.page');
    document.querySelectorAll('a[data-page], .btn[data-page]').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        const p = a.getAttribute('data-page');
        pages.forEach(pg => pg.style.display = 'none');
        const target = document.getElementById(p);
        if (target) target.style.display = 'block';
        window.scrollTo(0, 0);
      });
    });
  }, []);

  return (
    <div style={{ background: "#060606", color: "#e9e9e9" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        *{box-sizing:border-box;margin:0;padding:0}
        body{background:#060606;color:#e9e9e9;font-family:Inter,system-ui;-webkit-font-smoothing:antialiased;overflow-x:hidden}

        /* FONDO REACTIVO */
        :root { --mx: 50%; --my: 50%; }
        body::before{
          content:"";
          position:fixed;inset:0;z-index:-1;
          background:radial-gradient(circle at var(--mx) var(--my), rgba(255,120,0,0.18), rgba(0,0,0,0.1) 40%, #000 70%);
          transition:background 0.05s linear;
        }

        /* Loader fuego */
        #fire-loader{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:#000;z-index:9999}
        .fire-text{font-weight:900;font-size:4.2rem;letter-spacing:6px;background:linear-gradient(90deg,#ff9a00,#ff4500 40%,#ff1100);-webkit-background-clip:text;color:transparent}
        .flame{width:220px;height:80px;margin-top:18px;background:radial-gradient(circle at 30% 30%, rgba(255,200,100,0.9), rgba(255,70,0,0.85) 30%, rgba(0,0,0,0) 60%);filter:blur(12px);opacity:0.9;animation:flameMove 1.2s infinite}
        @keyframes flameMove{0%{transform:translateY(0)}50%{transform:translateY(-6px)}100%{transform:translateY(0)}}

        /* Header */
        header{padding:18px 20px;border-bottom:1px solid rgba(255,90,0,0.06);display:flex;gap:16px;background:#0d0d0d;position:relative;z-index:20}
        nav{margin-left:auto;display:flex;gap:18px}
        nav a{color:#f6a86b;text-decoration:none;font-weight:700;font-size:0.85rem;transition:0.25s}
        nav a:hover{color:#ff6a00;transform:scale(1.08)}

        /* Páginas */
        .page{display:none;animation:fadeIn .45s ease forwards;padding-bottom:60px}
        @keyframes fadeIn{0%{opacity:0;transform:translateY(10px)}100%{opacity:1;transform:none}}

        /* Hero */
        .hero{display:flex;justify-content:space-between;padding:48px 6vw;gap:28px}
        .hero h1{font-size:3rem;color:white}

        .btn{background:linear-gradient(90deg,#ff6a00,#ff2500);padding:12px 18px;border-radius:12px;color:#fff;font-weight:800;text-decoration:none;transition:0.3s}
        .btn:hover{filter:brightness(1.3);transform:translateY(-3px)}
        .btn.ghost{background:transparent;border:1px solid rgba(255,90,0,0.18);color:#ffad7a}
        .btn.ghost:hover{border-color:#ff6a00;color:#ff6a00}

        /* TARJETAS CON ANIMACIÓN */
        .cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px;padding:28px 6vw}
        .card{background:rgba(255,255,255,0.02);padding:18px;border-radius:12px;border:1px solid rgba(255,80,0,0.06);transition:0.3s}
        .card:hover{transform:translateY(-6px) scale(1.03);box-shadow:0 0 18px rgba(255,90,0,0.25);border-color:#ff6a00}

        footer{padding:26px 6vw;background:#070707;text-align:center;color:#bdbdbd;margin-top:60px}
      `}} />

      {/* LOADER */}
      <div id="fire-loader">
        <div className="fire-wrap" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div className="fire-text">LGO COMMUNITY</div>
          <div className="flame"></div>
        </div>
      </div>

      {/* HEADER */}
      <header>
        <div className="logo" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img src="/mnt/data/ChatGPT_Image_18_nov_2025__02_35_05-removebg-preview.png" width="64" />
          <div>
            <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ff9a00" }}>LGO COMMUNITY</div>
            <div style={{ fontSize: "0.85rem", color: "#f5b78a" }}>Gaming · Diseño · Foro · Bots</div>
          </div>
        </div>

        <nav>
          <a href="#" data-page="inicio">Inicio</a>
          <a href="#" data-page="sobre">Sobre</a>
          <a href="#" data-page="contacto">Contacto</a>
          <a href="#" data-page="staff">Staff</a>
          <a href="#" data-page="roles">Roles</a>
          <a href="#" data-page="bots">Bots</a>
          <a href="https://discord.com/invite/ZHJzbbb6UA" target="_blank">Unirse</a>
        </nav>
      </header>

      {/* INICIO */}
      <div id="inicio" className="page" style={{ display: "block" }}>
        <section className="hero">
          <div>
            <h1>Bienvenido a LGO — Comunidad quemá pero con arte</h1>
            <p style={{ marginTop: 12, color: "#f0b68b" }}>
              Jugamos, diseñamos, creamos… lo q surja.
            </p>
            <div style={{ marginTop: 18, display: "flex", gap: 12 }}>
              <a className="btn" href="https://discord.com/invite/ZHJzbbb6UA" target="_blank">Unirme</a>
              <a className="btn ghost" data-page="servicios">Ver servicios</a>
            </div>
          </div>
        </section>

        <h2 style={{ color: "#ff9a00", margin: "26px 6vw 12px" }}>Servicios</h2>
        <div className="cards">
          <div className="card"><h3>Diseño</h3><p>Logos, banners…</p></div>
          <div className="card"><h3>Gaming</h3><p>Partidas, torneos…</p></div>
          <div className="card"><h3>Bots</h3><p>Moderación, música…</p></div>
          <div className="card"><h3>Eventos</h3><p>Giveaways</p></div>
        </div>
      </div>

      {/* SOBRE */}
      <div id="sobre" className="page">
        <h2 style={{ color: "#ff9a00", margin: "26px 6vw 12px" }}>Sobre LGO</h2>
        <p style={{ padding: "0 6vw", maxWidth: 900 }}>Comunidad divertida, directa y quemá.</p>
      </div>

      {/* CONTACTO */}
      <div id="contacto" className="page">
        <h2 style={{ color: "#ff9a00", margin: "26px 6vw 12px" }}>Contacto</h2>
        <form style={{ margin: "0 6vw", background: "#0d0d0d", padding: 18, borderRadius: 12 }}>
          <input placeholder="Tu nombre" /><br />
          <input placeholder="Correo" /><br />
          <textarea rows={5}></textarea><br />
          <button>Enviar</button>
        </form>
      </div>

      {/* STAFF */}
      <div id="staff" className="page">
        <h2 style={{ color: "#ff9a00", margin: "26px 6vw 12px" }}>Staff</h2>
        <p style={{ padding: "0 6vw" }}>Aquí irá tu equipo.</p>
      </div>

      {/* ROLES */}
      <div id="roles" className="page">
        <h2 style={{ color: "#ff9a00", margin: "26px 6vw 12px" }}>Roles</h2>
        <p style={{ padding: "0 6vw" }}>VIP, Staff, Diseñadores…</p>
      </div>

      {/* BOTS */}
      <div id="bots" className="page">
        <h2 style={{ color: "#ff9a00", margin: "26px 6vw 12px" }}>Bots</h2>
        <p style={{ padding: "0 6vw" }}>Pásame la info de los bots y lo meto guapísimo.</p>
      </div>

      <footer>
        © <span id="year"></span> LGO COMMUNITY — By Brajamas & Kael
      </footer>
    </div>
  );
}
