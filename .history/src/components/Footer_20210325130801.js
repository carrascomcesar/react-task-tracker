import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      <Link href="/about">About</Link>
    </footer>
  );
}
