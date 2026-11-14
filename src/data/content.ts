export const profile = {
  name: 'Omar Alhalawani',
  role: 'Computer Systems Engineer',
  intro: 'I build and verify digital systems across RTL, FPGA, embedded hardware, and research instrumentation.',
  location: 'Ottawa, Canada',
  email: 'omar.alhalawani2006@gmail.com',
  github: 'https://github.com/Omar-Alhalawani',
  linkedin: 'https://www.linkedin.com/in/omar-alhalawani',
};

export const experiences = [
  {
    company: 'Ciena',
    role: 'ASIC Engineer I Co-op',
    period: 'May — August 2026',
    team: 'Digital Verification Methodology',
    summary: 'Evaluated Python-based verification approaches and AI-assisted testbench generation for ASIC verification.',
    points: [
      'Generated and validated self-checking pyuvm and cocotb testbenches from RTL specifications and verification plans.',
      'Designed fault-injection and performance experiments, then analyzed regressions and waveforms.',
      'Built Python tooling for compile-dependency analysis and presented methodology recommendations.',
    ],
    tools: ['pyuvm', 'cocotb', 'SystemVerilog / UVM', 'Python', 'Linux / Git'],
  },
  {
    company: 'Carleton University',
    role: 'Embedded Hardware & Research Instrumentation Assistant',
    period: 'September 2025 — April 2026',
    team: 'Engineering Laboratories',
    summary: 'Developed firmware and Python automation for experimental acquisition and researcher-facing workflows.',
    points: [
      'Integrated microcontrollers, sensors, ADCs, and measurement software.',
      'Diagnosed timing, signal-integrity, power, sensor, and interface faults with lab instruments.',
    ],
    tools: ['Firmware', 'Python', 'Sensors / ADCs', 'Instrumentation', 'NI-DAQmx'],
  },
  {
    company: 'Carleton University',
    role: 'Teaching Assistant',
    period: 'September 2025 — May 2026',
    team: 'Programming and Digital Systems',
    summary: 'Supported programming and digital-systems instruction, from Python fundamentals to synchronous RTL.',
    points: [
      'Helped 150+ students debug Python and develop sound programming habits.',
      'Coached students through logic, FSMs, RTL, simulation, and waveform-based debugging.',
    ],
    tools: ['Python', 'RTL', 'Simulation', 'Waveforms', 'Teaching'],
  },
];

export const projects = [
  {
    index: '01',
    title: 'Synchronous FIFO',
    category: 'RTL / Verification',
    description: 'A parameterized SystemVerilog FIFO with explicit flow control and a queue-based self-checking testbench.',
    proof: 'Public RTL + testbench',
    tools: ['SystemVerilog', 'Scoreboard', 'Icarus Verilog'],
    href: 'https://github.com/Omar-Alhalawani/sync-fifo-rtl-verification',
    signal: 'fifo',
  },
  {
    index: '02',
    title: 'FPGA Arithmetic System',
    category: 'Digital Design / FPGA',
    description: 'Synchronized controls, operand registers, and an add/subtract datapath implemented on a ZedBoard.',
    proof: 'Public RTL + constraints',
    tools: ['Verilog', 'Vivado', 'ZedBoard'],
    href: 'https://github.com/Omar-Alhalawani/FPGA-Based-Arithmetic-Display-System',
    signal: 'fpga',
  },
  {
    index: '03',
    title: 'LumaLink',
    category: 'Real-time / Optical',
    description: 'A QNX camera receiver decodes screen-flashed Morse and turns the message into a local emergency summary.',
    proof: 'Public transmitter + receiver',
    tools: ['QNX', 'Raspberry Pi 5', 'C', 'Python'],
    href: 'https://github.com/Omar-Alhalawani/lumalink',
    signal: 'optical',
  },
  {
    index: '04',
    title: 'Mini-Lysimeter DAQ',
    category: 'Research / Instrumentation',
    description: 'A multithreaded Python interface connecting NI-DAQ and Arduino hardware to a repeatable capture workflow.',
    proof: 'Research instrumentation',
    tools: ['Python', 'NI-DAQmx', 'Arduino', 'Tkinter'],
    signal: 'daq',
  },
  {
    index: '05',
    title: 'EMG Signal Pipeline',
    category: 'Instrumentation / Signals',
    description: 'MyoWare acquisition through a microcontroller and serial link, with processing and inspection in Python.',
    proof: 'Portfolio case study',
    tools: ['Arduino', 'Serial', 'Python', 'Signal processing'],
    href: 'https://github.com/Omar-Alhalawani/EMG-Signal-Acquisition-and-Processing',
    signal: 'emg',
  },
  {
    index: '06',
    title: 'CubeX Trio Rebuild',
    category: 'Hardware / Motion Control',
    description: 'An in-progress conversion of a discontinued printer into a repairable Marlin-based platform.',
    proof: 'Public restoration log',
    tools: ['Marlin', 'TMC2209', 'Motion control'],
    href: 'https://github.com/Omar-Alhalawani/CubeX-Trio-Revival',
    signal: 'motion',
  },
];

export const skills = [
  { title: 'RTL & Digital Design', detail: 'Synchronous RTL, FSMs, datapaths, FIFOs, and valid/ready interfaces.', tools: 'SystemVerilog · Verilog · FPGA' },
  { title: 'Verification', detail: 'Self-checking testbenches, scoreboards, regressions, fault injection, and waveform debugging.', tools: 'UVM · pyuvm · cocotb' },
  { title: 'Embedded Systems', detail: 'Firmware, real-time capture, sensors, ADCs, serial interfaces, and board-level diagnosis.', tools: 'C / C++ · QNX · Arduino · Raspberry Pi' },
  { title: 'Programming & Automation', detail: 'Engineering scripts, acquisition interfaces, dependency analysis, and workflow tooling.', tools: 'Python · Java · Bash · Makefiles' },
];
