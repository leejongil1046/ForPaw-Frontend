import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProfileUI from "./ProfileEdit.presenter";
import { districtName } from "../../../../../../src/components/commons/district/districtName";

export default function ProfileEdit() {
  const [selectedProvince, setSelectedProvince] = useState("시/도 선택");
  const [isProvinceDropdownOpen, setIsProvinceDropdownOpen] = useState(false);
  const [isProvinceFocused, setIsProvinceFocused] = useState(false);

  const [selectedDistrict, setSelectedDistrict] = useState("구/군/시");
  const [isDistrictDropdownOpen, setIsDistrictDropdownOpen] = useState(false);
  const [isDistrictFocused, setIsDistrictFocused] = useState(false);

  const [selectedSubdistrict, setSelectedSubdistrict] = useState("동/읍/면");
  const [isSubdistrictDropdownOpen, setIsSubdistrictDropdownOpen] =
    useState(false);
  const [isSubdistrictFocused, setIsSubdistrictFocused] = useState(false);

  const router = useRouter();

  const regions = districtName;

  function updateSelectionStates(setStateFuncs, values) {
    setStateFuncs.forEach((setFunc, index) => {
      setFunc(values[index]);
    });
  }

  const handleProvinceSelect = (province) => {
    updateSelectionStates(
      [
        setSelectedProvince,
        setIsProvinceDropdownOpen,
        setIsProvinceFocused,
        setSelectedDistrict,
        setSelectedSubdistrict,
      ],
      [province, false, false, "구/군/시", "동/읍/면"]
    );
  };

  const handleDistrictSelect = (district) => {
    updateSelectionStates(
      [
        setSelectedDistrict,
        setIsDistrictDropdownOpen,
        setIsDistrictFocused,
        setSelectedSubdistrict,
      ],
      [district, false, false, "동/읍/면"]
    );
  };

  const handleSubdistrictSelect = (subdistrict) => {
    updateSelectionStates(
      [
        setSelectedSubdistrict,
        setIsSubdistrictDropdownOpen,
        setIsSubdistrictFocused,
      ],
      [subdistrict, false, false]
    );
  };

  const toggleDropdown = (type) => {
    // 모든 드랍다운 상태를 false로 초기화
    setIsProvinceDropdownOpen(false);
    setIsDistrictDropdownOpen(false);
    setIsSubdistrictDropdownOpen(false);

    // 선택된 타입에 따라 해당 드랍다운 상태만 true로 설정
    switch (type) {
      case "province":
        setIsProvinceDropdownOpen(!isProvinceDropdownOpen);
        // province가 선택되면 항상 포커스 상태를 업데이트
        setIsProvinceFocused(!isProvinceFocused);
        break;
      case "district":
        if (selectedProvince !== "시/도 선택") {
          setIsDistrictDropdownOpen(!isDistrictDropdownOpen);
          // province가 선택되었을 때만 district의 포커스 상태를 업데이트
          setIsDistrictFocused(!isDistrictFocused);
        }
        break;
      case "subdistrict":
        if (
          selectedProvince !== "시/도 선택" &&
          selectedDistrict !== "구/군/시"
        ) {
          setIsSubdistrictDropdownOpen(!isSubdistrictDropdownOpen);
          // province와 district가 모두 선택되었을 때만 subdistrict의 포커스 상태를 업데이트
          setIsSubdistrictFocused(!isSubdistrictFocused);
        }
        break;
      default:
        break;
    }
  };

  const navigateBack = () => {
    router.back();
  };

  return (
    <ProfileUI
      navigateBack={navigateBack}
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
