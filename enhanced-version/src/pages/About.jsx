import { useState } from "react";
import TeamMember from "../components/TeamMember";
import teamMembersData from "../data/teamMembers.json";
import { db } from "../services/firebase";
import { collection, addDoc } from "firebase/firestore";

const About = () => {
  const [members] = useState(teamMembersData);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: new Date(),
      });
      setSubmitMessage(
        "Thank you for your message! We will get back to you soon."
      );
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage(
        "Error submitting form. Please check your Firebase configuration and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const leader = members.find((m) => m.isLeader);
  const teamMembers = members.filter((m) => !m.isLeader);

  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <section className="bg-gradient-to-br from-cyber-darker to-cyber-gray py-12 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-cyber-green mb-4">
            About CyberSec Hub
          </h1>
          <p className="text-lg text-gray-300">
            Meet the team behind CyberSec Hub — passionate about CTFs, secure
            coding, and user-friendly design.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Team Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-cyber-green mb-6 border-b-2 border-gray-700 pb-2">
            Team Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {members.map(
              (member) =>
                !member.isLeader && (
                  <TeamMember key={member.id} member={member} />
                )
            )}
          </div>
        </section>

        {/* Team Showcase */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-cyber-green mb-6 border-b-2 border-gray-700 pb-2">
            Team Showcase
          </h2>
          <div className="relative rounded-xl overflow-hidden border border-gray-700">
            <img
              src="/src/assets/team/group.png"
              alt="CyberSec Hub Team"
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <div className="text-white text-3xl font-bold">
                CyberSec Hub — 2025
              </div>
              <div className="text-green-300 text-lg">
                From CTFs to secure apps — building, learning, and shipping
                together.
              </div>
            </div>
          </div>
        </section>

        {/* Individual Highlights */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-cyber-green mb-6 border-b-2 border-gray-700 pb-2">
            Individual Highlights
          </h2>
          {leader && <TeamMember member={leader} />}
        </section>

        {/* Contact Form */}
        <section>
          <h2 className="text-3xl font-bold text-cyber-green mb-6 border-b-2 border-gray-700 pb-2">
            Get In Touch
          </h2>
          <div className="bg-cyber-darker border border-gray-700 rounded-lg p-8 max-w-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 text-white border border-gray-600 rounded px-4 py-2 focus:outline-none focus:border-cyber-green"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 text-white border border-gray-600 rounded px-4 py-2 focus:outline-none focus:border-cyber-green"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-gray-700 text-white border border-gray-600 rounded px-4 py-2 focus:outline-none focus:border-cyber-green"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-cyber-green text-black px-8 py-3 rounded-lg font-bold hover:bg-opacity-80 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitMessage && (
                <div
                  className={`p-4 rounded-lg ${
                    submitMessage.includes("Error")
                      ? "bg-red-900 border border-red-700"
                      : "bg-green-900 border border-green-700"
                  }`}
                >
                  <p className="text-white">{submitMessage}</p>
                </div>
              )}
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
