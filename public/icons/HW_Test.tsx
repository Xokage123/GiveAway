// Helpers
import useWindowSize from "../../helpers/useWindowSizeHook"

const SVG_Test: React.FC = () => {
  const { width } = useWindowSize()

  const generateContent = () => {
    if (width >= 1100) {
      return (
        <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_14:242)">
            <path d="M21.2963 13.3044C21.2963 12.201 20.3978 11.2867 19.2786 11.2867H15.8737L15.9525 10.7507C16.4411 7.18818 18.585 6.98325 19.3889 6.9202C19.9564 6.87291 20.3978 6.4 20.3978 5.81675V1.10345C20.3978 0.803941 20.2717 0.504433 20.051 0.299507C19.8461 0.110345 19.5781 0 19.2943 0C19.2786 0 19.2471 0 19.2313 0C14.4392 0.26798 8.74854 2.69557 8.74854 12.7212V20.9182C8.74854 22.0217 9.64706 22.936 10.7663 22.936H19.2943C19.8303 22.936 20.3347 22.731 20.7131 22.3527C21.0914 21.9744 21.2963 21.47 21.2963 20.934V13.3044ZM19.0894 20.7291H10.9554V12.7212C10.9554 6.62069 13.1308 3.24729 17.6234 2.41182L18.1909 2.30148V4.8867L17.8599 4.98128C15.9367 5.56453 13.651 7.33005 13.651 12.3901C13.651 13.0049 14.1397 13.4936 14.7544 13.4936H19.1052V20.7291H19.0894Z" fill="black" />
            <path d="M37.407 13.3044C37.407 12.201 36.5085 11.2867 35.3893 11.2867H32.0001L32.0789 10.7507C32.5676 7.18818 34.7115 6.98325 35.5154 6.9202C36.0829 6.87291 36.5243 6.4 36.5243 5.81675V1.10345C36.5243 0.803941 36.3982 0.504433 36.1775 0.299507C35.9725 0.110345 35.7046 0 35.4208 0C35.4051 0 35.3735 0 35.3578 0C30.5814 0.26798 24.875 2.69557 24.875 12.7212V20.9182C24.875 22.0217 25.7735 22.936 26.8927 22.936H35.4208C35.9568 22.936 36.4612 22.731 36.8395 22.3527C37.2179 21.9744 37.4228 21.47 37.4228 20.934V13.3044H37.407ZM35.2001 20.7291H27.0661V12.7212C27.0661 6.62069 29.2415 3.24729 33.7341 2.41182L34.3016 2.30148V4.8867L33.9706 4.98128C32.0474 5.56453 29.7617 7.33005 29.7617 12.3901C29.7617 13.0049 30.2504 13.4936 30.8651 13.4936H35.2159V20.7291H35.2001Z" fill="black" />
            <path d="M43.586 12.0433C43.2392 12.0433 42.8924 12.1852 42.6402 12.4374C42.388 12.6896 42.2461 13.0364 42.2461 13.3832C42.2461 13.73 42.388 14.0768 42.6402 14.329C42.8924 14.5813 43.2392 14.7231 43.586 14.7231C43.9328 14.7231 44.2796 14.5813 44.5318 14.329C44.784 14.0768 44.9259 13.73 44.9259 13.3832C44.9259 13.0364 44.784 12.6896 44.5318 12.4374C44.2796 12.1852 43.9328 12.0433 43.586 12.0433Z" fill="black" />
            <path d="M5.31232 25.8207C5.10739 25.7103 4.8867 25.6473 4.66601 25.6473C4.5399 25.6473 4.41379 25.663 4.30345 25.6946C3.95665 25.7891 3.67291 26.0256 3.49951 26.3251C1.21379 30.4394 0 35.0896 0 39.8187C0 55.1409 12.469 67.5941 27.7754 67.5941H44.9419L56.9537 79.6059C57.2059 79.8581 57.5369 80 57.8995 80C58.0729 80 58.2463 79.9684 58.4197 79.9054C58.9241 79.7005 59.2394 79.2118 59.2394 78.6601V66.7586L59.4128 66.7113C65.0562 65.2453 70.2108 61.9507 73.9153 57.4423C77.9823 52.4926 80.2207 46.2345 80.2207 39.8187C80.2207 24.4965 67.7517 12.0433 52.4453 12.0433H50.4591C49.7182 12.0433 49.1192 12.6423 49.1192 13.3832C49.1192 14.1241 49.7182 14.7231 50.4591 14.7231H52.4453C66.2857 14.7231 77.5409 25.9783 77.5409 39.8187C77.5409 51.6256 69.1547 61.9665 57.6158 64.3783C57.001 64.5044 56.5438 65.0561 56.5438 65.6867V75.4128L46.4236 65.2926C46.1714 65.0404 45.8246 64.8985 45.4778 64.8985H27.7754C13.935 64.9143 2.6798 53.6591 2.6798 39.8187C2.6798 35.5468 3.76749 31.3379 5.83251 27.6335C6.19507 26.9872 5.95862 26.1675 5.31232 25.8207Z" fill="black" />
            <path d="M59.5233 27.7438H20.7134C19.9725 27.7438 19.3735 28.3429 19.3735 29.0837C19.3735 29.8246 19.9725 30.4236 20.7134 30.4236H59.5075C60.2484 30.4236 60.8474 29.8246 60.8474 29.0837C60.8474 28.3429 60.2642 27.7438 59.5233 27.7438Z" fill="black" />
            <path d="M59.5233 36.1458H20.7134C19.9725 36.1458 19.3735 36.7448 19.3735 37.4857C19.3735 38.2266 19.9725 38.8256 20.7134 38.8256H59.5075C60.2484 38.8256 60.8474 38.2266 60.8474 37.4857C60.8474 36.7448 60.2642 36.1458 59.5233 36.1458Z" fill="black" />
            <path d="M59.5233 44.5636H20.7134C19.9725 44.5636 19.3735 45.1626 19.3735 45.9035C19.3735 46.6444 19.9725 47.2434 20.7134 47.2434H59.5075C60.2484 47.2434 60.8474 46.6444 60.8474 45.9035C60.8474 45.1626 60.2642 44.5636 59.5233 44.5636Z" fill="black" />
            <path d="M59.5231 52.9655H38.8414C38.1005 52.9655 37.5015 53.5645 37.5015 54.3054C37.5015 55.0463 38.1005 55.6453 38.8414 55.6453H59.5231C60.264 55.6453 60.863 55.0463 60.863 54.3054C60.863 53.5645 60.2483 52.9655 59.5231 52.9655Z" fill="black" />
            <path d="M29.9666 52.9655H29.9351C29.1942 52.9655 28.5952 53.5645 28.5952 54.3054C28.5952 55.0463 29.1942 55.6453 29.9351 55.6453H29.9666C30.7075 55.6453 31.3065 55.0463 31.3065 54.3054C31.3065 53.5645 30.7075 52.9655 29.9666 52.9655Z" fill="black" />
          </g>
          <defs>
            <clipPath id="clip0_14:242">
              <rect width="80.2365" height="80" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    } else if (width < 1100 && width >= 768) {
      return (
        <svg width="47" height="48" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_24:189)">
            <path d="M12.4524 8.31791C12.4524 7.67509 11.9289 7.14246 11.2769 7.14246H9.29337L9.33928 6.83023C9.62396 4.75484 10.8729 4.63546 11.3412 4.59872C11.6718 4.57118 11.9289 4.29568 11.9289 3.9559V1.21014C11.9289 1.03566 11.8555 0.861175 11.7269 0.741794C11.6075 0.631596 11.4514 0.567314 11.2861 0.567314C11.2769 0.567314 11.2586 0.567314 11.2494 0.567314C8.4577 0.723428 5.14258 2.13764 5.14258 7.97813V12.7534C5.14258 13.3962 5.66602 13.9288 6.31802 13.9288H11.2861C11.5983 13.9288 11.8922 13.8094 12.1126 13.589C12.333 13.3686 12.4524 13.0748 12.4524 12.7626V8.31791ZM11.1667 12.6432H6.42822V7.97813C6.42822 4.42424 7.6955 2.45905 10.3127 1.97234L10.6433 1.90806V3.4141L10.4504 3.46919C9.3301 3.80897 7.99854 4.83749 7.99854 7.78528C7.99854 8.14343 8.28322 8.4281 8.64136 8.4281H11.1759V12.6432H11.1667Z" fill="black" />
            <path d="M21.8372 8.31791C21.8372 7.67509 21.3138 7.14246 20.6618 7.14246H18.6874L18.7333 6.83023C19.018 4.75484 20.2669 4.63546 20.7353 4.59872C21.0659 4.57118 21.323 4.29568 21.323 3.9559V1.21014C21.323 1.03566 21.2495 0.861175 21.121 0.741794C21.0016 0.631596 20.8455 0.567314 20.6802 0.567314C20.671 0.567314 20.6526 0.567314 20.6434 0.567314C17.8609 0.723428 14.5366 2.13764 14.5366 7.97813V12.7534C14.5366 13.3962 15.0601 13.9288 15.7121 13.9288H20.6802C20.9924 13.9288 21.2863 13.8094 21.5066 13.589C21.727 13.3686 21.8464 13.0748 21.8464 12.7626V8.31791H21.8372ZM20.5516 12.6432H15.8131V7.97813C15.8131 4.42424 17.0804 2.45905 19.6976 1.97234L20.0282 1.90806V3.4141L19.8353 3.46919C18.715 3.80897 17.3834 4.83749 17.3834 7.78528C17.3834 8.14343 17.6681 8.4281 18.0262 8.4281H20.5608V12.6432H20.5516Z" fill="black" />
            <path d="M25.4373 7.58324C25.2353 7.58324 25.0332 7.66589 24.8863 7.81282C24.7394 7.95975 24.6567 8.16178 24.6567 8.36381C24.6567 8.56584 24.7394 8.76787 24.8863 8.9148C25.0332 9.06173 25.2353 9.14438 25.4373 9.14438C25.6393 9.14438 25.8414 9.06173 25.9883 8.9148C26.1352 8.76787 26.2179 8.56584 26.2179 8.36381C26.2179 8.16178 26.1352 7.95975 25.9883 7.81282C25.8414 7.66589 25.6393 7.58324 25.4373 7.58324Z" fill="black" />
            <path d="M3.14063 15.6093C3.02124 15.545 2.89268 15.5083 2.76412 15.5083C2.69065 15.5083 2.61719 15.5175 2.5529 15.5359C2.35087 15.591 2.18558 15.7287 2.08456 15.9032C0.753002 18.3 0.0458984 21.009 0.0458984 23.764C0.0458984 32.69 7.30978 39.9447 16.2266 39.9447H26.2271L33.2247 46.9423C33.3716 47.0892 33.5645 47.1719 33.7757 47.1719C33.8767 47.1719 33.9777 47.1535 34.0787 47.1168C34.3726 46.9974 34.5562 46.7127 34.5562 46.3913V39.458L34.6573 39.4305C37.9448 38.5764 40.9477 36.6571 43.1058 34.0308C45.475 31.1472 46.779 27.5015 46.779 23.764C46.779 14.8379 39.5152 7.58324 30.5983 7.58324H29.4412C29.0096 7.58324 28.6606 7.9322 28.6606 8.36381C28.6606 8.79542 29.0096 9.14438 29.4412 9.14438H30.5983C38.6611 9.14438 45.2179 15.7012 45.2179 23.764C45.2179 30.6422 40.3325 36.6663 33.6104 38.0714C33.2522 38.1448 32.9859 38.4662 32.9859 38.8336V44.4996L27.0903 38.604C26.9434 38.457 26.7414 38.3744 26.5393 38.3744H16.2266C8.16382 38.3836 1.60704 31.8268 1.60704 23.764C1.60704 21.2753 2.24068 18.8234 3.44367 16.6654C3.65488 16.2889 3.51714 15.8114 3.14063 15.6093Z" fill="black" />
            <path d="M34.7216 16.7297H12.1126C11.681 16.7297 11.332 17.0787 11.332 17.5103C11.332 17.9419 11.681 18.2908 12.1126 18.2908H34.7124C35.144 18.2908 35.4929 17.9419 35.4929 17.5103C35.4929 17.0787 35.1532 16.7297 34.7216 16.7297Z" fill="black" />
            <path d="M34.7216 21.6243H12.1126C11.681 21.6243 11.332 21.9733 11.332 22.4049C11.332 22.8365 11.681 23.1854 12.1126 23.1854H34.7124C35.144 23.1854 35.4929 22.8365 35.4929 22.4049C35.4929 21.9733 35.1532 21.6243 34.7216 21.6243Z" fill="black" />
            <path d="M34.7216 26.5282H12.1126C11.681 26.5282 11.332 26.8771 11.332 27.3087C11.332 27.7403 11.681 28.0893 12.1126 28.0893H34.7124C35.144 28.0893 35.4929 27.7403 35.4929 27.3087C35.4929 26.8771 35.1532 26.5282 34.7216 26.5282Z" fill="black" />
            <path d="M34.7215 31.4228H22.6731C22.2415 31.4228 21.8926 31.7717 21.8926 32.2033C21.8926 32.6349 22.2415 32.9839 22.6731 32.9839H34.7215C35.1531 32.9839 35.502 32.6349 35.502 32.2033C35.502 31.7717 35.1439 31.4228 34.7215 31.4228Z" fill="black" />
            <path d="M17.503 31.4228H17.4847C17.0531 31.4228 16.7041 31.7717 16.7041 32.2033C16.7041 32.6349 17.0531 32.9839 17.4847 32.9839H17.503C17.9346 32.9839 18.2836 32.6349 18.2836 32.2033C18.2836 31.7717 17.9346 31.4228 17.503 31.4228Z" fill="black" />
          </g>
          <defs>
            <clipPath id="clip0_24:189">
              <rect width="46.7423" height="46.6046" fill="white" transform="translate(0.0458984 0.567314)" />
            </clipPath>
          </defs>
        </svg>
      )
    }
  }

  return (
    <>
    {
        generateContent()
    }
    </>
  )
}

export default SVG_Test