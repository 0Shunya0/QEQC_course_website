const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

const createPlaceholderResources = () => ({
  slides: { name: 'Slides', url: null },
  notes: { name: 'Notes', url: null },
  labNotebook: { name: 'Lab Notebook', url: null }
});

export const course = {
  code: 'UE23EC343AB3',
  title: 'Quantum Entanglement & Quantum Computing',
  description: 'A structured course repository covering the foundations of quantum technology, quantum states and their algebra, entanglement and quantum information, and quantum computing.',
  units: [
    {
      id: 1,
      title: 'Basics of Quantum Technology',
      hours: 14,
      topics: [
        { id: '1.1', title: 'Quantum and Classical Physics', resources: {
          slides: { name: 'QEQC_UE21EC343AB2_Unit01_Lecture01.pptx', url: withBase('resources/unit1/QEQC_UE21EC343AB2_Unit01_Lecture01.pptx') },
          notes: { name: 'Unit 1 Complete Notes', url: withBase('resources/ta-notes/unit1_complete_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '1.2', title: 'Double-Slit Experiment', resources: {
          slides: { name: 'QEQC_UE21EC343AB2_Unit01_Lecture02.pptx', url: withBase('resources/unit1/QEQC_UE21EC343AB2_Unit01_Lecture02.pptx') },
          notes: { name: 'Unit 1 Complete Notes', url: withBase('resources/ta-notes/unit1_complete_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '1.3', title: 'Double-Slit Experiment with Electrons', resources: {
          slides: { name: 'QEQC_UE21EC343AB2_Unit01_Lecture03.pptx', url: withBase('resources/unit1/QEQC_UE21EC343AB2_Unit01_Lecture03.pptx') },
          notes: { name: 'Unit 1 Complete Notes', url: withBase('resources/ta-notes/unit1_complete_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '1.4', title: 'Probability Density', resources: {
          slides: { name: 'QEQC_UE21EC343AB2_Unit01_Lecture04.pptx', url: withBase('resources/unit1/QEQC_UE21EC343AB2_Unit01_Lecture04.pptx') },
          notes: { name: 'Unit 1 Complete Notes', url: withBase('resources/ta-notes/unit1_complete_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '1.5', title: 'Dirac Notation', resources: {
          slides: { name: 'QEQC_UE21EC343AB2_Unit01_Lecture05(1).pptx', url: withBase('resources/unit1/QEQC_UE21EC343AB2_Unit01_Lecture05(1).pptx') },
          notes: { name: 'Unit 1 Complete Notes', url: withBase('resources/ta-notes/unit1_complete_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '1.6', title: 'State of a Quantum System', resources: {
          slides: { name: 'QEQC_UE21EC343AB2_Unit01_Lecture06.pptx', url: withBase('resources/unit1/QEQC_UE21EC343AB2_Unit01_Lecture06.pptx') },
          notes: { name: 'Unit 1 Complete Notes', url: withBase('resources/ta-notes/unit1_complete_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '1.7', title: 'Hilbert Space Representation', resources: {
          slides: { name: 'QEQC_UE21EC343AB2_Unit01_Lecture07.pptx', url: withBase('resources/unit1/QEQC_UE21EC343AB2_Unit01_Lecture07.pptx') },
          notes: { name: 'Unit 1 Complete Notes', url: withBase('resources/ta-notes/unit1_complete_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '1.8', title: 'Quantum Mathematics', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Quantum Math Notes', url: withBase('resources/ta-notes/unit1_quantum_math.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '1.9', title: 'Linearity of States and Operators', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 1 Complete Notes', url: withBase('resources/ta-notes/unit1_complete_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '1.10', title: 'Discrete and Continuous Basis Representations', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 1 Complete Notes', url: withBase('resources/ta-notes/unit1_complete_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '1.11', title: 'Basic Postulates of Quantum Mechanics', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 1 Complete Notes', url: withBase('resources/ta-notes/unit1_complete_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '1.12', title: 'Matrix Representation of State Vectors', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 1 Complete Notes', url: withBase('resources/ta-notes/unit1_complete_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '1.13', title: 'Geometry of Probability Distributions', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 1 Complete Notes', url: withBase('resources/ta-notes/unit1_complete_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '1.14', title: 'Bloch Sphere', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Bloch Sphere Notes', url: withBase('resources/ta-notes/unit1_bloch_sphere.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '1.15', title: 'Python Implementation of Basic Quantum Examples', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 1 Complete Notes', url: withBase('resources/ta-notes/unit1_complete_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } }
      ]
    },
    {
      id: 2,
      title: 'Quantum States Algebra',
      hours: 14,
      topics: [
        { id: '2.1', title: 'Pure and Mixed States', resources: {
          slides: { name: 'QEQC_UE21EC343AB2_Unit02_Lecture01.pptx', url: withBase('resources/unit2/QEQC_UE21EC343AB2_Unit02_Lecture01.pptx') },
          notes: { name: 'Unit 2 Complete Notes', url: withBase('resources/ta-notes/unit2_complete_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '2.2', title: 'Ensembles', resources: {
          slides: { name: 'QEQC_UE21EC343AB2_Unit02_Lecture02.pptx', url: withBase('resources/unit2/QEQC_UE21EC343AB2_Unit02_Lecture02.pptx') },
          notes: { name: 'Unit 2 Complete Notes', url: withBase('resources/ta-notes/unit2_complete_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '2.3', title: 'Density Matrix', resources: {
          slides: { name: 'QEQC_UE21EC343AB2_Unit02_Lecture03.pptx', url: withBase('resources/unit2/QEQC_UE21EC343AB2_Unit02_Lecture03.pptx') },
          notes: { name: 'Unit 2 Complete Notes', url: withBase('resources/ta-notes/unit2_complete_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '2.4', title: 'Space of Density Matrices', resources: {
          slides: { name: 'QEQC_UE21EC343AB2_Unit02_Lecture_Extra.pptx', url: withBase('resources/unit2/QEQC_UE21EC343AB2_Unit02_Lecture_Extra.pptx') },
          notes: { name: 'Unit 2 Complete Notes', url: withBase('resources/ta-notes/unit2_complete_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '2.5', title: 'Cbits and Qbits', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 2 Complete Notes', url: withBase('resources/ta-notes/unit2_complete_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '2.6', title: 'EPR Paradox', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 2 Complete Notes', url: withBase('resources/ta-notes/unit2_complete_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '2.7', title: 'Density Matrices and Entropies', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 2 Complete Notes', url: withBase('resources/ta-notes/unit2_complete_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '2.8', title: 'Superposition of States', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 2 Complete Notes', url: withBase('resources/ta-notes/unit2_complete_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '2.9', title: 'Distinguishable and Indistinguishable States', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 2 Complete Notes', url: withBase('resources/ta-notes/unit2_complete_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '2.10', title: 'Consequences of Distinguishability', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 2 Complete Notes', url: withBase('resources/ta-notes/unit2_complete_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '2.11', title: 'Quantum Logic Gates', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 2 Complete Notes', url: withBase('resources/ta-notes/unit2_complete_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '2.12', title: 'Introduction to IBM Quantum Environment', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 2 Complete Notes', url: withBase('resources/ta-notes/unit2_complete_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '2.13', title: 'Introduction to Microsoft Quantum Environment', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 2 Complete Notes', url: withBase('resources/ta-notes/unit2_complete_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '2.14', title: 'Simulation of Quantum Circuits', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 2 Complete Notes', url: withBase('resources/ta-notes/unit2_complete_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '2.15', title: 'Quantum Circuit Simulation on IBM Quantum Environment', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 2 Complete Notes', url: withBase('resources/ta-notes/unit2_complete_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } }
      ]
    },
    {
      id: 3,
      title: 'Entanglement & Quantum Information',
      hours: 14,
      topics: [
        { id: '3.1', title: 'Quantum Entanglement', resources: {
          slides: { name: 'QEQC_UE21EC343AB2_Unit03_Lecture.pptx', url: withBase('resources/unit3/QEQC_UE21EC343AB2_Unit03_Lecture.pptx') },
          notes: { name: 'Unit 3 Notes', url: withBase('resources/ta-notes/unit3_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '3.2', title: 'Examples of Quantum Entanglement', resources: {
          slides: { name: 'QEQC_UE21EC343AB2_Unit03_Lecture01.pptx', url: withBase('resources/unit3/QEQC_UE21EC343AB2_Unit03_Lecture01.pptx') },
          notes: { name: 'Unit 3 Notes', url: withBase('resources/ta-notes/unit3_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '3.3', title: 'Sources of Entangled Photons', resources: {
          slides: { name: 'QEQC_UE21EC343AB2_Unit03_Lecture02.pptx', url: withBase('resources/unit3/QEQC_UE21EC343AB2_Unit03_Lecture02.pptx') },
          notes: { name: 'Unit 3 Notes', url: withBase('resources/ta-notes/unit3_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '3.4', title: 'Time Entanglement', resources: {
          slides: { name: 'QEQC_UE21EC343AB2_Unit03_Lecture03.pptx', url: withBase('resources/unit3/QEQC_UE21EC343AB2_Unit03_Lecture03.pptx') },
          notes: { name: 'Unit 3 Notes', url: withBase('resources/ta-notes/unit3_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '3.5', title: 'Momentum Entanglement', resources: {
          slides: { name: 'QEQC_UE21EC343AB2_Unit03_Lecture04.pptx', url: withBase('resources/unit3/QEQC_UE21EC343AB2_Unit03_Lecture04.pptx') },
          notes: { name: 'Unit 3 Notes', url: withBase('resources/ta-notes/unit3_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '3.6', title: 'Polarization Entanglement', resources: {
          slides: { name: 'QEQC_UE21EC343AB2_Unit03_Lecture04_edited.pptx', url: withBase('resources/unit3/QEQC_UE21EC343AB2_Unit03_Lecture04_edited.pptx') },
          notes: { name: 'Unit 3 Notes', url: withBase('resources/ta-notes/unit3_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '3.7', title: 'Classical Information Theory', resources: {
          slides: { name: 'QEQC_UE21EC343AB2_Unit03_Lecture05.pptx', url: withBase('resources/unit3/QEQC_UE21EC343AB2_Unit03_Lecture05.pptx') },
          notes: { name: 'Unit 3 Notes', url: withBase('resources/ta-notes/unit3_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '3.8', title: 'Entropy and Information', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 3 Notes', url: withBase('resources/ta-notes/unit3_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '3.9', title: 'Consequences of Entanglement for Quantum Computation', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 3 Notes', url: withBase('resources/ta-notes/unit3_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '3.10', title: 'Consequences of Entanglement for Quantum Information', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 3 Notes', url: withBase('resources/ta-notes/unit3_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '3.11', title: 'Quantum Measurement', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 3 Notes', url: withBase('resources/ta-notes/unit3_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '3.12', title: 'Quantum Circuits', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 3 Notes', url: withBase('resources/ta-notes/unit3_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '3.13', title: 'Quantum Error Correction', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 3 Notes', url: withBase('resources/ta-notes/unit3_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '3.14', title: 'Introduction to Quantum Information', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 3 Notes', url: withBase('resources/ta-notes/unit3_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '3.15', title: 'No-Cloning Theorem', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 3 Notes', url: withBase('resources/ta-notes/unit3_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '3.16', title: 'Quantum Dense Coding / Superdense Coding', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 3 Notes', url: withBase('resources/ta-notes/unit3_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '3.17', title: 'Quantum Teleportation', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 3 Notes', url: withBase('resources/ta-notes/unit3_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '3.18', title: 'Quantum Teleportation Protocol', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 3 Notes', url: withBase('resources/ta-notes/unit3_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '3.19', title: 'Implementation of Entanglement Using Qiskit', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 3 Notes', url: withBase('resources/ta-notes/unit3_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '3.20', title: 'Quantum Circuit Examples Using Qiskit', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 3 Notes', url: withBase('resources/ta-notes/unit3_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } }
      ]
    },
    {
      id: 4,
      title: 'Quantum Computing',
      hours: 14,
      topics: [
        { id: '4.1', title: 'Classical vs Quantum Computers', resources: {
          slides: { name: 'QEQC_UE21EC343AB2_Unit04_Lecture.pptx', url: withBase('resources/unit4/QEQC_UE21EC343AB2_Unit04_Lecture.pptx') },
          notes: { name: 'Unit 4 Notes', url: withBase('resources/ta-notes/unit4_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '4.2', title: 'P, NP and BQP', resources: {
          slides: { name: 'QEQC_UE21EC343AB2_Unit04_Lecture01.pptx', url: withBase('resources/unit4/QEQC_UE21EC343AB2_Unit04_Lecture01.pptx') },
          notes: { name: 'Unit 4 Notes', url: withBase('resources/ta-notes/unit4_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '4.3', title: 'Quantum Algorithms', resources: {
          slides: { name: 'QEQC_UE21EC343AB2_Unit04_Lecture02.pptx', url: withBase('resources/unit4/QEQC_UE21EC343AB2_Unit04_Lecture02.pptx') },
          notes: { name: 'Unit 4 Notes', url: withBase('resources/ta-notes/unit4_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '4.4', title: 'Deutsch-Jozsa Algorithm', resources: {
          slides: { name: 'QEQC_UE21EC343AB2_Unit04_Lecture03.pptx', url: withBase('resources/unit4/QEQC_UE21EC343AB2_Unit04_Lecture03.pptx') },
          notes: { name: 'Unit 4 Notes', url: withBase('resources/ta-notes/unit4_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '4.5', title: 'Bernstein-Vazirani Algorithm', resources: {
          slides: { name: 'QEQC_UE21EC343AB2_Unit04_Lecture04.pptx', url: withBase('resources/unit4/QEQC_UE21EC343AB2_Unit04_Lecture04.pptx') },
          notes: { name: 'Unit 4 Notes', url: withBase('resources/ta-notes/unit4_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '4.6', title: 'Simon\'s Algorithm', resources: {
          slides: { name: 'QEQC_UE21EC343AB2_Unit04_Lecture_Saturday.pptx', url: withBase('resources/unit4/QEQC_UE21EC343AB2_Unit04_Lecture_Saturday.pptx') },
          notes: { name: 'Unit 4 Notes', url: withBase('resources/ta-notes/unit4_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '4.7', title: 'Quantum Phase Estimation', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 4 Notes', url: withBase('resources/ta-notes/unit4_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '4.8', title: 'Shor\'s Algorithm', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 4 Notes', url: withBase('resources/ta-notes/unit4_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '4.9', title: 'Grover\'s Algorithm', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 4 Notes', url: withBase('resources/ta-notes/unit4_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '4.10', title: 'Grover-Radhakrishnan Algorithm', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 4 Notes', url: withBase('resources/ta-notes/unit4_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '4.11', title: 'Quantum Fourier Transform', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'QFT Notes', url: withBase('resources/ta-notes/unit4_qft_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '4.12', title: 'Implementation of Quantum Algorithms Using Qiskit', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 4 Notes', url: withBase('resources/ta-notes/unit4_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '4.13', title: 'Entanglement on FPGA', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 4 Notes', url: withBase('resources/ta-notes/unit4_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '4.14', title: 'Quantum Fourier Transform on FPGA', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'QFT Notes', url: withBase('resources/ta-notes/unit4_qft_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } },
        { id: '4.15', title: 'Photonics and Quantum Technology Laboratory', resources: {
          slides: { name: 'Slides', url: null },
          notes: { name: 'Unit 4 Notes', url: withBase('resources/ta-notes/unit4_notes.pdf') },
          labNotebook: { name: 'Lab Notebook', url: null }
        } }
      ]
    }
  ],
  questionBank: {
    title: 'Question Bank',
    description: 'Combined-unit collections for practice and assessment.',
    documents: [
      {
        title: 'Units 1 & 2',
        description: 'Core conceptual and analytical questions for the first half of the course.',
        url: withBase('resources/question-bank/question_bank_units12.pdf')
      },
      {
        title: 'Units 3 & 4',
        description: 'Advanced entanglement and quantum computing review set.',
        url: withBase('resources/question-bank/question_bank_units34.pdf')
      },
      {
        title: 'Full Course',
        description: 'Comprehensive revision and final preparation material.',
        url: null
      }
    ]
  },
  taNotes: [
    {
      title: 'Unit 1 — Complete Notes',
      description: 'Comprehensive notes covering all Unit 1 topics: quantum vs classical physics, double-slit experiments, probability density, Dirac notation, Hilbert space, and more.',
      url: withBase('resources/ta-notes/unit1_complete_notes.pdf')
    },
    {
      title: 'Unit 1 — Class Notes',
      description: 'Classroom handout notes for Unit 1 fundamentals.',
      url: withBase('resources/ta-notes/unit1_class_notes.pdf')
    },
    {
      title: 'Unit 1 — Quantum Mathematics',
      description: 'Vector spaces, basis transformations, inner products and key algebraic tools for quantum mechanics.',
      url: withBase('resources/ta-notes/unit1_quantum_math.pdf')
    },
    {
      title: 'Unit 1 — Bloch Sphere',
      description: 'Geometry of single-qubit states, Bloch sphere representation and visualisation.',
      url: withBase('resources/ta-notes/unit1_bloch_sphere.pdf')
    },
    {
      title: 'Unit 1 — Lecture Notes',
      description: 'Supplementary lecture notes for QEQC Unit 1 sessions.',
      url: withBase('resources/ta-notes/unit1_lecture_notes.pdf')
    },
    {
      title: 'Unit 2 — Complete Notes',
      description: 'Comprehensive notes covering all Unit 2 topics: pure/mixed states, ensembles, density matrices, quantum logic gates, and more.',
      url: withBase('resources/ta-notes/unit2_complete_notes.pdf')
    },
    {
      title: 'Unit 2 — Final Notes',
      description: 'Consolidated revision notes for Unit 2 quantum states algebra.',
      url: withBase('resources/ta-notes/unit2_final_notes.pdf')
    },
    {
      title: 'Unit 2 — Lecture Notes',
      description: 'Supplementary lecture notes for QEQC Unit 2 sessions.',
      url: withBase('resources/ta-notes/unit2_lecture_notes.pdf')
    },
    {
      title: 'Unit 2 — QEQC Notes',
      description: 'Detailed QEQC course notes for Unit 2 topics.',
      url: withBase('resources/ta-notes/unit2_qeqc_notes.pdf')
    },
    {
      title: 'Unit 2 — QEQC Notes (v2)',
      description: 'Updated version of QEQC course notes for Unit 2.',
      url: withBase('resources/ta-notes/unit2_qeqc_notes_v2.pdf')
    },
    {
      title: 'Units 1 & 2 — Miscellaneous Notes',
      description: 'Additional supplementary notes covering Units 1 and 2 material.',
      url: withBase('resources/ta-notes/unit12_misc_notes.pdf')
    },
    {
      title: 'Unit 3 — Notes',
      description: 'Notes on quantum entanglement, Bell states, EPR paradox, and information-theoretic consequences.',
      url: withBase('resources/ta-notes/unit3_notes.pdf')
    },
    {
      title: 'Unit 3 — Notes (v2)',
      description: 'Extended notes for Unit 3 covering entanglement and quantum information.',
      url: withBase('resources/ta-notes/unit3_notes_v2.pdf')
    },
    {
      title: 'Unit 3 — Extra Notes',
      description: 'Additional supplementary notes for Unit 3 topics.',
      url: withBase('resources/ta-notes/unit3_extra_notes.pdf')
    },
    {
      title: 'Unit 4 — Notes',
      description: 'Notes on quantum computing: algorithms, complexity classes, Deutsch-Jozsa, Shor\'s and Grover\'s algorithms.',
      url: withBase('resources/ta-notes/unit4_notes.pdf')
    },
    {
      title: 'Unit 4 — Notes (v2)',
      description: 'Updated version of Unit 4 quantum computing notes.',
      url: withBase('resources/ta-notes/unit4_notes_v2.pdf')
    },
    {
      title: 'Unit 4 — Quantum Fourier Transform',
      description: 'Fourier transform methods and applications in quantum computation.',
      url: withBase('resources/ta-notes/unit4_qft_notes.pdf')
    }
  ]
};

export function getTopicById(topicId) {
  const normalizedTopicId = String(topicId);

  for (const unit of course.units) {
    const topic = unit.topics.find(t => String(t.id) === normalizedTopicId);
    if (topic) return topic;
  }

  return null;
}

export function getUnitById(unitId) {
  const normalizedUnitId = Number(unitId);
  return course.units.find(u => Number(u.id) === normalizedUnitId) || null;
}

export function getAdjacentTopics(topicId) {
  const normalizedTopicId = String(topicId);
  const allTopics = [];
  const topicUnitMap = {};

  course.units.forEach(unit => {
    unit.topics.forEach(topic => {
      allTopics.push(topic);
      topicUnitMap[String(topic.id)] = unit;
    });
  });

  const index = allTopics.findIndex(t => String(t.id) === normalizedTopicId);
  if (index === -1) return { prev: null, next: null, unit: null };

  const topic = allTopics[index];
  return {
    prev: index > 0 ? allTopics[index - 1] : null,
    next: index < allTopics.length - 1 ? allTopics[index + 1] : null,
    unit: topicUnitMap[String(topic.id)] || null
  };
}
