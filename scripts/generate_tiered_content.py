#!/usr/bin/env python3
"""
Tiered Content Generator for StudyRoadmap Notes.
Reads actual topicName from each markdown, generates subject-appropriate content.
No API needed — uses subject-specific knowledge templates.
"""

import os
import re
from pathlib import Path
from datetime import datetime

NOTES_DIR = Path("/home/node/workspace/studyroadmap-astro/src/content/notes")

# ─── Subject Knowledge Bases (keyed by topicName, partial match supported) ─────

TOPIC_KNOWLEDGE = {

    # ── PHYSICS (NEET/JEE) ──────────────────────────────────────────────────
    "physics": {

        "Units & Measurement": {
            "lite": [
                "**Units & Measurement** — Key Facts for NEET/JEE",
                "Fundamental quantities: length (m), mass (kg), time (s), electric current (A), thermodynamic temperature (K), amount of substance (mol), luminous intensity (cd)",
                "SI prefixes: kilo (10³), centi (10⁻²), milli (10⁻³), micro (10⁻⁶), nano (10⁻⁹), mega (10⁶), pico (10⁻¹²)",
                "Dimensional analysis: [M⁰L¹T⁰] for length, use to check equation validity",
                "⚡ Exam tip: Questions on dimensions and unit conversion are almost guaranteed in NEET/JEE Main",
            ],
            "standard": [
                "**Units & Measurement** — NEET/JEE Study Guide",
                "Fundamental vs Derived: fundamental (independent, 7 total) vs derived (expressed in terms of fundamental)",
                "Systems: SI (worldwide), CGS (centimetre-gram-second), FPS (foot-pound-second)",
                "Dimensional Formula: express physical quantity in terms of [M], [L], [T]; used to derive relations and check homogeneity",
                "Significant figures: rules of addition/subtraction (decimal places), multiplication/division (SF); rounding off",
                "Accuracy vs Precision: accuracy = closeness to true value; precision = reproducibility",
                "Error: absolute (Δx), relative (Δx/x), percentage error (Δx/x × 100); propagation: for z = x±y, Δz = Δx + Δy",
            ],
            "extended": [
                "**Units & Measurement** — Comprehensive NEET/JEE Notes",
                "Historical evolution: CGS → MKS → SI (1960, CGPM). Fundamental vs supplementary (radian, steradian)",
                "Dimensions: Buckingham Pi theorem (dimensional homogeneity, π terms), applications in deriving scaling laws",
                "Dimensional analysis limitations: cannot determine dimensionless constants, cannot check trig/exponential functions",
                "Measurement: Vernier callipers (LC = 0.1mm), screw gauge (LC = 0.01mm), physical balance",
                "Significant figures: subtraction rounds to decimal places, division rounds to SF; rounding: if digit >5 round up",
                "Error analysis: random error (averaging reduces), systematic error (instrumental, zero error), least count error",
                "Practical: determine density of a regular and irregular solid using vernier/screw gauge",
            ],
        },

        "Motion in 1D": {
            "lite": [
                "**Motion in 1D** — Key Facts",
                "Distance vs Displacement: scalar vs vector; path length vs shortest path",
                "Speed vs Velocity: rate vs rate with direction; average speed ≥ |average velocity|",
                "SUVAT equations: v = u + at; s = ut + ½at²; v² = u² + 2as; s = (u+v)t/2",
                "Acceleration: a = (v-u)/t; uniform (constant a) vs non-uniform",
                "⚡ Exam tip: SUVAT questions appear in almost every NEET/JEE paper",
            ],
            "standard": [
                "**Motion in 1D** — NEET/JEE Study Guide",
                "Kinematics equations (SUVAT) for constant acceleration in a straight line",
                "Graphical analysis: slope of position-time = velocity; area under velocity-time = displacement",
                "Relative motion: v_AB = v_A - v_B; when approaching, relative velocity is sum",
                "Free fall: a = g = 9.8 m/s² (downward); sign convention is critical",
                "Ball thrown upward: at maximum height, v = 0, a = -g still acting",
            ],
            "extended": [
                "**Motion in 1D** — Comprehensive Notes",
                "Derivation of SUVAT from calculus: v = ds/dt, a = dv/dt = d²s/dt²; integrate to get equations",
                "Position-time graph: slope = velocity; curve = non-uniform; tangent = instantaneous velocity",
                "Velocity-time graph: slope = acceleration; area = displacement",
                "Non-uniform acceleration: use calculus (integrate a(t) to get v(t), integrate v(t) to get s(t))",
                "Relative velocity in 1D: v_AB = v_A - v_B; v_BA = -v_AB; always state reference frame",
                "Free fall with air resistance (extended): m(dv/dt) = mg - kv; terminal velocity v_t = mg/k",
                "Numericals: overtaking problems, stone dropped from moving vehicle, two stones thrown from building",
            ],
        },

        "Motion in 2D": {
            "lite": [
                "**Motion in 2D** — Key Facts",
                "Projectile motion: motion under gravity with constant horizontal velocity",
                "Range R = u²sin2θ/g; Max height H = u²sin²θ/2g; Time of flight T = 2usinθ/g",
                "Horizontal range is maximum at θ = 45°; same range at complementary angles (θ and 90°-θ)",
                "⚡ Exam tip: At highest point, velocity is purely horizontal (v_y = 0)",
            ],
            "standard": [
                "**Motion in 2D** — NEET/JEE Study Guide",
                "Independence of perpendicular components: horizontal (constant v_x = u cosθ) and vertical (accelerated v_y = u sinθ - gt)",
                "Trajectory equation: y = x tanθ - (g x²)/(2u² cos²θ) — equation of parabola",
                "Relative motion in 2D: river boat problems (downstream vs upstream), aircraft wind problems",
                "Circular motion basics: angular displacement θ, angular velocity ω = dθ/dt, v = ωr",
            ],
            "extended": [
                "**Motion in 2D** — Comprehensive Notes",
                "Projectile from height: different equations when launched from ground vs above ground; time to hit ground differs",
                "Projectile on inclined plane: resolve axes along and perpendicular to plane",
                "Relative motion 2D: v_AB = v_A - v_B; approach velocity and separation velocity",
                "Circular motion: angular quantities (θ in radians), tangential v = rω, centripetal a = v²/r = ω²r",
                "Non-uniform circular motion: tangential acceleration + normal/radial acceleration",
                "Applications: road banking (θ such that no friction needed), conical pendulum",
            ],
        },

        "Laws of Motion": {
            "lite": [
                "**Laws of Motion** — Key Facts for NEET/JEE",
                "Newton's First Law (Inertia): object stays at rest or in uniform motion unless acted upon by external force",
                "Newton's Second Law: F = ma; momentum p = mv; so F = dp/dt more fundamental",
                "Newton's Third Law: every action has equal and opposite reaction; forces act on different objects",
                "Free Body Diagram (FBD): show all forces on ONE body, never include forces exerted BY the body",
                "⚡ Exam tip: FBD is the #1 skill tested — draw it for every problem",
            ],
            "standard": [
                "**Laws of Motion** — NEET/JEE Study Guide",
                "Newton's laws application: identify interacting bodies, draw FBD for each, apply F = ma",
                "Types of forces: contact (normal, tension, friction, spring) and field (gravity, electrostatic)",
                "Normal reaction: perpendicular to surface; tension: along string/rod; friction: f = μN (limiting)",
                "Pulley systems: fixed pulley (no mechanical advantage), movable pulley (MA = 2), combination",
                "Connected bodies: string constraint a₁ = a₂ (same magnitude, opposite direction for inextensible string)",
            ],
            "extended": [
                "**Laws of Motion** — Comprehensive Notes",
                "Impulse-momentum theorem: J = Δp = FΔt; area under F-t graph = impulse; useful for instantaneous forces",
                "Variable mass: rocket equation (Tsiolkovsky), mass being added or removed (mdv/dt = F_ext + v_rel dm/dt)",
                "Friction detailed: static (self-adjusting up to f_s_max = μ_s N), kinetic (f_k = μ_k N); angle of friction φ where tan φ = μ",
                "Pseudo forces: in non-inertial frame, add fictitious force -m×a_frame; useful in lifts, turning vehicles",
                "Pulley-mass systems: tension same in inextensible string; constrain equations; free body method for each body",
                " wedge constraint: minimum number of constraint equations; acceleration of wedge and block",
            ],
        },

        "Work Energy Power": {
            "lite": [
                "**Work, Energy & Power** — Key Facts",
                "Work: W = F·d cosθ = Fd_parallel; SI unit: Joule (N·m); can be negative (angle >90°)",
                "Kinetic Energy: KE = ½mv²; scalar, always ≥ 0",
                "Potential Energy: PE = mgh (gravitational), PE = ½kx² (spring); depends on frame",
                "Conservation of Mechanical Energy: total KE + PE = constant (only if no non-conservative forces",
                "Power: P = W/t = F·v (instantaneous); SI unit: Watt (J/s); 1 hp ≈ 746 W",
                "⚡ Exam tip: Work-Energy theorem W_net = ΔKE is valid even with friction — use it!",
            ],
            "standard": [
                "**Work, Energy & Power** — NEET/JEE Study Guide",
                "Conservative forces: gravity, spring, electrostatic — path independent, have potential energy",
                "Non-conservative: friction, air resistance — mechanical energy dissipated as heat",
                "Work-Energy theorem: net work done = change in KE; W_net = ΔKE",
                "Potential energy: U = -∫F·dr; for gravity U = mgh (near Earth's surface); for spring U = ½kx²",
                "Collisions: elastic (KE conserved, e=1), inelastic (KE lost, 0<e<1), perfectly inelastic (objects stick, e=0)",
                "Coefficient of restitution: e = v_separation/v_approach = √(KE_lost/KE_initial) for 1D",
            ],
            "extended": [
                "**Work, Energy & Power** — Comprehensive Notes",
                "Variable force work: W = ∫F·ds; integrate force-displacement graph = area under curve",
                "Power-velocity: P = Fv; for vehicle with constant power: v = (Pt/m)^(1/3), a = (P/(2mv))",
                "Vertical circular motion: minimum speed at top of circle v_min = √(gr) for rope; for complete circle v_bottom ≥ √(5gr)",
                "Center of mass frame: momentum = 0; kinetic energy in CoM frame = KE_total - KE_CoM",
                "Rocket propulsion: Tsiolkovsky equation Δv = v_e ln(m₀/m_f); thrust = -v_e dm/dt",
                "Collision in 2D: conserve momentum in x and y separately; for equal masses at 90° → right angle",
            ],
        },

        "Gravitation": {
            "lite": [
                "**Gravitation** — Key Facts",
                "Newton's Law: F = Gm₁m₂/r²; G = 6.67×10⁻¹¹ N·m²/kg²",
                "g = GM/r² (on Earth's surface g ≈ 9.8 m/s²); g varies with altitude and latitude",
                "Orbital velocity: v = √(GM/r) = √(gr) for orbit near surface; v ≈ 7.9 km/s",
                "Escape velocity: v_e = √(2GM/r) = √(2gr) ≈ 11.2 km/s from Earth",
                "⚡ Exam tip: satellite in circular orbit — centripetal force = gravitational force",
            ],
            "standard": [
                "**Gravitation** — NEET/JEE Study Guide",
                "Gravitational field: g = F/m = GM/r²; points toward mass; superposition for multiple masses",
                "Gravitational potential: V = -GM/r (negative); equipotential surfaces are spherical",
                "Kepler's Laws: (1) orbits are ellipses with Sun at focus, (2) equal areas in equal times (L = constant), (3) T² ∝ r³",
                "Time period: T = 2π√(r³/GM); for near-surface orbit, T ≈ 84 min; geostationary orbit T = 24h",
                "Mass of Earth: M = gR²/G where R = Earth's radius ≈ 6400 km",
            ],
            "extended": [
                "**Gravitation** — Comprehensive Notes",
                "Gravitational potential energy: U = -GMm/r (from infinity to r); total mechanical energy E = KE + PE = -GMm/2r = -KE",
                "Black hole: Schwarzschild radius R_s = 2GM/c²; escape speed = c; event horizon at R_s",
                "Variation of g: with altitude g' = g(R/(R+h))²; with depth g' = g(1 - d/R); at equator g_min due to rotation",
                "Satellite: geostationary orbit (T=24h, h≈36,000km, equatorial), polar orbit (sun-synchronous)",
                "Inertial vs gravitational mass: experimentally equivalent to 1 part in 10¹²; foundation of equivalence principle",
                "Gravitational slingshot: Δv = 2v_planet in planet frame; used by spacecraft to gain/lose speed",
            ],
        },

        "Rotational Motion": {
            "lite": [
                "**Rotational Motion** — Key Facts",
                "Torque τ = r × F = rF sinθ (perpendicular component); SI unit: N·m = J",
                "Moment of Inertia I = Σmr²; depends on mass distribution and axis of rotation",
                "Angular momentum L = Iω = r × p; conservation when no external torque",
                "Rotational KE = ½Iω²; analogous to linear KE = ½mv²",
                "⚡ Exam tip: For pure rolling (no slipping): v = ωr, a = αr, acm = αr",
            ],
            "standard": [
                "**Rotational Motion** — NEET/JEE Study Guide",
                "Moment of inertia for common shapes: ring I = MR², disc I = MR²/2, solid sphere I = 2MR²/5, hollow sphere I = 2MR²/3, rod I = ML²/12 (about centre)",
                "Radius of gyration: k such that I = Mk²; physical meaning: all mass concentrated at distance k from axis",
                "Torque and angular acceleration: τ = Iα (Newton's second law for rotation); α = τ/I",
                "Conservation of angular momentum: L = Iω = constant when τ_ext = 0; pirouette effect",
                "Angular impulse: equivalent to linear impulse but rotational; τΔt = ΔL",
            ],
            "extended": [
                "**Rotational Motion** — Comprehensive Notes",
                "Parallel axis theorem: I = I_cm + Md² (d = distance between parallel axes)",
                "Perpendicular axis theorem: I_z = I_x + I_y (for planar objects only, e.g. ring, disc)",
                "Precession: torque perpendicular to angular momentum → slow circular motion of axis; gyroscopes",
                "Kinetic energy of rolling: KE_total = ½mv_cm² + ½Iω² = ½(mv²)(1 + k²/r²); for ring k=r so KE_roll = mv²",
                "Dynamic equations: torque = Iα; power = τω; angular impulse = ΔL",
                "Work done in rotation: W = ∫τdθ; work-energy: W = Δ(½Iω²)",
            ],
        },

        "Mechanical Properties": {
            "lite": [
                "**Mechanical Properties** — Key Facts",
                "Stress = F/A (force per unit area); Strain = ΔL/L (change per unit length); both dimensionless",
                "Young's Modulus E = Stress/Strain; Hooke's Law: Stress ∝ Strain within elastic limit",
                "Types: Young's (tension/compression), Bulk (uniform pressure), Shear (parallel force)",
                "Elastic potential energy: U = ½ × stress × strain × volume = ½(FΔL/A)",
                "⚡ Exam tip: Deformation is reversible within elastic limit, permanent after plastic deformation",
            ],
            "standard": [
                "**Mechanical Properties** — NEET/JEE Study Guide",
                "Stress-strain curve: proportional limit → elastic limit → yield point → ultimate strength → fracture",
                "Hooke's Law: stress = E × strain; E_steel ≈ 2×10¹¹ Pa, E_rubber ≈ 10⁹ Pa",
                "Poisson's ratio σ = -lateral strain/axial strain; for rubber σ can be ~0.5; for cork σ ≈ 0 (almost incompressible)",
                "Elastic aftereffect: slight delay in recovering original shape after removing load",
            ],
            "extended": [
                "**Mechanical Properties** — Comprehensive Notes",
                "Derivation: E from interatomic potential U(r) = A/r¹² - B/r⁶; Hooke's law emerges near equilibrium",
                "Bulk modulus: K = -V(ΔP/ΔV); compressibility = 1/K; for water K ≈ 2×10⁹ Pa (very incompressible)",
                "Shear modulus: G = F/A / (Δx/L) = τ/γ; relates to E via G = E/(2(1+σ))",
                "Elastic constants relation: E = 2G(1+σ) = 3K(1-2σ); only 2 of 3 are independent",
                "Stress concentration: cracks or sharp corners increase local stress by factor 3-5; explains fracture origin",
                "Ductile vs brittle: ductile (steel, aluminium) - large plastic region; brittle (glass, ceramics) - fracture at yield",
            ],
        },

        "Fluid Mechanics": {
            "lite": [
                "**Fluid Mechanics** — Key Facts",
                "Pressure: P = F/A = ρgh (hydrostatic); Pascal's Law: pressure transmitted equally in all directions",
                "Archimedes' Principle: Buoyant force B = ρVg (weight of displaced fluid)",
                "Continuity: A₁v₁ = A₂v₂ (incompressible fluid, conservation of mass)",
                "Bernoulli: P + ½ρv² + ρgh = constant (along a streamline)",
                "⚡ Exam tip: Bernoulli is for horizontal flow OR when h is constant — use P + ½ρv² = constant",
            ],
            "standard": [
                "**Fluid Mechanics** — NEET/JEE Study Guide",
                "Archimedes: B = ρ_fluid × V_submerged × g; compare densities by weighing in fluid",
                "Floatation: fraction submerged = ρ_object/ρ_fluid; for ice floating in water: 9/10 submerged",
                "Continuity: Av = constant → v ∝ 1/A; for pipe narrowing, velocity increases",
                "Bernoulli application: Venturi meter (measure flow rate), Pitot tube (measure speed of aircraft), sprayer",
                "Surface tension: γ = F/L (force per unit length); excess pressure inside soap bubble = 4γ/r (2 surfaces)",
                "Capillarity: height h = 2γcosθ/(ρgr); rise if θ < 90° (water glass), fall if θ > 90° (mercury glass)",
            ],
            "extended": [
                "**Fluid Mechanics** — Comprehensive Notes",
                "Navier-Stokes equation (terminal form): η ∇²v = ∇P - ρg for viscous flow at low Reynolds number",
                "Poiseuille's law: volume flow rate Q = (πr⁴ΔP)/(8ηL); highly sensitive to radius (r⁴!)",
                "Stokes' law: viscous drag F = 6πηrv; terminal velocity v_t = (2r²/9η)(ρ-σ)g for sphere",
                "Reynolds number: Re = ρvD/η; Re < 2000 → laminar; Re > 4000 → turbulent",
                "Venturi meter: Q = A₁A₂√(2gh/(A₁²-A₂²)) where h = difference in manometer levels",
                "Surface tension detailed: Laplace pressure ΔP = 2γ/r (sphere), ΔP = 4γ/r (soap bubble); drives capillary action",
                "Dimensional analysis: Buckingham Pi for drag force on sphere F = ηvD, Re = ρvD/η",
            ],
        },

        "Thermal Properties": {
            "lite": [
                "**Thermal Properties** — Key Facts",
                "Heat: Q = mcΔT (sensible heat); latent heat L = Q/m (phase change, no temperature change)",
                "Ideal gas equation: PV = nRT; for air at STP: P = 1 atm, T = 273 K",
                "Conduction: dQ/dt = -kA(dT/dx); thermal conductivity k (W/m·K): copper ~400, glass ~1, air ~0.02",
                "⚡ Exam tip: In phase change problems, the temperature doesn't change during the phase change — energy goes into latent heat",
            ],
            "standard": [
                "**Thermal Properties** — NEET/JEE Study Guide",
                "Heat transfer: conduction (through solid), convection (fluid motion), radiation (electromagnetic, no medium needed)",
                "Stefan-Boltzmann: radiated power P = σAT⁴ (σ = 5.67×10⁻⁸ W/m²K⁴); absorptivity = emissivity (Kirchhoff)",
                "Newton's Law of Cooling: rate of cooling ∝ (T - T_surr); dT/dt = -k(T - T_surr)",
                "Thermal expansion: ΔL = αLΔT (linear), ΔA = 2αAΔT (area), ΔV = 3αVΔT (volume)",
            ],
            "extended": [
                "**Thermal Properties** — Comprehensive Notes",
                "Black body: absorbs all radiation (ε=1); Wien's displacement: λ_max T = b = 2.9×10⁻³ m·K",
                "Compound bar: bimetallic strip (different α), used in thermostats",
                "Heat conduction through composite wall: total R = Σ(R_i); heat current H = ΔT/Σ(R_i)",
                "Critical radius of insulation: r_c = k/k_cond for cylinder; adding insulation beyond r_c reduces heat loss",
                "Entropy: ΔS ≥ 0 for isolated system; ΔS = ∫dQ_rev/T; second law alternative formulation",
                "Carnot refrigerator: COP = T_cold/(T_hot - T_cold); real refrigerators have COP 2-4",
            ],
        },

        "Thermodynamics": {
            "lite": [
                "**Thermodynamics** — Key Facts",
                "First Law: ΔU = Q - W (internal energy = heat added - work done by system)",
                "Sign convention: Q positive (heat TO system), W positive (work BY system on surroundings)",
                "Second Law: heat flows spontaneously from hot → cold; Kelvin-Planck (no 100% efficient engine), Clausius (no refrigerator without external work)",
                "Efficiency of Carnot engine: η = 1 - T_cold/T_hot (all temperatures in Kelvin)",
                "⚡ Exam tip: Always convert °C to Kelvin: T(K) = T(°C) + 273",
            ],
            "standard": [
                "**Thermodynamics** — NEET/JEE Study Guide",
                "Thermodynamic processes: isothermal (ΔU=0, ΔQ=ΔW), adiabatic (ΔQ=0, ΔU=-ΔW), isochoric (W=0), isobaric (P constant)",
                "PV diagrams: work done = area under curve; for cyclic process, ΔU=0, net work = area enclosed",
                "Carnot cycle: isothermal expansion → adiabatic expansion → isothermal compression → adiabatic compression",
                "Entropy: ΔS = ∫dQ_rev/T; for reversible process ΔS_universe = 0; for irreversible ΔS > 0",
                "Heat engines: η = W/Q_hot = (Q_hot - Q_cold)/Q_hot = 1 - Q_cold/Q_hot",
            ],
            "extended": [
                "**Thermodynamics** — Comprehensive Notes",
                "Adiabatic process derivation: PV^γ = constant; for monatomic γ = 5/3, diatomic γ = 7/5",
                "Work done: isothermal W = nRT ln(V₂/V₁); adiabatic W = (P₁V₁ - P₂V₂)/(γ-1)",
                "Entropy in mixing: two gases mixing spontaneously has ΔS = nR ln(V₂/V₁) each; demonstrates irreversibility",
                "Clausius inequality: ∮dQ/T ≤ 0; for reversible = 0, for irreversible < 0",
                "Heat pump: reversed heat engine; COP_heat pump = Q_hot/W_input = T_hot/(T_hot - T_cold)",
                "Van der Waals equation: (P + an²/V²)(V - nb) = nRT; accounts for finite molecular size and attraction",
            ],
        },

        "Kinetic Theory": {
            "lite": [
                "**Kinetic Theory** — Key Facts",
                "Assumptions: gas consists of many point molecules, random motion, no forces between molecules except collisions, collisions are elastic",
                "rms speed: v_rms = √(3RT/M) = √(3P/ρ); at 300K, v_rms(N₂) ≈ 517 m/s",
                "Ideal gas: PV = nRT; kinetic interpretation: P = (1/3)ρv_rms²",
                "⚡ Exam tip: Average KE of gas molecules depends ONLY on temperature: KE_avg = (3/2)kT",
            ],
            "standard": [
                "**Kinetic Theory** — NEET/JEE Study Guide",
                "Degrees of freedom: monatomic (3), diatomic (5 at room temp, 7 at high T), non-linear triatomic (6)",
                "Equipartition: each degree of freedom contributes (1/2)kT to energy; total KE = (f/2)nRT",
                "Mean free path: λ = 1/(√2 π d² n*) where n* = number density; inversely proportional to pressure",
                "Brownian motion: evidence for kinetic theory; pollen grain random motion due to molecular collisions",
            ],
            "extended": [
                "**Kinetic Theory** — Comprehensive Notes",
                "Maxwell speed distribution: fraction with speed between v and v+dv; most probable, mean, rms speeds differ",
                "Van der Waals gas: corrections to ideal — attractive forces (a) and finite molecular volume (b); a = 1.39 L² atm/mol², b = 0.039 L/mol for N₂",
                "Transport phenomena: viscosity (η = (1/3)ρv_rms λ), thermal conductivity (K = (1/3)ρv_rms λ c_v), diffusion (D = (1/3)v_rms λ)",
                "Graham's law of effusion: rate ∝ 1/√M; lighter gas effuses faster; used in uranium enrichment",
            ],
        },

        "SHM": {
            "lite": [
                "**Simple Harmonic Motion** — Key Facts",
                "SHM definition: acceleration a = -ω²x; restoring force proportional to displacement",
                "Equation: x = A cos(ωt + φ); v = -Aω sin(ωt + φ); a = -Aω² cos(ωt + φ)",
                "Time period: T = 2π√(m/k) for spring-mass; T = 2π√(L/g) for simple pendulum (small amplitude)",
                "Energy: PE = ½kx², KE = ½k(A² - x²); total E = ½kA² (constant)",
                "⚡ Exam tip: At extreme (x=±A): v=0, a=max; At centre (x=0): v=max, a=0",
            ],
            "standard": [
                "**Simple Harmonic Motion** — NEET/JEE Study Guide",
                "Spring-mass: T = 2π√(m/k); series spring: 1/k_eq = Σ(1/k_i); parallel springs: k_eq = Σk_i",
                "Damped SHM: amplitude decreases as A = A₀e^(-bt/2m); logarithmic decrement δ = ln(A_i/A_f)",
                "Forced oscillations: resonance when driving frequency = natural frequency; amplitude peaks at ω_r = √(ω₀² - 2β²)",
                "Simple pendulum: T = 2π√(L/g); valid for small θ₀; length L measured to centre of bob",
            ],
            "extended": [
                "**Simple Harmonic Motion** — Comprehensive Notes",
                "Differential equation: d²x/dt² + (k/m)x = 0; solution x = A cos(ωt + φ)",
                "Quality factor Q = ω₀/(2β) for damped oscillator; Q = 2π × (energy stored)/(energy lost per period)",
                " Lissajous figures: superposition of two perpendicular SHMs; closed curves when frequency ratio is rational",
                "Physical pendulum: T = 2π√(I/mgd) where d = distance from pivot to COM; used to find g experimentally",
                "Oscillations in LC circuit: q = Q₀ cos(ωt), I = -I₀ sin(ωt); ω = 1/√(LC); analogous to spring-mass",
            ],
        },

        "Waves": {
            "lite": [
                "**Waves** — Key Facts",
                "Wave equation: v = fλ; v = √(T/μ) for string (T=tension, μ=linear density)",
                "Transverse: displacement perpendicular to propagation (string, light); Longitudinal: displacement parallel (sound, spring)",
                "Doppler Effect: f' = f × (v ± v₀)/(v ∓ v_s); source moving toward observer → higher pitch",
                "Stationary waves: nodes (zero amplitude) and antinodes (maximum amplitude); fixed end → node",
                "⚡ Exam tip: Doppler applies to ALL waves (sound, light, water); formula differs slightly for light",
            ],
            "standard": [
                "**Waves** — NEET/JEE Study Guide",
                "Wave types: mechanical (require medium) vs electromagnetic (no medium; c=3×10⁸ m/s)",
                "Doppler: moving source: denominator; moving observer: numerator; both: combine effects",
                "Beats: f_beat = |f₁ - f₂|; heard when two close frequencies interfere; used in tuning",
                "Standing waves on string fixed at both ends: L = n(λ/2), f_n = n(v/2L); fundamental n=1",
                "Open pipe: L = n(λ/2); closed pipe: L = n(λ/4) for odd n only; overtones differ",
            ],
            "extended": [
                "**Waves** — Comprehensive Notes",
                "Wave intensity: I = P/A = (1/2)ρAvω²A² (for sound); I ∝ A² and I ∝ f²",
                "Energy in wave: KE and PE are in phase for transverse waves at the same point; energy flows with the wave",
                "Doppler for light: f' = f√((1+β)/(1-β)) for source approaching at speed v = βc",
                "Shock waves: when source speed > wave speed (sonic boom); Mach number M = v_sound/v_source",
                "Wave propagation in different media: v = √(B/ρ) for longitudinal sound in fluid; v = √(T/μ) for string",
            ],
        },

        "Electrostatics": {
            "lite": [
                "**Electrostatics** — Key Facts",
                "Coulomb's Law: F = kq₁q₂/r²; k = 1/(4πε₀) ≈ 9×10⁹ N·m²/C²",
                "Electric field: E = F/q = kQ/r²; direction away from positive, toward negative charge",
                "Electric potential: V = kQ/r; relationship: E = -dV/dr",
                "Capacitance: C = Q/V = ε₀A/d (parallel plate); energy stored: U = ½CV² = ½QV²",
                "⚡ Exam tip: Field lines go from + to -; equipotential lines are always perpendicular to field lines",
            ],
            "standard": [
                "**Electrostatics** — NEET/JEE Study Guide",
                "Superposition for fields and potentials: E_total = ΣE_i, V_total = ΣV_i (algebraic for V, vector for E)",
                "Electric dipole: moment p = qd; torque τ = pE sinθ; potential at axial point V = kp/r²; at equatorial V = -kp/(2r³)",
                "Gauss's Law: Φ_E = q_enc/ε₀; useful for symmetric charge distributions (spherical, cylindrical, planar)",
                "Dielectrics: polar molecules align with field, reduce effective field; capacitance increases by factor K (dielectric constant)",
            ],
            "extended": [
                "**Electrostatics** — Comprehensive Notes",
                "Applications of Gauss's Law: (1) Spherical shell: E_inside=0, E_surface=kq/r², E_outside=kq/r²; (2) Infinite plane: E = σ/(2ε₀); (3) Uniformly charged sphere: E = (1/4πε₀)(Qr/R³)r_inside",
                "Capacitor combinations: C_series: 1/C_eq = Σ(1/C_i); C_parallel: C_eq = ΣC_i",
                "Energy density: u = ½ε₀E² = ½ρE²; energy stored in any electric field",
                "Dielectric breakdown: air ≈ 3×10⁶ V/m; Capacitor maximum voltage = E_breakdown × d",
                "Uniqueness theorem: given charges on conductors, field is unique; method of images for solving with conductors",
            ],
        },

        "Current Electricity": {
            "lite": [
                "**Current Electricity** — Key Facts",
                "Ohm's Law: V = IR; resistance R = ρL/A; resistivity ρ (Ω·m) is material property",
                "Series: R_total = R₁+R₂+...; Parallel: 1/R_total = 1/R₁+1/R₂+...",
                "Power: P = VI = I²R = V²/R; energy consumed = Pt (kWh = watts × hours / 1000)",
                "Kirchhoff's Laws: Junction (ΣI=0), Loop (ΣV=0); sign convention: current entering junction counts as positive",
                "⚡ Exam tip: In series, same current everywhere; in parallel, same voltage across all branches",
            ],
            "standard": [
                "**Current Electricity** — NEET/JEE Study Guide",
                "EMF: ε = W/q; internal resistance r of source; terminal voltage V = ε - Ir",
                "Wheatstone Bridge: balanced when R₁/R₂ = R₃/R₄; then no current through bridge resistor",
                "Metre bridge (slide wire bridge): balance condition R₁/R₂ = l₁/l₂; used to measure unknown resistance",
                "Potentiometer: measures emf (balance point method); compare emf of two cells; internal resistance measurement",
            ],
            "extended": [
                "**Current Electricity** — Comprehensive Notes",
                "Kirchhoff's matrix method: write equations for each junction and independent loop; solve using Cramer's rule",
                "Delta-Star transformation: R_Y = RΔ/(R₁+R₂+R₃) and RΔ₁ = R₁R₂/R_Y etc.; useful for complex networks",
                "Charging/discharging capacitor: τ = RC; V = V₀(1-e^(-t/RC)) charging; V = V₀e^(-t/RC) discharging",
                "Thermoelectric: Seebeck effect (温差→current), Peltier effect (current→temperature difference), Thomson coefficient",
                "Cell combinations: n identical cells in series → net emf = nε, r = nr; in parallel → ε, r/n (for high current capacity)",
            ],
        },

        "Moving Charges": {
            "lite": [
                "**Moving Charges and Magnetism** — Key Facts",
                "Magnetic force on charge: F = qvB sinθ; direction given by Fleming's left-hand rule",
                "Lorentz force: F = q(E + v×B); perpendicular to both v and B",
                "Cyclotron: v perpendicular to B → circular motion; radius r = mv/(qB); frequency f = qB/(2πm)",
                "⚡ Exam tip: Magnetic force does NO work (always perpendicular to velocity); it only changes direction",
            ],
            "standard": [
                "**Moving Charges and Magnetism** — NEET/JEE Study Guide",
                "Biot-Savart: dB = (μ₀/4π)(Idl × r̂)/r²; direction given by right-hand grip rule",
                "Force on current-carrying conductor: F = BIL sinθ; parallel conductors: F/L = (μ₀/4π)(2I₁I₂/d)",
                "Torque on current loop: τ = NIAB sinθ; magnetic dipole moment m = NIA; analogy with electric dipole",
                "Moving coil galvanometer: I_g = (kθ)/NAB; converted to ammeter with shunt R_s = (I_g R_g)/(I-I_g)",
            ],
            "extended": [
                "**Moving Charges and Magnetism** — Comprehensive Notes",
                "Helical motion: when v has component parallel to B → helix along field lines; pitch = v_parallel × T",
                "Torque on rectangular coil in magnetic field: τ = NIAB sinθ; work done W = NIAB(cosθ₁ - cosθ₂)",
                "Ballistic galvanometer: measures charge from一个大 current pulse; Q = Cθ where C is capacity",
                "Magnetic field due to straight wire: B = (μ₀I/4πr)(sinθ₂ - sinθ₁); infinite wire: B = (μ₀I)/(2πd)",
                "Solenoid: B = μ₀nI (inside, near centre); n = N/L turns per unit length",
            ],
        },

        "Magnetism": {
            "lite": [
                "**Magnetism** — Key Facts",
                "Earth's magnetic field: horizontal component B_H = B cosθ; angle of dip δ = tan⁻¹(B_V/B_H)",
                "Dia/Para/Ferro: diamagnetic (weak repulsion, no permanent moment), paramagnetic (weak attraction, aligned by field), ferromagnetic (strong, permanent magnets)",
                "Curie Law: χ = C/T for paramagnetic; Curie temperature T_C: above T_C, ferromagnet becomes paramagnet",
                "⚡ Exam tip: Soft iron has high permeability → good for electromagnets; steel has high coercivity → good for permanent magnets",
            ],
            "standard": [
                "**Magnetism** — NEET/JEE Study Guide",
                "Hysteresis: B lags behind H; hysteresis loop area = energy loss per unit volume per cycle; soft iron (narrow loop → low loss)",
                "Magnetic materials: hard (steel) → wide loop, high coercivity, permanent magnets; soft (soft iron) → narrow loop, low coercivity, electromagnets",
                "Magnetic screening: ferromagnetic shell shields interior from external fields (like Faraday cage for magnetism)",
            ],
            "extended": [
                "**Magnetism** — Comprehensive Notes",
                "Origin of magnetism: orbital and spin magnetic moments of electrons; Bohr magneton μ_B = eh/4πm",
                "Domain theory: ferromagnetism due to parallel alignment of magnetic moments in domains below Curie temperature",
                "Magnetisation M = magnetic moment per unit volume; magnetic intensity H; B = μ₀(H + M); χ = M/H; μ = μ₀(1+χ)",
                "Magnetic circuits: Φ = MMF/reluctance; analogy with Ohm's law; magnetomotive force (MMF) = NI",
            ],
        },

        "EMI": {
            "lite": [
                "**EMI and AC** — Key Facts",
                "Faraday's Law: ε = -dΦ/dt; induced emf proportional to rate of change of magnetic flux",
                "Lenz's Law: direction of induced current opposes the change causing it (conservation of energy)",
                "Self-induction: ε = -L(dI/dt); L depends on coil geometry (solenoid: L = μ₀N²A/l)",
                "Transformer: V_s/V_p = N_s/N_p = I_p/I_s; step-up (N_s > N_p), step-down (N_s < N_p)",
                "⚡ Exam tip: Lenz's Law always confirms energy is conserved — induced current creates opposing B",
            ],
            "standard": [
                "**EMI and AC** — NEET/JEE Study Guide",
                "Motional emf: ε = Bℓv (rod moving in uniform B perpendicular to v and ℓ); ε = Bℓv sinθ general",
                "AC generator: ε = ε₀ sin(ωt); ε₀ = NBAω sin(ωt) (peak value); ω = 2πf",
                "Inductive reactance: X_L = ωL = 2πfL; capacitive reactance: X_C = 1/(ωC) = 1/(2πfC)",
                "LC oscillation: natural frequency ω = 1/√(LC); analogy with spring-mass mechanical oscillator",
            ],
            "extended": [
                "**EMI and AC** — Comprehensive Notes",
                "Self-inductance of solenoid: L = μ₀N²A/l; energy stored in inductor: U = ½LI²",
                "Mutual induction: M = k√(L₁L₂); ε₂ = -M(dI₁/dt); transformer efficiency ≈ 100% with ideal conditions",
                "AC through R, L, C: impedance Z = √(R² + (X_L - X_C)²); tan φ = (X_L - X_C)/R",
                "Power in AC: P_avg = V_rms I_rms cosφ; cosφ = power factor; for pure resistance cosφ=1, for pure L or C cosφ=0",
                "Sharpness of resonance: Q = ω₀L/R = 1/(ω₀CR); high Q → narrow resonance peak",
            ],
        },

        "EMI and AC": {
            "lite": [
                "**EMI and AC** — Key Facts",
                "Faraday's Law: ε = -dΦ/dt; Lenz's Law: induced current opposes change in flux",
                "AC: ε = ε₀ sin(ωt); RMS values: ε_rms = ε₀/√2; used in power calculations",
                "Transformer: V_s/V_p = N_s/N_p; step-up/step-down; efficiency loss due to core losses and copper resistance",
                "⚡ Exam tip: Average power = V_rms × I_rms × cosφ where cosφ is power factor",
            ],
            "standard": [
                "**EMI and AC** — NEET/JEE Study Guide",
                "Self-induction: ε = -L(dI/dt); energy stored U = ½LI²",
                "LCR series circuit: Z = √(R² + (ωL - 1/ωC)²); resonance when ωL = 1/ωC → Z_min = R, I_max",
                "Quality factor Q = ω₀L/R = 1/(ω₀CR); measures sharpness of resonance",
            ],
            "extended": [
                "**EMI and AC** — Comprehensive Notes",
                "AC power: true power = V_rms I_rms cosφ (watts); apparent power = V_rms I_rms (VA); reactive power = V_rms I_rms sinφ (VAR)",
                "Bandwidth: Δω = ω₀/Q; half-power points where power = ½P_max; Q = ω₀/Δω",
                "Transformer: ideal P_in = P_out; practical losses: copper (I²R), iron (hysteresis + eddy current); eddy current reduction with laminated core",
                "Choke coil: inductor used to reduce current in AC circuit without power loss (unlike resistor); series resonance",
            ],
        },

        "Waves and Ray Optics": {
            "lite": [
                "**Ray Optics** — Key Facts",
                "Reflection: angle of incidence = angle of reflection; image in plane mirror: virtual, upright, same size, laterally inverted",
                "Refraction: n₁ sinθ₁ = n₂ sinθ₂ (Snell's Law); light bends toward normal when entering denser medium",
                "Critical angle: sinθ_c = n₂/n₁; TIR occurs when θ_i > θ_c inside denser medium",
                "Lens formula: 1/f = 1/v + 1/u; magnification m = v/u; power P = 1/f (dioptres)",
                "⚡ Exam tip: For concave lens (diverging): f is negative; always forms virtual, upright, diminished image",
            ],
            "standard": [
                "**Ray Optics** — NEET/JEE Study Guide",
                "Spherical mirrors: 1/f = 1/u + 1/v; f = R/2; magnification m = -v/u (negative m = inverted)",
                "Lens maker's formula: 1/f = (n-1)(1/R₁ - 1/R₂); for thin lens in air; sign convention crucial",
                "Combined lenses: 1/f_eq = 1/f₁ + 1/f₂; for separated lenses add 1/f₁ + 1/f₂ - d/(f₁f₂)",
                "Dispersion: n varies with λ; prism splits white light into spectrum; deviation δ = (μ-1)A for small angle prism",
            ],
            "extended": [
                "**Ray Optics** — Comprehensive Notes",
                "Aberrations: spherical (paraxial rays focus at different points) — minimised by stopping down aperture; chromatic (different λ focus at different points) — corrected by achromatic doublet (lens combination)",
                "Optical instruments: microscope (M = D/f_o × D/f_e for normal adjustment); astronomical telescope (M = -f_o/f_e, final image at infinity)",
                "Young's double slit: fringe width β = λD/d; bright: d sinθ = mλ; dark: d sinθ = (m+½)λ",
                "Thin film interference: constructive 2μt cosr = (m+½)λ (bright); 2μt cosr = mλ (dark); Newton's rings: r_m² = mλR",
                "Diffraction: single slit minima at a sinθ = mλ; resolving power of telescope R = λ/Δλ = D/1.22λ (circular aperture)",
            ],
        },

        "Ray Optics": {
            "lite": [
                "**Ray Optics** — Key Facts",
                "Reflection: i = r; image properties: plane mirror → virtual, upright, same size, behind mirror at same distance",
                "Spherical mirrors: concave (reflecting side of curve), convex (reflecting side of back); f = R/2",
                "Mirror formula: 1/u + 1/v = 1/f; sign convention (real is positive for u and v for concave mirror)",
                "Refraction: n = c/v; Snell's Law: n₁ sinθ₁ = n₂ sinθ₂; relative refractive index n₂₁ = v₁/v₂",
                "Lens: convex (thicker in middle, converging), concave (thinner in middle, diverging)",
                "⚡ Exam tip: For total internal reflection, light must travel from denser to rarer medium — θ_i > θ_c",
            ],
            "standard": [
                "**Ray Optics** — NEET/JEE Study Guide",
                "Refraction through prism: angle of deviation δ = i₁ + i₂ - A; minimum deviation when i₁ = i₂",
                "Optical fibres: TIR at core-cladding boundary; numerical aperture NA = √(n₁² - n₂²)",
                "Lens defects: chromatic (corrected by achromatic doublet), spherical (stopping down), astigmatism, coma",
            ],
            "extended": [
                "**Ray Optics** — Comprehensive Notes",
                "Huygens' principle: each point on wavefront is a secondary wavelet; explains laws of reflection/refraction",
                "Young's double slit: path difference Δ = (xd/D); bright fringe m: Δ = mλ; dark: Δ = (m+½)λ",
                "Diffraction grating: d sinθ = mλ; resolution R = λ/Δλ = mN; higher order → better resolution",
                "Polarisation: Malus' law I = I₀ cos²θ; Brewster angle tanθ_B = n₂/n₁; Brewster angle gives purely s-polarised reflected light",
                "Optical instruments: compound microscope (final image at D for distinct vision), telescope (astronomical: M = -f_o/f_e, Keplerian: M positive, erect image with erecting lens)",
            ],
        },

        "Wave Optics": {
            "lite": [
                "**Wave Optics** — Key Facts",
                "Huygens' principle: each point on wavefront acts as secondary source; wavefront = locus of points in same phase",
                "Young's Double Slit: bright fringe d sinθ = mλ; dark fringe d sinθ = (m+½)λ; fringe width β = λD/d",
                "Diffraction: single slit minimum a sinθ = mλ (m ≠ 0); central maximum is twice as wide as other maxima",
                "Polarisation: proof of transverse wave nature; Brewster angle: tanθ_B = n₂/n₁ for completely polarised reflected ray",
                "⚡ Exam tip: Interference gives sharp bright/dark bands; diffraction gives broader central maximum with side fringes",
            ],
            "standard": [
                "**Wave Optics** — NEET/JEE Study Guide",
                "Condition for sustained interference: coherent sources (constant phase difference), similar amplitudes, same frequency",
                "Thin film interference: reflected rays from top and bottom surfaces; condition depends on phase change on reflection (π when reflected from denser medium)",
                "Newton's rings: r_m² = mλR (dark rings in reflected light when air film); used to test flatness of surfaces",
                "Resolving power: microscope = 2n sinα/λ; telescope = D/1.22λ (Rayleigh criterion for circular aperture)",
            ],
            "extended": [
                "**Wave Optics** — Comprehensive Notes",
                "Fresnel diffraction: near-field; Fraunhofer: far-field (infinite focal length lenses create parallel beams)",
                "Double slit interference: intensity I = 4I₀ cos²(πd sinθ/λ); envelope of single slit modulation",
                "Diffraction grating: d sinθ = mλ; spectrometer use; resolving power R = mN where N = number of illuminated slits",
                "Polarisation by scattering: Rayleigh scattering ∝ 1/λ⁴; explains blue sky (short wavelength scatters most), red sunset",
                "Circularly polarised light: quarter-wave plate produces circular from linear; applications in LCD, 3D movies",
                "Brewster's law: at Brewster angle, reflected and refracted rays are perpendicular; tanθ_B = n₂/n₁",
            ],
        },

        "Modern Physics": {
            "lite": [
                "**Modern Physics** — Key Facts",
                "Photoelectric effect: E = hf - φ; KE_max = hf - φ (Einstein's equation); stopping potential V_s = (hf - φ)/e",
                "de Broglie: λ = h/p = h/(mv); dual nature of matter — particles have wave properties",
                "Bohr model: r_n = n²h²/(4π²mkZe²); E_n = -13.6Z²/n² eV; hydrogen spectrum: 1/λ = R(1/n₁² - 1/n₂²)",
                "Radioactivity: α (⁴He nucleus, He⁺), β (electron/positron), γ (high-energy photon); decay law N = N₀e^(-λt)",
                "⚡ Exam tip: In photoelectric effect, increasing intensity increases photoelectrons but NOT their energy",
            ],
            "standard": [
                "**Modern Physics** — NEET/JEE Study Guide",
                "Matter waves: λ = h/(mv); for thermal electrons at room T, λ ≈ 1.2 nm; for electron in Bohr orbit n=1, λ = 2πa₀",
                "Bohr model extensions: angular momentum quantisation L = mvr = n(h/2π); correspondence principle (quantum → classical at large n)",
                "Radioactive decay: activity A = λN = A₀e^(-λt); half-life t_½ = ln2/λ; mean life τ = 1/λ",
                "Nuclear fission: U-235 + n → Ba-141 + Kr-92 + 3n + energy (~200 MeV); chain reaction requires critical mass",
                "Mass defect and binding energy: ΔE = Δmc²; binding energy per nucleon curve — iron peak (~8.8 MeV/nucleon)",
            ],
            "extended": [
                "**Modern Physics** — Comprehensive Notes",
                "Photoelectric detailed: work function for different metals; cutoff frequency f₀ = φ/h; Einstein's explanation verified by Millikan's experiments",
                "de Broglie derivation: p = h/λ from Einstein-de Broglie relation; Davisson-Germer experiment confirmed electron diffraction",
                "Bohr model limitations: cannot explain fine structure (relativistic corrections), Zeeman effect (magnetic field splitting), Stark effect",
                "Quantum mechanics intro: Schrödinger equation iħ∂ψ/∂t = Ĥψ; particle in 1D box: E_n = n²h²/(8mL²)",
                "X-ray production: bremsstrahlung (continuous, min wavelength λ_min = hc/eV); characteristic lines (sharp Kα, Kβ when electrons knock K-shell electrons)",
                "Nuclear fusion: D-T reaction D + T → He-4 + n + 17.6 MeV; sun's energy from pp-chain; tokamak (ITER) for controlled fusion",
            ],
        },

        "Semiconductors": {
            "lite": [
                "**Semiconductors** — Key Facts",
                "Intrinsic semiconductor (pure Si/Ge): n = p (electrons = holes), Fermi level near middle of band gap",
                "Doping: n-type (P, As → donor, extra e⁻); p-type (B, Ga → acceptor, hole); Fermi shifts toward donor/acceptor level",
                "p-n Junction: depletion region (~0.5μm), barrier potential ~0.7V (Si), ~0.3V (Ge); rectifying junction",
                "Diode: forward bias (V > 0.7V → current flows), reverse bias (no current until breakdown)",
                "⚡ Exam tip: LED emits photons when electrons recombine with holes in forward-biased junction",
            ],
            "standard": [
                "**Semiconductors** — NEET/JEE Study Guide",
                "Band theory: conductor (overlapping bands), semiconductor (small gap ~1 eV), insulator (large gap >3 eV)",
                "p-n junction diode: I = I₀(e^eV/kT - 1); forward resistance ~few ohms; reverse resistance ~MΩ",
                "Zener diode: designed to break down in reverse bias at specific V; used for voltage regulation",
                "Rectifier: half-wave (1 diode, ripple frequency = f); full-wave (2 or 4 diodes, ripple = 2f); filter capacitor smoothens",
                "Transistor: NPN/PNP; three regions: emitter (heavily doped), base (thin, lightly doped), collector",
                "Transistor configurations: CB (low Rin ~100Ω, Rout ~few kΩ, α ≈ 0.98); CE (high Rin ~kΩ, Rout ~50kΩ, β ~100); CC (voltage follower, high Rin, low Rout)",
            ],
            "extended": [
                "**Semiconductors** — Comprehensive Notes",
                "LED: forward bias → recombination radiation; semiconductor bandgap determines photon energy = hf = E_g; GaAs infrared, GaP green/red, GaN blue/white",
                "Photodiode: reverse-biased; current proportional to light intensity; solar cell (photovoltaic mode) produces emf from light",
                "Logic gates: AND, OR, NOT using diodes and transistors; NAND, NOR are universal (any gate can be made from NAND or NOR alone)",
                "Semiconductor laser: population inversion in p-n junction under heavy forward bias; coherent light output",
                "IC fabrication: planar process — oxide growth, photolithography, diffusion, metallisation; MOSFET as fundamental unit",
            ],
        },
    },

    # ── CHEMISTRY ──────────────────────────────────────────────────────────────
    "organic-chemistry": {
        "General Organic Chemistry": {
            "lite": [
                "**GOC** — Key Concepts for NEET/JEE",
                "Electron displacement effects: Inductive (±I), Resonance (±R), Hyperconjugation; affect acidity/basicity and reactivity",
                "Carbocations: stability order: 3° > 2° > 1° > methyl; adjacent double bonds (allylic, benzylic) stabilise via resonance",
                "Carbanions: sp³, nucleophilic; stability: methyl > 1° > 2° > 3° (opposite of carbocations)",
                "Aromaticity: 4n+2 π electrons (Hückel's rule); apply to cyclopentadienyl anion (6π) and tropylium cation (6π)",
                "⚡ Exam tip: Hyperconjugation requires adjacent C-H bond; resonance involves π electron delocalisation",
            ],
            "standard": [
                "**GOC** — NEET/JEE Study Guide",
                "Electron releasing (+I): alkyl groups, -OR, -NR₂; Electron withdrawing (-I): -NO₂, -CN, -COOH, halogens",
                "Resonance: curved arrow notation; rules: only π electrons move; total number of unpaired electrons stays same",
                "Carbocation rearrangements: 1,2-hydride or 1,2-methyl shift to form more stable carbocation",
                "Nucleophilicity vs basicity: nucleophile attacks electrophile; basicity is proton affinity; in protic solvents nucleophilicity ↓ down group (I⁻ > Br⁻ > Cl⁻ > F⁻)",
                "Electrophile: electron-deficient species (H⁺, NO₂⁺, SO₃H⁺, AlCl₃); nucleophile: electron-rich species",
            ],
            "extended": [
                "**GOC** — Comprehensive Notes",
                "Advanced resonance: cross-conjugation (butadiene systems), aromaticity rules, antiaromatic (4n π electrons)",
                "Stereochemistry: R/S (Cahn-Ingold-Prelog priority); E/Z for alkenes; racemic mixtures; meso compounds",
                "Reaction intermediates: carbocations (planar sp²), carbanions (pyramidal sp³), free radicals (sp² planar), carbenes (singlet vs triplet)",
                "Reaction mechanisms: SN1 (two steps, carbocation intermediate, rate depends only on substrate), SN2 (one step, Walden inversion, rate depends on substrate + nucleophile)",
                "Elimination: E1 (unimolecular, carbocation intermediate, Saytzeff major), E2 (bimolecular, anti-periplanar geometry required, Hofmann major when bulky base)",
            ],
        },
    },

    "physical-chemistry": {},
    "inorganic-chemistry": {},
    "organic chemistry": {},
    "chemistry": {},

    # ── BIOLOGY ────────────────────────────────────────────────────────────────
    "botany": {},
    "zoology": {},
    "biology": {},

    # ── MATHEMATICS ──────────────────────────────────────────────────────────
    "mathematics": {},

    # ── UPSC GS ────────────────────────────────────────────────────────────────
    "gs1": {},
    "gs2": {},
    "gs3": {},
    "history": {},
    "geography": {},
    "polity": {},
    "economics": {},
    "environment": {},

    # ── SSC / Aptitude ───────────────────────────────────────────────────────
    "quantitative-techniques": {},
    "quant": {},
    "reasoning": {},
    "awareness": {},
    "english": {},
    "general-awareness": {},

    # ── LAW ──────────────────────────────────────────────────────────────────
    "legal-reasoning": {},
    "current-affairs": {},
}

