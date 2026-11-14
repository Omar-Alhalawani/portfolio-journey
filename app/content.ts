// Omar Alhalawani's portfolio content. Presentation is adapted from Omar Ibrahim's Dreamscape portfolio.

export const email = 'omar.alhalawani2006@gmail.com'

export const links = {
  github: 'https://github.com/Omar-Alhalawani',
  linkedin: 'https://www.linkedin.com/in/omar-alhalawani',
  resume: '/resume/Omar_Alhalawani_ASIC_Resume.pdf',
  email: `mailto:${email}`,
}

export const chapters = [
  { id: 'home', numeral: 'I', place: 'the ridge', label: 'Hello' },
  { id: 'about', numeral: 'II', place: 'the dunes', label: 'The story' },
  { id: 'projects', numeral: 'III', place: 'the arch', label: 'Selected work' },
  { id: 'awards', numeral: 'IV', place: 'the hill', label: 'Milestones' },
  { id: 'skills', numeral: 'V', place: 'the field', label: 'The toolkit' },
  { id: 'interests', numeral: 'VI', place: 'the islands', label: 'Beyond class' },
  { id: 'contact', numeral: 'VII', place: 'the shore', label: 'Say hello' },
] as const

export type Category = 'experience' | 'volunteer' | 'education'
export type Detail = string | { prefix?: string; linkText: string; href: string; suffix?: string }
export type Role = { id: string; category: Category; title: string; organization: string; label: string; period?: string; start?: string; end?: string; details: Detail[] }

export const roles: Role[] = [
  {
    id: 'carleton', category: 'education', title: 'B.Eng. in Computer Systems Engineering', organization: 'Carleton University', label: 'Carleton',
    period: 'Sep 2024 — Apr 2029 (expected)', start: '2024-09', end: '2029-04',
    details: ['Honours Co-op · 10.80 / 12.00 CGPA', 'Dean’s Honour List and Ontario Professional Engineers Scholarship'],
  },
  {
    id: 'tech-solutions', category: 'experience', title: 'Founder & Repair Technician', organization: 'Alhalawani Tech Solutions', label: 'Repair studio',
    period: 'Aug 2022 — Present', start: '2022-08', end: 'present',
    details: ['Diagnose, repair, and restore consumer electronics', 'Own customer communication, sourcing, documentation, and quality checks from intake to handoff'],
  },
  {
    id: 'ciena', category: 'experience', title: 'ASIC Engineer I Co-op — Digital Verification Methodology', organization: 'Ciena', label: 'Ciena',
    period: 'May 2026 — Aug 2026', start: '2026-05', end: '2026-08',
    details: ['Built self-checking verification environments with pyuvm and cocotb', 'Ran fault-injection and performance experiments across digital verification flows', 'Analyzed Makefile dependencies and presented practical methodology recommendations'],
  },
  {
    id: 'labs', category: 'experience', title: 'Embedded Hardware & Research Instrumentation Assistant', organization: 'Carleton Engineering Laboratories', label: 'Engineering labs',
    period: 'Sep 2025 — Apr 2026', start: '2025-09', end: '2026-04',
    details: ['Developed firmware and Python tools for microcontrollers, sensors, ADCs, and research instrumentation', 'Diagnosed lab hardware and supported equipment inventory and documentation'],
  },
  {
    id: 'ta', category: 'experience', title: 'Teaching Assistant', organization: 'Carleton University', label: 'Teaching',
    period: 'Sep 2025 — May 2026', start: '2025-09', end: '2026-05',
    details: ['Supported more than 150 students in Python and digital systems', 'Explained combinational and sequential logic, finite-state machines, RTL, and waveform-based debugging'],
  },
  {
    id: 'msa', category: 'volunteer', title: 'Vice President Internal', organization: 'Carleton University Muslim Students Association', label: 'CU MSA',
    period: '2026 — 2027', start: '2026-05', end: 'present',
    details: ['Lead internal recruitment, onboarding, role assignment, and council communications', 'Previously served as Vice President Administration and Internal Development Coordinator'],
  },
  {
    id: 'biocare', category: 'volunteer', title: 'Engineering Team Member', organization: 'BioCARE', label: 'BioCARE',
    period: 'Sep 2025 — Present', start: '2025-09', end: 'present',
    details: ['Developing EMG acquisition and Python/Linux processing tools for early prosthetic-control research'],
  },
]

