"use client";

import { useState } from "react";
function SymptomsChecker() {
  const [step, setStep] = useState(1);

  const [bodyArea, setBodyArea] = useState("");

  const [onset, setOnset] = useState("");

  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const [redFlags, setRedFlags] = useState<string[]>([]);

  const [showResult, setShowResult] = useState(false);


  const bodyAreas = [
    { name: "Shoulder", icon: "🦴" },
    { name: "Elbow", icon: "💪" },
    { name: "Wrist & Hand", icon: "✋" },
    { name: "Neck", icon: "🧠" },
    { name: "Hip", icon: "🦵" },
    { name: "Knee", icon: "🦿" },
    { name: "Ankle & Foot", icon: "🦶" },
    { name: "Back", icon: "🩻" },
  ];


  const onsetOptions = [
    {
      name: "After an Injury",
      icon: "🤕",
      description: "Fall, accident, sports injury or trauma",
    },
    {
      name: "Gradually Over Time",
      icon: "📈",
      description: "Symptoms developed slowly over days or weeks",
    },
    {
      name: "Sudden Pain",
      icon: "⚡",
      description: "Pain started suddenly without major injury",
    },
    {
      name: "Overuse / Repetitive Activity",
      icon: "🔁",
      description: "Repeated movement, exercise or physical activity",
    },
    {
      name: "Not Sure",
      icon: "🤷",
      description: "You are unsure how the symptoms started",
    },
  ];


  const symptoms = [
    {
      name: "Pain during movement",
      icon: "💥",
    },
    {
      name: "Pain at rest",
      icon: "😣",
    },
    {
      name: "Stiffness",
      icon: "🧊",
    },
    {
      name: "Limited movement",
      icon: "🚶",
    },
    {
      name: "Swelling",
      icon: "🦵",
    },
    {
      name: "Bruising",
      icon: "🔵",
    },
    {
      name: "Redness or warmth",
      icon: "🔥",
    },
    {
      name: "Weakness",
      icon: "💪",
    },
    {
      name: "Numbness",
      icon: "⚡",
    },
    {
      name: "Tingling",
      icon: "✨",
    },
    {
      name: "Joint instability",
      icon: "🔄",
    },
    {
      name: "Clicking or popping",
      icon: "🔊",
    },
    {
      name: "Difficulty walking",
      icon: "🚶‍♂️",
    },
    {
      name: "Joint locking",
      icon: "🔒",
    },
  ];


  const urgentSymptoms = [
    {
      name: "Visible deformity",
      icon: "⚠️",
    },
    {
      name: "Unable to bear weight",
      icon: "🚫",
    },
    {
      name: "Severe pain after major injury",
      icon: "🚨",
    },
    {
      name: "Bone visible or open wound",
      icon: "🩸",
    },
    {
      name: "Loss of sensation",
      icon: "⚡",
    },
    {
      name: "Joint appears out of place",
      icon: "🦴",
    },
  ];


  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((item) => item !== symptom)
        : [...prev, symptom]
    );
  };


  const toggleRedFlag = (symptom: string) => {
    setRedFlags((prev) =>
      prev.includes(symptom)
        ? prev.filter((item) => item !== symptom)
        : [...prev, symptom]
    );
  };


  const nextStep = () => {
    if (step === 1 && bodyArea) {
      setStep(2);
    }

    else if (step === 2 && onset) {
      setStep(3);
    }

    else if (step === 3 && selectedSymptoms.length > 0) {
      setStep(4);
    }

    else if (step === 4) {
      setShowResult(true);
    }
  };


  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };


  const resetChecker = () => {
    setStep(1);

    setBodyArea("");

    setOnset("");

    setSelectedSymptoms([]);

    setRedFlags([]);

    setShowResult(false);
  };


  const getRecommendation = () => {

    if (redFlags.length > 0) {

      return {
        level: "URGENT",
        title: "Urgent Medical Evaluation Recommended",
        description:
          "One or more symptoms you selected may require prompt medical assessment.",
        color:
          "from-red-600 to-rose-500",
        icon: "🚨",
      };
    }


    if (
      selectedSymptoms.includes("Difficulty walking") ||
      selectedSymptoms.includes("Numbness") ||
      selectedSymptoms.includes("Weakness") ||
      selectedSymptoms.includes("Joint instability")
    ) {

      return {
        level: "PROMPT ASSESSMENT",
        title: "Professional Assessment Recommended",
        description:
          "Your symptoms may benefit from an orthopedic consultation in the near future.",
        color:
          "from-orange-500 to-amber-500",
        icon: "⚠️",
      };
    }


    return {
      level: "CONSULTATION",
      title: "Orthopedic Consultation May Be Helpful",
      description:
        "Your symptoms may benefit from professional assessment and guidance.",
      color:
        "from-blue-700 to-cyan-500",
      icon: "🩺",
    };
  };


  if (showResult) {

    const recommendation = getRecommendation();


    return (

      <section
        id="symptoms"
        className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-24 px-6"
      >

        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>


        <div className="relative max-w-4xl mx-auto">


          <div className="text-center mb-10">

            <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-4">

              Symptom Summary

            </p>


            <h2 className="text-4xl md:text-5xl font-bold text-white">

              Your Health Overview

            </h2>

          </div>


          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">


            {/* Recommendation */}

            <div
              className={`bg-gradient-to-r ${recommendation.color} text-white p-8 md:p-10 text-center`}
            >

              <div className="text-6xl mb-5">

                {recommendation.icon}

              </div>


              <p className="font-semibold tracking-widest text-sm opacity-80 mb-3">

                {recommendation.level}

              </p>


              <h3 className="text-3xl md:text-4xl font-bold mb-4">

                {recommendation.title}

              </h3>


              <p className="text-white/90 max-w-2xl mx-auto">

                {recommendation.description}

              </p>

            </div>


            {/* Summary */}

            <div className="p-8 md:p-10">


              <div className="grid md:grid-cols-2 gap-6 mb-8">


                <div className="bg-slate-50 rounded-2xl p-6">

                  <p className="text-sm text-slate-500 mb-2">

                    📍 BODY AREA

                  </p>


                  <p className="text-xl font-bold text-slate-900">

                    {bodyArea}

                  </p>

                </div>


                <div className="bg-slate-50 rounded-2xl p-6">

                  <p className="text-sm text-slate-500 mb-2">

                    ⚡ HOW IT STARTED

                  </p>


                  <p className="text-xl font-bold text-slate-900">

                    {onset}

                  </p>

                </div>


              </div>


              {/* Symptoms */}

              <div className="mb-8">

                <h4 className="text-xl font-bold text-slate-900 mb-4">

                  🔍 Reported Symptoms

                </h4>


                <div className="flex flex-wrap gap-3">

                  {selectedSymptoms.map((symptom) => (

                    <span
                      key={symptom}
                      className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-medium text-sm"
                    >

                      ✓ {symptom}

                    </span>

                  ))}

                </div>

              </div>


              {/* Red Flags */}

              {redFlags.length > 0 && (

                <div className="mb-8 bg-red-50 border border-red-100 rounded-2xl p-6">

                  <h4 className="text-lg font-bold text-red-700 mb-4">

                    ⚠️ Important Symptoms Reported

                  </h4>


                  <div className="flex flex-wrap gap-3">

                    {redFlags.map((symptom) => (

                      <span
                        key={symptom}
                        className="bg-red-100 text-red-700 px-4 py-2 rounded-full font-medium text-sm"
                      >

                        {symptom}

                      </span>

                    ))}

                  </div>

                </div>

              )}


              {/* Contact */}

              <div className="bg-slate-900 rounded-3xl p-8 text-white">

                <p className="text-blue-400 text-sm font-semibold tracking-widest mb-3">

                  NEXT STEP

                </p>


                <h3 className="text-3xl font-bold mb-3">

                  Speak With Dr. Omar Faruk Dipu

                </h3>


                <p className="text-slate-300 mb-7">

                  For a proper evaluation, consultation and personalized guidance,
                  please get in touch.

                </p>


                <div className="flex flex-col sm:flex-row gap-4">


                  <a
                    href="#contact"
                    className="bg-blue-600 hover:bg-blue-500 text-white text-center px-7 py-4 rounded-full font-semibold transition-all hover:scale-105"
                  >

                    Contact Now →

                  </a>


                  <a
                    href="#contact"
                    className="border border-slate-600 hover:border-blue-400 text-white text-center px-7 py-4 rounded-full font-semibold transition-all"
                  >

                    Book Appointment

                  </a>


                </div>

              </div>


              <button
                onClick={resetChecker}
                className="w-full text-center mt-7 text-slate-500 hover:text-blue-600 transition"
              >

                ← Start Again

              </button>


              <p className="text-xs text-slate-400 text-center mt-6">

                This symptom checker is for informational purposes only and
                does not provide a medical diagnosis. In an emergency,
                seek immediate medical care.

              </p>


            </div>


          </div>


        </div>


      </section>

    );
  }


  return (

    <section
      id="symptoms"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-24 px-6"
    >


      {/* Background Effects */}

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>


      <div className="relative max-w-6xl mx-auto">


        {/* Header */}

        <div className="text-center mb-10">


          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 text-blue-300 px-5 py-2 rounded-full mb-6">

            🩺 Smart Orthopedic Symptom Checker

          </div>


          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">

            Let's Understand Your{" "}

            <span className="text-blue-400">

              Symptoms

            </span>

          </h2>


          <p className="text-slate-300 max-w-2xl mx-auto text-lg">

            Answer a few simple questions to better understand your
            orthopedic symptoms and possible next steps.

          </p>


        </div>


        {/* Progress */}

        <div className="max-w-xl mx-auto mb-12">


          <div className="flex justify-between text-sm mb-3">

            <span className="text-blue-300">

              Step {step} of 4

            </span>


            <span className="text-slate-400">

              {step === 1 && "Body Area"}

              {step === 2 && "How It Started"}

              {step === 3 && "Your Symptoms"}

              {step === 4 && "Safety Check"}

            </span>

          </div>


          <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">

            <div
              className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full transition-all duration-500"
              style={{
                width: `${step * 25}%`,
              }}
            ></div>

          </div>


        </div>


        {/* ================= STEP 1 ================= */}

        {step === 1 && (

          <div>


            <div className="text-center mb-8">

              <h3 className="text-3xl font-bold text-white mb-3">

                📍 Where is your problem?

              </h3>


              <p className="text-slate-400">

                Select the area where you are experiencing discomfort.

              </p>

            </div>


            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">


              {bodyAreas.map((area) => (

                <button
                  key={area.name}
                  onClick={() => setBodyArea(area.name)}
                  className={`p-6 rounded-2xl border transition-all duration-300

                  ${
                    bodyArea === area.name

                      ? "bg-blue-600 border-blue-400 scale-105 shadow-xl shadow-blue-900/50"

                      : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-blue-400 hover:-translate-y-1"
                  }`}
                >


                  <div className="text-4xl mb-4">

                    {area.icon}

                  </div>


                  <p className="font-semibold text-white">

                    {area.name}

                  </p>


                </button>

              ))}


            </div>


          </div>

        )}


        {/* ================= STEP 2 ================= */}

        {step === 2 && (

          <div>


            <div className="text-center mb-8">

              <h3 className="text-3xl font-bold text-white mb-3">

                ⚡ How did it start?

              </h3>


              <p className="text-slate-400">

                Choose the option that best describes your situation.

              </p>

            </div>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">


              {onsetOptions.map((item) => (

                <button
                  key={item.name}
                  onClick={() => setOnset(item.name)}
                  className={`text-left p-6 rounded-2xl border transition-all duration-300

                  ${
                    onset === item.name

                      ? "bg-blue-600 border-blue-400 scale-[1.02]"

                      : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-blue-400"
                  }`}
                >


                  <div className="text-4xl mb-4">

                    {item.icon}

                  </div>


                  <h4 className="text-lg font-bold text-white mb-2">

                    {item.name}

                  </h4>


                  <p className="text-sm text-slate-300">

                    {item.description}

                  </p>


                </button>

              ))}


            </div>


          </div>

        )}


        {/* ================= STEP 3 ================= */}

        {step === 3 && (

          <div>


            <div className="text-center mb-8">

              <h3 className="text-3xl font-bold text-white mb-3">

                🔍 What are you experiencing?

              </h3>


              <p className="text-slate-400">

                Select all symptoms that apply to you.

              </p>

            </div>


            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">


              {symptoms.map((symptom) => (

                <button
                  key={symptom.name}
                  onClick={() => toggleSymptom(symptom.name)}
                  className={`relative p-5 rounded-2xl border text-left transition-all duration-300

                  ${
                    selectedSymptoms.includes(symptom.name)

                      ? "bg-blue-600 border-blue-400 scale-[1.03]"

                      : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-blue-400"
                  }`}
                >


                  {selectedSymptoms.includes(symptom.name) && (

                    <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white text-blue-600 flex items-center justify-center text-sm font-bold">

                      ✓

                    </div>

                  )}


                  <div className="text-3xl mb-3">

                    {symptom.icon}

                  </div>


                  <p className="text-white font-medium text-sm">

                    {symptom.name}

                  </p>


                </button>

              ))}


            </div>


          </div>

        )}


        {/* ================= STEP 4 ================= */}

        {step === 4 && (

          <div>


            <div className="text-center mb-8">

              <div className="text-5xl mb-4">

                🚨

              </div>


              <h3 className="text-3xl font-bold text-white mb-3">

                Quick Safety Check

              </h3>


              <p className="text-slate-400 max-w-2xl mx-auto">

                Do you currently have any of the following symptoms?
                Select all that apply.

              </p>

            </div>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">


              {urgentSymptoms.map((symptom) => (

                <button
                  key={symptom.name}
                  onClick={() => toggleRedFlag(symptom.name)}
                  className={`relative text-left p-6 rounded-2xl border transition-all duration-300

                  ${
                    redFlags.includes(symptom.name)

                      ? "bg-red-600 border-red-400"

                      : "bg-white/5 border-white/10 hover:bg-red-500/10 hover:border-red-400"
                  }`}
                >


                  {redFlags.includes(symptom.name) && (

                    <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white text-red-600 flex items-center justify-center font-bold">

                      ✓

                    </div>

                  )}


                  <div className="text-4xl mb-4">

                    {symptom.icon}

                  </div>


                  <p className="font-semibold text-white">

                    {symptom.name}

                  </p>


                </button>

              ))}


            </div>


            <p className="text-center text-slate-500 text-sm mt-7">

              You may continue without selecting anything if none apply.

            </p>


          </div>

        )}


        {/* Navigation Buttons */}

        <div className="flex justify-center gap-4 mt-12">


          {step > 1 && (

            <button
              onClick={previousStep}
              className="px-7 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all"
            >

              ← Back

            </button>

          )}


          <button
            onClick={nextStep}
            disabled={
              (step === 1 && !bodyArea) ||
              (step === 2 && !onset) ||
              (step === 3 && selectedSymptoms.length === 0)
            }
            className={`px-9 py-4 rounded-full font-bold transition-all duration-300

            ${
              (step === 1 && !bodyArea) ||
              (step === 2 && !onset) ||
              (step === 3 && selectedSymptoms.length === 0)

                ? "bg-slate-700 text-slate-400 cursor-not-allowed"

                : "bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-900/50 hover:scale-105"
            }`}
          >

            {step === 4 ? "See My Summary →" : "Continue →"}

          </button>


        </div>


        {/* Disclaimer */}

        <p className="text-center text-slate-500 text-xs mt-10 max-w-2xl mx-auto">

          This tool is for general informational purposes only.
          It does not provide a medical diagnosis or replace professional
          medical evaluation.

        </p>


      </div>


    </section>

  );
}
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              Dr. Omar Faruk Dipu 
            </h1>
            <p className="text-xs text-blue-600">
              MBBS
            </p>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
  <a href="#home" className="hover:text-blue-600">Home</a>

  <a href="#about" className="hover:text-blue-600">
    About
  </a>

  <a href="#services" className="hover:text-blue-600">
    Services
  </a>

  <a
    href="#symptoms"
    className="font-semibold text-blue-600 hover:text-blue-800"
  >
    Symptom Checker
  </a>

  <a href="#gallery" className="hover:text-blue-600">
    Gallery
  </a>

  <a href="#contact" className="hover:text-blue-600">
    Contact
  </a>
