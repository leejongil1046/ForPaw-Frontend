import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProfileUI from "./ProfileEdit.presenter";
import { districtName } from "../../../../../../src/components/commons/district/districtName";

export default function ProfileEdit() {
  const [selectedProvince, setSelectedProvince] = useState("시/도 선택");
  const [isProvinceDropdownOpen, setIsProvinceDropdownOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  const district = districtName;
  // console.log(district);

  const provinces = Object.keys(districtName);

  const toggleProvinceDropdown = () => {
    setIsProvinceDropdownOpen(!isProvinceDropdownOpen);
    setIsFocused(!isFocused);
  };

  const handleProvinceSelect = (province) => {
    setSelectedProvince(province);
    setIsProvinceDropdownOpen(false);
    setIsFocused(!isFocused);
  };

  const navigateBack = () => {
    router.back();
  };

  return (
    <ProfileUI
      navigateBack={navigateBack}
      selectedProvince={selectedProvince}
      isProvinceDropdownOpen={isProvinceDropdownOpen}
      provinces={provinces}
      toggleProvinceDropdown={toggleProvinceDropdown}
      handleProvinceSelect={handleProvinceSelect}
      isFocused={isFocused}
    />
  );
}
