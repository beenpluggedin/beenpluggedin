# beenpluggedin — Minimalist D2C Audio Brand & Platform Specification
**Project:** Brand-New Standalone Hardware & Utility Website
**Design System:** Swiss Minimalist / Tech-Industrial (Anti-AI-Slop, High-End Minimalist)

---

## 1. Brand Philosophy & Design Directive

### The Anti-AI-Slop Manifesto
Standard AI-generated websites rely on generic purple-blue gradients, floating glass cards, meaningless glowing spheres, low-contrast text, and vague marketing buzzwords. **beenpluggedin** rejects this completely.

Our new visual language takes inspiration from iconic industrial design houses—**Teenage Engineering, Braun (Dieter Rams), Nothing Tech, Frame.io, and Leica**:
* **Stark Typographic Hierarchy:** Heavy use of monospaced numbers and precise geometric sans-serif fonts (Inter + JetBrains Mono).
* **High Contrast, Strict Color Palette:** 
  * Background: Matte Obsidian Charcoal (`#08080a`) and Technical Off-Black (`#0e0f12`)
  * Text: High-contrast Stark White (`#f4f4f6`) and Muted Technical Gray (`#8e8e96`)
  * Accents: Single-purpose Industrial Safety Orange (`#ff4500`) or Electric Lime (`#ccff00`)
* **Grid Rigor:** Visible 1px hairline borders (`rgba(255, 255, 255, 0.08)`), strict 8px spacing, raw technical layout dividers, and clean metadata tags (`[ SPEC_01 ]`, `[ STATUS: READY ]`).
* **Tactile Interactions:** Hardware-inspired physical toggles, segment displays, crisp border transitions (100ms ease), and raw canvas waveform visuals.

---

## 2. D2C Hardware Catalog (The Prototype Products)

### 01. PLUG-01 Wireless Headphones
* **Category:** Over-Ear Active Noise Cancelling Headphones
* **Price:** ₹4,490 ($55 USD)
* **Key Specs:**
  * Driver: 40mm Custom Titanium Composite Diaphragm
  * Frequency Response: 15Hz – 24,000Hz (Ultra-wide audio fidelity)
  * Battery Life: 60 Hours playback / 3-minute USB-C charge gives 90 mins
  * Connectivity: Bluetooth 5.3 + 3.5mm Analog Audio Bypass
  * Chassis: Lightweight Matte-Black Polycarbonate with Anodized Aluminum Hinge

### 02. VOICE-01 Studio Microphone
* **Category:** Broadcast Hybrid USB-C & XLR Condenser Microphone
* **Price:** ₹3,990 ($49 USD)
* **Key Specs:**
  * Capsule: 25mm Custom Electret Condenser
  * DSP Processing: Hardware-level Real-time Noise Suppressor (Fan & Room Echo rejection)
  * Connections: Dual USB-C Digital (24-bit/96kHz) + 3-Pin XLR Balanced Output
  * Physical Controls: Capacitive Touch Instant Mute + Gain Knob with LED Metering

### 03. ECHO-01 Magnetic Acoustic Panels
* **Category:** Modular Eco-Felt Acoustic Absorption Tiles
* **Price:** ₹1,990 (Set of 6 Panels)
* **Key Specs:**
  * Material: High-density recycled PET Felt (NRC 0.85 Absorption Rating)
  * Target Frequencies: 250Hz – 4,000Hz (Primary speech & flutter echo band)
  * Installation: Tool-free Magnetic Backplate Grid system

### 04. CADENCE-01 Hi-Res DAC
* **Category:** Portable USB-C Balanced Audio Converter
* **Price:** ₹2,490 ($30 USD)
* **Key Specs:**
  * DAC Chipset: Dual ESS Sabre ES9038Q2M
  * Decoding: 32-bit / 384kHz PCM + DSD256 Native
  * Output: Dual 3.5mm Single-Ended + 4.4mm Pentaconn Balanced

---

## 3. Embedded Software Utilities Architecture

Rather than redirecting users to separate bloated pages, all interactive tools are embedded directly as clean, stark UI modules:

1. **Audio Doctor Terminal (`#audio-doctor`):**
   * A diagnostic wizard for mic static, gain staging, latency, and background noise.
   * Outputs immediate actionable fixes (e.g., "Decrease Windows Mic Boost to +0dB", "Enable OBS Noise Gate at -32dB").

2. **Acoustics Lab (`#acoustics-lab`):**
   * Real-time Sabine RT60 Reverberation Decay Calculator ($\text{RT}_{60} = 0.161 \times V / A$).
   * Inputs: Room Dimensions ($L \times W \times H$) & Surface Types.
   * Output: Exact calculation of RT60 time (in seconds) + precise recommended count of `ECHO-01` panels.

3. **Focus Audio Synthesizer (`#productivity-lounge`):**
   * In-browser Web Audio API noise generator (Brown, Pink, White Noise) with dynamic cutoff frequency filters and ambient volume mixer.

---

## 4. Single-File Code Architecture Strategy (`index.html`)

The entire site is engineered into a standalone, production-ready `index.html` file using inline clean CSS and modular ES6 JavaScript:
* **Zero Heavy Frameworks:** Pure HTML5, CSS custom variables, vanilla JavaScript.
* **Responsive Layout:** CSS Grid & Flexbox optimized for desktop 4K, laptop, and mobile devices.
* **SEO Metadata:** Pre-configured with OpenGraph, Schema.org product data, and long-tail target keywords.
