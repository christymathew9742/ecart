import React from "react";
import { constantsText } from "../../constant/constant";

const {
    ROUTES: {
       
    },
} = constantsText

const Footer = () => {
    return (
        <footer class="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 font-sans tracking-wide">
            <div class="py-2 px-2 text-center">
                <p class='text-gray-300 text-base mt-4 ml-6'>© 2024 ABCD Technologies Pvt. Ltd</p>
            </div>
        </footer>
    )
}

export default Footer