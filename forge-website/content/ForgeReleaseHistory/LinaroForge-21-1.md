---
layout: post
id: '21.1.3'
title: "Linaro Forge:21.1 - Latest release 21.1.3"
date: "2022/01/28"
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
<h1>What's new in 21.1 - Latest release 21.1.3</h1> 
<h6>Linaro Forge 21.1 covers the following releases: 
<ul>
<li>Linaro Forge 21.1 - Release 30th September, 2021</li>
<li>Linaro Forge 21.1.1 - Release 29th October, 2021</li>
<li>Linaro Forge 21.1.2 - Released 26th November, 2021</li>
<li>Linaro Forge 21.1.3 - Released 28th January, 2022</li>
</ul>
</h6>
<h1>21.1.3</h1>
<h1>Additions and changes</h1>
<ul>
<h6>Linaro Forge:</h6>
<li>None in this release.</li>
<h6>Linaro DDT:</h6>
<ul>
<li>Fixed a performance regression in the backend debugger when debugging Fortran codes with a large amount of modules.</li>
<li>Improved frameless unwinding on AMD/Intel (x86_64).</li>
</ul>
<h6>Linaro MAP and Performance Reports:</h6>
<ul>
<li>None in this release.</li>
</ul>
<h1>Resolved issues<h1>