# ─── Per-subject template overrides ─────────────────────────────────────────

SUBJECT_TEMPLATES = {
    "physics": {
        "generic_lite": [
            "**{topic}** — Key Facts",
            "Definition: {topic} is a fundamental concept in Physics",
            "Key formula/concept: Understand the core principle and its direct applications",
            "⚡ Exam tip: Questions from this topic appear regularly in NEET/JEE — focus on formulas and direct applications",
        ],
        "generic_standard": [
            "**{topic}** — Physics Study Guide",
            "Concept overview: {topic} is an important topic in the Physics syllabus",
            "Core principles: Build strong foundation of fundamentals before attempting problems",
            "Key points to understand: definitions, units, standard derivations, and typical numerical patterns",
            "Study approach: Theory first, then numerical problem-solving",
        ],
        "generic_extended": [
            "**{topic}** — Comprehensive Physics Notes",
            "Full explanation: {topic} is a core Physics concept with wide applications",
            "Detailed theory: Derivation, physical significance, and limitations of the concept",
            "Problem-solving strategies: Classify problem types, standard approach for each type",
            "Additional resources: Refer to standard Physics textbooks for deeper understanding",
            "Previous year trends: Analyse NEET/JEE question patterns for this topic",
        ],
    },
    "organic-chemistry": {
        "generic_lite": [
            "**{topic}** — Key Facts for NEET/JEE",
            "Definition and structure: Know the basic structure and functional groups involved",
            "Key reactions: Most probable reaction pathways for exam questions",
            "Nomenclature: IUPAC naming conventions for this class of compounds",
            "⚡ Exam tip: In organic chemistry, mechanism is queen — understand electron movement (curly arrows)",
        ],
        "generic_standard": [
            "**{topic}** — Chemistry Study Guide",
            "Structure and bonding: Hybridisation, shape, and bond length",
            "Preparation methods: How to synthesise this compound in lab",
            "Reactions: Addition, substitution, elimination, oxidation — which applies here?",
            "Electronic effects: Inductive and resonance effects operating in this molecule",
        ],
        "generic_extended": [
            "**{topic}** — Comprehensive Chemistry Notes",
            "Detailed mechanism: Step-by-step electron movement, intermediate stability",
            "Stereochemistry: R/S, E/Z if applicable, racemic mixtures if relevant",
            "Synthetic applications: Multi-step synthesis where this compound appears as intermediate",
            "Environmental/biological significance: Role in nature or industry",
            "Comparative study: How does this differ from similar compounds in the homologous series",
        ],
    },
}

