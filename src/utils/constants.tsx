import type { Feature } from "../types/type";
import type { ContactInfo, Media } from "../types/type";
import type { Testimonial } from "../types/type";
import { FacebookIcon } from "../components/footer/FacebookIcon";
import { InstagramIcon } from "../components/footer/InstagramIcon";
import { TwitterIcon } from "../components/footer/TwitterIcon";

export const contactsInfo: ContactInfo[] = [
    {
        text: "Estamos ubicados en Calle Los Cerezos 432, Salta Capital, Argentina",
        iconUrl: "/public/images/icon-location.svg",
        alt: "location"
    },
    {
        text: "+54-387-123-4567",
        iconUrl: "/public/images/icon-phone.svg",
        alt: "phone"
    },
    {
        text: "contacto@tuagencia.com",
        iconUrl: "/public/images/icon-email.svg",
        alt: "email"
    }
];

export const pages: string[] = [
    "Nosotros",
    "Trabajos",
    "Prensa",
    "Blog",
];

export const conditions: string[] = [
    "Contáctanos",
    "Términos",
    "Privacidad",
];

export const medias: Media[] = [
    { text: "Facebook", icon: <FacebookIcon /> },
    { text: "Instagram", icon: <InstagramIcon /> },
    { text: "Twitter", icon: <TwitterIcon /> },
];

export const features: Feature[] = [
    {
        title: "Estrategia y campañas",
        description: "Diseñamos un plan claro y lo llevamos a la acción: publicidad en Meta/Google, contenido para redes, optimización de tu web y embudos simples que convierten visitas en clientes. Todo medido, todo mejorado.",
        iconUrl: "/public/images/icon-access-anywhere.svg"
    },
    {
        title: "Optimización y resultados medibles",
        description: "No hacemos “publicidad por hacer”. Definimos objetivos, medimos cada paso y optimizamos semanalmente para mejorar el rendimiento. Te mostramos métricas reales y decisiones claras para lograr mejores resultados mes a mes.",
        iconUrl: "/public/images/icon-security.svg"
    },
    {
        title: "Acompañamiento",
        description: "Tu negocio lo conocés vos: nosotros lo potenciamos. Te acompañamos con reuniones breves, feedback directo y recomendaciones prácticas. Siempre vas a saber qué se está haciendo y por qué.",
        iconUrl: "/public/images/icon-collaboration.svg"
    },
    {
        title: "Orden y transparencia",
        description: "Propuestas, brief, cronogramas, reportes y avances en un solo lugar. Así mantenemos orden, claridad y continuidad. Menos improvisación, más foco en crecimiento.",
        iconUrl: "/public/images/icon-any-file.svg"
    }
];

export const testimonials: Testimonial[] = [
    {
        name: "Mariana López",
        role: "Dueña, Estudio de Belleza MLL",
        image: "/public/images/profile-1.jpg",
        quote: "En el primer mes vimos un salto real en consultas. Ordenaron nuestras campañas, mejoraron los anuncios y por fin entendimos qué estaba funcionando gracias a los reportes."
    },
    {
        name: "Julián Rojas",
        role: "Gerente Comercial, Rojas & Asociados",
        image: "/public/images/profile-2.jpg",
        quote: "Pasamos de publicar sin rumbo a tener una estrategia clara. Se nota el acompañamiento: cada ajuste tiene sentido y los resultados fueron creciendo semana a semana."
    },
    {
        name: "Carolina Méndez",
        role: "Co-Fundadora, Tienda Online Nativo",
        image: "/public/images/profile-3.jpg",
        quote: "Lo que más valoramos es la transparencia y el orden: todo documentado, reuniones cortas y acciones concretas. Aumentaron nuestras ventas y redujeron el costo por compra."
    }
];