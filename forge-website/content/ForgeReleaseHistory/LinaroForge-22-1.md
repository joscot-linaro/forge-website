---
layout: post
id: '22.1.3'
title: "Linaro Forge:22.1 - Latest release 22.1.3"
date: "2023-01-27"
---
<style>
.release-container{
    font-family:"Lato";
    color:#333E48;
    font-size:14px;
    padding:4px;
}
h1{
    font-size:1.5rem;
}
h6{
    font-weight:500;
    margin:10px;
    font-size:14px;
}
ul li{
list-style-type: circle;
margin-left:4%
}

</style>
<div class='release-container'>
<h1>What's new in 22.1 - Latest release 22.1.3</h1> 
<h6>Linaro Forge 22.1 covers the following releases: 
<ul>
<li>Linaro Forge 22.1 - Release 30th September, 2022</li>
<li>Linaro Forge 22.1.1 - Release 28th October, 2022</li>
<li>Linaro Forge 22.1.2 - Release 16th December, 2022</li>
<li>Linaro Forge 22.1.3 - Release 27th January, 2023</li>
</ul>
</h6>
<h1>22.1.3</h1>
<h1>Additions and changes</h1>
<ul>
<h6>Linaro Forge:</h6>
<li>None in this release.</li>
<h6>Linaro DDT:</h6>
<ul>
<li>None in this release.</li>
</ul>
<h6>Linaro MAP and Performance Reports:</h6>
<ul>
<li>None in this release.</li>
</ul>
<h1>Resolved issues<h1>

