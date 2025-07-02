---

layout: page
permalink: /doc/instal/

title: "QMRITools installation"
subheadline: "How to install QMRITools"
teaser: "If it doesn't work, read again."

header: no

---

### Overview

The latest release of `QMRITools` can be found [here](https://github.com/mfroeling/QMRITools/releases){:target="_blank"}. For optimal performance, it is recommended to install the toolbox via the Mathematica paclet system.

### Automatic installation

1. Download the latest `QMRITools-x.x.x.paclet`.
2. Install the paclet using `PacletInstall`.

`PacletInstall["xxx\\QMRITools-x.x.x.paclet"]`  

Alternatively, you can directly install it from the release page:

1. Using PacletInstall with a link

`PacletInstall["https://github.com/mfroeling/QMRITools/releases/download/x.x.x/QMRITools-x.x.x.paclet"]`

1. Using the resource function `GithubInstall`

`ResourceFunction["GitHubInstall"]["mfroeling", "QMRITools"]`

### External dependencies

Some functions in QMRITools require external executables and software. These executables are included in the release but can be replaced if needed. However, functionality with alternate versions is not guaranteed. For the latest versions and user licenses, visit their respective websites:

- [dcm2niix](https://github.com/rordenlab/dcm2niix/){:target="_blank"}
- [Elastix / Transformix](https://elastix.lumc.nl/){:target="_blank"}

All functionalities are tested on Windows and macOS with the latest Mathematica version. The Mathematica code is cross-platform compatible, except for external tools compiled for each OS. The included versions are:

- **Elastix:** Latest version, with OpenCL support
- **dcm2niix:** Latest version, and various versions for windows

Cross-platform compatibility is supported but not extensively tested. Please report any issues encountered.
Most likely the external dependancys for non windows systems may be out of date.

### Loading the toolbox

To load the toolbox, use the following command in Mathematica:

    <<QMRITools`

For monitoring package loading, use:

    QMRITools`$Verbose = True;
    <<QMRITools`

### Listing Available Packages and Functions

To generate a list of all QMRITools packages:

    QMRIToolsPackages[]

To list all functions in DTITools or a specific toolbox:

    QMRIToolsFunctions[]
    QMRIToolsFunctions["toolbox name"]

### Helpfull functions

After loading the toolbox to find the install location of the toolbox run

    OpenQMRIToolsLocation[]

And to open the 'Demonstrations.nb' notebook run

    OpenDemonstrationNotebook[]

### Documentation

An online version of the documention can be found [here](https://www.qmritools.com/assets/htmldoc/html/guide/qmritools){:target="_blank"}.

To print documentation of all functions:

    QMRIToolsFuncPrint[]
    QMRIToolsFuncPrint["toolbox name"]

A comprehensive list of all functions and their help documentation is available in All-Functions.nb, which can also be downloaded as a [pdf file](https://github.com/mfroeling/QMRITools/releases/download/2.0/All-Functions.pdf).
