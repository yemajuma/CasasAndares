import React, { useEffect, useState } from "react"

// ─── CONFIGURACIÓN ─────────────────────────────────────────────────────────
// ─── CONFIGURACIÓN DE WHATSAPP ────────────────────────────────────────────────
const WA_NUM = "5217224047668"

// Mensajes según la intención
const WA_MSG_COMPRAR = encodeURIComponent(
    "Hola, estoy interesado en COMPRAR una casa en Casas Andares. ¿Me pueden dar más información sobre precios y disponibilidad?"
)

const WA_MSG_RENTAR = encodeURIComponent(
    "Hola, estoy interesado en RENTAR una casa en Casas Andares. ¿Me pueden dar más información sobre requisitos y disponibilidad?"
)

const WA_MSG_CITA = encodeURIComponent(
    "Hola, me gustaría AGENDAR UNA VISITA para conocer las Casas Andares en Capulhuac. ¿Cuándo podrían atenderme?"
)

const WA_MSG_GENERAL = encodeURIComponent(
    "Hola, me interesa una casa en Casas Andares. ¿Me pueden dar más información?"
)
const WA_MSG_TERRENO = encodeURIComponent(
    "Hola, estoy interesado en COMPRAR UN TERRENO en Capulhuac. ¿Me pueden dar más información sobre precios y disponibilidad?"
)

// Links según la intención
const WA_LINK_COMPRAR = `https://wa.me/${WA_NUM}?text=${WA_MSG_COMPRAR}`
const WA_LINK_RENTAR = `https://wa.me/${WA_NUM}?text=${WA_MSG_RENTAR}`
const WA_LINK_CITA = `https://wa.me/${WA_NUM}?text=${WA_MSG_CITA}`
const WA_LINK_GENERAL = `https://wa.me/${WA_NUM}?text=${WA_MSG_GENERAL}`
const WA_LINK_TERRENO = `https://wa.me/${WA_NUM}?text=${WA_MSG_TERRENO}`

const TALLY_ID = "LZY06"

// ─── COLORES ────────────────────────────────────────────────────────────────
const C = {
    navy: "#0B3D6B",
    navyD: "#071e38",
    navyM: "#1560a0",
    navyL: "#e8f1fb",
    gold: "#b8952a",
    goldL: "#faf3e0",
    green: "#1a8f68",
    greenL: "#e6f5ef",
    white: "#ffffff",
    off: "#f8f9fb",
    border: "#dde6f0",
    text: "#18283a",
    muted: "#607080",
    dark: "#050f1a",
    terracota: "#c46b3f",
    terracotaL: "#fdf5f0",
    sunset: "#e8934f",
    sunsetL: "#fef7e8",
}

// ─── IMÁGENES ────────────────────────────────────────────────────────────────
const IMG = {
    hero: "https://i.postimg.cc/3NQLg6QL/IMAGEN2.png",
    casaA: "https://i.postimg.cc/260M2CX0/Frente-Casa.png",
    casaB: "https://i.postimg.cc/260M2CX0/Frente-Casa.png",
    sala: "https://i.postimg.cc/9M34Qt95/Sala-Comedor.jpg",
    cocina: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    recamara: "https://i.postimg.cc/prCyCw6W/RECAMARA-PRINCIPAL.jpg",
    jardin: "https://i.postimg.cc/wBNvZyGG/jardi-n.jpg",
    cancha: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
    croquis: "https://i.postimg.cc/kGnqSns9/CD3529A8-7069-4F8B-ADFA-539A7BC98BE1-1-201-a.jpg",
    fachada: "https://i.postimg.cc/260M2CX0/Frente-Casa.png",
    comedor:
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
    terraza:
        "https://i.postimg.cc/ZR1XgnXQ/Captura-de-Pantalla-2026-04-27-a-la(s)-17-57-56.png",
    cochera: "https://i.postimg.cc/y8sCsJxQ/COCHERA.jpg",
    // 👇 AGREGAR IMÁGENES DE TERRENOS 👇
    terreno1: "https://i.postimg.cc/kgt3B6CL/OCOYOACAC-AEREA.png",  // Cambia por tu imagen
    terreno2: "https://i.postimg.cc/RF4jsgHy/Capulhuac-AEREA.jpg",
    terreno3: "https://i.postimg.cc/N07nHRz4/Xometitla-AEREA.jpg",
    terreno4: "https://i.postimg.cc/m275RfmC/ALMAYA-AEREA.jpg",
}

// ─── DATOS DEL PROYECTO ─────────────────────────────────────────────────────
const PROYECTO = {
    nombre: "Tu nuevo hogar",
    tagline: "Tu hogar en un entorno privado y seguro",
    desc: "Casas Andares es un desarrollo exclusivo en Xometitla, Capulhuac, Estado de México, con 10 casas de dos plantas en un complejo cerrado con vigilancia 24/7. Cada casa cuenta con 99 m² de predio y 139 m² de construcción, diseñada para familias que buscan comodidad, seguridad y calidad de vida.",
    venta: "Consultar precio", // revisar bien el precio en la proxima reunion
    renta: "$9,000 / mes",
    predio: "99 m²",
    construccion: "139 m²",
    plantas: "2 plantas",
    casasTotales: "10 casas",
    casasVenta: "3 casas en venta",
    casasRenta: "7 casas en renta",
}

const PLANTA_BAJA = [
    "Sala – comedor amplio",
    "Cocina integral con campana extractora, parrilla y tarja",
    "Medio baño de visitas",
    "Estacionamiento techado (2 cajones)",
    "Jardín privado",
    "Escaleras con domo de iluminación natural",
    "Área de lavado",
]

const PLANTA_ALTA = [
    "Recámara principal con baño completo, vestidor, clóset y balcón con barandal",
    "2 recámaras adicionales con clóset",
    "Baño completo compartido (segundo baño)",
]

const INSTALACIONES = [
    "Tinaco de 1,100 litros",
    "Tanque estacionario de gas 300 litros",
    "Calentador de paso",
    "Calentador solar (3 servicios)",
]

const AMENIDADES = [
    {
        icon: "🛡️",
        titulo: "Acceso Controlado",
        desc: "Portón eléctrico y puerta peatonal con control remoto en el único acceso.",
    },
    {
        icon: "👮",
        titulo: "Caseta de Vigilancia",
        desc: "Personal de seguridad 24/7 en la entrada del fraccionamiento.",
    },
    {
        icon: "⚽",
        titulo: "Cancha de Fútbol Rápido",
        desc: "Cancha de uso exclusivo para residentes y sus familias.",
    },
    {
        icon: "🏋️",
        titulo: "Gimnasio",
        desc: "Gimnasio disponible para residentes",
    },
    {
        icon: "👕",
        titulo: "Lavandería",
        desc: "Área de lavandería de autoservicio dentro del complejo.",
    },
    {
        icon: "🏪",
        titulo: "Máquina de Snacks",
        desc: "Máquina de bebidas y frituras disponible las 24 horas.",
    },
    {
        icon: "🏢",
        titulo: "Oficina de Administración",
        desc: "Atención a residentes y gestión del fraccionamiento.",
    },
    {
        icon: "🛒",
        titulo: "Servicios Cercanos",
        desc: "Farmacia, tienda y servicios básicos.",
    },
]

const DISTANCIAS = [
    { lugar: "Toluca", dist: "45 min", icon: "🏙️" },
    { lugar: "Metepec", dist: "35 min", icon: "🏘️" },
    { lugar: "Santa Fe (CDMX)", dist: "1 hora", icon: "🌆" },
    { lugar: "Aeropuerto Toluca", dist: "40 min", icon: "✈️" },
    { lugar: "Plazas Outlet", dist: "35 min", icon: "🛍️" },
    { lugar: "Hospital IMSS", dist: "10 min", icon: "🏥" },
]

const GALERIA_FOTOS = [
    {
        src: IMG.sala,
        titulo: "Sala principal",
        desc: "Amplia sala con iluminación natural",
    },
    {
        src: IMG.cocina,
        titulo: "Cocina integral",
        desc: "Equipada con campana, parrilla y tarja",
    },
    {
        src: IMG.recamara,
        titulo: "Recámara principal",
        desc: "Con vestidor y baño completo",
    },
    {
        src: IMG.jardin,
        titulo: "Jardín privado",
        desc: "Espacio verde para disfrutar en familia",
    },
    {
        src: IMG.fachada,
        titulo: "Fachada moderna",
        desc: "Diseño contemporáneo y elegante",
    },
    {
        src: IMG.terraza,
        titulo: "Terraza y balcón",
        desc: "Vistas agradables y ventilación natural",
    },
]

// ─── COMPONENTES REUTILIZABLES ─────────────────────────────────────────────
function tag(txt: string, bg = C.goldL, color = C.gold) {
    return (
        <span
            style={{
                display: "inline-block",
                background: bg,
                color,
                fontSize: 11,
                fontWeight: 700,
                padding: "4px 14px",
                borderRadius: 20,
                letterSpacing: "0.07em",
            }}
        >
            {txt}
        </span>
    )
}