<h6>Linaro Forge:</h6>
<ul>
<li>[FOR-17351] Added support for Open MPI's --mca mca_base_env_list flag.</li>
<li>[FOR-17562] Fixed Cray PALS autodetection when aprun launcher is specified.</li>
<li>[FOR-17576] Fixed setting breakpoints on CUDA 11.4+ compiled code.</li>
</ul>
<h6>Linaro DDT:</h6>
<ul>
<li>[FOR-17087] Fixed MDA visualizer missing menu items on MacOS.</li>
<li>[FOR-17244] Fixed variable view resizing depending on variable type.</li>
</ul>
<h6>Linaro MAP and Performance Reports:</h6>
<ul>
<li>None in this release.</li>
</ul>
<h1>22.1.2</h1>
<h1>Additions and changes</h1>
<h6>Linaro Forge:</h6>
<ul>
<li>None in this release.</li>
</ul>
<h6>Linaro DDT:</h6>
<ul>
<li>
None in this release.
</li>
</ul>
<h6>Linaro MAP and Performance Reports:</h6>
<ul>
<li>None in this release.</li>
</ul>
<h1>Resolved issues</h1>
<h6>Linaro Forge:</h6>
<ul>
<li>None in this release.</li>
</ul>
<h6>Linaro DDT:</h6>
<ul>
<li>[FOR-17087] Fixed MDA visualizer missing menu items on MacOS.</li>
<li>[FOR-17192] Fixed issue leading to incorrect line numbers for Python code.</li>
<li>[FOR-17193] Fixed issue causing breakpoints to trigger in incorrect Python files.</li>
<li>[FOR-17315] Improve step performance when debugging large binaries (500MB+).</li>
</ul>
<h6>Linaro MAP and Performance Reports:</h6>
<ul>
<li>[FOR-17364] Fixed an issue where ALLINEA_SAMPLER_INTERVAL was not being read successfully in a remote connection.</li>
</ul>
<h1>22.1.1</h1>
<h1>Additions and changes</h1>
<h6>Linaro Forge:</h6>
<ul>
<li>None in this release.</li>
</ul>
<h6>Linaro DDT:</h6>
<ul>
<li>None in this release.</li>
</ul>
<h6>Linaro MAP and Performance Reports:<h6>
<ul>
<li>None in this release.<li>
</ul>
<h1>Resolved issues<h1>
<h6>Linaro Forge:</h6>
<ul>
<li>[FOR-17027] Fixed regression in MacOS client GUI style.</li>
</ul>
<h6>Linaro DDT:</h6>
<ul>
<li>[FOR-16910] Fix an issue launching when SLURM_DISTRIBUTION=pack is enabled.</li>
</ul>
<h6>Linaro MAP and Performance Reports:</h6>
<ul>
<li>None in this release.</li>
</ul>
<h1>22.1</h1>
<h1>Additions and changes</h1>
<h6>Linaro Forge:</h6>
<ul>
<li>Added support for Red Hat 9.</li>
<li>Added support for Ubuntu 22.04.</li>
<li>Added optional private key for SSH connections when using the remote client.</li>
<li>Added support for Cray PALS.</li>
<li>Added support for Arm Compiler for Linux 22.1.</li>
<li>Added support for NVIDIA HPC Compiler version 22.5.</li>
<li>Added support for Intel 2022 oneAPI HPC toolkit.</li>
<li>Added support for GCC 12.</li>
<li>Upgraded the default Arm Forge debugger to GDB 12.1.</li>
<li>Removed support for CUDA 9.x.</li>
<li>Removed support for various MPIs including: Altix MPI, BProc, Bull MPI, HP-MPI, LAM/MPI, MPI/Pro, MPICH 1, Oracle MPT, Platform MPI, Scali MPI, SGI MPT.</li>
<h6>Linaro DDT:</h6>
<ul>
<li>Added AMD GPU debugging support.</li>
<li>Added optional node memory threshold detection in DDT's memory debugging feature, which pauses the program when a memory allocation takes the total memory usage of a compute node over the given threshold.</li>
<li>Removed the Qt4 pretty printers.</li>
</ul>
<h6>Linaro MAP and Performance Reports:</h6>
<ul>
<li>Added AMD GPU profiling support.</li>
<li>Added support for library of origin information when displaying profiled stacks.</li>
<li>Reduced potential false-positive categorization of CUDA frames by using library of origin information rather than pattern matching on function name.</li>
<li>Updated --perf-metrics event information, to include support for Linaro Neoverse N2.</li>
<li>Changed L2 data cache misses metric to be computed as a ratio per 1000 instructions.</li>
<li>Removed opt-in PAPI metrics.</li>
</ul>
<h1>Resolved issues</h1>
<h6>Linaro Forge:</h6>
<ul>
<li>[FOR-16403] Fixed an issue with startup not working with HPE MPT and the MPI_SHEPHERD environment variable set to true.</li>
<li>[FOR-16534] Fixed an issue when the system OpenSSL library is not compatible.</li>
<li>[FOR-16836] Fixed an issue with the C++ runtime redistributable library on the Windows platform.</li>
</ul>
<h6>Linaro DDT:</h6>
<ul>
<li>[FOR-13432] Fixed an issue synchronizing stacks across threads in the CTC window, particularly for OpenMP regions where the main thread and worker threads may have different stacks.</li>
<li>[FOR-14425] Fixed an issue with debugging C flexible arrays.</li>
<li>[FOR-15232] Fixed an issue where expression watchpoints could not be set for C++ programs.</li>
<li>[FOR-15536] Fixed an issue with the password prompt when connecting to remote host nodes.</li>
<li>[FOR-15658] Fixed a crash when attempting assembly debugging of a program built without debug information.</li>
<li>[FOR-16166] Fixed an issue where watchpoints were pinned by default for C++ programs.</li>
<li>[FOR-16622] Fixed applying changed memory debugging options when stopped at memory error.</li>
<li>[FOR-16728] Fixed an issue with Cray MPICH rank detection.</li>
<li>[FOR-16815] Fixed an issue with the MDA viewer where display mode could not be changed.</li>
</ul>
<h6>Linaro MAP and Performance Reports:<h6>
<ul>
<li>[FOR-13743] Fixed an issue with CUDA profiling when using the CUDA libraries included with the NVIDIA HPC SDK.
</li>
<li>[FOR-16228] Fixed an issue causing a MAP sampler initialisation failure.</li>
</ul>
<h1>Deprecated features</h1>
<h6>The following features have been deprecated in this release, and might be removed in a future version:</h6>
<ul>
<li>Support for the IBM Power (ppc64le) architecture.</li>
<li>Support for CUDA 10 Debugging.</li>
<li>Support for CUDA 10 Profiling.</li>
</ul>
</div>


 


































































































































































































































































