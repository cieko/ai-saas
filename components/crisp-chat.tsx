"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("807bc646-038c-42c1-b11f-def1995abde2");
    }, []);

    return null;
};