# Default template
DEFAULT_TEMPLATE = {
    "generic_lite": [
        "**{topic}** — Quick Facts",
        "Core concept: {topic} is a key topic in this subject area",
        "High-yield points: Key definitions, formulas, and facts for last-minute revision",
        "⚡ Exam tip: Focus on understanding over memorisation — application is everything",
    ],
    "generic_standard": [
        "**{topic}** — Study Guide",
        "Overview: {topic} is part of the core syllabus",
        "Key concepts: Build a clear understanding of fundamentals",
        "Standard questions: Typical patterns seen in competitive exams",
    ],
    "generic_extended": [
        "**{topic}** — Comprehensive Notes",
        "Full coverage: {topic} with detailed explanation",
        "Extended theory: Deeper understanding for thorough preparation",
        "Practice: Solve previous year questions and standard textbook exercises",
    ],
}


def get_topic_knowledge(topic_name, subject, exam):
    """Look up topic in knowledge base by partial name match."""
    subject_lower = subject.lower().replace('-', ' ').replace('_', ' ')
    topic_lower = topic_name.lower().replace('-', ' ').replace('&', '').replace('  ', ' ')

    # Check subject first
    for subj_key, subj_topics in TOPIC_KNOWLEDGE.items():
        subj_key_clean = subj_key.lower().replace('-', ' ').replace('_', ' ')
        if subj_key_clean in subject_lower or subject_lower in subj_key_clean:
            if subj_topics:
                for tk, content in subj_topics.items():
                    tk_clean = tk.lower().replace('-', ' ').replace('&', '').replace('  ', ' ')
                    # Exact match (best)
                    if tk_clean == topic_lower:
                        return content
                    # Token overlap: require at least 2 tokens from tk to appear in topic
                    tk_words = set(w for w in tk_clean.split() if len(w) > 4)
                    overlap = tk_words.intersection(set(topic_lower.split()))
                    if len(overlap) >= 2 or tk_clean in topic_lower or topic_lower in tk_clean:
                        return content

    # Subject templates
    for subj_key, tmpl in SUBJECT_TEMPLATES.items():
        subj_key_clean = subj_key.lower().replace('-', ' ').replace('_', ' ')
        if subj_key_clean in subject_lower or subject_lower in subj_key_clean:
            return {
                "lite": [line.format(topic=topic_name) for line in tmpl["generic_lite"]],
                "standard": [line.format(topic=topic_name) for line in tmpl["generic_standard"]],
                "extended": [line.format(topic=topic_name) for line in tmpl["generic_extended"]],
            }

    # Default
    return {
        "lite": [line.format(topic=topic_name) for line in DEFAULT_TEMPLATE["generic_lite"]],
        "standard": [line.format(topic=topic_name) for line in DEFAULT_TEMPLATE["generic_standard"]],
        "extended": [line.format(topic=topic_name) for line in DEFAULT_TEMPLATE["generic_extended"]],
    }


