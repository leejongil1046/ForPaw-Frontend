import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import ProfileUI from "./ProfileEdit.presenter";
import { districtName } from "../../../../../../src/components/commons/district/districtName";
import { useRegionSelection } from "../../../../../../src/components/commons/hooks/useRegionSelection";

export default function ProfileEdit() {
  const router = useRouter();
  const regions = districtName;

  const {
    selectedProvince,
    isProvinceDropdownOpen,
    isProvinceFocused,
    selectedDistrict,
    isDistrictDropdownOpen,
    isDistrictFocused,
    selectedSubdistrict,
    isSubdistrictDropdownOpen,
    isSubdistrictFocused,
    wrapperRef,
    handleProvinceSelect,
    handleDistrictSelect,
    handleSubdistrictSelect,
    toggleDropdown,
  } = useRegionSelection();

  const navigateBack = () => {
    router.back();
  };

  return (
    <ProfileUI
      navigateBack={navigateBack}
      wrapperRef={wrapperRef}
      regions={regions}
      selectedProvince={selectedProvince}
      isProvinceFocused={isProvinceFocused}
      isProvinceDropdownOpen={isProvinceDropdownOpen}
      toggleProvinceDropdown={() => toggleDropdown("province")}
      handleProvinceSelect={handleProvinceSelect}
      selectedDistrict={selectedDistrict}
      isDistrictFocused={isDistrictFocused}
      isDistrictDropdownOpen={isDistrictDropdownOpen}
      toggleDistrictDropdown={() => toggleDropdown("district")}
      handleDistrictSelect={handleDistrictSelect}
      selectedSubdistrict={selectedSubdistrict}
      isSubdistrictFocused={isSubdistrictFocused}
      isSubdistrictDropdownOpen={isSubdistrictDropdownOpen}
      toggleSubdistrictDropdown={() => toggleDropdown("subdistrict")}
      handleSubdistrictSelect={handleSubdistrictSelect}
    />
  );
}
