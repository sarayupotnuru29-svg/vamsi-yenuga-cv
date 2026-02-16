import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="section-container text-center">
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} Vamsi Yenuga. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
