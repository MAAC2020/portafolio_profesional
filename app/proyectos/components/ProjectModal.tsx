import React from 'react'

type Props = {
    selectedImage: string | null;
    setSelectedImage: (value: string | null) => void;
};


const ProjectModal = ({ selectedImage, setSelectedImage }: Props) => {
    return (
        <dialog
            className="modal modal-open"
            onClick={() => setSelectedImage(null)}
        >
            <div className="modal-box p-2 max-w-sm sm:max-w-md md:max-w-2xl">
                <img
                    src={selectedImage}
                    className="w-full rounded-lg"
                    alt=""
                />

                <div className="modal-action">
                    <button
                        className="btn"
                        onClick={() => setSelectedImage(null)}
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </dialog>
    )
}

export default ProjectModal