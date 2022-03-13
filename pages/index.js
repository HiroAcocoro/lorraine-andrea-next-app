import Head from "next/head";

import Home from "./home";

import { ScrollProvider } from "../helpers/ScrollProvider";

export default function index() {
  return (
    <ScrollProvider>
      <Home />
    </ScrollProvider>
  );
}