export const roleFilters: [Category | 'all', string][] = [['all', 'everything'], ['experience', 'experience'], ['volunteer', 'leadership'], ['education', 'education']]

export type Project = {
  number: string; title: string; award: string; description: string; tags: string[]; github?: string; demo?: string; demoLabel?: string; devpost?: string
  window: { scene: 'signal' | 'cascade' | 'trail' | 'reflection'; caption: string; action: [string, string] }
}

export const projects: Project[] = [
  {
    number: '00', title: 'Synchronous FIFO', award: 'RTL design + verification',
    description: 'A parameterized synchronous FIFO designed in SystemVerilog and verified with a self-checking testbench. The project focuses on pointer behavior, full and empty boundaries, ordering guarantees, and readable waveforms.',
    tags: ['SystemVerilog', 'RTL', 'Verification', 'Icarus Verilog', 'GTKWave'], github: 'https://github.com/Omar-Alhalawani/sync-fifo-rtl-verification',
    window: { scene: 'signal', caption: 'write, queue, read', action: ['Clock the FIFO', 'Clear the queue'] },
  },
  {
    number: '01', title: 'FPGA Arithmetic System', award: 'DE10-Lite hardware build',
    description: 'A hardware arithmetic and display system built for an FPGA board. Switch inputs move through combinational logic, register stages, and seven-segment decoding so every result is visible on real hardware.',
    tags: ['Verilog', 'FPGA', 'Quartus', 'DE10-Lite', 'Seven-segment display'], github: 'https://github.com/Omar-Alhalawani/FPGA-Based-Arithmetic-Display-System',
    window: { scene: 'cascade', caption: 'switches become a result', action: ['Run the datapath', 'Reset the board'] },
  },
  {
    number: '02', title: 'BioCARE EMG', award: 'Research engineering',
    description: 'An EMG acquisition and processing workflow for early prosthetic-control research. The system connects signal capture, filtering, a Python/Linux interface, and repeatable data handling for the engineering team.',
    tags: ['Python', 'Linux', 'Signal processing', 'EMG', 'Data acquisition'], github: 'https://github.com/Omar-Alhalawani/EMG-Signal-Acquisition-and-Processing',
    window: { scene: 'trail', caption: 'a signal becomes evidence', action: ['Trace the signal', 'Reset the capture'] },
  },
  {
    number: '03', title: 'LumaLink', award: 'QNX + embedded systems',
    description: 'A real-time embedded system that coordinates hardware and software through clear interfaces. It combines QNX, C, serial communication, and practical system integration with an emphasis on predictable behavior.',
    tags: ['C', 'QNX', 'Embedded systems', 'Serial communication', 'Linux'], github: 'https://github.com/Omar-Alhalawani/lumalink',
    window: { scene: 'reflection', caption: 'an input becomes an action', action: ['Send the command', 'Return to idle'] },
  },
]

export type Mode = 'built' | 'broke' | 'named'
export type Award = { result: string; event: string; detail: string; date: string; mode: Mode; project?: { label: string; href: string } }
export const modes: Record<Mode, string> = { built: 'built it', broke: 'led it', named: 'recognized' }
export const awards: Award[] = [
  { result: 'ASIC Verification Co-op', event: 'Ciena', date: '2026', mode: 'built', detail: 'Worked on digital verification methodology with pyuvm, cocotb, fault injection, performance experiments, and build-flow analysis.' },
  { result: 'Ontario Professional Engineers Scholarship', event: 'Carleton University', date: '2025', mode: 'named', detail: 'Recognized for academic performance and engineering potential.' },
  { result: 'Dean’s Honour List', event: 'Carleton University', date: '2025', mode: 'named', detail: 'Earned with a 10.80 / 12.00 CGPA in Computer Systems Engineering.' },
  { result: 'Vice President Internal', event: 'Carleton University MSA', date: '2026', mode: 'broke', detail: 'Selected to lead recruitment, onboarding, role assignments, and internal council coordination.' },
  { result: 'Founder', event: 'Alhalawani Tech Solutions', date: '2022 — now', mode: 'built', detail: 'Built an independent electronics repair practice around careful diagnosis, clear communication, and dependable handoff.' },
]
export const awardFilters: [Mode | 'all', string][] = [['all', 'everything'], ['built', 'built'], ['broke', 'led'], ['named', 'recognized']]

