export default function CountryCard(props) {
  return (
    <div className="flex shadow-md transition-all duration-500 hover:scale-105 hover:shadow-lg outline-none">
      <div class="w-96  h-[500px] bg-white rounded-lg border dark:border-none border-gray-200 shadow-lg dark:bg-gray-800">
        <img
          className="w-full rounded-t-md h-48 bg-cover"
          src={props?.flag}
          alt="flag"
        />

        <div class="p-5 flex flex-col gap-1">
          <h5 class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props?.name}
          </h5>
          {props.nativeName && (
            <h6 className="text-black font-semibold flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M6 10h2a2 2 0 0 1 2 2v5h-3a2 2 0 1 1 0 -4h3"></path>
                <path d="M14 7v10"></path>
                <rect x="14" y="10" width="5" height="7" rx="2"></rect>
              </svg>
              Nome nativo: {props.nativeName}
            </h6>
          )}
          <h6 className="text-black font-medium flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="12" cy="12" r="9"></circle>
              <line x1="3.6" y1="9" x2="20.4" y2="9"></line>
              <line x1="3.6" y1="15" x2="20.4" y2="15"></line>
              <path d="M11.5 3a17 17 0 0 0 0 18"></path>
              <path d="M12.5 3a17 17 0 0 1 0 18"></path>
            </svg>
            Região: {props.region}
          </h6>
          <h6 className="text-black font-medium flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="12" cy="10" r="4"></circle>
              <path d="M6.75 16a8.015 8.015 0 1 0 9.25 -13"></path>
              <line x1="12" y1="18" x2="12" y2="22"></line>
              <line x1="8" y1="22" x2="16" y2="22"></line>
            </svg>
            Sub-Região: {props?.subregion}
          </h6>
          <h6 className="text-black font-medium flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
            </svg>
            População: {props?.population}
          </h6>
          <h6 className="text-black font-medium flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="4" y1="19" x2="20" y2="19"></line>
              <polyline points="4 15 8 9 12 11 16 6 20 10 20 15 4 15"></polyline>
            </svg>
            Área: {props?.area}
          </h6>
          <h6 className="text-black font-medium flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="12" cy="12" r="9"></circle>
              <polyline points="12 7 12 12 15 15"></polyline>
            </svg>
            Fuso Horário: {props?.timezones}
          </h6>
        </div>
      </div>
    </div>
  );
}
