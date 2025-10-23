import React, { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { Dumbbell, Phone, Mail, MapPin, ChevronRight } from "lucide-react";

// --- Brand tokens ---
const BRAND = {
  name: "Gymnase Saint Giniez",
};

// --- Données de l'équipe ---
const people = [
  {
    id: "anthony",
    name: "Anthony",
    role: "Co-gérant & Coach",
    initials: "AN",
    desc:
      "Passionné de préparation physique et de force, Anthony supervise la programmation et l'expérience globale des adhérents.",
  },
  {
    id: "alicia",
    name: "Alicia",
    role: "Co-gérante & Coach",
    initials: "AL",
    desc:
      "Spécialiste bien-être et accueil, Alicia veille au suivi des membres et à la qualité du service.",
  },
  {
    id: "deborah",
    name: "Déborah",
    role: "Co-gérante & Coach",
    initials: "DB",
    desc:
      "Organisation, plannings et accompagnement : Déborah s'assure que tout roule côté opérationnel et sportif.",
  },
  {
    id: "anis",
    name: "Anis",
    role: "Co-gérant & Coach",
    initials: "AS",
    desc:
      "Coach diplômé et co-gérant, Anis encadre les séances techniques et les parcours de progression des adhérents.",
  },
];

// --- Composant d'une carte profil ---
function ProfileCard({ person, activeId, setActiveId }) {
  const active = activeId === person.id;
  return (
    <motion.button
      layout
      onClick={() => setActiveId(active ? null : person.id)}
      className={[
        "relative rounded-2xl border bg-white p-6 text-left shadow-sm transition",
        "hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600",
        active ? "md:col-span-4" : "md:col-span-1",
      ].join(" ")}
    >
      <motion.div layout className="flex items-center gap-4">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-blue-600 text-white text-xl font-semibold">
          {person.initials}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{person.name}</h3>
          <p className="text-slate-600">{person.role}</p>
        </div>
      </motion.div>

      <motion.div
        layout
        initial={false}
        animate={{ height: active ? "auto" : 0, opacity: active ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="mt-4 text-slate-700">
          <p>{person.desc}</p>
        </div>
      </motion.div>

      <motion.div
        layout
        animate={{ scale: active ? 1.02 : 1 }}
        className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5"
      />
    </motion.button>
  );
}

// --- Composant principal ---
export default function App() {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#accueil" className="flex items-center gap-2 font-semibold">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-blue-600 text-white">
              <Dumbbell size={18} />
            </span>
            <span>{BRAND.name}</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            <a href="#equipe" className="text-slate-700 hover:text-blue-700">
              Équipe
            </a>
            <a href="#contact" className="text-slate-700 hover:text-blue-700">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700"
          >
            Nous contacter <ChevronRight size={18} />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="accueil"
        className="border-b bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-3xl font-bold sm:text-4xl">
              Bienvenue au <span className="text-blue-700">{BRAND.name}</span>
            </h1>
            <p className="mt-4 text-slate-600">
              Salle de sport de quartier — esprit bleu-blanc, entraînement
              sérieux, ambiance conviviale.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border bg-white/70 px-4 py-1 text-sm shadow-sm">
                Coaching
              </span>
              <span className="rounded-full border bg-white/70 px-4 py-1 text-sm shadow-sm">
                Préparation physique
              </span>
              <span className="rounded-full border bg-white/70 px-4 py-1 text-sm shadow-sm">
                Remise en forme
              </span>
            </div>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-tr from-blue-600 to-blue-400" />
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section id="equipe" className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold">L'équipe dirigeante</h2>
            <p className="text-slate-600">
              Cliquez sur un profil pour afficher sa description. Les cartes
              s'agrandissent (zoom) et dévoilent le texte.
            </p>
          </div>
        </div>

        <LayoutGroup>
          <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {people.map((p) => (
              <ProfileCard
                key={p.id}
                person={p}
                activeId={activeId}
                setActiveId={setActiveId}
              />
            ))}
          </motion.div>
        </LayoutGroup>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t bg-blue-50/40">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a
              className="flex items-center gap-3 rounded-xl border bg-white p-4 shadow-sm"
              href="tel:+33000000000"
            >
              <Phone size={18} /> 04 00 00 00 00
            </a>
            <a
              className="flex items-center gap-3 rounded-xl border bg-white p-4 shadow-sm"
              href="mailto:contact@gymnase-saint-giniez.fr"
            >
              <Mail size={18} /> contact@gymnase-saint-giniez.fr
            </a>
            <div className="flex items-center gap-3 rounded-xl border bg-white p-4 shadow-sm">
              <MapPin size={18} /> 13008 Marseille
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-500">
          © {new Date().getFullYear()} {BRAND.name} — Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}
