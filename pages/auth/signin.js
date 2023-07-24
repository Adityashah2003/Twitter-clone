import {getProviders,signIn} from "next-auth/react";

export default function signin({providers}) {
  return (
    <div className="flex justify-center mt-20 space-x-4">
        <img className="hidden md:inline-flex object-cover md:w-44 md:h-80 rotate-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX////09PRERERKoOwvLy8lJSWDg4P8/PwqKipdXV04ODh4eHj5+fkyMjJAQEAhISHr6+usrKyQkJBLpfQWFhbIyMgdHR2ioqI6Ojrn5+dSUlLh4eG0tLRjY2NHR0fW1tZra2s9bJcuJhuysrIRERFzc3MuJRgvKyU0RFNDhcBJnOba2toqJR6+vr5OTk4zP0o4VnI7YodGjs9Cf7UyOD6ZmZmMjIwtHgA5XH0/dKRCgLk9aZI3UWkuIxIAAABIltuyN9jfAAAG4klEQVR4nO2daXeiPBSARROJsioQEXdqiwvWtZ3aZfz//+oN1nZGFvW1TiH2Puf0S8vx8PQmNwuRm8sBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPCPqDer0teoNutpSxzAapkUfxVqtqy0RRKQJZOgS0BMSU5bJg69rQW3V/4qwYdobT1tnShyHiOkqPmvoyoI4byYtlAEiUWwfAG/ABZHTUpbKEzHvJzgVtHspK0UoouRcjHBfF5BuJu20j46Sw/xfTAmsJ+/UpWkjquyz8tWsrHMhBC2LUEPIXTsnUapMy4lKCrIzNaoWNPiDdVi3NXFd60y62qdhM6rIK323RIHqeL4PKO24q7eBc5+YP8aO96wjHD1uyUOkmSYV7vVCK2Plml3u0n5lx/DvGpH+NP11MQZAkeGZwKG387PMGxfULCdRUPlsmTNsIgvsvb9Gxw7WUiNwFC7JFk0vL+pXI6b++wZklJOvhy5EsmgoShcDpEbwyAeV20oWoR0zlHkxVCemEgrntN6OTEUKyzp9yfXG8NclSJkNq+3H8qSiQixzsuwHBjKwi1FpMzSjKyfEcXsG8p6SUM432CCxXL1Cg3luooRdnQ2GHYpMRtXZyh3FIJoNwilw0JZuroYihZigkUm2MhjpJXq12YoTjSCzCrrgh2bmbaEa8s0YsVkw2BNZKHETFC6uvFQfmCCuMkE2ZQN0YezBDNtqNNgnGdNtMJmNP3KmUuqLBsKTp+MmeCkzyLYPHfNmGlDfRJMYuRaH6Mzp2xZN9ylTl1qnbUy5MHwQ/S81T1Hhl8CDL8fMARDMEwfMARDMEwfMIzwPmlNnLpybyg3Krdtgu6L1m4lIus6h4aJiwuxIWHq+67rY7MU7IqLek1t7ylyYSgWgy3vOMEKxv7dbL1c9qZ3GFu5zmNZIyZ3hrJlYrUepyiZ3mpdMIwC+xkqHiYmDk5e7F3KhWGXeLgdVZQl6s5GTG+LsVmx5jpFyB7vPcDhwbCBvJmHIw1VrJnu/MMvYDFfL2YIOQ4Z82XIGqk7WrpECe1GNag3K+xhjAZe8FWg35bMl2GFKqybIc98+HtXX5TwarRvWFj/Cgy1Yo6zGNY0xSgYi6lPnb/CWLf9nhEyHM17M4Sd/cbMgWGTetvbf3rDmtQQdwN7x/Q2hTDGUiF2nbtcOqbucHv7w5WLTamznaExbxQOYcHovWE1lJF4MBTu/aedzDpwbD9YdTkXazggTvhZPw+Gco2ixUe2XE/ffM0sl6RbEtNKp1otPOPjwlBQvcFnmNiwp9y5vo/R3XMkiCutFp4Y8GDYKN4Sf/bHxjA2y5fXwXQajaFHbzg0lB+CLwW7T3sdbktEsPBGLR4NaxryPPTrOSoUZnNnjgUODSfUW88Gg2ibDGM8u0Tn0FAYa+4itk1GDHu+ExbkwlBwPsfDI4YDHD2CyoMhGw+9xSmGG49Gj6DyYCgIKlmNjkfRWLtK9NAUF4ZshehNF0cVjVe/G92l48JQENnyAvU2RxwXcY2UE0OmiJGHXocHQzj3UMSPG0OhFLzrxEWHDFmeiUxK+TGUu8HLQAbrA+3UePKiwz1Hhhb1eqPCoY64eYsNIS+GgniL0eFsOvDycSHkxlDQy0QZJisaPTcukfJkKHcwYQ01wdEYelrCAVtuDIMz7ZqvPC2H4U3SbSdExI7148lQkAX2J899e41GkAkGJ1F5NxTk3JgNi3fziOBi5eHI2p47Q1kW6xWHxXAdEVwiEt284Mlw++XRxuShRKjvvoYnp0Zh7mJ84IRt9g0bClFIv08131Vm4SHRKDyvfFqKf0LMiaFs/d6+fk8ZPC2j8RsOXLz/SIo/Q0Ge2JSg1csmtFVjGJs18+uXOodPbmTfkAXoJk+x509f2FD4sVE6GvYGro+pYx07A86BYZBrLEk1se+6q9f5y8t8/jp175ieIlni0TPuXBgKwTmZSfHepNR/h1KzLTXrx/24MdwGUtAntceu4zjdYm1STz7nxavhu6X4zv/4AgZfhucAht8PGIIhGKYPGIIhGKYPGIIhGKYPGIIhGKYPGIIhGKYPGIIhGKbPzzDMHb/xk8nm+7wjRYG+gJBBwx/wXv0rr43w+A8MH9OW2iOoUaJekizWKDmpzoyqlE+rkcirodoaC+PWKYqZM0yquxYSdILKlKJzgmLm6q4l1s7bw36/6aRaa/uGGaudF9Q/PH7fdmV7ceWEK1HW6h+eVsNyV0nvhI6YvRqWJ9YhtR8FUXg8HsIs1iE9sZasrbbUkwSzV0s2J159PeDrr+n8A+py566/tnqA3qwmFb4/kWozkw0UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK6D/wBJPvWGswGYogAAAABJRU5ErkJggg==" alt="twitter"></img>
        <div >
            {Object.values(providers).map((provider)=>(
                <div className="flex flex-col items-center">
                    <img className="w-36 object-cover " src="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/twitter_logo_blue.png.twimg.768.png " alt="logo"></img>
                    <p className="text-center text-sm italic my-10">This app is created for learning purposes</p>
                    <button className="bg-sky-400 rounded-lg p-3 text-white hover:bg-sky-550" onClick={() => signIn(provider.id, { callbackUrl: "/" })}>Sign in with {provider.name}</button>
                </div>
            ))}
        </div>
    </div>
  )
}   

export async function getServerSideProps(){
    const providers = await getProviders();

    return {
        props:{
            providers,
        }
    }

}