"use client";

import { useRouter } from "next/navigation";

const Home = () => useRouter().replace("/upload");

export default Home;
