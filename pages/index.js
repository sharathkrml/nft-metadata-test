import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import toast, { Toaster } from "react-hot-toast";
export default function Home() {
  const notify = () =>
    toast("Here is your toast.", {
      icon: "👏",
      iconTheme: {
        primary: "#000",
        secondary: "#fff",
      },
    });

  const success = () => {
    toast.success("Successfully created!");
  };
  const error = () => {
    toast.error("This is an error!");
  };
  const custom = () => {
    toast.custom(<div>Hello World</div>);
  };
  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify({data:"hiii"})
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <button onClick={success}>Success</button>
      <button onClick={custom}>custom</button>
      <button onClick={() => toast.loading("Waiting...")}>loading</button>
      <button type="button" onClick={exportData}>
        Export Data
      </button>
      <button onClick={error}>error</button>
      <Toaster />
    </div>
  );
}
