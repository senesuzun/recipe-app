

import React from "react";
import {FaFacebookF, FaInstagram} from "react-icons/fa";
import {BsTwitter} from "react-icons/bs";
const Footer = () => {
    return (
        <div className="container pt-40">
            <div className="grid md:grid-cols-3 gap-16">
                <div className="space-y-4">
                    <h2 className="text-xl font-bold">About Us</h2>
                    <p className="leading-[1,8]">
                        jnrge lrgergeio rgnergn ergner gnelrngengn
                        jdnlng ksjngjj fkjsj ksdksj sjnfls nkjsnf
                        sjfnsfn sfnlksnfl  slnflskf lekfmlskefl slf llkf .
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-xl font-bold">Recipes</h2>
                    <ul className="space-y-2">
                        <li>Home</li>
                        <li>About</li>
                        <li>Recipes</li>
                        <li>Categories</li>
                        <li>Profile</li>
                    </ul>
                </div>

                <div>
                    <div className="flex gap-8 text-accent text-2xl pt-16">
                        <FaFacebookF />
                        <BsTwitter />
                        <FaInstagram />

                    </div>
                </div>


            </div>

        </div>
    )
}

export default Footer


