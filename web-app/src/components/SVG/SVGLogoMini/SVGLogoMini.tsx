import React from "react";
import { MINI_LOGO_PARAMS_TYPE } from "../../../constants/Constants";
import "./SVGLogoMini.scss";

export default function SVGLogoMini({
  logoParams,
}: {
  logoParams: MINI_LOGO_PARAMS_TYPE;
}) {
  return (
    <>
      <svg
        id="svg"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width={logoParams.width}
        viewBox="0, 0, 400,570.6051873198847"
        className="SvgLogoMini"
      >
        <g id="svgg">
          <path
            id="path0"
            d="M84.200 16.671 C 66.792 20.539,56.553 30.422,53.813 46.000 C 52.892 51.236,52.893 406.065,53.814 411.904 C 56.337 427.893,68.181 439.326,84.770 441.782 C 90.582 442.643,145.313 442.697,147.763 441.844 C 151.729 440.463,152.538 438.862,153.037 431.400 C 153.310 427.330,156.038 417.565,157.330 416.035 C 157.625 415.686,158.443 414.356,159.148 413.080 C 161.259 409.259,167.276 402.905,171.256 400.295 C 188.689 388.863,210.502 390.930,225.024 405.390 C 227.679 408.034,232.800 414.863,232.800 415.761 C 232.800 415.891,233.321 417.123,233.958 418.499 C 236.034 422.983,236.631 425.629,237.149 432.634 C 237.594 438.654,238.639 440.485,242.371 441.784 C 244.917 442.669,299.835 442.705,305.698 441.825 C 319.970 439.683,330.675 430.749,334.726 417.600 C 336.469 411.946,336.397 419.990,336.399 229.100 C 336.400 38.821,336.448 44.279,334.762 41.129 C 334.563 40.757,334.400 40.176,334.400 39.838 C 334.400 39.500,333.957 38.273,333.415 37.111 C 328.243 26.028,319.981 19.497,308.000 17.021 C 302.754 15.937,243.350 16.103,241.185 17.208 C 238.484 18.586,237.550 20.506,237.151 25.500 C 236.749 30.522,236.269 33.498,235.456 36.000 C 234.800 38.019,231.660 44.891,231.253 45.200 C 231.108 45.310,230.272 46.462,229.395 47.760 C 216.796 66.408,189.091 70.838,170.229 57.221 C 165.231 53.613,162.078 50.037,157.757 43.075 C 155.492 39.425,153.361 31.873,152.842 25.652 C 152.354 19.808,151.771 18.536,148.900 17.052 C 147.697 16.429,86.897 16.071,84.200 16.671 M140.079 33.400 C 142.753 44.526,145.601 50.596,151.812 58.400 C 156.962 64.871,166.815 72.294,173.244 74.545 C 174.210 74.884,176.201 75.605,177.668 76.147 C 196.571 83.139,222.269 76.472,236.046 61.000 C 236.634 60.340,237.557 59.325,238.098 58.744 C 238.638 58.163,239.497 56.993,240.005 56.144 C 240.513 55.295,241.243 54.240,241.626 53.800 C 242.788 52.465,246.800 44.887,246.800 44.027 C 246.800 43.786,246.964 43.277,247.165 42.895 C 247.918 41.458,248.848 38.392,249.752 34.363 L 250.685 30.200 278.042 30.097 L 305.399 29.994 308.999 31.392 C 315.509 33.918,319.437 38.067,321.755 44.867 L 322.800 47.934 322.800 229.180 L 322.800 410.425 321.966 412.913 C 320.118 418.425,317.791 421.740,313.800 424.546 C 308.173 428.501,308.863 428.429,277.400 428.306 L 250.600 428.200 250.492 427.200 C 250.264 425.092,248.708 418.715,248.170 417.682 C 247.859 417.087,247.604 416.296,247.602 415.924 C 247.601 415.552,247.420 415.136,247.200 415.000 C 246.980 414.864,246.800 414.479,246.800 414.144 C 246.800 413.809,246.195 412.335,245.455 410.868 C 232.965 386.087,207.022 374.411,179.985 381.402 C 177.260 382.107,170.887 384.694,168.696 385.984 C 167.983 386.404,166.694 387.132,165.832 387.603 C 155.830 393.059,144.263 408.133,141.587 419.200 C 140.989 421.674,140.006 425.970,139.734 427.300 L 139.509 428.400 113.179 428.400 C 82.157 428.400,82.875 428.476,76.800 424.556 C 72.303 421.655,69.407 417.821,67.752 412.580 C 66.573 408.849,66.573 49.151,67.752 45.420 C 69.818 38.876,74.690 33.891,81.630 31.220 L 84.600 30.077 111.955 30.139 L 139.311 30.200 140.079 33.400 M96.079 466.874 C 91.193 469.243,90.278 474.719,93.989 479.387 C 95.603 481.417,95.013 482.000,91.344 482.000 C 87.303 482.000,85.466 485.128,88.012 487.674 L 89.224 488.886 93.752 488.742 C 96.242 488.663,98.531 488.398,98.840 488.154 C 99.148 487.910,99.850 487.600,100.400 487.465 C 100.950 487.331,102.422 486.413,103.672 485.427 C 113.301 477.823,106.710 461.720,96.079 466.874 M34.932 475.523 C 32.145 476.655,30.099 479.337,28.780 483.587 C 28.607 484.144,27.626 486.940,26.600 489.800 C 25.574 492.660,24.496 495.720,24.204 496.600 C 23.913 497.480,22.649 501.080,21.397 504.600 C 20.145 508.120,18.882 511.720,18.592 512.600 C 18.302 513.480,17.225 516.540,16.198 519.400 C 15.171 522.260,14.148 525.230,13.924 526.000 C 13.700 526.770,13.380 527.580,13.212 527.800 C 13.044 528.020,12.811 528.650,12.694 529.200 C 12.576 529.750,12.086 531.190,11.605 532.400 C 11.124 533.610,10.581 535.140,10.397 535.800 C 10.213 536.460,9.490 538.530,8.790 540.400 C 5.039 550.417,4.447 552.957,5.421 554.841 C 8.740 561.260,19.253 559.330,20.901 552.000 C 21.025 551.450,21.703 549.470,22.408 547.600 C 23.113 545.730,23.926 543.480,24.215 542.600 C 24.503 541.720,25.229 539.650,25.827 538.000 C 28.718 530.022,29.677 527.304,29.990 526.200 C 30.178 525.540,30.724 524.010,31.205 522.800 C 31.686 521.590,32.173 520.192,32.288 519.694 C 32.623 518.233,33.052 518.298,34.410 520.013 C 36.784 523.011,39.781 523.834,43.836 522.604 C 49.425 520.909,51.843 524.531,49.174 530.600 C 48.980 531.040,48.452 532.390,48.000 533.600 C 47.548 534.810,47.008 536.160,46.800 536.600 C 37.458 556.364,63.004 567.578,79.020 550.744 C 89.576 539.649,92.119 525.600,83.571 525.600 C 80.561 525.600,78.734 527.240,76.889 531.600 C 72.565 541.816,68.483 546.400,63.709 546.400 C 61.483 546.400,60.800 545.912,60.800 544.322 C 60.800 543.250,62.205 538.634,62.784 537.800 C 62.937 537.580,63.386 536.500,63.782 535.400 C 64.178 534.300,64.727 532.860,65.002 532.200 C 66.787 527.921,67.000 526.933,66.983 523.000 C 66.964 518.846,66.393 516.913,64.452 514.433 L 63.696 513.466 65.583 511.579 C 71.226 505.935,74.633 495.549,72.970 489.058 C 70.408 479.057,54.244 472.288,46.211 477.853 C 45.051 478.657,44.379 478.532,43.019 477.259 C 40.587 474.983,37.756 474.375,34.932 475.523 M277.349 475.591 C 274.898 476.681,273.209 479.161,271.591 484.043 C 271.124 485.449,270.593 486.960,270.410 487.400 C 270.228 487.840,269.682 489.370,269.198 490.800 C 268.714 492.230,268.220 493.670,268.101 494.000 C 266.925 497.253,264.287 504.855,264.006 505.800 C 263.810 506.460,263.001 508.800,262.208 511.000 C 261.416 513.200,260.144 516.890,259.381 519.200 C 258.619 521.510,257.830 523.760,257.626 524.200 C 257.423 524.640,256.883 526.130,256.426 527.510 C 255.968 528.891,255.434 530.331,255.238 530.710 C 255.042 531.090,254.551 532.210,254.146 533.200 C 248.811 546.255,230.265 552.090,224.379 542.565 C 223.270 540.772,223.154 536.022,224.171 534.056 C 224.517 533.387,224.800 532.619,224.800 532.349 C 224.800 532.079,225.355 530.315,226.033 528.429 C 226.712 526.543,227.717 523.740,228.267 522.200 C 229.921 517.569,229.992 517.413,230.921 516.331 C 234.539 512.121,238.385 516.065,235.747 521.280 C 233.983 524.766,236.693 529.016,240.989 529.500 C 246.623 530.135,250.780 523.893,250.319 515.491 C 249.421 499.139,224.607 497.509,216.910 513.297 C 216.218 514.716,214.819 518.379,213.800 521.438 C 212.781 524.497,211.799 527.360,211.616 527.800 C 210.426 530.670,208.800 536.368,208.800 537.667 C 208.800 541.009,202.175 547.215,198.639 547.187 C 194.850 547.156,194.178 544.998,196.214 539.400 C 197.014 537.200,198.114 534.050,198.658 532.400 C 199.202 530.750,199.802 529.040,199.991 528.600 C 200.180 528.160,200.543 527.170,200.798 526.400 C 201.054 525.630,202.419 521.690,203.831 517.644 C 207.799 506.283,206.858 502.400,200.139 502.400 C 195.815 502.400,193.785 504.729,191.072 512.804 C 190.297 515.112,189.180 518.350,188.590 520.000 C 181.641 539.433,180.651 542.835,180.996 546.092 C 182.345 558.854,199.899 563.213,211.344 553.628 C 213.518 551.806,213.693 551.748,214.409 552.611 C 215.448 553.863,218.369 555.580,222.200 557.190 C 228.102 559.671,242.832 558.900,246.681 555.908 C 247.289 555.435,248.657 555.852,248.944 556.597 C 249.689 558.540,254.648 559.353,257.650 558.025 C 261.048 556.522,261.959 555.024,264.604 546.600 C 265.639 543.300,266.737 539.921,267.043 539.092 C 267.350 538.262,267.600 537.249,267.600 536.841 C 267.600 535.305,268.668 535.006,270.601 536.000 C 272.158 536.801,272.776 536.889,275.545 536.699 L 278.710 536.482 277.708 539.741 C 275.781 546.010,276.497 551.467,279.693 554.880 C 285.073 560.624,297.637 559.981,305.272 553.571 C 307.376 551.805,308.340 551.628,309.411 552.813 C 313.692 557.542,326.661 560.062,336.200 558.018 C 341.848 556.807,342.891 556.395,349.979 552.562 C 350.896 552.067,351.088 552.157,353.026 553.989 C 361.000 561.530,375.487 560.164,384.601 551.011 C 388.578 547.017,394.400 537.539,394.400 535.059 C 394.400 534.723,394.580 534.336,394.800 534.200 C 395.670 533.662,395.238 530.616,394.100 529.261 C 391.296 525.925,385.679 527.060,383.515 531.400 C 383.186 532.060,382.252 533.950,381.441 535.600 C 379.236 540.081,379.024 540.397,376.525 542.909 C 371.338 548.123,364.687 548.745,362.528 544.218 C 361.766 542.620,361.955 541.831,365.403 532.200 C 366.427 529.340,367.505 526.280,367.797 525.400 C 371.950 512.921,371.476 513.614,375.850 513.606 C 386.705 513.586,390.153 503.212,379.649 502.177 L 376.707 501.887 376.944 500.152 C 377.075 499.198,377.359 498.099,377.574 497.709 C 377.790 497.319,378.594 495.110,379.362 492.800 C 381.373 486.754,381.646 485.967,382.309 484.318 C 384.913 477.842,377.433 472.186,371.984 476.511 C 370.515 477.677,369.192 480.104,367.684 484.400 C 366.796 486.930,365.225 491.340,364.192 494.200 C 363.159 497.060,362.218 499.760,362.100 500.200 C 361.706 501.663,361.211 501.896,357.893 502.182 C 352.665 502.632,350.622 504.085,350.180 507.666 C 349.744 511.197,351.188 513.117,354.563 513.497 C 357.376 513.814,357.461 513.087,353.197 525.200 C 351.842 529.050,350.585 532.681,350.404 533.268 C 345.883 547.920,318.000 553.269,318.000 539.485 C 318.000 535.718,319.052 534.797,321.749 536.204 C 335.167 543.202,352.691 528.569,348.339 514.000 C 344.352 500.656,325.209 497.997,314.925 509.360 C 313.206 511.260,312.312 512.711,310.836 516.000 C 310.283 517.233,306.253 528.852,305.148 532.400 C 302.291 541.576,297.783 547.130,293.149 547.183 C 290.463 547.214,290.275 545.623,292.306 540.056 C 293.242 537.492,293.189 532.548,292.208 530.907 L 291.436 529.614 293.883 527.220 C 303.924 517.394,298.025 502.364,284.127 502.364 C 279.989 502.364,279.642 502.158,280.431 500.169 C 281.777 496.777,285.713 485.163,286.029 483.652 C 287.245 477.829,282.410 473.339,277.349 475.591 M143.441 477.085 C 139.297 477.727,136.589 482.057,138.171 485.514 C 139.515 488.453,139.971 488.585,149.300 488.722 C 158.971 488.865,158.305 488.378,156.416 493.924 C 154.478 499.617,152.988 503.774,152.733 504.200 C 152.602 504.420,152.360 505.224,152.196 505.987 C 152.032 506.750,151.756 507.650,151.581 507.987 C 151.407 508.324,150.872 509.770,150.393 511.200 C 149.914 512.630,149.374 514.160,149.194 514.600 C 149.014 515.040,148.773 515.760,148.657 516.200 C 148.542 516.640,147.798 518.800,147.004 521.000 C 146.210 523.200,144.858 527.070,144.001 529.600 C 141.440 537.157,140.393 540.155,140.020 541.000 C 139.826 541.440,139.571 542.160,139.455 542.600 C 139.338 543.040,138.603 545.269,137.821 547.554 C 135.326 554.846,137.384 558.709,143.800 558.773 C 147.619 558.811,152.400 554.451,152.400 550.931 C 152.400 550.633,152.566 550.077,152.768 549.695 C 152.970 549.313,153.528 547.830,154.007 546.400 C 154.486 544.970,155.030 543.440,155.215 543.000 C 155.401 542.560,156.225 540.220,157.046 537.800 C 158.285 534.148,159.776 529.892,160.900 526.800 C 161.020 526.470,161.514 525.030,161.998 523.600 C 162.482 522.170,163.030 520.640,163.215 520.200 C 163.401 519.760,164.000 518.050,164.547 516.400 C 165.093 514.750,166.556 510.520,167.797 507.000 C 169.038 503.480,170.502 499.250,171.050 497.600 C 171.599 495.950,172.193 494.240,172.370 493.800 C 172.547 493.360,173.037 492.100,173.459 491.000 L 174.225 489.000 183.613 488.785 C 191.371 488.607,193.211 488.453,194.215 487.898 C 198.062 485.771,198.541 480.382,195.101 477.928 L 193.800 477.000 169.200 476.953 C 155.670 476.927,144.078 476.986,143.441 477.085 M205.763 477.844 C 199.327 480.127,198.548 488.322,204.428 491.900 C 207.197 493.585,209.066 493.613,211.857 492.013 C 220.001 487.342,214.572 474.719,205.763 477.844 M55.095 490.725 C 57.239 492.252,57.853 494.603,57.012 498.064 C 55.692 503.496,52.722 507.244,50.472 506.318 C 48.014 505.307,42.418 505.718,39.636 507.113 C 38.226 507.821,37.011 508.400,36.936 508.400 C 36.377 508.400,38.046 502.662,39.903 498.200 C 41.593 494.137,44.396 491.506,48.800 489.847 C 50.168 489.331,53.861 489.846,55.095 490.725 M283.557 513.948 C 285.202 514.409,286.054 516.547,285.367 518.493 C 284.137 521.978,281.854 523.200,276.570 523.200 L 272.700 523.200 272.940 522.000 C 274.067 516.367,278.955 512.659,283.557 513.948 M333.398 514.798 C 338.521 519.611,331.422 527.363,324.448 524.573 L 322.880 523.945 323.677 521.673 C 326.271 514.279,330.022 511.627,333.398 514.798 "
            stroke="none"
            fill={logoParams.fill}
            fillRule="evenodd"
          ></path>
          <path
            id="path1"
            d="M0.000 285.200 L 0.000 570.400 200.000 570.400 L 400.000 570.400 400.000 285.200 L 400.000 0.000 200.000 0.000 L 0.000 0.000 0.000 285.200 M149.165 17.200 C 152.072 18.848,152.352 19.496,152.976 26.014 C 153.280 29.200,153.714 32.256,153.940 32.804 C 154.166 33.352,154.749 35.150,155.237 36.800 C 156.012 39.423,156.830 41.234,158.885 44.876 C 162.329 50.978,170.340 58.257,176.685 61.050 C 177.958 61.610,179.540 62.313,180.200 62.613 C 187.113 65.749,202.325 65.850,209.400 62.806 C 216.910 59.576,221.505 56.516,225.961 51.778 C 228.130 49.473,232.800 42.959,232.800 42.240 C 232.800 42.109,233.309 40.877,233.931 39.501 C 235.964 35.003,236.598 32.153,237.175 24.920 C 237.535 20.411,238.578 18.401,241.343 16.888 C 243.044 15.957,303.334 15.824,307.400 16.742 C 323.343 20.342,333.123 30.150,335.786 45.209 C 336.678 50.253,336.698 407.497,335.807 412.935 C 333.980 424.077,326.341 434.480,317.000 438.547 C 316.120 438.930,314.950 439.479,314.400 439.766 C 313.193 440.396,309.218 441.383,305.400 442.000 C 300.018 442.869,242.945 442.371,241.066 441.438 C 238.494 440.161,237.535 438.137,237.169 433.215 C 235.147 406.030,211.196 387.910,185.600 394.199 C 184.170 394.551,182.485 394.943,181.855 395.071 C 179.605 395.529,171.747 399.861,168.758 402.291 C 159.572 409.760,153.726 420.854,152.999 432.200 C 152.580 438.744,151.807 440.300,148.251 441.763 C 146.305 442.563,89.783 442.733,84.707 441.953 C 68.244 439.425,56.098 427.591,53.648 411.693 C 53.005 407.521,53.009 49.675,53.652 46.224 C 56.089 33.145,66.113 21.260,77.200 18.304 C 85.433 16.109,85.831 16.088,118.000 16.146 L 147.400 16.200 149.165 17.200 M81.800 31.339 C 74.391 34.258,70.017 38.665,67.906 45.336 L 67.000 48.200 67.079 229.200 L 67.159 410.200 68.159 413.250 C 69.960 418.742,76.912 426.400,80.098 426.400 C 80.396 426.400,80.811 426.565,81.020 426.768 C 82.317 428.023,86.242 428.199,112.784 428.200 L 139.367 428.200 139.709 426.800 C 139.898 426.030,140.299 424.320,140.602 423.000 C 141.874 417.451,142.199 416.471,144.224 412.089 C 144.761 410.928,145.200 409.899,145.200 409.803 C 145.200 409.707,146.044 408.227,147.075 406.514 C 152.687 397.194,162.448 388.419,171.614 384.454 C 172.816 383.934,174.117 383.346,174.505 383.148 C 178.217 381.248,188.873 379.203,195.073 379.201 C 201.563 379.199,213.300 381.473,215.800 383.217 C 216.020 383.370,216.844 383.703,217.631 383.956 C 223.899 385.973,235.002 394.807,240.162 401.882 C 245.096 408.649,250.279 420.917,250.379 426.067 C 250.428 428.583,248.307 428.400,277.410 428.400 C 300.354 428.400,304.271 428.314,306.419 427.764 C 314.209 425.768,319.079 421.150,321.776 413.200 L 322.794 410.200 322.797 229.132 L 322.800 48.064 321.556 44.532 C 319.115 37.598,314.727 33.373,307.294 30.801 C 305.034 30.019,304.141 29.997,277.782 30.097 L 250.600 30.200 250.473 31.400 C 250.311 32.936,248.887 38.753,248.416 39.800 C 248.219 40.240,247.670 41.770,247.197 43.200 C 243.969 52.953,233.563 65.534,224.394 70.767 C 218.655 74.043,213.319 76.219,207.000 77.861 C 202.668 78.987,187.098 78.891,182.600 77.711 C 176.365 76.075,173.323 74.872,167.817 71.866 C 159.308 67.219,152.090 60.269,147.066 51.886 C 146.040 50.173,145.200 48.678,145.200 48.563 C 145.200 48.449,144.664 47.275,144.009 45.955 C 142.273 42.455,141.142 38.711,139.675 31.600 L 139.386 30.200 112.193 30.139 L 85.000 30.079 81.800 31.339 M250.700 74.937 C 254.036 77.043,256.110 80.191,257.604 85.413 C 258.386 88.148,258.400 89.509,258.400 161.670 L 258.400 235.143 259.809 236.637 C 261.893 238.847,261.800 236.004,261.800 297.200 C 261.800 359.261,261.894 356.493,259.715 358.729 C 259.432 359.019,259.200 359.402,259.200 359.578 C 259.200 361.280,253.414 365.018,249.896 365.589 C 237.608 367.583,229.662 363.196,227.784 353.381 C 227.289 350.795,227.203 341.987,227.222 295.665 C 227.246 234.406,227.033 238.751,230.136 236.242 L 231.672 235.000 238.436 234.866 L 245.200 234.733 245.200 229.166 C 245.200 224.131,245.133 223.600,244.500 223.601 C 227.069 223.624,223.041 222.168,219.132 214.435 L 217.800 211.800 217.687 165.200 C 217.565 114.828,217.456 117.824,219.582 113.000 C 219.969 112.120,220.717 110.412,221.243 109.205 C 221.769 107.997,222.936 105.567,223.836 103.805 C 226.677 98.242,230.900 90.216,231.205 89.800 C 231.367 89.580,232.127 88.230,232.896 86.800 C 233.664 85.370,234.669 83.570,235.130 82.800 C 235.590 82.030,236.262 80.819,236.624 80.110 C 239.564 74.343,246.008 71.975,250.700 74.937 M244.207 93.818 C 243.771 94.468,243.214 95.360,242.969 95.800 C 239.159 102.659,233.518 113.696,232.004 117.254 L 230.800 120.084 230.800 164.419 L 230.800 208.755 231.689 209.377 C 233.322 210.521,243.804 210.270,244.592 209.068 C 245.134 208.242,245.191 201.604,245.101 150.386 C 245.000 92.656,245.000 92.636,244.207 93.818 M158.726 107.192 C 161.966 109.540,161.784 108.289,161.930 129.182 C 162.019 142.040,161.919 148.443,161.606 149.880 C 160.332 155.713,152.179 156.575,149.386 151.172 C 148.484 149.428,148.516 111.709,149.421 109.959 C 151.399 106.134,155.558 104.898,158.726 107.192 M177.126 107.192 C 180.392 109.558,180.200 108.104,180.200 130.448 L 180.200 150.331 178.983 152.065 C 176.265 155.939,169.835 155.498,167.834 151.302 C 166.863 149.267,166.880 111.779,167.852 109.900 C 169.815 106.104,173.955 104.895,177.126 107.192 M138.674 107.460 C 141.994 109.612,141.772 107.094,142.022 145.400 C 142.184 170.283,142.374 179.883,142.731 181.200 C 144.641 188.245,147.676 192.396,152.726 194.867 L 155.400 196.175 164.600 196.160 L 173.800 196.144 176.400 194.884 C 181.311 192.506,183.924 188.819,186.076 181.232 C 186.915 178.272,186.941 177.407,187.168 144.600 C 187.398 111.383,187.455 110.115,188.780 108.771 C 192.418 105.081,197.401 105.693,199.654 110.106 C 200.567 111.895,200.590 176.126,199.679 181.000 C 196.699 196.948,188.491 206.185,174.658 209.161 L 171.400 209.862 171.400 222.231 L 171.400 234.600 174.499 234.852 C 178.223 235.154,180.041 236.295,181.234 239.080 C 182.334 241.646,182.440 349.305,181.347 354.121 C 179.969 360.189,175.639 364.487,169.818 365.563 C 165.468 366.367,158.218 365.912,155.942 364.691 C 152.074 362.617,149.615 359.930,148.173 356.200 C 146.939 353.008,146.965 240.122,148.200 238.072 C 149.458 235.984,151.326 235.061,154.786 234.814 L 157.800 234.600 157.800 222.235 L 157.800 209.870 155.200 209.340 C 141.303 206.508,133.254 198.181,129.741 183.000 C 129.050 180.016,129.000 177.450,129.000 144.926 L 129.000 110.053 130.200 108.792 C 132.657 106.209,135.948 105.692,138.674 107.460 M160.400 299.738 C 160.400 351.101,160.406 351.481,161.206 352.206 C 162.354 353.245,166.074 353.506,167.395 352.640 L 168.400 351.982 168.400 299.991 L 168.400 248.000 164.400 248.000 L 160.400 248.000 160.400 299.738 M240.800 299.977 L 240.800 351.955 241.689 352.577 C 243.026 353.513,246.442 353.397,247.746 352.371 L 248.800 351.542 248.800 299.771 L 248.800 248.000 244.800 248.000 L 240.800 248.000 240.800 299.977 M102.286 466.239 C 111.812 469.421,109.908 484.328,99.515 487.931 C 94.558 489.649,88.716 489.320,87.496 487.255 C 85.908 484.567,87.585 482.003,90.936 481.995 C 95.023 481.984,95.610 481.364,93.663 479.114 C 88.290 472.903,94.496 463.637,102.286 466.239 M40.600 475.556 C 41.480 475.962,42.636 476.768,43.170 477.347 C 44.273 478.545,44.855 478.640,46.114 477.829 C 54.652 472.331,70.341 478.836,73.056 489.000 C 74.738 495.296,71.196 506.079,65.554 511.843 L 63.945 513.486 65.178 515.429 C 66.766 517.933,67.195 519.548,67.198 523.027 C 67.201 526.772,66.637 528.640,62.380 539.000 C 60.098 544.555,60.369 546.400,63.470 546.400 C 68.299 546.400,72.364 542.066,76.220 532.806 C 79.393 525.188,83.852 523.320,88.239 527.772 C 89.121 528.666,89.292 533.280,88.503 534.881 C 88.253 535.386,87.427 537.274,86.666 539.076 C 81.391 551.563,72.048 558.800,61.200 558.800 C 53.821 558.800,48.809 556.277,46.042 551.168 C 43.913 547.237,44.362 542.609,47.689 534.200 C 51.369 524.902,50.562 520.954,45.276 522.383 C 39.986 523.814,37.052 523.218,34.589 520.213 C 32.985 518.255,32.599 518.202,32.291 519.895 C 32.181 520.503,31.702 521.990,31.226 523.200 C 30.751 524.410,29.998 526.480,29.553 527.800 C 29.107 529.120,28.593 530.560,28.410 531.000 C 28.228 531.440,27.683 532.970,27.200 534.400 C 26.717 535.830,26.172 537.360,25.990 537.800 C 25.807 538.240,25.258 539.770,24.771 541.200 C 23.139 545.986,22.780 546.995,22.423 547.800 C 22.227 548.240,21.974 548.960,21.860 549.400 C 20.242 555.658,16.948 558.834,12.146 558.768 C 7.896 558.709,4.539 555.740,4.948 552.400 C 5.178 550.517,5.966 547.529,6.367 547.016 C 6.546 546.787,6.789 546.150,6.906 545.600 C 7.024 545.050,7.507 543.610,7.980 542.400 C 8.452 541.190,9.265 538.940,9.785 537.400 C 11.357 532.745,14.041 525.052,14.390 524.200 C 14.772 523.266,16.766 517.657,17.944 514.200 C 18.394 512.880,19.147 510.810,19.616 509.600 C 20.085 508.390,20.622 506.860,20.809 506.200 C 20.996 505.540,21.986 502.660,23.008 499.800 C 24.031 496.940,25.051 493.970,25.275 493.200 C 25.500 492.430,25.820 491.620,25.988 491.400 C 26.156 491.180,26.389 490.550,26.506 490.000 C 26.624 489.450,27.107 488.010,27.579 486.800 C 28.052 485.590,28.813 483.480,29.272 482.110 C 31.202 476.347,36.132 473.494,40.600 475.556 M282.458 475.578 C 286.370 477.309,287.291 481.556,285.021 487.400 C 284.423 488.940,283.844 490.560,283.734 491.000 C 283.623 491.440,283.373 492.160,283.177 492.600 C 282.609 493.875,280.312 500.941,280.253 501.593 C 280.210 502.077,280.931 502.196,284.200 502.240 C 298.103 502.429,303.911 517.410,293.902 527.265 C 291.569 529.562,291.531 529.634,292.152 530.583 C 293.583 532.766,293.423 536.387,291.619 542.715 C 290.619 546.221,290.907 547.200,292.939 547.200 C 297.330 547.200,302.259 541.610,304.402 534.200 C 304.593 533.540,305.580 530.660,306.596 527.800 C 307.612 524.940,308.880 521.284,309.413 519.675 C 313.277 508.019,320.452 502.246,331.029 502.283 C 340.245 502.316,346.539 506.754,348.602 514.672 C 352.385 529.198,334.703 543.169,321.349 536.204 C 317.404 534.147,316.397 540.857,320.142 544.247 C 326.479 549.985,344.489 546.080,348.038 538.200 C 348.236 537.760,348.552 537.130,348.740 536.800 C 349.304 535.813,350.314 533.456,350.540 532.600 C 350.657 532.160,351.406 530.000,352.205 527.800 C 353.004 525.600,353.750 523.440,353.862 523.000 C 353.975 522.560,354.227 521.840,354.422 521.400 C 357.033 515.521,357.067 513.619,354.559 513.606 C 346.704 513.567,349.069 502.892,357.084 502.204 C 361.120 501.858,361.511 501.731,361.803 500.680 C 361.937 500.196,362.294 499.170,362.596 498.400 C 362.898 497.630,363.717 495.380,364.416 493.400 C 365.870 489.282,365.747 489.624,367.278 485.400 C 367.916 483.640,368.613 481.660,368.828 481.000 C 370.875 474.700,378.111 472.847,381.641 477.720 C 383.275 479.976,383.182 481.911,381.168 487.600 C 380.272 490.130,379.447 492.560,379.336 493.000 C 379.224 493.440,378.981 494.160,378.795 494.600 C 378.037 496.395,376.800 500.452,376.800 501.144 C 376.800 501.778,377.226 501.917,379.763 502.109 C 390.103 502.891,386.976 513.475,376.376 513.570 C 372.236 513.606,371.898 513.826,370.794 517.200 C 370.326 518.630,369.773 520.160,369.565 520.600 C 369.358 521.040,369.025 521.940,368.826 522.600 C 368.627 523.260,367.632 526.140,366.614 529.000 C 361.986 542.002,361.843 542.548,362.630 544.208 C 366.001 551.310,377.031 545.826,381.972 534.592 C 384.219 529.485,385.652 527.864,388.323 527.413 C 393.385 526.558,396.469 530.321,394.582 535.051 C 393.529 537.691,393.333 538.124,391.986 540.800 C 383.283 558.081,365.363 564.252,353.037 554.212 C 350.525 552.166,350.335 552.117,348.862 553.130 C 338.938 559.950,322.182 560.764,312.345 554.903 C 311.102 554.163,309.768 553.207,309.381 552.779 C 308.686 552.011,306.993 551.709,306.733 552.307 C 306.089 553.791,300.528 556.994,296.805 558.025 C 282.416 562.013,273.537 553.402,277.681 539.479 C 278.644 536.241,278.740 536.394,276.022 536.828 C 273.540 537.225,272.424 537.039,270.299 535.874 C 268.703 535.000,267.649 535.512,267.613 537.179 C 267.606 537.497,266.788 540.197,265.796 543.179 C 264.804 546.161,263.683 549.590,263.306 550.800 C 261.641 556.138,258.613 558.800,254.208 558.800 C 252.019 558.800,248.800 557.386,248.800 556.424 C 248.800 555.730,247.393 555.774,245.400 556.531 C 234.947 560.500,222.108 559.197,215.400 553.486 C 213.844 552.162,213.022 552.036,212.200 552.997 C 204.696 561.772,186.909 560.284,182.127 550.481 C 180.283 546.700,181.366 536.592,183.999 533.000 C 184.161 532.780,184.393 532.150,184.516 531.600 C 184.639 531.050,185.396 528.800,186.199 526.600 C 187.001 524.400,187.750 522.240,187.862 521.800 C 187.975 521.360,188.219 520.640,188.406 520.200 C 188.821 519.219,191.992 510.108,192.303 509.000 C 193.784 503.724,199.717 500.673,203.700 503.140 C 207.332 505.389,207.284 508.883,203.483 518.800 C 203.356 519.130,202.806 520.750,202.261 522.400 C 201.715 524.050,200.709 526.930,200.024 528.800 C 194.762 543.183,194.476 544.354,195.836 545.969 C 198.753 549.436,207.319 543.910,208.604 537.733 C 209.618 532.858,214.808 517.610,216.946 513.228 C 224.881 496.958,250.377 499.321,250.406 516.329 C 250.421 525.238,245.470 531.304,239.766 529.368 C 235.785 528.016,234.089 524.350,235.831 520.859 C 236.786 518.944,236.782 516.069,235.824 515.368 C 233.386 513.585,230.417 515.901,228.843 520.813 C 228.316 522.456,227.731 523.971,227.543 524.180 C 227.354 524.389,227.200 524.878,227.200 525.266 C 227.200 525.655,226.948 526.564,226.640 527.286 C 222.070 538.013,222.516 543.037,228.289 545.861 C 236.723 549.987,249.079 544.071,253.898 533.600 C 255.458 530.212,256.000 528.879,256.000 528.434 C 256.000 528.189,256.166 527.677,256.368 527.295 C 256.570 526.913,257.129 525.430,257.609 524.000 C 258.089 522.570,258.580 521.130,258.699 520.800 C 259.875 517.547,262.513 509.945,262.794 509.000 C 262.990 508.340,263.799 506.000,264.593 503.800 C 265.386 501.600,266.731 497.730,267.583 495.200 C 272.214 481.438,273.320 478.773,275.068 477.148 C 277.665 474.733,279.613 474.320,282.458 475.578 M193.874 477.225 C 198.135 478.835,198.783 484.362,195.064 487.361 L 193.528 488.600 184.142 488.727 L 174.756 488.854 174.019 490.065 C 173.614 490.732,172.893 492.474,172.416 493.938 C 171.940 495.402,171.395 496.960,171.204 497.400 C 171.013 497.840,170.479 499.370,170.017 500.800 C 169.555 502.230,169.017 503.760,168.822 504.200 C 168.627 504.640,168.377 505.360,168.268 505.800 C 168.049 506.678,167.268 508.944,166.751 510.200 C 166.237 511.450,165.169 514.516,164.940 515.400 C 164.826 515.840,164.569 516.560,164.368 517.000 C 164.168 517.440,163.652 518.880,163.222 520.200 C 162.793 521.520,161.791 524.400,160.996 526.600 C 160.201 528.800,159.397 531.140,159.210 531.800 C 159.022 532.460,158.478 533.990,158.001 535.200 C 157.523 536.410,157.043 537.760,156.933 538.200 C 156.823 538.640,156.569 539.360,156.369 539.800 C 156.168 540.240,155.564 541.950,155.026 543.600 C 152.209 552.237,151.538 553.913,150.097 555.904 C 146.224 561.255,136.535 558.929,136.632 552.671 C 136.672 550.147,136.515 550.668,141.305 537.200 C 141.422 536.870,141.915 535.430,142.400 534.000 C 142.885 532.570,143.380 531.130,143.499 530.800 C 144.682 527.527,147.313 519.945,147.593 519.000 C 147.789 518.340,148.780 515.460,149.796 512.600 C 150.812 509.740,152.074 506.140,152.601 504.600 C 153.127 503.060,154.209 500.000,155.004 497.800 C 156.560 493.494,157.144 491.630,157.478 489.900 L 157.691 488.800 149.538 488.800 C 141.533 488.800,141.359 488.782,139.935 487.814 C 135.714 484.946,137.349 478.826,142.777 477.179 C 144.413 476.683,192.552 476.726,193.874 477.225 M212.286 478.653 C 217.511 481.889,217.110 489.589,211.570 492.415 C 204.773 495.883,197.483 487.668,201.576 481.151 C 203.985 477.316,208.447 476.275,212.286 478.653 M49.200 489.878 C 46.438 490.344,40.400 495.332,40.400 497.148 C 40.400 497.528,40.237 498.011,40.037 498.220 C 39.838 498.429,39.490 499.230,39.266 500.000 C 39.041 500.770,38.375 502.706,37.786 504.302 C 36.322 508.272,36.582 508.756,39.342 507.198 C 41.984 505.707,45.602 505.260,49.241 505.976 C 52.192 506.557,53.056 506.119,54.937 503.095 C 59.772 495.321,56.849 488.587,49.200 489.878 M279.668 513.985 C 276.851 514.677,273.461 518.728,273.130 521.800 L 273.000 523.000 276.800 523.056 C 280.013 523.102,280.816 522.981,282.000 522.270 C 287.839 518.765,286.053 512.416,279.668 513.985 M328.931 514.055 C 326.904 514.617,323.200 520.798,323.200 523.618 C 323.200 524.840,327.946 525.579,330.440 524.746 C 337.157 522.501,335.700 512.181,328.931 514.055 "
            stroke="none"
            fill={logoParams.fill}
            fillRule="evenodd"
            fillOpacity="0"
          ></path>
          <path
            id="path2"
            d="M102.700 16.300 C 110.675 16.360,123.725 16.360,131.700 16.300 C 139.675 16.239,133.150 16.190,117.200 16.190 C 101.250 16.190,94.725 16.239,102.700 16.300 M258.929 16.300 C 267.031 16.360,280.171 16.360,288.129 16.300 C 296.088 16.239,289.460 16.190,273.400 16.190 C 257.340 16.190,250.828 16.239,258.929 16.300 M243.800 73.850 C 241.100 74.539,238.154 77.109,236.624 80.110 C 236.262 80.819,235.590 82.030,235.130 82.800 C 234.669 83.570,233.664 85.370,232.896 86.800 C 232.127 88.230,231.367 89.580,231.205 89.800 C 230.900 90.216,226.677 98.242,223.836 103.805 C 222.936 105.567,221.769 107.997,221.243 109.205 C 220.717 110.412,219.969 112.120,219.582 113.000 C 217.456 117.824,217.565 114.828,217.687 165.200 L 217.800 211.800 219.132 214.435 C 223.041 222.168,227.069 223.624,244.500 223.601 C 245.133 223.600,245.200 224.131,245.200 229.166 L 245.200 234.733 238.436 234.866 L 231.672 235.000 230.136 236.242 C 227.033 238.751,227.246 234.406,227.222 295.665 C 227.203 341.987,227.289 350.795,227.784 353.381 C 229.662 363.196,237.608 367.583,249.896 365.589 C 253.414 365.018,259.200 361.280,259.200 359.578 C 259.200 359.402,259.432 359.019,259.715 358.729 C 261.894 356.493,261.800 359.261,261.800 297.200 C 261.800 236.004,261.893 238.847,259.809 236.637 L 258.400 235.143 258.400 161.670 C 258.400 80.377,258.579 86.397,256.001 80.912 C 253.642 75.894,248.181 72.733,243.800 73.850 M244.592 209.068 C 243.804 210.270,233.322 210.521,231.689 209.377 L 230.800 208.755 230.800 164.419 L 230.800 120.084 232.004 117.254 C 233.518 113.696,239.159 102.659,242.969 95.800 C 245.192 91.799,244.989 86.619,245.101 150.386 C 245.191 201.604,245.134 208.242,244.592 209.068 M152.631 106.711 C 151.031 107.654,150.155 108.541,149.421 109.959 C 148.516 111.709,148.484 149.428,149.386 151.172 C 152.179 156.575,160.332 155.713,161.606 149.880 C 162.430 146.101,161.976 110.833,161.086 109.474 C 159.089 106.428,155.243 105.171,152.631 106.711 M170.947 106.748 C 169.338 107.648,168.658 108.341,167.852 109.900 C 166.880 111.779,166.863 149.267,167.834 151.302 C 169.835 155.498,176.265 155.939,178.983 152.065 L 180.200 150.331 180.200 130.448 C 180.200 108.104,180.392 109.558,177.126 107.192 C 175.200 105.797,172.935 105.634,170.947 106.748 M132.600 106.998 C 131.940 107.291,130.860 108.098,130.200 108.792 L 129.000 110.053 129.000 144.926 C 129.000 177.450,129.050 180.016,129.741 183.000 C 133.254 198.181,141.303 206.508,155.200 209.340 L 157.800 209.870 157.800 222.235 L 157.800 234.600 154.786 234.814 C 151.326 235.061,149.458 235.984,148.200 238.072 C 146.965 240.122,146.939 353.008,148.173 356.200 C 149.615 359.930,152.074 362.617,155.942 364.691 C 158.218 365.912,165.468 366.367,169.818 365.563 C 175.639 364.487,179.969 360.189,181.347 354.121 C 182.440 349.305,182.334 241.646,181.234 239.080 C 180.041 236.295,178.223 235.154,174.499 234.852 L 171.400 234.600 171.400 222.231 L 171.400 209.862 174.658 209.161 C 188.491 206.185,196.699 196.948,199.679 181.000 C 200.590 176.126,200.567 111.895,199.654 110.106 C 197.401 105.693,192.418 105.081,188.780 108.771 C 187.455 110.115,187.398 111.383,187.168 144.600 C 186.941 177.407,186.915 178.272,186.076 181.232 C 183.924 188.819,181.311 192.506,176.400 194.884 L 173.800 196.144 164.600 196.160 L 155.400 196.175 152.726 194.867 C 147.676 192.396,144.641 188.245,142.731 181.200 C 142.374 179.883,142.184 170.283,142.022 145.400 C 141.812 113.255,141.759 111.321,141.054 109.960 C 139.510 106.977,135.675 105.633,132.600 106.998 M168.400 299.991 L 168.400 351.982 167.395 352.640 C 166.074 353.506,162.354 353.245,161.206 352.206 C 160.406 351.481,160.400 351.101,160.400 299.738 L 160.400 248.000 164.400 248.000 L 168.400 248.000 168.400 299.991 M248.800 299.771 L 248.800 351.542 247.746 352.371 C 246.442 353.397,243.026 353.513,241.689 352.577 L 240.800 351.955 240.800 299.977 L 240.800 248.000 244.800 248.000 L 248.800 248.000 248.800 299.771 M66.994 357.600 C 66.994 385.430,67.042 396.815,67.100 382.900 C 67.158 368.985,67.158 346.215,67.100 332.300 C 67.042 318.385,66.994 329.770,66.994 357.600 M91.905 489.083 C 92.402 489.179,93.122 489.175,93.505 489.075 C 93.887 488.975,93.480 488.896,92.600 488.901 C 91.720 488.905,91.407 488.987,91.905 489.083 M330.100 502.276 C 330.485 502.376,331.115 502.376,331.500 502.276 C 331.885 502.175,331.570 502.093,330.800 502.093 C 330.030 502.093,329.715 502.175,330.100 502.276 M276.100 523.076 C 276.485 523.176,277.115 523.176,277.500 523.076 C 277.885 522.975,277.570 522.893,276.800 522.893 C 276.030 522.893,275.715 522.975,276.100 523.076 M350.800 552.125 C 350.800 552.194,351.385 552.779,352.100 553.425 L 353.400 554.600 352.225 553.300 C 351.130 552.088,350.800 551.816,350.800 552.125 "
            stroke="none"
            fill="#fcd409"
            fillRule="evenodd"
          ></path>
        </g>
      </svg>
    </>
  );
}
