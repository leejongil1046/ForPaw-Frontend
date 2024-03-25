import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProfileUI from "./ProfileEdit.presenter";

export default function ProfileEdit() {
  const router = useRouter();

  const navigateBack = () => {
    router.back();
  };

  return <ProfileUI navigateBack={navigateBack} />;
}
