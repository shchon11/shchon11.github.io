# Content sources and scope

Reviewed 24 September 2026.

## Profile and competition record

Seonghyun Chon supplied the education, internship dates, and competition results:

- Hanyang University, Department of Automotive Engineering; B.S. in progress, March 2021–present; Automotive Software double major confirmed in the owner's research-lab self-introduction.
- Undergraduate Research Intern, IRCV Lab, February 2026–present.
- LG Electronics Industry-Academia Scholar, September 2025–present, directly confirmed by Seonghyun Chon. This is a scholarship, not employment.
- Grand Prize, 1/10th division, 4th International University Student EV Self-Driving Competition, July 2025; Team ChaChaPing.
- Second President, MiRu Automotive Software Club, September–December 2025, confirmed by the public organization profile.
- Tied 9th place, Team 폭주(暴走), 4th F1TENTH Korea Championship at ICCAS 2025, November 2025. The team was directly confirmed by the owner and the placement is visible in the saved standings.
- Simulation and autonomous-driving algorithm development and preparation for Formula Student Korea 2026.

Public event information confirms event names and dates, rather than the personal results above:

- [ICCAS 2025 F1TENTH Korea Championship](https://2025.iccas.org/?page_id=5104)
- [Formula Student Korea 2026 participant information](https://www.ksae.org/jajak/info/?sn=10)
- [IRCV Lab](https://ircv.hanyang.ac.kr/)

Award division and MiRu leadership were subsequently verified through the public organization profile. No completed degree or accepted-publication status has been inferred.

## Selected public projects

| Project | Source | Scope |
| --- | --- | --- |
| F1TENTH E2E | [Repository](https://github.com/shchon11/F1tenth_E2E) | Batched simulator, LiDAR policy, DAgger/PPO, iLQR; 22 real recordings used in calibration. Learned policy results remain simulation-only. |
| RAW-Autolabel | [Repository](https://github.com/shchon11/RAW-Autolabel) | Cross-ISP multi-view auto-labeling prototype; no improvement percentage or accepted-paper claim. |
| FLIR camera infrastructure | [Repository](https://github.com/shchon11/FLIR_control) | Eight-camera ROS 2 configuration, camera calibration, PTP and data export tooling. |
| HYU Formula Student | [Repository](https://github.com/shchon11/HYU-Formula-Student) | Perception, SLAM, planning, control, and simulation development. No real-car completion or contest outcome inferred from simulator results. |
| T-Car | [Repository](https://github.com/shchon11/T-CAR) | Two-stage traffic-light detection and seven-state classification. |
| Event clip recorder | [Repository](https://github.com/shchon11/DM_clipGUI) | ROS 2 pre/post-event recording. |

The RAW/ISP research description summarizes ongoing work; the public link is to the related auto-labeling prototype. The bimanual VLA section describes an exploratory research direction, not an implemented result.

## Image and font credits

- Simulator console: [original image](https://github.com/shchon11/F1tenth_E2E/blob/main/docs/media/f1tenth-visualizer-overview.png), with [capture provenance](https://github.com/shchon11/F1tenth_E2E/blob/main/docs/media/PROVENANCE-visualizer.md).
- Manrope and Space Grotesk: Google Fonts, SIL Open Font License, bundled locally with license texts.

Private session logs, operational addresses, credentials, and unpublished manuscripts are not included in this repository.

## Visual project evidence

Videos and images are sourced from public project repositories or the owner's project and team materials. Website encodes reduce file size without changing playback speed. The project demonstration clips below are illustrative, not performance comparisons. The separately documented field gallery includes genuine competition recordings.

- Scripted-reference simulator video: `F1tenth_E2E/docs/media/f1tenth-simulator-demo.mp4`, full 25 seconds, re-encoded at 1280 pixels wide. Scripted raceline reference driver, not a learned policy. [Source and capture provenance](https://github.com/shchon11/F1tenth_E2E/blob/main/docs/media/PROVENANCE-video.md).
- Learned policy video: `F1tenth_E2E/docs/media/f1tenth-learning-demo.mp4`, full 25 seconds. The collision/reset at 5.125 seconds remains in the video and is described in the caption. Same provenance link above.
- Simulator gallery: `docs/media/f1tenth-visualizer-overview.png`, `f1tenth-environment-editor.png`, and `f1tenth-trackgen-gallery.png` in [F1tenth_E2E](https://github.com/shchon11/F1tenth_E2E/tree/main/docs/media).
- Formula Student track drive: 30-second excerpt starting at 4 seconds in [tmpc_small_track_run_2026-07-18.mp4](https://github.com/shchon11/HYU-Formula-Student/blob/main/docs/media/tmpc_small_track_run_2026-07-18.mp4). Poster sampled at 9 seconds of the original recording.
- Formula Student skidpad: full 65.04-second [skidpad_completion_rviz_2026-07-20.mp4](https://github.com/shchon11/HYU-Formula-Student/blob/main/docs/media/skidpad_completion_rviz_2026-07-20.mp4). Poster sampled at 4 seconds.
- Camera calibration: original, undistorted, and cropped views from the [public FLIR calibration output](https://github.com/shchon11/FLIR-Multicamera-Calibration/blob/aa56e4cf16a3183dfbb13b3bac0c0c680ed5a1a3/calib_app/workspace/outputs/undistort_preview/24401040_set_00026_preview.png). The pictured person is not identified as the portfolio owner.
- T-Car: [public normalized classification confusion matrix](https://github.com/shchon11/T-CAR/blob/b0c15fe4224ca3f8bc0d2dfb96627d3b31d6f0e0/checkpoints/provenance/0807_stage2/confusion_matrix_normalized.png). This is a training-run evaluation artifact, not a measure of on-road reliability.

## Expanded contribution audit

The September 24 revision draws on an authenticated review of accessible personal, organization, and collaborative repositories, plus owner-authored research-lab activity records. Repository copies sharing commit history are treated as one project. Internal links and full conversations are not published.

- [MiRu leadership and achievements](https://github.com/MiRuAE/.github/blob/68cea0884563f5520348a1e4b63694fd76d14dd2/profile/README.md): second president, September–December 2025, and 1/10th EV competition Grand Prize.
- [ChaChaPing competition workspace](https://github.com/MiRuAE/uni_contest_25): lane perception and control contributions, including [the owner's lane-mission implementation](https://github.com/MiRuAE/uni_contest_25/commit/232d17bf49e7abf11352404b474e57e41f09cccf).
- ICCAS contribution details were corroborated in the shared competition repository's owner-authored commits; no private repository content is redistributed.
- [Embedded-TARS language interface](https://github.com/Embedded-TARS/llm_tars) and [team rover workspace](https://github.com/Embedded-TARS/Complete_TARS_ws) support the speech-to-command and perception contributions.
- RIFT/DriveRAW, the ISP-stage study, and RAW uncertainty distillation are summarized from their research code and working documents. They are research contributions, not claims of accepted publications.
- The xv6 scheduler, threads and file-mapping implementations are coursework, not a standalone operating system developed from scratch.
- ISP/low-light SfM talk: IRCV Lab seminar, 14 August 2026; owner-authored slides and seminar record.

## Data Machine hardware result and screenshots

The owner's 19 September 2026 integration report records successful acquisition from 14 visible-light cameras, two thermal cameras, LiDAR and GNSS, without observed camera drops at 30 Hz in that setup. This is a bounded integration test, not a claim of complete all-condition reliability or finished all-sensor phase synchronization.

Public implementations: [DM_clipGUI](https://github.com/shchon11/DM_clipGUI) and [FLIR_control](https://github.com/shchon11/FLIR_control). The GPU imaging path uses CUDA/NPP and nvJPEG. Timing and post-recording integrity checks preserve device metadata and distinguish capture loss, transport gaps and clock-domain issues.

`datamachine-sensor-preview.png` is a pixel-preserving crop of the owner's 19 September 06:29:48 integration screenshot. The crop selects the camera and thermal preview column; network addresses, map trajectories and operational logs are excluded. It is an actual hardware screenshot, not a mock-up.

`race-cone-detection.png`, `race-lidar.png` and `race-team-car.png` come from the owner's RACE 2026 orientation materials. The first two depict simulation; the third is a team vehicle photograph, not proof of a particular autonomous run or competition result. The deck identifies Seonghyun Chon in perception and SLAM responsibilities.

## Organization marks

Original marks are used only to identify the documented affiliation and role, not to imply employer status or endorsement.

- LG Electronics: official [brand assets](https://www.lge.co.kr/company/info/brandAsset), original heritage-red/white English mark. Role: industry-academia scholar.
- Hanyang University: official [symbol downloads](https://www.hanyang.ac.kr/web/www/symbol-logo), original university seal.
- IRCV Lab: [official lab](https://ircv.hanyang.ac.kr/) original wordmark.
- MiRu: original [GitHub organization avatar](https://github.com/MiRuAE).
- RACE: original team logo from the owner's RACE orientation materials; [team website](https://www.racehanyang.com/).


## Original field photographs and films

The owner authorized a survey of their connected iPhone and iCloud photo library for this CV. Fourteen selected originals (nine photographs and five films) are presented in the field gallery. Original files were obtained through USB or the signed-in iCloud Photos download interface. Small phone cache thumbnails were used for selection only, never enlarged as website originals.

| Website asset | Date | Visible context |
| --- | --- | --- |
| ev-team.jpg | July 2025 | ChaChaPing at the EV competition |
| ev-pit.jpg | July 2025 | Vehicle and electronics preparation in the pit |
| ev-race.mp4 | July 2025 | Actual EV competition course footage, about 20 seconds |
| iccas-team.jpg | November 2025 | Group at the ICCAS 2025 venue |
| iccas-race.mp4 | November 2025 | Actual F1TENTH championship track footage, about 14 seconds |
| tars-rover.jpg | June 2025 | Assembled Embedded-TARS rover |
| tars-demo.mp4 | June 2025 | Physical lane-course rover demonstration, about 41 seconds |
| formula-integration.jpg | August 2026 | Formula vehicle computing, wiring and integration |
| formula-cockpit.jpg | August 2026 | Onboard setup during outdoor integration |
| formula-workshop.mp4 | August 2026 | Workshop integration, about four seconds |
| tcar-team.jpg | August 2026 | Instrumented vehicle and fieldwork group |
| tcar-field-test.mp4 | August 2026 | Onboard camera and point-cloud displays, 20-second excerpt |
| sensor-rig.jpg | September 2026 | Data Machine roof rig during installation |
| rig-assembly.jpg | September 2026 | Sensor-frame and mount assembly |

Public photo versions are auto-oriented, resized to at most 1800 pixels, and stripped of EXIF/location metadata. Videos are H.264 at 1280 pixels wide, retain their original pace, omit audio, and have source metadata removed. HDR material is tone-mapped to SDR for consistent browser display. Video poster frames come from those recordings. No imagery is generated.

The footage documents the event or integration setting; it does not establish a particular vehicle's driver identity, autonomous completion, or model performance. People are not identified using their faces. The owner's direct correction excludes 2021 Formula-related photos from claimed experience. The photographed EV award certificate further confirms the 1/10th-division Grand Prize dated 12 July 2025; the full certificate and its other participant names are not redistributed.

## Full-stack Data Machine engineering

The portfolio owner's role covers the platform from camera acquisition and control through field operation. `DM_clipGUI` is a repository name, not the boundary of that work.

- C++ Spinnaker-to-ROS 2 acquisition and typed GenICam controls: [owner-authored initial driver](https://github.com/shchon11/FLIR_control/commit/0187876862159e75c7e085eaf4b963ec4abc39a2).
- Live intrinsic calibration: [implementation](https://github.com/shchon11/FLIR_control/commit/bb32b27118175e2fbd2241b716ec4e0497b47407).
- Extrinsics and multicamera export: [implementation](https://github.com/shchon11/FLIR_control/commit/89219223b058f4ab70bb40945c332d2b4ca772ff).
- Device discovery/inventory, ForceIP, GPIO/PTP orchestration: [implementation](https://github.com/shchon11/FLIR_control/commit/272d03f499f42e0f4f30ae5f07ab66498f4ab326).
- A70 thermal camera capability handling: [implementation](https://github.com/shchon11/FLIR_control/commit/c110c6705a4fa0e322f2abdb2d90a0c5e415f42f).
- C++ serialized-message ring-buffer recorder, adaptive QoS, pre/post-event windows and background rosbag2 writing: [owner-authored initial recorder](https://github.com/shchon11/DM_clipGUI/commit/201f51b73c1514bb44a91b621ab903a66f535323).

The work builds on vendor and open-source components including Spinnaker, ROS 2, OpenCV, NPP/nvJPEG and rosbag2. It is not a claim to have written those underlying libraries or every collaborative line of code.

## Targetless camera–LiDAR calibration

The September 24 implementation and saved result artifacts were inspected directly in the owner's current ROSbag-to-nuScenes working tree. The pipeline includes KLT feature tracks, INS motion, a Kannala–Brandt camera model, near/far B-spline windshield fields, rolling-shutter/time estimation, LiDAR reflectance rendering, LoFTR/PnP correspondences, joint Levenberg–Marquardt refinement and converter-compatible export.

- Seven cameras, with evaluation on two separate 30-second driving clips excluded from calibration fitting.
- Fourteen final camera/clip cells: per-cell median residuals 1.5696–2.3601 pixels; median of these medians 1.7846 pixels.
- Those results measure held-out, geometrically verified cross-modal correspondences. They are not external ground-truth calibration errors. No controlled improvement factor over the older calibration is claimed because the matching sets differ.
- Calibration fitting used 70 seconds from a different log. Recorded-log evaluation does not establish live real-time deployment performance. Export to the converter's supported fisheye representation approximates the full windshield model.
- The online-calibration module is in the local working tree and was not present in the published repository at review time. The website links to the related public conversion project, not to a nonexistent released module.

The hero comparison is actual held-out rear-left camera footage with previous/calibrated LiDAR projections. Original before/after panels are extracted from the owner's September 24 presentation; the actual matching result was also verified independently against the underlying output. Road-marking comparison and LiDAR intensity-to-camera correspondence images are from the same presentation/results. Only selected visualizations are published, not the full internal report, raw driving logs or operational metadata.


## Custom F1TENTH simulator authorship

The F1TENTH project implements its own PyTorch simulator and vehicle/sensor core. Owner-authored commit `7348724` introduced `dynamics.py`, `lidar.py`, `lidar_triton.py` and `sim.py`; current source supports Pacejka tire dynamics, load transfer, combined-slip limits, actuator delays, GPU batches and Triton LiDAR simulation. Track/environment tools include editing, mesh import and procedural generation. F1TENTH Gym is referenced for assets/comparison; the inspected simulation core is not merely invoking its runtime. See the [project source](https://github.com/shchon11/F1tenth_E2E), [environment-editor documentation](https://github.com/shchon11/F1tenth_E2E/blob/main/docs/environment_editor.md) and [real-data calibration documentation](https://github.com/shchon11/F1tenth_E2E/blob/main/docs/real_data_calibration.md).
