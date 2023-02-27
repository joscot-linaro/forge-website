---
layout: post
id: '22.0.4'
title: "Linaro Forge:22.0 - Latest release 22.0.4"
date: "2022-07-29"
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
<h1>What's new in 22.0 - Latest release 22.0.4</h1> 
<h6>Linaro Forge 22.0 covers the following releases:: 
<ul>
<li>Linaro Forge 22.0 - Release 18th March, 2022</li>
<li>Linaro Forge 22.0.1 - Release 29th April, 2022</li>
<li>Linaro Forge 22.0.2 - Release 26th May, 2022</li>
<li>Linaro Forge 22.0.3 - Release 1st July, 2022</li>
<li>Linaro Forge 22.0.4 - Release 29th July, 2022</li>
</ul>
</h6>
<h1>22.0.4</h1>
<h1>Additions and changes</h1>
<ul>
<h6>Linaro Forge:</h6>
<li>Changed support contact details from https://developer.arm.com/support to the email address support-hpc-sw@arm.com.</li>
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
<li>[FOR-16324] Fixed a bug when inspecting self-referential Fortran types.</li>
</ul>
<h6>Linaro DDT:</h6>
<ul>
<li>None in this release.</li>
</ul>
<h6>Linaro MAP and Performance Reports:</h6>
<ul>
<li>None in this release.</li>
</ul>
<h1>22.0.3</h1>
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
<li>[FOR-16048] Fixed a product hang when running Forge with the RHEL 8.6 default Linux kernel.</li>
</ul>
<h6>Linaro DDT:</h6>
<ul>
<li>None in this release.</li>
</ul>
<h6>Linaro MAP and Performance Reports:</h6>
<ul>
<li>None in this release.</li>
</ul>
<h1>22.0.2</h1>
<h1>Additions and changes</h1>
<h6>Linaro Forge:</h6>
<ul>
<li>Fixed an issue with the MAP sampler library with glib >= 2.33.</li>
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
<li>[FOR-15826] Fixed a bug where Forge would fail at startup with stripped binary.</li>
</ul>
<h6>Linaro DDT:</h6>
<ul>
<li>None in this release.</li>
</ul>
<h6>Linaro MAP and Performance Reports:</h6>
<ul>
<li>[FOR-15927] Fixed an overflow when reading cpuinfo.</li>
</ul>
<h1>22.0.1</h1>
<h1>Additions and changes</h1>
<h6>Linaro Forge:</h6>
<ul>
<li>Enabled preloading with ssh startup and SLURM.</li>
<h6>Linaro DDT:</h6>
<ul>
<li>None in this release.</li>
</ul>
<h6>Linaro MAP and Performance Reports:</h6>
<ul>
<li>None in this release.</li>
</ul>
<h1>Resolved issues</h1>
<h6>Linaro Forge:</h6>
<ul>
<li>[FOR-15526] Updated Forge products to OpenSSL 1.1.1n.</li>
<li>[FOR-15529] Fixed compiler warning for examples/wave.f90 with GCC version 10 or later.</li>
</ul>
<h6>Linaro DDT:</h6>
<ul>
<li>[FOR-15698] Fixed assert when debugging Fortran extended types.</li>
<h6>Linaro MAP and Performance Reports:<h6>
</ul>
<li>None in this release.</li>
<h1>22.0</h1>
<h1>Additions and changes</h1>
<h6>Linaro Forge:</h6>
<ul>
<li>Added support for Arm Compiler for Linux 22.0.</li>
<li>Added support for Cuda 11.3, 11.4, 11.5 and 11.6.</li>
<li>Added support for macOS Monterey (12).</li>
<li>Added support for Windows 11.</li>
<li>Added support for debugging and profiling with Python 3.10.</li>
<li>Added support for MPICH 4.</li>
<li>Upgraded the default Linaro Forge debugger to GDB 11.1.</li>
<li>Added support for a colon separated list of directories with ALLINEA_LICENCE_DIR and related variables.</li>
</ul>
<h6>Linaro DDT:</h6>
<ul>
<li>Optimized the time taken to arrive at the Python entry point when Python debugging.</li>
<li>Added drag and drop capability for creating new evaluation expressions in the DDT Evaluate window, from text and variables from the Code Editor and Variables View.</li>
<li>Added support for cudaMallocAsync in Forge Memory Debugging.</li>
<li>Removed support for the VisIt integration feature (previously deprecated in Forge 21.0).</li>
</ul>
<h6>Linaro MAP and Performance Reports:</h6>
<ul>
<li>Added support to the Arm Statistical Profiling Extension (SPE) profiling mode of Arm MAP for Scalable Vector Extension (SVE) partial predicate and SVE empty predicate events. This allows you to identify the source code lines where these events frequently occur. Requires hardware that supports both SVE and SPE (such as, Arm Neoverse V1).</li>
<li>Updated --perf-metrics event information, to include support for Arm Neoverse V1. For consistency with Linux perf, the A64FX perf metrics INST_COMMIT_0 to INST_COMMIT_4 are now referred to as _0INST_COMMIT to _4INST_COMMIT.</li>
<li>Added stack tracing to MAP for functions that use the AArch64 pointer authentication feature.</li>
<li>Removed support for the IPMI Energy Agent feature (previously deprecated in Forge 21.0).</li>
</ul>
<h1>Resolved issues</h1>
<h6>Linaro Forge:</h6>
<ul>
<li>[FOR-3887] Improved stability of the Linaro Forge remote client.</li>
<li>[FOR-14525] Added workarounds to the Linaro Forge User Guide for Slurm 21.08.0x, where x >= 4.</li>
<li>[FOR-15224] Improved the security of temporary directory usage.</li>
</ul>
<h6>Linaro DDT:</h6>
<ul>
<li>[FOR-4106] Resolved an issue that prevented watchpoints being set on host code in CUDA applications.<li>
<li>[FOR-14598] Fixed an issue where the tools were unable to list the procedures and variables within a Fortran module.</li>
<li>[FOR-14644] Fixed a bug where truncated arrays were not correctly appended with the truncation symbol "...".</li>
<li>[FOR-14678] Fixed an issue where the GPU Kernel Progress View and the GPU Thread Selector were not refreshing correctly.</li>
</ul>
<h6>Linaro MAP and Performance Reports:</h6>
<ul>
<li>[FOR-3017] Fixed an issue opening .map files from Windows explorer.</li>
<li>[FOR-5424] Suppressed the reporting of negative time in uncategorized application activity when a program briefly uses more than the expected number of cores.</li>
</ul>
<h1>Deprecated features</h1>
<h6>The following features have been deprecated in this release, and might be removed in a future version:<h6>
<ul>
<li>Support for Ubuntu 19.10 and earlier (aarch64 and x86_64).</li>
<li>Support for SUSE Linux Enterprise Server (SLES) 12 (x86_64).</li>
</ul>
</div>


 


































































































































































































































































