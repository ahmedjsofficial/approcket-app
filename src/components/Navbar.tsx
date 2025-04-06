import { getData } from "@/api/api";
import Header from "./core/header";

export default async function Navbar() {
  const {data} = await getData("navbar");

  return <Header data={data.navbar[0]} />
}
