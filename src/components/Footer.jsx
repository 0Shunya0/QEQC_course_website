import { course } from '../data/courseData';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__course">Quantum Entanglement &amp; Quantum Computing</div>
      <div className="site-footer__code">{course.code}</div>
      <div className="site-footer__credit">
        © {new Date().getFullYear()} Machiraju Karthikeya<br />
        Teaching Assistant / Course Repository
      </div>
    </footer>
  );
}
