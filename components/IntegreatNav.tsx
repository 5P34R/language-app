export default function IntegreatNav(){
    return (
        <header className="w-full justify-center items-center bg-gray-50 shadow-md">
            <div className="flex justify-center items-center w-[75%] mx-auto sm:mt-5 lg:mt-1 md:mt-1 ">
                <div className="flex items-center p-2 w-2/3">
                    <div className="lg:block md:block sm:hidden hidden">
                        <img src="icon.jpg" alt="Company Icon" className="h-14 mt-2" />
                    </div>
                    <div className="sm:block md:hidden">
                        <img src="icon.jpg" alt="Company Icon" className="h-14" />
                    </div>
                    <div className="w-[0.3%] h-10 bg-gray-300 ml-3 sm:hidden md:block lg:block"></div>
                    <h1 className="lg:text-3xl md:text-2xl font-medium text-gray-800 lg:px-5 md:px-2 px-2"> Passau
                    </h1>
                </div>

                <div className="flex items-center py-2 px-2 w-1/4">
                    <a href="#" className="ml-5">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            direction="ltr">
                            <g id="search">
                                <path id="Vector"
                                    d="M15.755 14.255H14.965L14.685 13.985C15.665 12.845 16.255 11.365 16.255 9.755C16.255 6.165 13.345 3.255 9.755 3.255C6.165 3.255 3.255 6.165 3.255 9.755C3.255 13.345 6.165 16.255 9.755 16.255C11.365 16.255 12.845 15.665 13.985 14.685L14.255 14.965V15.755L19.255 20.745L20.745 19.255L15.755 14.255ZM9.755 14.255C7.26501 14.255 5.255 12.245 5.255 9.755C5.255 7.26501 7.26501 5.255 9.755 5.255C12.245 5.255 14.255 7.26501 14.255 9.755C14.255 12.245 12.245 14.255 9.755 14.255Z"
                                    fill="currentColor"></path>
                            </g>
                        </svg>
                    </a>
                    <a href="#" className="ml-5">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            direction="ltr">
                            <path
                                d="M3.54996 8.9302C3.88326 8.02694 4.34656 7.19034 4.94318 6.43374C5.99309 5.08718 7.31965 4.12725 8.92286 3.5473C9.95944 3.17066 11.0294 2.98735 12.1326 3.00068C12.9859 3.01068 13.8291 3.13067 14.6457 3.38398C17.0555 4.13725 18.8787 5.60714 20.062 7.84696C20.6553 8.9702 20.9719 10.1734 21.0452 11.44C21.0952 12.3033 21.0319 13.1565 20.8119 13.9965C20.6519 14.6097 20.4086 15.193 20.1586 15.7763C20.0286 16.0796 19.9053 16.3896 19.7787 16.6996C19.7487 16.7696 19.752 16.8329 19.7787 16.9029C20.162 17.8028 20.5386 18.7028 20.9219 19.6027C21.0152 19.826 21.1319 20.0426 21.0919 20.296C21.0919 20.3093 21.0919 20.3226 21.0919 20.3393C21.0819 20.386 21.0786 20.4359 21.0552 20.4759C20.9186 20.7259 20.7186 20.9059 20.4353 20.9759C20.1953 21.0326 19.962 20.9792 19.742 20.8859C18.8487 20.5026 17.9555 20.1193 17.0622 19.7293C16.9156 19.666 16.7856 19.6627 16.6489 19.7427C16.6256 19.7593 16.5989 19.7693 16.5756 19.786C15.3757 20.4759 14.0824 20.8692 12.7059 20.9726C11.896 21.0359 11.0927 20.9892 10.2961 20.8359C8.7762 20.5426 7.40631 19.9227 6.22974 18.9161C4.10658 17.0996 3.06 14.7764 3 12.4699C3 10.94 3.18665 9.92013 3.54996 8.9302ZM7.78295 5.96711C7.11967 6.43374 6.55971 7.00036 6.06309 7.65697H7.17967C7.38632 7.65697 7.59297 7.65031 7.79962 7.65697C7.86294 7.65697 7.89627 7.63031 7.91627 7.57698C8.12292 7.06369 8.38624 6.58039 8.69954 6.12376C8.92286 5.79712 9.16951 5.48715 9.40615 5.16717C9.42282 5.14717 9.43948 5.12717 9.46615 5.08718C8.85286 5.31383 8.29624 5.60047 7.77962 5.96377L7.78295 5.96711ZM8.74954 12.3533C8.7762 13.1165 8.8862 13.8665 9.06618 14.6064C9.07951 14.6631 9.11284 14.6597 9.15284 14.6597H11.896C12.8892 14.6597 13.8825 14.6597 14.8757 14.6597C14.939 14.6597 14.9624 14.6431 14.979 14.5798C15.219 13.6132 15.3257 12.6299 15.289 11.6333C15.2624 10.88 15.159 10.1368 14.9824 9.4035C14.9724 9.3635 14.9624 9.3435 14.9124 9.3435C12.9792 9.3435 11.0427 9.3435 9.10951 9.3435C9.10284 9.3435 9.09618 9.3435 9.06951 9.3435C9.01618 9.58349 8.96286 9.82347 8.91619 10.0668C8.77287 10.8201 8.71954 11.58 8.74621 12.3499L8.74954 12.3533ZM12.0159 4.87386C11.1127 5.67046 10.3227 6.55039 9.74279 7.62031H14.2858C14.2124 7.20034 12.6959 5.36382 12.0159 4.87386ZM14.5957 5.10384C14.7957 5.37049 14.989 5.62047 15.1724 5.87711C15.539 6.38707 15.849 6.9337 16.1056 7.50698C16.1489 7.60364 16.2089 7.65364 16.3223 7.65364C16.7922 7.65364 17.2655 7.65364 17.7355 7.65697H17.9788C17.0922 6.4704 15.9756 5.61714 14.5924 5.10384H14.5957ZM19.222 13.6198C19.3487 13.1099 19.4087 12.5866 19.412 12.0566C19.4187 11.1367 19.2454 10.2534 18.9287 9.3935C18.9121 9.35017 18.8954 9.32684 18.8421 9.32684C18.1388 9.32684 17.4322 9.32017 16.7289 9.31351C16.7156 9.31351 16.7022 9.31351 16.6756 9.31351C17.0589 11.1 17.0589 12.8832 16.6756 14.6597H18.9287C19.0287 14.3098 19.1387 13.9665 19.2254 13.6165L19.222 13.6198ZM15.0524 18.7128C15.4223 18.5494 15.7723 18.3528 16.1056 18.1261C16.4756 17.8728 16.8589 17.8428 17.2689 18.0195C17.7155 18.2128 18.1655 18.4028 18.6121 18.5928C18.6321 18.5994 18.6554 18.6061 18.6754 18.6161C18.5454 18.3061 18.4221 17.9995 18.2954 17.6962C18.2388 17.5562 18.1788 17.4195 18.1121 17.2829C18.0321 17.1062 17.9788 16.9196 17.9755 16.7262C17.9755 16.5996 17.9988 16.4696 18.0121 16.3363C18.0088 16.3363 17.9888 16.3363 17.9721 16.3363C17.3955 16.3363 16.8189 16.3363 16.2456 16.3396C16.1956 16.3396 16.1689 16.3496 16.1489 16.3996C15.7723 17.2862 15.2457 18.0828 14.6357 18.8227C14.6157 18.8461 14.5991 18.8661 14.5891 18.9027C14.7457 18.8394 14.9024 18.7794 15.0524 18.7128ZM12.0059 19.0994C12.5726 18.7694 14.0258 17.0262 14.2824 16.3696H9.73613C10.3194 17.4362 11.1127 18.3128 12.0059 19.0994ZM6.21641 16.6029C6.59305 17.0862 7.04968 17.4829 7.54297 17.8395C8.11626 18.2495 8.72621 18.5928 9.37949 18.8561C9.39949 18.8627 9.41949 18.8694 9.45282 18.8827C9.34283 18.7128 9.2395 18.5561 9.13951 18.3994C8.74287 17.7695 8.34624 17.1429 7.95627 16.5129C7.87961 16.3863 7.79295 16.3296 7.6363 16.3329C7.12967 16.3396 6.62304 16.3329 6.11308 16.3263H6.01309C6.08642 16.4296 6.14641 16.5196 6.20974 16.6063L6.21641 16.6029ZM4.6332 12.3099C4.66653 13.0965 4.83652 13.8565 5.10983 14.5931C5.12316 14.6331 5.14316 14.6631 5.19316 14.6631C5.89977 14.6631 6.60638 14.6697 7.31632 14.6731C7.32965 14.6731 7.33965 14.6731 7.36298 14.6731C6.98301 12.8899 6.98301 11.11 7.36298 9.32017H7.26966C6.57638 9.32351 5.8831 9.33017 5.18982 9.33017C5.13983 9.33017 5.1165 9.34684 5.10316 9.39017C4.75653 10.3334 4.58654 11.3033 4.62987 12.3099H4.6332Z"
                                fill="currentColor"></path>
                        </svg>
                    </a>
                </div>
            </div>

            <div className="flex justify-evenly items-center w-[75%] mx-auto text-sm sticky top-0">
                <a href="#" className="lg:px-22 md:px-20 px-18 text-center ">
                    <div
                        className="flex justify-center items-center lg:w-14 lg:h-14 md:w-12 md:h-12 w-10 h-10 rounded-full shadow-md bg-white mx-auto grid-cols-3 hover:border-2 hover:border-amber-200">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            direction="ltr" className="mx-auto">
                            <g id="signpost">
                                <path id="Vector"
                                    d="M13 10H18L21 7L18 4H13V2H11V4H4V10H11V12H6L3 15L6 18H11V22H13V18H20V12H13V10ZM6 6H17.17L18.17 7L17.17 8H6V6ZM18 16H6.83L5.83 15L6.83 14H18V16Z"
                                    fill="currentColor">
                                </path>
                            </g>
                        </svg>
                    </div>Local information
                </a>
                <a href="#" className="lg:px-22 md:px-20 px-18 text-center">
                    <div
                        className="flex justify-center items-center lg:w-14 lg:h-14 md:w-12 md:h-12 w-10 h-10 rounded-full shadow-md bg-white mx-auto grid-cols-3 hover:border-2 hover:border-amber-200">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            direction="ltr">
                            <path
                                d="M4.07175 21.2033C3.44204 21.2033 2.90544 20.9816 2.46195 20.5381C2.01849 20.0946 1.79675 19.558 1.79675 18.9283V5.07178C1.79675 4.44206 2.0185 3.90546 2.462 3.46198C2.90547 3.01849 3.44206 2.79675 4.07178 2.79675H19.9283C20.558 2.79675 21.0946 3.01849 21.5381 3.46198C21.9816 3.90546 22.2033 4.44206 22.2033 5.07178V18.9283C22.2033 19.558 21.9816 20.0946 21.5381 20.5381C21.0946 20.9816 20.558 21.2033 19.9283 21.2033H4.07175ZM4.07175 18.9283H19.9283V5.07178H4.07175V18.9283ZM6.03588 16.9642H17.9641V14.9642H6.03588V16.9642ZM6.03588 13H10.0359V7.0359H6.03588V13ZM12 13H17.9641V11H12V13ZM12 9.0359H17.9641V7.0359H12V9.0359Z"
                                fill="currentColor"></path>
                        </svg>
                    </div>News
                </a>
                <a href="#" className="lg:px-22 md:px-20 px-18 text-center ">
                    <div
                        className="flex justify-center items-center lg:w-14 lg:h-14 md:w-12 md:h-12 w-10 h-10 rounded-full shadow-md bg-white mx-auto grid-cols-3 hover:border-2 hover:border-amber-200">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            direction="ltr">
                            <g id="event">
                                <path id="Vector"
                                    d="M5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V6C3 5.45 3.19583 4.97917 3.5875 4.5875C3.97917 4.19583 4.45 4 5 4H6V2H8V4H16V2H18V4H19C19.55 4 20.0208 4.19583 20.4125 4.5875C20.8042 4.97917 21 5.45 21 6V20C21 20.55 20.8042 21.0208 20.4125 21.4125C20.0208 21.8042 19.55 22 19 22H5ZM5 20H19V10H5V20ZM5 8H19V6H5V8Z"
                                    fill="currentColor"></path>
                            </g>
                        </svg>
                    </div>Events
                </a>
                <a href="#" className="lg:px-22 md:px-20 px-18 text-center ">
                    <div
                        className="flex justify-center items-center lg:w-14 lg:h-14 md:w-12 md:h-12 w-10 h-10 rounded-full shadow-md bg-white mx-auto grid-cols-3 hover:border-2 hover:border-amber-200">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            direction="ltr">
                            <g id="map">
                                <path id="Vector"
                                    d="M20.5 3L20.34 3.03L15 5.1L9 3L3.36 4.9C3.15 4.97 3 5.15 3 5.38V20.5C3 20.78 3.22 21 3.5 21L3.66 20.97L9 18.9L15 21L20.64 19.1C20.85 19.03 21 18.85 21 18.62V3.5C21 3.22 20.78 3 20.5 3ZM10 5.47L14 6.87V18.53L10 17.13V5.47ZM5 6.46L8 5.45V17.15L5 18.31V6.46ZM19 17.54L16 18.55V6.86L19 5.7V17.54Z"
                                    fill="currentColor"></path>
                            </g>
                        </svg>
                    </div>Offers
                </a>
            </div>
        </header>
    )
}