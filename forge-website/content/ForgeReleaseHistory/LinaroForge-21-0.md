---
layout: post
id: '21.0.3'
title: "Linaro Forge:21.0 - Latest release 21.0.3"
date: '2021-07-30'
---
<style>
.release-container{
   font-family:"Lato";
    color:#333E48;
    font-size:14px;
    padding:4px;
}
h1{
    font-size:28px;
    font-family:"Lato";
}
h6{
    font-weight:500;
    margin:10px;
    font-size:14px;
}
ul li{
list-style-type: circle;
margin-left:4%;
font-family:"Lato";
}

</style>
<div class='release-container'>
<h1>What's new in 21.0 - Latest release 21.0.3</h1> 
<h6>Arm Forge 21.0 covers the following releases: 
<ul>
<li>Arm Forge 21.0 - Release 1st March, 2021</li>
<li>Arm Forge 21.0.1 - Release 30th March, 2021</li>
<li>Arm Forge 21.0.2 - Release 30th April, 2021</li>
<li>Arm Forge 21.0.3 - Release 30th July, 2021</li>
</ul>
</h6>
<h1>21.0.3</h1>
<h1>Additions and changes</h1>
<ul>
<h6>Linaro Forge:</h6>
<li>Added support for GCC 11.</li>
</ul>
<h6>Linaro DDT:</h6>
<ul>
<li>Added a warning to notify when the debugger cannot debug shared libraries because of an unknown library path.</li>
</ul>
<h6>Linaro MAP and Performance Reports:</h6>
<ul>
<li>None in this release.</li>
</ul>
<h1>Resolved issues<h1>

