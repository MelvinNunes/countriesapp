import { ExportToCSV } from "./export";

export default function Navbar({ data }) {
  function downloadCSV(data) {
    ExportToCSV(data);
  }

  return (
    <div>
      <nav className="bg-white border-gray-200 px-6 py-6 dark:bg-gray-900 flex justify-between items-center">
        <div className="container ">
          <a href="/" className="flex gap-2 items-center">
            <svg
              enableBackground="new 0 0 32 32"
              height="32px"
              version="1.1"
              viewBox="0 0 32 32"
              width="32px"
              xmlns="http://www.w3.org/2000/svg">
              <g id="flag_x2C__Ukraine">
                <g id="XMLID_3888_">
                  <g id="XMLID_3898_">
                    <rect fill="#65C7EA" height="6.5" width="3" x="16" y="4" />
                  </g>
                  <g id="XMLID_3897_">
                    <path
                      d="M30.5,25.5H17c-0.828,0-1.5-0.671-1.5-1.5V6.5V7c0,0.829,0.672,1.5,1.5,1.5h13.5V17V25.5z"
                      fill="#FF8A80"
                    />
                  </g>
                  <g id="XMLID_1373_">
                    <path
                      d="M30.5,25.5H17c-0.828,0-1.5-0.671-1.5-1.5V6.5V7c0,0.829,0.672,1.5,1.5,1.5h13.5V18V25.5z"
                      fill="#FFF176"
                    />
                  </g>
                  <g id="XMLID_3896_">
                    <path
                      d="M30.5,17H17c-0.828,0-1.5-0.671-1.5-1.5v-9V7c0,0.829,0.672,1.5,1.5,1.5h13.5V17z"
                      fill="#80D8FF"
                    />
                  </g>
                  <g id="XMLID_1374_">
                    <path
                      d="M17,5.5L17,5.5c0.828,0,1.5-0.671,1.5-1.5l0,0c0-0.829-0.672-1.5-1.5-1.5H1.5v17h14V7     C15.5,6.171,16.172,5.5,17,5.5z"
                      fill="#FFF176"
                    />
                  </g>
                  <g id="XMLID_3893_">
                    <path
                      d="M17,5.5L17,5.5c0.828,0,1.5-0.671,1.5-1.5l0,0c0-0.829-0.672-1.5-1.5-1.5H1.5V11h14V7     C15.5,6.171,16.172,5.5,17,5.5z"
                      fill="#80D8FF"
                    />
                  </g>
                  <g id="XMLID_3891_">
                    <rect fill="#E6CAA0" height="10" width="2" x="1.5" y="21" />
                  </g>
                  <g id="XMLID_3890_">
                    <path
                      d="M3.5,3.5h-2v-1c0-0.552,0.448-1,1-1l0,0c0.552,0,1,0.448,1,1V3.5z"
                      fill="#E6CAA0"
                    />
                  </g>
                  <g id="XMLID_1375_">
                    <rect
                      fill="#80D8FF"
                      height="17"
                      width="2"
                      x="1.5"
                      y="3.5"
                    />
                  </g>
                  <g id="XMLID_3889_">
                    <rect
                      fill="#FFF176"
                      height="8.5"
                      width="2"
                      x="1.5"
                      y="12"
                    />
                  </g>
                </g>
                <g id="XMLID_3880_">
                  <g id="XMLID_3887_">
                    <path
                      d="M30.5,26H17c-1.103,0-2-0.897-2-2V7c0-0.276,0.224-0.5,0.5-0.5S16,6.724,16,7c0,0.551,0.448,1,1,1h13.5     C30.776,8,31,8.224,31,8.5v17C31,25.776,30.776,26,30.5,26z M16,8.731V24c0,0.551,0.448,1,1,1h13V9H17     C16.636,9,16.294,8.902,16,8.731z"
                      fill="#455A64"
                    />
                  </g>
                  <g id="XMLID_3886_">
                    <path
                      d="M15.5,20h-10C5.224,20,5,19.776,5,19.5S5.224,19,5.5,19h10c0.276,0,0.5,0.224,0.5,0.5S15.776,20,15.5,20z     "
                      fill="#455A64"
                    />
                  </g>
                  <g id="XMLID_3885_">
                    <path
                      d="M15.5,7.5C15.224,7.5,15,7.276,15,7c0-1.103,0.897-2,2-2c0.552,0,1-0.449,1-1s-0.448-1-1-1H5.5     C5.224,3,5,2.776,5,2.5S5.224,2,5.5,2H17c1.103,0,2,0.897,2,2s-0.897,2-2,2c-0.552,0-1,0.449-1,1C16,7.276,15.776,7.5,15.5,7.5z"
                      fill="#455A64"
                    />
                  </g>
                  <g id="XMLID_3884_">
                    <path
                      d="M3.5,31C3.224,31,3,30.776,3,30.5v-10C3,20.224,3.224,20,3.5,20S4,20.224,4,20.5v10     C4,30.776,3.776,31,3.5,31z"
                      fill="#455A64"
                    />
                  </g>
                  <g id="XMLID_3883_">
                    <path
                      d="M1.5,31C1.224,31,1,30.776,1,30.5v-27C1,3.224,1.224,3,1.5,3S2,3.224,2,3.5v27C2,30.776,1.776,31,1.5,31z     "
                      fill="#455A64"
                    />
                  </g>
                  <g id="XMLID_3882_">
                    <path
                      d="M3.5,4h-2C1.224,4,1,3.776,1,3.5S1.224,3,1.5,3H3V2.5c0-0.41-0.566-0.642-0.853-0.354     C1.952,2.342,1.635,2.341,1.439,2.147C1.244,1.952,1.244,1.635,1.438,1.44C1.722,1.156,2.099,1,2.5,1C3.327,1,4,1.673,4,2.5v1     C4,3.776,3.776,4,3.5,4z"
                      fill="#455A64"
                    />
                  </g>
                  <g id="XMLID_3881_">
                    <path
                      d="M3.5,21h-2C1.224,21,1,20.776,1,20.5v-17C1,3.224,1.224,3,1.5,3h2C3.776,3,4,3.224,4,3.5v17     C4,20.776,3.776,21,3.5,21z M2,20h1V4H2V20z"
                      fill="#455A64"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Paises
            </span>
          </a>
        </div>
        <div className="flex justify-end">
          <button
            className="dark:text-white dark:bg-gray-400 rounded md:py-4 md:px-3 hover:bg-gray-500 transition-all"
            onClick={() => {
              downloadCSV(data);
              console.log(data);
            }}>
            Converter para EXCEL
          </button>
        </div>
      </nav>
    </div>
  );
}