<h6>Linaro Forge:</h6>
<ul>
<li>[FOR-14307] Fixed an issue that prevented terminating the remote daemon when selecting an alternate remote system.</li>
<li>[FOR-14525] Added workarounds to the Linaro Forge User Guide for Slurm 21.08.0x where x <= 4.</li>
<li>[FOR-14601] Significantly reduced the number of threads that GDB spawns during startup.</li>
</ul>
<h6>Linaro DDT:</h6>
<ul>
<li>None in this release.</li>
</ul>
<h6>Linaro MAP and Performance Reports:</h6>
<ul>
<li>None in this release.</li>
</ul>
<h1>Deprecated features</h1>
<h6>The following features have been deprecated in this release, and might be removed in a future version:<h6>
<ul>
<li>Automatically adding breakpoints and tracepoints based on version control information.</li>
<li>Support for PAPI metrics in MAP. Arm recommends using perf metrics instead.</li>
</ul>
<h1>21.1.2</h1>
<h1>Additions and changes</h1>
<h6>Linaro Forge:</h6>
<ul>
<li>None in this release.</li>
</ul>
<h6>Linaro DDT:</h6>
<ul>
<li>
Added working directory and environment variables to the logbook if set using the Run dialog.
</li>
</ul>
<h6>Linaro MAP and Performance Reports:</h6>
<ul>
<li>None in this release.</li>
</ul>
<h1>Resolved issues</h1>
<h6>Linaro Forge:</h6>
<ul>
<li>[FOR-13394] Fixed an issue where project files were not listed.</li>
<li>[FOR-14396] Fixed an issue where the enter button would close the Find In Files dialog rather than execute a search.</li>
</ul>
<h6>Linaro DDT:</h6>
<ul>
<li>None in this release.</li>
</ul>
<h6>Linaro MAP and Performance Reports:</h6>
<ul>
<li>[FOR-14329] Fixed an issue with Cray Shasta detection.</li>
</ul>
<h1>Deprecated features</h1>
<h6>The following features have been deprecated in this release, and might be removed in a future version:</h6>
<ul>
<li>Automatically adding breakpoints and tracepoints based on version control information.</li>
<li>Support for PAPI metrics in MAP. Arm recommends using perf metrics instead.</li>
</ul>
<h1>21.1.1</h1>
<h1>Additions and changes</h1>
<h6>Linaro Forge:</h6>
<ul>
<li>Updated Forge products to OpenSSL 1.1.1l.</li>
</ul>
<h6>Linaro DDT:</h6>
<ul>
<li>Improved the reporting of memory debugging errors.</li>
</ul>
<h6>Linaro MAP and Performance Reports:<h6>
<ul>
<li>None in this release.<li>
</ul>
<h1>Resolved issues<h1>
<h6>Linaro Forge:</h6>
<ul>
<li>None in this release.</li>
</ul>
<h6>Linaro DDT:</h6>
<ul>
<li>[FOR-14160] Fixed an issue with Pin To Address for base Fortran datatypes with GDB 10.</li>
<li>[FOR-14178] Fixed an issue with Pin To Address for allocatable Fortran types with GDB 10.</li>
</ul>
<h6>Linaro MAP and Performance Reports:</h6>
<ul>
<li>None in this release.</li>
</ul>
<h1>Deprecated features</h1>
<h6>The following features have been deprecated in this release, and might be removed in a future version:</h6>
<ul>
<li>Automatically adding breakpoints and tracepoints based on version control information.</li>
<li>Support for PAPI metrics in MAP. Arm recommends using perf metrics instead.</li>
</ul>
<h1>22.1</h1>
<h1>Additions and changes</h1>
<h6>Linaro Forge:</h6>
<ul>
<li>Added support for Linaro Compiler for Linux 21.1.</li>
</ul>
<h6>Linaro DDT:</h6>
<ul>
<li>Upgraded the default DDT debugger to GDB 10.1.</li>
<li>GDB 11.1 added as an optional debugger for DDT.</li>
</ul>
<h6>Linaro MAP and Performance Reports:</h6>
<ul>
<li>Added new metrics for tracking NVIDIA GPU memory transfers. An additional opt-in "CUDA transfer analysis" mode will trace the calls to CUDA functions that perform memory transfers, at the expense of some overhead per such call.</li>
<li>Removed support for the IPMI energy agent.</li>
</ul>
<h1>Resolved issues</h1>
<h6>Linaro Forge:</h6>
<ul>
<li>[FOR-12395] Fixed an issue with Remote Connect that incorrectly issued a warning when deleting or editing a connection following a failed connection attempt.</li>
<li>[FOR-12762] Fixed an issue with auto-detection of Open MPI on HPE/Cray systems.</li>
<li>[FOR-13074] Authenticated and encrypted TCP/IP connections between the Forge backend components and Reverse Connect using TLS-PSK.</li>
<li>[FOR-13396] Fixed a typo in the --list-mpis command-line output.</li>
</ul>
<h6>Linaro DDT:</h6>
<ul>
<li>[FOR-4775] Fixed an issue with missing tooltips in the Memory Debugging options menu.</li>
<li>[FOR-6587] Changed the variance calculation between cross-process comparisons in the CPC/CTC window to use the population variance.</li>
<li>[FOR-6595] Fixed an issue where the Expression drop-down history was not stored in the CPC/CTC window.</li>
<li>[FOR-11667] Fixed an issue where the pause button was unresponsive while stepping in ASM mode using a Cuda application.</li>
<li>[FOR-11869] Fixed an issue with C++ program debugging that caused DDT to pause at the opening brace of the main function rather than pausing on the first line of main.</li>
<li>[FOR-12733] Fixed an issue to suppress a warning that Python is not an MPI application when debugging a Python mpi4py program.</li>
<li>[FOR-13109] Fixed an issue that prevented the editing of very complex expressions that are added to the evaluate window.</li>
<li>[FOR-13745] Fixed a crash that was triggered when using memory debugging.</li>
<li>[FOR-13885] Fixed an issue where DDT could not open core files.</li>
</ul>
<h6>Linaro MAP and Performance Reports:<h6>
<ul>
<li>[FOR-5925] Fixed an issue where templated C++ function names were truncated.</li>
<li>[FOR-11888] Fixed an issue that caused text in the timeglyphs (the percentage) to display incorrectly when using the zoom feature.</li>
<li>[FOR-12902] Fixed an issue where functions containing OpenMP regions in programs compiled with GCC or Intel Compiler were displayed in name-mangled form.</li>
</ul>
<h1>Deprecated features</h1>
<h6>The following features have been deprecated in this release, and might be removed in a future version:</h6>
<ul>
<li>Automatically adding breakpoints and tracepoints based on version control information.</li>
<li>Support for PAPI metrics in MAP. Arm recommends using perf metrics instead.</li>
</ul>
</div>


 


































































































































































































































