export type Interest = { id: string; title: string; kicker: string; figure?: string; body: string; links?: { label: string; href: string }[] }
export const interests: Interest[] = [
  { id: 'repair', title: 'Repairing hardware', kicker: 'diagnose before replacing', body: 'I have repaired electronics since high school. I enjoy working from symptoms to measurements to a fix, then returning a device that someone can rely on again.' },
  { id: 'research', title: 'Research instrumentation', kicker: 'signals in the real world', body: 'Sensors, ADCs, EMG, lab equipment, and data-acquisition software keep engineering grounded in physical evidence.', links: [{ label: 'See BioCARE EMG', href: '#project-2' }] },
  { id: 'teaching', title: 'Teaching', kicker: 'make the model click', figure: '150+', body: 'Helping students debug Python, logic circuits, state machines, and waveforms has made me a clearer engineer and communicator.' },
  { id: 'community', title: 'Community work', kicker: 'systems for people', body: 'At the Carleton MSA, I work on the internal systems that help volunteers join, communicate, and follow through.' },
  { id: 'building', title: 'Building in public', kicker: 'document the process', body: 'I publish projects with schematics, code, waveforms, and decisions so another engineer can understand the system, reproduce it, and improve it.', links: [{ label: 'Browse my GitHub', href: links.github }] },
]

export type Receipt = { label: string; note: string; href: string }
export type Skill = { name: string; receipts?: Receipt[] }
export type SkillGroup = { title: string; skills: Skill[] }
const r = {
  fifo: { label: 'Synchronous FIFO', note: 'RTL + verification', href: '#project-0' }, fpga: { label: 'FPGA Arithmetic System', note: 'DE10-Lite build', href: '#project-1' },
  emg: { label: 'BioCARE EMG', note: 'research instrumentation', href: '#project-2' }, lumalink: { label: 'LumaLink', note: 'QNX embedded system', href: '#project-3' },
  ciena: { label: 'Ciena', note: 'ASIC verification methodology', href: '#story-ciena' }, labs: { label: 'Engineering labs', note: 'embedded hardware + instrumentation', href: '#story-labs' },
  ta: { label: 'Teaching', note: 'Python + digital systems', href: '#story-ta' },
}
export const skillGroups: SkillGroup[] = [
  { title: 'RTL & digital design', skills: [
    { name: 'SystemVerilog', receipts: [r.fifo, r.ciena] }, { name: 'Verilog', receipts: [r.fpga] }, { name: 'RTL design', receipts: [r.fifo, r.fpga] }, { name: 'Finite-state machines', receipts: [r.ta] }, { name: 'FPGA', receipts: [r.fpga] },
  ] },
  { title: 'Verification', skills: [
    { name: 'pyuvm', receipts: [r.ciena] }, { name: 'cocotb', receipts: [r.ciena] }, { name: 'Self-checking testbenches', receipts: [r.fifo, r.ciena] }, { name: 'Waveform debugging', receipts: [r.fifo, r.ta] }, { name: 'Fault injection', receipts: [r.ciena] },
  ] },
  { title: 'Software', skills: [
    { name: 'Python', receipts: [r.emg, r.labs, r.ta] }, { name: 'C', receipts: [r.lumalink] }, { name: 'C++' }, { name: 'Java' }, { name: 'Bash', receipts: [r.ciena] },
  ] },
  { title: 'Hardware & systems', skills: [
    { name: 'QNX', receipts: [r.lumalink] }, { name: 'Linux', receipts: [r.emg, r.lumalink] }, { name: 'Microcontrollers', receipts: [r.labs] }, { name: 'Sensors & ADCs', receipts: [r.emg, r.labs] }, { name: 'Soldering', receipts: [r.labs] },
  ] },
  { title: 'Tools', skills: [
    { name: 'Git', receipts: [r.fifo, r.fpga, r.emg, r.lumalink] }, { name: 'Vivado' }, { name: 'Quartus', receipts: [r.fpga] }, { name: 'Icarus Verilog', receipts: [r.fifo] }, { name: 'GTKWave', receipts: [r.fifo] },
  ] },
]
