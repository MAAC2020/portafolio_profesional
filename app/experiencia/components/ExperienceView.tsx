import React from 'react'

type Props = {}

const ExperienceView = (props: Props) => {
    return (
        <div className="grid grid-cols-1">
            <div className="">
                <p className="font-extrabold text-base-content text-[35px] text-center mt-[96px]">
                    Experiencia
                </p>

                {/* EXPERIENCIA 1 */}
                <div className="col-span-1 px-3 py-3">
                    <div className="">
                        <div className="flex flex-row justify-between">
                            <div className="flex gap-2 items-center">
                                <img
                                    src="/icons8-javascript-logo-50.png"
                                    alt="logo"
                                    className="w-3.5 h-3.5"
                                />
                                <h2 className="font-bold text-base-content">
                                    Ingeniero de Desarrollo SERVINFORMACIÓN | Bogotá, Colombia
                                </h2>
                            </div>

                            <div>
                                <p className="text-white">Jun 2021 – Ago 2025</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <p className="text-gray-500 text-[14px] pt-6">
                            Diseño y desarrollo de soluciones personalizadas para
                            clientes. - Liderazgo de reuniones técnicas para análisis de
                            requerimientos. - Creación de interfaces de usuario intuitivas
                            y escalables. - Diseño de bases de datos optimizadas y
                            desarrollo de microservicios. - Implementación de Google Apps
                            Script y AppSheet para automatizar procesos internos. -
                            Capacitaciones a clientes sobre uso de soluciones
                            implementadas. Logros: - Implementación de microservicios que
                            aumentaron la eficiencia operativa en más de 35%. - Reducción
                            de tiempos de entrega de proyectos hasta en un 25% mediante
                            optimización de flujos de trabajo. - Incremento en la adopción
                            de herramientas tecnológicas por parte de clientes a través de
                            capacitaciones. Tecnologías: HTML5, CSS3, JavaScript (ES6),
                            React.js, Vue.js, Bootstrap, jQuery, Figma, DataTables, Google
                            Workspace, AppSheet, Apps Script.
                        </p>
                    </div>
                </div>

                {/* EXPERIENCIA 2 */}
                <div className="col-span-1 px-3 py-3">
                    <div className="">
                        <div className="flex flex-row justify-between">
                            <div className="flex gap-2 items-center">
                                <img
                                    src="/icons8-javascript-logo-50.png"
                                    alt="logo"
                                    className="w-3.5 h-3.5"
                                />
                                <h2 className="font-bold text-base-content">
                                    Desarrollador Web (Freelance) Remoto
                                </h2>
                            </div>

                            <div>
                                <p className="text-white">Ene 2020 – Dic 2020</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <p className="text-gray-500 text-[14px] pt-6">
                            Desarrollo de sitios web responsive optimizados para SEO y
                            Google Speed.Validación de sintaxis con estándares W3C para
                            asegurar calidad de código.Implementación de proyectos
                            escalables con PHP, JavaScript, Bootstrap y jQuery. Proyectos:
                            www.fumigacionescontrolamos.com www.mantenimientohogar.com
                            www.shampoocaida.com - www.cyjcatering.com.co
                        </p>
                    </div>
                </div>
                {/* FIN EXPERIENCIA 2 */}

                {/* EXPERIENCIA 3 */}
                <div className="col-span-1 px-3 py-3">
                    <div className="">
                        <div className="flex flex-row justify-between">
                            <div className="flex gap-2 items-center">
                                <img
                                    src="/icons8-javascript-logo-50.png"
                                    alt="logo"
                                    className="w-3.5 h-3.5"
                                />
                                <h2 className="font-bold text-base-content">
                                    Ingeniero Auxiliar | Proyecto Universidad del Quindío
                                </h2>
                            </div>

                            <div>
                                <p className="text-white">Feb 2019 – Ago 2019</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <p className="text-gray-500 text-[14px] pt-6">
                            Documentación de requerimientos para desarrollo de
                            aplicativos. Construcción de manuales de usuario y
                            repositorios de documentación. Validación y control de cambios
                            en la documentación del sistema CSU.
                        </p>
                    </div>
                </div>
                {/* FIN EXPERIENCIA 3 */}

                {/* EXPERIENCIA 4 */}
                <div className="col-span-1 px-3 py-3">
                    <div className="">
                        <div className="flex flex-row justify-between">
                            <div className="flex gap-2 items-center">
                                <img
                                    src="/icons8-javascript-logo-50.png"
                                    alt="logo"
                                    className="w-3.5 h-3.5"
                                />
                                <h2 className="font-bold text-base-content">
                                    Pasante en Análisis y Desarrollo de Sistemas de Información
                                    CONTROLAMOS SAS | Medellín, Colombia
                                </h2>
                            </div>

                            <div>
                                <p className="text-white">Jun 2018 – Dic 2018</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <p className="text-gray-500 text-[14px] pt-6">
                            Organización de información en datos estructurados. - Migración de
                            documentación física a formato digital. - Desarrollo del sitio web
                            oficial de la empresa y creación de presencia en redes sociales.
                            Tecnologías: HTML5, CSS3, Bootstrap, jQuery, JavaScript, PHP,
                            Photoshop, GoDaddy, SiteGround.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceView