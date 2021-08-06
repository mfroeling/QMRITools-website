---

permalink: /doc/instal/
title: "QMRITools installation"

sidebar:
  nav: "documentation"

---

The latest release can be found
[here](https://github.com/mfroeling/QMRITools/releases){:target="_blank"}.

Manual installation:
1.	Download the `QMRITools.zip`.
2.	Extract the `QMRITools` folder and place it in the Mathematica UserBaseDirectory &gt; Applications.

If you want to know your UserBaseDirectory run the following code in mathematica
`SystemOpen[FileNameJoin[{$UserBaseDirectory, "Applications"}]]`

Some functions of QMRITools call on external executables and software.
These executables need to be present in “QMRITools” and are included in
the release. If for any reason you want to use other (older/newer)
versions you can replace them but functionality is not guaranteed. For
the latest version of these tools and their user license please visit
their website.

-   [dcm2niix](https://github.com/rordenlab/dcm2niix/)
    -   dcm2niix.exe
-   [Elastix](http://elastix.isi.uu.nl/)
    -   elastix.exe
    -   transformix.exe

All functionality is tested under Windows 10 with the latest Mathematica
version. The Mathematica code is cross platform compatible with the
exception of the external tools which are compiled for each OS. The
toolbox provides compiled versions for each OS but their functionality
is not guaranteed. 

The Elastix version used is 4.9 with OpenCL support.
Additionally Elastix needs to be compiles with the PCA metrics, all DTI
related parameters and all affine related parameters.

Although cross platform compatibility is provided I have only limited
options for testing so if any issues arise please let me know.
