import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary to-primary/95 text-white pt-20 pb-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--accent)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,hsl(var(--accent)/0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.img 
                src="/1_page-0001-Photoroom.png" 
                alt="The Deming's House" 
                className="h-16 w-auto object-contain"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
            <h3 className="font-heading text-2xl font-bold text-white mb-4">The Deming's House</h3>
            <p className="font-body text-base text-white/80 leading-relaxed mb-6 max-w-md">
              Empowering non-clinical professionals with world-class healthcare education and certification programs.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start gap-3 group cursor-pointer"
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-body text-sm text-white/60 mb-1">Email</p>
                  <span className="font-body text-sm text-white">info@thedemingshouse.com</span>
                </div>
              </motion.li>
              <motion.li 
                className="flex items-start gap-3 group cursor-pointer"
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-body text-sm text-white/60 mb-1">Phone</p>
                  <span className="font-body text-sm text-white">+1 (555) 123-4567</span>
                </div>
              </motion.li>
              <motion.li 
                className="flex items-start gap-3 group cursor-pointer"
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-body text-sm text-white/60 mb-1">Location</p>
                  <span className="font-body text-sm text-white">Healthcare District, Suite 200</span>
                </div>
              </motion.li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Course", "FAQ's"].map((link, i) => (
                <motion.li key={link} whileHover={{ x: 4 }}>
                  <a
                    href={`#${link.toLowerCase().replace("'s", "")}`}
                    className="font-body text-sm text-white/70 hover:text-accent transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p 
            className="font-body text-sm text-white/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} The Deming's House. All rights reserved.
          </motion.p>

          <motion.div
            className="flex items-center gap-6 text-sm text-white/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
