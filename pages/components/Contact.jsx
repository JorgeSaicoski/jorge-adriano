import linkedin from ".//../../public/linkedin.png"
import telegram from ".//../../public/telegram.png"
import Image from "next/image"
import {useState} from "react"
import app from "../api/firebase.jsx"
import { collection, getFirestore, setDoc, doc } from "firebase/firestore";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const db = getFirestore(app)
  const newMessage = doc(collection(db, "message"));
  const handleSubmit = ()=>{

    	//creacion de una orden en firebase con id
	    let orden = {}
			orden.name = name
	 	  orden.email = email
			orden.text = message
			setDoc(newMessage, orden);
  		alert("Your number order is: "+newMessage.id)
 		}



  return (
    <section className="background-efect h-screen">
      <form className="w-full p-10 flex flex-col justify-evenly" onSubmit={handleSubmit}>
        <div className="flex flex-col w-full md:items-center mb-6">
          <div className="w-full">
            <label className="block text-center text-second font-bold mb-1 md:mb-0 pr-4 bg-textColor rounded-br-full rounded-tr-full">
              Name
            </label>
          </div>
          <div className="w-full text-base">
            <input className="bg-ligth appearance-none border-2 border-second rounded w-full py-2 px-4 text-headerColor leading-tight focus:outline-none focus:bg-focus focus:border-purple-500" id="inline-full-name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
        </div>
        <div className="flex flex-col w-full md:items-center mb-6">
          <div className="w-full">
            <label className="block text-center text-second font-bold mb-1 md:mb-0 pr-4 bg-textColor rounded-br-full rounded-tr-full">
              E-mail
            </label>
          </div>
          <div className="w-full text-base">
            <input className="bg-ligth appearance-none border-2 border-second rounded w-full py-2 px-4 text-headerColor leading-tight focus:outline-none focus:bg-focus focus:border-purple-500" id="inline-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
        </div>
        <div className="flex md:items-start flex-col mb-6">
          <div className="w-full">
            <label className="block text-center text-second font-bold mb-1 md:mb-0 pr-4 bg-textColor rounded-br-full rounded-tr-full">
              Text
            </label>
          </div>
          <div className="w-full">
            <input className="text-base text-justify bg-ligth h-48 appearance-none border-2 border-second rounded w-full py-2 px-4 text-headerColor  focus:outline-none focus:bg-focus focus:border-black" id="inline-text" type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
          </div>
        </div>
        <div>
          <div className="w-full"></div>
          <div className="w-full">
            <button className="shadow w-full bg-textColor hover:bg-focus focus:shadow-outline focus:outline-none text-second font-bold py-2 px-4 rounded" type="submit">
              Send
            </button>
          </div>
        </div>
      </form>
      <div className="w-full flex flex-row flex-wrap justify-evenly p-20">
        <a href="https://uy.linkedin.com/in/jorge-saicoski?trk=profile-badge" className="w-1/3 bg-headerColor hover:bg-focus p-2 rounded-md">
          <Image
          src={linkedin}
          className="w-1/3"
          />
      </a>
        <a href="https://telegram.im/@jorgesaicoski" className="w-1/3 bg-headerColor hover:bg-focus p-2 rounded-md">
          <Image
          src={telegram}
          className="w-1/3" />
      </a>
      </div>

    </section>
  )
}

export default Contact
