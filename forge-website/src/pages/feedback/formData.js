import React from "react";

const data = {
  MAP_Profiling_features: {
    "Basic C/C++/Fortran Profiling": false,
    "GPU Profiling": false,
    "Python Profiling": false,
    "Perf metrics": false,
    "OpenMP threads": false,
    "non-OpenMP threads (pthreads)": false,
    "Arm Statistical Profiling Extension (SPE)": false,
    "Human readable Performance Reports (html, txt)": false,
    "Machine parsable Performance Reports (csv)": false,
    Other: "",
  },
  DDT_Debugging_features: {
    "Basic C/C++/Fortran Debugging": false,
    "GPU Debugging": false,
    "Python Debugging": false,
    "Offline Debugging": false,
    "Memory Debugging": false,
    "Multi-Dimensional Array (MDA) Viewer": false,
    Tracepoints: false,
    Logbook: false,
    "Cross Process/Thread Comparison": false,
    Other: "",
  },
  Main_use_cases: "",
  Further_feedback: "",
};

const MAPProfiling = [
  "Basic C/C++/Fortran Profiling",
  "GPU Profiling",
  "Python Profiling",
  "Perf metrics",
  "OpenMP threads",
  "non-OpenMP threads (pthreads)",
  "Arm Statistical Profiling Extension (SPE)",
  "Human readable Performance Reports (html, txt)",
  "Machine parsable Performance Reports (csv)",
];

const DDTDebugging = [
  "Basic C/C++/Fortran Debugging",
  "GPU Debugging",
  "Python Debugging",
  "Offline Debugging",
  "Memory Debugging",
  "Multi-Dimensional Array (MDA) Viewer",
  "Tracepoints",
  "Logbook",
  "Cross Process/Thread Comparison",
];

const FormData = () => {
  return <div></div>;
};
export { data, MAPProfiling, DDTDebugging };
export default FormData;
