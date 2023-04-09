import createReactClass from 'create-react-class';
import ResizableSVG from '../ResizableSVG';

export default createReactClass({
  mixins: [ResizableSVG],

  render() {
    let viewBox: string = this.getViewBox(259, 228);
    let { paused } = this.props;

    return (
      <svg
        className={`island tent ${paused ? 'paused' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
        width="259"
        height="228"
        viewBox={viewBox}
      >
        <g fill="none" fill-rule="evenodd">
          <path stroke="#5E4634" strokeWidth="3" d="M111.646 31.21v5.522m-5.973-2.762v5.524" strokeLinecap="round" strokeLinejoin="round" />
          <path fill="#FFE6A7" d="M1.5 100.228v57.903l118.415 68.37 136.734-78.94v-57.9L1.5 100.23z" />
          <path fill="#EDD194" d="M118.814 95.365v130.5l1.1.633 136.735-78.942V89.653l-137.84 5.712z" />
          <path
            stroke="#5E4634"
            strokeWidth="3"
            d="M256.65 89.65v57.907L119.914 226.5 1.5 158.13v-57.906"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path fill="#C7E082" d="M1.5 100.228v20.403L119.915 189l136.734-78.944V89.653L1.5 100.228z" />
          <path fill="#B0CC64" d="M119.813 95.323v93.618l.102.06 136.735-78.94V89.65l-136.84 5.673z" />
          <path
            stroke="#5E4634"
            strokeWidth="3"
            d="M256.65 92.65v17.407L119.914 189 1.5 120.63v-20.406"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path fill="#B7D86F" d="M1.5 100.228l118.414 68.367 136.734-78.942-118.413-68.367L1.5 100.228z" />
          <path
            stroke="#5E4634"
            strokeWidth="3"
            d="M119.915 168.595L1.5 100.228l136.733-78.945 118.416 68.37-136.74 78.942zm0 0V226.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path fill="#FFE6A7" d="M138.617 56.163V75.84c0 1.99 3.91 3.603 8.73 3.603s8.73-1.614 8.73-3.603V56.163h-17.46z" />
          <path
            stroke="#FFE6A7"
            strokeWidth="3"
            d="M138.617 56.163V75.84c0 1.99 3.91 3.603 8.73 3.603s8.73-1.614 8.73-3.603V56.163h-17.46z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path fill="#FFE6A7" d="M35.706 83.472v14.484c0 1.464 2.877 2.652 6.426 2.652 3.55 0 6.426-1.188 6.426-2.652V83.472H35.706z" />
          <path fill="#EDD194" d="M42.502 83.472v17.12c3.372-.08 6.054-1.226 6.054-2.636V83.472h-6.054z" />
          <path
            stroke="#5E4634"
            strokeWidth="3"
            d="M35.706 83.472v14.484c0 1.464 2.877 2.652 6.426 2.652 3.55 0 6.426-1.188 6.426-2.652V83.472H35.706z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g className="stretch">
            <path
              fill="#C3F270"
              d="M150.353 3.903l19.275 52.674c.918 2.505.054 5.36-2.184 6.816-3.228 2.103-9.243 4.41-20.097 4.41-10.854 0-16.87-2.307-20.097-4.41-2.238-1.455-3.102-4.31-2.184-6.816L144.34 3.903c1.027-2.802 4.987-2.802 6.013 0"
            />
            <path
              fill="#B7D86F"
              d="M128.847 46.24c3.45-5.39 5.59-12.08 6.97-19.04l-6.97 19.04zm40.783 10.338L152.102 8.686c-1.743 20.298-5.682 44.613-21.522 56.42 3.565 1.474 8.875 2.698 16.768 2.698 10.85 0 16.87-2.307 20.097-4.41 2.235-1.455 3.102-4.31 2.184-6.816"
            />
            <path
              stroke="#5E4634"
              strokeWidth="3"
              d="M150.353 3.903l19.275 52.674c.918 2.505.054 5.36-2.184 6.816-3.228 2.103-9.243 4.41-20.097 4.41-10.854 0-16.87-2.307-20.097-4.41-2.238-1.455-3.102-4.31-2.184-6.816L144.34 3.903c1.027-2.802 4.987-2.802 6.013 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fill="#C3F270"
              d="M45.95 43.967l15.097 42.288c.408 1.146-.09 2.424-1.185 2.952-2.796 1.344-8.613 3.546-16.737 3.546-8.12 0-13.938-2.202-16.734-3.546-1.09-.528-1.59-1.806-1.18-2.952L40.3 43.967c.947-2.655 4.703-2.655 5.65 0"
            />
            <path
              fill="#B7D86F"
              d="M61.047 86.256L45.95 43.968c-.947-2.658-4.703-2.658-5.65 0l-.604 1.69 12.35 34.598c.41 1.143-.09 2.424-1.184 2.95-2.796 1.343-8.613 3.545-16.737 3.545-3.34 0-6.26-.38-8.772-.91l-.15.42c-.408 1.15.093 2.43 1.188 2.95 2.8 1.35 8.62 3.55 16.74 3.55 8.13 0 13.94-2.2 16.74-3.54 1.1-.522 1.6-1.803 1.19-2.95"
            />
            <path
              stroke="#5E4634"
              strokeWidth="3"
              d="M45.95 43.967l15.097 42.288c.408 1.146-.09 2.424-1.185 2.952-2.796 1.344-8.613 3.546-16.737 3.546-8.12 0-13.938-2.202-16.734-3.546-1.09-.528-1.59-1.806-1.18-2.952L40.3 43.967c.947-2.655 4.703-2.655 5.65 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path fill="#E8C597" d="M97.13 70.037l-12.27 29.64 26.784 15.774 5.154-32.78L97.13 70.04z" />
          <path fill="#CCAE85" d="M111.646 115.45l43.365-24.725-13.38-41.89c-.58-1.814-2.69-2.636-4.34-1.69l-40.15 22.89" />
          <path
            stroke="#5E4634"
            strokeWidth="3"
            d="M97.13 70.037l40.15-22.893c1.655-.945 3.764-.123 4.343 1.692l13.39 41.89-43.37 24.725L97.13 70.04z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            stroke="#5E4634"
            strokeWidth="3"
            d="M129.075 126.302v4.875L97.13 70.037l-12.27 29.64 26.785 15.774M97.13 70.04L71.546 94.72v-5.07M97.13 71.366v34.347"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path fill="#FFE6A7" d="M159.402 80.28v22.253c0 2.25 4.42 4.074 9.873 4.074 5.454 0 9.873-1.824 9.873-4.074V80.28h-19.746z" />
          <path fill="#EDD194" d="M169.86 80.28v26.303c5.175-.13 9.288-1.884 9.288-4.05V80.28h-9.288z" />
          <path
            stroke="#5E4634"
            strokeWidth="3"
            d="M159.402 80.28v22.253c0 2.25 4.42 4.074 9.873 4.074 5.454 0 9.873-1.824 9.873-4.074V80.28h-19.746z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g className="stretch">
            <path
              fill="#C3F270"
              d="M172.675 21.178l21.798 59.572c1.038 2.832.06 6.063-2.47 7.707-3.65 2.376-10.454 4.986-22.727 4.986-12.276 0-19.08-2.61-22.73-4.986-2.53-1.644-3.508-4.875-2.47-7.707l21.8-59.572c1.16-3.168 5.64-3.168 6.8 0"
            />
            <path
              fill="#B7D86F"
              d="M194.475 80.748l-21.8-59.568c-1.16-3.17-5.64-3.17-6.8 0l-3.464 9.465 14.48 39.55c1.04 2.83.06 6.062-2.47 7.71-3.65 2.375-10.45 4.985-22.72 4.985-2.96 0-5.58-.16-7.93-.423-.205 2.337.767 4.67 2.795 5.99 3.65 2.377 10.455 4.987 22.728 4.987s19.08-2.61 22.73-4.986c2.53-1.644 3.51-4.875 2.47-7.71"
            />
            <path
              stroke="#5E4634"
              strokeWidth="3"
              d="M172.675 21.178l21.798 59.572c1.038 2.832.06 6.063-2.47 7.707-3.65 2.376-10.454 4.986-22.727 4.986-12.276 0-19.08-2.61-22.73-4.986-2.53-1.644-3.508-4.875-2.47-7.707l21.8-59.572c1.16-3.168 5.64-3.168 6.8 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            fill="#EDD194"
            d="M128.01 101.186l12.873-7.36c1.632-.932 3.76-.692 4.986.733.91 1.06 1.48 2.55 1.48 4.2 0 2.21-1.02 4.13-2.52 5.13l-12.94 8.31"
          />
          <path
            stroke="#5E4634"
            strokeWidth="3"
            d="M128.01 101.186l12.873-7.36c1.632-.932 3.76-.692 4.986.733.91 1.06 1.48 2.55 1.48 4.2 0 2.21-1.02 4.13-2.52 5.13l-12.94 8.31"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fill="#FFE6A7"
            d="M134.918 106.72c0 3.29-2.223 5.96-4.962 5.96-2.742 0-4.962-2.67-4.962-5.96s2.22-5.96 4.962-5.96c2.74 0 4.962 2.67 4.962 5.96"
          />
          <path
            stroke="#5E4634"
            strokeWidth="3"
            d="M134.918 106.72c0 3.29-2.223 5.96-4.962 5.96-2.742 0-4.962-2.67-4.962-5.96s2.22-5.96 4.962-5.96c2.74 0 4.962 2.67 4.962 5.96zm82.06-24.873v3.25M97.13 56.98v3.25m-29.942 50.864v3.25m157.692-27.43v3.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fill="#EBEBEB"
            d="M190.68 111.843H184c-.735 0-1.335-.6-1.335-1.338v-.555c0-1.776 1.452-3.23 3.23-3.23h2.897c1.775 0 3.23 1.454 3.23 3.23v.555c0 .738-.603 1.338-1.34 1.338"
          />
          <path
            stroke="#5E4634"
            strokeWidth="3"
            d="M190.68 111.843H184c-.735 0-1.335-.6-1.335-1.338v-.555c0-1.776 1.452-3.23 3.23-3.23h2.897c1.775 0 3.23 1.454 3.23 3.23v.555c0 .738-.603 1.338-1.34 1.338z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fill="#EBEBEB"
            d="M79.202 72.925h-6.684c-.735 0-1.335-.6-1.335-1.338v-.555c0-1.776 1.452-3.23 3.23-3.23h2.896c1.77 0 3.23 1.454 3.23 3.23v.555c0 .738-.61 1.338-1.34 1.338"
          />
          <path
            stroke="#5E4634"
            strokeWidth="3"
            d="M79.202 72.925h-6.684c-.735 0-1.335-.6-1.335-1.338v-.555c0-1.776 1.452-3.23 3.23-3.23h2.896c1.77 0 3.23 1.454 3.23 3.23v.555c0 .738-.61 1.338-1.34 1.338zm88.346 62.265v5.522m-7.875-.648v5.523"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g className="leaves">
            <path
              fill="#C3F270"
              d="M73.22 25.593h-.005l-.003-.003c-4.242-4.512-2.175-11.916 3.792-13.578l.003-.003h.003c4.242 4.51 2.175 11.91-3.79 13.58"
            />
            <path
              stroke="#5E4634"
              strokeWidth="3"
              d="M73.22 25.593h-.005l-.003-.003c-4.242-4.512-2.175-11.916 3.792-13.578l.003-.003h.003c4.242 4.51 2.175 11.91-3.79 13.58z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g className="lines">
            <path
              stroke="#5E4634"
              strokeWidth="3"
              d="M69.695 30.95c-2.073 7.152-7.182 13.37-13.797 16.797"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="6 12"
            />
          </g>
          <g className="leaves">
            <path
              fill="#C3F270"
              d="M209.94 41.577l-.004-.006h.003c3.5-5.1 11.17-4.67 14.07.81v.01l-.01.01c-3.506 5.107-11.18 4.666-14.078-.806"
            />
            <path
              stroke="#5E4634"
              strokeWidth="3"
              d="M209.94 41.577l-.004-.006h.003c3.5-5.1 11.17-4.67 14.07.81v.01l-.01.01c-3.506 5.107-11.18 4.666-14.078-.806z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    );
  },
});
