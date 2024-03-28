import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import ProfileUI from "./ProfileEdit.presenter";
import { districtName } from "../../../../../../src/components/commons/district/districtName";
import { useRegionSelection } from "../../../../../../src/components/commons/hooks/useRegionSelection";
import { useNickNameCheck } from "./hooks/useNickNameCheck";
import { fetchUserInfo } from "./ProfileEdit.queries";

export default function ProfileEdit() {
  const [currentNickName, setCurrentNickName] = useState("기존 닉네임");
  const [currentProvince, setCurrentProvince] = useState("시/도 선택");
  const [currentDistrict, setCurrentDistrict] = useState("구/군/시");
  const [currentSubdistrict, setCurrentSubdistrict] = useState("동/읍/면");
  const router = useRouter();
  const regions = districtName;

  // 컴포넌트 마운트 시 사용자 정보를 가져옵니다.
  useEffect(() => {
    const loadUserInfo = async () => {
      try {
        const userInfo = await fetchUserInfo();
        setCurrentNickName(userInfo.nickName);
        setCurrentProvince(userInfo.province);
        setCurrentDistrict(userInfo.district);
        setCurrentSubdistrict(userInfo.subdistrict);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    // loadUserInfo();
  }, []);

  const {
    nickName,
    isPossibleNickName,
    nickNameMsg,
    handleNickNameChange,
    verifyNickName,
  } = useNickNameCheck();

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
  } = useRegionSelection(currentProvince, currentDistrict, currentSubdistrict);

  const navigateBack = () => {
    router.back();
  };

  return (
    <ProfileUI
      navigateBack={navigateBack}
      currentNickName={currentNickName}
      nickName={nickName}
      isPossibleNickName={isPossibleNickName}
      nickNameMsg={nickNameMsg}
      handleNickNameChange={handleNickNameChange}
      verifyNickName={verifyNickName}
      regions={regions}
      wrapperRef={wrapperRef}
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
