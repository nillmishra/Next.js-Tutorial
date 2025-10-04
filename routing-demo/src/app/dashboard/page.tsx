import { isAbsolute } from "path";

export const metadata = {
  title:{
    absolute: "dashboard - My Next.js App",
  }, 
  description: 'This is the dashboard page of the application.',
};

export default function Dashboard() {
  return <h1>Dashboard Home Page</h1>;
}