import React from 'react'
import Link from "next/link";

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
            <div className="navbar-start">
                {/* Botón hamburguesa visible SOLO en móvil */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>

                    {/* Menu desplegable vertical en móvil */}
                    <ul
                        tabIndex={0}
                        className="menu menu-xl dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link href="/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    width="1em"
                                    height="1em"
                                >
                                    <path
                                        fill="currentColor"
                                        d="m16 9.5l-3-3V2h-2v2.5l-3-3l-8 8v.5h2v5h5v-3h2v3h5v-5h2z"
                                    />
                                </svg>
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link href="/proyectos">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="1em"
                                    height="1em"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M7 5h10v2h2V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v4h2zm8.41 11.59L20 12l-4.59-4.59L14 8.83L17.17 12L14 15.17zM10 15.17L6.83 12L10 8.83L8.59 7.41L4 12l4.59 4.59zM17 19H7v-2H5v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2z"
                                    />
                                </svg>
                                Proyectos
                            </Link>
                        </li>
                        <li>
                            <Link href="/experiencia">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 14 14"
                                    width="1em"
                                    height="1em"
                                >
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        d="M1.44.44A1.5 1.5 0 0 1 2.5 0h6a.5.5 0 0 1 .354.146l4 4A.5.5 0 0 1 13 4.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 12.5v-11c0-.398.158-.78.44-1.06m3.515 3.51a1.024 1.024 0 1 0 0-2.048a1.024 1.024 0 0 0 0 2.048M2.876 8.5c0-.345.279-.625.624-.625h7a.626.626 0 0 1 .002 1.25h-7a.626.626 0 0 1-.626-.625m0 3c0-.345.279-.625.624-.625h4a.626.626 0 0 1 .002 1.25h-4a.626.626 0 0 1-.626-.625m2.08-6.866c-.7 0-1.339.263-1.822.696c-.287.257-.063.67.322.67h2.998c.386 0 .61-.413.323-.67a2.72 2.72 0 0 0-1.822-.696Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Experiencia
                            </Link>
                        </li>
                        <li>
                            <Link href="/contacto">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="1em"
                                    height="1em"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M11 14H9a9 9 0 0 1 9-9v2c-3.87 0-7 3.13-7 7m7-3V9c-2.76 0-5 2.24-5 5h2c0-1.66 1.34-3 3-3M7 4c0-1.11-.89-2-2-2s-2 .89-2 2s.89 2 2 2s2-.89 2-2m4.45.5h-2A2.99 2.99 0 0 1 6.5 7h-3C2.67 7 2 7.67 2 8.5V11h6V8.74a4.97 4.97 0 0 0 3.45-4.24M19 17c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .89-2 2s.89 2 2 2m1.5 1h-3a2.99 2.99 0 0 1-2.95-2.5h-2A4.97 4.97 0 0 0 16 19.74V22h6v-2.5c0-.83-.67-1.5-1.5-1.5"
                                    />
                                </svg>
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </div>

                <Link className="btn btn-ghost text-xl" href="/">Portafolio</Link>
                <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input
                        type="checkbox"
                        className="theme-controller"
                        value="valentine"
                    />

                    {/* sun icon */}
                    <svg
                        className="swap-off h-10 w-10 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    {/* moon icon */}
                    <svg
                        className="swap-on h-10 w-10 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                </label>
            </div>

            {/* Menú horizontal visible SOLO en pantallas grandes */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/">Inicio</Link>
                    </li>
                    <li>
                        <Link href="/proyectos">Proyectos</Link>
                    </li>
                    <li>
                        <Link href="/experiencia">Experiencia</Link>
                    </li>
                    <li>
                        <Link href="/contacto">Contacto</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar