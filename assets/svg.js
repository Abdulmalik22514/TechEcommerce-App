import React from "react";
import Svg, {
  Defs,
  G,
  LinearGradient,
  Mask,
  Rect,
  Path,
  Circle,
} from "react-native-svg";

export const Bank = (props) => {
  return (
    <Svg width="62" height="40" viewBox="0 0 62 40" fill="none" {...props}>
      <Rect width="62" height="40" rx="10" fill="url(#paint0_linear)" />
      <Mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="62"
        height="40"
      >
        <Rect width="62" height="40" rx="10" fill="white" />
      </Mask>
      <G mask="url(#mask0)">
        <Rect width="62" height="40" fill="#415A6B" />
        <Rect
          x="6.09644"
          y="32.5126"
          width="6.94468"
          height="3.4875"
          fill="#344A5E"
        />
        <Rect
          x="16.6421"
          y="32.5126"
          width="6.94468"
          height="3.4875"
          fill="#344A5E"
        />
        <Rect
          x="27.1877"
          y="32.5126"
          width="6.94468"
          height="3.4875"
          fill="#344A5E"
        />
        <Rect
          x="37.7334"
          y="32.5126"
          width="6.94468"
          height="3.4875"
          fill="#344A5E"
        />
        <Rect
          x="48.2789"
          y="32.5126"
          width="6.94468"
          height="3.4875"
          fill="#344A5E"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M41.7201 5.77501C35.9329 7.97081 32.975 14.5583 35.1613 20.3708C37.3475 26.1833 43.9064 29.1541 49.6936 26.9583C55.4809 24.7625 58.4387 18.175 56.2525 12.3625C54.0662 6.55001 47.5074 3.57922 41.7201 5.77501ZM36.3187 20.5L40.0482 19.0792C40.6912 20.7584 41.4628 22.1792 42.3631 23.3417L39.4052 24.5042C38.1192 23.4708 36.9617 22.1792 36.3187 20.5ZM42.6203 6.55001L43.9064 10.1667L47.2501 8.87501C45.7068 7.19581 44.0349 6.29172 42.6203 6.55001ZM47.8932 9.77922C48.7935 10.9417 49.6936 12.3625 50.3367 14.0417L45.9641 15.7209L44.2922 11.2L47.8932 9.77922ZM42.8776 10.5542L41.5915 6.93751C40.3054 7.71251 39.6624 9.52081 39.6624 11.8458L42.8776 10.5542ZM43.2634 11.5875L44.9353 16.1083L40.5627 17.7875C40.0482 16.1083 39.6624 14.4292 39.5339 13.0083L43.2634 11.5875ZM35.9329 19.4666L39.6624 18.0458C39.0194 16.4958 38.7621 14.8167 38.6336 13.2666L35.6757 14.4291C35.2899 16.1083 35.4184 17.7874 35.9329 19.4666ZM40.9485 18.6917L45.3211 17.0125L46.9929 21.5333L43.3919 22.9541C42.4918 21.7917 41.7201 20.3708 40.9485 18.6917ZM48.6648 26.1834L47.3787 22.5667L44.035 23.8584C45.5783 25.5376 47.2502 26.4417 48.6648 26.1834ZM49.8223 25.7958L48.5362 22.1792L51.7513 20.8875C51.6227 23.2125 50.9797 25.0208 49.8223 25.7958ZM46.3499 16.625L48.0217 21.1458L51.7513 19.725C51.6227 18.3042 51.2369 16.625 50.7225 14.9458L46.3499 16.625ZM51.6227 14.6875L55.3522 13.2667C55.8667 14.9459 55.9952 16.625 55.6094 18.3042L52.6515 19.4667C52.6515 17.9167 52.2657 16.3667 51.6227 14.6875ZM49.0506 9.39172C49.9509 10.5542 50.7225 11.975 51.3655 13.6542L55.095 12.2334C54.4521 10.5542 53.2946 9.26251 52.0085 8.22922L49.0506 9.39172ZM50.8511 7.58331L48.279 8.48751C47.3787 7.32501 46.3499 6.55001 45.1925 6.03331C47.2501 6.03331 49.1792 6.55001 50.8511 7.58331ZM38.6336 12.2333C38.6336 10.6833 38.8908 9.3916 39.2766 8.35831C37.6047 9.65001 36.5759 11.3292 35.9329 13.2666L38.6336 12.2333ZM40.434 25.2792L43.1348 24.2459C44.035 25.2792 45.0638 26.1834 46.0926 26.7001C44.1636 26.7 42.106 26.1833 40.434 25.2792ZM52.7801 20.5C52.7801 22.05 52.523 23.3417 52.1372 24.375C53.6804 23.0833 54.8379 21.4042 55.4809 19.4667L52.7801 20.5Z"
          fill="#344A5E"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.5449 11.9666H6.10449V6.09998H8.28805C8.67339 6.09998 8.93024 6.09998 9.31558 6.23335L9.31774 6.23447C9.57387 6.36747 9.82977 6.50035 9.95777 6.63335C10.2146 6.89998 10.3431 7.29998 10.3431 7.69998C10.3431 8.09998 10.2146 8.49998 9.95777 8.7666C9.88351 8.84376 9.85221 8.87629 9.81414 8.88999C9.7864 8.89998 9.75507 8.89998 9.70092 8.89998C9.70092 8.89998 9.57243 8.89998 9.44407 9.03335C9.82941 9.16673 10.0863 9.29998 10.2147 9.56673C10.4716 9.83335 10.4716 10.1001 10.4716 10.5001C10.4716 10.9001 10.3431 11.3001 10.0863 11.5667L10.0861 11.5668C9.82925 11.7001 9.31546 11.9666 8.5449 11.9666ZM7.38888 8.49998H8.03107C8.41641 8.49998 8.67327 8.49998 8.80175 8.3666C8.93024 8.23323 9.05861 8.09998 9.05861 7.83323C9.05861 7.56673 8.93036 7.43348 8.80211 7.30023L8.80175 7.29985C8.68631 7.29985 8.57083 7.27291 8.44369 7.24324C8.28796 7.2069 8.11473 7.16648 7.90259 7.16648H7.38876V8.49998H7.38888ZM8.28805 10.7666H7.38888V9.4331H8.15956C8.5449 9.4331 8.93036 9.4331 9.05873 9.56648L9.05909 9.56685C9.18733 9.7001 9.31558 9.83335 9.31558 10.0999C9.31558 10.3666 9.18721 10.4999 9.05873 10.6332C8.93024 10.7666 8.67339 10.7666 8.28805 10.7666Z"
          fill="white"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.0957 10.7666L15.6095 11.9666H16.894L14.4535 6.09998H13.2975L10.8569 11.9666H12.1413L12.6551 10.7666H15.0957ZM13.1691 9.56673L13.8113 7.83335L14.582 9.56673H13.1691Z"
          fill="white"
        />
        <Path
          d="M21.3896 6.09998H22.6741V11.9666H21.3896L18.6922 8.3666V11.9666H17.4077V6.09998H18.5637L21.2611 9.83335V6.09998H21.3896Z"
          fill="white"
        />
        <Path
          d="M24.0869 6.09998H25.3714V8.49998L27.4266 6.09998H28.968L26.7843 8.63335C26.9128 8.89998 27.2981 9.43335 27.8118 10.2334C28.3257 11.0334 28.711 11.5667 28.9679 11.9667H27.555L25.8851 9.69998L25.3713 10.3666V11.9666H24.0869V6.09998Z"
          fill="white"
        />
        <Path
          d="M16.8109 17H7.30256C6.52105 17 6 17.7058 6 18.4118V27.5882C6 28.4353 6.65122 29 7.30256 29H16.6807C17.4622 29 17.9833 28.2942 17.9833 27.5882V18.4118C18.1134 17.706 17.4622 17 16.8109 17Z"
          fill="#FFD15C"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1="46.5"
          y1="-13.0427"
          x2="19.8863"
          y2="18.5852"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#68B6F3" />
          <stop offset="1" stop-color="#3F2F8C" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export const Location = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.23901 10.3914C4.25342 6.15077 7.70278 2.72477 11.9434 2.73918C16.1839 2.75359 19.6099 6.20294 19.5955 10.4435V10.5305C19.5434 13.287 18.0042 15.8348 16.1173 17.8261C15.0381 18.9468 13.833 19.9389 12.526 20.7827C12.1765 21.085 11.6581 21.085 11.3086 20.7827C9.36008 19.5144 7.64995 17.9132 6.2564 16.0522C5.01436 14.4294 4.30918 12.4598 4.23901 10.4174L4.23901 10.3914Z"
        stroke="#200E32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Circle
        cx="11.9172"
        cy="10.5392"
        r="2.46087"
        stroke="#200E32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const Email = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M17.2678 9.06104L13.0024 12.4953C12.1952 13.1282 11.0636 13.1282 10.2564 12.4953L5.95435 9.06104"
        stroke="#868686"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.88787 3.5H16.3158C17.6752 3.51525 18.969 4.08993 19.896 5.0902C20.823 6.09048 21.3022 7.42903 21.222 8.79412V15.322C21.3022 16.6871 20.823 18.0256 19.896 19.0259C18.969 20.0262 17.6752 20.6009 16.3158 20.6161H6.88787C3.96796 20.6161 2 18.2407 2 15.322V8.79412C2 5.87545 3.96796 3.5 6.88787 3.5Z"
        stroke="#868686"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const Lock = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M16.4235 9.4478V7.3008C16.4235 4.7878 14.3855 2.7498 11.8725 2.7498C9.35949 2.7388 7.31349 4.7668 7.30249 7.2808V7.3008V9.4478"
        stroke="#868686"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.6832 21.2497H8.04224C5.94824 21.2497 4.25024 19.5527 4.25024 17.4577V13.1687C4.25024 11.0737 5.94824 9.37671 8.04224 9.37671H15.6832C17.7772 9.37671 19.4752 11.0737 19.4752 13.1687V17.4577C19.4752 19.5527 17.7772 21.2497 15.6832 21.2497Z"
        stroke="#868686"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.863 14.2026V16.4236"
        stroke="#868686"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const Menu = (props) => {
  return (
    <Svg width="25" height="17" viewBox="0 0 25 17" fill="none" {...props}>
      <Path
        d="M1.59863 8.33333H13.5001M1.59863 1H23.5986M1.59863 15.6667H23.5986"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const SearchIcon = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Circle
        cx="11.7666"
        cy="11.7664"
        r="8.98856"
        stroke="#200E32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.0183 18.4849L21.5423 21.9997"
        stroke="#200E32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const Seemore = (props) => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
        fill="#5956E9"
      />
    </Svg>
  );
};

export const BackArrow = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M4.25 12.2744L19.25 12.2744"
        stroke="#200E32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976"
        stroke="#200E32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const Heart = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.761 20.8538C9.5904 19.5179 7.57111 17.9456 5.73929 16.1652C4.45144 14.8829 3.47101 13.3198 2.8731 11.5954C1.79714 8.25031 3.05393 4.42083 6.57112 3.28752C8.41961 2.69243 10.4384 3.03255 11.9961 4.20148C13.5543 3.03398 15.5725 2.69398 17.4211 3.28752C20.9383 4.42083 22.2041 8.25031 21.1281 11.5954C20.5302 13.3198 19.5498 14.8829 18.2619 16.1652C16.4301 17.9456 14.4108 19.5179 12.2402 20.8538L12.0051 21L11.761 20.8538Z"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15.7394 7.05298C16.8047 7.39328 17.5616 8.34968 17.6562 9.47496"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const Delete = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M19.325 9.46826C19.325 9.46826 18.782 16.2033 18.467 19.0403C18.317 20.3953 17.48 21.1893 16.109 21.2143C13.5 21.2613 10.888 21.2643 8.28003 21.2093C6.96103 21.1823 6.13803 20.3783 5.99103 19.0473C5.67403 16.1853 5.13403 9.46826 5.13403 9.46826"
        stroke="#FA4A0C"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M20.7082 6.23975H3.75024"
        stroke="#FA4A0C"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973"
        stroke="#FA4A0C"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const Alarm = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.50083 13.7871V13.5681C3.53295 12.9202 3.7406 12.2925 4.10236 11.7496C4.7045 11.0975 5.1167 10.2983 5.29571 9.43598C5.29571 8.7695 5.29571 8.0935 5.35393 7.42703C5.65469 4.21842 8.82728 2 11.9611 2H12.0387C15.1725 2 18.345 4.21842 18.6555 7.42703C18.7137 8.0935 18.6555 8.7695 18.704 9.43598C18.8854 10.3003 19.2972 11.1019 19.8974 11.7591C20.2618 12.2972 20.4698 12.9227 20.4989 13.5681V13.7776C20.5206 14.648 20.2208 15.4968 19.6548 16.1674C18.907 16.9515 17.8921 17.4393 16.8024 17.5384C13.607 17.8812 10.383 17.8812 7.18762 17.5384C6.09914 17.435 5.08576 16.9479 4.33521 16.1674C3.778 15.4963 3.48224 14.6526 3.50083 13.7871Z"
        stroke="#200E32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.55493 20.8518C10.0542 21.4785 10.7874 21.884 11.5922 21.9788C12.3971 22.0735 13.2072 21.8495 13.8433 21.3564C14.0389 21.2106 14.2149 21.041 14.3672 20.8518"
        stroke="#200E32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
