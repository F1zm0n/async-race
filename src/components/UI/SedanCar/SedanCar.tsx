import { FC } from 'react';
import classes from './SedanCar.module.css';

interface CarModelProps {
  color: string;
  // eslint-disable-next-line react/require-default-props
  width?: number;
  // eslint-disable-next-line react/require-default-props
  height?: number;
}

const SedanCar: FC<CarModelProps> = ({ color, width = 70, height = 30 }) => {
  return (
    <svg
      className={classes.car}
      viewBox="186.425 228.49 102.295 54.493"
      xmlns="http://www.w3.org/2000/svg"
      width={`${width}pt`}
      height={`${height}pt`}>
      <g
        transform="matrix(0, 0.006914, 0.006881, 0, 186.31243, 220.38895)"
        fill={color}>
        <path d="M4580 14853 c-578 -39 -938 -107 -1283 -244 -391 -156 -685 -382 -895 -692 -291 -428 -452 -997 -513 -1812 -20 -254 -17 -1088 5 -1627 11 -245 16 -453 13 -462 -4 -11 -19 -16 -45 -16 -21 0 -74 -9 -118 -20 -216 -55 -361 -195 -371 -360 -5 -82 17 -123 75 -141 46 -13 123 4 327 75 71 25 132 43 136 41 3 -3 7 -398 8 -878 2 -979 4 -951 -70 -1120 -55 -124 -72 -202 -67 -312 3 -75 9 -101 35 -155 16 -36 44 -82 62 -104 l31 -39 0 -721 c0 -396 3 -919 6 -1161 l7 -440 -31 -38 c-68 -85 -106 -236 -106 -432 0 -124 2 -147 23 -199 15 -37 40 -75 67 -102 l44 -42 -7 -154 -6 -155 73 -61 c103 -87 140 -103 252 -108 51 -3 99 -1 106 4 11 7 11 22 1 77 -12 72 -5 313 10 328 6 6 172 -53 360 -128 l43 -18 -5 -141 c-6 -190 -43 -293 -117 -331 -84 -43 -172 3 -238 124 l-30 53 -108 2 c-127 2 -180 21 -276 99 -31 26 -60 47 -64 47 -10 0 3 -832 16 -1040 33 -539 96 -854 224 -1125 88 -186 205 -343 345 -464 116 -99 122 -90 15 21 -56 57 -136 151 -179 209 -109 147 -246 431 -257 534 l-3 30 60 -1 c79 -1 151 -38 226 -114 70 -72 125 -155 230 -350 65 -121 97 -168 142 -212 73 -71 224 -172 369 -246 123 -63 148 -87 155 -154 8 -73 -4 -76 -151 -28 -69 22 -172 61 -228 86 -136 60 -144 62 -73 20 208 -124 657 -261 960 -295 274 -30 431 -36 1010 -36 932 1 1496 43 1960 146 395 88 609 211 851 487 205 235 325 521 409 977 51 281 57 371 62 983 3 314 2 572 -1 572 -4 0 -31 -20 -62 -45 -92 -75 -127 -89 -224 -90 -47 0 -104 4 -126 8 l-41 8 -31 -65 c-77 -165 -179 -221 -257 -143 -52 52 -75 143 -81 317 -3 80 -2 150 3 156 6 9 377 134 397 134 12 0 6 -210 -9 -286 -10 -54 -12 -81 -5 -88 6 -6 59 -11 123 -11 128 0 142 6 254 99 l62 51 0 156 c1 169 5 186 62 280 45 72 67 136 78 227 17 138 -5 222 -99 371 l-40 65 0 1019 0 1019 -25 -6 c-24 -6 -256 -115 -618 -290 -99 -47 -181 -86 -183 -86 -2 0 -4 7 -4 15 0 8 28 27 63 44 34 16 161 77 282 136 216 105 373 178 448 209 l37 15 0 111 c0 119 6 141 60 210 67 86 90 166 90 312 0 133 -18 195 -90 307 -44 68 -54 94 -58 137 -2 30 -1 448 3 929 l7 875 43 0 c49 0 239 -53 360 -99 90 -35 101 -37 108 -17 16 42 27 175 17 224 -26 139 -105 194 -397 278 l-132 37 -4 1146 c-3 968 -7 1172 -21 1316 -46 480 -178 957 -348 1258 -311 551 -842 891 -1627 1042 -153 29 -399 59 -613 74 -129 10 -758 13 -878 4z m775 -33 c375 -18 660 -49 755 -82 58 -20 199 -110 287 -185 28 -23 56 -43 62 -43 16 0 18 -19 46 -360 14 -173 34 -421 45 -550 11 -129 22 -264 25 -300 3 -36 14 -171 25 -300 62 -726 110 -1320 110 -1349 0 -21 -4 -31 -12 -29 -9 3 -35 277 -94 989 -45 541 -89 1072 -98 1179 -9 107 -26 305 -37 440 -11 134 -21 245 -22 246 -1 2 -654 4 -1450 6 l-1447 3 -5 -30 c-3 -16 -52 -556 -110 -1200 -146 -1633 -148 -1645 -162 -1645 -16 0 -17 -25 12 295 13 149 33 374 44 500 12 127 28 300 36 385 8 85 44 484 80 885 78 881 70 808 91 820 10 6 43 33 74 61 138 126 189 163 258 184 111 35 371 68 662 83 143 8 637 6 825 -3z m-2108 -487 c8 -21 -96 -122 -328 -315 -197 -164 -286 -255 -364 -372 -97 -148 -141 -248 -221 -501 -139 -439 -217 -996 -218 -1565 -1 -265 0 -277 22 -329 12 -29 39 -73 59 -98 37 -45 158 -131 251 -177 28 -15 52 -31 52 -36 0 -16 -17 -12 -80 20 -149 75 -243 152 -287 237 -49 92 -57 164 -50 428 13 460 76 1000 148 1263 20 70 20 75 3 155 -23 112 -15 269 21 396 83 303 327 604 635 783 176 103 341 154 357 111z m3633 -40 c382 -125 713 -447 819 -798 33 -107 40 -228 24 -384 -13 -127 -13 -139 6 -215 95 -387 134 -748 135 -1256 1 -335 -1 -369 -18 -415 -26 -70 -75 -126 -154 -179 -117 -77 -250 -134 -227 -96 3 5 55 35 115 66 125 65 200 130 233 201 21 47 22 58 22 413 0 463 -28 762 -101 1105 -14 66 -30 149 -36 185 -12 73 -40 153 -123 349 -199 473 -348 659 -819 1024 -20 15 -36 32 -36 38 0 12 30 5 160 -38z m-1350 -3174 c476 -31 883 -96 1205 -194 423 -128 684 -331 685 -533 0 -140 -128 -887 -295 -1712 -65 -321 -86 -455 -114 -715 -12 -104 -26 -224 -31 -265 -5 -41 -17 -165 -25 -275 -9 -110 -22 -274 -30 -365 -8 -91 -16 -214 -20 -275 -3 -60 -12 -229 -20 -375 -27 -487 -45 -1185 -60 -2285 -3 -231 -7 -546 -10 -700 -3 -154 -7 -458 -11 -675 l-6 -395 123 -17 c157 -22 225 -42 241 -71 28 -53 152 -741 165 -913 l6 -82 -109 -110 c-75 -76 -141 -131 -211 -177 -326 -212 -805 -349 -1418 -407 -178 -17 -845 -17 -1050 0 -827 67 -1422 274 -1802 627 -55 50 -73 73 -73 93 0 39 75 487 122 730 41 211 42 214 74 239 35 26 171 76 242 88 23 4 44 11 48 16 6 10 -9 1201 -26 2069 -27 1363 -89 2534 -184 3440 -14 129 -30 287 -37 350 -6 63 -58 354 -115 645 -99 511 -124 642 -178 935 -98 530 -110 650 -68 728 174 326 1015 554 2202 596 148 5 608 -3 780 -15z m2300 -877 c0 -42 -3 -115 -7 -161 l-6 -83 -49 4 c-27 3 -56 12 -65 20 -13 14 -13 22 2 74 9 32 30 88 46 124 61 134 79 139 79 22z m-5563 -58 c79 -159 78 -169 -10 -169 -31 0 -58 3 -61 6 -3 3 -8 71 -12 152 -5 110 -4 147 5 147 6 0 42 -61 78 -136z m87 -384 c25 -86 109 -511 297 -1520 16 -85 38 -256 49 -380 10 -124 21 -252 24 -285 3 -33 9 -279 12 -547 6 -398 4 -488 -6 -488 -44 0 -452 300 -463 340 -3 11 -5 81 -6 157 -1 76 -13 530 -26 1008 -13 479 -27 983 -30 1120 -3 138 -8 328 -11 423 l-5 172 46 0 c37 0 51 5 68 25 12 13 25 25 29 25 4 0 14 -23 22 -50z m5401 -10 l27 -10 -7 -263 c-3 -144 -12 -557 -21 -917 -13 -601 -23 -949 -40 -1500 -4 -113 -10 -215 -15 -227 -4 -12 -50 -53 -101 -91 -201 -149 -360 -262 -369 -262 -6 0 -8 50 -4 138 3 75 10 254 16 397 30 775 46 905 205 1720 50 257 67 336 125 615 11 52 36 162 56 243 29 124 39 150 57 157 29 12 40 12 71 0z m-5834 -2330 c1 -14 1 -80 1 -147 -2 -142 -14 -157 -56 -71 -41 82 -34 182 17 236 23 25 35 20 38 -18z m6198 3 c35 -76 18 -204 -34 -269 l-23 -29 -13 30 c-6 17 -12 77 -13 135 -1 86 2 111 17 133 22 35 50 35 66 0z m-6032 -817 c60 -24 131 -54 158 -66 71 -32 558 -270 564 -276 3 -2 0 -9 -5 -14 -6 -6 -103 36 -274 120 -146 72 -314 151 -375 176 -187 78 -197 83 -190 94 8 14 1 15 122 -34z m5619 -503 c-3 -49 -11 -575 -18 -1170 -6 -595 -14 -1086 -17 -1092 -10 -15 -424 -152 -433 -143 -17 17 -48 2142 -34 2273 l7 66 227 76 c125 41 237 76 250 76 23 1 23 0 18 -86z m-5281 47 c122 -31 345 -96 351 -103 9 -8 10 -2354 1 -2363 -10 -10 -116 24 -303 98 l-152 60 -6 252 c-18 744 -26 2053 -13 2074 5 7 16 11 25 8 10 -3 53 -14 97 -26z m-501 -1796 c10 -25 7 -322 -3 -328 -49 -31 -97 128 -72 243 17 82 58 128 75 85z m6187 -5 c19 -19 21 -30 17 -113 -3 -71 -10 -103 -30 -148 -47 -101 -61 -72 -62 123 -1 93 3 130 13 142 18 23 37 21 62 -4z m-215 -2705 c9 -36 -11 -118 -63 -262 -89 -242 -174 -375 -350 -549 -119 -118 -195 -175 -308 -231 -184 -91 -444 -159 -457 -120 -12 34 18 95 69 146 43 41 88 69 211 129 146 71 163 82 238 157 56 56 99 111 138 179 148 251 431 577 503 577 7 0 16 -12 19 -26z" />
        <path d="M4570 8594 c-361 -32 -659 -72 -997 -135 -261 -48 -625 -127 -636 -138 -5 -5 0 -91 12 -192 52 -479 102 -1062 126 -1494 8 -148 19 -344 25 -435 35 -560 57 -1510 84 -3494 3 -180 7 -330 9 -333 3 -2 31 0 63 6 76 14 320 37 554 53 250 17 1483 17 1845 0 415 -20 738 -40 931 -58 96 -9 177 -15 179 -12 4 4 20 915 35 2003 5 413 12 827 15 920 38 1177 55 1503 116 2185 19 223 28 301 70 663 12 103 20 190 17 192 -5 5 -225 44 -458 81 -474 75 -925 135 -1280 170 -155 15 -611 27 -710 18z" />
        <path d="M4065 2413 c-476 -16 -878 -60 -1070 -117 -56 -17 -145 -70 -145 -86 0 -23 76 -160 127 -227 263 -349 856 -586 1613 -644 191 -14 583 -6 770 16 591 71 1077 238 1431 491 98 70 259 226 318 307 52 71 50 97 -9 121 -124 49 -874 111 -1675 136 -265 9 -1142 11 -1360 3z" />
      </g>
    </svg>
  );
};

export default SedanCar;