function SectionTitle({
    badge,
    badgeBg = C.goldL,
    badgeColor = C.gold,
    title,
    sub = "",
    light = false,
    center = false,
}) {
    return (
        <div
            style={{ marginBottom: 52, textAlign: center ? "center" : "left" }}
        >
            {tag(
                badge,
                light ? "rgba(255,255,255,.12)" : badgeBg,
                light ? "#fff" : badgeColor
            )}
            <h2
                style={{
                    fontSize: "clamp(28px, 5vw, 38px)",
                    fontWeight: 800,
                    lineHeight: 1.15,
                    color: light ? "#fff" : C.navy,
                    margin: "14px 0 12px",
                }}
            >
                {title}
            </h2>
            {sub && (
                <p
                    style={{
                        fontSize: "clamp(14px, 4vw, 17px)",
                        color: light ? "rgba(255,255,255,.65)" : C.muted,
                        maxWidth: 560,
                        margin: center ? "0 auto" : "0",
                        lineHeight: 1.75,
                    }}
                >
                    {sub}
                </p>
            )}
        </div>
    )
}

function Pill({ children, bg = C.navyL, color = C.navy }) {
    return (
        <span
            style={{
                display: "inline-block",
                background: bg,
                color,
                fontSize: 11,
                fontWeight: 700,
                padding: "3px 12px",
                borderRadius: 20,
                marginRight: 6,
                marginBottom: 6,
            }}
        >
            {children}
        </span>
    )
}

function BtnGold({
    children,
    href = undefined,
    onClick = undefined,
    full = false,
    style: s = {},
}: any) {
    const base: React.CSSProperties = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: C.gold,
        color: "#fff",
        fontSize: 14,
        fontWeight: 700,
        padding: "12px 26px",
        borderRadius: 6,
        border: "none",
        cursor: "pointer",
        textDecoration: "none",
        fontFamily: "inherit",
        letterSpacing: ".02em",
        transition: "opacity .15s, transform .1s",
        width: full ? "100%" : "auto",
        boxSizing: "border-box",
        ...s,
    }
    const hov = (e: any, in_: boolean) => {
        e.currentTarget.style.opacity = in_ ? ".85" : "1"
        e.currentTarget.style.transform = in_ ? "translateY(-1px)" : "none"
    }
    if (href)
        return (
            <a
                href={href}
                target={href.startsWith("http") ? "_blank" : "_self"}
                rel="noreferrer"
                style={base}
                onMouseEnter={(e) => hov(e, true)}
                onMouseLeave={(e) => hov(e, false)}
            >
                {children}
            </a>
        )
    return (
        <button
            onClick={onClick}
            style={base}
            onMouseEnter={(e) => hov(e, true)}
            onMouseLeave={(e) => hov(e, false)}
        >
            {children}
        </button>
    )
}

function BtnOutline({
    children,
    onClick = undefined,
    href = undefined,
    light = false,
    style: s = {},
}: any) {
    const base: React.CSSProperties = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
        color: light ? "#fff" : C.navy,
        border: light
            ? "1.5px solid rgba(255,255,255,.5)"
            : `1.5px solid ${C.navy}`,
        fontSize: 14,
        fontWeight: 700,
        padding: "11px 26px",
        borderRadius: 6,
        cursor: "pointer",
        textDecoration: "none",
        fontFamily: "inherit",
        letterSpacing: ".02em",
        transition: "opacity .15s",
        ...s,
    }
    if (href)
        return (
            <a href={href} target="_blank" rel="noreferrer" style={base}>
                {children}
            </a>
        )
    return (
        <button onClick={onClick} style={base}>
            {children}
        </button>
    )
}

const scroll = (id: string) =>
    document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" })
const scrollToGaleria = () => {
    const galeriaSection = document.getElementById("galeria-espacios")
    if (galeriaSection) {
        galeriaSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
}

// ─── CONTENEDOR DE IMAGEN CON ASPECT RATIO ─────────────────────────────────
// Mantiene la imagen completa (contain) sin invadir texto.
// Aspect ratio configurable, fondo neutro alrededor de la imagen.
function ImageBox({
    src,
    alt,
    ratio = "4/3", // "4/3" | "3/2" | "1/1" | "16/9"
    bg = C.off,
    borderRadius = 12,
    style: s = {},
}: {
    src: string
    alt: string
    ratio?: string
    bg?: string
    borderRadius?: number
    style?: React.CSSProperties
}) {
    return (
        <div
            style={{
                width: "100%",
                aspectRatio: ratio,
                background: bg,
                borderRadius,
                overflow: "hidden",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                ...s,
            }}
        >
            <img
                src={src}
                alt={alt}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                }}
            />
        </div>
    )
}

// ─── NAVBAR ────────────────────────────────────────────────────────────────
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const links = [
        { id: "inicio", label: "Inicio" },
        { id: "casas", label: "Casas" },
        { id: "amenidades", label: "Amenidades" },
        { id: "croquis", label: "Croquis" },
        { id: "ubicacion", label: "Ubicación" },
        { id: "terrenos", label: "Terrenos" },
        { id: "aviso-privacidad", label: "Aviso de Privacidad" },
    ]
    return (
        <nav
            style={{
                position: "sticky",
                top: 0,
                zIndex: 300,
                background: C.navyD,
                width: "100%",
                borderBottom: "1px solid rgba(255,255,255,.06)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 5%",
                    height: 66,
                    maxWidth: 1440,
                    margin: "0 auto",
                }}
            >
                <button
                    onClick={() => scroll("inicio")}
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        padding: 0,
                    }}
                >
                    <span
                        style={{
                            color: "#fff",
                            fontSize: "clamp(12px, 4vw, 16px)",
                            fontWeight: 800,
                            letterSpacing: ".06em",
                            lineHeight: 1,
                        }}
                    >
                        CASAS ANDARES
                    </span>
                    <span
                        style={{
                            color: C.gold,
                            fontSize: "clamp(7px, 3vw, 9px)",
                            fontWeight: 700,
                            letterSpacing: ".22em",
                        }}
                    >
                        CAPULHUAC · EDO. MÉX.
                    </span>
                </button>
                <div
                    style={{ display: "flex", gap: 2, alignItems: "center" }}
                    className="desktop-menu"
                >
                    {links.map((l) => (
                        <button
                            key={l.id}
                            onClick={() => scroll(l.id)}
                            style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                color: "rgba(255,255,255,.6)",
                                fontSize: 13,
                                fontWeight: 600,
                                padding: "6px 12px",
                                borderRadius: 5,
                                fontFamily: "inherit",
                                transition: "color .15s",
                                letterSpacing: ".01em",
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.color = "#fff")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.color =
                                    "rgba(255,255,255,.6)")
                            }
                        >
                            {l.label}
                        </button>
                    ))}
                </div>
                <div
                    style={{ display: "flex", gap: 8 }}
                    className="desktop-actions"
                >
                    <BtnOutline
                        href={WA_LINK_GENERAL}
                        light
                        style={{ padding: "8px 16px", fontSize: 13 }}
                    >
                        WhatsApp
                    </BtnOutline>
                    <BtnGold
                        onClick={() => scroll("contacto")}
                        style={{ padding: "8px 18px", fontSize: 13 }}
                    >
                        Contacto
                    </BtnGold>
                </div>
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        display: "none",
                        flexDirection: "column",
                        gap: 4,
                        padding: 8,
                    }}
                    className="hamburger"
                >
                    {[0, 1, 2].map((i) => (
                        <span
                            key={i}
                            style={{
                                width: 22,
                                height: 2,
                                background: "#fff",
                                borderRadius: 2,
                            }}
                        />
                    ))}
                </button>
            </div>
            {menuOpen && (
                <div
                    style={{
                        background: C.navyD,
                        padding: "20px 5%",
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                        borderTop: "1px solid rgba(255,255,255,.1)",
                    }}
                    className="mobile-menu"
                >
                    {links.map((l) => (
                        <button
                            key={l.id}
                            onClick={() => {
                                scroll(l.id)
                                setMenuOpen(false)
                            }}
                            style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                color: "#fff",
                                fontSize: 16,
                                fontWeight: 600,
                                padding: "10px 0",
                                textAlign: "left",
                                fontFamily: "inherit",
                            }}
                        >
                            {l.label}
                        </button>
                    ))}
                    <div style={{ display: "flex", gap: 12, marginTop: 10 }}>
                        <BtnOutline
                            href={WA_LINK_GENERAL}
                            light
                            style={{ flex: 1, justifyContent: "center" }}
                        >
                            WhatsApp
                        </BtnOutline>
                        <BtnGold
                            onClick={() => {
                                scroll("contacto")
                                setMenuOpen(false)
                            }}
                            style={{ flex: 1, justifyContent: "center" }}
                        >
                            Contacto
                        </BtnGold>
                    </div>
                </div>
            )}
            <style>{`
                @media (max-width: 768px) {
                    .desktop-menu { display: none !important; }
                    .desktop-actions { display: none !important; }
                    .hamburger { display: flex !important; }
                }
                @media (min-width: 769px) {
                    .mobile-menu { display: none !important; }
                }
            `}</style>
        </nav>
    )
}