<h6>Linaro Forge:</h6>
<ul>
<li>None in this release.</li>
</ul>
<h6>Linaro DDT:</h6>
<ul>
<li>[FOR-13309] Fixed an issue that was preventing start up with GCC 11.</li>
<li>[FOR-13499] Fixed a bug where Python Debugging would not work correctly with SLURM if the Python binary was using the Python shared library.</li>
</ul>
<h6>Linaro MAP and Performance Reports:</h6>
<ul>
<li>[FOR-12903] Fixed a numerical scaling issue with SPE counts on long profiling runs.</li>
</ul>
<h1>21.0.2</h1>
<h1>Additions and changes</h1>
<ul>
<li>None in this release</li>
</ul>
<h1>Resolved issues</h1>
<h6>Linaro Forge:</h6>
<ul>
<li>[FOR-12711] Fixed an issue that was preventing startup with newer Slurm versions.</li>
<li>[FOR-12762] Fixed auto-detection of Open MPI on HPE/Cray systems.</li>
</ul>
<h6>Linaro DDT:</h6>
<ul>
<li>[FOR-12924] Fixed an issue debugging python 3.8+ programs where python is configured with trace refs support.</li>
</ul>
<h6>Linaro MAP and Performance Reports:</h6>
<ul>
<li>[FOR-12803] Fixed a crash issue when profiling Python 3.9 programs.</li>
</ul>
<h1>21.0.1</h1>
<ul>
<li>Added support for Arm Compiler for Linux 21.0.</li>
<li>Documented a workaround for startup issues with recent versions of SLURM.</li>
</ul>
<h1>Resolved issues<h1>
<h6>Linaro Forge:</h6>
<ul>
<li>[FOR-11503] Fixed intermittent remote connect crash.</li>
</ul>
<h6>Linaro DDT:</h6>
<ul>
<li>None in this release.</li>
</ul>
<h6>Linaro MAP and Performance Reports:</h6>
<ul>
<li>[FOR-10699] Fixed an allocation issue in MAP which caused the program being profiled to crash on rare occasions.</li>
<li>[FOR-12576] Adjusted detection of OpenMP Regions with Arm Compiler for Linux.</li>
</ul>
<h1>21.0</h1>
<h1>Additions and changes</h1>
<ul>
<li>Forge for Linux is now distributed as a single package per architecture.</li>
<li>Added ability to sort by column in "Cross-Thread" and "Cross-Process Comparison" views.</li>
<li>Added support for GNU Compiler version 9.</li>
<li>Added support for GNU Compiler version 10.</li>
<li>Added GDB 10 as an optional debugger.</li>
<li>Added support for Open MPI version 4.1.</li>
<li>Added support for NVIDIA HPC Compiler version 20.9.</li>
<li>Removed support for CUDA 8.x.</li>
<li>Removed GDB 8.1 as a debugger.</li>
<li>Removed support for the following MPIs: SGI MPT (prior to HPE MPI), Open MPI on Cray X-series systems, Open MPI 2.x.x, Parastation MPI.</li>
</ul>
<h1>Resolved issues</h1>
<h6>Linaro Forge:</h6>
<ul>
<li>None in this release.</li>
</ul>
<h6>Linaro DDT:</h6>
<ul>
<li>[FOR-11277] Fixed an issue where DDT would not start the debug session at the expected location for non-MPI, Fortran applications.</li>
<li>[FOR-9476] Fixed an issue where CUDA Memory Debugging did not track allocations made via cudaMallocPitch and cudaMalloc3D.</li>
<li>[FOR-4826] Fixed an issue where watchpoints would not be removed from the GUI when going out of scope.</li>
<li>[FOR-10025] Fixed an issue with missing icons in the remote file dialog on MacOS.</li>
<li>[FOR-10332] Fixed an issue which could cause an internal error to occur on shutdown.</li>
<li>[FOR-10154] Fixed an issue where remote clients could show unconfigurable items in the options dialog when not connected to a remote system.</li>
<li>[FOR-10300] Fixed an issue displaying directory icons when browsing remote files using the Windows client.</li>
<li>[FOR-10387] Fixed startup to be more robust with serial programs.</li>
<li>[FOR-9980] Fixed an issue where some header files could appear under the "Sources" section of the "Project Files" view.</li>
<li>[FOR-11447] Fixed an issue where the remote launch connection name did not display correctly when adding multiple new connections.</li>
<li>[FOR-11986] Fixed an issue creating a clean config via the --cleanconfig command line parameter.</li>
<li>[FOR-12112] Fixed an issue where the --source-dirs command-line option did not always add source directories as expected.</li>
</ul>
<h6>Linaro MAP and Performance Reports:<h6>
<ul>
<li>[FOR-11492] Improved OpenMP region names for some compilers.</li>
<li>[FOR-8536] Improved the performance of perf metrics selection lists.</li>
<li>[FOR-8567] Fixed possible output of corrupted memory to user.</li>
<li>[FOR-9264] Improved MAP line metrics for samples on system calls.</li>
<li>[FOR-10387] Fixed startup to be more robust with serial programs.</li>
<li>[FOR-11447] Fixed an issue where the remote launch connection name did not display correctly when adding multiple new connections.</li>
<li>[FOR-11684] Improved MAP's ability to detect time spent in thread synchronization.</li>
<li>[FOR-11935] Fixed an issue with the static sampler library on Power (ppc64le) which caused link failures.</li>
<li>[FOR-11986] Fixed an issue creating a clean config via the --cleanconfig command line parameter.</li>
<li>[FOR-12085] The forge-probe utility script now sources the allinearc settings file.</li>
<li>[FOR-12112] Fixed an issue where the --source-dirs command-line option did not always add source directories as expected.</li>
</ul>
<h1>Deprecated features</h1>
<h6>The following features remain deprecated since the release of version 21.0, and might be removed in a future version:</h6>
<ul>
<li>VisIt Visualization.</li>
<li>Automatically adding breakpoints and tracepoints based on version control information.</li>
<li>Support for the IPMI energy agent.</li>
<li>Support for PAPI metrics in MAP. Arm recommends using perf metrics instead.</li>
<li>Support for Python 2.x.x.</li>
<li>Support for Open MPI 3.x.x.</li>
<li>Support for Red Hat Enterprise Linux 7.x on aarch64 and ppc64le.</li>
<li>Support for Ubuntu 16.04.</li>
<li>Support for Ubuntu 16.04.</li>
<li>Support for SUSE Linux Enterprise Server 12 on aarch64.</li>
<li>Support for macOS High Sierra (10.13).</li>
</ul>
</div>


 


































































































































































































































































