"use client";

import { useState, useEffect, useRef, memo, useMemo, useCallback } from "react";
import { motion, AnimatePresence, useInView, useMotionValue, useSpring } from "framer-motion";
import { Heart, Gift, Users, Calendar, Clock, ChevronDown, Sparkles, X, ZoomIn, CheckCircle, TrendingUp, FileText, Award } from "lucide-react";
import Image from "next/image";

// Animated Counter Component - Memoized for performance
const AnimatedCounter = memo(({ value, duration = 2 }: { value: number; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.5,
    restSpeed: 0.5
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        // Clamp the value to prevent overshoot
        const clampedValue = Math.min(Math.max(0, latest), value);
        const displayValue = Math.floor(clampedValue);

        // Only update if the value changed to reduce DOM operations
        if (ref.current.textContent !== `$${displayValue}`) {
          ref.current.textContent = `$${displayValue}`;
        }
      }
    });

    return () => unsubscribe();
  }, [springValue, value]);

  return <span ref={ref}>$0</span>;
});

AnimatedCounter.displayName = "AnimatedCounter";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    tier: "",
    message: "",
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Memoize static data arrays
  const valuePropositionItems = useMemo(() => [
    {
      icon: Gift,
      title: "Complete Gingerbread Kit",
      description: "Pre-assembled gingerbread house with icing, candies, and decorations delivered to each member's door.",
      color: "from-fg-teal to-fg-accent-teal",
      delay: 0.1
    },
    {
      icon: Sparkles,
      title: "Bonus Gift Card",
      description: "Gift card for members to purchase extra decorations and supplies to make their creation uniquely theirs.",
      color: "from-fg-navy to-fg-teal",
      delay: 0.2
    },
    {
      icon: Users,
      title: "Live Virtual Event",
      description: "Community members connect at 3PM PST for a guided building session, with prizes for the most creative designs.",
      color: "from-fg-accent-teal to-fg-teal",
      delay: 0.3
    }
  ], []);

  const galleryImages = useMemo(() => [
    { src: "/images/gingerbread-2.jpg", alt: "Creative gingerbread house design from 2024 event" },
    { src: "/images/gingerbread-contest-3.jpeg", alt: "Festive gingerbread creation from community member" },
    { src: "/images/gingerbread-contest-4.jpg", alt: "Unique gingerbread house decorated by foster youth" },
    { src: "/images/gingerbread-contest-5.jpeg", alt: "Colorful gingerbread house from 2024 contest" },
    { src: "/images/gingerbread-contest-6.jpeg", alt: "Beautifully decorated gingerbread creation" },
    { src: "/images/gingerbread-contest-10.jpeg", alt: "Creative gingerbread house design" },
    { src: "/images/gingerbread-contest-11.jpeg", alt: "Community member's festive creation" },
    { src: "/images/event-screenshot-3.png", alt: "Virtual event screenshot showing community members connecting" },
    { src: "/images/event-screenshot-4.png", alt: "Community members building together during virtual event" },
  ], []);

  const communityImpacts = useMemo(() => [
    "Foster meaningful connections during the holiday season",
    "Combat isolation through community belonging",
    "Create joyful memories and holiday traditions",
    "Build confidence through creative expression"
  ], []);

  const contributionBenefits = useMemo(() => [
    { icon: TrendingUp, text: "Direct impact—100% funds the event experience" },
    { icon: FileText, text: "Transparent breakdown of where your money goes" },
    { icon: CheckCircle, text: "Impact report showing community outcomes" },
    { icon: Award, text: "Recognition opportunities for all contribution levels" }
  ], []);

  const transparencyCosts = useMemo(() => [
    {
      amount: 40,
      title: "Per Kit Cost",
      description: "Pre-assembled house, icing, candies, decorations & shipping",
      icon: Gift,
      delay: 0.1,
      color: "from-fg-teal to-fg-accent-teal"
    },
    {
      amount: 20,
      title: "Gift Card",
      description: "Additional supplies so members can personalize their creations",
      icon: Sparkles,
      delay: 0.2,
      color: "from-fg-accent-teal to-fg-teal"
    },
    {
      amount: 15,
      title: "Event & Admin",
      description: "Virtual platform, prizes, coordination, and follow-up impact reporting",
      icon: Users,
      delay: 0.3,
      color: "from-fg-navy to-fg-teal"
    }
  ], []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Add form submission logic
    alert("Thank you for your interest! We'll be in touch soon.");
  }, [formData]);

  const handleChange = useCallback((
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white py-20 md:py-28 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-fg-light-blue px-4 py-2 rounded-full mb-6"
            >
              <Heart className="w-4 h-4 text-fg-teal" />
              <span className="text-sm font-semibold text-fg-navy">December 19th, 2025 • 3PM PST</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-fg-navy"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Create Belonging for{" "}
              <span className="text-fg-teal">
                90 Community Members
              </span>{" "}
              This Holiday Season
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl mb-10 text-gray-600 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Your contribution will help us bring foster youth together this holiday season to join a Virtual Gingerbread House Contest on December 19th. Thank you for helping our members connect, create, and celebrate together! ☃️ 💫
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.7,
                duration: 1.2,
                type: "spring",
                stiffness: 50,
                damping: 15
              }}
            >
              <motion.a
                href="#sponsor"
                className="inline-flex items-center gap-2 bg-fg-teal text-white px-10 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:bg-opacity-90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.9,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 12
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contribute Today
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-fg-navy">
              What Your Contribution Provides
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every contribution creates meaningful connection and holiday joy for community members navigating life with foster care experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {valuePropositionItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay, duration: 0.6 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.color} mb-6 shadow-sm`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-fg-navy">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section id="impact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-fg-navy">
              Last Year's Gingerbread House Contest
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the creativity and connection your contribution creates for our community members.
            </p>
          </motion.div>

          {/* 3x3 Gallery Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer aspect-square"
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative overflow-hidden h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-fg-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 z-10">
                    <ZoomIn className="w-8 h-8 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonial Below Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white rounded-3xl p-10 md:p-12 shadow-xl max-w-4xl mx-auto border-2 border-gray-100"
          >
            <div className="text-center md:text-left">
              <div className="inline-flex p-4 bg-gradient-to-br from-fg-teal/10 to-fg-navy/10 rounded-xl mb-6">
                <Heart className="w-8 h-8 text-fg-teal" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-fg-navy">Community Member</h3>
              <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-700">
                &quot;Events like these remind me that I'm not alone. The
                gingerbread house contest brought so much joy to my December,
                and connecting with others who understand my journey made it
                even more special.&quot;
              </p>
              <p className="text-sm text-gray-600">
                — Foster Greatness member, Age 24
              </p>
            </div>
          </motion.div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.button
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6 text-white" />
              </motion.button>

              <motion.img
                src={selectedImage}
                alt="Full size image"
                className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Dual Impact */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-fg-navy">
              Your Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how your contribution creates meaningful change for our community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Community Impact Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-br from-fg-teal/5 to-fg-navy/5 rounded-3xl p-8 md:p-10 shadow-xl overflow-hidden border-2 border-fg-teal/20"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-fg-accent-teal/15 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="inline-flex p-4 bg-gradient-to-br from-fg-teal/10 to-fg-navy/10 rounded-2xl mb-6">
                  <Heart className="w-8 h-8 text-fg-teal" />
                </div>

                <h3 className="text-3xl font-bold mb-6 text-fg-navy">Community Impact</h3>

                <ul className="space-y-4">
                  {communityImpacts.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-fg-teal flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Your Contribution Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border-2 border-gray-100 overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-fg-yellow/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="inline-flex p-4 bg-gradient-to-br from-fg-teal to-fg-accent-teal rounded-2xl mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-3xl font-bold mb-6 text-fg-navy">Your Contribution</h3>

                <ul className="space-y-4">
                  {contributionBenefits.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                      className="flex items-start gap-3"
                    >
                      <div className="p-2 bg-gradient-to-br from-fg-teal/10 to-fg-navy/10 rounded-lg">
                        <item.icon className="w-5 h-5 text-fg-teal flex-shrink-0" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-fg-navy">
              Where Your Contribution Goes
            </h2>
            <p className="text-xl text-gray-600">
              Complete transparency in how every dollar creates impact
            </p>
          </motion.div>

          {/* Gingerbread Kit Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100 mb-12 max-w-2xl mx-auto h-80"
          >
            <Image
              src="/images/gingerbread-1.jpg"
              alt="Example gingerbread house kit - decorated house with colorful candies and icing"
              fill
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-fg-navy/90 via-fg-navy/40 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <div className="flex items-center gap-3 mb-3">
                <div className="inline-flex items-center gap-2 bg-fg-teal px-4 py-2 rounded-full shadow-lg">
                  <Gift className="w-5 h-5 text-white" />
                  <span className="font-bold text-white">What's Included</span>
                </div>
              </div>
              <p className="text-white text-lg font-medium">
                Each kit includes a pre-assembled house, icing, candies, decorations & shipping
              </p>
            </div>
          </motion.div>

          {/* Cost Breakdown Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {transparencyCosts.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay, duration: 0.6 }}
                className="relative bg-white rounded-2xl p-8 border-2 border-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -8 }}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} mb-4 shadow-sm`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>

                <div className="text-5xl md:text-6xl font-bold mb-3 text-fg-navy">
                  <AnimatedCounter value={item.amount} />
                </div>

                <p className="text-fg-teal font-bold text-xl mb-3">
                  {item.title}
                </p>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Total Summary */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white rounded-2xl p-8 border-2 border-gray-100 text-center shadow-lg"
          >
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <span className="text-2xl font-bold text-fg-navy">Total per community member:</span>
              <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fg-teal to-fg-accent-teal">
                <AnimatedCounter value={75} duration={2.5} />
              </span>
            </div>
            <p className="mt-4 text-lg text-gray-600">
              Your contribution creates complete holiday experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="sponsor" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-fg-navy">
              Get Involved Today
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fill out the form below and we'll be in touch within 24 hours to
              discuss how your contribution creates belonging.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Pricing Callout */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-xl border-2 border-gray-100 lg:sticky lg:top-8"
            >
              {/* Gingerbread Kit Image */}
              <div className="relative h-48 lg:h-56 overflow-hidden">
                <Image
                  src="/images/actual-gingerbread-kit-image.png"
                  alt="Gingerbread house kit with all supplies included"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent" />
              </div>

              <div className="relative z-10 text-center p-8 lg:p-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center gap-2 bg-fg-light-blue px-4 py-2 rounded-full mb-6"
                >
                  <Sparkles className="w-4 h-4 text-fg-teal" />
                  <span className="text-sm font-semibold text-fg-navy">Complete Holiday Experience</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
                  className="text-6xl lg:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-fg-teal to-fg-accent-teal"
                >
                  <AnimatedCounter value={75} />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-xl lg:text-2xl mb-6 font-semibold text-fg-navy"
                >
                  Creates one complete holiday experience
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-lg mb-6 text-gray-600"
                >
                  Fund belonging for 1 community member or 90—every contribution matters.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="bg-white rounded-2xl p-6 border-2 border-gray-100 shadow-md"
                >
                  <p className="text-base leading-relaxed text-gray-700">
                    Contribute at any level. Your investment directly funds gingerbread kits, gift cards, and virtual connection for our community.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 border border-gray-100"
            >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-fg-teal focus:border-fg-teal transition-all outline-none hover:border-gray-300"
                    placeholder="John Doe"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <label
                    htmlFor="organization"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Organization *
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-fg-teal focus:border-fg-teal transition-all outline-none hover:border-gray-300"
                    placeholder="Your Organization"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-fg-teal focus:border-fg-teal transition-all outline-none hover:border-gray-300"
                  placeholder="you@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <label
                  htmlFor="tier"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  How many community members would you like to sponsor? *
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="tier"
                    name="tier"
                    required
                    min="1"
                    max="90"
                    placeholder="e.g., 1, 5, 10, 90..."
                    value={formData.tier}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-fg-teal focus:border-fg-teal transition-all outline-none hover:border-gray-300"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-fg-teal">
                    × $75
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2 flex items-center gap-1">
                  <Sparkles className="w-4 h-4 text-fg-teal" />
                  $75 per community member creates a complete holiday experience
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Additional Information (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-fg-teal focus:border-fg-teal transition-all outline-none hover:border-gray-300 resize-none"
                  placeholder="Tell us more about your organization or any questions you have..."
                />
              </motion.div>

              <motion.button
                type="submit"
                className="group relative w-full bg-gradient-to-r from-fg-teal to-fg-accent-teal text-white px-8 py-4 rounded-xl font-bold text-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Submit Inquiry
                  <Heart className="w-5 h-5" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-fg-accent-teal to-fg-teal"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <p className="text-center text-sm text-gray-500">
                We'll respond within 24 hours • All information is confidential
              </p>
            </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