</div>

          <a
            href="#contact"
            className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700"
          >
            Book Appointment
          </a>

        </div>
      </nav>


      {/* HERO SECTION */}
      <section
        id="home"
        className="relative overflow-hidden bg-slate-950 pt-32"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-slate-900" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">

          {/* HERO TEXT */}
          <div>

            <div className="mb-6 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              Dedicated to Better Mobility & Health
            </div>

            <h2 className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
              Moving You
              <br />
              <span className="text-blue-400">
                Towards a Better Life.
              </span>
            </h2>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-300">
              Dedicated to helping patients regain mobility, reduce pain,
              and return to the life they love through compassionate and
              evidence-based orthopedic care.
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="#contact"
                className="rounded-full bg-blue-600 px-7 py-4 font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-blue-500"
              >
                Book an Appointment →
              </a>

              <a
                href="#about"
                className="rounded-full border border-slate-600 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
              >
                Learn More
              </a>

            </div>


            {/* STATS */}
            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-slate-700 pt-8">

              <div>
                <p className="text-2xl font-bold text-white">Modern</p>
                <p className="text-sm text-slate-400">
                  Evidence-Based Care
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">Trusted</p>
                <p className="text-sm text-slate-400">
                  Patient Focused
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">Dedicated</p>
                <p className="text-sm text-slate-400">
                  To Your Recovery
                </p>
              </div>

            </div>

          </div>


          {/* HERO IMAGE */}
          <div className="relative">

            <div className="absolute -inset-4 rounded-[40px] bg-blue-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-800 shadow-2xl">

              <div className="flex h-[500px] items-center justify-center bg-gradient-to-br from-blue-900 to-slate-800">

                <div className="text-center">

                  <div className="mb-5 text-8xl">
                    🩺
                  </div>

                  <h3 className="text-3xl font-bold text-white">
                    Dr. Omar Faruk Dipu 
                  </h3>

                  <p className="mt-3 text-blue-300">
                    Orthopedic & Trauma Surgeon
                  </p>

                </div>

              </div>


              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-5 shadow-xl backdrop-blur">

                <p className="text-sm font-semibold text-blue-600">
                  Professional Care
                </p>

                <p className="mt-1 text-xl font-bold text-slate-900">
                  Your Health. Your Mobility. Your Life.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ABOUT */}
      <section id="about" className="py-24">

        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2">

          <div>

            <p className="mb-3 font-semibold text-blue-600">
              ABOUT Dr. Omar Faruk Dipu 
            </p>

            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Compassionate Care.
              <br />
              Professional Excellence.
            </h2>

            <p className="mb-5 leading-relaxed text-slate-600">
              Dr. Omar Faruk Dipu is dedicated to providing compassionate,
              patient-centered orthopedic care with a strong focus on
              evidence-based medicine.
            </p>

            <p className="leading-relaxed text-slate-600">
              The goal is simple — helping patients recover mobility,
              reduce pain, and return to their everyday lives with
              confidence.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-slate-900 px-7 py-4 font-semibold text-white transition hover:bg-blue-600"
            >
              Get In Touch →
            </a>

          </div>


          <div className="rounded-3xl bg-blue-50 p-10">

            <h3 className="mb-8 text-2xl font-bold">
              Professional Approach
            </h3>

            <div className="space-y-6">

              <div>
                <h4 className="font-bold text-blue-700">
                  ✓ Patient-Centered Care
                </h4>
                <p className="mt-2 text-slate-600">
                  Every patient deserves personalized attention and care.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-blue-700">
                  ✓ Evidence-Based Treatment
                </h4>
                <p className="mt-2 text-slate-600">
                  Modern medical knowledge and scientific approaches.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-blue-700">
                  ✓ Compassion & Trust
                </h4>
                <p className="mt-2 text-slate-600">
                  Building confidence through honest communication.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* SERVICES */}
      <section id="services" className="bg-slate-950 py-24 text-white">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14 max-w-2xl">

            <p className="mb-3 font-semibold text-blue-400">
              SERVICES
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              Comprehensive Orthopedic Care
            </h2>

            <p className="mt-5 text-slate-400">
              Focused on improving mobility, reducing pain, and helping
              patients return to an active life.
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              ["🦴", "Bone & Joint Care", "Diagnosis and management of orthopedic conditions."],
              ["🏃", "Sports Injuries", "Helping patients recover and return to activity."],
              ["🚑", "Trauma Care", "Management of fractures and traumatic injuries."],
              ["🦵", "Knee Problems", "Assessment and treatment of common knee conditions."],
              ["💪", "Shoulder & Arm", "Care for shoulder, elbow and upper limb problems."],
              ["🩻", "Fracture Management", "Professional evaluation and treatment planning."],
            ].map(([icon, title, text]) => (

              <div
                key={title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-7 transition hover:-translate-y-2 hover:border-blue-500"
              >

                <div className="mb-5 text-5xl">
                  {icon}
                </div>

                <h3 className="mb-3 text-xl font-bold">
                  {title}
                </h3>

                <p className="leading-relaxed text-slate-400">
                  {text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>
<SymptomsChecker />

      {/* WHY CHOOSE */}
      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14 text-center">

            <p className="font-semibold text-blue-600">
              WHY CHOOSE US
            </p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Care You Can Trust
            </h2>

          </div>


          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl border bg-white p-8 shadow-sm">

              <div className="mb-5 text-4xl">
                ❤️
              </div>

              <h3 className="text-xl font-bold">
                Compassionate Care
              </h3>

              <p className="mt-3 text-slate-600">
                Understanding every patient and their individual needs.
              </p>

            </div>


            <div className="rounded-3xl border bg-white p-8 shadow-sm">

              <div className="mb-5 text-4xl">
                🔬
              </div>

              <h3 className="text-xl font-bold">
                Modern Approach
              </h3>

              <p className="mt-3 text-slate-600">
                Evidence-based treatment and up-to-date medical knowledge.
              </p>

            </div>


            <div className="rounded-3xl border bg-white p-8 shadow-sm">

              <div className="mb-5 text-4xl">
                🤝
              </div>

              <h3 className="text-xl font-bold">
                Patient Trust
              </h3>

              <p className="mt-3 text-slate-600">
                Honest communication and a commitment to better outcomes.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* GALLERY */}
      <section id="gallery" className="bg-slate-100 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12">

            <p className="font-semibold text-blue-600">
              GALLERY
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Professional Journey
            </h2>

          </div>


          <div className="grid gap-6 md:grid-cols-3">

            {["Medical Excellence", "Professional Growth", "Patient Care"].map(
              (item, index) => (

                <div
                  key={item}
                  className="flex h-72 items-end rounded-3xl bg-gradient-to-br from-blue-800 to-slate-900 p-7 shadow-lg"
                >

                  <div>

                    <p className="text-sm text-blue-300">
                      Dr. Omar Faruk Dipu
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-white">
                      {item}
                    </h3>

                  </div>

                </div>

              )
            )}

          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section id="contact" className="bg-blue-700 py-24 text-white">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-14 md:grid-cols-2">

            <div>

              <p className="font-semibold text-blue-200">
                CONTACT
              </p>

              <h2 className="mt-4 text-5xl font-bold">
                Let&apos;s Take the First Step Towards Recovery.
              </h2>

              <p className="mt-6 max-w-xl text-lg text-blue-100">
                For appointments, professional inquiries, or general
                information, feel free to get in touch.
              </p>

            </div>


            <div className="rounded-3xl bg-white p-8 text-slate-900">

              <h3 className="text-2xl font-bold">
                Book an Appointment
              </h3>

              <div className="mt-6 space-y-4">

                <input
                  placeholder="Your Name"
                  className="w-full rounded-xl border p-4 outline-none focus:border-blue-600"
                />

                <input
                  placeholder="Phone Number"
                  className="w-full rounded-xl border p-4 outline-none focus:border-blue-600"
                />

                <textarea
                  placeholder="How can I help you?"
                  rows={4}
                  className="w-full rounded-xl border p-4 outline-none focus:border-blue-600"
                />

                <button
                  className="w-full rounded-xl bg-blue-600 p-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  Send Appointment Request
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="bg-slate-950 py-10 text-slate-400">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 md:flex-row">

          <div>

            <p className="font-bold text-white">
              Dr. Omar Faruk Dipu 
            </p>

            <p className="text-sm">
            MBBS
            </p>

          </div>

          <p className="text-sm">
            © {new Date().getFullYear()} Dr. Omar Faruk Dipu. All rights reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}