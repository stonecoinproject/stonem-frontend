import * as React from 'react';

const addMasternodeIcon = ({ ...props }) => (
    <svg width={35} height={35} {...props}>
      <g fill="none" fillRule="evenodd">
        <rect
          width={34}
          height={34}
          x={0.5}
          y={0.5}
          fill="#4DA1FF"
          stroke="#4DA1FF"
          rx={4}
        />
        <path
          fill="#FFF"
          d="M17.519 4C24.95 4 31 10.05 31 17.519 31 24.95 24.95 31 17.519 31 10.049 31 4 24.95 4 17.519 4 10.049 10.05 4 17.519 4zm7.132 13.22v.672c0 .71-.56 1.27-1.27 1.27h-4.257v4.257c0 .672-.56 1.27-1.27 1.27h-.671c-.71 0-1.27-.598-1.27-1.27v-4.257h-4.257c-.673 0-1.27-.56-1.27-1.27v-.672c0-.71.597-1.27 1.27-1.27h4.257v-4.257c0-.71.56-1.27 1.27-1.27h.672c.71 0 1.27.56 1.27 1.27v4.257h4.257c.71 0 1.27.56 1.27 1.27z"
        />
      </g>
  </svg>
);

export default addMasternodeIcon;
