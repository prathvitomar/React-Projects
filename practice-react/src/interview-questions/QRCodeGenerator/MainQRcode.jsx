import { useState } from "react"
import QrCode from "./components/QrCode";

export default function MainQRcode(){
    const [input, setInput] = useState("");
    const [qrCode, setQrCode] = useState("");

    function handleSubmit(e) {
        if (e.type === "click" || e.key === "Enter") {
          setQrCode(input);
          setInput("");
        }
      }
    
    return (
        <>
            <div>
                <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} onKeyDown={handleSubmit}/>
                <button onClick={handleSubmit}>Generate QR</button>
                <QrCode value={qrCode}/>
            </div>
        </>
    )
}
