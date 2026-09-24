# Content sources and scope

Reviewed 24 September 2026.

## Profile and competition record

Seonghyun Chon supplied the education, internship dates, and competition results:

- Hanyang University, Department of Automotive Engineering; B.S. in progress, March 2021–present; Automotive Software double major confirmed in the owner's research-lab self-introduction.
- Undergraduate Research Intern, IRCV Lab, February 2026–present.
- LG Electronics Industry-Academia Scholar, September 2025–present, directly confirmed by Seonghyun Chon. This is a scholarship, not employment.
- Grand Prize, 1/10th division, 4th International University Student EV Self-Driving Competition, July 2025; Team ChaChaPing.
- Second President, MiRu Automotive Software Club, September–December 2025, confirmed by the public organization profile.
- 9th place, 4th F1TENTH Korea Championship at ICCAS 2025, November 2025.
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

Videos and images are sourced from public project repositories or the owner's project and team materials. Website encodes reduce file size without changing playback speed. Clips are illustrative, not performance comparisons or competition recordings.

- Hero simulator video: `F1tenth_E2E/docs/media/f1tenth-simulator-demo.mp4`, full 25 seconds, re-encoded at 1280 pixels wide. Scripted raceline reference driver, not a learned policy. [Source and capture provenance](https://github.com/shchon11/F1tenth_E2E/blob/main/docs/media/PROVENANCE-video.md).
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