// ─── HERO ─────────────────────────────────────────────────────────────────
// FIX: overlay reducido de .93 → .65 en el stop izquierdo para que la imagen se vea más.
function Hero() {
    return (
        <section
            id="inicio"
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${IMG.hero})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            {/* CAMBIO: opacidad del gradiente reducida — antes era .93/.55, ahora .65/.30 */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(105deg,rgba(5,15,26,.65) 38%,rgba(5,15,26,.30) 100%)",
                }}
            />
            <div
                style={{
                    position: "relative",
                    padding: "clamp(40px, 10vw, 80px) 5%",
                    maxWidth: 1440,
                    margin: "0 auto",
                    width: "100%",
                }}
            >
                <div style={{ textAlign: "center", marginBottom: 20 }}>
                    {tag("Xometitla, Capulhuac · Edo. Méx.", C.gold, "#fff")}
                </div>
                <h1
                    style={{
                        fontSize: "clamp(40px, 10vw, 60px)",
                        fontWeight: 800,
                        color: "#fff",
                        lineHeight: 1.08,
                        margin: "20px 0 18px",
                        textAlign: "center",
                    }}
                >
                    CASAS ANDARES
                    <br />
                    <span style={{ color: C.gold }}>CAPULHUAC</span>
                </h1>
                <p
                    style={{
                        fontSize: "clamp(14px, 4vw, 18px)",
                        color: "rgba(255,255,255,.82)",
                        lineHeight: 1.75,
                        maxWidth: 600,
                        margin: "0 auto 38px",
                        textAlign: "center",
                    }}
                >
                    {PROYECTO.tagline}. Desarrollo privado con 10 casas nuevas,
                    seguridad 24/7 y amenidades.
                </p>
                <div
                    style={{
                        display: "flex",
                        gap: 12,
                        flexWrap: "wrap",
                        justifyContent: "center",
                        marginBottom: 56,
                    }}
                >
                    <BtnGold onClick={() => scroll("casas")}>
                        Ver casas disponibles
                    </BtnGold>
                    <BtnOutline href={WA_LINK_CITA} light>
                        Agendar visita
                    </BtnOutline>
                </div>
                <div
                    style={{
                        display: "flex",
                        gap: "clamp(20px, 5vw, 36px)",
                        flexWrap: "wrap",
                        justifyContent: "center",
                    }}
                >
                    {[
                        [PROYECTO.venta, "Precio de venta"],
                        [PROYECTO.renta, "Renta mensual"],
                        [PROYECTO.construccion, "Construcción"],
                        [PROYECTO.casasTotales, "En el desarrollo"],
                    ].map(([v, l]) => (
                        <div key={l as string} style={{ textAlign: "center" }}>
                            <div
                                style={{
                                    fontSize: "clamp(18px, 5vw, 22px)",
                                    fontWeight: 800,
                                    color: "#fff",
                                }}
                            >
                                {v}
                            </div>
                            <div
                                style={{
                                    fontSize: 11,
                                    color: "rgba(255,255,255,.55)",
                                    marginTop: 3,
                                }}
                            >
                                {l}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
/*
// ─── BANNER DE BONO ────────────────────────────────────────────────────────
function BannerBono() {
    const [visible, setVisible] = useState(true)
    if (!visible) return null
    return (
        <div
            style={{
                background: `linear-gradient(90deg, ${C.gold} 0%, #d4a93a 50%, ${C.gold} 100%)`,
                padding: "0",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                        "repeating-linear-gradient(45deg, rgba(255,255,255,.04) 0px, rgba(255,255,255,.04) 1px, transparent 1px, transparent 20px)",
                    pointerEvents: "none",
                }}
            />
            <div
                style={{
                    maxWidth: 1440,
                    margin: "0 auto",
                    padding: "clamp(18px, 4vw, 28px) 5%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 20,
                    flexWrap: "wrap",
                    position: "relative",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "clamp(12px, 3vw, 24px)",
                        flexWrap: "wrap",
                    }}
                >
                    <div
                        style={{
                            background: "rgba(255,255,255,.2)",
                            borderRadius: "50%",
                            width: 52,
                            height: 52,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 26,
                            flexShrink: 0,
                            border: "2px solid rgba(255,255,255,.35)",
                        }}
                    >
                        🎁
                    </div>
                    <div>
                        <div
                            style={{
                                fontSize: "clamp(11px, 3vw, 12px)",
                                fontWeight: 800,
                                color: "rgba(255,255,255,.85)",
                                letterSpacing: ".12em",
                                textTransform: "uppercase",
                                marginBottom: 4,
                            }}
                        >
                            ¡Oferta por tiempo limitado!
                        </div>
                        <div
                            style={{
                                fontSize: "clamp(16px, 4vw, 22px)",
                                fontWeight: 800,
                                color: "#fff",
                                lineHeight: 1.2,
                            }}
                        >
                            Bono especial en la compra de tu casa 🏠
                        </div>
                        <div
                            style={{
                                fontSize: "clamp(12px, 3vw, 14px)",
                                color: "rgba(255,255,255,.85)",
                                marginTop: 4,
                            }}
                        >
                            Al comprar tu casa, recibes un bono exclusivo.
                            Pregunta por las condiciones —{" "}
                            <strong style={{ color: "#fff" }}>
                                ¡casas disponibles ahora!
                            </strong>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        flexShrink: 0,
                    }}
                >
                   {/* <a
                        href={WA_LINK_CITA}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            background: "#fff",
                            color: C.gold,
                            fontSize: "clamp(12px, 3vw, 14px)",
                            fontWeight: 800,
                            padding: "10px 22px",
                            borderRadius: 6,
                            textDecoration: "none",
                            letterSpacing: ".02em",
                            boxShadow: "0 4px 14px rgba(0,0,0,.15)",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                        }}
                    >
                        💬 Quiero mi bono
                    </a> */}
                    <button
                        onClick={() => setVisible(false)}
                        style={{
                            background: "rgba(255,255,255,.2)",
                            border: "none",
                            cursor: "pointer",
                            color: "#fff",
                            borderRadius: "50%",
                            width: 30,
                            height: 30,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 16,
                            fontWeight: 700,
                            flexShrink: 0,
                        }}
                    >
                        ✕
                    </button>
                </div>
            </div>
        </div>
    )
}
*/
// ─── DESCRIPCIÓN ─────────────────────────────────────────────────────────
function Descripcion() {
    return (
        <section
            style={{
                background: C.off,
                padding: "clamp(40px, 10vw, 72px) 5%",
                borderBottom: `1px solid ${C.border}`,
            }}
        >
            <div
                style={{
                    maxWidth: 1440,
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: 40,
                    alignItems: "center",
                }}
            >
                <div>
                    {tag("EL PROYECTO")}
                    <h2
                        style={{
                            fontSize: "clamp(28px, 5vw, 34px)",
                            fontWeight: 800,
                            color: C.navy,
                            margin: "14px 0 16px",
                            lineHeight: 1.2,
                        }}
                    >
                        Un desarrollo pensado para vivir bien
                    </h2>
                    <p
                        style={{
                            fontSize: "clamp(14px, 4vw, 16px)",
                            color: C.muted,
                            lineHeight: 1.8,
                            marginBottom: 24,
                        }}
                    >
                        {PROYECTO.desc}
                    </p>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(100px, 1fr))",
                            gap: 12,
                        }}
                    >
                        {[
                            [PROYECTO.casasTotales, "Total de casas"],
                            [PROYECTO.casasVenta, ""],
                            [PROYECTO.casasRenta, ""],
                            [PROYECTO.construccion, "Construcción"],
                            [PROYECTO.predio, "Predio c/u"],
                            [PROYECTO.plantas, "Por casa"],
                            ["24/7", "Vigilancia"],
                            ["100%", "Servicios"],
                        ].map(([v, l]) => (
                            <div
                                key={(l as string) || (v as string)}
                                style={{
                                    background: C.white,
                                    border: `1px solid ${C.border}`,
                                    borderRadius: 10,
                                    padding: "14px 12px",
                                    textAlign: "center",
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: "clamp(14px, 4vw, 18px)",
                                        fontWeight: 800,
                                        color: C.navy,
                                    }}
                                >
                                    {v}
                                </div>
                                {l && (
                                    <div
                                        style={{
                                            fontSize: 11,
                                            color: C.muted,
                                            marginTop: 3,
                                        }}
                                    >
                                        {l}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                {/* FIX: ImageBox con ratio 4/3 — imagen completa, no invade texto */}
                <ImageBox
                    src={IMG.hero}
                    alt="Casas"
                    ratio="4/3"
                    bg={C.navyL}
                    borderRadius={16}
                />
            </div>
        </section>
    )
}

// ─── CASAS (VENTA/RENTA) - SECCIÓN 1 ─────────────────────────────────────────
function Casas() {
    return (
        <section
            id="casas"
            style={{
                background: C.white,
                padding: "clamp(40px, 10vw, 88px) 5%",
            }}
        >
            <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                <SectionTitle
                    badge="CASAS DISPONIBLES"
                    title="3 en venta y 7 en renta"
                    sub="Un solo prototipo de casa, diseñado con todo lo que necesitas para vivir cómodamente."
                />

                /*{/* Banner bono */}
                <div
                    style={{
                        background: `linear-gradient(135deg, ${C.goldL} 0%, #fff8e8 100%)`,
                        border: `2px solid ${C.gold}`,
                        borderRadius: 14,
                        padding: "18px 24px",
                        marginBottom: 32,
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        alignItems: "center",
                        gap: 16,
                        flexWrap: "wrap",
                    }}
                >
                    <span style={{ fontSize: 28 }}>🎁</span>
                    <div style={{ flex: 1 }}>
                        <div
                            style={{
                                fontSize: 14,
                                fontWeight: 800,
                                color: C.gold,
                                marginBottom: 2,
                            }}
                        >
                            ¡Oferta especial de compra!
                        </div>
                        <div
                            style={{
                                fontSize: 13,
                                color: C.text,
                                lineHeight: 1.5,
                            }}
                        >
                            Adquiere tu casa ahora y recibe un{" "}
                            <strong>bono exclusivo</strong>. Escríbenos por
                            WhatsApp para conocer todos los detalles.
                        </div>
                    </div>
                    {/* <a
                        href={WA_LINK_GENERAL}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            background: C.gold,
                            color: "#fff",
                            fontSize: 13,
                            fontWeight: 700,
                            padding: "10px 20px",
                            borderRadius: 6,
                            textDecoration: "none",
                            flexShrink: 0,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                        }}
                    >
                        💬 Quiero saber más
                    </a>*/}
                </div> */
                
                {/* Tarjetas de VENTA y RENTA - UNA AL LADO DE LA OTRA */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr)",
                        gap: 24,
                        maxWidth: 900,
                        margin: "0 auto",
                    }}
                >
                    {/* Tarjeta VENTA */}
                    <div
                        style={{
                            border: `1px solid ${C.border}`,
                            borderRadius: 20,
                            overflow: "hidden",
                            transition: "all .25s",
                            display: "flex",
                            flexDirection: "column",
                            background: C.white,
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-6px)"
                            e.currentTarget.style.boxShadow =
                                "0 20px 48px rgba(11,61,107,.12)"
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "none"
                            e.currentTarget.style.boxShadow = "none"
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                aspectRatio: "4/3",
                                background: `linear-gradient(135deg, ${C.goldL} 0%, ${C.off} 100%)`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: 16,
                            }}
                        >
                            <img
                                src={IMG.casaA}
                                alt="Casa en venta"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                }}
                            />
                        </div>
                        <div style={{ padding: "24px" }}>
                            {tag("VENTA", C.goldL, C.gold)}
                            <div
                                style={{
                                    fontSize: 28,
                                    fontWeight: 800,
                                    color: C.navy,
                                    margin: "12px 0 4px",
                                }}
                            >
                                {PROYECTO.venta}
                            </div>
                            <div
                                style={{
                                    fontSize: 13,
                                    color: C.muted,
                                    marginBottom: 12,
                                }}
                            >
                                3 casas disponibles
                            </div>
                            <div style={{ marginBottom: 16 }}>
                                <Pill>{PROYECTO.construccion}</Pill>
                                <Pill>{PROYECTO.plantas}</Pill>
                                <Pill>3 recámaras</Pill>
                                <Pill>2.5 baños</Pill>
                                <Pill>1 cajón</Pill>
                            </div>
                            <BtnGold onClick={scrollToGaleria} full>
                                📸 Ver espacios disponibles
                            </BtnGold>
                        </div>
                    </div>

                    {/* Tarjeta RENTA */}
                    <div
                        style={{
                            border: `1px solid ${C.border}`,
                            borderRadius: 20,
                            overflow: "hidden",
                            transition: "all .25s",
                            display: "flex",
                            flexDirection: "column",
                            background: C.white,
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-6px)"
                            e.currentTarget.style.boxShadow =
                                "0 20px 48px rgba(26,143,104,.1)"
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "none"
                            e.currentTarget.style.boxShadow = "none"
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                aspectRatio: "4/3",
                                background: `linear-gradient(135deg, ${C.greenL} 0%, ${C.off} 100%)`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: 16,
                            }}
                        >
                            <img
                                src={IMG.casaB}
                                alt="Casa en renta"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                }}
                            />
                        </div>
                        <div style={{ padding: "24px" }}>
                            {tag("RENTA", C.greenL, C.green)}
                            <div
                                style={{
                                    fontSize: 28,
                                    fontWeight: 800,
                                    color: C.green,
                                    margin: "12px 0 4px",
                                }}
                            >
                                {PROYECTO.renta}
                            </div>
                            <div
                                style={{
                                    fontSize: 13,
                                    color: C.muted,
                                    marginBottom: 12,
                                }}
                            >
                                7 casas disponibles
                            </div>
                            <div style={{ marginBottom: 16 }}>
                                <Pill bg={C.greenL} color={C.green}>
                                    {PROYECTO.construccion}
                                </Pill>
                                <Pill bg={C.greenL} color={C.green}>
                                    {PROYECTO.plantas}
                                </Pill>
                                <Pill bg={C.greenL} color={C.green}>
                                    3 recámaras
                                </Pill>
                                <Pill bg={C.greenL} color={C.green}>
                                    2.5 baños
                                </Pill>
                                <Pill bg={C.greenL} color={C.green}>
                                    1 cajón
                                </Pill>
                            </div>
                            <BtnGold
                                onClick={scrollToGaleria}
                                full
                                style={{ background: C.green }}
                            >
                                📸 Ver espacios disponibles
                            </BtnGold>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// ─── DISTRIBUCIÓN Y GALERÍA (SECCIÓN 2 - COMPLETAMENTE SEPARADA) ────────────
