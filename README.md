# Predictive Mobility-Aware Objective Function (PMA-OF)

This repository contains the implementation of PMA-OF for Contiki-NG. The test scenarios described in the article "Adaptação do Protocolo RPL para Aplicações com Mobilidade" are located in:
- `examples/rpl-udp-vanetapp`
- `examples/rpl-udp-cabtraces`

## Overview

PMA-OF introduces additional link metrics based on the temporal variation of RSSI values.

These metrics are used by the RPL Objective Function to favor parents with more stable link behavior, reducing frequent parent switching and improving route stability.

## Problem

In RPL-based IoT networks, route stability can degrade significantly when nodes are mobile, particularly in dense urban environments where wireless link quality fluctuates rapidly.

Traditional RPL objective functions rely on instantaneous link metrics and therefore react only after link degradation occurs.

## Repository Structure

- `os/net/routing/rpl-classic/rpl-pmaof.c` – implementation of PMA-OF 
- `os/net/link-stats.c` – implementation of the link metrics  
- `examples/rpl-udp-cabtraces/positionfiles` – real urban mobility traces used in the project
- `examples/rpl-udp-cabtraces/simulations` – Cooja simulation results

## Running the Simulation

1. Clone this repository
2. Navigate to one of the example directories:
   - `examples/rpl-udp-cabtraces`
   - `examples/rpl-udp-vanetapp`
3. Compile the firmware using `make TARGET=cooja`
4. Open the corresponding `.csc` scenario file in the Cooja simulator, or run `python3 run-cooja.py --to-dir --fname`.
5. The performance metrics of the simulation can be visualized by running `python3 run-analysis.py --to-dir --fname`.

## Related Publication

Bittencourt, J. G. P.; Pedroso, C. M.  
"Adaptação do Protocolo RPL para Aplicações com Mobilidade."  
SBrT – Simpósio Brasileiro de Telecomunicações, 2024.

## Platform

This project is implemented on top of Contiki-NG, an open-source operating system for IoT devices.
