<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <meta name="description" content="El Fox Manor - Salón de eventos privado y exclusivo. Bodas, XV años y eventos corporativos con atención al detalle.">
    <title>El Fox Manor | Salón de Eventos Privado</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <style>
        * { margin:0; padding:0; box-sizing:border-box; }
        :root {
            --dutch-white:#F9F6F0; --ecru:#C8B88A; --lion-gold:#C19F5F;
            --delft-blue:#1E4C7A; --dark-gold:#A88B4F; --sec-blue:#2D5A87;
            --primary-light:#E8DCC0; --sec-dark:#0F2642;
            --text:#2c3e50; --text-light:#64748b; --white:#ffffff;
            --shadow:0 8px 24px rgba(30,76,122,.12);
            --shadow-lg:0 20px 40px rgba(30,76,122,.16);
            --shadow-gold:0 8px 24px rgba(193,159,95,.15);
            --tr:all 0.4s cubic-bezier(.4,0,.2,1);
            --radius:16px;
        }
        body { font-family:'Poppins',sans-serif; color:var(--text); line-height:1.7; background:#fff; overflow-x:hidden; }
        h1,h2,h3,h4,.section-title { font-family:'Georgia','Times New Roman',serif; font-weight:700; letter-spacing:-.5px; line-height:1.2; }
        .container { max-width:1200px; margin:0 auto; padding:0 24px; }
        section { padding:100px 0; position:relative; }
        .btn { display:inline-block; padding:16px 36px; border-radius:50px; text-decoration:none; font-weight:600; transition:var(--tr); cursor:pointer; border:none; font-size:15px; font-family:'Poppins',sans-serif; position:relative; overflow:hidden; }
        .btn-primary { background:linear-gradient(135deg,var(--lion-gold),var(--dark-gold)); color:#fff; box-shadow:var(--shadow-gold); }
        .btn-primary:hover { transform:translateY(-3px); box-shadow:0 12px 32px rgba(193,159,95,.3); }
        .btn-outline { background:transparent; border:2px solid var(--lion-gold); color:var(--lion-gold); }
        .btn-outline:hover { background:var(--lion-gold); color:#fff; transform:translateY(-3px); }
        .section-title { text-align:center; font-size:48px; color:var(--delft-blue); margin-bottom:16px; position:relative; display:inline-block; width:100%; }
        .section-title::after { content:''; position:absolute; bottom:-12px; left:50%; transform:translateX(-50%); width:80px; height:3px; background:linear-gradient(90deg,transparent,var(--lion-gold),transparent); }
        .section-subtitle { text-align:center; color:var(--text-light); margin-bottom:56px; font-size:18px; max-width:650px; margin-left:auto; margin-right:auto; }

        /* NAVBAR */
        .navbar { background:rgba(30,76,122,.97); backdrop-filter:blur(12px); position:fixed; width:100%; top:0; z-index:1000; padding:16px 0; transition:var(--tr); }
        .navbar.scrolled { padding:10px 0; box-shadow:var(--shadow); }
        .navbar .container { display:flex; justify-content:space-between; align-items:center; }
        .logo img { height:60px; width:auto; transition:var(--tr); }
        .logo img:hover { transform:scale(1.03); }
        .nav-links { display:flex; gap:28px; list-style:none; align-items:center; }
        .nav-links a { text-decoration:none; color:var(--lion-gold); font-weight:600; font-size:14px; position:relative; padding:8px 0; transition:var(--tr); }
        .nav-links a::after { content:''; position:absolute; bottom:0; left:0; width:0; height:2px; background:var(--lion-gold); transition:width .3s; }
        .nav-links a:hover::after { width:100%; }
        .menu-toggle { display:none; font-size:28px; cursor:pointer; color:var(--lion-gold); }

        /* HERO */
        .hero { background:linear-gradient(135deg,rgba(30,76,122,.88) 0%,rgba(30,76,122,.70) 50%,rgba(193,159,95,.50) 100%),url('https://i.postimg.cc/SxdY5RLR/PORTADA1.jpg'); background-size:cover; background-position:center; background-attachment:fixed; color:#fff; padding:240px 0 180px; text-align:center; position:relative; min-height:92vh; display:flex; align-items:center; overflow:hidden; }
        .hero::before { content:''; position:absolute; inset:0; background:radial-gradient(circle at center,transparent 0%,rgba(30,76,122,.3) 100%); pointer-events:none; }
        .hero::after { content:''; position:absolute; bottom:-2px; left:0; right:0; height:100px; background:linear-gradient(to bottom,transparent,#fff); }
        .hero .container { position:relative; z-index:1; width:100%; }
        .hero h1 { font-size:72px; margin-bottom:28px; text-shadow:0 4px 12px rgba(0,0,0,.3); letter-spacing:-2px; animation:fadeInUp 1s ease; }
        .hero h1 .highlight { color:var(--lion-gold); }
        .hero p { font-size:22px; margin-bottom:48px; max-width:750px; margin-left:auto; margin-right:auto; text-shadow:0 2px 8px rgba(0,0,0,.2); animation:fadeInUp 1s ease .2s backwards; }
        .hero-btns { display:flex; gap:24px; justify-content:center; flex-wrap:wrap; animation:fadeInUp 1s ease .4s backwards; }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }

        /* AMENIDADES */
        #amenidades { background:#fff; }
        .amenidades-intro { text-align:center; max-width:800px; margin:0 auto 60px; padding:32px; background:linear-gradient(135deg,var(--dutch-white),rgba(200,184,138,.1)); border-radius:var(--radius); border:2px solid var(--primary-light); }
        .amenidades-intro h3 { font-size:28px; color:var(--delft-blue); margin-bottom:16px; }
        .amenidades-intro p { font-size:17px; line-height:1.8; }
        .features-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:32px; margin-top:40px; }
        .feature-card { text-align:center; padding:42px 32px; background:#fff; border-radius:var(--radius); box-shadow:var(--shadow); transition:var(--tr); border:2px solid transparent; position:relative; overflow:hidden; }
        .feature-card::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; background:linear-gradient(90deg,var(--lion-gold),var(--dark-gold)); transform:scaleX(0); transition:transform .4s; }
        .feature-card:hover::before { transform:scaleX(1); }
        .feature-card:hover { transform:translateY(-12px); box-shadow:var(--shadow-lg); border-color:var(--primary-light); }
        .feature-icon { font-size:56px; margin-bottom:24px; display:inline-block; transition:var(--tr); }
        .feature-card:hover .feature-icon { transform:scale(1.15) rotate(5deg); }
        .feature-card h3 { font-size:22px; margin-bottom:16px; color:var(--delft-blue); }
        .feature-card p { color:var(--text-light); font-size:15px; }

        /* PAQUETES */
        #paquetes { background:linear-gradient(to bottom,var(--dutch-white),#fff); }
        .paquetes-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(340px,1fr)); gap:36px; margin-top:48px; }
        .paquete-card { background:#fff; border-radius:var(--radius); box-shadow:var(--shadow-lg); transition:var(--tr); border:3px solid transparent; overflow:hidden; position:relative; }
        .paquete-card:hover { transform:translateY(-12px); box-shadow:0 24px 48px rgba(30,76,122,.2); border-color:var(--lion-gold); }
        .paquete-header { background:linear-gradient(135deg,var(--delft-blue),var(--sec-blue)); color:#fff; padding:32px 28px; text-align:center; position:relative; overflow:hidden; }
        .paquete-card.destacado .paquete-header { background:linear-gradient(135deg,var(--lion-gold),var(--dark-gold)); }
        .paquete-nombre { font-size:32px; margin-bottom:8px; position:relative; z-index:1; }
        .paquete-precio { font-size:48px; font-weight:700; letter-spacing:-1px; position:relative; z-index:1; }
        .paquete-precio small { font-size:16px; opacity:.9; display:block; margin-top:4px; }
        .paquete-body { padding:36px 28px; }
        .paquete-incluye { list-style:none; margin-bottom:28px; }
        .paquete-incluye li { padding:14px 0; border-bottom:1px solid var(--dutch-white); display:flex; align-items:flex-start; gap:12px; font-size:15px; }
        .paquete-incluye li:last-child { border-bottom:none; }
        .paquete-incluye li::before { content:'✓'; color:var(--lion-gold); font-weight:700; font-size:18px; flex-shrink:0; }
        .badge { position:absolute; top:20px; right:-35px; background:var(--lion-gold); color:#fff; padding:8px 45px; font-size:13px; font-weight:700; transform:rotate(45deg); z-index:2; }

        /* MENÚ */
        #menu { background:#fff; }
        .menu-intro { text-align:center; max-width:750px; margin:0 auto 56px; background:var(--dutch-white); padding:32px; border-radius:var(--radius); border:2px solid var(--primary-light); }
        .menu-intro p { font-size:16px; line-height:1.8; }
        .menu-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:28px; max-width:1100px; margin:0 auto; }
        .menu-item { background:#fff; border-radius:var(--radius); padding:32px 28px; box-shadow:var(--shadow); transition:var(--tr); border:2px solid transparent; text-align:center; }
        .menu-item:hover { transform:translateY(-8px); box-shadow:var(--shadow-lg); border-color:var(--lion-gold); }
        .menu-item.consultar { border:2px dashed var(--primary-light); background:var(--dutch-white); }
        .menu-icon { font-size:52px; margin-bottom:16px; display:block; }
        .menu-item h4 { font-size:22px; color:var(--delft-blue); margin-bottom:12px; }
        .menu-precio { font-size:32px; font-weight:700; color:var(--lion-gold); margin-bottom:8px; }
        .menu-precio small { font-size:14px; color:var(--text-light); display:block; font-weight:400; }
        .menu-precio.consultar-txt { font-size:20px; color:var(--sec-blue); }
        .menu-nota { background:linear-gradient(135deg,rgba(193,159,95,.1),rgba(193,159,95,.05)); padding:24px; border-radius:12px; margin-top:48px; text-align:center; border:2px solid var(--primary-light); }
        .menu-nota p { font-size:15px; line-height:1.7; margin:0; }

        /* COTIZADOR */
        .cotizador-section { background:linear-gradient(135deg,rgba(249,246,240,.95),rgba(200,184,138,.2)); }
        .cotizador-card { max-width:800px; margin:0 auto; background:#fff; border-radius:28px; padding:52px 48px; box-shadow:var(--shadow-lg); border:1px solid rgba(193,159,95,.2); }
        .cotizador-card h3 { font-size:38px; color:var(--delft-blue); margin-bottom:16px; text-align:center; }
        .aviso-precio { background:linear-gradient(135deg,rgba(30,76,122,.1),rgba(30,76,122,.05)); padding:16px 24px; border-radius:12px; text-align:center; margin-bottom:36px; border-left:4px solid var(--delft-blue); }
        .aviso-precio p { margin:0; color:var(--delft-blue); font-weight:600; font-size:15px; }
        .campo { margin-bottom:32px; }
        .campo label { display:block; font-weight:600; color:var(--delft-blue); margin-bottom:16px; font-size:17px; }
        .opciones-grid { display:flex; flex-direction:column; gap:14px; }
        .opcion-radio { display:flex; align-items:center; justify-content:space-between; padding:20px 24px; background:var(--dutch-white); border-radius:14px; cursor:pointer; border:2px solid transparent; transition:var(--tr); }
        .opcion-radio:hover { border-color:var(--primary-light); background:rgba(193,159,95,.08); }
        .opcion-radio.selected { border-color:var(--lion-gold); background:linear-gradient(135deg,rgba(193,159,95,.15),rgba(193,159,95,.08)); box-shadow:0 4px 12px rgba(193,159,95,.2); }
        .opcion-radio input { accent-color:var(--lion-gold); margin-right:16px; width:20px; height:20px; cursor:pointer; }
        .opcion-precio { font-weight:700; color:var(--lion-gold); font-size:17px; }
        input[type="number"] { width:100%; padding:18px 20px; border:2px solid #e5e7eb; border-radius:14px; font-size:17px; font-family:'Poppins',sans-serif; transition:var(--tr); color:var(--text); }
        input[type="number"]:focus { border-color:var(--lion-gold); outline:none; box-shadow:0 0 0 4px rgba(193,159,95,.15); }
        .total-box { background:linear-gradient(135deg,var(--delft-blue),var(--sec-blue)); color:#fff; padding:36px; border-radius:20px; text-align:center; margin:36px 0; box-shadow:var(--shadow-lg); position:relative; overflow:hidden; }
        .total-box::before { content:''; position:absolute; top:-50%; right:-50%; width:200%; height:200%; background:radial-gradient(circle,rgba(193,159,95,.1) 0%,transparent 70%); animation:rotate 20s linear infinite; }
        @keyframes rotate { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        .total-box .monto { font-size:48px; font-weight:700; letter-spacing:-1px; position:relative; z-index:1; text-shadow:0 2px 8px rgba(0,0,0,.2); }

        /* GALERÍA */
        .gallery { background:linear-gradient(to bottom,#fff,var(--dutch-white)); }
        .gallery-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(320px,1fr)); gap:28px; }
        .gallery-item { position:relative; border-radius:var(--radius); overflow:hidden; cursor:pointer; aspect-ratio:4/3; box-shadow:var(--shadow); transition:var(--tr); }
        .gallery-item::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(193,159,95,.7),rgba(30,76,122,.7)); opacity:0; transition:var(--tr); z-index:1; }
        .gallery-item:hover::before { opacity:1; }
        .gallery-item::after { content:'🔍 Ver imagen'; position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); color:#fff; font-weight:600; font-size:18px; opacity:0; transition:var(--tr); z-index:2; }
        .gallery-item:hover::after { opacity:1; }
        .gallery-item img { width:100%; height:100%; object-fit:cover; transition:transform .7s cubic-bezier(.25,.46,.45,.94); }
        .gallery-item:hover img { transform:scale(1.12); }
        .gallery-item:hover { box-shadow:var(--shadow-lg); }

        /* CALENDARIOS */
        .calendarios-section { background:#fff; }
        .calendarios-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(400px,1fr)); gap:48px; margin-top:48px; }
        .calendario-card { background:#fff; border-radius:var(--radius); overflow:hidden; box-shadow:var(--shadow-lg); border:2px solid var(--primary-light); }
        .calendario-header { background:linear-gradient(135deg,var(--delft-blue),var(--sec-blue)); color:#fff; padding:24px; text-align:center; }
        .calendario-header h3 { font-size:24px; margin-bottom:8px; }
        .calendario-header p { font-size:14px; opacity:.9; margin:0; }
        .calendario-wrapper iframe { width:100%; height:500px; border:0; display:block; }
        .calendario-actions { padding:24px; text-align:center; background:var(--dutch-white); }

        /* TESTIMONIOS */
        #testimonios { background:linear-gradient(to bottom,var(--dutch-white),#fff); }
        .testimonials-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(340px,1fr)); gap:36px; }
        .testimonial-card { background:#fff; padding:38px 34px; border-radius:var(--radius); box-shadow:var(--shadow); transition:var(--tr); border:2px solid transparent; position:relative; }
        .testimonial-card::before { content:'"'; position:absolute; top:-10px; left:20px; font-size:80px; color:var(--lion-gold); opacity:.2; font-family:Georgia,serif; line-height:1; }
        .testimonial-card:hover { transform:translateY(-8px); box-shadow:var(--shadow-lg); border-color:var(--primary-light); }
        .stars { color:var(--lion-gold); letter-spacing:3px; margin-bottom:20px; font-size:20px; }

        /* FAQ */
        #faq { background:#fff; }
        .faq-grid { max-width:850px; margin:0 auto; }
        .faq-item { background:#fff; border-radius:14px; margin-bottom:16px; box-shadow:var(--shadow); border:2px solid var(--dutch-white); transition:var(--tr); }
        .faq-item:hover { border-color:var(--primary-light); }
        .faq-item.active { border-color:var(--lion-gold); box-shadow:var(--shadow-lg); }
        .faq-question { padding:24px 30px; font-weight:600; cursor:pointer; display:flex; justify-content:space-between; align-items:center; font-size:17px; color:var(--delft-blue); transition:var(--tr); font-family:Georgia,serif; }
        .faq-question:hover { color:var(--lion-gold); }
        .faq-question span { transition:var(--tr); color:var(--lion-gold); }
        .faq-item.active .faq-question span { transform:rotate(180deg); }
        .faq-answer { padding:0 30px 28px; display:none; color:var(--text-light); line-height:1.8; }
        .faq-item.active .faq-answer { display:block; }

        /* CONTACTO */
        #contacto { background:linear-gradient(to bottom,var(--dutch-white),#fff); }
        .contact-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(340px,1fr)); gap:48px; }
        .contact-info { background:#fff; padding:42px; border-radius:var(--radius); box-shadow:var(--shadow); border:2px solid var(--primary-light); }
        .contact-info h3 { color:var(--delft-blue); margin-bottom:14px; font-size:22px; display:flex; align-items:center; gap:10px; }
        .contact-info p { margin-bottom:24px; color:var(--text-light); line-height:1.7; }
        .mapa { border-radius:var(--radius); overflow:hidden; box-shadow:var(--shadow-lg); height:100%; min-height:400px; border:2px solid var(--primary-light); }
        .mapa iframe { width:100%; height:100%; min-height:400px; border:0; }

        /* FOOTER */
        .footer { background:linear-gradient(135deg,var(--delft-blue),var(--sec-dark)); color:#fff; padding:64px 0 32px; position:relative; }
        .footer::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; background:linear-gradient(90deg,transparent,var(--lion-gold),transparent); }
        .footer-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:48px; margin-bottom:48px; }
        .footer h3,.footer h4 { color:var(--lion-gold); margin-bottom:20px; }
        .footer a { color:#cbd5e0; text-decoration:none; transition:var(--tr); display:inline-block; }
        .footer a:hover { color:var(--lion-gold); transform:translateX(4px); }
        .footer-bottom { text-align:center; padding-top:32px; border-top:1px solid rgba(255,255,255,.1); font-size:14px; color:#94a3b8; }

        /* WHATSAPP */
        .whatsapp-float { position:fixed; bottom:32px; right:32px; background:#25D366; color:#fff; width:65px; height:65px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:36px; box-shadow:0 8px 24px rgba(37,211,102,.4); transition:var(--tr); z-index:999; text-decoration:none; animation:pulse 2s infinite; }
        @keyframes pulse { 0%,100%{box-shadow:0 8px 24px rgba(37,211,102,.4)} 50%{box-shadow:0 8px 32px rgba(37,211,102,.6)} }
        .whatsapp-float:hover { transform:scale(1.15); background:#128C7E; animation:none; }

        /* MODAL */
        .modal { display:none; position:fixed; inset:0; background:rgba(0,0,0,.95); z-index:2000; justify-content:center; align-items:center; cursor:pointer; backdrop-filter:blur(8px); }
        .modal img { max-width:92%; max-height:92%; border-radius:12px; box-shadow:0 20px 60px rgba(0,0,0,.5); animation:zoomIn .3s ease; }
        @keyframes zoomIn { from{opacity:0;transform:scale(.8)} to{opacity:1;transform:scale(1)} }

        /* RESPONSIVE */
        @media(max-width:768px) {
            .menu-toggle { display:block; }
            .nav-links { display:none; position:absolute; top:80px; left:0; width:100%; background:#fff; flex-direction:column; padding:32px 24px; box-shadow:var(--shadow-lg); gap:20px; border-top:2px solid var(--lion-gold); }
            .nav-links.active { display:flex; }
            .nav-links a { color:var(--delft-blue); }
            .hero h1 { font-size:42px; letter-spacing:-1px; }
            .hero { padding:160px 0 120px; min-height:75vh; background-attachment:scroll; }
            .hero p { font-size:18px; }
            .section-title { font-size:36px; }
            .cotizador-card { padding:36px 28px; }
            .total-box .monto { font-size:36px; }
            section { padding:70px 0; }
            .features-grid,.paquetes-grid,.menu-grid,.gallery-grid,.testimonials-grid,.contact-grid { grid-template-columns:1fr; }
            .calendarios-grid { grid-template-columns:1fr; }
        }
        @media(max-width:480px) {
            .hero h1 { font-size:32px; }
            .hero p { font-size:16px; }
            .hero-btns { flex-direction:column; }
            .btn { width:100%; text-align:center; }
        }
    </style>
</head>
<body>

<!-- NAVBAR -->
<nav class="navbar" id="navbar">
    <div class="container">
        <a href="#" class="logo"><img src="https://i.postimg.cc/SxdY5RLK/LOGO.png" alt="El Fox Manor"></a>
        <div class="menu-toggle" id="menuToggle">☰</div>
        <ul class="nav-links" id="navLinks">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#paquetes">Paquetes</a></li>
            <li><a href="#menu">Menú</a></li>
            <li><a href="#cotizador">Cotizar</a></li>
            <li><a href="#galeria">Galería</a></li>
            <li><a href="#calendarios">Disponibilidad</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
    </div>
</nav>

<!-- HERO -->
<section id="inicio" class="hero">
    <div class="container">
        <h1>Tu evento, <span class="highlight">nuestro compromiso</span></h1>
        <p>Un salón completamente privado donde cada detalle cuenta. Seguridad, elegancia y atención personalizada para hacer de tu celebración una experiencia inolvidable.</p>
        <div class="hero-btns">
            <a href="#cotizador" class="btn btn-primary">Cotizar mi evento</a>
            <a href="#calendarios" class="btn btn-outline">Agendar visita</a>
        </div>
    </div>
</section>

<!-- AMENIDADES -->
<section id="amenidades" data-aos="fade-up">
    <div class="container">
        <div class="amenidades-intro" data-aos="zoom-in">
            <h3>Cuidamos cada detalle para que tu evento sea una experiencia inolvidable</h3>
            <p><strong>El Fox Manor</strong> es tu salón completamente privado. No compartimos el espacio con otros eventos. Todo el lugar es exclusivamente tuyo, incluyendo estacionamiento amplio y seguro para tus invitados.</p>
        </div>
        <h2 class="section-title" data-aos="fade-up">Lo que hace especial a El Fox Manor</h2>
        <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">Un espacio nuevo, moderno y diseñado pensando en ti</p>
        <div class="features-grid">
            <div class="feature-card" data-aos="fade-up" data-aos-delay="100">
                <div class="feature-icon">🔒</div>
                <h3>100% Privado</h3>
                <p>El salón se renta únicamente a ti. Sin eventos simultáneos, sin compartir espacios. Todo es exclusivo para tu celebración.</p>
            </div>
            <div class="feature-card" data-aos="fade-up" data-aos-delay="200">
                <div class="feature-icon">🚗</div>
                <h3>Estacionamiento Amplio</h3>
                <p>40 espacios seguros. Olvídate del estrés del estacionamiento, tus invitados llegarán cómodos y tranquilos.</p>
            </div>
            <div class="feature-card" data-aos="fade-up" data-aos-delay="300">
                <div class="feature-icon">🌳</div>
                <h3>Jardín Privado</h3>
                <p>Amplio espacio verde ideal para ceremonias al aire libre o coctel de bienvenida. Perfecto para fotos memorables.</p>
            </div>
            <div class="feature-card" data-aos="fade-up" data-aos-delay="100">
                <div class="feature-icon">🎭</div>
                <h3>Sala para Anfitriones</h3>
                <p>Espacio privado con comedor, tarja y refrigerador. Para que los anfitriones descansen, se cambien o tengan privacidad.</p>
            </div>
            <div class="feature-card" data-aos="fade-up" data-aos-delay="200">
                <div class="feature-icon">🚻</div>
                <h3>Dos Áreas de Baños</h3>
                <p>Baños amplios con limpieza constante durante tu evento para garantizar comodidad en todo momento.</p>
            </div>
            <div class="feature-card" data-aos="fade-up" data-aos-delay="300">
                <div class="feature-icon">📹</div>
                <h3>Vigilancia 24/7</h3>
                <p>Cámaras de seguridad en áreas comunes y entrada. Tu evento y tus invitados estarán seguros en todo momento.</p>
            </div>
            <div class="feature-card" data-aos="fade-up" data-aos-delay="100">
                <div class="feature-icon">❄️</div>
                <h3>Clima Controlado</h3>
                <p>Salón techado con aire acondicionado. Comodidad garantizada sin importar la temporada del año.</p>
            </div>
            <div class="feature-card" data-aos="fade-up" data-aos-delay="200">
                <div class="feature-icon">🎵</div>
                <h3>Audio y Pantallas</h3>
                <p>Sistema de audio profesional y televisiones. Ideal para presentaciones, videos o música en vivo.</p>
            </div>
            <div class="feature-card" data-aos="fade-up" data-aos-delay="300">
                <div class="feature-icon">👨‍🍳</div>
                <h3>Cocina Industrial</h3>
                <p>Equipada para preparar alimentos al momento. Garantizamos platillos frescos y calientes para tus invitados.</p>
            </div>
            <div class="feature-card" data-aos="fade-up" data-aos-delay="100">
                <div class="feature-icon">🏠</div>
                <h3>Salón Nuevo</h3>
                <p>Instalaciones modernas y bien cuidadas. No tenemos años de desgaste, todo está en excelentes condiciones.</p>
            </div>
            <div class="feature-card" data-aos="fade-up" data-aos-delay="200">
                <div class="feature-icon">👥</div>
                <h3>Capacidad hasta 200 personas</h3>
                <p>Espacio amplio y cómodo. Tus invitados podrán moverse libremente sin sentirse apretados.</p>
            </div>
            <div class="feature-card" data-aos="fade-up" data-aos-delay="300">
                <div class="feature-icon">🤝</div>
                <h3>Atención Personalizada</h3>
                <p>¿Necesitas mariachi? ¿Un color específico de mantel? Lo conseguimos. Nos adaptamos a tus necesidades.</p>
            </div>
        </div>
    </div>
</section>

<!-- PAQUETES -->
<section id="paquetes">
    <div class="container">
        <h2 class="section-title" data-aos="fade-up">Nuestros Paquetes</h2>
        <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">Elige el que mejor se adapte a tu evento. Todos incluyen 12 horas de renta.</p>
        <div class="paquetes-grid">
            <!-- PLATA -->
            <div class="paquete-card" data-aos="fade-up" data-aos-delay="100">
                <div class="paquete-header">
                    <div class="paquete-nombre">Plata</div>
                    <div class="paquete-precio">$120<small>por persona</small></div>
                </div>
                <div class="paquete-body">
                    <ul class="paquete-incluye">
                        <li>12 horas de renta del salón</li>
                        <li>Mesas redondas para 10 personas</li>
                        <li>Mantel blanco + cubremantel</li>
                        <li>Sillas acolchonadas con cubresillas</li>
                        <li>Cocina: parrilla 3 quemadores + microondas (solo recalentar)</li>
                        <li>Limpieza de baños durante el evento</li>
                        <li>Estacionamiento con costo adicional</li>
                        <li>2 espacios reservados para anfitriones</li>
                    </ul>
                    <p style="text-align:center;color:var(--text-light);font-size:14px;margin-top:16px;">Capacidad máxima: 200 personas</p>
                </div>
            </div>
            <!-- CENTENARIO -->
            <div class="paquete-card destacado" data-aos="fade-up" data-aos-delay="200">
                <div class="badge">MÁS POPULAR</div>
                <div class="paquete-header">
                    <div class="paquete-nombre">Centenario</div>
                    <div class="paquete-precio">$150<small>por persona</small></div>
                </div>
                <div class="paquete-body">
                    <ul class="paquete-incluye">
                        <li><strong>Todo lo del paquete Plata, más:</strong></li>
                        <li>Servilletas individuales de tela</li>
                        <li>Mesa para anfitriones (mantel blanco, 2–4 sillas con cubresillas)</li>
                        <li>Loza completa (platos: trinche, arrocero, tazón, postre)</li>
                        <li>Cubiertos (cuchara, tenedor, cuchillo)</li>
                        <li>Vasos de vidrio</li>
                        <li><strong>Espacio privado para anfitriones</strong> (sala con comedor, tarja, refrigerador)</li>
                    </ul>
                    <p style="text-align:center;color:var(--text-light);font-size:14px;margin-top:16px;">Capacidad máxima: 200 personas</p>
                </div>
            </div>
            <!-- DIAMANTE -->
            <div class="paquete-card" data-aos="fade-up" data-aos-delay="300">
                <div class="paquete-header">
                    <div class="paquete-nombre">Diamante</div>
                    <div class="paquete-precio">$180<small>por persona</small></div>
                </div>
                <div class="paquete-body">
                    <ul class="paquete-incluye">
                        <li><strong>Todo lo del paquete Centenario, más:</strong></li>
                        <li>20 mesas redondas con mantel de <strong>LINO</strong></li>
                        <li>Sillas de <strong>MADERA</strong> (elegancia premium)</li>
                        <li>Servilletas y manteles de <strong>LINO</strong></li>
                        <li>Mesa de anfitriones con camino de mesa</li>
                        <li>2–4 sillas de madera para anfitriones</li>
                    </ul>
                    <p style="text-align:center;color:var(--text-light);font-size:14px;margin-top:16px;">Capacidad máxima: 200 personas</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- MENÚ -->
<section id="menu">
    <div class="container">
        <h2 class="section-title" data-aos="fade-up">Experiencia Gastronómica</h2>
        <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">Menú de 3 tiempos preparado al momento en nuestra cocina industrial</p>
        <div class="menu-intro" data-aos="zoom-in">
            <p><strong>Cada menú incluye:</strong> Entrada (sopa o ensalada) + Plato fuerte + Postre.<br>
            Puedes elegir entre varios platillos dentro de cada proteína. El precio depende del plato fuerte seleccionado.</p>
        </div>
        <div class="menu-grid">
            <div class="menu-item" data-aos="fade-up" data-aos-delay="100">
                <span class="menu-icon">🍗</span>
                <h4>Pollo</h4>
                <div class="menu-precio">$395<small>por persona</small></div>
            </div>
            <div class="menu-item" data-aos="fade-up" data-aos-delay="150">
                <span class="menu-icon">🥩</span>
                <h4>Cerdo</h4>
                <div class="menu-precio">$385<small>por persona</small></div>
            </div>
            <div class="menu-item" data-aos="fade-up" data-aos-delay="200">
                <span class="menu-icon">🐟</span>
                <h4>Pescado</h4>
                <div class="menu-precio">$385<small>por persona</small></div>
            </div>
            <div class="menu-item consultar" data-aos="fade-up" data-aos-delay="250">
                <span class="menu-icon">🥩</span>
                <h4>Res</h4>
                <div class="menu-precio consultar-txt">Consultar precio</div>
            </div>
            <div class="menu-item" data-aos="fade-up" data-aos-delay="300">
                <span class="menu-icon">🐠</span>
                <h4>Salmón</h4>
                <div class="menu-precio">$415<small>por persona</small></div>
            </div>
        </div>
        <div class="menu-nota" data-aos="fade-up" data-aos-delay="350">
            <p>💡 <strong>¿Tienes invitados pequeños?</strong> Ofrecemos menú especial para niños a <strong>$350 por persona</strong>. El precio se ajusta según el número de niños que asistan. ¡Consúltanos!</p>
        </div>
    </div>
</section>

<!-- COTIZADOR -->
<section id="cotizador" class="cotizador-section">
    <div class="container">
        <div class="cotizador-card" data-aos="zoom-in">
            <h3>Cotiza tu evento</h3>
            <p style="color:var(--text-light);margin-bottom:28px;text-align:center;">Selecciona tus preferencias y obtén un presupuesto estimado</p>
            <div class="aviso-precio">
                <p>📌 Precios válidos para el año 2025</p>
            </div>
            <div class="campo">
                <label>Paquete de renta</label>
                <div class="opciones-grid" id="paqueteOptions"></div>
            </div>
            <div class="campo">
                <label>Número de invitados</label>
                <input type="number" id="personas" value="100" min="20" max="200" step="10">
            </div>
            <div class="campo">
                <label>¿Deseas contratar catering?</label>
                <div class="opciones-grid" id="menuOptions"></div>
            </div>
            <div class="total-box">
                <div style="font-size:15px;opacity:.9;letter-spacing:1.5px;position:relative;z-index:1;">INVERSIÓN ESTIMADA</div>
                <div class="monto" id="totalMonto">$0 MXN</div>
                <div style="font-size:13px;opacity:.8;margin-top:8px;position:relative;z-index:1;">+ IVA (16%) | Precio total del evento</div>
            </div>
            <button class="btn btn-primary" id="cotizarWhatsAppBtn" style="width:100%;justify-content:center;display:flex;align-items:center;gap:10px;">
                💬 Enviar cotización por WhatsApp
            </button>
        </div>
    </div>
</section>

<!-- GALERÍA -->
<section id="galeria" class="gallery">
    <div class="container">
        <h2 class="section-title" data-aos="fade-up">Nuestra Galería</h2>
        <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">Conoce nuestros espacios y eventos realizados</p>
        <div class="gallery-grid" id="galleryGrid"></div>
    </div>
</section>

<!-- CALENDARIOS -->
<section id="calendarios" class="calendarios-section">
    <div class="container">
        <h2 class="section-title" data-aos="fade-up">Disponibilidad y Visitas</h2>
        <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">Consulta fechas disponibles o agenda una visita para conocer el salón</p>
        <div class="calendarios-grid">
            <div class="calendario-card" data-aos="fade-right">
                <div class="calendario-header">
                    <h3>📅 Fechas Disponibles</h3>
                    <p>Selecciona tu fecha ideal y confírmala con nosotros</p>
                </div>
                <div class="calendario-wrapper">
                    <iframe src="https://calendar.google.com/calendar/embed?src=contacto.sartor.inmobiliaria%40gmail.com&ctz=America%2FMexico_City" frameborder="0" scrolling="no"></iframe>
                </div>
                <div class="calendario-actions">
                    <button class="btn btn-primary" id="consultarFechaBtn">📅 Consultar fecha por WhatsApp</button>
                </div>
            </div>
            <div class="calendario-card" data-aos="fade-left">
                <div class="calendario-header">
                    <h3>🏠 Agendar Visita</h3>
                    <p>Conoce el salón personalmente. Visitas de 10:00 AM a 2:00 PM</p>
                </div>
                <div class="calendario-wrapper">
                    <iframe src="https://calendar.google.com/calendar/embed?src=contacto.sartor.inmobiliaria%40gmail.com&ctz=America%2FMexico_City&mode=WEEK" frameborder="0" scrolling="no"></iframe>
                </div>
                <div class="calendario-actions">
                    <button class="btn btn-outline" id="agendarVisitaBtn">🗓️ Solicitar visita por WhatsApp</button>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- TESTIMONIOS -->
<section id="testimonios">
    <div class="container">
        <h2 class="section-title" data-aos="fade-up">Lo que dicen nuestros clientes</h2>
        <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">Experiencias reales de quienes confiaron en nosotros</p>
        <div class="testimonials-grid" id="testimoniosGrid"></div>
    </div>
</section>

<!-- FAQ -->
<section id="faq">
    <div class="container">
        <h2 class="section-title" data-aos="fade-up">Preguntas frecuentes</h2>
        <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">Resuelve tus dudas antes de contactarnos</p>
        <div class="faq-grid" id="faqGrid"></div>
    </div>
</section>

<!-- CONTACTO -->
<section id="contacto">
    <div class="container">
        <h2 class="section-title" data-aos="fade-up">¿Dónde estamos?</h2>
        <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">Visítanos y enamórate del espacio</p>
        <div class="contact-grid">
            <div class="contact-info" data-aos="fade-right">
                <h3>📍 El Fox Manor</h3>
                <p>Juan Pablo II Manzana 028, Barrio de Santa María, 52755 Ocoyoacac, Méx.</p>
                <h3>📞 Teléfono</h3>
                <p><a href="tel:+525512345678" style="color:var(--lion-gold);font-weight:600;">(55) 1234 5678</a></p>
                <h3>✉️ Email</h3>
                <p><a href="mailto:contacto@foxmanor.com" style="color:var(--lion-gold);font-weight:600;">contacto@foxmanor.com</a></p>
                <h3>⏰ Horario de atención</h3>
                <p>Lunes a Domingo: 10:00 AM – 8:00 PM</p>
                <h3>🎯 ¿Listo para tu evento?</h3>
                <p>Contáctanos hoy y hagamos realidad la celebración perfecta.</p>
            </div>
            <div class="mapa" data-aos="fade-left">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3991.8530679283517!2d-99.47105072454399!3d19.270654581974455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdf5d6df54d3ed%3A0x72ba2110a4369ccc!2sSAL%C3%93N%20DE%20EVENTOS%20REAL%20SARTOR!5e1!3m2!1ses-419!2smx!4v1778803567148!5m2!1ses-419!2smx" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    </div>
</section>

<!-- FOOTER -->
<footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <div>
                <h3>El Fox Manor</h3>
                <p style="color:#cbd5e0;line-height:1.7;">Tu salón privado y exclusivo. Donde cada detalle cuenta y cada evento es una experiencia inolvidable.</p>
            </div>
            <div>
                <h4>Navegar</h4>
                <p><a href="#inicio">Inicio</a></p>
                <p><a href="#paquetes">Paquetes</a></p>
                <p><a href="#menu">Menú</a></p>
                <p><a href="#cotizador">Cotizar</a></p>
                <p><a href="#galeria">Galería</a></p>
            </div>
            <div>
                <h4>Contacto</h4>
                <p><a href="tel:+525512345678">📞 (55) 1234 5678</a></p>
                <p><a href="mailto:contacto@foxmanor.com">✉️ contacto@foxmanor.com</a></p>
                <p><a href="#contacto">📍 Ocoyoacac, Méx.</a></p>
            </div>
            <div>
                <h4>Legal</h4>
                <p><a href="#" id="avisoPrivacidadLink">Aviso de privacidad</a></p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 El Fox Manor – Salón de Eventos. Todos los derechos reservados.</p>
        </div>
    </div>
</footer>

<!-- MODAL PRIVACIDAD -->
<div id="privacidadModal" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,.9);z-index:3000;justify-content:center;align-items:center;backdrop-filter:blur(8px);">
    <div style="background:#fff;max-width:550px;padding:42px;border-radius:24px;margin:20px;box-shadow:0 20px 60px rgba(0,0,0,.3);border:2px solid var(--lion-gold);">
        <h3 style="margin-bottom:20px;color:var(--delft-blue);font-size:28px;">Aviso de Privacidad</h3>
        <p style="color:#4a5568;line-height:1.8;">El Fox Manor con domicilio en Ocoyoacac, Estado de México, es responsable de sus datos personales. La información recabada será utilizada para cotización y seguimiento de su evento. Puede ejercer sus derechos ARCO escribiendo a privacidad@foxmanor.com.</p>
        <button onclick="document.getElementById('privacidadModal').style.display='none'" style="margin-top:32px;background:linear-gradient(135deg,var(--lion-gold),var(--dark-gold));color:#fff;border:none;padding:14px 32px;border-radius:50px;cursor:pointer;font-weight:600;">Cerrar</button>
    </div>
</div>

<!-- MODAL GALERÍA -->
<div id="modalGaleria" class="modal">
    <img id="modalImg" src="" alt="Vista ampliada">
</div>

<!-- WHATSAPP FLOTANTE -->
<a href="https://wa.me/521234567890?text=Hola%2C%20me%20interesa%20El%20Fox%20Manor" class="whatsapp-float" target="_blank" title="Contáctanos por WhatsApp">💬</a>

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
// ========== DATOS ==========
const paquetes = {
    plata:      { nombre: "Plata",      precio: 120 },
    centenario: { nombre: "Centenario", precio: 150 },
    diamante:   { nombre: "Diamante",   precio: 180 }
};

// Menú de res excluido del cotizador (solo se muestra en la sección de menú)
const menus = {
    ninguno:  { nombre: "Sin catering",          precio: 0,   porPersona: false },
    pollo:    { nombre: "Pollo (3 tiempos)",      precio: 395, porPersona: true  },
    cerdo:    { nombre: "Cerdo (3 tiempos)",      precio: 385, porPersona: true  },
    pescado:  { nombre: "Pescado (3 tiempos)",    precio: 385, porPersona: true  },
    salmon:   { nombre: "Salmón (3 tiempos)",     precio: 415, porPersona: true  }
};

// ========== RENDERIZAR PAQUETES ==========
function renderPaquetes() {
    const c = document.getElementById('paqueteOptions');
    let sel = localStorage.getItem('paqueteSeleccionado') || 'plata';
    c.innerHTML = '';
    for (const [k, v] of Object.entries(paquetes)) {
        const d = document.createElement('div');
        d.className = 'opcion-radio' + (sel === k ? ' selected' : '');
        d.innerHTML = `
            <div style="display:flex;align-items:center;">
                <input type="radio" name="paquete" value="${k}" ${sel===k?'checked':''}>
                <span style="margin-left:12px;"><strong>${v.nombre}</strong></span>
            </div>
            <span class="opcion-precio">$${v.precio}/persona</span>`;
        d.querySelector('input').addEventListener('change', e => {
            if (e.target.checked) {
                document.querySelectorAll('#paqueteOptions .opcion-radio').forEach(el => el.classList.remove('selected'));
                d.classList.add('selected');
                localStorage.setItem('paqueteSeleccionado', k);
                calcularTotal();
            }
        });
        c.appendChild(d);
    }
}

// ========== RENDERIZAR MENÚ ==========
function renderMenu() {
    const c = document.getElementById('menuOptions');
    let sel = localStorage.getItem('menuSeleccionado') || 'ninguno';
    c.innerHTML = '';
    for (const [k, v] of Object.entries(menus)) {
        const d = document.createElement('div');
        d.className = 'opcion-radio' + (sel === k ? ' selected' : '');
        d.innerHTML = `
            <div style="display:flex;align-items:center;">
                <input type="radio" name="menu" value="${k}" ${sel===k?'checked':''}>
                <span style="margin-left:12px;"><strong>${v.nombre}</strong></span>
            </div>
            <span class="opcion-precio">${v.precio === 0 ? 'No aplica' : '+$'+v.precio+'/persona'}</span>`;
        d.querySelector('input').addEventListener('change', e => {
            if (e.target.checked) {
                document.querySelectorAll('#menuOptions .opcion-radio').forEach(el => el.classList.remove('selected'));
                d.classList.add('selected');
                localStorage.setItem('menuSeleccionado', k);
                calcularTotal();
            }
        });
        c.appendChild(d);
    }
}

// ========== CALCULAR TOTAL ==========
function calcularTotal() {
    const pk = document.querySelector('input[name="paquete"]:checked')?.value || 'plata';
    const mk = document.querySelector('input[name="menu"]:checked')?.value || 'ninguno';
    let personas = parseInt(document.getElementById('personas')?.value || 100);
    if (isNaN(personas)) personas = 100;
    if (personas < 20) personas = 20;
    if (personas > 200) personas = 200;
    document.getElementById('personas').value = personas;
    const total = (paquetes[pk]?.precio || 0) * personas + (menus[mk]?.precio || 0) * personas;
    document.getElementById('totalMonto').innerText = '$' + total.toLocaleString('es-MX') + ' MXN';
    return total;
}

// ========== ENVIAR POR WHATSAPP ==========
function enviarCotizacion() {
    const pk = document.querySelector('input[name="paquete"]:checked')?.value || 'plata';
    const mk = document.querySelector('input[name="menu"]:checked')?.value || 'ninguno';
    const personas = document.getElementById('personas')?.value || 100;
    const total = calcularTotal();
    const msg = `¡Hola! Me interesa cotizar mi evento en El Fox Manor.%0A%0A` +
        `📦 *Paquete:* ${paquetes[pk].nombre}%0A` +
        `👥 *Invitados:* ${personas} personas%0A` +
        `🍽️ *Menú:* ${menus[mk].nombre}%0A` +
        `💰 *Total estimado:* $${total.toLocaleString('es-MX')} MXN + IVA%0A%0A` +
        `¿Podrían confirmarme disponibilidad? Gracias.`;
    window.open(`https://wa.me/521234567890?text=${msg}`, '_blank');
}

// ========== GALERÍA ==========
function cargarGaleria() {
    const grid = document.getElementById('galleryGrid');
    const imgs = [
        'https://i.postimg.cc/6pc4SqVB/EVENTO1.jpg',
        'https://i.postimg.cc/8z4f3cdp/EVENTO2.jpg',
        'https://i.postimg.cc/L8Dg75k4/EVENTO3.jpg',
        'https://i.postimg.cc/P5yvcJbr/EVENTO4.jpg'
    ];
    grid.innerHTML = '';
    imgs.forEach((src, i) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.setAttribute('data-aos','zoom-in');
        item.setAttribute('data-aos-delay',(i*100).toString());
        item.innerHTML = `<img src="${src}" alt="Galería El Fox Manor ${i+1}" loading="lazy">`;
        item.addEventListener('click', () => {
            document.getElementById('modalGaleria').style.display = 'flex';
            document.getElementById('modalImg').src = src;
        });
        grid.appendChild(item);
    });
}

// ========== TESTIMONIOS ==========
function cargarTestimonios() {
    const c = document.getElementById('testimoniosGrid');
    const ts = [
        { nombre:"María L.", evento:"Boda", texto:"El lugar es hermoso y completamente privado. No tuvimos que compartir el estacionamiento con nadie más. Todo estuvo perfecto y la atención fue increíble.", estrellas:5, icono:"👰" },
        { nombre:"Carlos R.", evento:"XV Años", texto:"La sala de anfitriones fue un salvavidas. Pudimos descansar antes del evento. El salón es nuevo y todo está en excelentes condiciones.", estrellas:5, icono:"💎" },
        { nombre:"Ana G.", evento:"Evento Corporativo", texto:"El estacionamiento amplio y la seguridad nos dieron mucha tranquilidad. El audio y las pantallas funcionaron perfecto para nuestra presentación.", estrellas:5, icono:"🏆" }
    ];
    c.innerHTML = '';
    ts.forEach((t, i) => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.setAttribute('data-aos','fade-up');
        card.setAttribute('data-aos-delay',(i*150).toString());
        card.innerHTML = `
            <div class="stars">${'★'.repeat(t.estrellas)}</div>
            <p style="font-style:italic;margin:20px 0;line-height:1.7;">"${t.texto}"</p>
            <div style="display:flex;align-items:center;gap:16px;margin-top:24px;">
                <div style="font-size:42px;">${t.icono}</div>
                <div><strong style="font-size:17px;color:var(--delft-blue);">${t.nombre}</strong><br><span style="color:var(--text-light);font-size:14px;">${t.evento}</span></div>
            </div>`;
        c.appendChild(card);
    });
}

// ========== FAQ ==========
function cargarFAQ() {
    const c = document.getElementById('faqGrid');
    const faqs = [
        { p:"¿El salón es completamente privado?", r:"Sí, el salón se renta únicamente a ti. No compartimos el espacio con otros eventos. Todo el lugar, incluyendo estacionamiento, es exclusivamente para tu celebración." },
        { p:"¿Cuántas horas incluye la renta?", r:"Todos nuestros paquetes incluyen 12 horas de renta. Puedes contratar horas extras con costo adicional según disponibilidad." },
        { p:"¿Qué incluye la sala de anfitriones?", r:"La sala incluye comedor, tarja, refrigerador y es un espacio privado donde los anfitriones pueden descansar, cambiarse o tener privacidad. Disponible en paquetes Centenario y Diamante." },
        { p:"¿El menú se prepara en el lugar?", r:"Sí, contamos con cocina industrial equipada para preparar todos los alimentos al momento. Garantizamos platillos frescos y calientes para tus invitados." },
        { p:"¿Puedo traer mi propio decorador?", r:"Sí, puedes traer tu propio decorador sin costo adicional. Solo necesitamos que nos avises con anticipación para coordinar." },
        { p:"¿Cómo puedo agendar una visita?", r:"Las visitas se realizan de 10:00 AM a 2:00 PM. Puedes contactarnos por WhatsApp o usar el botón de la sección de disponibilidad para solicitar tu cita." }
    ];
    c.innerHTML = '';
    faqs.forEach((f, i) => {
        const item = document.createElement('div');
        item.className = 'faq-item';
        item.setAttribute('data-aos','fade-up');
        item.setAttribute('data-aos-delay',(i*100).toString());
        item.innerHTML = `<div class="faq-question">${f.p}<span>▼</span></div><div class="faq-answer">${f.r}</div>`;
        item.querySelector('.faq-question').addEventListener('click', () => item.classList.toggle('active'));
        c.appendChild(item);
    });
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration:800, easing:'ease-out-cubic', once:true, offset:50 });

    renderPaquetes();
    renderMenu();
    calcularTotal();
    cargarGaleria();
    cargarTestimonios();
    cargarFAQ();

    // Navbar scroll
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('menuToggle');
    const links  = document.getElementById('navLinks');
    toggle.addEventListener('click', () => links.classList.toggle('active'));
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('active')));
    window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 50));

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const t = document.querySelector(a.getAttribute('href'));
            if (t) { e.preventDefault(); window.scrollTo({ top: t.offsetTop - 80, behavior:'smooth' }); }
        });
    });

    // Botones
    document.getElementById('cotizarWhatsAppBtn').addEventListener('click', enviarCotizacion);
    document.getElementById('consultarFechaBtn').addEventListener('click', () =>
        window.open('https://wa.me/521234567890?text=' + encodeURIComponent('Hola, me interesa El Fox Manor. ¿Podrían confirmarme disponibilidad para una fecha? Gracias.'), '_blank'));
    document.getElementById('agendarVisitaBtn').addEventListener('click', () =>
        window.open('https://wa.me/521234567890?text=' + encodeURIComponent('Hola, me gustaría agendar una visita a El Fox Manor. Prefiero horarios de 10:00 AM a 2:00 PM. ¿Tienen disponibilidad? Gracias.'), '_blank'));

    // Modal galería
    document.getElementById('modalGaleria').addEventListener('click', () =>
        document.getElementById('modalGaleria').style.display = 'none');

    // Modal privacidad
    document.getElementById('avisoPrivacidadLink').addEventListener('click', e => {
        e.preventDefault();
        document.getElementById('privacidadModal').style.display = 'flex';
    });
    document.getElementById('privacidadModal').addEventListener('click', e => {
        if (e.target === document.getElementById('privacidadModal')) document.getElementById('privacidadModal').style.display = 'none';
    });

    // Input personas
    document.getElementById('personas').addEventListener('input', calcularTotal);
});
</script>
</body>
</html>