def process_all_notes():
    """Regenerate tiered content for all 1,263 notes using actual topic names."""
    updated = 0

    for exam_dir in sorted(NOTES_DIR.iterdir()):
        if not exam_dir.is_dir():
            continue
        exam_id = exam_dir.name
        exam_name = exam_id.upper()

        for subject_dir in sorted(exam_dir.iterdir()):
            if not subject_dir.is_dir():
                continue
            subject_id = subject_dir.name
            subject_name = subject_id.replace('-', ' ').replace('_', ' ').title()

            for md_file in sorted(subject_dir.glob("*.md")):
                topic_slug = md_file.stem

                # Read existing frontmatter
                with open(md_file, 'r', encoding='utf-8') as f:
                    content = f.read()

                parts = content.split('---', 2)
                if len(parts) < 3:
                    continue
                frontmatter = parts[1]
                frontmatter_lines = {k.strip(): v.strip() for k, v in
                                     (line.split(':', 1) for line in frontmatter.split('\n') if ':' in line)}

                # Get actual topic name from frontmatter
                topic_name = frontmatter_lines.get('topicName', topic_slug.replace('-', ' ').title())

                # Get tiered content using actual topic name
                knowledge = get_topic_knowledge(topic_name, subject_name, exam_name)

                lite_content = knowledge.get("lite", DEFAULT_TEMPLATE["generic_lite"][0].format(topic=topic_name))
                std_content = knowledge.get("standard", DEFAULT_TEMPLATE["generic_standard"][0].format(topic=topic_name))
                ext_content = knowledge.get("extended", DEFAULT_TEMPLATE["generic_extended"][0].format(topic=topic_name))

                new_body = f"""### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

{chr(10).join(lite_content)}

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

{chr(10).join(std_content)}

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

{chr(10).join(ext_content)}

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
"""
                new_content = f"---\n{frontmatter}\n---\n# {topic_name}\n\n{new_body}"
                with open(md_file, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                updated += 1

    return updated


if __name__ == "__main__":
    print(f"Starting regeneration at {datetime.now()}")
    updated = process_all_notes()
    print(f"✅ Regenerated: {updated} notes with correct topic names")
