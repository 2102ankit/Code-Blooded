import clsx from "clsx";

const ChildrenTreeIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={clsx("h-5 w-5", className)}
      viewBox="0 0 24 24"
      role="presentation"
    >
      <g fill="currentColor" fillRule="evenodd">
        <path d="M11 7h2v5h-2zm5 6h2v3h-2zM6 13h2v3H6z"></path>
        <path d="M7 11h10a1 1 0 011 1v1H6v-1a1 1 0 011-1z"></path>
        <path
          d="M5 18v1h4v-1H5zm0-2h4a2 2 0 012 2v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1a2 2 0 012-2zm10 2v1h4v-1h-4zm0-2h4a2 2 0 012 2v1a2 2 0 01-2 2h-4a2 2 0 01-2-2v-1a2 2 0 012-2zM10 5v1h4V5h-4zm0-2h4a2 2 0 012 2v1a2 2 0 01-2 2h-4a2 2 0 01-2-2V5a2 2 0 012-2z"
          fillRule="nonzero"
        ></path>
      </g>
    </svg>
  );
};

const BoardIcon: React.FC<{ className?: string; size?: number }> = ({
  className,
  size,
}) => {
  return (
    <svg
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      role="presentation"
    >
      <g fill="currentColor">
        <path d="M4 18h16.008C20 18 20 6 20 6H3.992C4 6 4 18 4 18zM2 5.994C2 4.893 2.898 4 3.99 4h16.02C21.108 4 22 4.895 22 5.994v12.012A1.997 1.997 0 0120.01 20H3.99A1.994 1.994 0 012 18.006V5.994z"></path>
        <path d="M8 6v12h2V6zm6 0v12h2V6z"></path>
      </g>
    </svg>
  );
};
const backlogIcon: React.FC<{ className?: string; size?: number }> = ({
  className,
  size,
}) => {
  return (
    <svg
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      role="presentation"
    >
      <g fill="currentColor">
        <path d="M5 19.002C5 19 17 19 17 19v-2.002C17 17 5 17 5 17v2.002zm-2-2.004C3 15.894 3.895 15 4.994 15h12.012c1.101 0 1.994.898 1.994 1.998v2.004A1.997 1.997 0 0117.006 21H4.994A1.998 1.998 0 013 19.002v-2.004z"></path>
        <path d="M5 15h12v-2H5v2zm-2-4h16v6H3v-6z"></path>
        <path d="M7 11.002C7 11 19 11 19 11V8.998C19 9 7 9 7 9v2.002zM5 8.998C5 7.894 5.895 7 6.994 7h12.012C20.107 7 21 7.898 21 8.998v2.004A1.997 1.997 0 0119.006 13H6.994A1.998 1.998 0 015 11.002V8.998z"></path>
        <path d="M5 5v2h12V5H5zm-2-.002C3 3.894 3.895 3 4.994 3h12.012C18.107 3 19 3.898 19 4.998V9H3V4.998z"></path>
      </g>
    </svg>
  );
};
const RoadmapIcon: React.FC<{ className?: string; size?: number }> = ({
  className,
  size,
}) => {
  return (
    <svg
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      role="presentation"
    >
      <path
        d="M6 2h10a3 3 0 010 6H6a3 3 0 110-6zm0 2a1 1 0 100 2h10a1 1 0 000-2H6zm4 5h8a3 3 0 010 6h-8a3 3 0 010-6zm0 2a1 1 0 000 2h8a1 1 0 000-2h-8zm-4 5h6a3 3 0 010 6H6a3 3 0 010-6zm0 2a1 1 0 000 2h6a1 1 0 000-2H6z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </svg>
  );
};

// const DashboardIcon: React.FC<{ className?: string; size?: number }> = ({
//   className,
//   size,
// }) => {
//   return (
//     <svg
//       version="1.1"
//       className={className}
//       width={size ?? 24}
//       height={size ?? 24}
//       viewBox="0 0 24 24"
//       role="presentation"
//     >
//       <defs></defs>
//       <g
//         // style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
//         transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
//       >
//         <path
//           d="M 35.813 54.013 H 4.514 C 2.025 54.013 0 51.987 0 49.498 V 4.514 C 0 2.025 2.025 0 4.514 0 h 31.299 c 2.489 0 4.514 2.025 4.514 4.514 v 44.984 C 40.328 51.987 38.303 54.013 35.813 54.013 z"
//           // style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,80,192); fill-rule: nonzero; opacity: 1;"
//           transform=" matrix(1 0 0 1 0 0) "
//           stroke-linecap="round"
//         />
//         <path
//           d="M 35.813 90 H 4.514 C 2.025 90 0 87.975 0 85.485 V 69.741 c 0 -2.489 2.025 -4.515 4.514 -4.515 h 31.299 c 2.489 0 4.514 2.025 4.514 4.515 v 15.744 C 40.328 87.975 38.303 90 35.813 90 z"
//           // style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,109,255); fill-rule: nonzero; opacity: 1;"
//           transform=" matrix(1 0 0 1 0 0) "
//           stroke-linecap="round"
//         />
//         <path
//           d="M 85.485 90 H 54.187 c -2.489 0 -4.515 -2.025 -4.515 -4.515 V 40.501 c 0 -2.489 2.025 -4.514 4.515 -4.514 h 31.299 c 2.489 0 4.515 2.025 4.515 4.514 v 44.984 C 90 87.975 87.975 90 85.485 90 z"
//           // style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,80,192); fill-rule: nonzero; opacity: 1;"
//           transform=" matrix(1 0 0 1 0 0) "
//           stroke-linecap="round"
//         />
//         <path
//           d="M 85.485 24.773 H 54.187 c -2.489 0 -4.515 -2.025 -4.515 -4.515 V 4.514 C 49.672 2.025 51.697 0 54.187 0 h 31.299 C 87.975 0 90 2.025 90 4.514 v 15.745 C 90 22.748 87.975 24.773 85.485 24.773 z"
//           // style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,109,255); fill-rule: nonzero; opacity: 1;"
//           transform=" matrix(1 0 0 1 0 0) "
//           stroke-linecap="round"
//         />
//       </g>
//     </svg>
//   );
// };

