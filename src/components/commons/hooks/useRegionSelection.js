import { useState, useEffect, useRef } from "react";

export const useRegionSelection = () => {
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

  const wrapperRef = useRef(null);

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
        setIsDistrictFocused(false);
        setIsSubdistrictFocused(false);
        break;
      case "district":
        if (selectedProvince !== "시/도 선택") {
          setIsDistrictDropdownOpen(!isDistrictDropdownOpen);
          // province가 선택되었을 때만 district의 포커스 상태를 업데이트
          setIsProvinceFocused(false);
          setIsDistrictFocused(!isDistrictFocused);
          setIsSubdistrictFocused(false);
        }
        break;
      case "subdistrict":
        if (
          selectedProvince !== "시/도 선택" &&
          selectedDistrict !== "구/군/시"
        ) {
          setIsSubdistrictDropdownOpen(!isSubdistrictDropdownOpen);
          // province와 district가 모두 선택되었을 때만 subdistrict의 포커스 상태를 업데이트
          setIsProvinceFocused(false);
          setIsSubdistrictFocused(false);
          setIsSubdistrictFocused(!isSubdistrictFocused);
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // 외부 클릭을 감지하는 함수
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        // 모든 드랍다운을 닫는 로직
        setIsProvinceDropdownOpen(false);
        setIsProvinceFocused(false);
        setIsDistrictDropdownOpen(false);
        setIsDistrictFocused(false);
        setIsSubdistrictDropdownOpen(false);
        setIsSubdistrictFocused(false);
      }
    }

    // 이벤트 리스너 등록
    document.addEventListener("mousedown", handleClickOutside);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // 빈 배열을 넘겨 컴포넌트 마운트 시에만 실행되도록 함

  return {
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
  };
};
