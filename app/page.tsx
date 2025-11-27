/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import ExperienceView from "./experiencia/components/ExperienceView";
import Link from "next/link";
const proyectos = [
  {
    titulo: "CRUD IN REACT WITH TAILWIND",
    subtitulo: "CLICK HERE TO VISIT",
    img: "https://img.daisyui.com/images/stock/card-1.webp?x",
  },
  {
    titulo: "AUTOMATIZACION IN GOOGLE",
    subtitulo: "CLICK HERE TO VISIT",
    img: "https://img.daisyui.com/images/stock/card-1.webp?x",
  },
  {
    titulo: "SISTEMA AVANZADO DE PORTAFOLIO",
    subtitulo: "CLICK HERE TO VISIT",
    img: "https://img.daisyui.com/images/stock/card-1.webp?x",
  },
];

export default function Page() {
  // return <Image src="/next.svg" alt="Profile" width={100} height={100} />

  return (
    <>


      {/* <nav className="py-2 lg:py-6 px-0 md:px-4 text-white bg-[#222222] sticky top-0 w-full">
        <div className="md:container sm:mx-auto lg:px-80">
          <div className="flex flex-row items-center">
            <div className="w-2.5 flex-1">
              <h1>Logo</h1>
            </div>
            <div className="w-auto flex-1">
              <ul className="flex flex-row gap-6 font-semibold text-[15px]">
                <li className="bg-none hover:bg-white p-2 rounded-4xl hover:font-bold hover:border-white text-white hover:text-black cursor-pointer">
                  Home
                </li>
                <li className="bg-none hover:bg-white p-2 rounded-4xl hover:font-bold hover:border-white text-white hover:text-black cursor-pointer">
                  Projects
                </li>
                <li className="bg-none hover:bg-white p-2 rounded-4xl hover:font-bold hover:border-white text-white hover:text-black cursor-pointer">
                  Experience
                </li>
                <li className="bg-none hover:bg-white p-2 rounded-4xl hover:font-bold hover:border-white text-white hover:text-black cursor-pointer">
                  Contact
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav> */}

      <div className="container sm:mx-auto py-2 px-4 lg:px-80">
        <div className="">
          <div className="flex flex-col">
            {/* <div className="flex justify-center">
              <Image src="/next.svg" width={100} height={100} alt="logo" />
            </div> */}
            <h1 className="text-center font-bold text-6xl pb-10 text-base-content">
              Desarrollo soluciones tecnológicas que {""}
              <span className="font-bold bg-gradient-to-r from-[#FF8660] to-[#9A33FF] bg-clip-text text-transparent">
                transforman negocios
              </span>
            </h1>

            <p className="text-center pt-3 pb-14 text-gray-500">
              Ingeniero de Sistemas con más de 5 años de experiencia en
              desarrollo de software y automatización de procesos empresariales.
              Experto en Google Workspace, Apps Script, AppSheet y desarrollo
              web con tecnologías modernas como JavaScript, React.js y Python.
              Capaz de diseñar soluciones personalizadas que optimicen la
              productividad y fortalezcan la transformación digital.
            </p>
            <div className="flex flex-row gap-4 justify-center-safe">
              <button className="bg-none hover:bg-accent-content p-6 rounded-4xl hover:font-bold border-4 hover:border-white text-base-content hover:text-base-100 cursor-pointer">
                Contáctame
              </button>
              <button className="bg-none hover:bg-accent-content p-6 rounded-4xl hover:font-bold border-4 hover:border-white text-base-content hover:text-base-100 cursor-pointer">
                Descargar CV
              </button>
            </div>
          </div>
          {/* SECCION EXPERIENCIA TECNOLOGIAS */}
          <div className="grid grid-cols-1">
            <p className="uppercase text-base-content text-center mt-20 text-2xl">
              Experiencia con
            </p>
            <div className="col-span-1 flex flex-row justify-center mt-[48]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                width="4em"
                height="4em"
              >
                <g fill="none">
                  <rect width="256" height="256" fill="#F0DB4F" rx="60" />
                  <path
                    fill="#323330"
                    d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258c0-18.044 13.748-31.792 35.229-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"
                  />
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                width="4em"
                height="4em"
              >
                <path
                  fill="#E44D26"
                  d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198l-45.019 12.48z"
                />
                <path
                  fill="#F16529"
                  d="m64 116.8l36.378-10.086l8.559-95.878H64z"
                />
                <path
                  fill="#EBEBEB"
                  d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692l3.382 37.927H64zm0 35.743l-.061.017l-15.327-4.14l-.979-10.975H33.816l1.928 21.609l28.193 7.826l.063-.017z"
                />
                <path
                  fill="#fff"
                  d="M63.952 52.455v13.763h16.947l-1.597 17.849l-15.35 4.143v14.319l28.215-7.82l.207-2.325l3.234-36.233l.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092l.628-6.978l.329-3.692z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                width="4em"
                height="4em"
              >
                <path
                  fill="#1572B6"
                  d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543l-45.119-12.526z"
                />
                <path
                  fill="#33A9DC"
                  d="m64.001 117.062l36.559-10.136l8.601-96.354h-45.16v106.49z"
                />
                <path
                  fill="#fff"
                  d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95V51.429z"
                />
                <path
                  fill="#EBEBEB"
                  d="m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018v-14.39z"
                />
                <path
                  fill="#fff"
                  d="m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881H81.127z"
                />
                <path
                  fill="#EBEBEB"
                  d="M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711h16.447z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                width="4em"
                height="4em"
              >
                <g fill="none">
                  <rect
                    width="256"
                    height="256"
                    fill="url(#skillIconsBootstrap0)"
                    rx="60"
                  />
                  <g filter="url(#skillIconsBootstrap2)">
                    <path
                      fill="url(#skillIconsBootstrap1)"
                      d="M131.97 196.157c29.676 0 47.559-14.531 47.559-38.497c0-18.117-12.759-31.232-31.706-33.309v-.754c13.92-2.265 24.843-15.192 24.843-29.628c0-20.57-16.239-33.969-40.986-33.969H76v136.157zM97.653 77.267h28.807c15.66 0 24.553 6.983 24.553 19.627c0 13.493-10.343 21.041-29.096 21.041H97.653zm0 101.623v-44.819h28.613c20.494 0 31.127 7.548 31.127 22.268c0 14.719-10.343 22.551-29.87 22.551z"
                    />
                    <path
                      stroke="#fff"
                      strokeWidth="2"
                      d="M131.97 196.157c29.676 0 47.559-14.531 47.559-38.497c0-18.117-12.759-31.232-31.706-33.309v-.754c13.92-2.265 24.843-15.192 24.843-29.628c0-20.57-16.239-33.969-40.986-33.969H76v136.157zM97.653 77.267h28.807c15.66 0 24.553 6.983 24.553 19.627c0 13.493-10.343 21.041-29.096 21.041H97.653zm0 101.623v-44.819h28.613c20.494 0 31.127 7.548 31.127 22.268c0 14.719-10.343 22.551-29.87 22.551z"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="skillIconsBootstrap0"
                      x1="0"
                      x2="256"
                      y1="0"
                      y2="256"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9013FE" />
                      <stop offset="1" stopColor="#6B11F4" />
                    </linearGradient>
                    <linearGradient
                      id="skillIconsBootstrap1"
                      x1="85.793"
                      x2="148.541"
                      y1="68.962"
                      y2="175.084"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset="1" stopColor="#F1E5FC" />
                    </linearGradient>
                    <filter
                      id="skillIconsBootstrap2"
                      width="137.529"
                      height="170.157"
                      x="59"
                      y="47"
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="8" />
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                      <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_158_100"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_158_100"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </g>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="4em"
                height="4em"
              >
                <rect
                  width="373"
                  height="107"
                  x="27.53"
                  y="328.9"
                  fill="#ea4335"
                  rx="53.5"
                />
                <circle cx="81.36" cy="382.6" r="26.7" fill="#fff" />
                <rect
                  width="373"
                  height="107"
                  x="53.33"
                  y="250.94"
                  fill="#fbbc04"
                  rx="53.5"
                  transform="rotate(-144 239.832 304.447)"
                />
                <circle cx="131.44" cy="225.44" r="26.7" fill="#fff" />
                <rect
                  width="373"
                  height="107"
                  x="120.53"
                  y="201.9"
                  fill="#34a853"
                  rx="53.5"
                  transform="rotate(72 307.032 255.396)"
                />
                <circle cx="265.84" cy="129.28" r="26.7" fill="#fff" />
                <rect
                  width="373"
                  height="107"
                  x="202.53"
                  y="201.9"
                  fill="#4285f4"
                  rx="53.5"
                  transform="rotate(-72 389.029 255.392)"
                />
                <circle cx="348.22" cy="381.64" r="26.7" fill="#fff" />
                <circle cx="430.67" cy="127.89" r="26.7" fill="#fff" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                width="4em"
                height="4em"
              >
                <g fill="#61DAFB">
                  <circle cx="64" cy="64" r="11.4" />
                  <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3c.6-2.4 1.1-4.8 1.5-7.1c2.1-13.2-.2-22.5-6.6-26.1c-1.9-1.1-4-1.6-6.4-1.6c-7 0-15.9 5.2-24.9 13.9c-9-8.7-17.9-13.9-24.9-13.9c-2.4 0-4.5.5-6.4 1.6c-6.4 3.7-8.7 13-6.6 26.1c.4 2.3.9 4.7 1.5 7.1c-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3c-.6 2.4-1.1 4.8-1.5 7.1c-2.1 13.2.2 22.5 6.6 26.1c1.9 1.1 4 1.6 6.4 1.6c7.1 0 16-5.2 24.9-13.9c9 8.7 17.9 13.9 24.9 13.9c2.4 0 4.5-.5 6.4-1.6c6.4-3.7 8.7-13 6.6-26.1c-.4-2.3-.9-4.7-1.5-7.1c2.4-.7 4.7-1.4 6.9-2.3c12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3c-.3 2.1-.8 4.3-1.4 6.6c-5.2-1.2-10.7-2-16.5-2.5c-3.4-4.8-6.9-9.1-10.4-13c7.4-7.3 14.9-12.3 21-12.3c1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6c-3.7.3-7.4.4-11.2.4c-3.9 0-7.6-.1-11.2-.4c-2.2-3.2-4.2-6.4-6-9.6c-1.9-3.3-3.7-6.7-5.3-10c1.6-3.3 3.4-6.7 5.3-10c1.8-3.2 3.9-6.4 6.1-9.6c3.7-.3 7.4-.4 11.2-.4c3.9 0 7.6.1 11.2.4c2.2 3.2 4.2 6.4 6 9.6c1.9 3.3 3.7 6.7 5.3 10c-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3c-3.4.8-7 1.4-10.8 1.9c1.2-1.9 2.5-3.9 3.6-6c1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3c2.3.1 4.6.2 6.9.2c2.3 0 4.6-.1 6.9-.2c-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9c1.1-3.3 2.3-6.8 3.8-10.3c1.1 2 2.2 4.1 3.4 6.1c1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3c3.4-.8 7-1.4 10.8-1.9c-1.2 1.9-2.5 3.9-3.6 6c-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3c-2.3-.1-4.6-.2-6.9-.2c-2.3 0-4.6.1-6.9.2c2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9c-1.1 3.3-2.3 6.8-3.8 10.3c-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3c1-.6 2.2-.9 3.5-.9c6 0 13.5 4.9 21 12.3c-3.5 3.8-7 8.2-10.4 13c-5.8.5-11.3 1.4-16.5 2.5c-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4c2-.8 4.2-1.5 6.4-2.1c1.6 5 3.6 10.3 6 15.6c-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3c.3-2.1.8-4.3 1.4-6.6c5.2 1.2 10.7 2 16.5 2.5c3.4 4.8 6.9 9.1 10.4 13c-7.4 7.3-14.9 12.3-21 12.3c-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3c-1 .6-2.2.9-3.5.9c-6 0-13.5-4.9-21-12.3c3.5-3.8 7-8.2 10.4-13c5.8-.5 11.3-1.4 16.5-2.5c.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1c-1.6-5-3.6-10.3-6-15.6c2.4-5.3 4.5-10.5 6-15.5c13.8 4 22.1 10 22.1 15.6c0 4.7-5.8 9.7-15.7 13.4z" />
                </g>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                width="4em"
                height="4em"
              >
                <path
                  fill="#fff"
                  d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.33 74.33 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.16 36.16 0 0 1-13.93 5.5a41.29 41.29 0 0 1-15.1 0A37.16 37.16 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.31 38.31 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.28 34.28 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38z"
                />
                <path
                  fill="#e33629"
                  d="M44.59 4.21a64 64 0 0 1 42.61.37a61.22 61.22 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21z"
                />
                <path
                  fill="#f8bd00"
                  d="M3.26 51.5a62.93 62.93 0 0 1 5.5-15.9l20.73 16.09a38.31 38.31 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9z"
                />
                <path
                  fill="#587dbd"
                  d="M65.27 52.15h59.52a74.33 74.33 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68z"
                />
                <path
                  fill="#319f43"
                  d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.16 37.16 0 0 0 14.08 6.08a41.29 41.29 0 0 0 15.1 0a36.16 36.16 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.73 63.73 0 0 1 8.75 92.4z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                width="4em"
                height="4em"
              >
                <g fill="none">
                  <rect width="256" height="256" fill="#242938" rx="60" />
                  <path
                    fill="url(#skillIconsPythonDark0)"
                    d="M127.279 29c-50.772 0-47.602 22.018-47.602 22.018l.057 22.81h48.451v6.85H60.489S28 76.992 28 128.221s28.357 49.414 28.357 49.414h16.924v-23.773s-.912-28.357 27.905-28.357h48.054s26.999.436 26.999-26.094V55.546S180.338 29 127.279 29m-26.716 15.339a8.71 8.71 0 0 1 8.717 8.717a8.71 8.71 0 0 1-8.717 8.716a8.71 8.71 0 0 1-8.716-8.716a8.71 8.71 0 0 1 8.716-8.717"
                  />
                  <path
                    fill="url(#skillIconsPythonDark1)"
                    d="M128.721 227.958c50.772 0 47.602-22.017 47.602-22.017l-.057-22.811h-48.451v-6.849h67.696S228 179.966 228 128.736s-28.357-49.413-28.357-49.413h-16.924v23.773s.912 28.357-27.905 28.357H106.76s-27-.437-27 26.093v43.866s-4.099 26.546 48.961 26.546m26.716-15.339a8.71 8.71 0 0 1-8.717-8.716a8.71 8.71 0 0 1 8.717-8.717a8.71 8.71 0 0 1 8.717 8.717a8.71 8.71 0 0 1-8.717 8.716"
                  />
                  <defs>
                    <linearGradient
                      id="skillIconsPythonDark0"
                      x1="47.22"
                      x2="146.333"
                      y1="46.896"
                      y2="145.02"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#387EB8" />
                      <stop offset="1" stopColor="#366994" />
                    </linearGradient>
                    <linearGradient
                      id="skillIconsPythonDark1"
                      x1="108.056"
                      x2="214.492"
                      y1="109.905"
                      y2="210.522"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFE052" />
                      <stop offset="1" stopColor="#FFC331" />
                    </linearGradient>
                  </defs>
                </g>
              </svg>
            </div>
          </div>
          {/* FIN SECCION EXPERIENCIA TECNOLOGIAS */}
        </div>

        {/* SECCION PROYECTOS */}

        <div className="grid grid-cols-3 gap-2">
          <span className="text-center  bg-gradient-to-r from-[#FF8660] to-[#9A33FF] bg-clip-text text-transparent col-span-3 font-extrabold text-[35px] mt-[99px] uppercase pb-[27px]">
            Portafolio de proyectos
          </span>
          {/* LISTA DE PROYECTOS */}
          {proyectos.map((el, index) => (
            <div
              className="hover-3d col-span-3 md:col-span-1 cursor-pointer mb-3 mx-auto"
              key={index}
            >
              <figure className="w-60 rounded-2xl">
                <img
                  src={el.img}
                  alt="Tailwind CSS 3D card"
                // fill
                // className=""
                />
                <div className="text-center mt-5">
                  <p className="uppercase text-[10px]">{el.subtitulo}</p>
                  <p className="uppercase text-[19px]">{el.titulo} </p>
                </div>
              </figure>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ))}

          {/* FIN LISTA DE PROYECTOS */}

          <div className="col-span-3 text-center">
            <Link href={"/proyectos"} className="btn hover:btn-outline hover:btn-primary btn-dash rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
              >
                <path
                  fill="currentColor"
                  d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6l6 6zm5.2 0l4.6-4.6l-4.6-4.6L16 6l6 6l-6 6z"
                />
              </svg>
              Ver mas Proyectos
            </Link>
          </div>
        </div>

        {/* FIN SECCION PROYECTOS */}

        {/* SECCION EXPERIENCIA */}
        <ExperienceView />
        {/* FIN SECCION EXPERIENCIA */}


      </div>
    </>
  );
}