function DistribucionGaleria() {
    return (
        <section
            style={{
                background: C.off,
                padding: "clamp(40px, 10vw, 88px) 5%",
                borderTop: `1px solid ${C.border}`,
                borderBottom: `1px solid ${C.border}`,
            }}
        >
            <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                <SectionTitle
                    badge="DISTRIBUCIÓN"
                    title="Conoce el interior de tu hogar"
                    sub="Diseño inteligente que aprovecha cada espacio para tu comodidad."
                    center
                />

                {/* ===== PLANTA BAJA ===== */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: 48,
                        alignItems: "center",
                        marginBottom: 80,
                    }}
                >
                    <div>
                        <h3
                            style={{
                                fontSize: 28,
                                fontWeight: 800,
                                color: C.gold,
                                marginBottom: 8,
                            }}
                        >
                            📍 PLANTA BAJA
                        </h3>
                        <div
                            style={{
                                width: 50,
                                height: 3,
                                background: C.gold,
                                marginBottom: 20,
                            }}
                        />
                        <ul style={{ listStyle: "none", padding: 0 }}>
                            {[
                                "Sala – comedor amplio con luz natural",
                                "Cocina integral con campana extractora, parrilla y tarja",
                                "Medio baño de visitas",
                                "Estacionamiento techado (1 cajón)",
                                "Jardín privado",
                                "Escalera con domo de iluminación natural",
                                "Área de lavado",
                            ].map((item, i) => (
                                <li
                                    key={i}
                                    style={{
                                        display: "flex",
                                        gap: 12,
                                        marginBottom: 14,
                                        fontSize: 15,
                                        color: C.text,
                                        alignItems: "center",
                                    }}
                                >
                                    <span
                                        style={{
                                            color: C.gold,
                                            fontSize: 18,
                                            fontWeight: 700,
                                        }}
                                    >
                                        ✓
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div
                        style={{
                            background: C.white,
                            borderRadius: 20,
                            overflow: "hidden",
                            boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
                            cursor: "pointer",
                        }}
                        onClick={() =>
                            window.open(
                                "https://i.postimg.cc/HkGHd5yd/PLANTA-BAJA.png",
                                "_blank"
                            )
                        }
                    >
                        <div
                            style={{
                                width: "100%",
                                aspectRatio: "4/3",
                                background: C.navyL,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <img
                                src="https://i.postimg.cc/HkGHd5yd/PLANTA-BAJA.png"
                                alt="Planta Baja"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                }}
                            />
                        </div>
                        <div
                            style={{
                                padding: "12px 16px",
                                textAlign: "center",
                                fontSize: 12,
                                color: C.muted,
                                background: C.navyL,
                            }}
                        >
                            🖱️ Haz clic para ampliar
                        </div>
                    </div>
                </div>

                {/* ===== PLANTA ALTA ===== */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: 48,
                        alignItems: "center",
                        marginBottom: 80,
                    }}
                >
                    <div style={{ order: 2 }}>
                        <h3
                            style={{
                                fontSize: 28,
                                fontWeight: 800,
                                color: C.navy,
                                marginBottom: 8,
                            }}
                        >
                            📍 PLANTA ALTA
                        </h3>
                        <div
                            style={{
                                width: 50,
                                height: 3,
                                background: C.navy,
                                marginBottom: 20,
                            }}
                        />
                        <ul style={{ listStyle: "none", padding: 0 }}>
                            {[
                                "Recámara principal con baño completo y vestidor",
                                "Recámara principal con balcón y barandal",
                                "2 recámaras adicionales con clóset",
                                "Baño completo compartido (segundo baño)",
                            ].map((item, i) => (
                                <li
                                    key={i}
                                    style={{
                                        display: "flex",
                                        gap: 12,
                                        marginBottom: 14,
                                        fontSize: 15,
                                        color: C.text,
                                        alignItems: "center",
                                    }}
                                >
                                    <span
                                        style={{
                                            color: C.navy,
                                            fontSize: 18,
                                            fontWeight: 700,
                                        }}
                                    >
                                        ✓
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div
                        style={{
                            background: C.white,
                            borderRadius: 20,
                            overflow: "hidden",
                            boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
                            cursor: "pointer",
                            order: 1,
                        }}
                        onClick={() =>
                            window.open(
                                "https://i.postimg.cc/RZr94fnj/PLANTA-ALTA.png",
                                "_blank"
                            )
                        }
                    >
                        <div
                            style={{
                                width: "100%",
                                aspectRatio: "1/1",
                                background: C.navyL,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <img
                                src="https://i.postimg.cc/RZr94fnj/PLANTA-ALTA.png"
                                alt="Planta Alta"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                }}
                            />
                        </div>
                        <div
                            style={{
                                padding: "12px 16px",
                                textAlign: "center",
                                fontSize: 12,
                                color: C.muted,
                                background: C.navyL,
                            }}
                        >
                            🖱️ Haz clic para ampliar
                        </div>
                    </div>
                </div>

                {/* ===== INSTALACIONES ===== */}
                <div
                    style={{
                        background: `linear-gradient(135deg, ${C.white} 0%, ${C.navyL} 100%)`,
                        borderRadius: 24,
                        padding: "clamp(24px, 5vw, 40px)",
                        border: `1px solid ${C.border}`,
                    }}
                >
                    <h3
                        style={{
                            fontSize: 24,
                            fontWeight: 800,
                            color: C.green,
                            marginBottom: 24,
                            textAlign: "center",
                        }}
                    >
                        ⚙️ Instalaciones y equipamiento
                    </h3>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(220px, 1fr))",
                            gap: 20,
                        }}
                    >
                        {[
                            { icon: "💧", text: "Tinaco de 1,100 litros" },
                            {
                                icon: "⛽",
                                text: "Tanque estacionario de gas 300 litros",
                            },
                            { icon: "🔥", text: "Calentador de piso" },
                            {
                                icon: "☀️",
                                text: "Calentador solar (3 servicios)",
                            },
                        ].map((item) => (
                            <div
                                key={item.text}
                                style={{
                                    background: C.white,
                                    borderRadius: 12,
                                    padding: "16px 20px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 14,
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                                }}
                            >
                                <span style={{ fontSize: 28 }}>
                                    {item.icon}
                                </span>
                                <span
                                    style={{
                                        fontSize: 14,
                                        fontWeight: 600,
                                        color: C.text,
                                    }}
                                >
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
// ─── GALERÍA DE ESPACIOS (NUEVA SECCIÓN) ───────────────────────────────────
const GALERIA_ESPACIOS = [
    {
        id: "sala",
        titulo: "Sala - Comedor",
        desc: "Amplio espacio con luz natural, ideal para reuniones familiares.",
        icon: "🛋️",
        src: "https://i.postimg.cc/9M34Qt95/Sala-Comedor.jpg",
    },
    {
        id: "recamara-principal",
        titulo: "Recámara Principal",
        desc: "Con baño completo, vestidor, clóset y balcón con barandal.",
        icon: "🛏️",
        src: "https://i.postimg.cc/prCyCw6W/RECAMARA-PRINCIPAL.jpg",
    },
    {
        id: "Recamara-secundaria",
        titulo: "Recámaras Secundarias",
        desc: "2 recámaras adicionales con clóset y buena iluminación.",
        icon: "🛌",
        src: "https://i.postimg.cc/NFDLD3zM/RECAMARA-2.png",
    },
    {
        id: "Jardin",
        titulo: "Jardín Privado",
        desc: "Espacio verde para disfrutar en familia o mascotas.",
        icon: "🌿",
        src: "https://i.postimg.cc/wBNvZyGG/jardi-n.jpg",
    },
    {
        id: "Fachada",
        titulo: "Fachada Moderna",
        desc: "Diseño contemporáneo con barra de acceso exterior.",
        icon: "🏠",
        src: IMG.fachada,
    },
    {
        id: "terraza",
        titulo: "Terraza",
        desc: "Vistas agradables y ventilación natural todo el año.",
        icon: "🌅",
        src: "https://i.postimg.cc/ZR1XgnXQ/Captura-de-Pantalla-2026-04-27-a-la(s)-17-57-56.png",
    },
    {
        id: "estacionamiento",
        titulo: "Estacionamiento",
        desc: "Techado con espacio para 1 vehículo.",
        icon: "🚗",
        src: "https://i.postimg.cc/y8sCsJxQ/COCHERA.jpg",
    },
]

function GaleriaEspacios() {
    const [selectedImage, setSelectedImage] = useState(null)

    return (
        <section
            id="galeria-espacios"
            style={{
                background: C.navyD,
                padding: "clamp(40px, 10vw, 88px) 5%",
            }}
        >
            <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                <SectionTitle
                    light
                    center
                    badge="ESPACIOS DISPONIBLES"
                    title="Galería de la casa"
                    sub="Conoce cada rincón de tu nuevo hogar antes de decidirte."
                />
                <div
                    style={{
                        maxWidth: 1440,
                        margin: "0 auto",
                        background: "rgba(255,255,255,.07)",
                        border: "1px solid rgba(255,255,255,.15)",
                        borderRadius: 14,
                        padding: "14px 20px",
                        marginBottom: 32,
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 14,
                    }}
                >
                    <span style={{ fontSize: 22, flexShrink: 0, marginTop: 2 }}>
                        🛋️
                    </span>
                    <div>
                        <div
                            style={{
                                fontSize: 13,
                                fontWeight: 700,
                                color: "#fff",
                                marginBottom: 4,
                            }}
                        >
                            Renders de ambientación — los muebles no están
                            incluidos
                        </div>
                        <div
                            style={{
                                fontSize: 12,
                                color: "rgba(255,255,255,.55)",
                                lineHeight: 1.6,
                            }}
                        >
                            Las imágenes muestran los espacios{" "}
                            <em>amueblados a modo de referencia</em> para que
                            puedas visualizar su potencial. Las casas se
                            entregan sin muebles.
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: 28,
                    }}
                >
                    {GALERIA_ESPACIOS.map((espacio) => (
                        <div
                            key={espacio.id}
                            style={{
                                background: "rgba(255,255,255,.05)",
                                borderRadius: 20,
                                overflow: "hidden",
                                backdropFilter: "blur(2px)",
                                transition:
                                    "transform 0.3s ease, box-shadow 0.3s ease",
                                cursor: "pointer",
                                border: "1px solid rgba(255,255,255,.1)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform =
                                    "translateY(-8px)"
                                e.currentTarget.style.boxShadow =
                                    "0 24px 40px rgba(0,0,0,0.3)"
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform =
                                    "translateY(0)"
                                e.currentTarget.style.boxShadow = "none"
                            }}
                            onClick={() => setSelectedImage(espacio)}
                        >
                            <div
                                style={{
                                    width: "100%",
                                    aspectRatio: "16/10",
                                    overflow: "hidden",
                                    background: C.navyL,
                                    position: "relative",
                                }}
                            >
                                <img
                                    src={espacio.src}
                                    alt={espacio.titulo}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        transition: "transform 0.5s ease",
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.transform =
                                            "scale(1.05)")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.transform =
                                            "scale(1)")
                                    }
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        top: 12,
                                        left: 12,
                                        background: "rgba(0,0,0,0.6)",
                                        borderRadius: 30,
                                        padding: "6px 14px",
                                        fontSize: 20,
                                        backdropFilter: "blur(4px)",
                                    }}
                                >
                                    {espacio.icon}
                                </div>
                            </div>
                            <div style={{ padding: "20px" }}>
                                <h3
                                    style={{
                                        fontSize: 18,
                                        fontWeight: 700,
                                        color: "#fff",
                                        marginBottom: 8,
                                    }}
                                >
                                    {espacio.titulo}
                                </h3>
                                <p
                                    style={{
                                        fontSize: 13,
                                        color: "rgba(255,255,255,.6)",
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {espacio.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal para ver imagen ampliada */}
                {selectedImage && (
                    <div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: "rgba(0,0,0,0.95)",
                            zIndex: 1000,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            backdropFilter: "blur(8px)",
                        }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <div
                            style={{
                                maxWidth: "90vw",
                                maxHeight: "90vh",
                                position: "relative",
                            }}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.titulo}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    borderRadius: 12,
                                }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: -40,
                                    left: 0,
                                    right: 0,
                                    textAlign: "center",
                                    color: "#fff",
                                    fontSize: 14,
                                }}
                            >
                                <strong>{selectedImage.titulo}</strong> -{" "}
                                {selectedImage.desc}
                            </div>
                            <button
                                style={{
                                    position: "absolute",
                                    top: -40,
                                    right: 0,
                                    background: "none",
                                    border: "none",
                                    color: "#fff",
                                    fontSize: 28,
                                    cursor: "pointer",
                                    padding: "8px 16px",
                                }}
                                onClick={() => setSelectedImage(null)}
                            >
                                ✕ Cerrar
                            </button>
                        </div>
                    </div>
                )}

                {/* Botón de contacto al final de la galería */}
                <div style={{ textAlign: "center", marginTop: 48 }}>
                    <BtnGold
                        href={WA_LINK_CITA}
                        style={{
                            padding: "14px 32px",
                            fontSize: 16,
                            gap: 8,
                        }}
                    >
                        🏠 Agendar visita
                    </BtnGold>
                    <p
                        style={{
                            fontSize: 12,
                            color: "rgba(255,255,255,.4)",
                            marginTop: 16,
                        }}
                    >
                        * Haz clic en cualquier imagen para verla a tamaño
                        completo
                    </p>
                </div>
            </div>
        </section>
    )
}
// ─── AMENIDADES ────────────────────────────────────────────────────────────
function Amenidades() {
    return (
        <section
            id="amenidades"
            style={{
                background: C.navyD,
                padding: "clamp(40px, 10vw, 88px) 5%",
            }}
        >
            <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                <SectionTitle
                    light
                    center
                    badge="AMENIDADES"
                    title="Todo lo que necesitas está aquí"
                    sub="Está diseñado para que no tengas que salir del fraccionamiento para lo esencial."
                />
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: 14,
                        marginBottom: 48,
                    }}
                >
                    {AMENIDADES.map((a) => (
                        <div
                            key={a.titulo}
                            style={{
                                background: "rgba(255,255,255,.05)",
                                border: "1px solid rgba(255,255,255,.07)",
                                borderRadius: 14,
                                padding: "22px 18px",
                                transition: "all .2s",
                                textAlign: "center",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background =
                                    "rgba(255,255,255,.09)"
                                e.currentTarget.style.borderColor = `rgba(184,149,42,.4)`
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background =
                                    "rgba(255,255,255,.05)"
                                e.currentTarget.style.borderColor =
                                    "rgba(255,255,255,.07)"
                            }}
                        >
                            <div style={{ fontSize: 26 }}>{a.icon}</div>
                            <div
                                style={{
                                    fontSize: 14,
                                    fontWeight: 700,
                                    color: "#fff",
                                    marginBottom: 6,
                                }}
                            >
                                {a.titulo}
                            </div>
                            <div
                                style={{
                                    fontSize: 12,
                                    color: "rgba(255,255,255,.5)",
                                    lineHeight: 1.6,
                                }}
                            >
                                {a.desc}
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: 14,
                    }}
                >
                    {/* Amenidades: fotos de Unsplash → cover está bien aquí */}
                    <div
                        style={{
                            width: "100%",
                            aspectRatio: "16/9",
                            borderRadius: 14,
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src={IMG.cancha}
                            alt="Cancha"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                            }}
                        />
                    </div>
                    {/* Foto propia → contain con fondo */}
                    <div
                        style={{
                            width: "100%",
                            aspectRatio: "16/9",
                            borderRadius: 14,
                            overflow: "hidden",
                            background: C.navyL,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <img
                            src={IMG.hero}
                            alt="Amenidades"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                                display: "block",
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

// ─── CROQUIS ───────────────────────────────────────────────────────────────
function Croquis() {
    return (
        <section
            id="croquis"
            style={{ background: C.off, padding: "clamp(40px, 10vw, 88px) 5%" }}
        >
            <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                <SectionTitle
                    badge="DISTRIBUCIÓN"
                    title="Croquis del fraccionamiento"
                    sub="Visualiza cómo están distribuidas las 10 casas dentro."
                />
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: 32,
                        alignItems: "start",
                    }}
                >
                    <div
                        style={{
                            background: C.white,
                            border: `1px solid ${C.border}`,
                            borderRadius: 16,
                            overflow: "hidden",
                        }}
                    >
                        {/* Croquis: imagen propia → contain con fondo claro */}
                        <div
                            style={{
                                width: "100%",
                                aspectRatio: "1/1",
                                background: C.navyL,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <img
                                src={IMG.croquis}
                                alt="Plano referencial"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    display: "block",
                                }}
                            />
                        </div>
                        <div
                            style={{
                                padding: "16px 20px",
                                background: C.navyL,
                                textAlign: "center",
                            }}
                        >
                            <p
                                style={{
                                    fontSize: 12,
                                    color: C.muted,
                                    margin: 0,
                                }}
                            >
                                * Imagen referencial. El croquis definitivo se
                                entrega con la visita.
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 12,
                        }}
                    >
                        {[
                            ["10", "Casas en total"],
                            ["3", "Casas en venta"],
                            ["7", "Casas en renta"],
                            ["2", "Plantas por casa"],
                            ["1", "Acceso principal"],
                            ["Privado", "Fraccionamiento cerrado"],
                            ["Pavimentadas", "Calles internas"],
                            ["Áreas verdes", "Espacios comunes"],
                        ].map(([v, l]) => (
                            <div
                                key={l}
                                style={{
                                    background: C.white,
                                    border: `1px solid ${C.border}`,
                                    borderRadius: 10,
                                    padding: "14px 16px",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <span style={{ fontSize: 13, color: C.muted }}>
                                    {l}
                                </span>
                                <span
                                    style={{
                                        fontSize: 14,
                                        fontWeight: 700,
                                        color: C.navy,
                                    }}
                                >
                                    {v}
                                </span>
                            </div>
                        ))}
                        <BtnGold
                            onClick={() => scroll("contacto")}
                            style={{ marginTop: 6, justifyContent: "center" }}
                        >
                            Solicitar plano completo
                        </BtnGold>
                    </div>
                </div>
            </div>
        </section>
    )
}

// ─── UBICACIÓN ─────────────────────────────────────────────────────────────
function Ubicacion() {
    return (
        <section
            id="ubicacion"
            style={{
                background: C.white,
                padding: "clamp(40px, 10vw, 88px) 5%",
            }}
        >
            <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                <SectionTitle
                    center
                    badge="UBICACIÓN"
                    title="Xometitla, Capulhuac"
                    sub="Excelente conectividad con el Valle de Toluca y la CDMX."
                />
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: 32,
                        alignItems: "start",
                    }}
                >
                    <div
                        style={{
                            borderRadius: 16,
                            overflow: "hidden",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                        }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d826.7618906425267!2d-99.47626724067962!3d19.193722186233792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2smx!4v1775735843184!5m2!1ses-419!2smx"
                            width="100%"
                            height="360"
                            style={{ border: 0, display: "block" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación "
                        />
                    </div>
                    <div>
                        <div
                            style={{
                                fontSize: 13,
                                fontWeight: 700,
                                color: C.navy,
                                letterSpacing: ".06em",
                                textTransform: "uppercase",
                                marginBottom: 16,
                                textAlign: "center",
                            }}
                        >
                            Distancias aproximadas
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 10,
                            }}
                        >
                            {DISTANCIAS.map((d) => (
                                <div
                                    key={d.lugar}
                                    style={{
                                        background: C.off,
                                        border: `1px solid ${C.border}`,
                                        borderRadius: 12,
                                        padding: "14px 18px",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        transition: "border-color .15s",
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.borderColor =
                                            C.gold)
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.borderColor =
                                            C.border)
                                    }
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 10,
                                        }}
                                    >
                                        <span style={{ fontSize: 20 }}>
                                            {d.icon}
                                        </span>
                                        <span
                                            style={{
                                                fontSize: 14,
                                                fontWeight: 600,
                                                color: C.text,
                                            }}
                                        >
                                            {d.lugar}
                                        </span>
                                    </div>
                                    <span
                                        style={{
                                            fontSize: 14,
                                            fontWeight: 800,
                                            color: C.navy,
                                        }}
                                    >
                                        {d.dist}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div style={{ marginTop: 20, textAlign: "center" }}>
                            <BtnGold href={WA_LINK_CITA}>
                                Agendar visita guiada
                            </BtnGold>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
// ─── TERRENOS ────────────────────────────────────────────────────────────────
const TERRENOS = [
    {
        id: 1,
        nombre: "Terreno en Ocoyoacac",
        lat: 19.276277,   // 👈 agrega esto
        lng: -99.466222,  // 👈 agrega esto
        metrosCuadrados: 798,
        precioPorMetro: 3750,
        precioTotal: 2992500,
        etiquetas: ["📍 Ocoyoacac, Edo. Mex.","🎯 Precio a tratar"],
        destacado: true,
        imagen: IMG.terreno1,  // 👈 Usando IMG en lugar de URL directa
        descripcion: "Listo para construir, completamente bardeado, limpio y con todos los servicios",
    },
    {
        id: 2,
        nombre: "Terreno en Capulhuac",
        lat: 19.217972,   // 👈 agrega esto
        lng: -99.462583,  // 👈 agrega esto
        metrosCuadrados: 477,
        precioPorMetro: 1700,
        precioTotal: 810900,
        etiquetas: ["📍 Capulhuac,Edo. Mex. "],
        destacado: false,
        imagen: IMG.terreno2,
        descripcion: "Excelente ubicación, fácil acceso y entorno tranquilo",
    },
    {
        id: 3,
        nombre: "Terreno en Xometitla",
        lat: 19.193361,   // 👈 agrega esto
        lng: -99.477110,  // 👈 agrega esto
        metrosCuadrados: 6900,
        precioPorMetro: 1850,
        precioTotal: 12765000,
        etiquetas: ["📍 Xometitla, Capulhuac, Edo. Mex."],
        destacado: false,
        imagen: IMG.terreno3,
        descripcion: "Excelente ubicación, fácil acceso y gran potencial de inversión",
    },
    {
        id: 4,
        nombre: "Terreno en Ocoyoacac",
        lat: 19.240722,   // 👈 agrega esto
        lng: -99.462667,  // 👈 agrega esto
        metrosCuadrados: 642.5,
        precioPorMetro: 980,
        precioTotal: 1710000,
        etiquetas: ["📍 San Miguel Almaya, Capulhuac, Edo. Mex."],
        destacado: true,
        imagen: IMG.terreno4,
        descripcion: "Frente al campo de golf, terreno de lujo con amenidades cercanas.",
    },
]

function Terrenos() {
    const [selectedImage, setSelectedImage] = useState(null)
    
    const formatNumber = (num) => {
        return new Intl.NumberFormat('es-MX').format(num)
    }

    return (
        <section
            id="terrenos"
            style={{
                background: `linear-gradient(135deg, ${C.sunsetL} 0%, ${C.white} 100%)`,
                padding: "clamp(40px, 10vw, 88px) 5%",
                borderTop: `1px solid ${C.border}`,
                borderBottom: `1px solid ${C.border}`,
            }}
        >
            <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                <SectionTitle
                    badge="TERRENOS DISPONIBLES"
                    badgeBg={C.sunsetL}
                    badgeColor={C.sunset}
                    title="Invierte en tu terreno"
                    sub="Precios por metro cuadrado desde $980 MXN. Terrenos con gran plusvalía"
                    center
                />

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: 28,
                        marginTop: 24,
                    }}
                >
                    {TERRENOS.map((terreno) => (
                        <div
                            key={terreno.id}
                            style={{
                                background: C.white,
                                borderRadius: 20,
                                overflow: "hidden",
                                transition: "all 0.3s ease",
                                boxShadow: terreno.destacado 
                                    ? `0 12px 30px rgba(232,147,79,.15), 0 0 0 2px ${C.sunset}` 
                                    : "0 8px 20px rgba(0,0,0,0.06)",
                                cursor: "pointer",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "transeY(-8px)"
                                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.12)"
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "none"
                                e.currentTarget.style.boxShadow = terreno.destacado 
                                    ? `0 12px 30px rgba(232,147,79,.15), 0 0 0 2px ${C.sunset}` 
                                    : "0 8px 20px rgba(0,0,0,0.06)"
                            }}
                            onClick={() => setSelectedImage(terreno)}
                        >
                            <div
                                style={{
                                    width: "100%",
                                    aspectRatio: "4/3",
                                    background: `linear-gradient(135deg, ${C.sunsetL} 0%, ${C.off} 100%)`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: 16,
                                    position: "relative",
                                }}
                            >
                                <img
                                    src={terreno.imagen}
                                    alt={terreno.nombre}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                    }}
                                />
                                {terreno.destacado && (
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: 12,
                                            left: 12,
                                            background: C.gold,
                                            color: "#fff",
                                            fontSize: 11,
                                            fontWeight: 700,
                                            padding: "4px 12px",
                                            borderRadius: 20,
                                        }}
                                    >
                                        ⭐ DESTACADO
                                    </div>
                                )}
                            </div>

                            <div style={{ padding: "24px" }}>
                                <h3
                                    style={{
                                        fontSize: 20,
                                        fontWeight: 800,
                                        color: C.navy,
                                        marginBottom: 8,
                                    }}
                                >
                                    {terreno.nombre}
                                </h3>

                                <p
                                    style={{
                                        fontSize: 13,
                                        color: C.muted,
                                        marginBottom: 16,
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {terreno.descripcion}
                                </p>

                                <div style={{ marginBottom: 20, display: "flex", flexWrap: "wrap", gap: 6 }}>
                                    {terreno.etiquetas.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            style={{
                                                display: "inline-block",
                                                background: C.sunsetL,
                                                color: C.terracota,
                                                fontSize: 11,
                                                fontWeight: 700,
                                                padding: "4px 10px",
                                                borderRadius: 20,
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div
                                    style={{
                                        background: C.off,
                                        borderRadius: 12,
                                        padding: "16px",
                                        marginBottom: 20,
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            marginBottom: 12,
                                            paddingBottom: 12,
                                            borderBottom: `1px solid ${C.border}`,
                                        }}
                                    >
                                        <span style={{ color: C.muted, fontSize: 13 }}>📐 Metros totales</span>
                                        <span style={{ fontWeight: 800, color: C.text, fontSize: 18 }}>
                                            {terreno.metrosCuadrados} m²
                                        </span>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <span style={{ color: C.muted, fontSize: 13 }}>💰 Precio por m²</span>
                                        <span style={{ fontWeight: 700, color: C.sunset, fontSize: 16 }}>
                                            ${formatNumber(terreno.precioPorMetro)} MXN
                                        </span>
                                    </div>
                                </div>

                                <BtnGold
                                    href={WA_LINK_TERRENO}
                                    full
                                    style={{ 
                                        justifyContent: "center", 
                                        gap: 6,
                                        background: C.sunset,
                                    }}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    📞 Me interesa este terreno
                                </BtnGold>
                                <BtnOutline
                                    href={`https://www.google.com/maps?q=${terreno.lat},${terreno.lng}`}
                                    full
                                    style={{ 
                                        justifyContent: "center", 
                                        gap: 6, 
                                        marginTop: 10,
                                        borderColor: C.sunset,
                                        color: C.sunset,
                                    }}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    🗺️ Ver ubicación en Google Maps
                                </BtnOutline>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedImage && (
                    <div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: "rgba(0,0,0,0.95)",
                            zIndex: 1000,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            backdropFilter: "blur(8px)",
                        }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <div style={{ maxWidth: "90vw", maxHeight: "90vh", position: "relative" }}>
                            <img
                                src={selectedImage.imagen}
                                alt={selectedImage.nombre}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    borderRadius: 12,
                                }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: -40,
                                    left: 0,
                                    right: 0,
                                    textAlign: "center",
                                    color: "#fff",
                                    fontSize: 14,
                                }}
                            >
                                <strong>{selectedImage.nombre}</strong> - {selectedImage.descripcion}
                            </div>
                            <button
                                style={{
                                    position: "absolute",
                                    top: -40,
                                    right: 0,
                                    background: "none",
                                    border: "none",
                                    color: "#fff",
                                    fontSize: 28,
                                    cursor: "pointer",
                                    padding: "8px 16px",
                                }}
                                onClick={() => setSelectedImage(null)}
                            >
                                ✕ Cerrar
                            </button>
                        </div>
                    </div>
                )}

                <div
                    style={{
                        marginTop: 48,
                        background: `linear-gradient(135deg, ${C.terracota}20 0%, ${C.sunset}20 100%)`,
                        borderRadius: 16,
                        padding: "24px",
                        textAlign: "center",
                        border: `1px solid ${C.sunset}`,
                    }}
                >
                    <p style={{ fontSize: 14, color: C.text, marginBottom: 16 }}>
                        🌟 ¿Buscas un terreno con medidas diferentes? Contáctanos y te ayudamos a encontrar
                        lo que necesitas.
                    </p>
                    <BtnGold href={WA_LINK_GENERAL} style={{ padding: "10px 24px", fontSize: 13 }}>
                        Consultar más opciones
                    </BtnGold>
                </div>
            </div>
        </section>
    )
}
// ─── CONTACTO ──────────────────────────────────────────────────────────────
function Contacto() {
    useEffect(() => {
        const w = window as any
        const load = () => {
            if (w.Tally) w.Tally.loadEmbeds()
            else
                document
                    .querySelectorAll("iframe[data-tally-src]:not([src])")
                    .forEach((el: any) => {
                        el.src = el.dataset.tallySrc
                    })
        }
        const src = "https://tally.so/widgets/embed.js"
        if (w.Tally) {
            load()
        } else if (!document.querySelector(`script[src="${src}"]`)) {
            const s = document.createElement("script")
            s.src = src
            s.onload = load
            s.onerror = load
            document.body.appendChild(s)
        } else load()
    }, [])

    return (
        <section
            id="contacto"
            style={{
                background: C.navyD,
                padding: "clamp(40px, 10vw, 88px) 5%",
            }}
        >
            <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 5%" }}>
                <SectionTitle
                    light
                    center
                    badge="CONTACTO"
                    title="¿Te interesa alguna propiedad?"
                    sub="Déjanos tus datos o escríbenos por WhatsApp. Te respondemos en menos de 24 horas."
                />
                <div
                    style={{
                        background: "rgba(255,255,255,.04)",
                        border: "1px solid rgba(255,255,255,.08)",
                        borderRadius: 20,
                        padding: "clamp(20px, 5vw, 36px)",
                        marginBottom: 24,
                    }}
                >
                    <iframe
                        data-tally-src={`https://tally.so/embed/${TALLY_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
                        loading="lazy"
                        width="100%"
                        height="400"
                        style={{ border: "none", colorScheme: "light" }}
                        title="Contacto"
                    />
                </div>
                <div style={{ textAlign: "center" }}>
                    <div
                        style={{
                            fontSize: 13,
                            color: "rgba(255,255,255,.4)",
                            marginBottom: 12,
                        }}
                    >
                        o contáctanos directamente
                    </div>
                    <BtnOutline href={WA_LINK_CITA} light>
                        Escribir por WhatsApp
                    </BtnOutline>
                </div>
            </div>
        </section>
    )
}

// ─── AVISO DE PRIVACIDAD ───────────────────────────────────────────────────
function AvisoPrivacidad() {
    return (
        <section
            id="aviso-privacidad"
            style={{
                background: C.navyL,
                padding: "clamp(40px, 8vw, 60px) 5%",
                borderTop: `1px solid ${C.border}`,
            }}
        >
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <h3
                    style={{
                        fontSize: "clamp(22px, 5vw, 28px)",
                        fontWeight: 800,
                        color: C.navy,
                        marginBottom: 24,
                        textAlign: "center",
                    }}
                >
                    Aviso de Privacidad Integral
                </h3>
                <p
                    style={{
                        fontSize: 13,
                        color: C.muted,
                        textAlign: "center",
                        marginBottom: 32,
                    }}
                >
                    Fecha de última actualización: Abril 2026
                </p>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: 28,
                    }}
                >
                    {[
                        {
                            num: "1",
                            title: "Introducción",
                            content: (
                                <>
                                    <p
                                        style={{
                                            fontSize: 14,
                                            color: C.text,
                                            lineHeight: 1.5,
                                            marginBottom: 8,
                                        }}
                                    >
                                        <strong>Casas</strong> (en adelante "el
                                        desarrollador"), con domicilio en
                                        Xometitla, Capulhuac, Estado de México,
                                        es responsable del tratamiento de sus
                                        datos personales. Este Aviso de
                                        Privacidad establece los términos en que
                                        recopilamos, usamos, almacenamos y
                                        protegemos la información que nos
                                        proporciona.
                                    </p>
                                    <p
                                        style={{
                                            fontSize: 14,
                                            color: C.text,
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        Al proporcionarnos sus datos personales,
                                        usted acepta los términos descritos.
                                        Cumplimos con la{" "}
                                        <strong>
                                            Ley Federal de Protección de Datos
                                            Personales en Posesión de los
                                            Particulares (LFPDPPP)
                                        </strong>{" "}
                                        en México.
                                    </p>
                                </>
                            ),
                        },
                        {
                            num: "2",
                            title: "Información que recopilamos",
                            content: (
                                <>
                                    <p
                                        style={{
                                            fontSize: 14,
                                            color: C.text,
                                            lineHeight: 1.5,
                                            marginBottom: 8,
                                        }}
                                    >
                                        Podemos recopilar las siguientes
                                        categorías:
                                    </p>
                                    <ul
                                        style={{
                                            fontSize: 14,
                                            color: C.text,
                                            lineHeight: 1.5,
                                            marginLeft: 20,
                                            marginBottom: 8,
                                        }}
                                    >
                                        <li>
                                            <strong>Identificación:</strong>{" "}
                                            nombre completo, correo electrónico,
                                            número telefónico.
                                        </li>
                                        <li>
                                            <strong>Contacto:</strong> dirección
                                            (opcional), ciudad de residencia.
                                        </li>
                                        <li>
                                            <strong>Preferencias:</strong> tipo
                                            de propiedad, rango de presupuesto.
                                        </li>
                                        <li>
                                            <strong>Interacción:</strong>{" "}
                                            navegación en el sitio (cookies).
                                        </li>
                                    </ul>
                                    <p
                                        style={{
                                            fontSize: 14,
                                            color: C.text,
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        <strong>
                                            No recopilamos información sensible
                                        </strong>{" "}
                                        como datos financieros, salud o
                                        afiliación política.
                                    </p>
                                </>
                            ),
                        },
                        {
                            num: "3",
                            title: "Uso de la información",
                            content: (
                                <>
                                    <ul
                                        style={{
                                            fontSize: 14,
                                            color: C.text,
                                            lineHeight: 1.5,
                                            marginLeft: 20,
                                            marginBottom: 8,
                                        }}
                                    >
                                        <li>
                                            Proporcionar información sobre
                                            propiedades en venta y renta.
                                        </li>
                                        <li>
                                            Atender solicitudes de cotización y
                                            visitas guiadas.
                                        </li>
                                        <li>
                                            Contactar vía WhatsApp, correo o
                                            teléfono.
                                        </li>
                                        <li>
                                            Enviar comunicaciones sobre
                                            promociones (solo con
                                            consentimiento).
                                        </li>
                                        <li>
                                            Mejorar el sitio web y servicios.
                                        </li>
                                    </ul>
                                    <p
                                        style={{
                                            fontSize: 14,
                                            color: C.text,
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        <strong>
                                            No utilizamos sus datos para fines
                                            distintos
                                        </strong>{" "}
                                        sin consentimiento previo.
                                    </p>
                                </>
                            ),
                        },
                        {
                            num: "4",
                            title: "Compartir información",
                            content: (
                                <>
                                    <p
                                        style={{
                                            fontSize: 14,
                                            color: C.text,
                                            lineHeight: 1.5,
                                            marginBottom: 8,
                                        }}
                                    >
                                        Casas{" "}
                                        <strong>
                                            no vende, alquila ni comparte sus
                                            datos con terceros no relacionados
                                        </strong>{" "}
                                        a la operación del desarrollo.
                                    </p>
                                    <ul
                                        style={{
                                            fontSize: 14,
                                            color: C.text,
                                            lineHeight: 1.5,
                                            marginLeft: 20,
                                        }}
                                    >
                                        <li>
                                            Con proveedores tecnológicos (como
                                            Tally) sujetos a confidencialidad.
                                        </li>
                                        <li>
                                            Cuando sea requerido por autoridad
                                            competente.
                                        </li>
                                        <li>Con su consentimiento expreso.</li>
                                    </ul>
                                </>
                            ),
                        },
                        {
                            num: "5",
                            title: "Cookies",
                            content: (
                                <>
                                    <p
                                        style={{
                                            fontSize: 14,
                                            color: C.text,
                                            lineHeight: 1.5,
                                            marginBottom: 8,
                                        }}
                                    >
                                        Usamos cookies para mejorar la
                                        navegación, analizar tráfico y medir
                                        campañas. Puede deshabilitar las cookies
                                        en su navegador.
                                    </p>
                                    <p
                                        style={{
                                            fontSize: 14,
                                            color: C.muted,
                                            fontStyle: "italic",
                                        }}
                                    >
                                        ⚠️ No utilizamos cookies para recopilar
                                        información personal sensible.
                                    </p>
                                </>
                            ),
                        },
                        {
                            num: "6",
                            title: "Derechos ARCO",
                            content: (
                                <>
                                    <ul
                                        style={{
                                            fontSize: 14,
                                            color: C.text,
                                            lineHeight: 1.5,
                                            marginLeft: 20,
                                            marginBottom: 8,
                                        }}
                                    >
                                        <li>
                                            <strong>Acceso:</strong> Conocer qué
                                            datos tenemos de usted.
                                        </li>
                                        <li>
                                            <strong>Rectificación:</strong>{" "}
                                            Corregir datos inexactos.
                                        </li>
                                        <li>
                                            <strong>Cancelación:</strong>{" "}
                                            Eliminar sus datos.
                                        </li>
                                        <li>
                                            <strong>Oposición:</strong> Oponerse
                                            al uso para fines específicos.
                                        </li>
                                    </ul>
                                    <p
                                        style={{
                                            fontSize: 14,
                                            color: C.navy,
                                            fontWeight: 600,
                                            marginBottom: 8,
                                        }}
                                    >
                                        📧{" "}
                                        <a
                                            href="mailto:contacto.inmobiliaria@gmail.com"
                                            style={{ color: C.gold }}
                                        >
                                            contacto.inmobiliaria@gmail.com
                                        </a>
                                    </p>
                                </>
                            ),
                        },
                    ].map(({ num, title, content }) => (
                        <div key={num}>
                            <h4
                                style={{
                                    fontSize: 18,
                                    fontWeight: 700,
                                    color: C.gold,
                                    marginBottom: 12,
                                }}
                            >
                                {num}. {title}
                            </h4>
                            {content}
                        </div>
                    ))}
                </div>
                <div
                    style={{
                        marginTop: 40,
                        paddingTop: 24,
                        borderTop: `1px solid ${C.border}`,
                        textAlign: "center",
                    }}
                >
                    <p style={{ fontSize: 13, color: C.muted }}>
                        ✅ <strong>Consentimiento:</strong> Al enviar el
                        formulario o comunicarse por WhatsApp, usted otorga su
                        consentimiento para el tratamiento de sus datos conforme
                        a este Aviso de Privacidad.
                    </p>
                </div>
            </div>
        </section>
    )
}

// ─── FOOTER ────────────────────────────────────────────────────────────────
function Footer() {
    return (
        <footer
            style={{
                background: C.dark,
                padding: "clamp(24px, 5vw, 36px) 5%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 16,
            }}
        >
            <div style={{ textAlign: "center" }}>
                <div
                    style={{
                        color: "#fff",
                        fontSize: "clamp(12px, 4vw, 15px)",
                        fontWeight: 800,
                        letterSpacing: ".05em",
                        marginBottom: 4,
                    }}
                >
                    CASAS ANDARES
                </div>
                <div
                    style={{
                        color: "rgba(255,255,255,.35)",
                        fontSize: "clamp(10px, 3vw, 12px)",
                    }}
                >
                    Calle sin Nombre S/N, Xometitla, Capulhuac de Mirafuentes, Mexico, 52700 · © 2026
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    gap: "clamp(16px, 4vw, 24px)",
                    alignItems: "center",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {[
                    ["inicio", "Inicio"],
                    ["casas", "Casas"],
                    ["amenidades", "Amenidades"],
                    ["croquis", "Croquis"],
                    ["ubicacion", "Ubicación"],
                    ["contacto", "Contacto"],
                    ["aviso-privacidad", "Aviso de Privacidad"],
                ].map(([id, l]) => (
                    <button
                        key={id}
                        onClick={() => scroll(id)}
                        style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            color: "rgba(255,255,255,.4)",
                            fontSize: "clamp(11px, 3vw, 13px)",
                            fontFamily: "inherit",
                            transition: "color .15s",
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.color = "#fff")
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.color =
                                "rgba(255,255,255,.4)")
                        }
                    >
                        {l}
                    </button>
                ))}
                <a
                    href={WA_LINK_GENERAL}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        color: C.gold,
                        fontSize: "clamp(11px, 3vw, 13px)",
                        fontWeight: 700,
                        textDecoration: "none",
                    }}
                >
                    WhatsApp
                </a>
            </div>
        </footer>
    )
}

// ─── APP PRINCIPAL ─────────────────────────────────────────────────────────
export default function PrivadaAndares() {
    return (
        <div
            style={{
                fontFamily: "'Montserrat','Segoe UI',sans-serif",
                color: C.text,
                background: C.white,
            }}
        >
            <style>{`... tus estilos ...`}</style>
            <Navbar />
            <Hero />
           /* <BannerBono /> */
            <Descripcion />

            {/* SECCIÓN 1: SOLO VENTA/RENTA */}
            <Casas />

            {/* SECCIÓN 2: DISTRIBUCIÓN COMPLETA (texto + imágenes grandes) */}
            <DistribucionGaleria />

            {/* SECCIÓN 3: GALERÍA DE ESPACIOS (NUEVA) */}
            <GaleriaEspacios />

            <Amenidades />
            <Croquis />
            <Ubicacion />
            <Terrenos />
            <Contacto />
            <AvisoPrivacidad />
            <Footer />
        </div>
    )
}
