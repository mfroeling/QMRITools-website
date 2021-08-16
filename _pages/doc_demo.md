---

permalink: /doc/demo/
title: "QMRITools demonstration"

sidebar:
  nav: "documentation"
  
toc: True

---

The release contains a zip file
[DemoAndTest.zip](https://github.com/mfroeling/QMRITools/releases/download/2.0/DemoAndTest.zip)
in which there is a file `demo.nb` and a folder `DemoData`. 
To have a global overview of the functionality of the toolbox
you can download this folder and run the `demo.nb`. By default the
`demo.nb` looks for the folders `DemoData` in the same
folder as the notebook.

The `demo.nb` contains the following demonstrations. 

# Initialization

> - Loading the toolbox definitions
> - Verbose loading
> - List all Packages and toolboxes
> - Memory Usage

# Basic Data manipulation and visualisation

> - Importing Data
> - Plotting data Data
> - Automatically find cross section images
> - Rescaling Data
> - Cropping
> 	- Automatic crop
> 	- Apply To Rescaled Data
> 	- Manual crop
> 	- Reverse the Crop
> - Splitting Data
>  	- Split and Stitch
>  	- Example make both legs left
> - Joining multiple stacks

# General functions

>  -Define Data
> - Data Operations
> - Filters
> - Operation ignoring zeros

# Masking

> - Import Data 
> - Create Mask
> 	- Automated and threshold masking
> 	- Manual segmentation processing
> 	- Splitting segmentation in slice direction
> 	- Extract Data from Masks
> - Rescaling Segmentations

# Registration using Elastix

> - Import Data
> - Affine Transformation
> - B-spline Registration of two legs
> 	- Full Registration
> 	- Constrained in one direction
> - Register And Apply to other Data

# Dixon and Phase unwrapping

> - Simulated phase unwrapping
> 	- Simulate some Data
> 	- Unwrap simulated Data
> - Dixon data
> 	- Import Data
> 	- Create a B0Map from phase data
> 	- Calculate a T2 star map from the echos
> 	- Perform iDeal reconstruction with initial B0 and T2star

# Simulate Dixon Data and fit testing

> - Simulate the Dixon signal
> - Fit the simulated Dixon signal
> - Evaluate the fits

# ME-SE  (TSE) T2 mapping

> - Import Data
> - Define Slice Profiles
> - calibrate and Fit the data

# Simulate EPG Data and fit testing

> - Simulate the EPG signal
> - Fit the simulated EPG signal
> - Evaluate the fits

# DTI and IVIM 

> - Generating diffusion gradients
> - Import The Data
> - Prep the IVIM and DTI data
> 	- Sort and mask
> 	- Denoise DWI data
> 	- Motion and eddy current correction
> - IVIM Fitting
> 	- Whole volume calibrate
> 	- IVIM fit 
> 	- Split signals into perfusion and diffusion
> - Tensor analysis
> 	- Fit the tensors
> 	- Analyse Tensor parameters
> 	- Calculate Tensor angles

# Simulate Tensor Data and fit testing

> - Simulate Diffusion signal
> - Fit the simulated diffusion signal
> - Evaluate the fits

# Fiber Tractography

> - Import The Data
> - Process the data for tractography
> - Fiber Tractography

# J-coupling simulations

> - Spin systems
> 	- Predefined spin systems
> 	- Custom spin systems
> - Glutamate spectra with Steam
> - Simulate Fat Spectra
> 	- PulseAcquire
> 	- Spin echo
> 	- STEAM
> - Fat STEAM with various TEs

# Cardiac data processing and simulation
 
> - Simulate Cardiac Shape
> - Analyse Cardiac shape
> - Cardiac Segmentation
> 	- perform segmentation
> 	- Analyse data based on segmentation
> 	- Visualize results