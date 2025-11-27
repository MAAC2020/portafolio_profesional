
import { Proyecto } from '../interfaces/projecto.interface';

export const proyectos: Proyecto[] = [

    {
        id: 1,
        titulo: "Portafolio Personal en Next.js",
        descripcion:
            "Sitio web profesional desarrollado con Next.js, Tailwind CSS y DaisyUI. Incluye secciones como proyectos, contacto y experiencia.",
        fecha_subida: "2025-02-10",
        tecnologias: ["Next.js", "React", "Tailwind", "DaisyUI"],
        github: "https://github.com/tuusuario/portafolio-next",
        publico: true,
        imagen_principal: "https://picsum.photos/seed/portafolio/600/400",
        imagenes: [
            "https://picsum.photos/seed/portafolio1/800/600",
            "https://picsum.photos/seed/portafolio2/800/600",
            "https://picsum.photos/seed/portafolio3/800/600",
            "https://picsum.photos/seed/portafolio2/800/600",
            "https://picsum.photos/seed/portafolio3/800/600",
            "https://picsum.photos/seed/portafolio2/800/600",
            "https://picsum.photos/seed/portafolio3/800/600",
            "https://picsum.photos/seed/portafolio2/800/600",
            "https://picsum.photos/seed/portafolio3/800/600",
            "https://picsum.photos/seed/portafolio2/1200/600",
            "https://picsum.photos/seed/portafolio3/800/600",
            "https://picsum.photos/seed/portafolio2/400/600",
            "https://picsum.photos/seed/portafolio3/200/200",

        ]
    },
    {
        id: 2,
        titulo: "Sistema de Gestión de Tareas",
        descripcion:
            "Aplicación tipo To-Do con autenticación, CRUD completo y sincronización en tiempo real usando Firebase.",
        fecha_subida: "2024-12-18",
        tecnologias: ["Vue 3", "Firebase", "Pinia"],
        github: "https://github.com/tuusuario/gestor-tareas",
        publico: false,
        imagen_principal: "https://picsum.photos/seed/tareas/600/400",
        imagenes: [
            "https://picsum.photos/seed/tareas1/800/600",
            "https://picsum.photos/seed/tareas2/800/600"
        ]
    },
    {
        id: 3,
        titulo: "Ecommerce Minimalista",
        descripcion:
            "Tienda en línea con carrito persistente, filtros, pasarela de pago simulada y panel de administración.",
        fecha_subida: "2025-01-05",
        tecnologias: ["React", "Node.js", "MongoDB"],
        github: "https://github.com/tuusuario/ecommerce",
        publico: true,
        imagen_principal: "https://picsum.photos/seed/ecommerce/600/400",
        imagenes: [
            "https://picsum.photos/seed/ecommerce1/800/600",
            "https://picsum.photos/seed/ecommerce2/800/600"
        ]
    },
    {
        id: 4,
        titulo: "Dashboard Analítico",
        descripcion:
            "Panel interactivo con gráficos, autenticación, roles y conexión a una API de datos.",
        fecha_subida: "2024-11-27",
        tecnologias: ["Angular", "Chart.js", "Node.js"],
        github: "https://github.com/tuusuario/dashboard",
        publico: false,
        imagen_principal: "https://picsum.photos/seed/dashboard/600/400",
        imagenes: [
            "https://picsum.photos/seed/dashboard1/800/600",
            "https://picsum.photos/seed/dashboard2/800/600",
            "https://picsum.photos/seed/dashboard3/800/600"
        ]
    },
    {
        id: 5,
        titulo: "Clon de Spotify",
        descripcion:
            "Reproductor estilo Spotify con playlists, búsqueda en tiempo real y modo oscuro.",
        fecha_subida: "2024-10-12",
        tecnologias: ["Next.js", "Supabase", "PostgreSQL"],
        github: "https://github.com/tuusuario/spotify-clone",
        publico: true,
        imagen_principal: "https://picsum.photos/seed/spotify/600/400",
        imagenes: [
            "https://picsum.photos/seed/spotify1/800/600",
            "https://picsum.photos/seed/spotify2/800/600"
        ]
    }
]