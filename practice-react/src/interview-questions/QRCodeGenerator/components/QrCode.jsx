import QRCode from "react-qr-code";
export default function QrCode({ value }) {
  if (value) {
    return (
      <>
        <div
          style={{
            height: "auto",
            margin: "0 auto",
            maxWidth: 64,
            width: "100%",
          }}
        >
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={value}
            viewBox={`0 0 256 256`}
          />
          <h5>Scan the QR code to go at {value}</h5>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h2>Please Enter URL</h2>
      </>
    );
  }
}
