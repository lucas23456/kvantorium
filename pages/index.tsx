/* eslint-disable @next/next/no-img-element */
import Atropos from "atropos/react";
import "atropos/css";
import Link from "next/link";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";
import { ToastBar, Toaster, toast } from "react-hot-toast";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";


console.warn(`

                                                                            
#                                                                       
mmm#   mmm   m mm    mmmm   mmm    m mm         mmmmm   mmm   m mm    mmm  
#" "#  "   #  #"  #  #" "#  #"  #   #"  "           m"  #" "#  #"  #  #"  # 
#   #  m"""#  #   #  #   #  #""""   #             m"    #   #  #   #  #"""" 
"#m##  "mm"#  #   #  "#m"#  "#mm"   #            #mmmm  "#m#"  #   #  "#mm" 
                     m  #                                                  
                      ""                                                   


`)

export default function Home() {
  const firebaseConfig = {
    apiKey: "AIzaSyD2oRPk_8pDwStzECTPt_ErduFCCibW7g8",
    authDomain: "licopy.firebaseapp.com",
    projectId: "licopy",
    storageBucket: "licopy.appspot.com",
    messagingSenderId: "641073062135",
    appId: "1:641073062135:web:f0c6b6bc55b808d31373f2",
    measurementId: "G-MQ5ER8NKEC"
    };

  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(400);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = document.getElementById("EmailForm").value;

    try {
      const docRef = await addDoc(collection(db, "emails"), {
        email: email,
      });
      console.log(`                           
      m   
m mm    mmm    mmm   mm#mm 
#"  #  #"  #  "   #    #   
#   #  #""""  m"""#    #   
#   #  "#mm"  "mm"#    "mm 
         `);
    } catch (e) {
      console.error("oopsy doopsy", e);
    }

    toast.success("Теперь вы в списке;)");
    document.getElementById("EmailForm").value = "";
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  return (
    <div className="bg-gradient-to-tr from-violet-400 to-violet-700 relative h-screen w-screen overflow-x-hidden">
      <object
        className="absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50"
        type="image/jpg"
      >
        <img
          className="absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50"
          src="fallback.jpeg"
        />
      </object>
      <nav className="fixed z-50 top-0 w-screen p-5 flex flex-row items-center gap-16">
        <div className="flex flex-row items-center gap-2">
          <img src="logo.jpg" alt="Upscayl Logo" className="w-8 rounded-full" />
          <h1 className="text-violet-100 font-extrabold text-lg">Lico.py</h1>
        </div>
        <div className="flex flex-row gap-5">
          <a href="https://vk.com/yarkvantorium" target="_blank" rel="noreferrer">
            <button className="px-3 py-1 bg-violet-500 text-violet-100 rounded-full font-semibold hover:scale-110 transition-all">
              Группа ВК
            </button>
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <button className="px-3 py-1 bg-violet-500 text-violet-100 rounded-full font-semibold hover:scale-110 transition-all">
              GitHub
            </button>
          </a>
        </div>
      </nav>
      <Toaster>
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="flex items-center justify-center"
                >
                  {icon}
                  {message}
                </button>
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
      <Confetti
        width={width}
        height={height}
        gravity={0.05}
        className="z-0 fixed"
        numberOfPieces={50}
      />
      <div className="absolute z-50 inset-0 flex flex-col justify-center items-center max-w-xl mx-auto text-center">
        <Atropos className="my-atropos" shadowScale={0.1} highlight={false}>
          <div className="space-y-      8">
        <h1
          className="font-primary font-extrabold text-violet-100 text-3xl sm:text-4xl md:text-5xl md:leading-tight"
          data-atropos-offset="5">
          Lico.py
        </h1>
        <h3
          className="text-2xl font-semibold text-violet-300"
          data-atropos-offset="-5">
          Лучший способ найти человека на фотографии!
        </h3>
        <div className="px-5 sm:px-0">
          <img
            src="/screenshot.jpg"
            alt="Upscayl Screenshot"
            className="rounded-2xl inline-block"
            data-atropos-offset="0"
          />
        </div>
        <div className="flex flex-col" data-atropos-offset="-5">
          <p
            className="text-violet-100 font-bold md:text-lg lg:text-xl"
            data-atropos-offset="-10">
            Версия v1.0
          </p>

          <div
            className="flex flex-row gap-5 items-center justify-center p-5 "
            data-atropos-offset="10">
            {/* <a
              href="https://github.com/upscayl/upscayl/releases/download/v2.5.1/upscayl-2.5.1-mac.dmg"
              target="_blank"
              rel="noreferrer">
              <button className="p-3 bg-orange-300 rounded-full font-medium hover:scale-110 transition-all text-sm sm:text-base">
                MacOS 🍎
              </button>
            </a> */}

            {/* <a
              href="maillistener.html"
              target="_blank"
              rel="noreferrer">
              <button className="p-3 bg-blue-300 rounded-full font-medium hover:scale-110 transition-all text-sm sm:text-base">
                Windows 🐌
              </button>
            </a>


            <a
              href="maillistener.html"
              target="_blank"
              rel="noreferrer">
              <button className="p-3 bg-green-300 rounded-full font-medium hover:scale-125 transition-all text-sm sm:text-base">
                Linux🐧
              </button>
            </a> */}

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="EmailForm"
                placeholder="name@example.com"
                className="rounded border-0 p-3 mr-2"
              />

              <button
                className="p-3 bg-green-300 rounded-full font-medium hover:scale-105 transition-all text-sm sm:text-base"
                type="submit"
                id="submit"
              >
                Записаться✏️
              </button>
            </form>
          </div>
        </div>
      </div>
    </Atropos>

    <footer className="fixed bottom-1 text-violet-200/50">
      Сделано в сотрудничестве с{" "}
      <a href="https://labmedia.su/" className="font-semibold">
       Лабмедиа
      </a>{" "}
      и{" "}
      <a href="https://vk.com/yarkvantorium" className="font-semibold">
       Кванториум
      </a>
      <br />
      с использованием ⌨ 🖱
    </footer>
  </div>
</div>); }