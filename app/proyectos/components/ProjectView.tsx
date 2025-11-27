"use client";
import Image from "next/image";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const ProjectView = ({ proyecto }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    if (!proyecto)
        return (
            <div className="sm:mx-auto">
                <div className="h-screen flex justify-center items-center">
                    <p className="text-3xl sm:text-5xl text-center">
                        Proyecto no encontrado
                    </p>
                </div>
            </div>
        );

    return (
        <div className="sm:mx-auto px-4">
            <div className="hero bg-base-200 min-h-screen py-10">
                <div className="hero-content flex flex-col lg:flex-row gap-10 w-full">

                    {/* CAROUSEL */}
                    <div className="w-full max-w-xl mx-auto">
                        <div className="carousel w-full rounded-lg shadow-lg">

                            {proyecto.imagenes.map((img, index) => (
                                <div
                                    key={index}
                                    id={`item${index + 1}`}
                                    className="carousel-item w-full"
                                >
                                    <Image
                                        src={img}
                                        width={1200}
                                        height={720}
                                        alt=""
                                        className="
                                            cursor-pointer 
                                            w-full 
                                            h-48 sm:h-72 md:h-80 lg:h-96 
                                            object-cover 
                                            rounded-lg
                                        "
                                        onClick={() => setSelectedImage(img)}
                                    />
                                </div>
                            ))}

                        </div>

                        {/* BOTONES */}
                        <div className="flex w-full justify-center flex-wrap gap-2 py-4">
                            {proyecto.imagenes.map((_, index) => (
                                <button
                                    key={index}
                                    className="btn btn-sm sm:btn-md"
                                    onClick={() => {
                                        document
                                            .getElementById(`item${index + 1}`)
                                            ?.scrollIntoView({
                                                behavior: "smooth",
                                                block: "nearest",
                                                inline: "center",
                                            });
                                    }}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* DESCRIPCIÓN */}
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-3xl sm:text-4xl font-bold">
                            {proyecto.titulo}
                        </h1>

                        <p className="py-4 opacity-80 text-sm sm:text-base">
                            {proyecto.descripcion}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {proyecto.tecnologias.map((tec, i) => (
                                <span
                                    key={i}
                                    className="badge badge-primary badge-outline"
                                >
                                    {tec}
                                </span>
                            ))}
                        </div>

                        {proyecto?.github && (
                            <a
                                href={proyecto.github}
                                target="_blank"
                                className="btn btn-primary mt-6"
                            >
                                Ver en GitHub
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* MODAL */}
            {selectedImage && (
             <ProjectModal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>
            )}
        </div>
    );
};

export default ProjectView;