const LightningIcon: React.FC<{ className?: string; size?: number }> = ({
  className,
  size,
}) => {
  return (
    <svg
      role="presentation"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.3789 4.62256C9.99914 4.62173 9.65331 4.84087 9.49192 5.18458L6.11523 12.3762C5.97308 12.679 5.9956 13.0334 6.17494 13.3157C6.35428 13.598 6.66553 13.7691 7 13.7691H8.79182L6.40251 18.1304C6.17135 18.5523 6.28163 19.0798 6.66249 19.3738C7.04335 19.6677 7.58152 19.6408 7.93117 19.3103L16.8269 10.902C17.1178 10.6269 17.2117 10.2023 17.0637 9.83032C16.9157 9.45832 16.5558 9.21418 16.1555 9.21418H14.547L17.0353 6.24031C17.2787 5.94947 17.3319 5.5441 17.1717 5.20034C17.0116 4.85658 16.6671 4.63646 16.2879 4.63562L10.3789 4.62256Z"
        stroke="currentColor"
        strokeWidth="1.95489"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};
const DevelopmentIcon: React.FC<{ className?: string; size?: number }> = ({
  className,
  size,
}) => {
  return (
    <svg
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      role="presentation"
    >
      <path
        d="M14.155 4.055a1 1 0 00-1.271.62l-4.83 14.046a1 1 0 001.891.65l4.83-14.045a1 1 0 00-.62-1.271m-6.138 8.21l-2.58-2.501L8.236 7.05a.999.999 0 10-1.392-1.436l-3.54 3.432a1 1 0 000 1.436l3.32 3.219a1 1 0 101.393-1.436m12.219 1.568l-3.32-3.22a.999.999 0 10-1.393 1.437l2.58 2.5-2.799 2.715a.999.999 0 101.392 1.436l3.54-3.432a1 1 0 000-1.436"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </svg>
  );
};

const SprintTrophy: React.FC<{ className?: string; size?: number }> = ({
  className,
  size,
}) => {
  return (
    <svg
      className={className}
      width={size ?? 540}
      height="140"
      viewBox="0 0 540 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="540" height="120" fill="white" fillOpacity="0.01" />
      <path d="M540 0H0V120H540V0Z" fill="#00C7E5" />
      <path
        opacity="0.7"
        d="M0 67.2222H540V26.2778C511.369 28.3778 486.056 28.7778 464.231 28.3667C373.331 26.6444 305.916 10.1111 221.766 0H0V67.2222Z"
        fill="url(#paint0_linear_1123_201949)"
      />
      <path
        opacity="0.6"
        d="M0 117.889H540V49.8111C453.094 36.6778 375.666 20.8333 260.972 40.2889C180.619 53.9222 98.7469 82.0333 1.88437 63.5333C1.26562 63.4111 0.61875 63.2889 0 63.1667V117.889Z"
        fill="url(#paint1_linear_1123_201949)"
      />
      <path
        opacity="0.6"
        d="M540 73.2444C418.922 89.3111 321.834 116.556 158.4 114.056C95.625 113.1 41.5406 108.033 0 102.667V120H540V73.2444Z"
        fill="url(#paint2_linear_1123_201949)"
      />
      <rect
        width="97.0213"
        height="80"
        transform="translate(222 60)"
        fill="white"
        fillOpacity="0.01"
      />
      <path
        d="M239.617 109.234C240.209 111.087 241.247 112.768 242.638 114.128C242.731 114.224 242.849 114.293 242.979 114.326C243.109 114.359 243.245 114.356 243.373 114.316C243.501 114.277 243.616 114.202 243.704 114.101C243.792 114 243.85 113.877 243.872 113.745C244.33 111.855 244.316 109.882 243.83 108C243.283 106.259 242.336 104.67 241.064 103.362C240.952 103.227 240.803 103.129 240.636 103.078C240.468 103.027 240.29 103.027 240.122 103.077C239.955 103.127 239.805 103.225 239.693 103.358C239.58 103.492 239.51 103.656 239.489 103.83C239.109 105.617 239.153 107.467 239.617 109.234V109.234Z"
        fill="#0065FF"
      />
      <path
        d="M232.596 94.7234C232.24 95.9733 232.225 97.2957 232.553 98.5532C232.565 98.6414 232.601 98.7244 232.659 98.7926C232.716 98.8607 232.791 98.9111 232.876 98.9379C232.961 98.9647 233.052 98.9668 233.138 98.9439C233.224 98.9209 233.301 98.874 233.362 98.8085C234.276 97.8966 234.974 96.7915 235.404 95.5744C235.706 94.4053 235.736 93.1822 235.489 92C235.362 91.4468 234.851 91.2766 234.468 91.7021C233.607 92.5411 232.964 93.5785 232.596 94.7234V94.7234Z"
        fill="#3384FF"
      />
      <path
        d="M231.191 86.6383C230.938 87.8325 230.754 89.0401 230.638 90.2553C230.525 91.5036 230.44 92.7376 230.383 93.9575C230.326 96.3943 230.73 98.8199 231.574 101.106C232.36 103.429 233.432 105.645 234.766 107.702C235.404 108.766 236.128 109.745 236.851 110.723C237.574 111.702 238.468 112.553 239.319 113.404C242.839 116.808 247.027 119.444 251.617 121.149C253.905 122.042 256.269 122.726 258.681 123.192C259.875 123.455 261.082 123.654 262.298 123.787L264.085 123.957H265.872C266.001 123.952 266.129 123.971 266.25 124.015C266.371 124.059 266.482 124.127 266.577 124.214C266.672 124.301 266.749 124.406 266.803 124.522C266.857 124.639 266.888 124.765 266.894 124.894C266.894 125.15 266.799 125.398 266.625 125.587C266.452 125.777 266.213 125.894 265.957 125.915H265.915L263.957 125.83L262.042 125.617C260.766 125.447 259.532 125.192 258.298 124.936C255.808 124.39 253.373 123.621 251.021 122.638C246.264 120.782 241.946 117.956 238.34 114.34C237.45 113.436 236.625 112.469 235.872 111.447C235.086 110.442 234.362 109.39 233.702 108.298C232.396 106.126 231.34 103.813 230.553 101.404C230.167 100.208 229.869 98.9845 229.66 97.7447C229.497 96.475 229.44 95.194 229.489 93.9149C229.532 92.6383 229.66 91.4043 229.787 90.1702C229.915 88.9362 229.957 88.8936 230.085 88.2979C230.172 87.6661 230.3 87.0406 230.468 86.4256C230.478 86.3746 230.498 86.3263 230.528 86.2834C230.557 86.2406 230.594 86.2041 230.638 86.1763C230.682 86.1484 230.731 86.1297 230.782 86.1214C230.833 86.113 230.886 86.1152 230.936 86.1277C231.026 86.1649 231.1 86.2317 231.146 86.3168C231.193 86.4019 231.209 86.5003 231.191 86.5958V86.6383Z"
        fill="url(#paint3_linear_1123_201949)"
      />
      <path
        d="M308.425 94.7234C308.76 95.9763 308.775 97.2931 308.468 98.5532C308.456 98.6414 308.42 98.7244 308.363 98.7926C308.305 98.8607 308.23 98.9111 308.145 98.9379C308.06 98.9647 307.969 98.9668 307.883 98.9439C307.797 98.9209 307.72 98.874 307.66 98.8085C306.731 97.9083 306.031 96.7996 305.617 95.5744C305.315 94.4053 305.286 93.1822 305.532 92C305.66 91.4468 306.17 91.2766 306.553 91.7021C307.415 92.5411 308.058 93.5785 308.425 94.7234V94.7234Z"
        fill="#3384FF"
      />
      <path
        d="M310.553 86.4256C310.723 87.0639 310.809 87.6596 310.936 88.2979C311.064 88.9362 311.149 89.5319 311.192 90.1702C311.37 91.4117 311.484 92.6616 311.532 93.9149C311.581 95.194 311.524 96.475 311.362 97.7447C311.154 98.9989 310.856 100.236 310.468 101.447C309.681 103.856 308.625 106.168 307.319 108.34C306.638 109.447 305.915 110.468 305.149 111.489C304.383 112.501 303.559 113.467 302.681 114.383C299.075 117.999 294.757 120.824 290 122.681C287.646 123.657 285.211 124.426 282.723 124.979C281.489 125.234 280.255 125.489 278.979 125.66L277.064 125.872L275.106 125.957C274.843 125.946 274.594 125.834 274.412 125.644C274.229 125.453 274.127 125.2 274.128 124.936C274.127 124.806 274.154 124.677 274.206 124.557C274.258 124.438 274.335 124.33 274.431 124.242C274.527 124.154 274.641 124.087 274.765 124.045C274.888 124.004 275.019 123.988 275.149 124H276.936L278.723 123.83C279.939 123.697 281.146 123.498 282.34 123.234C284.752 122.768 287.116 122.084 289.404 121.192C293.994 119.487 298.182 116.85 301.702 113.447C302.553 112.596 303.362 111.702 304.128 110.766C304.899 109.804 305.61 108.795 306.255 107.745C307.589 105.687 308.661 103.472 309.447 101.149C309.863 100.002 310.176 98.8198 310.383 97.617C310.582 96.4223 310.653 95.2098 310.596 94C310.589 92.7631 310.517 91.5275 310.383 90.2979C310.267 89.0827 310.083 87.8751 309.83 86.6809V86.6809C309.817 86.6305 309.815 86.5781 309.824 86.5269C309.832 86.4757 309.851 86.4268 309.878 86.383C309.906 86.3392 309.943 86.3015 309.986 86.2723C310.028 86.243 310.077 86.2228 310.128 86.2128C310.212 86.1951 310.3 86.2065 310.378 86.2451C310.455 86.2837 310.517 86.3473 310.553 86.4256V86.4256Z"
        fill="url(#paint4_linear_1123_201949)"
      />
      <path
        d="M301.277 109.234C300.654 111.083 299.604 112.76 298.213 114.128C298.125 114.228 298.01 114.301 297.882 114.337C297.754 114.372 297.618 114.37 297.491 114.329C297.364 114.288 297.252 114.211 297.168 114.107C297.085 114.003 297.034 113.877 297.021 113.745C296.541 111.858 296.556 109.879 297.064 108C297.593 106.251 298.543 104.659 299.83 103.362C299.935 103.221 300.08 103.117 300.247 103.062C300.413 103.008 300.593 103.006 300.76 103.057C300.928 103.108 301.076 103.21 301.183 103.348C301.291 103.487 301.353 103.655 301.362 103.83C301.779 105.611 301.75 107.467 301.277 109.234V109.234Z"
        fill="#0065FF"
      />
      <path
        d="M301.702 108C301.058 108.062 300.409 107.988 299.796 107.785C299.182 107.581 298.618 107.251 298.139 106.816C297.661 106.381 297.278 105.851 297.017 105.26C296.755 104.669 296.62 104.029 296.62 103.383C296.62 102.736 296.755 102.097 297.017 101.506C297.278 100.915 297.661 100.385 298.139 99.9499C298.618 99.5151 299.182 99.1852 299.796 98.9814C300.409 98.7775 301.058 98.7041 301.702 98.7659H302.34C304.269 98.8716 306.2 98.5829 308.013 97.9175C309.827 97.252 311.486 96.2238 312.889 94.8956C314.292 93.5674 315.409 91.9672 316.173 90.1926C316.937 88.418 317.331 86.5064 317.331 84.5745C317.331 82.6425 316.937 80.7309 316.173 78.9563C315.409 77.1818 314.292 75.5815 312.889 74.2533C311.486 72.9251 309.827 71.8969 308.013 71.2315C306.2 70.566 304.269 70.2773 302.34 70.383C300.822 70.3809 299.313 70.6252 297.872 71.1064"
        stroke="#FFC400"
        strokeWidth="3.26383"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M239.319 108C239.963 108.062 240.612 107.988 241.226 107.785C241.839 107.581 242.403 107.251 242.882 106.816C243.36 106.381 243.743 105.851 244.004 105.26C244.266 104.669 244.401 104.029 244.401 103.383C244.401 102.736 244.266 102.097 244.004 101.506C243.743 100.915 243.36 100.385 242.882 99.9499C242.403 99.5151 241.839 99.1852 241.226 98.9814C240.612 98.7775 239.963 98.7041 239.319 98.7659H238.681C236.752 98.8716 234.822 98.5829 233.008 97.9175C231.194 97.252 229.535 96.2238 228.132 94.8956C226.729 93.5674 225.612 91.9672 224.848 90.1926C224.085 88.418 223.691 86.5064 223.691 84.5745C223.691 82.6425 224.085 80.7309 224.848 78.9563C225.612 77.1818 226.729 75.5815 228.132 74.2533C229.535 72.9251 231.194 71.8969 233.008 71.2315C234.822 70.566 236.752 70.2773 238.681 70.383C240.186 70.381 241.681 70.6254 243.106 71.1064"
        stroke="#FFC400"
        strokeWidth="3.26383"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M272.511 124.979C272.511 127.913 273.676 130.727 275.751 132.802C277.826 134.877 280.64 136.043 283.574 136.043H257.745C260.302 136.043 262.781 135.156 264.759 133.535C266.737 131.913 268.092 129.657 268.594 127.148C269.095 124.64 268.712 122.036 267.51 119.779C266.308 117.521 264.361 115.75 262 114.766C261.382 114.496 260.741 114.283 260.085 114.128C255.243 112.452 250.868 109.652 247.319 105.957C243.769 102.261 241.148 97.7765 239.669 92.8709C238.19 87.9653 237.897 82.7788 238.812 77.7377C239.728 72.6965 241.827 67.9446 244.936 63.8723H296.383C299.484 67.9448 301.577 72.6936 302.49 77.7301C303.403 82.7667 303.111 87.9479 301.638 92.8499C300.164 97.7519 297.551 102.235 294.012 105.934C290.473 109.632 286.109 112.44 281.277 114.128C280.617 114.269 279.975 114.484 279.362 114.766C277.331 115.59 275.593 117.003 274.372 118.823C273.151 120.643 272.503 122.787 272.511 124.979V124.979Z"
        fill="url(#paint5_linear_1123_201949)"
      />
      <path d="M296.383 60H244.894V63.8936H296.383V60Z" fill="#FF991F" />
      <path
        d="M284.298 136.043H257.277V139.936H284.298V136.043Z"
        fill="#FF991F"
      />
      <path
        d="M308.17 117.745C306.288 118.294 304.3 118.367 302.383 117.957C302.25 117.945 302.124 117.894 302.02 117.81C301.917 117.727 301.839 117.615 301.799 117.488C301.758 117.361 301.755 117.225 301.791 117.097C301.827 116.968 301.899 116.853 302 116.766C303.314 115.32 304.966 114.223 306.808 113.574C308.542 113.024 310.386 112.921 312.17 113.277C312.349 113.277 312.523 113.333 312.668 113.437C312.813 113.542 312.921 113.689 312.978 113.859C313.034 114.028 313.036 114.211 312.982 114.381C312.929 114.552 312.824 114.701 312.681 114.808C311.427 116.126 309.882 117.131 308.17 117.745V117.745Z"
        fill="#0065FF"
      />
      <path
        d="M312.766 109.745C311.561 110.632 310.159 111.216 308.681 111.447C308.17 111.489 307.872 111.106 308.085 110.681C308.638 109.291 309.53 108.062 310.681 107.106C311.788 106.259 313.09 105.703 314.468 105.489C314.599 105.429 314.746 105.414 314.886 105.448C315.026 105.482 315.15 105.562 315.239 105.675C315.328 105.789 315.375 105.929 315.374 106.072C315.374 106.216 315.324 106.356 315.234 106.468C314.688 107.743 313.841 108.868 312.766 109.745V109.745Z"
        fill="#0065FF"
      />
      <path
        d="M315.957 102.298C314.861 103.324 313.532 104.069 312.085 104.468C311.99 104.514 311.883 104.528 311.779 104.511C311.675 104.493 311.579 104.443 311.504 104.368C311.429 104.294 311.38 104.198 311.362 104.094C311.344 103.99 311.359 103.883 311.404 103.787C311.785 102.341 312.516 101.011 313.532 99.9149C314.552 98.9512 315.773 98.2247 317.106 97.7872C317.231 97.7338 317.37 97.7191 317.503 97.7448C317.636 97.7706 317.759 97.8358 317.855 97.9319C317.951 98.028 318.017 98.1507 318.042 98.2842C318.068 98.4177 318.053 98.5558 318 98.6809C317.608 100.028 316.909 101.267 315.957 102.298Z"
        fill="#3384FF"
      />
      <path
        d="M313.574 84.9787C313.535 85.8403 313.271 86.6766 312.808 87.4043C312.638 87.6596 312.383 87.6596 312.255 87.4043C311.838 86.635 311.632 85.7685 311.66 84.8936C311.693 84.0831 311.926 83.2934 312.34 82.5958C312.371 82.5219 312.423 82.4593 312.491 82.4168C312.558 82.3742 312.638 82.3539 312.717 82.3586C312.797 82.3633 312.873 82.3927 312.935 82.4429C312.998 82.4931 313.042 82.5614 313.064 82.6383C313.416 83.3675 313.591 84.1693 313.574 84.9787V84.9787Z"
        fill="#66A3FF"
      />
      <path
        d="M308.213 88.9787C308.708 89.7318 309.014 90.5929 309.106 91.4894C309.132 91.5511 309.136 91.6195 309.117 91.6837C309.099 91.7479 309.06 91.8042 309.006 91.8434C308.952 91.8826 308.886 91.9026 308.82 91.9002C308.753 91.8977 308.689 91.8729 308.638 91.8298C307.822 91.4491 307.107 90.8803 306.553 90.1702C306.062 89.4623 305.755 88.6434 305.66 87.7872C305.648 87.7078 305.66 87.6269 305.693 87.5538C305.725 87.4806 305.778 87.4182 305.845 87.3737C305.912 87.3292 305.989 87.3045 306.07 87.3024C306.15 87.3003 306.229 87.3208 306.298 87.3617C307.054 87.7432 307.71 88.2971 308.213 88.9787V88.9787Z"
        fill="#66A3FF"
      />
      <path
        d="M308.383 85.1915C308.784 85.8237 309.046 86.5348 309.149 87.2766C309.154 87.3292 309.145 87.3823 309.123 87.4304C309.101 87.4784 309.067 87.5198 309.023 87.5501C308.98 87.5804 308.929 87.5987 308.877 87.603C308.824 87.6072 308.771 87.5974 308.723 87.5745C308.063 87.2316 307.483 86.7531 307.021 86.1702C306.628 85.6039 306.393 84.9429 306.34 84.2553C306.298 83.9149 306.553 83.7447 306.808 83.9149C307.43 84.2045 307.971 84.643 308.383 85.1915Z"
        fill="#99C1FF"
      />
      <path
        d="M309.745 81.7872C309.97 82.5902 310.014 83.4333 309.872 84.2553C309.866 84.3113 309.843 84.3641 309.807 84.4078C309.772 84.4514 309.724 84.4841 309.671 84.5019C309.617 84.5197 309.56 84.522 309.505 84.5085C309.45 84.495 309.401 84.4662 309.362 84.4255C308.74 83.8812 308.258 83.1952 307.957 82.4255C307.719 81.684 307.66 80.8962 307.787 80.1277C307.774 80.0475 307.789 79.9652 307.831 79.8955C307.873 79.8259 307.938 79.7734 308.015 79.7478C308.092 79.7221 308.176 79.7248 308.251 79.7554C308.327 79.7861 308.388 79.8426 308.426 79.9149C309 80.432 309.451 81.072 309.745 81.7872V81.7872Z"
        fill="#99C1FF"
      />
      <path
        d="M306.511 103.362C306.399 104.861 305.917 106.308 305.106 107.574C305.056 107.662 304.982 107.733 304.894 107.782C304.805 107.83 304.705 107.853 304.604 107.849C304.503 107.845 304.406 107.813 304.322 107.757C304.238 107.701 304.171 107.623 304.128 107.532C303.466 106.197 303.13 104.724 303.149 103.234C303.249 101.837 303.671 100.483 304.383 99.2766C304.723 98.7234 305.362 98.7234 305.617 99.3192C306.248 100.571 306.555 101.961 306.511 103.362V103.362Z"
        fill="#0065FF"
      />
      <path
        d="M224.894 95.4468C225.477 96.3356 226.284 97.0549 227.234 97.5319C227.574 97.7021 227.872 97.5319 227.83 97.1915C227.796 96.1184 227.472 95.0746 226.894 94.1702C226.352 93.3297 225.605 92.6413 224.723 92.1702C224.647 92.1188 224.558 92.0908 224.466 92.0899C224.374 92.0889 224.284 92.115 224.207 92.1649C224.13 92.2148 224.069 92.2863 224.032 92.3705C223.995 92.4547 223.984 92.5478 224 92.6383C224.051 93.6359 224.358 94.6035 224.894 95.4468V95.4468Z"
        fill="#3384FF"
      />
      <path
        d="M232.851 117.745C234.718 118.294 236.693 118.367 238.596 117.957C238.732 117.953 238.864 117.907 238.974 117.826C239.083 117.746 239.167 117.634 239.213 117.506C239.258 117.378 239.265 117.239 239.231 117.107C239.196 116.975 239.124 116.856 239.021 116.766C237.7 115.329 236.05 114.234 234.213 113.574C232.479 113.024 230.635 112.921 228.851 113.277C228.672 113.277 228.498 113.333 228.353 113.437C228.209 113.542 228.1 113.689 228.044 113.859C227.987 114.028 227.985 114.211 228.039 114.381C228.092 114.552 228.198 114.701 228.34 114.808C229.594 116.126 231.139 117.131 232.851 117.745V117.745Z"
        fill="#0065FF"
      />
      <path
        d="M228.255 109.745C229.461 110.632 230.862 111.216 232.34 111.447C232.851 111.489 233.149 111.106 232.936 110.681C232.384 109.291 231.491 108.062 230.34 107.106C229.218 106.258 227.902 105.702 226.511 105.489C226.383 105.458 226.249 105.464 226.125 105.507C226.001 105.549 225.892 105.627 225.811 105.731C225.73 105.834 225.68 105.959 225.669 106.09C225.657 106.22 225.683 106.352 225.745 106.468C226.309 107.745 227.17 108.868 228.255 109.745V109.745Z"
        fill="#0065FF"
      />
      <path
        d="M225.064 102.298C226.16 103.324 227.489 104.069 228.936 104.468C229.031 104.514 229.139 104.528 229.243 104.511C229.347 104.493 229.443 104.443 229.517 104.368C229.592 104.294 229.642 104.198 229.66 104.094C229.677 103.99 229.663 103.883 229.617 103.787C229.218 102.349 228.49 101.023 227.489 99.9149C226.469 98.9512 225.249 98.2247 223.915 97.7872C223.79 97.7338 223.652 97.7191 223.518 97.7448C223.385 97.7706 223.262 97.8358 223.166 97.9319C223.07 98.028 223.005 98.1507 222.979 98.2842C222.953 98.4177 222.968 98.5558 223.021 98.6809C223.413 100.028 224.112 101.267 225.064 102.298V102.298Z"
        fill="#3384FF"
      />
      <path
        d="M227.404 84.9787C227.476 85.8403 227.753 86.6721 228.213 87.4043C228.235 87.4596 228.273 87.507 228.322 87.5404C228.372 87.5737 228.43 87.5916 228.489 87.5916C228.549 87.5916 228.607 87.5737 228.656 87.5404C228.706 87.507 228.744 87.4596 228.766 87.4043C229.163 86.6272 229.367 85.7662 229.362 84.8936C229.329 84.0831 229.095 83.2934 228.681 82.5958C228.651 82.5219 228.598 82.4593 228.53 82.4168C228.463 82.3742 228.384 82.3539 228.304 82.3586C228.224 82.3633 228.148 82.3927 228.086 82.4429C228.024 82.4931 227.979 82.5614 227.957 82.6383C227.61 83.3707 227.422 84.1683 227.404 84.9787V84.9787Z"
        fill="#66A3FF"
      />
      <path
        d="M232.809 88.9787C232.294 89.7217 231.985 90.5881 231.915 91.4894C231.89 91.5511 231.886 91.6195 231.904 91.6837C231.922 91.7479 231.961 91.8042 232.015 91.8434C232.069 91.8826 232.135 91.9026 232.201 91.9002C232.268 91.8977 232.332 91.8729 232.383 91.8298C233.199 91.4491 233.914 90.8803 234.468 90.1702C234.94 89.4527 235.246 88.6384 235.362 87.7872C235.373 87.7078 235.361 87.6269 235.329 87.5538C235.296 87.4806 235.243 87.4182 235.176 87.3737C235.11 87.3292 235.032 87.3045 234.952 87.3024C234.871 87.3003 234.792 87.3208 234.723 87.3617C233.967 87.7432 233.311 88.2971 232.809 88.9787V88.9787Z"
        fill="#66A3FF"
      />
      <path
        d="M232.596 85.1915C232.204 85.8249 231.957 86.5369 231.872 87.2766C231.867 87.3292 231.876 87.3823 231.898 87.4304C231.92 87.4784 231.955 87.5198 231.998 87.5501C232.041 87.5804 232.092 87.5987 232.145 87.603C232.197 87.6072 232.25 87.5974 232.298 87.5745C232.958 87.2316 233.538 86.7531 234 86.1702C234.375 85.5948 234.609 84.9385 234.681 84.2553C234.723 83.9149 234.468 83.7447 234.17 83.9149C233.555 84.2155 233.017 84.652 232.596 85.1915V85.1915Z"
        fill="#99C1FF"
      />
      <path
        d="M231.277 81.7872C231.029 82.5864 230.985 83.4348 231.149 84.2553C231.156 84.3113 231.178 84.3641 231.214 84.4078C231.25 84.4514 231.297 84.4841 231.35 84.5019C231.404 84.5197 231.461 84.522 231.516 84.5085C231.571 84.495 231.621 84.4662 231.66 84.4255C232.281 83.8812 232.763 83.1952 233.064 82.4255C233.303 81.684 233.361 80.8962 233.234 80.1277C233.248 80.0475 233.232 79.9652 233.19 79.8955C233.149 79.8259 233.083 79.7734 233.006 79.7478C232.929 79.7221 232.845 79.7248 232.77 79.7554C232.695 79.7861 232.633 79.8426 232.596 79.9149C232.008 80.4201 231.555 81.0635 231.277 81.7872V81.7872Z"
        fill="#99C1FF"
      />
      <path
        d="M234.511 103.362C234.622 104.861 235.105 106.308 235.915 107.574C235.959 107.664 236.027 107.739 236.113 107.79C236.199 107.84 236.297 107.865 236.397 107.861C236.496 107.856 236.592 107.823 236.673 107.764C236.754 107.706 236.816 107.625 236.851 107.532C237.549 106.209 237.901 104.73 237.872 103.234C237.772 101.837 237.35 100.483 236.638 99.2766C236.298 98.7234 235.66 98.7234 235.404 99.3192C234.773 100.571 234.466 101.961 234.511 103.362V103.362Z"
        fill="#0065FF"
      />
      <path
        d="M316.128 95.4468C315.541 96.3484 314.716 97.07 313.745 97.5319C313.447 97.7021 313.149 97.5319 313.191 97.1915C313.197 96.1497 313.49 95.1296 314.038 94.2437C314.586 93.3577 315.368 92.6402 316.298 92.1702C316.374 92.1188 316.463 92.0908 316.555 92.0899C316.647 92.0889 316.737 92.115 316.814 92.1649C316.892 92.2148 316.952 92.2863 316.989 92.3705C317.026 92.4547 317.037 92.5478 317.021 92.6383C316.971 93.6359 316.663 94.6035 316.128 95.4468V95.4468Z"
        fill="#3384FF"
      />
      <path
        d="M264.298 98.5532L264.085 98.4681C264.015 98.425 263.96 98.3603 263.929 98.2836C263.899 98.2069 263.894 98.1224 263.915 98.0426L265.064 91.1915L260.085 86.3404C260.04 86.2801 260.01 86.2107 259.995 86.1372C259.98 86.0636 259.982 85.9877 260 85.9149C260.01 85.8322 260.051 85.7562 260.114 85.7013C260.176 85.6463 260.257 85.6164 260.34 85.617L267.191 84.5958L270.298 78.383C270.333 78.311 270.387 78.2504 270.455 78.2079C270.523 78.1655 270.601 78.1429 270.681 78.1429C270.761 78.1429 270.839 78.1655 270.907 78.2079C270.975 78.2504 271.029 78.311 271.064 78.383L274.128 84.5958L281.021 85.617C281.149 85.617 281.277 85.7447 281.362 85.9149C281.382 85.9907 281.38 86.0706 281.358 86.1457C281.335 86.2207 281.292 86.2882 281.234 86.3404L276.255 91.1915L277.447 98.0426C277.45 98.1215 277.437 98.2004 277.408 98.2738C277.378 98.3472 277.334 98.4135 277.277 98.4681C277.205 98.5092 277.125 98.5308 277.042 98.5308C276.96 98.5308 276.88 98.5092 276.808 98.4681L270.681 95.2341L264.511 98.4681L264.298 98.5532ZM270.681 94.3404H270.851L276.468 97.3192L275.404 91.1064C275.387 91.0404 275.385 90.9712 275.4 90.9045C275.415 90.8379 275.445 90.7757 275.489 90.7234L280.042 86.3404L273.787 85.4043C273.717 85.3996 273.65 85.3777 273.59 85.3406C273.531 85.3034 273.482 85.2522 273.447 85.1915L270.681 79.5319L267.872 85.1915C267.848 85.2517 267.807 85.3036 267.754 85.3413C267.702 85.379 267.639 85.4009 267.574 85.4043L261.319 86.3404L265.83 90.7234C265.916 90.8323 265.961 90.9678 265.957 91.1064L264.894 97.3192L270.468 94.383L270.681 94.3404Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1123_201949"
          x1="270"
          y1="5.49803"
          x2="270"
          y2="39.4262"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00A3BF" />
          <stop offset="1" stopColor="#00A3BF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1123_201949"
          x1="249.472"
          y1="37.8594"
          x2="256.423"
          y2="137.643"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00A3BF" />
          <stop offset="0.1395" stopColor="#00A3BF" stopOpacity="0.8605" />
          <stop offset="1" stopColor="#00A3BF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1123_201949"
          x1="270"
          y1="120"
          x2="270"
          y2="73.2429"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00A3BF" stopOpacity="0" />
          <stop offset="0.8605" stopColor="#00A3BF" stopOpacity="0.8605" />
          <stop offset="1" stopColor="#00A3BF" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1123_201949"
          x1="266.885"
          y1="106.038"
          x2="228.983"
          y2="106.038"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0065FF" />
          <stop offset="0.41" stopColor="#0266FF" />
          <stop offset="0.56" stopColor="#096AFF" />
          <stop offset="0.67" stopColor="#1471FF" />
          <stop offset="0.75" stopColor="#257BFF" />
          <stop offset="0.83" stopColor="#3B89FF" />
          <stop offset="0.89" stopColor="#5799FF" />
          <stop offset="0.95" stopColor="#76ACFF" />
          <stop offset="1" stopColor="#99C1FF" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_1123_201949"
          x1="274.128"
          y1="106.038"
          x2="312.034"
          y2="106.038"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0065FF" />
          <stop offset="0.36" stopColor="#0266FF" />
          <stop offset="0.52" stopColor="#096BFF" />
          <stop offset="0.63" stopColor="#1672FF" />
          <stop offset="0.73" stopColor="#277DFF" />
          <stop offset="0.81" stopColor="#3F8BFF" />
          <stop offset="0.88" stopColor="#5B9CFF" />
          <stop offset="0.95" stopColor="#7CB0FF" />
          <stop offset="1" stopColor="#99C1FF" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_1123_201949"
          x1="242.979"
          y1="121.255"
          x2="298.357"
          y2="65.8723"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFAB00" />
          <stop offset="0.82" stopColor="#FFC400" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const AddPeopleIcon: React.FC<{ className?: string; size?: number }> = ({
  className,
  size,
}) => {
  return (
    <svg
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      role="presentation"
    >
      <g fill="currentColor" fillRule="evenodd">
        <rect x="18" y="5" width="2" height="6" rx="1"></rect>
        <rect x="16" y="7" width="6" height="2" rx="1"></rect>
        <path d="M5 14c0-1.105.902-2 2.009-2h7.982c1.11 0 2.009.894 2.009 2.006v4.44c0 3.405-12 3.405-12 0V14z"></path>
        <circle cx="11" cy="7" r="4"></circle>
      </g>
    </svg>
  );
};

const SubTaskIcon: React.FC<{ className?: string; size?: number }> = ({
  className,
  size,
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? 14}
      height={size ?? 14}
      viewBox="0 0 14 14"
      version="1.1"
    >
      {/* <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> */}
      <title>subtask</title>
      <desc>Created with Sketch.</desc>
      <defs />
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="subtask">
          <g id="Subtask" transform="translate(1.000000, 1.000000)">
            <rect
              id="Rectangle-36"
              fill="#4BAEE8"
              x="0"
              y="0"
              width="14"
              height="14"
            />
            <rect
              id="Rectangle-80"
              stroke="#FFFFFF"
              x="2"
              y="2"
              width="5"
              height="5"
            />
            <rect
              id="Rectangle-80-Copy"
              stroke="#FFFFFF"
              fill="#FFFFFF"
              x="5"
              y="5"
              width="5"
              height="5"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export {
  ChildrenTreeIcon,
  backlogIcon,
  BoardIcon,
  RoadmapIcon,
  LightningIcon,
  DevelopmentIcon,
  SprintTrophy,
  AddPeopleIcon,
  SubTaskIcon,
  // DashboardIcon,
};
