import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle, ExternalLink } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import images for Vercel deployment
import petAdoptionImg from "@/assets/pet-adoption.jpg";
import carHouseImg from "@/assets/car-house.jpg";
import lostCatImg from "@/assets/lost-cat.jpg";
import profileImg from "@/assets/profile.jpg";
import workSample1Img from "@/assets/work-sample-1.jpg";
import workSample2Img from "@/assets/work-sample-2.jpg";

/**
 * Scopeman Portfolio - Home Page with Advanced Animations
 * Design System: Bold & Contemporary
 * Color Palette: Navy (#1a1a2e) + Electric Blue (#0066ff) + Gold (#ffd700)
 * Typography: Montserrat (headers) + Inter (body)
 * Animations: Framer Motion with staggered effects, parallax, and interactive elements
 */

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const slideInVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const slideInRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const rotateVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Marketing For Your Business",
      category: "Marketing Design",
      image: workSample1Img,
      description: "Professional marketing collateral with strategic color blocking and modern typography",
    },
    {
      id: 2,
      title: "Holiday Travel Package",
      category: "Travel Marketing",
      image: workSample2Img,
      description: "Vibrant and engaging holiday travel promotion with dynamic layout and clear pricing",
    },
    {
      id: 3,
      title: "Pet Adoption Campaign",
      category: "Social Impact Design",
      image: petAdoptionImg,
      description: "Heartwarming and vibrant campaign design for pet adoption services",
    },
    {
      id: 4,
      title: "Car House Promotional",
      category: "Automotive Marketing",
      image: carHouseImg,
      description: "Dynamic and high-impact promotional design for luxury car rentals",
    },
    {
      id: 5,
      title: "Lost Cat Poster",
      category: "Community Design",
      image: lostCatImg,
      description: "Classic vintage-style lost pet poster with elegant typography and clear call-to-action",
    },
  ];

  const services = [
    { icon: "🎨", title: "Brand Identity", description: "Logo design, brand guidelines, and visual systems" },
    { icon: "📱", title: "Digital Design", description: "UI/UX design, web design, and mobile interfaces" },
    { icon: "📊", title: "Marketing Materials", description: "Flyers, posters, social media, and promotional content" },
    { icon: "✏️", title: "Typography", description: "Custom lettering, font pairing, and typographic design" },
  ];

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-border"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-white font-display font-bold text-lg">S</span>
            </div>
            <span className="font-display font-bold text-lg hidden sm:inline">Scopeman</span>
          </motion.div>
          <div className="flex items-center gap-4">
            <motion.a
              href="#portfolio"
              className="text-sm font-medium hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Portfolio
            </motion.a>
            <motion.a
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
        {/* Animated background divider */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
            }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.svg
            className="absolute top-0 right-0 w-full h-full opacity-5"
            viewBox="0 0 1440 800"
            preserveAspectRatio="none"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <defs>
              <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="#0066ff" />
              </pattern>
            </defs>
            <rect width="1440" height="800" fill="url(#dots)" />
          </motion.svg>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="inline-block" variants={itemVariants}>
              <div className="flex items-center gap-2 text-primary font-display font-bold text-sm tracking-wide">
                <motion.div
                  className="w-8 h-1 bg-secondary"
                  animate={{ width: [8, 16, 8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                GRAPHIC DESIGNER
              </div>
            </motion.div>

            <motion.h1
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight"
              variants={itemVariants}
            >
              Design That <span className="text-primary">Drives</span> <span className="text-secondary">Impact</span>
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground max-w-md leading-relaxed"
              variants={itemVariants}
            >
              I create bold, strategic visual solutions that elevate brands and engage audiences. From marketing
              collateral to educational content, every design tells a story.
            </motion.p>

            <motion.div className="flex flex-wrap gap-3 pt-4" variants={itemVariants}>
              <motion.a href="#portfolio" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-primary hover:bg-blue-700 text-white font-medium">
                  View Portfolio
                </Button>
              </motion.a>
              <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="border-primary text-primary hover:bg-blue-50">
                  Get in Touch
                </Button>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Visual Element */}
          <motion.div
            className="relative h-96 md:h-full hidden md:block"
            variants={slideInRightVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg"
              style={{
                clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)",
              }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-64 h-64 bg-gradient-to-br from-primary to-blue-700 rounded-lg opacity-10"
                variants={floatingVariants}
                animate="animate"
              />
            </div>
            <motion.svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 400 400"
              preserveAspectRatio="none"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <circle cx="100" cy="100" r="80" fill="none" stroke="#0066ff" strokeWidth="2" opacity="0.2" />
              <circle cx="300" cy="300" r="60" fill="none" stroke="#ffd700" strokeWidth="2" opacity="0.3" />
              <line x1="50" y1="200" x2="350" y2="200" stroke="#0066ff" strokeWidth="1" opacity="0.1" />
              <line x1="200" y1="50" x2="200" y2="350" stroke="#ffd700" strokeWidth="1" opacity="0.15" />
            </motion.svg>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <motion.section
        className="py-16 md:py-24 bg-card"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.div
            className="text-center mb-12 md:mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 className="font-display font-bold text-3xl md:text-4xl mb-4" variants={itemVariants}>
              Services
            </motion.h2>
            <motion.p className="text-muted-foreground max-w-2xl mx-auto" variants={itemVariants}>
              Comprehensive design solutions tailored to your brand's unique needs
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
                variants={scaleVariants}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0, 102, 255, 0.1)" }}
              >
                <motion.div
                  className="text-4xl mb-4"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="font-display font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Portfolio Section */}
      <motion.section
        id="portfolio"
        className="py-16 md:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.div
            className="mb-12 md:mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="flex items-center gap-3 mb-4" variants={itemVariants}>
              <motion.div
                className="w-12 h-1 bg-primary"
                animate={{ width: [12, 24, 12] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="font-display font-bold text-primary text-sm tracking-wide">SELECTED WORK</span>
            </motion.div>
            <motion.h2 className="font-display font-bold text-3xl md:text-4xl" variants={itemVariants}>
              Featured Projects
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                variants={scaleVariants}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="relative overflow-hidden rounded-lg bg-muted h-80 md:h-96"
                  whileHover={{ boxShadow: "0 30px 60px rgba(0, 0, 0, 0.3)" }}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={hoveredProject === project.id ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6"
                    animate={hoveredProject === project.id ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.h3
                      className="font-display font-bold text-white text-xl mb-2"
                      animate={hoveredProject === project.id ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      className="text-white/90 text-sm mb-4"
                      animate={hoveredProject === project.id ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.05 }}
                    >
                      {project.description}
                    </motion.p>
                    <motion.div
                      className="flex items-center text-secondary font-medium text-sm"
                      animate={hoveredProject === project.id ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      View Project <ExternalLink className="w-4 h-4 ml-2" />
                    </motion.div>
                  </motion.div>
                </motion.div>

                <motion.div className="mt-4" variants={itemVariants}>
                  <p className="text-sm text-primary font-medium">{project.category}</p>
                  <h3 className="font-display font-bold text-lg mt-1">{project.title}</h3>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              className="md:col-span-1 flex justify-center md:justify-start"
              variants={slideInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="relative w-64 h-80"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-lg opacity-20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.img
                  src={profileImg}
                  alt="Sunday - Scopeman"
                  className="relative w-full h-full object-cover rounded-lg shadow-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>

            {/* About Content */}
            <motion.div
              className="md:col-span-2 space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants}>
                <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">About Scopeman</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm Sunday, a passionate graphic designer known professionally as Scopeman. With a keen eye for
                  detail and a commitment to excellence, I transform ideas into compelling visual narratives.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My work spans branding, marketing design, digital interfaces, and educational content. I believe
                  great design is more than aesthetics—it's about solving problems and creating meaningful connections
                  between brands and their audiences.
                </p>
              </motion.div>

              <motion.div className="grid grid-cols-2 gap-4 pt-4" variants={containerVariants}>
                {[
                  { number: "50+", label: "Projects Completed" },
                  { number: "100%", label: "Client Satisfaction" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-4 rounded-lg border border-border"
                    variants={scaleVariants}
                    whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 102, 255, 0.1)" }}
                  >
                    <motion.div
                      className="text-2xl font-display font-bold text-primary"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      {stat.number}
                    </motion.div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-16 md:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 className="font-display font-bold text-3xl md:text-4xl mb-4" variants={itemVariants}>
              Let's Work Together
            </motion.h2>
            <motion.p className="text-muted-foreground text-lg mb-12" variants={itemVariants}>
              Have a project in mind? I'd love to hear about it. Get in touch and let's create something amazing.
            </motion.p>

            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" variants={containerVariants}>
              {/* Phone */}
              <motion.a
                href="tel:+2347047086101210"
                className="group p-6 bg-card rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
                variants={scaleVariants}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0, 102, 255, 0.1)" }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                </motion.div>
                <h3 className="font-display font-bold mb-2">Phone</h3>
                <p className="text-sm text-muted-foreground">+234 704 7086101210</p>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/2347047086101210"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-card rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
                variants={scaleVariants}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0, 102, 255, 0.1)" }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                >
                  <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                </motion.div>
                <h3 className="font-display font-bold mb-2">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">Chat with me directly</p>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:scopeman@example.com"
                className="group p-6 bg-card rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
                variants={scaleVariants}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0, 102, 255, 0.1)" }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                >
                  <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                </motion.div>
                <h3 className="font-display font-bold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground">Send me a message</p>
              </motion.a>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-primary hover:bg-blue-700 text-white font-medium px-8 py-6 text-base">
                Start Your Project
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-foreground text-white py-8 md:py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="flex items-center gap-2 mb-4 md:mb-0" variants={itemVariants}>
              <div className="w-8 h-8 bg-secondary rounded-sm flex items-center justify-center">
                <span className="text-foreground font-display font-bold">S</span>
              </div>
              <span className="font-display font-bold">Scopeman</span>
            </motion.div>
            <motion.p className="text-white/80 text-sm" variants={itemVariants}>
              © 2024 Scopeman. All rights reserved. Crafted with passion and precision.
            </motion.p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
